import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid, TextField } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { AuthPageContainer } from "../authentication/components/AuthPageContainer";
import { GrayOutArea } from "../authentication/components/GridImageCard";
import Carousel from "react-bootstrap/Carousel";
import red from "../../images/red.png";
import blue from "../../images/blue.png";
import tiga from "../../images/tiga.png";

const useStyles = makeStyles((theme) => ({
    nameForm: {
      marginLeft: "auto",
      marginRight: "auto",
      height: "100%",
      width: "100%",
    },
    title: {

    },
    button: {
        margin: theme.spacing(1),
        float: "right",
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
        <CssBaseline>
        <AuthPageContainer grayOutArea={GrayOutArea.left}>
            <form autoComplete="off" className={classes.nameForm}>
                <Typography className={classes.title} variant="h6" >PLEASE ENTER YOUR REAL NAME:</Typography>
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
            <div style={{ width: 1000, height: 200 }}>
                <Carousel>
                    <Carousel.Item>
                    <img className="d-block w-100" src={tiga} alt="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="d-block w-100" src={red} alt="Third slide" />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="d-block w-100" src={blue} alt="Third slide" />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </AuthPageContainer>
        </CssBaseline>
        
    );
}
