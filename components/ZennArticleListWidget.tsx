import { ZennArticleList } from "./ZennArticleList";

interface Article {
  id: number;
  path: string;
  emoji: string;
  title: string;
  published_at: string;
}

export const ZennArticleListWidget = async () => {
  const res = await fetch(
    "https://zenn.dev/api/articles?username=ryohei0509&order=latest"
  );
  const data = await res.json();
  const articles: Article[] = data.articles;

  return <ZennArticleList articles={articles} />;
};
