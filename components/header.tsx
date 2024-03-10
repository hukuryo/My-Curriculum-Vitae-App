"use client";

import React from "react";
import { ModeToggle } from "./toggle";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="border-b py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-bg-gray-800 text-3xl font-semibold">
          CURRICULUM VITAE
        </h1>
        <div className="flex items-center gap-5">
          <Link href="/articles">ARTICLES</Link>
          <Link href="/career">CAREER</Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
