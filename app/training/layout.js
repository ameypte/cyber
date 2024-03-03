import NavBar from "@/components/NavBar";
import { MdPhishing } from "react-icons/md";
import { PiPasswordFill } from "react-icons/pi";
import { AiOutlineFileProtect } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import { GoReport } from "react-icons/go";
import { FaNetworkWired } from "react-icons/fa6";

export default function RootLayout({ children }) {
    return (
        <>
            <div class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <NavBar />
            </div>

            <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-900 dark:border-gray-700" aria-label="Sidebar">
                <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-900">
                    <div class="ms-3 mb-5 text-2xl font-bold text-gray-800 dark:text-white ">
                        Modules
                    </div>
                    <ul class="space-y-2 font-medium">
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <MdPhishing class="text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" size={20} />
                                <span class="ms-3">Phishing</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <PiPasswordFill class="text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" size={20} />
                                <span class="flex-1 ms-3 whitespace-nowrap">Password Security</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <AiOutlineFileProtect class="text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" size={20} />
                                <span class="flex-1 ms-3 whitespace-nowrap">Data Protection</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <MdPeopleAlt class="text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" size={20} />
                                <span class="flex-1 ms-3 whitespace-nowrap">Social Engineering</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <GoReport class="text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" size={20} />
                                <span class="flex-1 ms-3 whitespace-nowrap">Incident Response</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FaNetworkWired class="text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" size={20} />
                                <span class="flex-1 ms-3 whitespace-nowrap">Remote Work Security</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

            <div class="p-4 sm:ml-64 bg-gray-100 dark:bg-gray-800">
                <div class="p-4 mt-20 bg-white rounded-lg dark:bg-gray-900">
                    {children}
                </div>
            </div>

        </>
    );
}
