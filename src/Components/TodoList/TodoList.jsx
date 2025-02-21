import React, { useState } from "react";
import { Input } from "antd";
import { CloseOutlined, EditOutlined, CheckOutlined } from "@ant-design/icons";
import "./List.css";

function TodoList({ todo, deleteTodo, updateTodo, searchText }) {
  const filterTodos = todo.filter((el) =>
    el.text.toLowerCase().includes(searchText.toLowerCase())
  );

  const [editTodoId, setEditTodoId] = useState(null);
  const [editText, setEditText] = useState("");

  const startEdit = (id, text) => {
    setEditTodoId(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    updateTodo(id, editText);
    setEditTodoId(null);
  };

  return (
    <div className="list">
      {filterTodos.length > 0 ? (
        filterTodos.map((el) => (
          <div key={el.id} className="list-items">
            {editTodoId === el.id ? (
              <Input
                style={{ width: 320 }}
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <div className="text-input">
                <p>{el.text}</p>
              </div>
            )}

            {editTodoId === el.id ? (
              <CheckOutlined onClick={() => saveEdit(el.id)} style={{color:"white"}} />
            ) : (
              <EditOutlined onClick={() => startEdit(el.id, el.text)} style={{color:"white"}} />
            )}

            <CloseOutlined onClick={() => deleteTodo(el.id)} style={{color:"white"}} />
          </div>
        ))
      ) : searchText ? (
        <p className="text">Axtarişa uyğun nəticə tapilmadi.</p>
      ) : null}
    </div>
  );
}

export default TodoList;
