import { useEffect, useState } from 'react';
import { Table } from '../Components/List';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Swal from 'sweetalert2';

const moment = require('moment')


export const Trainings = () => {
    const [data, setData] = useState([])

    // columns of table
    const columns = [
        { name: 'Activity', selector: row => row.activity, sortable: true, },
        { name: 'Date', selector: row => moment(row.date).format('YYYY-MM-DD'), sortable: true, },
        { name: 'Duration', selector: row => row.duration + ' mins', sortable: true, },
        { name: 'Customer', selector: row => row.customer.firstname + ' ' + row.customer.lastname },
        { name: '', selector: row => <IconButton onClick={() => handleDelete(row)}><DeleteIcon color='error' /> </IconButton> },
        { name: '', cell: row => <IconButton onClick={() => handleEdit(row)}><EditIcon color='warning' /></IconButton> }

    ]

    // get the trainings
    const fetchData = () => {
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
    }

    // first load
    useEffect(() => {
        fetchData();
    }, [])

    // delete a training
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
                fetch(process.env.REACT_APP_API + 'trainings/' + data.id, { method: 'DELETE' })
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

    // edit a training
    const handleEdit = (data) => {

    }

    // add a training
    const addTraining = (newTraining) => {
        fetch(process.env.REACT_APP_API + 'trainings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTraining)
        })
            .then(response => {
                if (response.ok) {
                    fetchData();
                }
            })
    }

    return (
        <>
            <Table
                data={data}
                cols={columns}
                filterChoice='activity'
                filterLabel={'Filter by Activity'}
                type='Training'
                addNew={(training) => addTraining(training)} />
        </>
    )
}

