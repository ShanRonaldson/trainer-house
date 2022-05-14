import { IconButton } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content";

import { UpdateModal } from "./UpdateModal";

const MySwal = withReactContent(Swal);

export const UpdateButton = ({ data, updateCust }) => {

    const showModal = () => {
        return (
            MySwal.fire({
                title: 'Edit Customer',
                html:
                    <UpdateModal
                        data={data}
                        updateCust={updateCust}
                        onCancel={() => Swal.close()}
                        onClose={() => Swal.close()}
                    />,
                showConfirmButton: false,
                width: 'auto',
            })
        )
    }
    return (
        <IconButton onClick={() => showModal()}>
            <EditIcon color='warning' />
        </IconButton>
    )
}