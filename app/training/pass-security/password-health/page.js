"use client"
import { useState } from "react";
import PasswordStrengthBar from "@/components/PasswordStrengthBar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { CiWarning } from "react-icons/ci";
import Link from "next/link";

export default function PassHealth() {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [missingRequirements, setMissingRequirements] = useState([]);


    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    const checkPasswordRequirements = (value) => {
        let requirements = [];

        // Check length requirement
        if (value.length < 8) {
            requirements.push("at least 8 characters");
        }

        // Check uppercase letter requirement
        if (!/[A-Z]/.test(value)) {
            requirements.push("at least one uppercase letter");
        }

        // Check lowercase letter requirement
        if (!/[a-z]/.test(value)) {
            requirements.push("at least one lowercase letter");
        }

        // Check special character requirement
        if (!/[\W_]/.test(value)) {
            requirements.push("at least one special character");
        }

        setMissingRequirements(requirements);
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        checkPasswordRequirements(value);
    };

    return (
        <div className="container my-4 px-5 py-4 w-50 rounded shadow bg-body-tertiary">
             <div class="pb-4 mb-8 border-b border-gray-200 dark:border-gray-800">
                <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    Password Health Check
                </h1>
                <p class="my-3 text-base text-gray-600 dark:text-gray-400">
                    Check if your password meets all requirements
                </p>
            </div>
            <div className="row">
                <div className="col">
                    <div className="flex mb-3">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 px-3 py-2 w-full focus:outline-none rounded-l-lg"
                            id="floatingPassword"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <button
                            className="text-white bg-blue-700 hover:bg-blue-800 rounded-r-lg font-medium text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 "
                            type="button"
                            onClick={toggleShowPassword}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <PasswordStrengthBar password={password} />
                    {missingRequirements.length > 0 ? (
                        <>
                            <div
                                className="flex items-center p-4 mb-4 text-lg text-yellow-800 rounded-lg bg-yellow-50 mt-3 dark:bg-gray-800 dark:text-yellow-300"
                                role="alert"
                            >
                                <CiWarning 
                                className="text-2xl me-2"
                                /> Your password is missing{" "}
                                {missingRequirements.join(", ")}
                            </div>
                            <div className="">
                                <Link href="/training/pass-security/password-generator">
                                    <button className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800" type="button">
                                        Generate New Password
                                    </button>
                                </Link>
                            </div>
                        </>
                    ) : (
                        password.length > 0 && (
                            <div
                                className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 mt-3"
                                role="alert"
                            >
                                <AiFillCheckCircle 
                                className="text-2xl me-2"
                                /> Your password meets all requirements
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
