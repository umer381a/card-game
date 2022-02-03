type ControlsProps = {
  handleAsc: () => void;
  handleDesc: () => void;
  handleSubmit: (e: any) => void;
};

const Controls = ({ handleAsc, handleDesc, handleSubmit }: ControlsProps) => {
  return (
    <div className="border w-80 h-60 bg-blue-400">
      <h1 className="text-4xl mb-2 p-5 text-center">Controls</h1>
      <div className="grid grid-cols-2 gap-1 pl-2 pr-2">
        <button
          className="btn bg-green-50 hover:bg-gray-400"
          onClick={handleAsc}
        >
          SORT ASC
        </button>
        <button
          className="btn bg-green-50 hover:bg-gray-400"
          onClick={handleDesc}
        >
          SORT DESC
        </button>
        <button
          className="btn bg-green-50 hover:bg-gray-400 col-span-2 mb-1"
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Controls;
