import {
  Container,
  Title,
  Button,
  Image,
  LeftContainer,
  RightContainer,
  SubTitle,
  ButtonBox,
} from "./styles";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <LeftContainer>
        <Title>Salvando o Ecossistema</Title>
        <SubTitle>Identificando pontos de Incêndio mais próximos</SubTitle>

        <Link to="/new">
          <Button>
            <ButtonBox>{">"}</ButtonBox>
            Cadastre um novo ponto de Incêndio
          </Button>
        </Link>
      </LeftContainer>

      <RightContainer>
        <Image />
      </RightContainer>
    </Container>
  );
}
