import { useEffect, useState } from 'react';
import { Table } from '../Components/List';

const moment = require('moment')

const columns = [
    { name: 'Activity', selector: row => row.activity, sortable: true, },
    { name: 'Date', selector: row => moment(row.date).format('YYYY-MM-DD'), sortable: true, },
    { name: 'Duration', selector: row => row.duration + ' mins', sortable: true, },
    { name: 'Customer', selector: row => row.customer.firstname + ' ' + row.customer.lastname}
]

export const Trainings = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(process.env.REACT_APP_TRAININGS_URL,
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
            }).then(responseData => {
                setData(responseData)
            }).catch(err => console.error(err))
    }, [])

    return (
        <>
            <Table data={data} cols={columns} filterChoice='activity' filterLabel={'Filter by Activity'} />
        </>
    )
}

