// pages/search-result.js
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import MinSearchBar from "../components/MinSearchBar";
import Track from "../components/Track";
import PageWrapper from "../components/PageWrapper";

const SearchResultPage = ({ searchResults }) => {
  const router = useRouter();
  const { query } = router.query;
  console.debug(searchResults);

  return (
    <div>
      <Head>
        <title>Music Search App - Result {query}</title>
        <meta
          name="description"
          content="Search and discover music using the iTunes API"
        />
      </Head>
      <PageWrapper>
        <div className="rounded bg-second shadow-md h-full relative flex flex-col align-center items-center">
          <MinSearchBar />
          <div className="pt-[42px] pb-[38px]">
            Search result for : <span className="query">{query}</span>
          </div>
          <ul className="px-[15px] max-h-[65vh] overflow-y-scroll">
            {searchResults.map((result) => (
              <Track key={result.collectionId} result={result} />
            ))}
          </ul>
          <div role="button" className="load my-[20px]">
            Load More
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export async function getServerSideProps(context) {
  const searchTerm = context.query;

  const uri = `https://itunes.apple.com/search?term=${
    searchTerm.query || "music"
  }&limit=10&media=music`;
  const searchResults = await fetch(uri)
    .then((res) => res.json())
    .then((data) => {
      return data.results || [];
    });

  return {
    props: {
      searchResults,
    },
  };
}

export default SearchResultPage;
