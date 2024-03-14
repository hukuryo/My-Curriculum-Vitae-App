import Link from "next/link";
import React from "react";
import dayjs from "dayjs";
import { ArticleProps } from "@/app/types/articleType";

export const ZennArticleList = ({ articles }: { articles: ArticleProps[] }) => {
  return (
    <ul className="grid place-items-center gap-7 items-stretch grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
      {articles.map((article) => (
        <li className="w-full">
          <Link
            target="blank"
            href={`https://zenn.dev/${article.path}`}
            className="flex aspect-[4/3] w-full h-full flex-col items-center justify-center gap-4 bg-background p-6 border rounded-3xl hover:outline-primary hover:outline-2 hover:outline-double hover:bg-muted/60"
          >
            <span className="text-6xl">{article.emoji}</span>
            <p className="line-clamp-2 overflow-hidden break-all text-left font-medium">
              {article.title}
            </p>
            <p className="text-muted-foreground text-xs tracking-widest">
              {dayjs(article.published_at).format("YYYY/MM/DD")}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
