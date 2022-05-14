import { FormControl, Input, InputLabel, Select, MenuItem } from "@mui/material"


export const CustomerSelect = (setSelect) => {


    return (
        <FormControl>
            <InputLabel id="demo-simple-select-label">Select Customer</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Customer"
                onChange={e => setSelect(e.target.value)}
                autoWidth
            >
              
            </Select>

        </FormControl>
    )
}