import { useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { FilterComponent } from './../Methods/Filter'
import { Export } from './../Methods/Export';
import { AddButton } from './../Methods/Add/AddButton';

const sortIcon = < KeyboardArrowDownIcon />

export const Table = ({ data, cols, filterChoice, filterLabel, type, addNew }) => {

    const [filter, setFilter] = useState('')
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false)

    let filteredNames
    if (filterChoice.toLowerCase() === 'firstname') {
        filteredNames = data.filter(
            item => item.firstname && item.firstname.toLowerCase().includes(filter.toLocaleLowerCase())
        )
    } else if (filterChoice.toLowerCase() === 'activity') {
        filteredNames = data.filter(
            item => item.activity && item.activity.toLowerCase().includes(filter.toLocaleLowerCase())
        )
    } else {
        filteredNames = data;
    }

    const actionsMemo = useMemo(() => {
        const handleClear = () => {
            if (filter) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilter('');
            }
        };

        return (
            <div className='grid3x1'>
                <AddButton type={type} addNew={addNew}/>
                <Export data={data} />
                <FilterComponent
                    label={filterLabel}
                    onFilter={e => setFilter(e.target.value)}
                    filterText={filter}
                    onClear={handleClear} />
            </div>)
    }
        , [data, filter, resetPaginationToggle, filterLabel, type, addNew]);

    return (
        <>
            <DataTable
                columns={cols}
                data={filteredNames}
                pagination
                paginationResetDefaultPage={resetPaginationToggle}
                fixedHeader
                fixedHeaderScrollHeight="700px"
                dense
                sortIcon={sortIcon}
                actions={actionsMemo}
                highlightOnHover
                striped
                persistTableHead
            />
        </>
    )
}

