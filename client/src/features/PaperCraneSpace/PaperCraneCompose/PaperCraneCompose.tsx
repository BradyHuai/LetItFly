/**
 * Created by Jimmy Lan
 * Creation Date: 2020-11-09
 */
import React, { FunctionComponent, useEffect, useState } from "react";
import { FeatureContainerWithHeader } from "../../../common/components/FeatureContainerWithHeader/FeatureContainerWithHeader";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { useStyles } from "./PaperCraneCompose.style";
import { FormControlButtons } from "../../AccountSettings/components/FormControlButtons/FormControlButtons";
import clsx from "clsx";
import { AxiosResponse } from "axios";
import {
  fetchUserProperty,
  PropertyResponse,
} from "../../../services/serverApi/propertyApi";
import { composePaperCrane } from "../../../services/serverApi";
import { useHistory } from "../../../hooks/useHistory";

interface OwnProps {}

type Props = OwnProps;

const PaperCraneCompose: FunctionComponent<Props> = ( props ) => {
  const classes = useStyles();
  const [paperCraneStyles, setPaperCraneStyles] = useState<
    { value: string; name: string }[]
  >([]);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [currentStyle, setCurrentStyle] = useState<string>("");

  useEffect(() => {
    try {
      fetchUserProperty().then((response) => {
        const styles = response.data.data?.paperCraneStyles.map((entry) => ({
          name: entry.name,
          value: entry.value,
        }));
        if (!styles) {
          return;
        }
        setPaperCraneStyles(styles);
        setCurrentStyle(styles[0].value);
      });
    } catch (error) {
      alert("Sorry, we cannot process this request now.");
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCurrentStyle(event.target.value as string);
  };

  const history = useHistory();

  const handleSend = async () => {
    try {
      const response = await composePaperCrane({
        title,
        content,
        style: currentStyle,
      });
      if (response.data.success) {
        history.push("/my/space");
      } else {
        alert(response.data.errors[0].message);
      }
    } catch (error) {
      alert("Sorry, we can't process this request now.");
    }
  };

  return (
    <FeatureContainerWithHeader headerTitle="Compose" flexibleHeight>
      <form autoComplete="off" className={classes.form}>
        <TextField
          label="Title"
          value={title}
          variant="outlined"
          className={clsx( classes.formField, "composeTitle" )}
          onChange={(event) => setTitle(event.target.value)}
          required
          fullWidth
        />
        <TextField
          label="Content"
          value={content}
          variant="outlined"
          className={clsx( classes.formField, "composeContent" )}
          onChange={(event) => setContent(event.target.value)}
          required
          fullWidth
          multiline
          rows={6}
        />
        <FormControl variant="outlined" className={classes.formField} fullWidth>
          <InputLabel id="select-outlined-label">Style</InputLabel>
          <Select
            id="select-outlined"
            value={currentStyle}
            onChange={handleChange}
            label="Age"
          >
            {paperCraneStyles.map((entry) => (
              <MenuItem value={entry.value}>entry.value</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControlButtons
          className={classes.controlButtons}
          primaryText="Send"
          handlePrimaryButtonClick={handleSend}
          secondaryText="Discard"
        />
      </form>
    </FeatureContainerWithHeader>
  );
};

export { PaperCraneCompose };
