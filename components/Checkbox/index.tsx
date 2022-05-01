import React, { useState } from "react";

type CheckboxProps = {
  label: string;
  name: string;
  register: Function;
};

const Checkbox = ({ label, name, register }: CheckboxProps) => {
  return (
    <div className="flex flex-row justify-start items-center">
      <input className="mr-2" type="checkbox" id={name} {...register(name)}></input>
      <label className="text-sm" htmlFor={name}>{label}</label>
    </div>
  );
};

export default React.memo(Checkbox);
