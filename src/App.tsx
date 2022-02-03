import Controls from "./components/Controls";
import Details from "./components/Details";
import OverView from "./components/OverView";
import Data from "./components/Data";
import { useState } from "react";
import { Props } from "./components/model";

const App: React.FC = () => {
  const [cards, setCards] = useState<Props[]>(Data);
  const [card, setCard] = useState<Props | undefined>();
  //const [select, setSelect] = useState<boolean>(false);
  const handleAsc = () => {
    const result = cards.sort((a, b) => (a.playerName > b.playerName ? 1 : -1));
    setCards([...result]);
  };
  const handleDesc = () => {
    const result = cards.sort((a, b) => (a.playerName < b.playerName ? 1 : -1));
    setCards([...result]);
  };
  const handleSubmit = (e: any) => {
    e.prevetDefault();
  };
  const handleCardSelect = (card: any) => {
    setCard(card);
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
        <Details cards={cards} handleCardSelect={handleCardSelect} />
      </div>
    </div>
  );
};

export default App;
