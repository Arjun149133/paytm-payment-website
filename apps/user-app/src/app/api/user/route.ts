import { NextResponse } from "next/server";
import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();

export const GET = async () => {
  const users = await client.user.findMany();

  return NextResponse.json({
    message: users,
  });
};
