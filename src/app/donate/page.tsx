"use client";
import Donate from "@/page/Donate";
import ReduxProvider from "@/services/ReduxProvider";

export default function DonatePage(): React.ReactNode {
  return (
    <ReduxProvider>
      <Donate></Donate>
    </ReduxProvider>
  );
}
