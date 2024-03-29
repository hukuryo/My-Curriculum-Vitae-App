import React, { useEffect, useState } from "react";
import { QiitaArticleList } from "./QiitaArticleList";
import { ArticleProps } from "@/app/types/articleType";

export const QiitaArticleListWidget: React.FC = () => {
  useEffect(() => {
    const fetchArticles = async () => {
      const userName = "hukuryo";
      const url = `https://qiita.com/api/v2/items?page=1&per_page=100&query=user:${userName}`;
      const response = await fetch(url);
      const data = await response.json();
    };

    fetchArticles();
  }, []);

  return (
    <>
      <QiitaArticleList articles={articles} />
    </>
  );
};
