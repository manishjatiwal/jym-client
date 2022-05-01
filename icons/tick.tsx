import React from "react";

type TickProps = { className?: string; polyClass?: string };

const Tick = ({ className = "", polyClass = "" }: TickProps) => {
  return (
    <svg viewBox="0 0 490 490" className={className}>
      <polygon
        points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528"
        className={polyClass}
      />
    </svg>
  );
};

export default Tick;
