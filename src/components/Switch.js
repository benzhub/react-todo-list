import React from "react";
import classNames from "classnames";

const Switch = ({ checked, onChange }) => {
  return (
    <div className="p-4 flex justify-end items-top gap-2 pb-10">
      <p className="text-gray-600/70">Move done things to end?</p>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={onChange}
        />
        <div
          className={classNames(
            "relative w-11 h-6 rounded-full transition-colors duration-300 ease-in-out",
            {
              "bg-gray-300": checked,
              "bg-gray-100": !checked,
            }
          )}
        >
          <div
            className={classNames(
              "absolute left-0.5 top-0.5 w-5 h-5 rounded-full transition-transform duration-300 ease-in-out",
              {
                "translate-x-5 bg-gray-100": checked,
                "translate-x-0 bg-gray-300": !checked,
              }
            )}
          />
        </div>
      </label>
    </div>
  );
};

export default Switch;
