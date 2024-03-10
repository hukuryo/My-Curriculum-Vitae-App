import { QiitaArticleList } from "../components/qiita_article_list";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <QiitaArticleList />
    </main>
  );
}
