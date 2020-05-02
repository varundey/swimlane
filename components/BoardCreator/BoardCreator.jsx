import React from "react";
import { Input } from "antd";
import "./BoardCreator.css";

const { Search } = Input;

const BoardCreator = () => (
  <div className="board-creator">
    <Search
      placeholder="Board name"
      enterButton="Create"
      size="large"
      onSearch={(value) => console.log(value)}
    />
  </div>
);

export default BoardCreator;
