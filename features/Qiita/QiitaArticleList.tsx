import React from "react";
import { ArticleProps } from "@/app/types/articleType";
import Link from "next/link";

export const QiitaArticleList = ({
  articles,
}: {
  articles: ArticleProps[];
}) => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Qiita Articles</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-4">
                  {article.rendered_body.slice(0, 100)}...
                </p>
                <div className="flex items-center">
                  <img
                    src={article.user.profile_image_url}
                    alt={article.user.id}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-gray-700">
                    {article.user.id} -{" "}
                    {new Date(article.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-gray-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700">{article.likes_count}</span>
                  </div>
                  <Link
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
