import React from "react";
import styled from "styled-components";
import cards from "./cards";
import logo from "./assets/logo.png";
import Question from "./components/Question";

export default function App() {
  return (
    <STContainer>
      <STContainerLogo>
        <STLogo src={logo} alt="logo-zaprecall" />
        <STLogoParagraph>ZapRecall</STLogoParagraph>
      </STContainerLogo>
      <STContainerListQuestions>
        {cards.map((card) => {
          return (
            <Question
              id={card.id}
              question={card.question}
              answer={card.answer}
            />
          );
        })}
      </STContainerListQuestions>
      <STFooterContainer>
        <STFooterParagraph> 0/8 CONCLUÍDOS</STFooterParagraph>
      </STFooterContainer>
    </STContainer>
  );
}

const STContainer = styled.div`
  background-color: #fb6b6b;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const STContainerLogo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 50px;
`;

const STLogo = styled.img`
  width: 52px;
  height: 60px;
  margin-right: 10px;
`;

const STLogoParagraph = styled.p`
  font-size: 36px;
  color: #ffffff;
  font-family: 'Righteous', cursive;
  margin-left: 10px;
`;

const STContainerListQuestions = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const STFooterContainer = styled.div`
  background-color: white;
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const STFooterParagraph = styled.p`
  color: black;
  font-family: 'Recursive', sans-serif;
  font-size: 18px;
  margin: 20px 0px;
`;
