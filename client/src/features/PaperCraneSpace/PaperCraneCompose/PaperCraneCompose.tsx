/**
 * Created by Jimmy Lan
 * Creation Date: 2020-11-09
 */
import React, { FunctionComponent } from "react";
import { FeatureContainerWithHeader } from "../../../common/components/FeatureContainerWithHeader/FeatureContainerWithHeader";
import { TextField } from "@material-ui/core";
import { useStyles } from "./PaperCraneCompose.style";
import { FormControlButtons } from "../../AccountSettings/components/FormControlButtons/FormControlButtons";
import clsx from "clsx";

interface OwnProps {}

type Props = OwnProps;

const PaperCraneCompose: FunctionComponent<Props> = ( props ) => {
  const classes = useStyles();
  return (
    <FeatureContainerWithHeader headerTitle="Compose" flexibleHeight>
      <form autoComplete="off" className={classes.form}>
        <TextField
          label="Title"
          variant="outlined"
          className={clsx( classes.formField, "composeTitle" )}
          required
          fullWidth
        />
        <TextField
          label="Content"
          variant="outlined"
          className={clsx( classes.formField, "composeContent" )}
          required
          fullWidth
          multiline
          rows={6}
        />
        <FormControlButtons
          className={classes.controlButtons}
          primaryText="Send"
          secondaryText="Discard"
        />
      </form>
    </FeatureContainerWithHeader>
  );
};

export { PaperCraneCompose };
