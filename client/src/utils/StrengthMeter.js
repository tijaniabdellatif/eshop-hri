import React from "react";

const StrengthMeter = (props) => {
  const pwdValidate = props.password;
  const initPwdChecker = () => {
    let pwdCheck = 0;
    let validateRegex = ["[A-Z]", "[a-z]", "[0-9]", "\\W"];
    validateRegex.forEach((regex, i) => {
      if (new RegExp(regex).test(pwdValidate)) {
        pwdCheck += 1;
      }
    });
    switch (pwdCheck) {
      case 0:
        return {
          strength: 0,
          val: "",
        };
      case 1:
        return {
          strength: 1,
          val: "Weak",
        };
      case 2:
        return {
          strength: 2,
          val: "Fair",
        };
      case 3:
        return {
          strength: 3,
          val: "Good",
        };
      case 4:
        return {
          strength: 4,
          val: "Strong",
        };
      default:
        return null;
    }
  };
  {
    props.actions(initPwdChecker().val);
  }
  return (
    <>
      <div className="wrapper mb-2">
        <progress
          className={`pwd-checker-bar strength-${initPwdChecker().val}`}
          value={initPwdChecker().strength}
          max="4"
        />
        <br />
        <p className="pwd-label">
          {props.password && (
            <div>
              <p className={`label text-base text-slate-500 strength-${initPwdChecker().val}`}>
                Password strength validation:
                <strong> {initPwdChecker().val} </strong>
              </p>
            </div>
          )}
        </p>
      </div>
    </>
  );
};
export default StrengthMeter;