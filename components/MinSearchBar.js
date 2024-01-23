// components/SearchBar.js
import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

import accordion from "../public/img/menu.svg";
import search from "../public/img/search.svg";
import minlogo from "../public/img/ngmusic.svg";

const SearchBar = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);

  const handleSearch = () => {
    // Redirect ke halaman pencarian dengan query pencarian
    router.push(`/search-result?query=${searchQuery}`);
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
    setSearchQuery('');
  };

  return (
    <div class="bar relative flex justify-between items-center w-full">
      <Image
        role="button"
        onClick={() => router.push("/")}
        src={minlogo}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <Image role="button" src={accordion} />
      <Image onClick={() => setOpen(true)} role="button" src={search} />

      <Transition show={open} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={handleClose}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black dark" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform">
                <div className="flex justify-center items-center flex-col">
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-white font-medium leading-6 text-gray-900 mb-[31px]"
                  >
                    Search
                  </Dialog.Title>
                  <div className="flex flex-col gap-[20px]">
                    <input
                      type="text"
                      id="search"
                      placeholder="Artist / Album / Title"
                      className="Rectangle focus:outline-none"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="Btn_search btn2" onClick={handleSearch}>
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default SearchBar;
