import Link from "next/link";
import React from "react";
import dayjs from "dayjs";
import { ArticleProps } from "@/app/types/articleType";

export const ZennArticleList = ({ articles }: { articles: ArticleProps[] }) => {
  return (
    <div>
      {articles.map((article) => (
        <Link
          href={`https://zenn.dev/${article.path}`}
          className="text-blue-500 hover:text-blue-700"
        >
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="text-gray-700 text-base">{article.emoji}</div>
              <div className="font-bold text-xl mb-2">{article.title}</div>
              <p className="text-gray-700 text-base">
                {dayjs(article.published_at).format("YYYY/MM/DD")}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
