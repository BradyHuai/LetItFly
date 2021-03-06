/**
 * Created by Jimmy Lan
 * Creation Date: 2020-11-03
 */
import React, { FunctionComponent, useState } from "react";
import { useStyles } from "./tabPanels.style";
import { Grid, TextField, Divider } from "@material-ui/core";
import { FormHeader } from "../FormHeader/FormHeader";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { FormControlButtons } from "../FormControlButtons/FormControlButtons";
import { FormDisabledEmailField } from "../FormDisabledEmailField/FormDisabledEmailField";

interface OwnProps {}

type Props = OwnProps;

const PersonalInfoPanel: FunctionComponent<Props> = (props) => {
  const classes = useStyles();
  const [birthdate, setBirthdate] = useState<Date | null>(new Date());

  const handleBirthdayChange = (date: Date | null) => {
    setBirthdate(date);
  };

  return (
    <form autoComplete="off" className={classes.root}>
      <FormHeader title="Basic Information" className={classes.formHeader} />
      <Grid container spacing={3} className={classes.formField}>
        <Grid item md={6} sm={12} xs={12}>
          <TextField label="First Name" variant="outlined" fullWidth required />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <TextField label="Last Name" variant="outlined" fullWidth required />
        </Grid>
      </Grid>
      <FormDisabledEmailField className={classes.formField} />
      <FormHeader title="More About You" className={classes.formHeader} />
      <KeyboardDatePicker
        margin="normal"
        id="date-picker-dialog"
        label="Date of Birth"
        format="MM/dd/yyyy"
        value={birthdate}
        inputVariant="outlined"
        fullWidth
        onChange={handleBirthdayChange}
        className={classes.dateField}
      />
      <Grid container spacing={3} className={classes.formField}>
        <Grid item md={6} sm={12} xs={12}>
          <TextField label="City" variant="outlined" fullWidth />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <TextField label="Region" variant="outlined" fullWidth />
        </Grid>
      </Grid>
      <TextField
        variant="outlined"
        label="Occupation"
        fullWidth
        className={classes.formField}
      />
      <Divider className={classes.divider} />
      <FormControlButtons primaryText="Save" secondaryText="Cancel" />
    </form>
  );
};

export { PersonalInfoPanel };
