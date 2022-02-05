import { card } from "../model";
import CardList from "./CardList";

type DetailsProps = {
  cards: card[];
  setCard: React.Dispatch<React.SetStateAction<card | undefined>>;
};

const Details = ({ cards, setCard }: DetailsProps) => {
  return (
    <div>
      <h1 className="text-4xl p-4">Details</h1>
      <CardList cards={cards} setCard={setCard} />
    </div>
  );
};

export default Details;
