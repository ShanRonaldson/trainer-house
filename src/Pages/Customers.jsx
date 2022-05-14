import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from 'react';
import { Table } from '../Components/List';
import Swal from 'sweetalert2';

export const Customers = () => {
    const [data, setData] = useState([])

    // columns of table
    const columns = [
        { name: 'Full name', selector: row => row.firstname + ' ' + row.lastname, sortable: true, },
        { name: 'Email address', selector: row => row.email },
        { name: 'Phone number', selector: row => row.phone },
        { name: 'Address', selector: row => row.streetaddress, sortable: true, },
        { name: 'City', selector: row => row.city, sortable: true, },
        { name: 'Postal code', selector: row => row.postcode, sortable: true, },
        { name: '', cell: row => <IconButton onClick={() => handleDelete(row)}><DeleteIcon color='error' /> </IconButton> },
        { name: '', cell: row => <IconButton onClick={() => handleEdit(row)}><EditIcon color='warning' /></IconButton> }
    ]

    // get the customers
    const fetchData = () => {
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
            }).then(responseData => {
                setData(responseData.content)
            }).catch(err => console.error(err))
    }

    // first load
    useEffect(() => {
        fetchData();
    }, [])

    // delete a customer
    const handleDelete = (data) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result => {
            if (result.isConfirmed) {
                fetch(data.links[1].href, { method: 'DELETE' })
                    .then(response => {
                        if (response.ok) {
                            Swal.fire('Deleted!',
                                'Your file has been deleted.',
                                'success')
                            fetchData();
                        }
                    })
            }
        }))
    }

    // edit a customer
    const handleEdit = (data) => {

    }

    // add a customer
    const addCustomer = (newCustomer) => {
        fetch(process.env.REACT_APP_API + 'customers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCustomer)
        })
            .then(response => {
                if (response.ok) {
                    fetchData()
                }
            })
    }


    return (
        <>
            <Table
                data={data}
                cols={columns}
                filterChoice='firstname'
                className='table'
                filterLabel={'Filter by Name'}
                type='Customer'
                addNew={(customer) => addCustomer(customer)}
            />
        </>
    )


}