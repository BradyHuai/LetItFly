import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AuthPageContainer } from "../authentication/components/AuthPageContainer";
import { GrayOutArea } from "../authentication/components/GridImageCard";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Carousel from "react-bootstrap/Carousel";
import red from "../../images/red.png";
import blue from "../../images/blue.png";
import tiga from "../../images/tiga.png";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#1a2038",
    },
    carousel: {
        padding: 20,
        backgroundColor: "#ffffff",
        borderRadius: 12,
    },
}));

export default function GuestTutorial() {
    const classes = useStyles();

    return(
        <CssBaseline>
        <Paper className={classes.root}>
        <Carousel className={classes.carousel}>
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
        </Paper>
        </CssBaseline>
        
    );
}
