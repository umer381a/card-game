import Controls from "./components/Controls";
import Details from "./components/Details";
import OverView from "./components/OverView";
import Data from "./Data";
import { useState } from "react";
import { card } from "./model";

const App: React.FC = () => {
  const [cards, setCards] = useState<card[]>(Data);
  const [card, setCard] = useState<card | undefined>();
  const handleAsc = () => {
    const result = cards.sort((a, b) => (a.playerName > b.playerName ? 1 : -1));
    setCards([...result]);
  };
  const handleDesc = () => {
    const result = cards.sort((a, b) => (a.playerName < b.playerName ? 1 : -1));
    setCards([...result]);
  };

  // const handleSort = (direction: 'asc' | 'desc') => {
  //   let result = [...cards]
  //   if (direction === 'asc') {
  //     result = cards.sort((a, b) => (a.playerName > b.playerName ? 1 : -1));
  //   } else {
  //     result = cards.sort((a, b) => (a.playerName < b.playerName ? 1 : -1));
  //   }
  //   setCard
  // }
  const handleSubmit = (e: any) => {
    e.prevetDefault();
  };

  return (
    <div className="grid grid-cols-2 gap-8 m-5 ">
      <div>
        <OverView card={card} />
      </div>
      <div>
        <Controls
          handleAsc={handleAsc}
          handleDesc={handleDesc}
          handleSubmit={handleSubmit}
        />
      </div>
      <div>
        <Details cards={cards} setCard={setCard} />
      </div>
    </div>
  );
};

export default App;
