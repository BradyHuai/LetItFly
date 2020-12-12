/*
 * Created by Jimmy Lan
 * Creation Date: 2020-12-11
 */

import React, { FunctionComponent, useEffect, useState } from "react";
import { FormHeader } from "../../AccountSettings/components/FormHeader/FormHeader";
import { FeatureContainerWithHeader } from "../../../common/components/FeatureContainerWithHeader/FeatureContainerWithHeader";
import { Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { fetchPaperCrane } from "../../../services/serverApi";
import { useStyles } from "./PaperCraneRead.style";

interface OwnProps {
  title: string;
  content: string;
}

type Props = OwnProps;

const PaperCraneRead: FunctionComponent<Props> = (props) => {
  const { id } = useParams();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const classes = useStyles();

  useEffect(() => {
    fetchPaperCrane(id)
      .then((response) => {
        if (response.data.success) {
          setTitle(response.data.data.title);
          setContent(response.data.data.content);
        } else {
          alert(response.data.errors[0].message);
        }
      })
      .catch((error) => alert("Sorry, we cannot process this request now."));
  }, [id]);

  return (
    <FeatureContainerWithHeader headerTitle="Compose" flexibleHeight>
      <div className={classes.container}>
        <FormHeader title={title} className={classes.field} />
        <Typography variant="body1" className={classes.field}>
          {content}
        </Typography>
      </div>
    </FeatureContainerWithHeader>
  );
};

export { PaperCraneRead };
