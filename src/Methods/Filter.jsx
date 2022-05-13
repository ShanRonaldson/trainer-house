import { TextField, Button } from '@mui/material';

export const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
        <TextField
            id="search"
            type="text"
            placeholder="Filter By Name"
            aria-label="Search Input"
            value={filterText}
            onChange={onFilter}
        />
        <Button type="button" onClick={onClear}>
            X
        </Button>
    </>
);