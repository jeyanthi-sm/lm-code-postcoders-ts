import axios from "axios";
import { Place } from "../types/Area";

export const getAreaData = async (inputOuterPostCode: string) => {
  console.log(inputOuterPostCode);
  const { data } = await axios.get(
    `https://api.zippopotam.us/GB/${inputOuterPostCode}`
  );
  //   const { data } = await axios.get(
  // "https://api.xn--zippopotam-9p26i.us/GB/bb8"
  //   );
  return data.places as Array<Place>;
};
