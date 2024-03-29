import React from "react";
import { ArticleProps } from "@/app/types/articleType";

export const QiitaArticleList = ({
  articles,
}: {
  articles: ArticleProps[];
}) => {
  return (
    <ul>
      {articles.map((article: ArticleProps) => (
        <li key={article.id}>{article.title}</li>
      ))}
    </ul>
  );
};
