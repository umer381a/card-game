import { card } from "../model";

type CardListPorps = {
  cards: card[];
  setCard: React.Dispatch<React.SetStateAction<card | undefined>>;
};

const CardList = ({ cards, setCard }: CardListPorps) => {
  return (
    <div className=" grid grid-cols-3 gap-2 ">
      {cards.map((card) => (
        <button
          onClick={(e) => setCard(card)}
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
