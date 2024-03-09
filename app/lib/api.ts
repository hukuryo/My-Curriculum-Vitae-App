import { formatISO } from "date-fns";
const QIITAURL = process.env.QIITA_ENDPOINT_URL;
const QIITAAPIKEY = process.env.QIITA_API_KEY;

export const getQiitaPosts = async () => {
  const nowdate = new Date();
  const limitdate = formatISO(nowdate.setDate(nowdate.getDate() - 10), {
    representation: "date",
  });
  const key = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${QIITAAPIKEY}`,
    },
  };
  const res = await fetch(
    `${QIITAURL}items?page=1&per_page=50&query=created%3A%3E${limitdate}+stocks%3A%3E20`,
    key
  ).catch((err) => {
    console.error(err);
  });
  const json = await res.json();
  if (json.message) {
    console.error(json.message);
    throw new Error("Failed to fetch API");
  }
  return json;
};
