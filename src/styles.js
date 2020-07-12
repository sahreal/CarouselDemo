import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 850px) {
    display: flex;
    justify-content: center;
    width: 100vw;
  }
`;

export const Button = styled.button`
  background-color: gray;
  outline: none;
  border-radius: 10rem;
  cursor: pointer;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 1rem;

  :hover {
    background-color: coral;
  }

  @media only screen (max-height: 500px) and (max-width: 580px) {
    flex: 1;
  }
`;

export const ButtonRow = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
