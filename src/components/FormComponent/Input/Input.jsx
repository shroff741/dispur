import React from "react";
import { Field, ErrorMessage } from "formik";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  field: {
    textAlign: "center",
    fontSize: "16px",
    padding: "5px 10px",
    borderColor: "darkcyan",
    borderRadius: "5px",
    width: "250px",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "15px",
  },
  error: {
    fontSize: "16px",
    color: "red",
  },
}));

const Input = (props) => {
  const { label, type, name } = props;
  const classes = useStyles();
  let field = (
    <Field
      className={classes.field}
      placeholder={label}
      id={name}
      type={type}
      name={name}
    />
  );
  if (type === "textarea") {
    field = (
      <Field
        as="textarea"
        className={classes.field}
        placeholder="Complete address with ZIP Code"
        id={name}
        type={type}
        name={name}
      />
    );
  }
  return (
    <div className={classes.inputContainer}>
      {field}
      <ErrorMessage name={name}>
        {(errorMsg) => <div className={classes.error}>{errorMsg}</div>}
      </ErrorMessage>
    </div>
  );
};
export default Input;
