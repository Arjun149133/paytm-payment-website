"use client";
import { useBalance } from "@repo/store/useBalance";
import { useSession } from "next-auth/react";

const MainPage = () => {
  const bal = useBalance();
  const session = useSession();
  return (
    <div>
      MainPage is {bal} --- {JSON.stringify(session)}{" "}
    </div>
  );
};

export default MainPage;
