import React from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  container: {
    width: "30%",
    margin: "100px auto",
    border: "3px solid darkcyan",
    borderRadius: "5px",
    padding: "40px",
    alignSelf: "center",
    textAlign: "center",
    color: "darkcyan",
  },
  success: {
    fontSize: "24px",
    color: "green",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  text: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "darkcyan",
    color: "white",
    width: "200px",
    margin: "10px",
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
}));
const RegistrationSuccess = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.success}>
        Your Registration is Successful.
      </Typography>
      <Typography className={classes.text}>
        Your Registration Id and Temporary has been sent to your registered Mail
        Id.Click on Continue to proceed with Sign in process
      </Typography>
      <Button
        className={classes.button}
        type="submit"
        onClick={() => {
          console.log("Clicked");
          props.history.push("/change-password");
        }}
      >
        Continue
      </Button>
    </div>
  );
};
export default RegistrationSuccess;
