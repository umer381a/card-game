import { card } from "../model";
import CardList from "./CardList";

type DetailsProps = {
  cards: card[];
  handleCardSelect: (card: any) => void;
};

const Details = ({ cards, handleCardSelect }: DetailsProps) => {
  return (
    <div>
      <h1 className="text-4xl p-4">Details</h1>
      <CardList cards={cards} handleCardSelect={handleCardSelect} />
    </div>
  );
};

export default Details;
