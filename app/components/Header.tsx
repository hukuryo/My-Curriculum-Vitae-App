"use client";

import React from "react";
import { ModeToggle } from "./ui/toggle";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { Button } from "@/app/components/ui/button";

export const Header = () => {
  return (
    <header className="border-b py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="hover:opacity-75" href="/">
          <h1 className="text-bg-gray-800 text-3xl font-semibold">
            CURRICULUM VITAE
          </h1>
        </Link>
        <div className="flex-grow flex justify-center items-center gap-5">
          <div className="flex gap-8">
            <Link className="hover:opacity-75" href="/qiita">
              Qiita
            </Link>
            <Link className="hover:opacity-75" href="/zenn">
              Zenn
            </Link>
            <Link className="hover:opacity-75" href="/career">
              CAREER
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Link className="hover:opacity-75" href="https://github.com/hukuryo">
            <Button variant="outline" size="icon">
              <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
