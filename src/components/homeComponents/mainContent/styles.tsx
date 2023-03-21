import styled from "styled-components";

export const ContentContainer = styled.div`
  width: min(90vw, 600px);
  border-right: 1px solid #e7e7e8;

  nav {
    position: fixed;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    padding-inline: 20px;
    font-size: 20px;
    font-weight: 700;

    svg {
      width: 24px;
    }
  }
`;

export const TweetInput = styled.section`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    height: 60px;
    border: none;
    width: 100%;
    padding: 30px 30px;
    font-size: 18px;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 6px 30px;

    button {
      background-color: #1d9bf0;
      font-size: 16px;
      font-weight: 700;
      color: white;
      border: none;
      border-radius: 30px;
      padding: 10px 20px;
    }
  }
`;
