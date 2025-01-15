import React from "react";

function Header ({title="", description=""}) {
  return (
    <nav className="p-4">
      <h1 className="text-3xl text-gray-600/70">{title}</h1>
      <p className="px-1 text-sm text-gray-400">{description}</p>
    </nav>
  );
};

export default Header;
