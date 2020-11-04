import React from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../FormComponent/Input/Input";
const useStyles = makeStyles((theme) => ({
  title: {
    width: "40%",
    margin: "100px auto",
    fontSize: "50px",
    fontWeight: "bold",
    textAlign: "center",
    color: "darkcyan",
  },
  form: {
    width: "35%",
    margin: "100px auto",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    border: "solid 2px darkcyan",
    borderRadius: "15px",
    alignItems: "center",
    boxShadow: "0px 0px 3px darkcyan",
  },
  header: {
    fontSize: "32px",
    fontWeight: "blold",
    color: "darkcyan",
    marginBottom: "10px",
  },
  button: {
    backgroundColor: "darkcyan",
    color: "white",
    width: "200px",
    "&:hover": {
      backgroundColor: "white",
      fontWeight: "bold",
      border: ".5px solid darkcyan",
      color: "darkcyan",
    },
    "&:active": {
      backgroundColor: "white",
      fontWeight: "bold",
      border: ".5px solid darkcyan",
      color: "darkcyan",
    },
  },
  link: {
    marginTop: "10px",
    color: "darkcyan",
  },
}));

const RegistrationPage = (props) => {
  const classes = useStyles();
  const initialValues = {
    registrationId: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  const regId = /^[0-9]{5}$/;
  const validationSchema = Yup.object({
    registrationId: Yup.string()
      .matches(regId, "Invalid Registration Id")
      .required("Required"),
    oldPassword: Yup.string().required("Required"),
    newPassword: Yup.string()
      .required("Required")
      .min(6, "Password too Short")
      .notOneOf(
        [Yup.ref("oldPassword")],
        "Should be different from old password"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), ""], "Passwords must Match")
      .required("Required"),
  });
  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    onSubmitProps.setSubmitting(false);
    props.history.push("/home");
  };

  return (
    <div>
      <Typography className={classes.title}>Dispur Wireless</Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form className={classes.form}>
              <Typography className={classes.header}>
                Change Password
              </Typography>
              <Input
                label="Registration ID"
                name="registrationId"
                type="text"
              />
              <Input label="Old Password" name="oldPassword" type="password" />
              <Input label="New Password" name="newPassword" type="password" />
              <Input
                label="Confirm Your Password"
                name="confirmPassword"
                type="password"
              />
              <Button
                className={classes.button}
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Signin
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default RegistrationPage;
