import React from "react";
import Link from "next/link";
import Header from "./Header";
import ArrowLeftIcon from "@/icons/CartHeader/ArrowLeftIcon";
import HomeHouseIcon from "@/icons/CartHeader/HomeHouseIcon";

export default function CartHeader() {
  return (
    <Header>
      <div className="relative flex items-center w-full p-4">
        <div className="flex items-center">
          <Link href="/">
            <ArrowLeftIcon />
          </Link>
        </div>
        <div className="flex items-center ml-4">
          <Link href="/">
            <HomeHouseIcon />
          </Link>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 font-bold text-lg">
          <span>쇼핑백</span>
        </div>
      </div>
    </Header>
  );
}
