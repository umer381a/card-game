import { Props } from "./model";

type OverViewProps = {
  card: Props | undefined;
};
const OverView = ({ card }: OverViewProps) => {
  return (
    <div className="border p-5 h-60 w-160 bg-green-400">
      <h1 className="text-4xl">Overview</h1>
      <p className="text-xl mt-2">Please select player for more details</p>
      {card && (
        <ul className="m-4 list-disc">
          <li>{card?.realName}</li>
          <li>{card?.playerName}</li>
          <li>{card?.asset}</li>
        </ul>
      )}
    </div>
  );
};

export default OverView;
