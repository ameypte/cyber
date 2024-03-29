import React from "react";
import NavBar from "@/components/NavBar";

function page() {
  return (
    <>
      <NavBar />
      <div class=" ml-24 mt-24 sm:flex items-center max-w-screen-xl dark:text-gray-300">
        <div class="sm:w-1/2 p-10">
          <div class="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" />
          </div>
        </div>
        <div class="sm:w-1/2 p-5">
          <div class="text">
            <span class="text-gray-500 border-b-2 border-indigo-600 uppercase dark:text-gray-300">
              About us
            </span>
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">
              About{" "}
              <span
                class="
                text-orange-700
              "
              >
                SecureEdge
              </span>
            </h2>
            <p class="text-gray-700 dark:text-gray-300 text-justify">
              SecureEdge offers a comprehensive suite of interactive modules
              aimed at bolstering your cybersecurity knowledge and resilience.
              Each module is designed with engaging quizzes and gamified
              activities to make learning about cybersecurity both fun and
              informative. Our dedicated team is committed to enhancing your
              cybersecurity awareness and providing you with the tools you need
              to stay safe online. We continuously strive to innovate and
              improve our platform based on user feedback and emerging
              cybersecurity trends. Our mission is to empower individuals with
              the knowledge and skills to protect themselves against cyber
              threats effectively. We invite you to explore our modules,
              participate in our quizzes, and join us in our journey towards
              creating a safer digital world.
            </p>
          </div>
        </div>
      </div>

      <div class="bg-gray-800 text-white ">
        <div class="container mx-auto p-8">
          <div class="flex flex-wrap">
            <div class="w-full h-28  md:w-1/3">
              <h5 class="selftcentre uppercase text-2xl mb-6">About Us</h5>
              <p className="selftcentre">copyright @2024 group 3</p>
            </div>
            <div class="selftcentre w-full md:w-1/3">
              <h5 class="uppercase text-2xl mb-6">Contact Us</h5>
              <p>Washim</p>
              <p>
                <a href="tel:1234567890">123-456-7890</a>
              </p>
              <p>
                <a href="mailto: group3@gmail.com">
                  {" "}
                  Mail Us : group3@gmail.com
                </a>
              </p>
            </div>
            <div class="w-full md:w-1/3">
              <h5 class="selftcentre uppercase text-2xl mb-6">Follow Us</h5>
              <ul class="list-none p-0">
                <li class="my-2">
                  <a href="https://www.facebook.com/" target="_blank">
                    Facebook
                  </a>
                </li>
                <li class="my-2">
                  <a href="https://www.instagram.com/" target="_blank">
                    Instagram
                  </a>
                </li>
                <li class="my-2">
                  <a href="https://twitter.com/" target="_blank">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
