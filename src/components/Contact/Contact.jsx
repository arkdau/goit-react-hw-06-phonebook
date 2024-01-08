import { useDispatch } from "react-redux";
import { deleteContact } from "./../../redux/actions";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div>
      {contact.name}: {contact.number}
      <button
        type="button"
        onClick={handleDelete}
      >
        Remove
      </button>
    </div>
  );
};
