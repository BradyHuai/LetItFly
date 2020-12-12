/*
 * Created by Jimmy Lan
 * Creation Date: 2020-12-11
 */

import { ServerResponse } from "./models";
import { axios } from "../axios";

export interface FriendData {
  firstName: string;
  lastName: string;
  avatar: string;
}

export interface FriendResponse extends ServerResponse {
  data?: FriendData[];
}

export const fetchFriendsList = (limit: number, skip: number) => {
  return axios.get("/api/friends", { params: { limit, skip } });
};

export const deleteFriend = (id: string) => {
  return axios.delete("/api/friends/" + id);
};
