import React from "react";
import classes from "./Input.css";

const input = (props) => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];
  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <div>
          <input
            id={
              props.elementConfig.placeholder === "Hobbie"
                ? "Hobbie"
                : "input"
            }
            className={inputClasses.join(" ")}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          ></input>
        </div>
      );

      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    case "file":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          type="file"
          accept="image/*"
          data-max-size="2048"
          id="fileUploader"
          onChange={props.changed}
        />
      );
      break;
    case "checkbox":
      inputElement = (
        <input
          className={inputClasses.join("float-left")}
          {...props.elementConfig}
          type="checkbox"
          onChange={props.changed}
        />
      );

    default:
      inputElement = (
        <span>
          <input
            className={inputClasses.join(" ")}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
          <label>Terms and condition</label>
        </span>
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.elementConfig.placeholder}</label>
      {inputElement}
    </div>
  );
};

export default input;
