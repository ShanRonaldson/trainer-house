import { useEffect, useState } from 'react';
import { Table } from '../Components/List';

const columns = [
    { name: 'Full name', selector: row => row.firstname + ' ' + row.lastname, sortable: true, },
    { name: 'Email address', selector: row => row.email },
    { name: 'Phone number', selector: row => row.phone },
    { name: 'Address', selector: row => row.streetaddress, sortable: true, },
    { name: 'City', selector: row => row.city, sortable: true, },
    { name: 'Postal code', selector: row => row.postcode, sortable: true, },
    { name: 'Training Activities' }
]



export const Customers = () => {
    const [data, setData] = useState([])
    const [links, setLinks] = useState([])

    useEffect(() => {
        fetch('https://customerrest.herokuapp.com/api/customers',
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
                setData(responseData.content)
            }).catch(err => console.error(err))
    }, [])


    return (
        <>
            <Table data={data} cols={columns} filterChoice='firstname' expandedComponent={links} />
        </>
    )


}