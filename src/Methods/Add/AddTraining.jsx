import { useState, useEffect } from "react";
import moment from "moment";
import { Box, Button, FormControl, Input, InputLabel, Select, MenuItem } from "@mui/material"

export const AddTraining = ({ onCancel, onClose, addNew }) => {
    const [activity, setActivity] = useState('')
    const [date, setDate] = useState('')
    const [duration, setDuration] = useState(0)
    const [customer, setCustomer] = useState('')
    const [allCustomers, setAllCustomers] = useState([])

    // fetch all the customers in the database currently
    const fetchCustomers = () => {
        fetch(process.env.REACT_APP_CUSTOMERS_URL,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(response.status);
                }
            })
            .then(responseData => setAllCustomers(responseData.content))
            .catch(err => console.error(err))
    }

    // fetch customers on first load
    useEffect(() => {
        fetchCustomers();
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        const training = {
            activity: activity,
            date: moment(date).toISOString(),
            duration: duration,
            customer: customer
        }
        addNew(training)
        onClose()
    }


    return (

        <Box component='form' autoComplete="off" noValidate onSubmit={onSubmit}>

            <div className="form__input--wrapper">
                <FormControl>
                    <InputLabel htmlFor="activity">Training activity</InputLabel>
                    <Input id="activity" required onChange={e => setActivity(e.target.value)} />
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel htmlFor="selectCust" >Customer</InputLabel>
                    <Select
                        id="selectCust"
                        name='customer'
                        onChange={e => setCustomer(e.target.value)}
                        value={customer}
                        autoWidth
                        label='Customer'
                    >
                        {
                            allCustomers.map((customer, index) => (
                                <MenuItem key={index.toString()} value={customer.links[0].href}>
                                    {customer.firstname + ' ' + customer.lastname} </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </div>

            <div className="form__input--wrapper">
                <FormControl>
                    <InputLabel htmlFor="date">Date</InputLabel>
                    <Input id="date"  type='date' required onChange={e => setDate(e.target.value)} />
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="duration">Duration (in mins)</InputLabel>
                    <Input type="number" id="duration" required onChange={e => setDuration(e.target.value)} />
                </FormControl>
            </div>

            <div className="form__actions">
                <Button type="submit" variant="contained" color="success">
                    Submit
                </Button>
                <Button onClick={onCancel} color='warning'>
                    Cancel
                </Button>
            </div>

        </Box>
    )
}