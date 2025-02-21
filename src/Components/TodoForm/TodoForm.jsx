import React, { useState } from "react";
import { Input, Space } from "antd";
import { Button } from "antd";
import "./Form.css";
function TodoForm({ createTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const onCreateTodo = () => {
    if (!newTodo.trim()) return;

    const todoData = {
      id: Date.now(),
      text: newTodo,
    };
    createTodo(todoData);
    setNewTodo("");
  };
  return (
    <div>
      <Space direction="vertical">
        <div className="FormTodo">
          <Input
            placeholder="Yeni todo əlavə et..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onPressEnter={onCreateTodo}
          />

          <Button onClick={onCreateTodo} type="primary">
            Əlavə et
          </Button>
        </div>
      </Space>
    </div>
  );
}

export default TodoForm;
