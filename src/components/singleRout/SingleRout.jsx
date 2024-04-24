// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams } from "react-router-dom";

const SingleRout = () => {
  const { id } = useParams();
  console.log(id);
  return <div>SingleRout</div>;
};

export default SingleRout;
