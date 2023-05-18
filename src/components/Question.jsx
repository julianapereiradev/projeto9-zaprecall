import styled from "styled-components";
import setaplay from "../assets/seta_play.png";

export default function Question(props) {
  const { id, question, answer } = props;

  return (
    <STContainerItemQuestion>
      <STPerguntaParagraph>Pergunta {id}</STPerguntaParagraph>
      <STButtonSetaPlay>
        <STImagePlay src={setaplay}></STImagePlay>
      </STButtonSetaPlay>
    </STContainerItemQuestion>
  );
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
  font-family: 'Recursive', sans-serif;
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
   background-color: #FFFFFF;
   cursor: pointer;
`