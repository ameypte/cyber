// import SocialEngineeringNextButton from "@/components/SocialEngineeringQuiz/SocialEngineeringNextButton";
import React from "react";

export default function page() {
  return (
    <>
      <div className="pb-4 mb-8 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Social Engineering
        </h1>
        <p className="my-3 text-base text-gray-600 dark:text-gray-400">
          Let's learn about social engineering and how to protect yourself from
          social engineering attacks.
        </p>
      </div>

      <div className="mb-8" id="what-is-social-engineering">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          What is Social Engineering?{" "}
          <a
            className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
            href="#what-is-social-engineering"
            aria-label="Link to this section: What is Social Engineering?"
          >
            #
          </a>
        </h2>

        <p className="my-3 text-base text-gray-600 dark:text-gray-400 text-justify">
          Social engineering is a type of attack that relies heavily on human
          interaction and often involves manipulating people into breaking
          normal security procedures and best practices in order to gain access
          to systems, networks, or sensitive information.
        </p>

        <p className="my-3 text-base text-gray-600 dark:text-gray-400">
          Social engineering attacks can occur through various channels, such as
          email, phone calls, or in-person interactions, and can target
          individuals or entire organizations.
        </p>
      </div>

      {/* common */}
      <div className="w-full md:w-2/3 mx-auto">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/lc7scxvKQOo"
          title="Social Engineering Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mb-8 mt-8" id="common-social-engineering-attacks">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Common Social Engineering Attacks{" "}
          <span
            id="common-social-engineering-attacks"
            className="absolute -top-[140px]"
          ></span>{" "}
          <a
            className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
            href="#common-social-engineering-attacks"
            aria-label="Link to this section: Common Social Engineering Attacks"
          >
            #
          </a>
        </h2>
        <p className="my-3 text-base text-gray-600 dark:text-gray-400 text-justify">
          Here are some common social engineering attacks:
        </p>

        <ul className="my-3 text-base text-gray-600 dark:text-gray-400 list-disc list-inside">
          <li>Phishing</li>
          <li>Pretexting</li>
          <li>Baiting</li>
          <li>Quid pro quo</li>
          <li>Tailgating</li>
          <li>Shoulder surfing</li>
        </ul>
      </div>

      <div className="mb-8" id="how-to-identify-social-engineering">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          How to Identify Social Engineering{" "}
          <span
            id="how-to-identify-social-engineering"
            className="absolute -top-[140px]"
          ></span>{" "}
          <a
            className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
            href="#how-to-identify-social-engineering"
            aria-label="Link to this section: How to Identify Social Engineering"
          >
            #
          </a>
        </h2>

        <p className="my-3 text-base text-gray-600 dark:text-gray-400 text-justify">
          Social engineering attacks can be difficult to identify, but here are
          some common signs to watch out for:
        </p>

        <ul className="my-3 text-base text-gray-600 dark:text-gray-400 list-disc list-inside">
          <li>Sense of urgency or fear</li>
          <li>Requests for sensitive information</li>
          <li>Suspicious attachments or links</li>
          <li>Impersonation of authority figures</li>
          <li>Unsolicited requests or offers</li>
          <li>Unusual or unexpected contacts</li>
        </ul>
      </div>

      <div className="mb-8" id="how-to-protect-yourself">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          How to Protect Yourself{" "}
          <span
            id="how-to-protect-yourself"
            className="absolute -top-[140px]"
          ></span>{" "}
          <a
            className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
            href="#how-to-protect-yourself"
            aria-label="Link to this section: How to Protect Yourself"
          >
            #
          </a>
        </h2>
        <p className="my-3 text-base text-gray-600 dark:text-gray-400 text-justify">
          Here are some tips to help you protect yourself from social
          engineering attacks:
        </p>

        <ul className="my-3 text-base text-gray-600 dark:text-gray-400 list-disc list-inside">
          <li>Be skeptical of unsolicited requests</li>
          <li>Verify the identity of individuals</li>
          <li>Never disclose sensitive information</li>
          <li>Follow security policies and procedures</li>
          <li>Report suspicious activities</li>
        </ul>

        <div className="my-3 text-base text-gray-600 dark:text-gray-400">
          For more information, visit{" "}
          <a
            href="https://www.sans.org/cyber-security-resources/social-engineering"
            className="text-blue-700 dark:text-blue-500"
          >
            SANS
          </a>
          <div className="text-center flex justify-center items-center">
            {/* <SocialEngineeringNextButton /> */}
          </div>
        </div>
      </div>
    </>
  );
}
