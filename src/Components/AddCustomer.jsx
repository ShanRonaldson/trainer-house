import { useState } from "react"
import { Box, Button, FormControl, Input, InputLabel } from "@mui/material"


export const AddCustomer = ({ onCancel, onClose, addNew }) => {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [postcode, setPostcode] = useState('')
    const [city, setCity] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')


    const onSubmit = (e) => {
        e.preventDefault();
        const customer = {
            firstname: firstname,
            lastname: lastname,
            streetaddress: address,
            postcode: postcode,
            city: city,
            email: email,
            phone: phone
        }

        addNew(customer)
        onClose()

    }

    return (
        <Box component='form' autoComplete="off" noValidate onSubmit={onSubmit}>

            <div className="form__input--wrapper">
                <FormControl>
                    <InputLabel htmlFor="firstname">First name</InputLabel>
                    <Input id="firstname" required onChange={e => setFirstName(e.target.value)} />
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="lastname">Last name</InputLabel>
                    <Input id="lastname" required onChange={e => setLastName(e.target.value)} />
                </FormControl>

            </div>

            <div className="form__input--wrapper">
                <FormControl>
                    <InputLabel htmlFor="email">Email address</InputLabel>
                    <Input id="email" required onChange={e => setEmail(e.target.value)} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="phone">Phone number</InputLabel>
                    <Input id="phone" required onChange={e => setPhone(e.target.value)} />
                </FormControl>
            </div>

            <div className="form__input--wrapper">
                <FormControl>
                    <InputLabel htmlFor="address">Street address</InputLabel>
                    <Input id="address" required onChange={e => setAddress(e.target.value)} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="city">City</InputLabel>
                    <Input id="city" required onChange={e => setCity(e.target.value)} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="postcode">Phone number</InputLabel>
                    <Input id="postcode" required onChange={e => setPostcode(e.target.value)} />
                </FormControl>
            </div>

            <div className="form__actions">
                <Button type="submit">
                    Submit
                </Button>
                <Button onClick={onCancel}> Cancel</Button>
            </div>

        </Box>
    )
}