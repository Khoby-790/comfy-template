import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import SSL from "../assets/ssl-big.png";
import Login from "../Pages/Login/Login";
import Otp from "../Pages/Otp/Otp";
import AuthProcessProvider from "./Provider/AuthProcessProvider";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Auth() {
  const [company, setCompany] = useState(undefined);
  return (
    <AuthProcessProvider value={{ company, setCompany }}>
      <div className="min-h-screen bg-white flex">
        <div className="hidden lg:block bg-white  relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
        <div className="flex-1 bg-gray-50  flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="absolute bottom-10 right-10">
            <img src={SSL} alt="" />
          </div>
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=green&shade=700"
                alt="Workflow"
              />
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
              <span className={"text-gray-800"}>Get some text for here..</span>
            </div>
            {/* Routes go here */}
            <Switch>
              <Route path="/auth" exact component={Login} />
              <Route path="/auth/verify" exact component={Otp} />
            </Switch>
          </div>
        </div>
      </div>
    </AuthProcessProvider>
  );
}

export default Auth;
