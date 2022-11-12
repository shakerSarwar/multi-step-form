import React from "react";
import { useState } from "react";
import { initaleData, swithSteps } from "./InitailDataAndFunc";
import axios from "axios";
import {
  genaredDataList,
  secondStepsDataList,
  stapeThreeDataList,
} from "./QueryData";

const MultiForm = () => {
  const [states, setStates] = useState(initaleData);
  const [showError, setShowError] = useState([]);
  const [requiredList, setRequiredList] = useState([]);
  const [id, setId] = useState("");
  const [answer, setAnswer] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [response, setResponse] = useState("null");
  const { step } = states;
  const value = states;

  //concat all query data
  const allQueryData = genaredDataList.concat(
    secondStepsDataList,
    stapeThreeDataList
  );

  console.log("res from multiform", response);

  // process next stape
  const next = () => {
    const { step } = states;
    setStates({ ...states, step: step + 1 });
  };

  // process previous stape
  const previous = () => {
    const { step } = states;
    setStates({ ...states, step: step - 1 });
  };

  //go next setps
  const handelNext = () => {
    const errorList = [];
    for (let i = 0; i < requiredList.length; i++) {
      const inputeName = requiredList[i].name;
      const inputValue = value[inputeName];
      //if input fild is valuesImportantRelationship check for 7 anser else check one anser
      if (inputeName === "valuesImportantRelationship") {
        if (inputValue.length < 7) {
          errorList.push(inputeName);
        }
      } else {
        if (inputValue.length < 1) {
          errorList.push(inputeName);
        }
      }
    }
    if (errorList.length > 0) {
      setShowError(errorList);
      //show error label in alert
      alert(`Required Fild:\n ${errorList.map(
        (err) => allQueryData.find((data) => err === data?.name).label + `\n`
      )}
      `);
    } else {
      next();
    }
  };

  // submit from
  const handelSubmit = async () => {
    const errorList = [];
    for (let i = 0; i < requiredList.length; i++) {
      const inputeName = requiredList[i].name;
      const inputValue = value[inputeName];
      if (inputValue.length < 1) {
        errorList.push(inputeName);
      }
    }
    if (errorList.length > 0) {
      setShowError(errorList);
      //show error label in alert
      alert(`Required Fild:\n ${errorList.map(
        (err) => allQueryData.find((data) => err === data?.name).label + `\n`
      )}
      `);
    } else {
      try {
        setSubmitLoading(true);
        const res = await axios.post(
          //"https://guarded-inlet-71859.herokuapp.com/addData",
          //"http://localhost:9090/addData",
          //"https://arcane-fortress-43890.herokuapp.com/addData",
          //"https://localhost:5001/SingleSurvey",
          "http://couplesurveybackend-env.eba-cxjumfpr.me-south-1.elasticbeanstalk.com/SingleSurvey",
          value
        );
        if (res.status === 201) {
          setId(res.data._id);
          setAnswer(true);
          setResponse(res.data);
          setSubmitLoading(false);
          next();
        }
      } catch (e) {
        setResponse(null);
        setSubmitLoading(false);
        console.log(e.response);
      }
    }
  };

  // createNexFrom after submit from
  const createNexFrom = () => {
    setStates(initaleData);
  };

  // handel filed change
  const handelChange = (e) => {
    const isRequired = requiredList.find(
      (required) => required.name === e.target.name
    );
    if (isRequired) {
      if (e.target.value) {
        const item = showError.find((err) => err === e.target.name);
        //test
        if (item) {
          //at lest 7 item select for this query
          if (e.target.name === "valuesImportantRelationship") {
            if (value[e.target.name].length > 5) {
              const newError = showError.filter((err) => err !== item);
              setShowError(newError);
            }
          } else {
            const newError = showError.filter((err) => err !== item);
            setShowError(newError);
          }
        }
      } else {
        const item = showError.find((err) => err === e.target.name);

        if (!item) {
          setShowError([...showError, e.target.name]);
        }
      }
    }
    //if the fild is checkbox
    if (e.target.type === "checkbox") {
      const namess = e?.target?.name;
      if (e.target.checked) {
        const found = states[namess].find(
          (element) => element === e.target.value
        );
        if (!found) {
          setStates({
            ...states,
            [e.target.name]: [...states[namess], e.target.value],
          });
        }
      } else {
        const found = states[namess].find(
          (element) => element === e.target.value
        );
        const filter = states[namess].filter((element) => element !== found);
        setStates({ ...states, [e.target.name]: filter });
      }
      return;
    }
    setStates({ ...states, [e.target.name]: e.target.value });
  };

  return (
    <>
      {swithSteps(
        step,
        value,
        handelChange,
        previous,
        showError,
        requiredList,
        setRequiredList,
        handelSubmit,
        setShowError,
        createNexFrom,
        handelNext,
        id,
        answer,
        response,
        submitLoading
      )}
    </>
  );
};

export default MultiForm;
