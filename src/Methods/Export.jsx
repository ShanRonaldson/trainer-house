import { CSVLink } from "react-csv";
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCsv } from '@fortawesome/free-solid-svg-icons'



export const Export = ({ data }) => {

    return (
        <Button variant='outlined' color='secondary' size="small" style={{alignSelf: 'center'}}
            startIcon={<FontAwesomeIcon icon={faFileCsv} sx={{padding: 5}} />}
        >
            <CSVLink data={data} separator={";"}>
                Export
            </CSVLink>
        </Button>
    )
}

//