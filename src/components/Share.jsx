/** @format */
import "../style.css";
import React from "react";
export default function Share() {
  function handleClick() {
    const share = document.querySelector(".share-container");
    if (share.style.visibility === "hidden") {
      share.style.visibility = "visible";
    } else {
      share.style.visibility = "hidden";
    }
  }
  return (
    <svg
      onClick={handleClick}
      xmlns='http://www.w3.org/2000/svg'
      width='15'
      height='13'
    >
      <path
        fill='#6E8098'
        d='M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z'
      />
    </svg>
  );
}
