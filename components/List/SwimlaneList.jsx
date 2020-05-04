import React, { useState } from "react";
import { Card, Input } from "antd";
import SwimlaneCard from "../Card/SwimlaneCard";

const { CardRenderer, AddCard } = SwimlaneCard;

const SwimlaneList = (props) => {
  const [cardsArr, setCardsArr] = useState([]);

  const addCardToList = (cardName) => {
    return setCardsArr([...cardsArr, cardName]);
  };

  const AddList = (props) => {
    const [isAddListClicked, setAddListClicked] = useState(false);

    const AddListButton = (props) => (
      <Card
        size="small"
        className="add-list-card"
        onClick={(_) => setAddListClicked(true)}
      >
        <p>Add List</p>
      </Card>
    );

    const InputListName = (props) => {
      return (
        <Input
          className="input-list-card"
          placeholder="List Name"
          onPressEnter={(event) => props.addList(event.target.value)}
        />
      );
    };
    return isAddListClicked ? (
      <InputListName addList={props.addList} />
    ) : (
      <AddListButton />
    );
  };

  const ListRenderer = (props) => {
    const { listName } = props;
    return (
      <Card
        actions={[<AddCard addCard={addCardToList} />]}
        size="small"
        className="list-card"
      >
        <p>{listName}</p>
        <CardRenderer cards={cardsArr} addCard={addCardToList} />
      </Card>
    );
  };

  return (
    <div className="list-container">
      {props.lists.map((listName) => (
        <ListRenderer key={listName} listName={listName} />
      ))}
      <AddList addList={props.addList} />
    </div>
  );
};

export default SwimlaneList;
