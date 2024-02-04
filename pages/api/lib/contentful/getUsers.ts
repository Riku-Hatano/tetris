import { createClient } from "contentful";

export const getUsers = () => {
  const client = createClient({
    space: "jivp4q6rn93f",
    accessToken: "lX7fWPWoJdKgbnEgSCU2kSEGlEBT0H1PFqdWiuntS3s",
  });
  return client.getEntries({ content_type: "tetrisusers" }).then(
    (res) => {
      return res.items;
    },
    (rej) => {
      console.log(rej);
      return rej;
    },
  );
};
