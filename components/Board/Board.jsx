import React, { useState } from "react";
import { Card, Input, PageHeader } from "antd";
import SwimlaneList from "../List/SwimlaneList";
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
      <SwimlaneList lists={listArr} addList={addListToBoard} />
    </>
  );
};

export default Board;
