import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data/data";

export default function Avatar() {
  const { id } = useParams();
  const avatar = data.find((item) => item.id === Number(id));
  
  return <div>{id}</div>;
}
