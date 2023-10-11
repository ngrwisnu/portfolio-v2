import React, { ReactNode } from "react";

const MainContent = ({ children }: { children: ReactNode }) => {
  return (
    <main className="my-20 flex w-full flex-col items-center gap-[136px]">
      {children}
    </main>
  );
};

export default MainContent;
