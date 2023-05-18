import styled from "styled-components";
import setaplay from "../assets/seta_play.png";
import setavirar from "../assets/seta_virar.png";
import { useState } from "react";

export default function Question(props) {
  const { id, question, answer } = props;
  const [displayTela1, setDisplayTela1] = useState(true);
  const [displayTela2, setDisplayTela2] = useState(false);
  const [displayTela3, setDisplayTela3] = useState(false);
  const [displayTela4, setDisplayTela4] = useState(false);

  if (displayTela1 === true) {
    return (
      <STContainerItemQuestion>
        <STPerguntaParagraph>Pergunta {id}</STPerguntaParagraph>
        <STButtonSetaPlay onClick={() => TheQuestion(id)}>
          <STImagePlay src={setaplay}></STImagePlay>
        </STButtonSetaPlay>
      </STContainerItemQuestion>
    );
  }

  function TheQuestion(idQuestion) {
    alert(`O idQuestion é ${idQuestion}`);
    setDisplayTela1(false);
    setDisplayTela2(true);
    setDisplayTela3(false);
  }

  if (displayTela2 === true) {
    return (
      <STContainerTheQuestion>
        <STTheQuestionParagraph>{question}</STTheQuestionParagraph>
        <STButtonSetaVirar onClick={() => TheAnswer(id)}>
          <STImageVirar src={setavirar}></STImageVirar>
        </STButtonSetaVirar>
      </STContainerTheQuestion>
    );
  }

  function TheAnswer(idAnswer) {
    alert(`O idAnswer é ${idAnswer}`);
    setDisplayTela1(false);
    setDisplayTela2(false);
    setDisplayTela3(true);
  }

  if (displayTela3 === true) {
    return (
      <div style={{ backgroundColor: "yellow", border: "4px solid black" }}>
        <p>{`Questao de numero ${id}`}</p>
        <p>{` A Resposta é: ${answer}`}</p>
        <button onClick={() => TheSituationButtons(id)}>errei</button>
        <button onClick={() => TheSituationButtons(id)}>acertei em parte</button>
        <button onClick={() => TheSituationButtons(id)}>acertei</button>
      </div>
    );
  }

  function TheSituationButtons(idSituation) {
    alert(`O idSituationB é ${idSituation}`);
    setDisplayTela1(false);
    setDisplayTela2(false);
    setDisplayTela3(false);
    setDisplayTela4(true);
    //colocar um set erros aqui
  }

  if (displayTela4 === true) {
    return (
      <div style={{ backgroundColor: "green", border: "4px solid black" }}>
        <p>{`PERGUNTA É dDE NUMERO${id}`}</p>
        <p>Colocar que aumentou numero </p>
        <p>Colocar que fica riscado </p>
      </div>
    );
  }

}

const STContainerItemQuestion = styled.div`
  background-color: #ffffff;
  width: 500px;
  height: 70px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const STPerguntaParagraph = styled.p`
  color: black;
  font-family: "Recursive", sans-serif;
  font-weight: bold;
  font-size: 18px;
  margin: 15px;
`;

const STImagePlay = styled.img`
  width: 15px;
  margin: 15px;
`;

const STButtonSetaPlay = styled.button`
  border: none;
  background-color: #ffffff;
  cursor: pointer;
`;

const STContainerTheQuestion = styled.div`
  background-color: #ffffd4;
  width: 500px;
  height: 120px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const STTheQuestionParagraph = styled.p`
  color: black;
  font-family: "Recursive", sans-serif;
  font-size: 18px;
  margin-left: 15px;
`;

const STButtonSetaVirar = styled.button`
  border: none;
  background-color: #ffffd4;
  cursor: pointer;
`;

const STImageVirar = styled.img`
  width: 20px;
  margin: 20px;
`;
