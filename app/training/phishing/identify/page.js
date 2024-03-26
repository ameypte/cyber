"use client"
import EmailCard from '@/components/EmailCard'
import { React, useEffect, useState } from 'react'
// import the json file
import data from './emails.json'

export default function page() {
    const [emails, setEmails] = useState(data);
    const [selectedEmail, setSelectedEmail] = useState([]);
    const [selects, setSelects] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        // randomly select 2 suspicious and 2 genuine emails
        const suspiciousEmails = emails.emails.filter(email => email.type === 'suspicious');
        const genuineEmails = emails.emails.filter(email => email.type === 'genuine');

        const selectedSuspiciousEmails = suspiciousEmails.sort(() => 0.5 - Math.random()).slice(0, 2);
        const selectedGenuineEmails = genuineEmails.sort(() => 0.5 - Math.random()).slice(0, 2);

        const selectedEmails = [...selectedSuspiciousEmails, ...selectedGenuineEmails].sort(() => 0.5 - Math.random());
        setSelectedEmail(selectedEmails);

        console.log(selectedEmails);
    }, []);

    const handleSubmit = () => {
        if (selects.length < 2) {
            setMessage('Opps, you missed some suspicious emails');
            return;
        }
        else {
            // check if the selected emails are suspicious
            const selectedSuspiciousEmails = selectedEmail.filter((email, index) => email.type === 'suspicious' && selects.includes(index));

            if (selectedSuspiciousEmails.length === 2) {
                setMessage('Congratulations, you have successfully identified the phishing emails');
            } else {
                setMessage('You have selected some genuine emails as suspicious');
            }
        }
        console.log(selects);

    }


    return (
        <div>
            <div class="pb-4 mb-8 border-b border-gray-200 dark:border-gray-800">
                <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    Identify Phishing Emails
                </h1>
                <p class="my-3 text-base text-gray-600 dark:text-gray-400">
                    Let's learn how to identify phishing emails and how to protect yourself from phishing attacks.
                </p>
            </div>

            <div class="pb-4  border-gray-200 dark:border-gray-800">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Can you identify the Suspicious emails ?
                </h2>

                <p class="mt-3 text-base text-gray-600 dark:text-gray-400">
                    Select the emails that you think are suspicious and submit your answers.
                </p>
            </div>



            <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
                {selectedEmail.map((email, index) => (
                    <EmailCard key={index} sender={email.sender} subject={email.subject} body={email.body} date={email.date} setSelects={setSelects} selects={selects} index={index} />
                ))}
            </div>
            {
                message && (
                    <div class="flex mt-8 items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
                        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span class="sr-only">Info</span>
                        <div>
                            <p class="font-semibold">{message}</p>
                        </div>
                    </div>
                )}
            {/* Submit button */}
            <div className="flex justify-center mt-5">
                <button type="button" class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"
                    onClick={handleSubmit}
                >Submit</button>
            </div>
        </div>
    )
}
