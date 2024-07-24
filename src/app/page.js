"use client";

import { healthCheckFastAPI, healthCheckNestJs } from "@/api/healthCheck";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col space-y-4">
        <button
          onClick={async () => {
            if ((await healthCheckNestJs()).ok) {
              alert("Nest JS is running");
            }
          }}
          className="bg-lightblue-500 rounded-lg hover:bg-lightblue-700 text-white font-bold py-2 px-4"
        >
          Nest JS
        </button>
        <button
          onClick={async () => {
            if ((await healthCheckFastAPI()).ok) {
              alert("Fast API is running");
            }
          }}
          className="bg-lightblue-500 rounded-lg hover:bg-lightblue-700 text-white font-bold py-2 px-4"
        >
          Fast API
        </button>
      </div>
    </div>
  );
}
