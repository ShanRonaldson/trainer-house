import { TextField, Button } from '@mui/material';

export const FilterComponent = ({ filterText, onFilter, onClear, label }) => (
    <div className='grid2x1'>
        <TextField
            id="search"
            type="text"
            label={label}
            value={filterText}
            onChange={onFilter}
            margin='dense'
            focused
            color='secondary'
            size='small'
        />
        <Button type="button" onClick={onClear} variant="contained" color='secondary' size='small'>
            Clear
        </Button>
    </div>
);