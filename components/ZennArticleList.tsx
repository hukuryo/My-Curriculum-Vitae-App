import Link from "next/link";
import React from "react";
import { ArticleProps } from "@/app/types/articleType";
const zennUrl = process.env.ZENN_URL;

export const ZennArticleList = ({ articles }: { articles: ArticleProps[] }) => {
  return (
    <ul>
      {articles.map((article: ArticleProps) => (
        <li key={article.id}>{article.title}</li>
      ))}
    </ul>
  );
};
