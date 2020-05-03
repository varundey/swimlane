import React, { useState } from "react";
import { Card, Input, PageHeader } from "antd";
import List from "../List/List";
import "./Board.css";

const BoardHeader = (props) => (
  <PageHeader
    className="site-page-header"
    title={props.boardName}
    backIcon={false}
  />
);

const Board = (props) => {
  const [listArr, setListArr] = useState([]);

  const addListToBoard = (listName) => {
    setListArr([...listArr, listName]);
  };

  return (
    <>
      <BoardHeader boardName={props.boardName} />
      <List lists={listArr} addList={addListToBoard} />
    </>
  );
};

export default Board;
