import React from "react";
import PageHeader from "../../Components/PageHeader";
import PageWrapper from "../../Components/PageWrapper";
import DashboardStats from "./components/DashboardStats";
import DashboardStatsLayer2 from "./components/DashboardStatsLayer2";

const Dashboard = () => {
  return (
    <PageWrapper>
      <PageHeader title="Dashboard" />
      <div className="flex w-full mt-4">
        <div className="w-full flex bg-white shadow-md p-4 rounded">
          <div className="w-32 h-32 bg-gray-500 rounded-full"></div>
          <div className="mx-11">
            <span className="text-gray-700 font-medium text-3xl">
              Vanguard Assurance
            </span>
            <div className="grid grid-cols-2">
              <span>Accra</span>
              <span>Ghana</span>
              <span></span>
              <span>0506339153,0274488676</span>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-green-700 shadow-md rounded ml-5"></div>
      </div>
      <DashboardStats />
      <DashboardStatsLayer2 />
    </PageWrapper>
  );
};

export default Dashboard;
