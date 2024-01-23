// pages/index.js
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import SearchBar from "../components/SearchBar";
import PageWrapper from "../components/PageWrapper";

import logo from "../public/img/logo.webp";

const HomePage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Music Search App</title>
        <meta
          name="description"
          content="Search and discover music using the iTunes API"
        />
      </Head>
      <PageWrapper>
        <div className="bg rounded p-4 shadow-md h-full relative flex flex-col align-center items-center">
          <div className="flex justify-center items-center h-full">
            <Image src={logo} alt="logo" className="logo" />
          </div>

          <SearchBar />
        </div>
      </PageWrapper>
    </>
  );
};

export default HomePage;
