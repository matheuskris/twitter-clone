import TwitterLogo from "../../../public/images/logo.svg";
import GoogleIcon from "../../../public/images/google-icon.svg";
import AppleLogo from "../../../public/images/apple-icon.svg";
import BackGround from "../../../public/images/indexpage-img.png";

import {
  SignInContainer,
  GoogleButton,
  AppleButton,
  CellButton,
  Divisor,
  SignInButton,
  ImageContainer,
  Footer,
  Container,
} from "./styles";
import Image from "next/image";

const Auth = () => {
  return (
    <Container>
      <SignInContainer>
        <TwitterLogo className="logo" />
        <h1>Acontecendo Agora</h1>
        <h3>Inscreva-se no Twitter hoje Mesmo</h3>
        <GoogleButton>
          <GoogleIcon />
          Inscrever-se com o google
        </GoogleButton>
        <AppleButton>
          <AppleLogo />
          Inscrever-se com a apple
        </AppleButton>
        <Divisor>ou</Divisor>
        <CellButton>Inscreva-se com número de celular...</CellButton>
        <span className="foot">
          Ao inscrever, você concorda com os Termos de serviço e a Política de
          Privacidade, incluindo o Uso de cookies
        </span>
        <h4>Já tem uma conta?</h4>
        <SignInButton>Entrar</SignInButton>
      </SignInContainer>

      <ImageContainer>
        <Image fill src="/images/indexpage-img.png" alt="outra imagem" />
        <TwitterLogo />
      </ImageContainer>

      <Footer>Sobre Central de ajuda Termos de serviço etc</Footer>
    </Container>
  );
};

export default Auth;
