import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid, TextField } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { AuthPageContainer } from "../authentication/components/AuthPageContainer";
import { GrayOutArea } from "../authentication/components/GridImageCard";
import { useHistory } from "../../hooks/useHistory";
import { axios } from "../../services/axios";

const useStyles = makeStyles((theme) => ({
  nameForm: {
    marginLeft: "auto",
    marginRight: "auto",
    height: "100%",
    width: "100%",
  },
  title: {},
  button: {
    margin: theme.spacing(1),
    float: "right",
  },
}));

export default function GuestPage() {
  const classes = useStyles();
  const history = useHistory();

  const [name, setname] = useState({ fname: "", lname: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setname((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    if (name.fname === "" || name.lname === "") {
      alert("Invalid name");
    } else {
      (async () => {
        const url = "/api/users/roles/upgrade";

        const upgrade_request = await axios({
          method: "post",
          url: url,
          data: { firstName: name.fname, lastName: name.lname },
        });

        console.log(upgrade_request)
        if (upgrade_request.data.success) {
          history.push("/guesttut");
        } else {
          alert(upgrade_request.data.errors[0].message);
        }
      })().catch((e) => {
        alert("Sorry, can't process your requests.");
        console.log(e);
      });
    }
  };

  return (
    <CssBaseline>
      <AuthPageContainer grayOutArea={GrayOutArea.left}>
        <form autoComplete="off" className={classes.nameForm}>
          <Typography className={classes.title} variant="h6">
            PLEASE ENTER YOUR REAL NAME:
          </Typography>
          <Grid container spacing={3}>
            <Grid item md={6} sm={12} xs={12}>
              <TextField
                name="fname"
                label="First name"
                variant="outlined"
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <TextField
                className={classes.textfield}
                name="lname"
                label="Last name"
                variant="outlined"
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
          </Grid>
          {/* tour */}
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleSubmit}
          >
            EXPLORE
          </Button>
        </form>
      </AuthPageContainer>
    </CssBaseline>
  );
}
