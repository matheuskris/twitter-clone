import styled from "styled-components";
import TwitterLogo from "../../../../public/images/logo.svg";

export const SideContainer = styled.div`
  flex-grow: 1;
  height: 100%;
  border-right: 1px solid #e7e7e8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 10px 10px 60px;
  background-color: white;

  @media (max-width: 1024px) {
    padding: 30px 10px 10px 10px;
    align-items: center;
  }
`;
export const MenuContainer = styled.ul`
  font-size: 20px;
  font-weight: 400;

  li {
    list-style: none;

    a {
      color: black;
      text-decoration: none;
      display: flex;

      &:hover div {
        transition: 0.2s;
        background-color: #e7e7e8;
      }

      div {
        padding: 10px 20px 10px 10px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 16px;

        border-radius: 30px;
        transition: 0.2s;

        @media (max-width: 1024px) {
          padding: 10px;

          span {
            display: none;
          }
        }

        svg {
          width: 26px;
        }
      }
    }
    &:nth-of-type(1) {
      div {
        padding: 10px;
      }

      &:hover {
        div {
          background-color: #e8f5fd;
        }
      }
    }
  }
`;

export const LogoStyled = styled(TwitterLogo)`
  width: 30px;
`;

export const TwitButton = styled.button`
  margin-top: 10px;
  width: 80%;

  color: white;
  background-color: #1d9bf0;
  font-size: 20px;
  font-weight: 500;
  padding: 10px;
  border: none;
  border-radius: 30px;
  transition: 0.2s;

  svg {
    display: none;
    width: 30px;
  }

  &:hover {
    background-color: #1a8cd8;
    cursor: pointer;
    transition: 0.2s;
  }

  @media (max-width: 1024px) {
    width: auto;
    span {
      display: none;
    }
    svg {
      display: flex;
    }
  }
`;

export const PerfilConfigButton = styled.div`
  margin-top: auto;
  margin-bottom: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 30px;
  width: 100%;
  height: 60px;

  &:hover {
    background-color: #e7e7e8;
    cursor: pointer;
  }

  .image-container {
    height: 44px;
    border-radius: 30px;
    overflow: hidden;

    img {
      width: 44px;
    }
  }

  svg {
    width: 30px;
  }

  @media (max-width: 1024px) {
    width: auto;

    .names,
    .config {
      display: none;
    }
  }
`;
