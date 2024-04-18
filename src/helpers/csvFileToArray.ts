import { CSVObject } from "../interfaces";

export default (string: string): CSVObject[] => {
  const [header, ...rows] = string.split("\n");
  const csvHeader = header.split(",");
  const newArray: CSVObject[] = rows.map((row) =>
    row.split(",").reduce((acc, curr, index) => {
      acc[csvHeader[index].trim()] = curr.trim();
      return acc;
    }, {} as CSVObject)
  );

  return newArray;
};