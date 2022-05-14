import { useState } from "react"
import { Box, Button, FormControl, Input, InputLabel } from "@mui/material"


export const UpdateCustomer = ({ onCancel, onClose, data, updateCust }) => {

    const [firstname, setFirstName] = useState(data.firstname)
    const [lastname, setLastName] = useState(data.lastname)
    const [address, setAddress] = useState(data.streetaddress)
    const [postcode, setPostcode] = useState(data.postcode)
    const [city, setCity] = useState(data.city)
    const [email, setEmail] = useState(data.email)
    const [phone, setPhone] = useState(data.phone)


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
        updateCust(customer)
        onClose()
    }

    return (
        <Box component='form' autoComplete="off" noValidate onSubmit={onSubmit}>

            <div className="form__input--wrapper">
                <FormControl>
                    <InputLabel shrink htmlFor="firstname">First name</InputLabel>
                    <Input id="firstname" value={firstname} required onChange={e => setFirstName(e.target.value)} />
                </FormControl>

                <FormControl>
                    <InputLabel shrink htmlFor="lastname">Last name</InputLabel>
                    <Input id="lastname" value={lastname} required onChange={e => setLastName(e.target.value)} />
                </FormControl>

            </div>

            <div className="form__input--wrapper">
                <FormControl>
                    <InputLabel shrink htmlFor="email">Email address</InputLabel>
                    <Input id="email" value={email} required onChange={e => setEmail(e.target.value)} />
                </FormControl>
                <FormControl>
                    <InputLabel shrink htmlFor="phone">Phone number</InputLabel>
                    <Input id="phone" value={phone} required onChange={e => setPhone(e.target.value)} />
                </FormControl>
            </div>

            <div className="form__input--wrapper">
                <FormControl>
                    <InputLabel shrink htmlFor="address">Street address</InputLabel>
                    <Input id="address" value={address} required onChange={e => setAddress(e.target.value)} />
                </FormControl>
                <FormControl>
                    <InputLabel shrink htmlFor="city">City</InputLabel>
                    <Input id="city" value={city} required onChange={e => setCity(e.target.value)} />
                </FormControl>
                <FormControl>
                    <InputLabel shrink htmlFor="postcode">Phone number</InputLabel>
                    <Input id="postcode" value={postcode} required onChange={e => setPostcode(e.target.value)} />
                </FormControl>
            </div>

            <div className="form__actions">
                <Button type="submit" variant="contained" color="success">
                    Submit
                </Button>
                <Button onClick={onCancel} color="warning">
                    Cancel
                </Button>
            </div>

        </Box>
    )
}