import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import {Alert} from "react-bootstrap"

const Unmatchanswer = () => {
  const history = useHistory();
//   const result = history?.location.state;
const result = false

  // if(!history?.location.state){
  //     console.log("no");
  //     history.push("/match-couple")
  // }else{
  //     console.log("yed");
  // }

  // useEffect(() => {
  //     history.push("/match-couple")
  // }, [history])

  // console.log("histpry", history.location.state);
  return <div>{result? <p>History ace.</p>: <Alert className="mt-4" variant="danger">Something wrong. <span onClick={() => history.push("/")}>Click Here</span></Alert>}</div>;
};

export default Unmatchanswer;
