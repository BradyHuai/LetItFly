/**
 * Created by Jimmy Lan
 * Creation Date: 2020-11-05
 */
import React, { FunctionComponent } from "react";

import {
  deletePaperCrane,
  markPaperCrane,
  PaperCraneInfo,
} from "../../../services/serverApi";
import { FeatureContainerWithHeader } from "../../../common/components/FeatureContainerWithHeader/FeatureContainerWithHeader";
import { InfiniteScrollList } from "../../../common/components/InfiniteScrollList/InfiniteScrollList";
import { EmailStyledListItem } from "./components/EmailStyledListItem/EmailStyledListItem";
import { usePaperCraneList } from "./hooks";

interface OwnProps {}

type Props = OwnProps;

const SpaceInboxPage: FunctionComponent<Props> = (props) => {
  const [list, hasMore, fetchNextData, clearList] = usePaperCraneList(
    "received"
  );

  const handleDeleteClick = async (id: string) => {
    try {
      const response = await deletePaperCrane(id);
      if (response.data.success) {
        clearList();
      } else {
        alert(response.data.errors[0].message);
      }
    } catch (error) {
      alert("Sorry, we can't process your request now.");
    }
  };

  const handleStarredClick = async (id: string, isStarred: boolean) => {
    try {
      const response = await markPaperCrane(id, { isStarred: !isStarred });
      if (response.data.success) {
        clearList();
      } else {
        alert(response.data.errors[0].message);
      }
    } catch (error) {
      alert("Sorry, we can't process your request now.");
    }
  };

  return (
    <FeatureContainerWithHeader headerTitle="Inbox" className="inboxContent">
      <InfiniteScrollList
        hasMore={hasMore}
        loadMore={fetchNextData}
        useWindow={false}
      >
        {list.map((paperCrane: PaperCraneInfo, index: number) => (
          <EmailStyledListItem
            title={paperCrane.title}
            style={paperCrane.style}
            unread={!!paperCrane.isUnread}
            starred={!!paperCrane.isStarred}
            handleStarClick={() =>
              handleStarredClick(paperCrane.id, !!paperCrane.isStarred)
            }
            handleDeleteClick={() => handleDeleteClick(paperCrane.id)}
            key={index}
          />
        ))}
      </InfiniteScrollList>
    </FeatureContainerWithHeader>
  );
};

export { SpaceInboxPage };
