import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getMoviesForNameAction } from "../redux/action";

const SearchForm = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const onChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getMoviesForNameAction(inputValue));
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        type="form"
        label="Type"
        value={inputValue}
        onChange={onChange}
        onSubmit={onSubmit}
        fullWidth={true}
      />
    </form>
  );
};

export default SearchForm;
