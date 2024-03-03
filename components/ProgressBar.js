// "use client";
import React from "react";

export default function ProgressBar() {
  return (
    <>
      {/* <hr /> */}
      <div className="m-4">
        <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Complete The Given Modules
          </h2>
          {/* <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            to Unlock Certificate
          </p> */}
        </div>
        <div class="w-full bg-orange-700 rounded-full h-4 mb-4 dark:bg-gray-500">
          <div className="mb-12">
            <div className="bg-stroke dark:text-blue-500 relative h-4 w-full rounded-2xl">
              <div className="bg-orange-700  absolute top-0 left-0 h-full w-[50%] rounded-2xl">
                <span className="bg-orange-700 font-bold absolute -right-4 bottom-full mb-2 rounded-sm px-3.5 py-1 text-sm text-white">
                  <span className="bg-orange-700 absolute bottom-[-2px] left-1/2 -z-10 h-3 w-3 -translate-x-1/2 rotate-45 rounded-sm "></span>
                  50%
                </span>
              </div>
            </div>
          </div>
          {/* <div
          class="bg-orange-700  h-2.5 rounded-full dark:text-blue-500"
          style={{ width: "45%" }}
        ></div> */}
        </div>

        {/* <div className="w-full px-4 lg:w-5/12">
        <div className="mb-12">
          <div className="bg-stroke dark:text-blue-500 relative h-2.5 w-full rounded-2xl">
            <div className="bg-orange-700  absolute top-0 left-0 h-full w-1/2 rounded-2xl">
              <span className="bg-orange-700  absolute -right-4 bottom-full mb-2 rounded-sm px-3.5 py-1 text-sm text-white">
                <span className="bg-orange-700  absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
                50%
              </span>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <div className="bg-stroke dark:text-blue-500 relative h-2.5 w-full rounded-2xl">
            <div className="bg-orange-700  absolute top-0 left-0 h-full w-[75%] rounded-2xl">
              <span className="bg-orange-700  absolute -right-4 bottom-full mb-2 rounded-sm px-3.5 py-1 text-sm text-white">
                <span className="bg-orange-700  absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
                75%
              </span>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <div className="bg-stroke dark:text-blue-500 relative h-2.5 w-full rounded-2xl">
            <div className="bg-orange-700  absolute top-0 left-0 h-full w-[90%] rounded-2xl">
              <span className="bg-orange-700  absolute -right-4 bottom-full mb-2 rounded-sm px-3.5 py-1 text-sm text-white">
                <span className="bg-orange-700  absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
                90%
              </span>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
}
