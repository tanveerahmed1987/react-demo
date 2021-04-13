import styled from "styled-components";

export const CounterWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledText = styled.div`
  display: inline-block;
  font-size: 34px;
  color: #37474f;
  padding: 20px;
`;

export const Nav = styled.nav`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: grid;
  > a {
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bolder;

    background-color: rgba(89, 89, 89, 0.1);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    border: 0px solid rgba(255, 255, 255, 0.18);
    box-shadow: rgba(14, 14, 14, 0.19) 0px 6px 15px 0px;
    -webkit-box-shadow: rgba(14, 14, 14, 0.19) 0px 6px 15px 0px;
    border-radius: 25px;
    -webkit-border-radius: 25px;
    /* color: rgba(128, 128, 128, 0.4); */
    padding: 20px;
    width: 300px;
    height: 10%;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(30px);
      -webkit-backdrop-filter: blur(30px);
      border: 0px solid rgba(255, 255, 255, 0.18);
      box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
      -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
      border-radius: 25px;
      -webkit-border-radius: 25px;
      color: rgba(119, 10, 10, 0.3);
    }
  }
`;

export const TimeWrapper = styled.div`
  font-family: Roboto-Bold;
  font-size: 84px;
  color: #37474f;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
