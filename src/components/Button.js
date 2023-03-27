import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-5 py-2 m-3 bg-gray-200 rounded font-medium hover:bg-slate-900 hover:text-gray-100">
        {name}
      </button>
    </div>
  );
};

export default Button;
