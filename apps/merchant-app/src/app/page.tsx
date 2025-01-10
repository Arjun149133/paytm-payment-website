"use client";
import { useSession } from "next-auth/react";

const MainPage = () => {
  const session = useSession();
  return <div>MainPage -- {JSON.stringify(session)} </div>;
};

export default MainPage;
