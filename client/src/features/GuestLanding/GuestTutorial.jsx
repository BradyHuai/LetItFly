import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Carousel from "react-bootstrap/Carousel";
import { useHistory } from "../../hooks/useHistory";
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
    button: {
        margin: theme.spacing(1),
        float: "right",
    }
}));

export default function GuestTutorial() {
    const classes = useStyles();
    const history = useHistory();

    const handleSubmit = (e) => {
        history.push("/my");
    }

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
       
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={handleSubmit}
                    >
                    FINISH
                </Button>
                <Button
                    color="secondary"
                    className={classes.button}
                    onClick={handleSubmit}
                    >
                    SKIP
                </Button>
            </div>
        </Paper>
        </CssBaseline>
        
    );
}
