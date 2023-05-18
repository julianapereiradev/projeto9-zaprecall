import styled from "styled-components";
import setaplay from "../assets/seta_play.png";
import setavirar from "../assets/seta_virar.png";
import certo from "../assets/icone_certo.png";
import quase from "../assets/icone_quase.png";
import erro from "../assets/icone_erro.png";
import { useState } from "react";

export default function Question(props) {
  const { id, question, answer, contagem, setContagem } = props;
  const [displayTela1, setDisplayTela1] = useState(true);
  const [displayTela2, setDisplayTela2] = useState(false);
  const [displayTela3, setDisplayTela3] = useState(false);
  const [displayTela4, setDisplayTela4] = useState(false);
  const [iconButtonSituation, setIconButtonSituation] = useState();
  const [colorFinishQuestionParagraph, setColorFinishQuestionParagraph] = useState("#000000");
  const [dataTest, setDataTest] = useState("")

  if (displayTela1 === true) {
    return (
      <STContainerItemQuestion data-test="flashcard">
        <STPerguntaParagraph data-test="flashcard-text">Pergunta {id}</STPerguntaParagraph>
        <STButtonSetaPlay data-test="play-btn" onClick={() => TheQuestion(id)}>
          <STImagePlay src={setaplay}></STImagePlay>
        </STButtonSetaPlay>
      </STContainerItemQuestion>
    );
  }

  function TheQuestion(idQuestion) {
    setDisplayTela1(false);
    setDisplayTela2(true);
    setDisplayTela3(false);
    setDisplayTela4(false);
  }

  if (displayTela2 === true) {
    return (
      <STContainerTheQuestion>
        <STTheQuestionParagraph data-test="flashcard-text">{question}</STTheQuestionParagraph>
        <STButtonSetaVirar data-test="turn-btn" onClick={() => TheAnswer(id)}>
          <STImageVirar src={setavirar}></STImageVirar>
        </STButtonSetaVirar>
      </STContainerTheQuestion>
    );
  }

  function TheAnswer(idAnswer) {
    setDisplayTela1(false);
    setDisplayTela2(false);
    setDisplayTela3(true);
    setDisplayTela4(false);
  }

  if (displayTela3 === true) {
    return (
      <STContainerTheAnswer>
        <STTheAnswerParagraph data-test="flashcard-text">{answer}</STTheAnswerParagraph>
        <STDivButtonSituation>
          <STButtonSituation1 data-test="no-btn" onClick={() => TheSituationButtons("Erro")}>
            Não lembrei
          </STButtonSituation1>
          <STButtonSituation2 data-test="partial-btn" onClick={() => TheSituationButtons("Quase")}>
            Quase não lembrei
          </STButtonSituation2>
          <STButtonSituation3 data-test="zap-btn" onClick={() => TheSituationButtons("Certo")}>
            Zap!
          </STButtonSituation3>
        </STDivButtonSituation>
      </STContainerTheAnswer>
    );
  }

  function TheSituationButtons(nameButton) {
    setDisplayTela1(false);
    setDisplayTela2(false);
    setDisplayTela3(false);
    setDisplayTela4(true);

    if (nameButton === "Erro") {
      setIconButtonSituation(erro);
      setDataTest("no-icon")
      setColorFinishQuestionParagraph('#FF3030')
    } else if (nameButton === "Quase") {
      setIconButtonSituation(quase);
      setDataTest("partial-icon")
      setColorFinishQuestionParagraph('#FF922E')
    } else if (nameButton === "Certo") {
      setIconButtonSituation(certo);
      setDataTest("zap-icon")
      setColorFinishQuestionParagraph('#2FBE34')
    }

    let total = contagem + 1;
    setContagem(total);
  }

  if (displayTela4 === true) {
    return (
      <STContainerFinishQuestion>
        <STFinishQuestionParagraph data-test="flashcard-text" colorFinish={colorFinishQuestionParagraph}>Pergunta {id}</STFinishQuestionParagraph>
        <STFinishQuestionImage 
          data-test={dataTest}
          src={iconButtonSituation}
        ></STFinishQuestionImage>
      </STContainerFinishQuestion>
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

const STContainerFinishQuestion = styled.div`
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

const STFinishQuestionParagraph = styled.p`
  color: ${ (props) => props.colorFinish };
  font-family: "Recursive", sans-serif;
  font-weight: bold;
  font-size: 18px;
  margin: 15px;
  text-decoration: line-through;
`;

const STFinishQuestionImage = styled.img`
  width: 20px;
  margin: 20px;
`;
