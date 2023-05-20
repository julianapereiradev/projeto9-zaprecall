import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Welcome(props) {
  console.log(props);

  const { setTelaInicial } = props;

  function ChangeForQuestions() {
    setTelaInicial("listaquestoes");
  }

  return (
    <STContainer>
      <STMain>
        <STLogo src={logo} />
        <STLogoParagraph>ZapRecall</STLogoParagraph>
        <STButtonInitial
          data-test="start-btn"
          onClick={() => ChangeForQuestions()}
        >
          Iniciar Recall!
        </STButtonInitial>
      </STMain>
    </STContainer>
  );
}

const STContainer = styled.div`
  background-color: #fb6b6b;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const STMain = styled.div`
  width: 257px;
  height: 317px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const STLogo = styled.img`
  width: 136px;
  height: 161px;
`;

const STLogoParagraph = styled.p`
  font-size: 36px;
  color: #ffffff;
  font-family: "Righteous", cursive;
`;

const STButtonInitial = styled.button`
  width: 246px;
  height: 54px;
  background-color: #ffffff;
  color: #d70900;
  font-family: "Recursive", sans-serif;
  font-size: 18px;
  border: 1px solid #d70900;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;
