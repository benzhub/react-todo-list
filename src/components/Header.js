import React from "react";

/**
* 標題組件：用於顯示標題和描述
* @param {string} title - 標題文字
* @param {string} description - 描述文字
 * **/
function Header ({title="", description=""}) {
  return (
    <nav className="p-4 pt-10">
      <h1 className="text-3xl text-gray-600/70">{title}</h1>
      <p className="px-1 text-sm text-gray-400">{description}</p>
    </nav>
  );
};

export default Header;
