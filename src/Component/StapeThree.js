import React, { useEffect } from "react";
import { stapeThreeDataList } from "./QueryData";
import FormHeader from "./FormHeader";
import { FormSubHeader } from "./FormSubHeader";
import Inputs from "./Inputs/Inputs";

const StapeThree = ({
  value,
  handelChange,
  previous,
  showError,
  setRequiredList,
  handelSubmit,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
    const reqiureds = stapeThreeDataList.filter((datas) => datas.require);
    setRequiredList(reqiureds);
  }, [setRequiredList]);

  return (
    <>
      <FormHeader />
      <FormSubHeader />
      <Inputs
        showError={showError}
        datalist={stapeThreeDataList}
        value={value}
        handelChange={handelChange}
        handelSubmit={handelSubmit}
        previous={previous}
      />
    </>
  );
};

export default StapeThree;
