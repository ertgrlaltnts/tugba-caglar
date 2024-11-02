import styled from "styled-components";

export const Adm = {
  Container: styled.div``,

  Header: styled.div`
    width: 100%;
    height: 10vh;
    background: #fff;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    position: fixed;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-right: 100px;
  `,

  UserBlockText: styled.div`
    font-family: Quicksand;
    font-weight: 500;
    font-size: 14px;
    color: #000;
  `,

  FullScreen: styled.div`
    cursor: pointer;
    margin: 0 40px;
  `,

  Block: styled.div`
    display: flex;
    flex-direction: row;
  `,
  LeftSideBar: styled.div`
    position: fixed;
    width: 20%;
    background-color: #fff;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    z-index: 2;
  `,

  Logo: styled.img`
    width: 50%;
    object-fit: contain;
    margin-top: 40px;
  `,

  NavBar: styled.div`
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  Right: styled.div`
    width: 100%;
    margin-left: 20%;
    padding: 40px 20px;
    background-color: "#e7e7e7";
  `,

  UserBlock: styled.div`
    cursor: pointer;
  `,
};

export const BarElementText = styled.div`
  font-family: Quicksand;
  font-weight: 500;
  margin-top: -4px;
  transition: all 0.3s ease-in-out;
`;
export const BarElementIcon = styled.div`
  transition: all 0.3s ease-in-out;
`;

export const BarElement = styled.div`
  display: flex;
  color: ${(props) => props.active && "#bf8c41"};
  border-bottom: ${(props) => props.active && "3px solid #bf8c41"};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  padding: 5px 0;
  margin: 10px 0;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #bf8c41;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover {
    ${BarElementText} {
      color: #bf8c41;
    }

    ${BarElementIcon} {
      color: #bf8c41;
    }
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
