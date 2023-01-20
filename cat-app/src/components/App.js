import React from "react";
import "./App.css";
import Card from "./Card/Card";

function App() {
  const data = {
    cards: [
      {
        id: 1,
        taste: "с фуа-гра",
        quantity: "10 порций",
        gift: "мышь в подарок",
        weight: "0,5",
        kg: "кг",
        title: "Котэ не одобряет?",
        textFooter: "Печень утки разварная с артишоками.",
        disabled: false,
      },
      {
        id: 2,
        taste: "с рыбой",
        quantity: "40 порций",
        gift: "2 мыши в подарок",
        weight: "2",
        kg: "кг",
        title: "Котэ не одобряет?",
        textFooter: "Головы щучьи с чесноком да свежайшая сёмгушка.",
        disabled: false,
      },
      {
        id: 3,
        taste: "с курой",
        quantity: "100 порций",
        gift: "5 мышей в подарок заказчик доволен",
        weight: "5",
        kg: "кг",
        title: "Котэ не одобряет?",
        textFooter: "Филе из цыплят с трюфелями в бульоне.",
        disabled: true,
      },
    ],
  };

  return (
    <div className="App">
      <div className="title">
        <h1 className="title">Ты сегодня покормил кота?</h1>
      </div>
      <div className="cards">
        {data.cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
