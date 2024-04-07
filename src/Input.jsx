import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";

function Input(props) {
  let inputRef = useRef();
  const inputHandler = () => {
    if (inputRef.current.value == "") {
      inputRef.current.focus();
    } else {
      props.cityHandler(inputRef.current.value);
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <div className="row d-flex align-items-center justify-content-center mt-5 mb-4 px-5">
      <div className="col-md-6 col-10 p-0">
        <input
          type="text"
          className="form-control"
          ref={inputRef}
          autoFocus={true}
        />
      </div>
      <div className="col-md-1 col-2 pe-0">
        <button
          className="search-btn btn btn-primary fw-medium"
          onClick={inputHandler}
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
}

export default Input;
