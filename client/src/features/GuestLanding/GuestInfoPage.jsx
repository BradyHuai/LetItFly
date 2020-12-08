import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid, TextField } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
    //   marginTop: ,
    //   marginLeft: ,
    //   marginBottom: ,
      height: "100%",
      width: "70%",
    //   textAlign: "left",
    },
    title: {

    },
    button: {

    }
}));

export default function GuestPage() {
    const classes = useStyles();

    const [name, setname] = useState({fname: "", lname: ""})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setname((previousData) => ({
          ...previousData,
          [name]: value,
        }));
      };

    const handleSubmit = (e) => {
        if (name.fname === "" || name.lname === ""){
            alert("Invalid name");
        }
        else {

        }
    }

    return(
        <div className={classes.root}>
            <CssBaseline>
                <Typography className={classes.title}>PLEASE ENTER YOUR REAL NAME:</Typography>
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
                    className={classes.button}
                    onClick={handleSubmit}
                    >
                    EXPLORE
                </Button>
            </CssBaseline>
        </div>
        
    );
}
