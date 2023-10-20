"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import Nav from "./components/Nav";
import Balance from "./components/Balance";

export default function Home() {
  return (
    <NextUIProvider className="dark">
      <Nav />
      <Balance />
    </NextUIProvider>
  );
}
