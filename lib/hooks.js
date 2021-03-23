import { useState } from "react";

export const useMiDato = () => {
  const [miDato, setMiDato] = useState("Marce");
  return miDato;
};
