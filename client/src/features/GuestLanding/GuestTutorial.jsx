import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Carousel from "react-bootstrap/Carousel";
import { useHistory } from "../../hooks/useHistory";
import pic1 from "../../images/home-screen.png";
import pic2 from "../../images/home-inbox.png";
import pic3 from "../../images/inbox-screen.png";
import pic4 from "../../images/home-compose.png";
import pic5 from "../../images/compose-screen.png";
import pic6 from "../../images/helper.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#757de8",
  },
  carousel: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    width: 1156,
    height: 680,
    padding: 20,
    position: "absolute",
    display: "block",
  },
  button: {
    margin: theme.spacing(1),
    marginTop: "90vh",
  },
}));

export default function GuestTutorial() {
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = (e) => {
    history.push("/my");
  };

  return (
    <CssBaseline>
      <Paper className={classes.root}>
        <Carousel className={classes.carousel}>
          <Carousel.Item>
            <img className="d-block w-100" src={pic1} alt="First slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={pic2} alt="Third slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={pic3} alt="Third slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={pic4} alt="Third slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={pic5} alt="Third slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={pic6} alt="Third slide" />
            {/* <Carousel.Caption>
                        <h3>Helper Button</h3>
                    </Carousel.Caption> */}
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
        </div>
      </Paper>
    </CssBaseline>
  );
}
