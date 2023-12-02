import clsx from "clsx";

type Props = {
  itemsLength: number;
  selectedIndex: number;
};
const Dots = ({ itemsLength, selectedIndex }: Props) => {
  const arr = new Array(itemsLength).fill(0);
  return (
    <div className="flex gap-1 my-1 justify-center -translate-y-5 bg-primary rounded-lg p-1">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            className={clsx({
              "h-2 w-2 rounded-full transition-all duration-300 bg-white": true,
              // tune down the opacity if slide is not selected
              "opacity-50": !selected,
            })}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};
export default Dots;
