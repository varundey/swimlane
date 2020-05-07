import React, { useState } from "react";
import { Input } from "antd";
import "./BoardCreator.css";
import Board from "../Board/Board";

const { Search } = Input;

const BoardCreator = () => {
  const [isBoardDisplayed, setIsBoardDisplayed] = useState(false);
  const [boardName, setBoardName] = useState("");

  const CreateBoard = () => (
    <div className="board-creator">
      <Search
        placeholder="Board name"
        enterButton="Create"
        size="large"
        onSearch={(value) => {
          setIsBoardDisplayed(true);
          setBoardName(value);
        }}
      />
    </div>
  );

  return isBoardDisplayed ? <Board boardName={boardName} /> : <CreateBoard />;
};

export default BoardCreator;
