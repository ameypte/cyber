import ModuleStatus from "@/components/ModuleStatus";
import React from "react";

export default function page() {
  return (
    <>
      <div className="pb-4 mb-8 border-b border-gray-200 dark:border-gray-800">
        <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Remote Work Security
        </h1>
        <ModuleStatus module={"Remote Work"} />
        </div>
        <p className="my-3 text-base text-gray-600 dark:text-gray-400">
          Let's learn about remote work security and how to protect your
          devices, data, and communications when working remotely.
        </p>
      </div>

      <div className="mb-8" id="what-is-remote-work-security">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          What is Remote Work Security?{" "}
          <a
            className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
            href="#what-is-remote-work-security"
            aria-label="Link to this section: What is Remote Work Security?"
          >
            #
          </a>
        </h2>

        <p className="my-3 text-base text-gray-600 dark:text-gray-400 text-justify">
          Remote work security refers to the practices, policies, and
          technologies implemented to ensure the security and privacy of
          employees, data, and systems when working from remote locations
          outside the traditional office environment.
        </p>

        <p className="my-3 text-base text-gray-600 dark:text-gray-400">
          It involves addressing unique security challenges and risks associated
          with remote work, such as unsecured networks, personal devices, and
          the potential for data breaches or unauthorized access.
        </p>
      </div>

      <div className="w-full md:w-2/3 mx-auto">
       <iframe
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/F-U_7CGYiHQ?si=odsL7AZrpSkUs9o9"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div className="mb-8 mt-8" id="common-remote-work-security-risks">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Common Remote Work Security Risks{" "}
          <span
            id="common-remote-work-security-risks"
            className="absolute -top-[140px]"
          ></span>{" "}
        </h2>

        <p className="my-3 text-base text-gray-600 dark:text-gray-400">
          Some common security risks associated with remote work include:
        </p>

        <ul className="my-3 text-base text-gray-600 dark:text-gray-400 list-disc list-inside">
          <li>Unsecured Wi-Fi networks</li>
          <li>Lack of physical security measures</li>
          <li>Increased risk of phishing and social engineering attacks</li>
          <li>Unauthorized access to company resources</li>
          <li>Lost or stolen devices</li>
        </ul>
      </div>

      <div className="mb-8" id="best-practices-for-remote-work-security">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Best Practices for Remote Work Security{" "}
          <span
            id="best-practices-for-remote-work-security"
            className="absolute -top-[140px]"
          ></span>{" "}
          <a
            className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
            href="#best-practices-for-remote-work-security"
            aria-label="Link to this section: Best Practices for Remote Work Security"
          >
            #
          </a>
        </h2>

        <p className="my-3 text-base text-gray-600 dark:text-gray-400">
          Here are some best practices for ensuring remote work security:
        </p>

        <ul className="my-3 text-base text-gray-600 dark:text-gray-400 list-disc list-inside">
          <li>Use a virtual private network (VPN)</li>
          <li>Enable multi-factor authentication</li>
          <li>Keep software and applications up-to-date</li>
          <li>Implement secure file-sharing and collaboration tools</li>
          <li>Educate employees on remote work security best practices</li>
        </ul>
      </div>

      <div className="mb-8" id="remote-work-security-policies">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Remote Work Security Policies{" "}
          <span
            id="remote-work-security-policies"
            className="absolute -top-[140px]"
          ></span>{" "}
          <a
            className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
            href="#remote-work-security-policies"
            aria-label="Link to this section: Remote Work Security Policies"
          >
            #
          </a>
        </h2>

        <p className="my-3 text-base text-gray-600 dark:text-gray-400">
          Organizations should establish and communicate clear remote work
          security policies to ensure consistency and compliance. These policies
          should cover:
        </p>

        <ul className="my-3 text-base text-gray-600 dark:text-gray-400 list-disc list-inside">
          <li>Acceptable use of company resources</li>
          <li>Data handling and privacy requirements</li>
          <li>Incident response procedures</li>
          <li>Secure communication and collaboration guidelines</li>
          <li>Acceptable use of personal devices</li>
        </ul>
      </div>
    </>
  );
}
