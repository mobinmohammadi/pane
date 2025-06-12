import React, { ReactNode } from "react";

type Props ={
    children : ReactNode
}

export default function Th({children} : Props) {
  return <th className="">{children}</th>;
}
