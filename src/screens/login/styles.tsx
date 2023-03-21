import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    height: 100vh;
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-areas: "A B" "C C";
  }
`;

export const SignInContainer = styled.div`
  margin-top: 20px;
  width: min(300px, 60%);
  margin-inline: auto;

  display: flex;
  flex-direction: column;

  h3 {
    font-size: 22px;
    margin-top: 20px;
  }

  svg.logo {
    width: 48px;
    margin-bottom: 40px;
    margin-top: 10px;
  }

  h1 {
    font-size: 40px;
  }

  h4 {
    margin-top: 40px;
  }

  .foot {
    width: 298px;
    font-size: 12px;
    margin-top: 10px;
  }

  @media (min-width: 1024px) {
    grid-area: B;
  }
`;

export const GoogleButton = styled.button`
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-block: 10px;

  margin-top: 10px;
  width: 298px;

  border-radius: 30px;

  font-size: 16px;
  font-weight: 400;

  svg {
    width: 20px;
  }

  border: 1px solid #ebedef;

  &:hover {
    border: 1px solid #cecdcd;
    background-color: #e6e6e6;
    cursor: pointer;
  }
`;

export const AppleButton = styled(GoogleButton)`
  font-weight: 600;
`;

export const CellButton = styled(GoogleButton)`
  color: white;
  background-color: #1d9bf0;
  border: none;

  &:hover {
    background-color: #1a8cd8;
    border: none;
  }
`;

export const SignInButton = styled(GoogleButton)`
  color: #1d9bf0;
  font-weight: 700;
  margin-bottom: 40px;
`;

export const Divisor = styled.div`
  width: 298px;
  display: flex;
  align-items: center;
  margin-block: 10px;

  &::before {
    content: "";
    height: 1px;
    background-color: #ebedef;
    width: 140px;
  }
  &::after {
    content: "";
    height: 1px;
    background-color: #ebedef;
    width: 140px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
  }

  svg {
    width: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);

    path {
      fill: white;
    }
  }

  @media (min-width: 1024px) {
    grid-area: A;
    height: 100%;

    img {
      width: auto;
      height: 100%;
    }
  }
`;

export const Footer = styled.div`
  font-size: 12px;
  height: auto;
  padding: 10px 10px;

  @media (min-width: 1024px) {
    grid-area: C;
  }
`;
