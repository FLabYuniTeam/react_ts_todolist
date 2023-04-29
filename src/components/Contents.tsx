import React, { useState } from "react";
import { Todo } from "../ts/Todo";

interface Props {
  todo: Todo;
  done: Todo;
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
  onInComplete: (id: number) => void;
  OnEdit: (id: number, content: string) => void;
}

export default function Contents({
  todo,
  done,
  onDelete,
  onComplete,
  onInComplete,
  OnEdit
}: Props) {
  const { id, content, completed = false } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState("");
  const [isCompleted, setIsCompleted] = useState(todo.completed);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditContent(e.target.value);
  };

  const handleSaveClick = () => {
    todo.content = editContent;
    setIsEditing(false);
  };

  const handleOnKeyEnter = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      handleSaveClick();
    }
  };

  return (
    <>
      <li
        key={todo.id}
        className="flex place-content-between ml-2 border-gray border-b mb-5"
      >
        {isEditing ? (
          <input
            className="listItemInput text-sm text-center p-1 m-auto w-3/4"
            type="text"
            placeholder="수정할 내용을 입력해주세요."
            value={editContent}
            onChange={handleInputChange}
            onKeyDown={handleOnKeyEnter}
            onBlur={handleSaveClick}
            autoFocus
          />
        ) : (
          <label className={`m-auto ${isCompleted ? "line-through" : ""}`}>
            {content}
          </label>
        )}
        <div className="item-icons ">
          <button
            className="complete-item mx-1 text-green-300 item-icon"
            onClick={() => {
              onComplete(todo.id);
              onInComplete(done.id);
              setIsCompleted(true);
            }}
          >
            <i className="far fa-check-circle"></i>
          </button>
          <button
            className="edit-item mx-1 text-blue-300 item-icon"
            onClick={() => {
              handleEditClick();
              OnEdit(todo.id, editContent);
            }}
          >
            <i className="far fa-edit"></i>
          </button>
          <button
            className="delete-item mx-1 text-red-300 item-icon"
            onClick={() => {
              onDelete(todo.id);
            }}
          >
            <i className="far fa-times-circle"></i>
          </button>
        </div>
      </li>
    </>
  );
}