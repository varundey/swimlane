import React, { useState } from "react";
import { Input } from "antd";
import { v4 as uuid } from "uuid";

const AddCard = (props) => {
  const [isAddCardClicked, setIsAddCardClicked] = useState(false);

  const AddCardButton = (props) => (
    <div onClick={() => setIsAddCardClicked(true)}>Add Card</div>
  );

  const InputCardName = (props) => {
    const { addCard, listId } = props;
    return (
      <Input
        className="input-list-card"
        placeholder="Card Name"
        onPressEnter={(event) => {
          const id = uuid();
          addCard({ listId, id, value: event.target.value });
          setIsAddCardClicked(false);
        }}
      />
    );
  };

  return isAddCardClicked ? (
    <InputCardName listId={props.listId} addCard={props.addCard} />
  ) : (
    <AddCardButton />
  );
};

const CardRenderer = (props) => {
  const { cards, listId } = props;
  return (
    <div className="card-container">
      {cards
        .filter((card) => card.listId === listId)
        .map((card) => {
          const { id, value } = card;
          return <div key={id}>{value}</div>;
        })}
    </div>
  );
};

export default {
  CardRenderer,
  AddCard,
};
