import styled from "styled-components";
import setaplay from "../assets/seta_play.png";
import setavirar from "../assets/seta_virar.png";
import { useState } from "react";

export default function Question(props) {
  const { id, question, answer, contagem, setContagem } = props;
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
      <STContainerTheAnswer>
        <STTheAnswerParagraph>{answer}</STTheAnswerParagraph>
        <STDivButtonSituation>
          <STButtonSituation1 onClick={() => TheSituationButtons(id)}>
            Não lembrei
          </STButtonSituation1>
          <STButtonSituation2 onClick={() => TheSituationButtons(id)}>
            Quase não lembrei
          </STButtonSituation2>
          <STButtonSituation3 onClick={() => TheSituationButtons(id)}>
            Zap!
          </STButtonSituation3>
        </STDivButtonSituation>
      </STContainerTheAnswer>
    );
  }

  function TheSituationButtons(idSituation) {
    alert(`O idSituationB é ${idSituation}`);
    setDisplayTela1(false);
    setDisplayTela2(false);
    setDisplayTela3(false);
    setDisplayTela4(true);
    let total = contagem + 1;
    setContagem(total);
  }

  if (displayTela4 === true) {
    return (
      <div
        style={{
          backgroundColor: "white",
          border: "4px solid black",
          width: "500px",
          height: "70px",
        }}
      >
        <p>{`PERGUNTA DE NUMERO ${id} AQUI`}</p>
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

const STContainerTheAnswer = styled.div`
  background-color: #ffffd4;
  width: 500px;
  height: 120px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const STTheAnswerParagraph = styled.p`
  color: black;
  font-family: "Recursive", sans-serif;
  font-size: 18px;
  margin-left: 15px;
  margin-top: 10px;
`;

const STDivButtonSituation = styled.div`
  margin-bottom: 10px;
  height: 38px;
  display: flex;
  flex-direction: row;
`;

const STButtonSituation1 = styled.button`
  border: none;
  background-color: #ff3030;
  color: #ffffff;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 5px;
  width: 85px;
  height: 38px;
`;

const STButtonSituation2 = styled.button`
  border: none;
  background-color: #ff922e;
  color: #ffffff;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 5px;
  width: 85px;
  height: 38px;
`;

const STButtonSituation3 = styled.button`
  border: none;
  background-color: #2fbe34;
  color: #ffffff;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 5px;
  width: 85px;
  height: 38px;
`;
