import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">自己紹介</h1>
        <div className="mb-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="mx-auto rounded-full"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">名前</h2>
          <p className="text-gray-700">hukuryo</p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">紹介文</h2>
          <p className="text-gray-700">
            2022年10月からエンジニアになりました。本業ではVue.js,
            Node.jsで開発をしています。
            副業ではReact,TypeScriptで開発をしています。
            趣味はスポーツ観戦です。
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">スキル</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>React</li>
            <li>Node.js</li>
            <li>Vue.js</li>
            <li>Python(Django)</li>
          </ul>
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
