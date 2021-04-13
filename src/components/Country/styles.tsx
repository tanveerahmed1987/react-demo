import styled from "styled-components";

export const StyledInput = styled.input`
  background-color: rgb(222, 234, 246);
  box-shadow: rgb(190, 203, 216) 4px 4px 8px 0px inset,
    rgb(243, 249, 255) -4px -4px 8px 0px inset;
  -webkit-box-shadow: rgb(190, 203, 216) 4px 4px 8px 0px inset,
    rgb(243, 249, 255) -4px -4px 8px 0px inset;
  border-radius: 20px;
  -webkit-border-radius: 20px;
  outline: none;
  width: 90%;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 30px;
  font-size: 40px;
`;

export const Page = styled.div`
  /* background: linear-gradient(135deg, #a7cee0 50%, #d0dea7); */
  min-height: 800px;
  overflow: visible;
`;

export const GlassCard = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  border-radius: 18px;
  -webkit-border-radius: 18px;
  width: 90%;
  margin-top: 10px;

  min-height: 100px;
  padding: 30px;
`;

export const CountryWrapper = styled.div`
  > .name {
    font-weight: bold;
    font-size: 44px;
    text-align: center;
    margin-bottom: 20px;
  }

  > .container {
    display: grid;
    grid-template-columns: 1fr 1fr;

    > .left {
      > div {
        padding: 10px;
      }
    }

    > .right {
      > .emoji {
        margin-left: 20px;
        font-size: 40px;
      }

      > .language {
        padding: 20px;
        > ul {
          list-style-type: circle;
        }
      }
    }
  }
`;

export const ContinentWrapper = styled.div`
  > .name {
    font-weight: bold;
    font-size: 44px;
    text-align: center;
    margin-bottom: 20px;
  }

  > .list {
    list-style-type: none;

    > li {
      background-color: rgba(219, 216, 168, 0.5);
      box-shadow: rgb(219, 216, 168) -4px 4px 8px 0px,
        rgb(202, 202, 139) 4px -4px 8px 0px;
      -webkit-box-shadow: rgb(219, 216, 168) -4px 4px 8px 0px,
        rgb(202, 202, 139) 4px -4px 8px 0px;
      border-radius: 20px;
      -webkit-border-radius: 20px;
      margin: 20px;
      padding: 20px;
    }
  }
`;
