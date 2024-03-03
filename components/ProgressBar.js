import React from "react";

export default function ProgressBar({ progress }) {
  return (
    <>
      <div>
        <div className="text-gray-900 dark:text-white text-2xl font-bold">Your Progress</div>
        <div className={`inline-block mb-2 ms-[calc(25%-1.25rem)] py-0.5 px-1.5 bg-orange-50 border border-orange-200 font-medium text-white-600 rounded-lg dark:bg-orange-800/30 dark:border-orange-800 dark:text-orange-500 text-sm`}>
          {progress}%
        </div>
        <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
          <div className="flex flex-col justify-center rounded-full overflow-hidden bg-orange-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-orange-500" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </>
  );
}
