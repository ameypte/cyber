"use client"
import { useState } from "react";

export default function PassGene() {

    const [passLength, setPassLength] = useState(0);
    const [charSet, setCharSet] = useState(0);
    const [excludeChar, setExcludeChar] = useState("");
    const [includeChar, setIncludeChar] = useState("");
    const [isPassGenerated, setIsPassGenerated] = useState(false);
    const [generatedPass, setGeneratedPass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Character sets
        const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

        // Selected character set
        let selectedCharSet;
        if (charSet === "1") {
            selectedCharSet = alphabets;
        } else if (charSet === "2") {
            selectedCharSet = alphabets + numbers;
        } else if (charSet === "3") {
            selectedCharSet = alphabets + numbers + specialChars;
        }

        // Excluded characters
        const excludedChars = excludeChar.split("");

        // Included characters
        const includedChars = includeChar.split("");

        // Combine character sets and remove excluded characters
        let availableChars = selectedCharSet.split("");
        excludedChars.forEach((char) => {
            availableChars = availableChars.filter((c) => c !== char);
        });

        // Add included characters
        includedChars.forEach((char) => {
            if (!availableChars.includes(char)) {
                availableChars.push(char);
            }
        });

        // Generate password
        let password = "";
        let isAllIncludedCharsPresent = false;
        while (!isAllIncludedCharsPresent) {
            for (let i = 0; i < passLength; i++) {
                const randomIndex = Math.floor(Math.random() * availableChars.length);
                password += availableChars[randomIndex];
            }
            isAllIncludedCharsPresent = true;
            includedChars.forEach((char) => {
                if (!password.includes(char)) {
                    isAllIncludedCharsPresent = false;
                }
            });
            if (!isAllIncludedCharsPresent) {
                password = "";
            }
        }

        // Update state
        setGeneratedPass(password);
        setIsPassGenerated(true);
    };

    return (
        <>
            <div class="pb-4 mb-8 border-b border-gray-200 dark:border-gray-800">
                <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    Password Generator
                </h1>
                <p class="my-3 text-base text-gray-600 dark:text-gray-400">
                    Generate strong and secure passwords for your online accounts.
                </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="flex space-x-4">
                    <div className='grow' style={{ flex: 1 }} >
                        <label htmlFor="pass-length" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Enter Password Length
                        </label>
                        <input
                            type="number"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            id="pass-length"
                            value={passLength}
                            onChange={(e) => setPassLength(e.target.value)}
                            required
                        />
                    </div>
                    <div className='grow' style={{ flex: 1 }}>
                        <label htmlFor="char-set" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Select Character Set
                        </label>
                        <select
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            id="char-set"
                            required
                            value={charSet}
                            onChange={(e) => setCharSet(e.target.value)}
                        >
                            <option value="">Select Character Set</option>
                            <option value="1">Alphabets</option>
                            <option value="2">Alphabets + Numbers</option>
                            <option value="3">Alphabets + Numbers + Special Characters</option>
                        </select>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <div className="grow" style={{ flex: 1 }}>
                        <label htmlFor="exclude-char" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Exclude Characters
                        </label>
                        <input
                            type="text"
                            value={excludeChar}
                            onChange={(e) => setExcludeChar(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            id="exclude-char"
                            placeholder="Enter characters to exclude"
                        />
                        <div id="exclude-char-help" className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                            For example: "acb" will exclude a, c and b from the generated
                        </div>
                    </div>
                    <div className="grow" style={{ flex: 1 }}>
                        <label htmlFor="include-char" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Include Characters
                        </label>
                        <input
                            type="text"
                            value={includeChar}
                            onChange={(e) => setIncludeChar(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            id="include-char"
                            placeholder="Enter characters to include"
                        />
                        <div id="include-char-help" className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                            For example: "acb" will include a, c and b in the generated
                        </div>
                    </div>
                </div>
                {isPassGenerated ? (
                    <div className="flex flex-col">
                        <label htmlFor="generated-pass" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Generated Password
                        </label>
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={generatedPass}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                id="generated-pass"
                                readOnly
                                disabled
                            />
                            <button
                                type="button"
                                className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                onClick={(e) => {
                                    navigator.clipboard.writeText(generatedPass);
                                    e.target.innerText = "Copied";
                                    e.target.classList.remove("btn-outline-primary");
                                    e.target.classList.add("btn-secondary");
                                    // timeout to revert back to original state
                                    setTimeout(() => {
                                        e.target.innerText = "Copy";
                                        e.target.classList.remove("btn-secondary");
                                        e.target.classList.add("btn-outline-primary");
                                    }, 2000);
                                }}
                            >
                                Copy
                            </button>
                        </div>
                    </div>
                ) : null}

                <div className="flex justify-center mt-5">
                    <button type="submit" class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"
                    >Generate Password</button>
                </div>
            </form>
        </>
    );
}
