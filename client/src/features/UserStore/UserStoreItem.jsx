import React, { useEffect } from "react";
import { myStyles } from "./storeStyle";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

export default function UserStoreItem({ getData }) {
  const { useState } = React;
  const [data, setData] = useState([]);

  useEffect(() => {
    const store_data = getData();
    console.log(store_data);
    store_data

      .then((response) => {
        console.log(response);
        if ("data" in response.data) {
          setData(response.data.data);
        } else {
          setData([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getData]);

  const classes = myStyles();

  if (!data.length) return <span>No items in the store...</span>;

  return data.map((entry) => (
    <Paper elevation={2} className={classes.paper} key={entry.itemName}>
      <Grid container direction="row" spacing={2}>
        <Grid item>
          <SendOutlinedIcon className={classes[entry.color]}></SendOutlinedIcon>
        </Grid>
        <Grid item xs sm container>
          <Grid item xs container direction="column">
            <Grid item xs container direction="column">
              <Grid item>
                <Typography gutterBottom variant="h6">
                  {entry.itemName}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">{entry.itemDesc}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{entry.price}</Typography>
            <button className={clsx(classes.button, "purchaseButton")}>
              Purchase
            </button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  ));
}
