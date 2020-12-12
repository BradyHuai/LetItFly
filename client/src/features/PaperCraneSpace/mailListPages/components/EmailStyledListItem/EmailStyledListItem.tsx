/**
 * Created by Jimmy Lan
 * Creation Date: 2020-11-09
 * Description: Email styled list used for paper crane space.
 */
import React, { FunctionComponent } from "react";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import {
  Delete as DeleteIcon,
  Send as PaperCraneIcon,
  StarBorder as StarIcon,
} from "@material-ui/icons";
import { useStyles } from "./EmailStyledListItem.style";
import clsx from "clsx";

interface OwnProps {
  title: string;
  style: string;
  unread: boolean;
  starred: boolean;
  onClick?: () => void;
  handleDeleteClick?: () => void;
  handleStarClick?: () => void;
}

type Props = OwnProps;

const EmailStyledListItem: FunctionComponent<Props> = ({
  title,
  style,
  unread,
  starred,
  onClick,
  handleDeleteClick,
  handleStarClick,
}: Props) => {
  const classes = useStyles();

  return (
    <ListItem button onClick={onClick}>
      <ListItemAvatar>
        <Avatar style={{ background: style }}>
          <PaperCraneIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        className={clsx({
          [classes.unreadText]: unread,
        })}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" onClick={handleDeleteClick} className="starButton">
          <StarIcon className={clsx({ [classes.starredIcon]: starred })} />
        </IconButton>
        <IconButton edge="end" onClick={handleStarClick} className="deleteButton">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export { EmailStyledListItem };
