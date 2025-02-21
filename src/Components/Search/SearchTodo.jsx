import React, { useState } from "react";
import "./Search.css";
import { Input, Space } from "antd";
const { Search } = Input;

function SearchTodo({ searchText, setSearchText }) {
  return (
    <div>
      <Space direction="vertical">
        <Search
          placeholder="input search text"
          enterButton
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Space>
    </div>
  );
}

export default SearchTodo;
