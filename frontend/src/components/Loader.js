import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="d-flex align-items-center justify-content-center h-100 w-100">
      <Spinner animation="grow" />
    </div>
  );
};

export default Loader;
