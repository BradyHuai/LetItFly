/**
 * Created by Jimmy Lan
 * Creation Date: 2020-11-09
 */
import React, { FunctionComponent } from "react";
import { usePaperCraneList } from "./hooks";
import { InfiniteScrollList } from "../../../common/components/InfiniteScrollList/InfiniteScrollList";
import {
  deletePaperCrane,
  markPaperCrane,
  PaperCraneInfo,
} from "../../../services/serverApi";
import { EmailStyledListItem } from "./components/EmailStyledListItem/EmailStyledListItem";
import { FeatureContainerWithHeader } from "../../../common/components/FeatureContainerWithHeader/FeatureContainerWithHeader";

interface OwnProps {}

type Props = OwnProps;

const SpaceSentPage: FunctionComponent<Props> = (props) => {
  const [list, hasMore, fetchNextData, clearList] = usePaperCraneList("sent");

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
    <FeatureContainerWithHeader headerTitle="Sent" className="sentContent" >
      <InfiniteScrollList
        hasMore={hasMore}
        loadMore={fetchNextData}
        useWindow={false}
      >
        {list.map((paperCrane: PaperCraneInfo, index: number) => (
          <EmailStyledListItem
            title={paperCrane.title}
            key={index}
            style={paperCrane.style}
            unread={!!paperCrane.isUnread}
            starred={!!paperCrane.isStarred}
            handleStarClick={() =>
              handleStarredClick(paperCrane.id, !!paperCrane.isStarred)
            }
            handleDeleteClick={() => handleDeleteClick(paperCrane.id)}
          />
        ))}
      </InfiniteScrollList>
    </FeatureContainerWithHeader>
  );
};

export { SpaceSentPage };
