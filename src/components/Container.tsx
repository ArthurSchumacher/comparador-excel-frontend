import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="w-full mx-auto max-w-screen-lg p-8">{children}</div>;
};

export default Container;
