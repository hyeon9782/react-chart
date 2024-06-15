import { MouseEvent, useState } from "react";

type TreeItem = {
  label: string;
  children: TreeItem[];
};

type Props = {
  items: TreeItem[];
};
const TreeItem = ({ items }: Props) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem =
    (index: number, item: TreeItem) => (e: MouseEvent<HTMLElement>) => {
      e.stopPropagation();

      setOpenIndexes((prevOpenIndexes) =>
        prevOpenIndexes.includes(index)
          ? prevOpenIndexes.filter((i) => i !== index)
          : [...prevOpenIndexes, index]
      );
    };
  return (
    <ul>
      {items.map((item, index) => (
        <li onClick={toggleItem(index, item)}>
          <span>{item.label}</span>
          {openIndexes.includes(index) && item?.children && (
            <TreeItem items={item.children} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default TreeItem;
