import { Button } from "@mui/material"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content";

import { AddModal } from "./AddModal";

const MySwal = withReactContent(Swal);


export const AddButton = ({ type, addNew }) => {

    const showModal = () => {
        return (
            MySwal.fire({
                title: 'Add new ' + type,
                html:
                    <AddModal
                        type={type}
                        addNew={addNew}
                        onCancel={() => Swal.close()}
                        onClose={() => Swal.close()}
                    />
                ,
                showConfirmButton: false
            })
        )
    }

    return (
        <>
            <Button
                color="primary"
                variant="contained"
                size="small"
                style={{ alignSelf: 'center' }}
                onClick={() => showModal()}
            >
                Add
            </Button>

        </>
    )
}