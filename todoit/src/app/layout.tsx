import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Header from "@/components/common/header";

const nanumSquare = localFont({
  src: [
    {
      path: "../../public/font/NanumSquareR.otf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../../public/font/NanumSquareB.otf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-nanum-square",
});

export const metadata: Metadata = {
  title: "To-Do-It",
  description: "효율적인 일 관리를 위한 Todo 웹 애플리케이션입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${nanumSquare.className} ${nanumSquare.variable} min-h-[calc(100vh-60px)]`} //스크린 높이 - 헤더 높이
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
