import { useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import { CSVLink } from "react-csv";
import { ArrowDownward } from '@mui/icons-material';
import { FilterComponent } from './../Methods/Filter'
const sortIcon = <ArrowDownward />;


export const Table = ({ data, cols, filterChoice, expandedComponent }) => {

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
    } else{
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
            <>
                <CSVLink data={data} separator={";"}>
                    Export
                </CSVLink>

                <FilterComponent onFilter={e => setFilter(e.target.value)} filterText={filter} onClear={handleClear} />


            </>)
    }
        , [data, filter, resetPaginationToggle]);

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

