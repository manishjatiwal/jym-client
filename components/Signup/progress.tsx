import React from "react";

import CompletedStep from "icons/tick";
import CurrentStep from "./current-step-icon";
import UpcomingStep from "./upcoming-step-icon";

const Progress = () => {
  return (
    <div className="w-full h-full bg-primary p-8 text-white flex flex-col justify-between items-start">
      <div>
        <div>Logo</div>
        <div className="mt-8 ml-4 border-l pl-8 ">
          <div className="relative flex flex flex-row justify-start items-center -left-12 -top-1 mb-4">
            <CurrentStep />
            {/* <span className="bg-white rounded-full flex flex-row justify-center items-center w-8 h-8 mr-4">
              <CompletedStep className="w-4" polyClass="fill-primary" />
            </span> */}
            Email Verification
          </div>
          <div className="relative flex flex flex-row justify-start items-center -left-12 mb-4">
            <UpcomingStep />
            Choose a password
          </div>
          <div className="relative flex flex flex-row justify-start items-center -left-12 mb-4">
            <UpcomingStep />
            Personal Details
          </div>
          <div className="relative flex flex flex-row justify-start items-center -left-12 mb-4">
            <UpcomingStep />
            Gym Details
          </div>
        </div>
      </div>
      <div>Bottom</div>
    </div>
  );
};

export default Progress;
