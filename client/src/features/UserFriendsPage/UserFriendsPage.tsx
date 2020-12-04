/**
 * Created by Jimmy Lan
 * Creation Date: 2020-11-09
 */
import React, { FunctionComponent } from "react";
import { FeatureContainerWithHeader } from "../../common/components/FeatureContainerWithHeader/FeatureContainerWithHeader";
import { InfiniteScrollList } from "../../common/components/InfiniteScrollList/InfiniteScrollList";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import {
  AccountCircle as FriendIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";
import { useStyles } from "./UserFriendPage.style";
import FriendsTour from "../Onboarding/components/FriendsTour";

interface OwnProps {}

type Props = OwnProps;

const UserFriendsPage: FunctionComponent<Props> = ( props ) => {
  const classes = useStyles();

  return (
    <>
      <FriendsTour />
      <FeatureContainerWithHeader headerTitle="Friends" className={classes.root}>
        <InfiniteScrollList hasMore={false} loadMore={() => {}}>
          <ListItem button>
            <ListItemAvatar >
              <Avatar>
                <FriendIcon className={"friendInfo"} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Friend" />
            <ListItemSecondaryAction>
              <IconButton edge="end">
                <DeleteIcon className={"deleteFriend"} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </InfiniteScrollList>
      </FeatureContainerWithHeader>
    </>
  );
};

export { UserFriendsPage };
