import React from "react";
import PageHeader from "../../Components/PageHeader";
import PageWrapper from "../../Components/PageWrapper";
import { files } from "../../utils";
import OffsetSelector from "./Components/OffsetSelector";
import Broker from "./Components/Broker";
import { BrokerProvider } from "./Providers/BrokerProvider";

const Brokers = () => {
  return (
    <BrokerProvider>
      <PageWrapper title="Brokers">
        <PageHeader title="Brokers" />
        <div className="flex my-4 items-center justify-between">
          <div>
            <OffsetSelector />
          </div>
          <div className="flex border shadow-md rounded-sm">
            <input
              type="text"
              className="p-3 focus:ring-offset-green-900 focus:ring-green-500 ring-offset-green-900 bg-white"
            />
            <div className="bg-gray-200 w-11 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 text-gray-500 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <ul className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            {files.map((_, key) => (
              <Broker />
            ))}
          </ul>
        </div>
      </PageWrapper>
    </BrokerProvider>
  );
};

export default Brokers;
