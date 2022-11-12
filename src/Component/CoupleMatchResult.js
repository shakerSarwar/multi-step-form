import React, { useState } from "react";
import {
  genaredDataList,
  stapeThreeDataList,
  secondStepsDataList,
} from "./QueryData";

const CoupleMatchResult = (props) => {
  const { result } = props;
  const [showUnMatch, setShowUnMatch] = useState(false);
  const queryData = genaredDataList.concat(
    secondStepsDataList,
    stapeThreeDataList
  );

  // const unMatchQuestion = (fildName) => {
  //   // console.log(fildName);
  //   // console.log(queryData);
  //   const fild = queryData.find(
  //     (data) => data.name && data.name.toLowerCase() == fildName.toLowerCase()
  //   );
  //   console.log(fild);
  //   console.log("Oparetion Complete");
  // };

  return (
    <div className="pb-5 mb-3">
      <div>
        {result && (
          <div>
            {/* <h6>firstName : {result.firstName}</h6>
          <h6>secondName : {result.secondName}</h6> */}
            {/* <h6>totalAnswers : {result.totalAnswers}</h6> */}
            {/* <h6>
              matchAnswers :{" "}
              <span className="text-danger">{result.matchAnswers}</span>
            </h6> */}
            {/* <h6>
              unMatchAnswers : {result.totalAnswers - result.matchAnswers}
            </h6> */}
            {/* {result.firstName && <h6>{result.firstName}</h6>}
            {result.secondName && <h6>{result.secondName}</h6>} */}
            {result.commonText && <h6>{result.commonText}</h6>}
            {result.harmonyCoupleText && <h6>{result.harmonyCoupleText}</h6>}
            {result.sexNeedsText && <h6>{result.sexNeedsText}</h6>}
            {result.sameGiverTakerText && <h6>{result.SameGiverTakerText}</h6>}
            {result.sameLoveLanguageText && (
              <h6>{result.SameLoveLanguageText}</h6>
            )}
            {result.SameHabitsText && <h6>{result.SameHabitsText}</h6>}
            {result.samePrimaryNeedText && (
              <h6>{result.samePrimaryNeedText}</h6>
            )}
            {result.sameSecondNeedText && <h6>{result.sameSecondNeedText}</h6>}
            {/* <h6>sexNeedsText : {result.sexNeedsText}</h6> */}
            {/* <h6>sameGiverTakerText : {result.sameGiverTakerText}</h6> */}
            {/* <h6>sameLoveLanguageText : {result.sameLoveLanguageText}</h6>
          <h6>sameHabitsText : {result.sameHabitsText}</h6> */}
            {/* <h6>samePrimaryNeedText : {result.samePrimaryNeedText}</h6>
          <h6>sameSecondNeedText : {result.sameSecondNeedText}</h6> */}
          </div>
        )}
        {/* <h3>
        Match between: <b className="text-danger">{result?.percent}%</b>
      </h3>
      <h5>
        Answer Match : <b>{result?.matchCount}</b>
      </h5>
      <div>
        {result?.unmatchArray.map((res, index) => (
          <div className="bg-white rounded p-2 mb-2" key={index}>
            <p className="mb-0">Field Name: {res.fildName}</p>
            <p className="mb-0">
              First Answer:{" "}
              {typeof res.firstAnswer === "object"
                ? res.firstAnswer.map((r) => r)
                : res.firstAnswer}
            </p>
          </div>
        ))}
      </div> */}
      </div>
      <div className="d-flex align-items-center justify-content-center mt-4">
        <div className="d-flex align-items-center">
          <div className="order-1">
            <h3 className="res_percent">{result.percentageMatchAnswers}%</h3>
          </div>
          <div className="ltr ms-3 res_box">
            <h6 className="text-uppercase fw-bold mb-3 border-botttom d-flex justify-content-between">
              <span>
                <span className="color-blue">דומה</span>
                <span className="ms-2">🙂</span>
              </span>
              <span>{result.matchAnswers}</span>
            </h6>
            <h6
              className="text-uppercase fw-bold mb-3 border-botttom d-flex justify-content-between cursor_pointer"
              onClick={() => setShowUnMatch(!showUnMatch)}
            >
              <span className="text-underline text-danger ">
                <span className="">שונה</span>
                <span className="ms-2">🙃</span>
              </span>
              <span className="ms-5 ps-5">
                {result.totalAnswers - result.matchAnswers}
              </span>
            </h6>
            {/* <h6 className="text-uppercase fw-bold mb-3 border-botttom d-flex justify-content-between">
              <span>
                <span className="color-blue">find out</span>
                <span className="ms-2">🐻</span>
              </span>
              <span className="ms-5 ps-5">{result.matchAnswers}</span>
            </h6> */}
          </div>
        </div>
      </div>
      {/* unmatch answer */}
      <div className={showUnMatch ? "d-block" : "d-none"}>
        {result.unMatchAnswers.length > 0 &&
          result.unMatchAnswers.map((ans, index) => (
            <div className="unmatch_res" key={index}>
              {/* <h6>{ans.fieldName}</h6> */}
              {/* <h6>{unMatchQuestion(ans?.fieldName)}</h6> */}
              <h6>
                {
                  queryData.find(
                    (data) =>
                      data.name &&
                      data.name.toLowerCase() === ans.fieldName.toLowerCase()
                  )?.label
                }
              </h6>
              {/* {
  const qes = queryData.filter(data => data.name === ans.fieldName)
} */}
              <h6>
                {result.firstName} : {ans.firstAnswer}
              </h6>
              <h6>
                {result.secondName} : {ans.secondAnswer}
              </h6>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CoupleMatchResult;

/**
 * {"matchAnswers":39,"unMatchAnswers":[{"fieldName":"EatHealthy","firstAnswer":"1","secondAnswer":"5"},{"fieldName":"ListenInSpareTime","firstAnswer":"הרצאות","secondAnswer":"פודקאסט;ספרי אודיו"},{"fieldName":"ExpressEmotionsVerbally","firstAnswer":"1","secondAnswer":"3"},{"fieldName":"CoupleJointActivity","firstAnswer":"לא חייבים","secondAnswer":"פעם בשבוע"},{"fieldName":"ReasonsForTheSuccess","firstAnswer":"עמיתים לעבודה","secondAnswer":"מזל;משפחה קרובה"},{"fieldName":"MainCauseOfFailure","firstAnswer":"בן/בת זוג","secondAnswer":"גנים טובים"},{"fieldName":"ImportantThingInLife","firstAnswer":"לתרום לזולת","secondAnswer":"להרגיש משמעותי שמערכים אותי"},{"fieldName":"YouToBeManagerOrManager","firstAnswer":"1","secondAnswer":"3"},{"fieldName":"CloseRelationshipsYouGivingParty","firstAnswer":"1","secondAnswer":"3"},{"fieldName":"NeedToGiveToOthers","firstAnswer":"1","secondAnswer":"3"},{"fieldName":"DonateMoneyToCharity","firstAnswer":"כן","secondAnswer":"לא"},{"fieldName":"ContributingToOthersEssential","firstAnswer":"1","secondAnswer":"3"}],"percentageMatchAnswers":76,"totalAnswers":51,"firstName":"dfhggh","secondName":"בדיקהsoaduo","harmonyCoupleText":"","sexNeedsText":"לdfhggh יש צורך מיני יותר חזק מבינכם.","commonText":"התשובות יצאו לרוב שונות בינכם, מוזמנים לראות את התשובות השונות.","sameGiverTakerText":"","sameLoveLanguageText":"","sameHabitsText":"","samePrimaryNeedText":"","sameSecondNeedText":""
 */
