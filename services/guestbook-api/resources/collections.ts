import { collection } from "@nitric/sdk";
import type { User, Guestbook } from "types";

export const userCol = collection<User>("users").for("reading");

export const guestbookCol = collection<Guestbook>("guestbook").for("reading");
