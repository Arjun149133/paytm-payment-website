"use client";
import { useBalance } from "@repo/store/useBalance";

const MainPage = () => {
  const bal = useBalance();
  return <div>MainPage is {bal} </div>;
};

export default MainPage;
