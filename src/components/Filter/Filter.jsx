import { useDispatch } from "react-redux";
import { setStatusFilter } from "./../../redux/actions";

const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeInput = (evt) => {
    evt.preventDefault();
    const filter = evt.currentTarget.value;
    // setFilter(filter);
    dispatch(setStatusFilter(filter));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="find" onChange={handleChangeInput} />
    </>
  );
};

export default Filter;
