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
  const [cardListArr, setCardListArr] = useState([]);

  const ListCards = (props) => {
    const [isAddCardClicked, setIsAddCardClicked] = useState(false);

    const AddCard = (props) => (
      <div onClick={() => setIsAddCardClicked(true)}>Add Card</div>
    );

    const InputAddCard = (props) => (
      <Input
        className="input-list-card"
        placeholder="Card Name"
        onPressEnter={(event) =>
          setCardListArr([...cardListArr, event.target.value])
        }
      />
    );

    return isAddCardClicked ? <InputAddCard /> : <AddCard />;
  };

  const addListToBoard = (listName) => {
    setListArr([...listArr, listName]);
  };

  return (
    <>
      <BoardHeader boardName={props.boardName} />
      {/*<div className="list-container">*/}
      {/*  {boardListArr.map((listName) => (*/}
      {/*    <Card*/}
      {/*      actions={[<ListCards />]}*/}
      {/*      key={listName}*/}
      {/*      size="small"*/}
      {/*      className="list-card"*/}
      {/*    >*/}
      {/*      <p>{listName}</p>*/}
      {/*      {cardListArr.map((card) => (*/}
      {/*        <div key={card}>{card}</div>*/}
      {/*      ))}*/}
      {/*    </Card>*/}
      {/*  ))}*/}
      <List lists={listArr} addList={addListToBoard} />
      {/*</div>*/}
    </>
  );
};

export default Board;
