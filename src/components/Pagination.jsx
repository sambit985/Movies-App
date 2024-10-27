import React from "react";

export default function Pagination({handlePrevPage, handlePostPage, pageNo}) {
  return (
    <div className="bg-gray-400 p-4 mt-8 flex justify-center">
      <div className="px-8" onClick={handlePrevPage}>
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div className="font-bold">{pageNo}</div>
      <div className="px-8" onClick={handlePostPage}>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}
