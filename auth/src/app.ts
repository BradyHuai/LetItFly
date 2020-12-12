/*
 * Created by Jimmy Lan
 * Creation Date: 2020-12-01
 */

import express from "express";
import { json } from "body-parser";
import "express-async-errors";
import cookieSession from "cookie-session";
import cors from "cors";

import { NotFoundError, handleErrors } from "@ly-letitfly/common";
import * as routes from "./routes";

const app = express();

app.use(
  // @ts-ignore
  cors({
    origin: ["http://localhost:3000", "https://letitfly.net"],
    credentials: true,
  })
);

// Other
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);

app.use("/api/users", Object.values(routes));

app.all("*", () => {
  throw new NotFoundError();
});

app.use(handleErrors);

export { app };
