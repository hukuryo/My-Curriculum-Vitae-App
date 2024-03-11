import { QiitaArticleList } from "@/components/QiitaArticleList";
import { ZennArticleListWidget } from "@/components/ZennArticleListWidget";

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <QiitaArticleList /> */}
      <ZennArticleListWidget />
    </main>
  );
}
