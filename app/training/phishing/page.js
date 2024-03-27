import ModuleStatus from "@/components/ModuleStatus";
import PhishingNextButton from "@/components/PhishingQuiz/PhishingNextButton";
import React from "react";

export default function page() {
  return (
    <>
      <div class="pb-4 mb-8 border-b border-gray-200 dark:border-gray-800">
        <div className="flex justify-between items-center">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Phishing Awareness
          </h1>

          <ModuleStatus module={"phishing"} />

        </div>

        <p class="my-3 text-base text-gray-600 dark:text-gray-400">
          Let's learn about phishing and how to protect yourself from phishing
          attacks.
        </p>
      </div>

      <div class="mb-8" id="what-is-phishing">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
          What is Phishing?{" "}
          <a
            class="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
            href="#what-is-phishing"
            aria-label="Link to this section: What is Phishing?"
          >
            #
          </a>
        </h2>

        <p class="my-3 text-base text-gray-600 dark:text-gray-400 text-justify">
          Phishing is a type of social engineering attack often used to steal
          user data, including login credentials and credit card numbers. It
          occurs when an attacker, masquerading as a trusted entity, dupes a
          victim into opening an email, instant message, or text message.
        </p>

        <p class="my-3 text-base text-gray-600 dark:text-gray-400">
          The recipient is then tricked into clicking a malicious link, which
          can lead to the installation of malware, the freezing of the system as
          part of a ransomware attack, or the revealing of sensitive
          information.
        </p>
      </div>

      {/* common */}
      <div class="w-full md:w-2/3 mx-auto">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/XBkzBrXlle0"
          title="Phishing Video"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div class="mb-8 mt-8" id="common-phishing-attacks">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Common Phishing Attacks{" "}
          <span
            id="common-phishing-attacks"
            class="absolute -top-[140px]"
          ></span>{" "}
          <a
            class="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
            href="#common-phishing-attacks"
            aria-label="Link to this section: Common Phishing Attacks"
          >
            #
          </a>
        </h2>
        <p class="my-3 text-base text-gray-600 dark:text-gray-400 text-justify">
          Here are some common phishing attacks:
        </p>

        <ul class="my-3 text-base text-gray-600 dark:text-gray-400 list-disc list-inside">
          <li>Deceptive phishing</li>
          <li>Spear phishing</li>
          <li>CEO fraud</li>
          <li>Pharming</li>
          <li>Dropbox phishing</li>
          <li>Vishing</li>
        </ul>
      </div>

      <div class="mb-8" id="how-to-identify-phishing">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
          How to Identify Phishing{" "}
          <span
            id="how-to-identify-phishing"
            class="absolute -top-[140px]"
          ></span>{" "}
          <a
            class="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
            href="#how-to-identify-phishing"
            aria-label="Link to this section: How to Identify Phishing"
          >
            #
          </a>
        </h2>

        <p class="my-3 text-base text-gray-600 dark:text-gray-400 text-justify">
          Phishing attempts can be made over email, phone, or text message. Here
          are some common signs that can help you identify a phishing attempt:
        </p>

        <ul class="my-3 text-base text-gray-600 dark:text-gray-400 list-disc list-inside">
          <li>Spelling and bad grammar</li>
          <li>Links in email</li>
          <li>Threats</li>
          <li>Spoofing</li>
          <li>Too good to be true</li>
          <li>Unusual sender</li>
        </ul>
      </div>

      <div class="mb-8" id="how-to-protect-yourself">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
          How to Protect Yourself{" "}
          <span
            id="how-to-protect-yourself"
            class="absolute -top-[140px]"
          ></span>{" "}
          <a
            class="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
            href="#how-to-protect-yourself"
            aria-label="Link to this section: How to Protect Yourself"
          >
            #
          </a>
        </h2>
        <p class="my-3 text-base text-gray-600 dark:text-gray-400 text-justify">
          Here are some tips to help you protect yourself from phishing:
        </p>

        <ul class="my-3 text-base text-gray-600 dark:text-gray-400 list-disc list-inside">
          <li>Be cautious about all communications you receive</li>
          <li>Look for misspelled URLs or links that use a different domain</li>
          <li>Never give out personal information</li>
          <li>Keep your software up to date</li>
          <li>Use multi-factor authentication</li>
        </ul>

        <div class="my-3 text-base text-gray-600 dark:text-gray-400">
          For more information, visit{" "}
          <a
            href="https://www.us-cert.gov/ncas/tips/ST04-014"
            class="text-blue-700 dark:text-blue-500"
          >
            US-CERT
          </a>
          <div className="text-center flex justify-center items-center">
            <PhishingNextButton />
          </div>
        </div>
      </div>
    </>
  );
}
