import React from 'react'

export default function page() {
    return (
        <>
            <div class="pb-4 mb-8 border-b border-gray-200 dark:border-gray-800">
                <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    Password Security
                </h1>
                <p class="my-3 text-base text-gray-600 dark:text-gray-400">
                    Let's learn about password security and how to protect yourself from
                    cyber attacks.
                </p>
            </div>

            <div class="mb-8" id="what-is-password-security">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    What is Password Security?{" "}
                    <a
                        class="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
                        href="#what-is-password-security"
                        aria-label="Link to this section: What is Password Security?"
                    >
                        #
                    </a>
                </h2>

                <p class="my-3 text-base text-gray-600 dark:text-gray-400 text-justify">
                    Password security is the practice of creating and managing secure
                    passwords to protect your online accounts from cyber attacks.
                </p>

                <p class="my-3 text-base text-gray-600 dark:text-gray-400">
                    A strong password is a combination of letters, numbers, and special
                    characters. It should be unique for each account and changed
                    regularly to prevent unauthorized access.
                </p>
            </div>

            <div class="w-full md:w-2/3 mx-auto">
                <iframe
                    width="100%"
                    height="450"
                    src="https://www.youtube.com/embed/kiBB0m_MY-Q?si=61v3-IRh5kLaZ3fr"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>

                </iframe>
            </div>

            <div class="mb-8 mt-8" id="common-password-attacks">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Common Password Attacks{" "}
                    <span
                        id="common-password-attacks"
                        class="absolute -top-[140px]"
                    ></span>{" "}
                </h2>

                <p class="my-3 text-base text-gray-600 dark:text-gray-400">
                    Password attacks are methods used by cybercriminals to gain
                    unauthorized access to user accounts. Some common password attacks
                    include:
                </p>

                <ul class="my-3 text-base text-gray-600 dark:text-gray-400 list-disc list-inside">
                    <li>Brute force attacks</li>
                    <li>Dictionary attacks</li>
                    <li>Phishing attacks</li>
                    <li>Keylogging</li>
                    <li>Shoulder surfing</li>
                </ul>
            </div>

            <div class="mb-8" id="how-to-create-strong-passwords">

                <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    How to Create Strong Passwords{" "}
                    <span
                        id="how-to-create-strong-passwords"
                        class="absolute -top-[140px]"
                    ></span>{" "}
                    <a
                        class="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
                        href="#how-to-create-strong-passwords"
                        aria-label="Link to this section: How to Create Strong Passwords"
                    >
                        #
                    </a>
                </h2>

                <p class="my-3 text-base text-gray-600 dark:text-gray-400">
                    Here are some tips for creating strong passwords:
                </p>

                <ul class="my-3 text-base text-gray-600 dark:text-gray-400 list-disc list-inside">
                    <li>Use a combination of letters, numbers, and special characters</li>
                    <li>Avoid using personal information or common words</li>
                    <li>Make passwords at least 12 characters long</li>
                    <li>Use a password manager to store and generate secure passwords</li>
                    <li>Change passwords regularly</li>
                </ul>
            </div>

            <div class="mb-8" id="how-to-protect-passwords">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    How to Protect Your Passwords{" "}
                    <span
                        id="how-to-protect-passwords"
                        class="absolute -top-[140px]"
                    ></span>{" "}
                    <a
                        class="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
                        href="#how-to-protect-passwords"
                        aria-label="Link to this section: How to Protect Your Passwords"
                    >
                        #
                    </a>
                </h2>

                <p class="my-3 text-base text-gray-600 dark:text-gray-400">
                    Here are some ways to protect your passwords:
                </p>

                <ul class="my-3 text-base text-gray-600 dark:text-gray-400 list-disc list-inside">
                    <li>Never share your passwords with anyone</li>
                    <li>Use two-factor authentication for added security</li>
                    <li>Be cautious of phishing emails and websites</li>
                    <li>Keep your devices and software up to date</li>
                    <li>Use a secure internet connection</li>
                </ul>

            </div>
        </>
    )
}
