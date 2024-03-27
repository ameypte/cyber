import ModuleStatus from "@/components/ModuleStatus";
import React from "react";

export default function page() {
  return (
    <>
      <div class="pb-4 mb-8 border-b border-gray-200 dark:border-gray-800">
      <div className="flex justify-between items-center">

        <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Data Protection
        </h1>
        <ModuleStatus module={"Data Protection"} />
        </div>
        <p class="my-3 text-base text-gray-600 dark:text-gray-400">
          Let's learn about data protection and how to safeguard your personal
          and sensitive information.
        </p>
      </div>

      <div class="mb-8" id="what-is-data-protection">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
          What is Data Protection?{" "}
          <a
            class="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
            href="#what-is-data-protection"
            aria-label="Link to this section: What is Data Protection?"
          >
            #
          </a>
        </h2>

        <p class="my-3 text-base text-gray-600 dark:text-gray-400 text-justify">
          Data protection refers to the practices and measures taken to
          safeguard sensitive information from unauthorized access, use, or
          disclosure.
        </p>

        <p class="my-3 text-base text-gray-600 dark:text-gray-400">
          It involves implementing security controls, policies, and procedures
          to protect data throughout its lifecycle.
        </p>
      </div>

      <div class="w-full md:w-2/3 mx-auto">
        <iframe
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/SuNtmCgIhiM?si=Sya4qUNaIlTkx2mZ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div class="mb-8 mt-8" id="common-data-protection-methods">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Common Data Protection Methods{" "}
          <span
            id="common-data-protection-methods"
            class="absolute -top-[140px]"
          ></span>{" "}
        </h2>

        <p class="my-3 text-base text-gray-600 dark:text-gray-400">
          Data protection methods are strategies and techniques used to secure
          and safeguard sensitive data. Some common data protection methods
          include:
        </p>

        <ul class="my-3 text-base text-gray-600 dark:text-gray-400 list-disc list-inside">
          <li>Encryption</li>
          <li>Access control</li>
          <li>Data backup and recovery</li>
          <li>Regular security audits</li>
          <li>Employee training and awareness</li>
        </ul>
      </div>

      <div class="mb-8" id="best-practices-for-data-protection">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Best Practices for Data Protection{" "}
          <span
            id="best-practices-for-data-protection"
            class="absolute -top-[140px]"
          ></span>{" "}
          <a
            class="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
            href="#best-practices-for-data-protection"
            aria-label="Link to this section: Best Practices for Data Protection"
          >
            #
          </a>
        </h2>

        <p class="my-3 text-base text-gray-600 dark:text-gray-400">
          Here are some best practices for effective data protection:
        </p>

        <ul class="my-3 text-base text-gray-600 dark:text-gray-400 list-disc list-inside">
          <li>Implement strong access controls</li>
          <li>Regularly update and patch software</li>
          <li>Use multi-factor authentication</li>
          <li>Limit data collection and retention</li>
          <li>Monitor and audit data access and usage</li>
        </ul>
      </div>

      <div class="mb-8" id="how-to-respond-to-data-breaches">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
          How to Respond to Data Breaches{" "}
          <span
            id="how-to-respond-to-data-breaches"
            class="absolute -top-[140px]"
          ></span>{" "}
          <a
            class="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
            href="#how-to-respond-to-data-breaches"
            aria-label="Link to this section: How to Respond to Data Breaches"
          >
            #
          </a>
        </h2>

        <p class="my-3 text-base text-gray-600 dark:text-gray-400">
          In the event of a data breach, it's crucial to respond quickly and
          effectively to minimize the impact. Here's what you can do:
        </p>

        <ul class="my-3 text-base text-gray-600 dark:text-gray-400 list-disc list-inside">
          <li>Contain and isolate the breach</li>
          <li>Notify affected individuals and authorities</li>
          <li>Investigate the cause of the breach</li>
          <li>Implement corrective actions and preventive measures</li>
          <li>Review and update data protection policies</li>
        </ul>
      </div>
    </>
  );
}
