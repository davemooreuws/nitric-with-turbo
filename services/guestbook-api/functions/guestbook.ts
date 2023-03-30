import type { Guestbook } from "types";
import { v4 as uuidv4 } from "uuid";
import { mainApi, optionsHandler } from "../resources/apis";
import { guestbookCol } from "../resources/collections";

interface GuestBookRequest extends Omit<Guestbook, "id"> {}

mainApi.get("/guestbook", async (ctx) => {
  const messages = [];

  try {
    const results = await guestbookCol.query().fetch();

    for (const doc of results.documents) {
      messages.push(doc.content);
    }

    return ctx.res.json(messages);
  } catch (e) {
    ctx.res.body = `Error querying guestbook`;
    ctx.res.status = 500;
  }
});

mainApi.options("/guestbook", optionsHandler);

mainApi.post("/guestbook", async (ctx) => {
  const { message, image, name, email } = ctx.req.json() as GuestBookRequest;
  const id = uuidv4();

  try {
    await guestbookCol.doc(id).set({
      id,
      userId: "", // TODO could get some auth middleware
      message,
      name,
      email,
      image,
      date: new Date().toISOString(),
    });

    ctx.res.body = `Successfully added message ${id}`;
  } catch (e) {
    ctx.res.body = `Error adding message`;
    ctx.res.status = 500;
  }

  return ctx;
});
