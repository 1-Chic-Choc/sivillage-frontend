import Footer from "@/components/template/layout/Footer";
import MainHeader from "@/components/template/layout/header/MainHeader";
import BottomNavigationBar from "@/components/template/layout/navbar/BottomNavigationBar";
import MainNavBar from "@/components/template/layout/navbar/MainTopNavBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function NotFound() {
  return (
    <>
      <MainHeader />
      <MainNavBar />
      <div>존재하지 않는 페이지 입니다.</div>
      <BottomNavigationBar />
      <Footer />
    </>
  );
}
