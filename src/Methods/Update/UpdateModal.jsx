import { UpdateCustomer } from "./UpdateCustomer";

export const UpdateModal = ({ data, updateCust, onCancel, onClose }) => {
    return (
        <UpdateCustomer
            onCancel={onCancel}
            onClose={onClose}
            updateCust={updateCust}
            data={data}
        />
    )
}