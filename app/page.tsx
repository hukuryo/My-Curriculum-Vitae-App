export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-center">
          Welcome to My PortFolio Site
        </h1>
      </header>
      <section className="mb-12">
        <p className="text-lg text-center">
          自分が勉強したことを発信しているサイトをまとめました。
        </p>
      </section>
      <footer className="mt-12">
        <p className="text-sm text-center">© 2024 All rights reserved.</p>
      </footer>
    </main>
  );
}
