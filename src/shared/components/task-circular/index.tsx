import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

interface ITaskCircular {
  completed: number;
  percentHelper: (arg: number) => number;
  circularColor: string;
  description: string;
}

export const TaskCircular: React.FC<ITaskCircular> = ({
  completed,
  percentHelper,
  circularColor,
  description,
}) => {
  return (
    <div className="relative w-[150px] h-[150px]">
      <CircularProgressbar
        value={percentHelper(completed)}
        styles={buildStyles({
          pathColor: `${circularColor}`,
          trailColor: "#e5e7eb",
          textSize: "20px",
          pathTransitionDuration: 1,
        })}
      />
      <div className="absolute inset-0 flex items-center justify-center text-black font-semibold text-sm">
        {percentHelper(completed)}%
      </div>
      <p className="text-center mt-2 text-sm text-zinc-500">
        <span style={{ color: circularColor }}>● </span>  
        {description}
      </p>
    </div>
  );
};
