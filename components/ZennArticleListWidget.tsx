import React, { useState } from "react";
import { ZennArticleList } from "./ZennArticleList";
import { ArticleProps } from "@/app/types/articleType";

async function fetchArticles() {
  const res = await fetch("https://zenn.dev/api/articles?username=ryohei0509");
  return await res.json();
}

export const ZennArticleListWidget = async () => {
  const articles = fetchArticles();
  console.log(articles);

  return (
    <>
      <p>ddd</p>
    </>
  );
};
