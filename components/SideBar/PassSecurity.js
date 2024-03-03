"use client";
import React from "react";
import { PiPasswordFill } from "react-icons/pi";
import { useState } from "react";

export default function PassSecurity() {
  const [showPassData, setShowPassData] = useState(true);

  return (
    <li>
      <button
        onClick={() => setShowPassData((prevVal) => !prevVal)}
        className="w-full"
      >
        <a
          href="#"
          class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <PiPasswordFill
            class="text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            size={20}
          />
          <span class=" ms-3 whitespace-nowrap">Password Security</span>
        </a>
      </button>
      <ul
        id="dropdown-example"
        className={`${showPassData ? "hidden" : ""} py-2 space-y-2`}
      >
        <li>
          <a
            href="#"
            class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            Billing
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            Invoice
          </a>
        </li>
      </ul>
    </li>
  );
}
