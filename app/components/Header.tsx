"use client";

import React from "react";
import { ModeToggle } from "./ui/toggle";
import Link from "next/link";
import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

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
        <div className="flex-grow flex justify-center items-center gap-5 mr-auto">
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
          <Link
            className="hover:opacity-75"
            href="https://www.linkedin.com/in/%E6%B6%BC%E5%B9%B3-%E7%A6%8F%E5%B3%B6-246383281/"
            target="_blank"
          >
            <Button variant="outline" size="icon">
              <LinkedInLogoIcon className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </Link>
          <Link
            className="hover:opacity-75"
            href="https://github.com/hukuryo"
            target="_blank"
          >
            <Button variant="outline" size="icon">
              <TwitterLogoIcon className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </Link>
          <Link
            className="hover:opacity-75"
            href="https://twitter.com/i/flow/login?redirect_after_login=%2Fhukuryo_"
            target="_blank"
          >
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
