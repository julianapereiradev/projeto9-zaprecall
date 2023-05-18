import styled from "styled-components";
import setaplay from "../assets/seta_play.png";
import { useState } from "react";

export default function Question(props) {
  const { id, question, answer } = props;
  const [displayTela1, setDisplayTela1] = useState(true);
  const [displayTela2, setDisplayTela2] = useState(false);


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
    //alert(`O idQuestion é ${idQuestion}`);
    setDisplayTela1(false);
    setDisplayTela2(true);
  }

  if (displayTela2 === true) {
    return (
      <>
        <p>{`Questao de numero ${id}`}</p>
        <p>{` A Questao é: ${question}`}</p>
      </>
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
