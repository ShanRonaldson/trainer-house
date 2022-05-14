import { AddCustomer } from "./AddCustomer";
import { AddTraining } from "./AddTraining";

export const AddModal = ({ type, onCancel, onClose, addNew }) => {
    if (type.toLowerCase() === 'customer') {
        return (
            <AddCustomer
                onCancel={onCancel}
                onClose={onClose}
                addNew={addNew}
            />
        )

    }
    else if (type.toLowerCase() === 'training') {
        return (
            <AddTraining
                onCancel={onCancel}
                onClose={onClose}
                addNew={addNew}
            />
        )

    }

}