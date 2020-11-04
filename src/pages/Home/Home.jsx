import React from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../components/FormComponent/Input/Input";
const userData = localStorage.getItem("userData");
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

const Home = (props) => {
  console.log(userData);
  const classes = useStyles();
  const initialValues = {
    name: "",
    email: "",
    address: "",
    contactNumber: "",
  };
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email Address").required("Required"),
    address: Yup.string().required("Required"),
    contactNumber: Yup.string().matches(
      phoneRegExp,
      "Phone number is not valid"
    ),
  });
  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    onSubmitProps.setSubmitting(false);
    props.history.push("/registration-success");
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
              <Typography className={classes.header}>Register</Typography>
              <Input label="Name" name="name" type="text" />
              <Input label="Address" name="address" type="textarea" />
              <Input label="Email" name="email" type="email" />
              <Input label="Contact Number" name="contactNumber" type="text" />
              <Button
                className={classes.button}
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Register
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default Home;
