import React from "react";
import classnames from "classnames";

function Sidebar({ isOpen, onClose }) {
  return (
    <div
      className={classnames(
        "fixed inset-0 z-40 transition-opacity",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
      <div
        className={classnames(
          "fixed inset-y-0 left-0 w-64 z-50 bg-white overflow-y-auto transition-all duration-300 transform",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between h-16 px-4 bg-gray-800">
          <h1 className="text-white text-lg font-bold">Chapters</h1>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-400 focus:text-gray-400 focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M14.59 12l5.7-5.7a1 1 0 0 0-1.42-1.4L13 10.58 7.3 4.88a1 1 0 1 0-1.42 1.4L11.58 12l-5.7 5.7a1 1 0 0 0 1.42 1.4L13 13.42l5.7 5.7a1 1 0 0 0 1.42-1.4L14.59 12z" />
            </svg>
          </button>
        </div>
        <nav className="px-4 pt-6">
          <ul>
            <li>
              <a href="#">Chapter 1</a>
            </li>
            <li>
              <a href="#">Chapter 2</a>
            </li>
            <li>
              <a href="#">Chapter 3</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
