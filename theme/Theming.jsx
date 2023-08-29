"use client";
import { ThemeProvider } from "next-themes";

import React from "react";

function Theming({ children }) {
  return (
    <>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </>
  );
}

export default Theming;
