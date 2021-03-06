import React, { useState } from "react";
import { Card, Input } from "antd";
import SwimlaneCard from "../Card/SwimlaneCard";
import { v4 as uuid } from "uuid";

const { CardRenderer, AddCard } = SwimlaneCard;

const AddList = (props) => {
  const [isAddListClicked, setAddListClicked] = useState(false);
  const { addList } = props;

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
    const { addList } = props;
    return (
      <Input
        className="input-list-card"
        placeholder="List Name"
        onPressEnter={(event) => {
          const id = uuid();
          addList({ id, value: event.target.value });
        }}
      />
    );
  };
  return isAddListClicked ? (
    <InputListName addList={addList} />
  ) : (
    <AddListButton />
  );
};

const SwimlaneList = (props) => {
  const [cardsArr, setCardsArr] = useState([]);
  const { lists } = props;

  const addCardToList = (card) => {
    return setCardsArr([...cardsArr, card]);
  };

  const ListRenderer = (props) => {
    const { listName, id } = props;
    return (
      <Card
        actions={[<AddCard listId={id} addCard={addCardToList} />]}
        size="small"
        className="list-card"
      >
        <p>{listName}</p>
        <CardRenderer listId={id} cards={cardsArr} />
      </Card>
    );
  };

  return (
    <div className="list-container">
      {lists.map((list) => {
        const { id, value } = list;
        return <ListRenderer key={id} id={id} listName={value} />;
      })}
      <AddList addList={props.addList} />
    </div>
  );
};

export default SwimlaneList;
