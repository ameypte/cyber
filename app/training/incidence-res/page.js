import ModuleStatus from "@/components/ModuleStatus";
import React from "react";

export default function page() {
  return (
    <>
      <div className="pb-4 mb-8 border-b border-gray-200 dark:border-gray-800">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Incident Response
          </h1>
          <ModuleStatus module={"Incidence Response"} />
        </div>
        <p className="my-3 text-base text-gray-600 dark:text-gray-400">
          Let's learn about incident response and how to effectively manage and
          recover from security incidents.
        </p>
      </div>

      <div className="mb-8" id="what-is-incident-response">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          What is Incident Response?{" "}
          <a
            className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
            href="#what-is-incident-response"
            aria-label="Link to this section: What is Incident Response?"
          >
            #
          </a>
        </h2>

        <p className="my-3 text-base text-gray-600 dark:text-gray-400 text-justify">
          Incident response is the process of identifying, analyzing, and
          responding to security incidents or cyber attacks in a coordinated and
          efficient manner.
        </p>

        <p className="my-3 text-base text-gray-600 dark:text-gray-400">
          It involves implementing procedures and technologies to detect,
          contain, mitigate, and recover from security breaches or disruptions.
        </p>
      </div>

      <div className="w-full md:w-2/3 mx-auto">
        <iframe
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/yo7l3hn1H6I?si=6fM6er3urIk3M8ty"
          title="Incident Response Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="mb-8 mt-8" id="incident-response-phases">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Incident Response Phases{" "}
          <span
            id="incident-response-phases"
            className="absolute -top-[140px]"
          ></span>{" "}
        </h2>

        <p className="my-3 text-base text-gray-600 dark:text-gray-400">
          The incident response process typically consists of the following
          phases:
        </p>

        <ul className="my-3 text-base text-gray-600 dark:text-gray-400 list-disc list-inside">
          <li>Preparation</li>
          <li>Identification</li>
          <li>Containment</li>
          <li>Eradication</li>
          <li>Recovery</li>
          <li>Lessons learned</li>
        </ul>
      </div>

      <div className="mb-8" id="best-practices-for-incident-response">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Best Practices for Incident Response{" "}
          <span
            id="best-practices-for-incident-response"
            className="absolute -top-[140px]"
          ></span>{" "}
          <a
            className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
            href="#best-practices-for-incident-response"
            aria-label="Link to this section: Best Practices for Incident Response"
          >
            #
          </a>
        </h2>

        <p className="my-3 text-base text-gray-600 dark:text-gray-400">
          Here are some best practices for effective incident response:
        </p>

        <ul className="my-3 text-base text-gray-600 dark:text-gray-400 list-disc list-inside">
          <li>Develop an incident response plan</li>
          <li>Establish an incident response team</li>
          <li>Implement monitoring and detection mechanisms</li>
          <li>Conduct regular training and exercises</li>
          <li>Document and maintain detailed records</li>
        </ul>
      </div>

      <div className="mb-8" id="incident-recovery-and-lessons-learned">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Incident Recovery and Lessons Learned{" "}
          <span
            id="incident-recovery-and-lessons-learned"
            className="absolute -top-[140px]"
          ></span>{" "}
          <a
            className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
            href="#incident-recovery-and-lessons-learned"
            aria-label="Link to this section: Incident Recovery and Lessons Learned"
          >
            #
          </a>
        </h2>

        <p className="my-3 text-base text-gray-600 dark:text-gray-400">
          After an incident has been contained and resolved, it's important to:
        </p>

        <ul className="my-3 text-base text-gray-600 dark:text-gray-400 list-disc list-inside">
          <li>Restore systems and data to a secure state</li>
          <li>Conduct a post-incident review</li>
          <li>Identify lessons learned and areas for improvement</li>
          <li>Update incident response plans and procedures</li>
          <li>Implement preventive measures to reduce future risks</li>
        </ul>
      </div>
    </>
  );
}
