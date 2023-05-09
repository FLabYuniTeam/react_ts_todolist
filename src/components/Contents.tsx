import React from "react";

export default function Contents() {
  return (
    <>
      <li key="id" className="flex place-content-between ml-2">
        <label className="m-auto">Content</label>
        <input
          className="listItemInput text-sm text-center p-1 m-auto w-3/4 hidden"
          type="text"
          placeholder="수정할 내용을 입력해주세요."
        />
        <div className="item-icons ">
          <button className="complete-item mx-1 text-green-300 item-icon">
            <i className="far fa-check-circle"></i>
          </button>
          <button className="edit-item mx-1 text-blue-300 item-icon">
            <i className="far fa-edit"></i>
          </button>
          <button className="delete-item mx-1 text-red-300 item-icon">
            <i className="far fa-times-circle"></i>
          </button>
        </div>
      </li>
    </>
  );
}
