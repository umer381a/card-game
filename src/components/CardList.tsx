import { Props } from "./model";

type CardListPorps = {
  cards: Props[];
  handleCardSelect: (card: any) => void;
};

const CardList = ({ cards, handleCardSelect }: CardListPorps) => {
  return (
    <div className=" grid grid-cols-3 gap-2 ">
      {cards.map((card) => (
        <button
          onClick={(e) => handleCardSelect(card)}
          key={card.id}
          className="border bg-amber-300 hover:bg-amber-500 "
        >
          <ul>
            <li className="text-xl p-1">{card.realName}</li>
            <li className="text-xl font-bold p-1">{card.playerName}</li>
            <li className="text-xl p-1">{card.asset}</li>
          </ul>
        </button>
      ))}
    </div>
  );
};

export default CardList;
