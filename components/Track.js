// components/SearchResultCard.js
import React from "react";
import Image from "next/image";

import play from "../public/img/play.svg";
import price from "../public/img/price.svg";

const SearchResultCard = ({ result }) => {
  return (
    <div id={result.collectionId} className="gap-3 track">
      <div className="relative w-[100px] h-[100px]">
        <Image
          width={100}
          height={100}
          src={result.artworkUrl100}
          alt={result.trackName}
          className="rounded-md"
        />
        <Image
          role="button"
          src={play}
          width={32}
          height={32}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="relative grow">
        <h2 className="text-xl font-bold mb-2 artist">{result.artistName}</h2>
        <h3 className="text-xl mb-2 title">{result.trackName}</h3>
        <div className="flex absolute bottom-0 justify-between w-full">
          <div className="badge-genre flex justify-center items-center">
            {result.primaryGenreName}
          </div>
          <p className="flex justify-center items-center gap-[6px]">
            <Image role="button" src={price} width={16} height={16} />{" "}
            <span className="price">{result.trackPrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
