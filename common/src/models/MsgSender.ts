/*
 * Created by Jimmy Lan
 * Creation Date: 2020-12-02
 * Description:
 *     A message sender to send a particular
 *     type of message through NATS streaming.
 */

import { Message } from "../messages";
import { Stan } from "node-nats-streaming";

export abstract class MsgSender<T extends Message> {
  abstract subject: T["subject"];

  constructor(private client: Stan) {}
}
