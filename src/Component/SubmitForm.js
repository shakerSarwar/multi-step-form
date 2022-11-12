import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SaveAnswerModal from "./SaveAnswerModal";

const keys = [
  "giverTakerText",
  "primaryNeedText",
  "secondNeedText",
  "loveLanguageText",
  "strongHabitsText",
  "singleId",
];

const SubmitForm = ({ createNexFrom, id, value, answer, response }) => {
  // const response = [];

  // if (value) {
  //   for (let val in value) {
  //     if (val === "step") {
  //       continue;
  //     }

  //     if (typeof value[val] === "object") {
  //       const asnwer = value[val].join();
  //       const obj = { key: val, value: asnwer };
  //       response.push(obj);
  //     }

  //     const obj = { key: val, value: value[val] };
  //     response.push(obj);
  //   }
  // }

  const history = useHistory();

  //modal here
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const saveRestlt = () => {
    handleShow();
  };

  return (
    <>
      <div className=" mt-4 p-4 rounded roubded-7px before__border  bg-white">
        <h2>בדיקת התאמה לזוגיות ארוכת טווח</h2>
        <p>Your response has been recorded.</p>
        {/* <p>
          Your Id <span className="text-danger fw-bold"> {id}</span>
        </p> */}
        <button className="linkBtn" onClick={createNexFrom}>
          Submit another response
        </button>
      </div>
      {/* {answer && ( */}
      <div>
        <h3 className="text-danger">Your Answer</h3>
        {/* <div>
          {
            response.length > 0 && response.map((res, index) => <div key={index}>
              <h5>{res.key}:<span className="text-danger"> {res.value}</span></h5>              
            </div>)
          }
        </div> */}
        <div>
          {/* {keys.map((key, index) => (
            <div key={index}>
              <p
                className={`fw-bold ${
                  key === "singleId" ? "cursor_pointer" : " "
                }`}
                onClick={() =>
                  key === "singleId" && history.push("/match-couple")
                }
              >
                {key}
                <span className="text-danger">.{response[`${key}`]}</span>
              </p>
            </div>
          ))} */}
          {response.giverTakerText && (
            <p className="fw-bold">
              <span className="text-danger">{response.giverTakerText}</span>
            </p>
          )}
          {response.primaryNeedText && (
            <p className="fw-bold">
              <span className="text-danger">{response.primaryNeedText}</span>
            </p>
          )}
          {response.secondNeedText && (
            <p className="fw-bold">
              <span className="text-danger">{response.secondNeedText}</span>
            </p>
          )}
          {response.loveLanguageText && (
            <p className="fw-bold">
              <span className="text-danger">{response.loveLanguageText}</span>
            </p>
          )}
          {response.strongHabitsText && (
            <p className="fw-bold">
              <span className="text-danger">{response.strongHabitsText}</span>
            </p>
          )}
          {response.singleId && (
            <p className="fw-bold">
              מספר מזהה:{" "}
              <span className="text-danger">{response.singleId}</span>
            </p>
          )}
          <p
            onClick={() =>saveRestlt()}
            className="fw-bold cursor_pointer text-primary"
          >
            לשמור תוצאה
          </p>
          <p
            className="fw-bold cursor_pointer text-primary"
            onClick={() =>
              history.push(`/match-couple?singleId=${response.singleId}`)
            }
          >
            מעבר למילוי זוגי
          </p>
        </div>
        <SaveAnswerModal
          show={show}
          handleShow={handleShow}
          handleClose={handleClose}
        />
      </div>
      {/* )} */}
    </>
  );
};

export default SubmitForm;

/**
 * {"giverTakerText":"את/ה טיפוס שמחפש/ת איזון בין לתת ללקבל, התפיסה היא שאם הצד השני יתן אז גם את/ה תתן.","primaryNeedText":"את/ה צריך/ה להרגיש משמעותי/ת שיקשיבו ויראו אותך ותקבל/י הכרה מכולם, את/ה צריך/ה להרגיש מיוחד ויחודי לעומת אנשים אחרים.","secondNeedText":"את/ה צריך/ה להרגיש תרומה ונתינה בחיים שלך, יש לך רצון לשרת, לעזור ולתת כדי לתמוך באחרים.","loveLanguageText":"חשוב לך בקשר זוגי לקבל מתנות, כביטוי של התחשבות השקעה ואיכפתיות מהצד השני.","strongHabitsText":null,"singleId":"hgff69"}
 */
