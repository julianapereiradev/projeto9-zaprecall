import React, { useState } from "react";
import cards from "./cards";
import Welcome from "./components/Welcome";
import ListQuestions from "./components/ListQuestions";

export default function App() {
  const [telaInicial, setTelaInicial] = useState("inicio");

  return (
    <>
      {telaInicial === "inicio" ? (
        <Welcome setTelaInicial={setTelaInicial} />
      ) : (
        <ListQuestions telaInicial={telaInicial} cards={cards} />
      )}
    </>
  );
}
