import React, { useEffect, useState } from "react";
import { QiitaArticleList } from "./QiitaArticleList";

export const QiitaArticleListWidget = async () => {
  const userName = "hukuryo";
  const url = `https://qiita.com/api/v2/items?page=1&per_page=100&query=user:${userName}`;

  const response = await fetch(url, { cache: "force-cache" });
  console.log(response);
  const articles = await response.json();

  return (
    <>
      <QiitaArticleList articles={articles} />
    </>
  );
};
