import { ZennArticleList } from "./ZennArticleList";

const ZENN_URL: string = process.env.ZENN_URL || "";

interface Article {
  id: number;
  path: string;
  emoji: string;
  title: string;
  published_at: string;
}

export const ZennArticleListWidget = async () => {
  const res = await fetch(ZENN_URL, { cache: "force-cache" });
  const data = await res.json();
  const articles: Article[] = data.articles;

  return <ZennArticleList articles={articles} />;
};
