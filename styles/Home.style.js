import styled, { keyframes } from "styled-components";
import { device } from "../data/breakpoint";
import Image from "next/image";
import Link from "next/link";
import bg from "/public/image/bookbanner.webp";

export const Hmp = {
  Video: styled.video`
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: relative;
    border-bottom: 10px solid #bf8c41;
  `,

  Source: styled.source``,
  Container: styled.div``,
  TopBlock: styled.div`
    background-image: 
      url("${(props) => props.image}");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    position: relative;
  `,

  TopBlockImage: styled(Image)`
  width: 100%;
  height:100vh;
  object-fit:cover;
`,


  TextTitle: styled.div`
    font-size: 35px;
     
    font-weight: 600;
    color: #fff;
    margin-top: 200px;
    text-align: center;

    @media ${device.laptop} {
      font-size: 30px;
      margin-top: 100px;
    }

    @media ${device.mobileL} {
      font-size: 18px;
      padding: 0 10px;
      margin-top: 80px;
    }

    @media ${device.mobileM} {
      font-size: 16px;
      padding: 0 10px;
      margin-top: 50px;
    }
  `,
  Text: styled.div`
    font-size: 18px;
     
    font-weight: 400;

    color: #fff;
    width: 700px;
    text-align: center;
    margin-top: 10px;
    @media ${device.laptop} {
      font-size: 14px;
    }

    @media ${device.tablet} {
      max-width: 60%;
    }

    @media ${device.mobileL} {
      font-size: 12px;
    }

    @media ${device.mobileM} {
      font-size: 10px;
    }
  `,
  More: styled.div`
     
    font-weight: 600;
    background-color: #bf8c41;
    font-size: 20px;
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
    margin-top: 20px;
    cursor: pointer;
    opacity: 0.8;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 0.3;
    }

    @media ${device.laptop} {
      font-size: 18px;
    }

    @media ${device.mobileL} {
      font-size: 16px;
    }

    @media ${device.mobileM} {
      font-size: 14px;
    }
  `,

  MidBlock: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Services: styled.div`
    width: 80%;

    @media ${device.laptop} {
      margin: 0 50px;
    }

    @media ${device.mobileL} {
      margin: 0 20px;
    }
  `,

  ServicesText: styled.div`
    color: "#000";
     
    font-size: 30px;
    margin: 40px 0;
  `,

  Banner: styled.div`
    background-image: url("${(props) => props.image}");
    width: 100%;
    height: 30vh;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  BannerTitle: styled.div`
     
    color: #fff;
    font-size: 30px;
  `,
  BannerText: styled.div`
     
    color: #fff;
    font-size: 20px;
    margin-top: 10px;
  `,
  BannerButton: styled.div`
     
    background-color: #bf8c41;
    font-size: 20px;
    padding: 5px 15px;
    border-radius: 5px;
    color: #fff;
    margin-top: 20px;
    cursor: pointer;
    opacity: 0.8;
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 0.3;
    }
  `,

  Contact: styled.div`
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.8)
      ),
      url("${(props) => props.image}");
    width: 100%;
    padding: 20px 0;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  `,
  ContactRow: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 200px;
    @media ${device.laptop} {
      margin: 0 100px;
    }

    @media ${device.mobileL} {
      margin: 0 30px;
    }
  `,

  ContactTextBlock: styled.div`
    margin-bottom: 40px;
    margin-top: 20px;
  `,

  ContactTitle: styled.div`
     
    font-weight: 600;
    font-size: 30px;
    text-align: center;
    color: #fff;

    @media ${device.laptop} {
      font-size: 25px;
    }

    @media ${device.mobileL} {
      font-size: 20px;
    }

    @media ${device.mobileM} {
      font-size: 16px;
    }
  `,
  ContactText: styled.div`
     
    font-size: 15px;
    text-align: center;
    color: #fff;
    margin-top: 5px;

    @media ${device.laptop} {
      font-size: 12px;
      max-width: 100%;
    }
  `,
  ContactBlockRow: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10px;

    @media ${device.mobileL} {
      flex-direction: column;
    }
  `,
  ContactBlock: styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(225, 225, 225, 0.4);
    height: 80px;
    padding: 0 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    margin-bottom: 10px;
    text-align: center;
    margin: 0 10px 10px 10px;
    text-decoration: none;
  `,

  ContactBlock2: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(225, 225, 225, 0.4);
    width: 200px;
    height: 80px;
    padding: 0 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    margin-bottom: 10px;
    text-decoration: none;
    text-align: center;

    @media ${device.laptop} {
      width: 300px;
      height: 50px;
    }
  `,

  ContactBlockText: styled.div`
     
    color: #fff;
    font-size: 14px;
    margin-top: 5px;

    @media ${device.laptop} {
      font-size: 12px;
    }
  `,

  Activity: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
    margin-bottom: 30px;

    @media ${device.mobileL} {
      margin-bottom: 20px;
    }
  `,
  Light: styled(Image)`
    width: 50px;
    height: 50px;
    object-fit: cover;
  `,
  ActivityTitle: styled.h1`
    font-size: 30px;
    text-align: center;
     
    font-weight: 500;
    color: #000;
    margin: 10px 40px;

    @media ${device.mobileL} {
      font-size: 18px;
    }
  `,
  ActivityText: styled.div`
     
    font-weight: 400;
    font-size: 16px;
    color: #000;
    max-width: 80%;
    text-align: center;
    margin-top: 10px;

    @media ${device.mobileL} {
      font-size: 14px;
    }
  `,
  Divider: styled.div`
    border-bottom: 1px solid #656c76;
    width: 20%;
    float: right;
  `,

  ActivityTitleRow: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
  `,

  ActivityTitleRow2: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 40px 0 10px 0;
  `,

  Health: styled.div`
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
      ),
      url("${(props) => props.image}");
    width: 100%;
    height: 60vh;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    @media ${device.mobileL} {
      height: 40vh;
    }
  `,

  HealthRow: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  `,

  EmptyBox: styled.div`
    width: 60%;
  `,
  HealthTextBlock: styled.div`
    width: 40%;
  `,
  HealthTitle: styled.div`
     
    font-weight: 600;
    font-size: 30px;
    color: #fff;
    max-width: 70%;

    @media ${device.tablet} {
      font-size: 20px;
    }

    @media ${device.mobileL} {
      font-size: 16px;
    }

    @media ${device.mobileS} {
      font-size: 12px;
    }
  `,
  HealthText: styled.div`
     
    font-size: 14px;
    color: #fff;
    margin-top: 15px;
    max-width: 70%;

    @media ${device.tablet} {
      font-size: 10px;
    }

    @media ${device.mobileL} {
      font-size: 8px;
    }

    @media ${device.mobileS} {
      font-size: 6px;
    }
  `,

  HealthBoxesRow: styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -60px;

    @media ${device.tablet} {
      bottom: -60px;
    }

    @media ${device.mobileL} {
      bottom: -30px;
    }

    @media ${device.mobileS} {
      bottom: -20px;
    }
  `,

  Group: styled.div`
    margin-top: 100px;
    width: 100vw;
    margin-bottom: 30px;
  `,

  PartnerRow: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 50px 0;
    @media ${device.tablet} {
      padding: 50px 0px;
    }

    @media ${device.mobileL} {
      padding: 30px 50px;
      justify-content: space-between;
    }
  `,

  PartnerWrapper: styled(Link)`
    margin: 0 60px;
  `,

  Partner: styled.img`
    width: 300px;
    object-fit: contain;

    @media ${device.laptop} {
      width: 40%;
    }
  `,

  Comment: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  `,

  CommentMiddle: styled.div`
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.8)
      ),
      url(${bg.src});
    width: 100vw;
    height: 40vh;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;
    text-align: center;
  `,

  AbsoluteImage: styled.div`
    z-index: 100;
    position: absolute;
    left: 20%;
    top: 30%;
  `,

  AbsoluteImage2: styled.div`
    z-index: 100;
    position: absolute;
    right: 35%;
    top: 32%;
  `,

  AbsoluteImage3: styled.div`
    z-index: 100;
    position: absolute;
    left: 30%;
    top: 60%;
  `,

  AbsoluteImage4: styled.div`
    z-index: 100;
    position: absolute;
    right: 5%;
    top: 50%;
  `,

  AbsoluteImage5: styled.div`
    z-index: 100;
    position: absolute;
    left: 50%;

    top: 70%;
  `,

  CommentTitle: styled.div`
     
    font-weight: 600;
    font-size: 40px;
    color: #fff;
    margin-top: 60px;

    @media ${device.laptop} {
      font-size: 30px;
    }

    @media ${device.mobileL} {
      font-size: 18px;
    }

    @media ${device.mobileM} {
      font-size: 14px;
    }
  `,
  CommentSubTitle: styled.div`
     
    font-weight: 500;

    font-size: 14px;
    color: #fff;
    margin-top: 10px;
    @media ${device.laptop} {
      font-size: 12px;
      margin-top: 10px;
    }

    @media ${device.mobileL} {
      font-size: 10px;
    }
  `,

  CommentSlider: styled.div`
    margin-top: 40px;
  `,

  AlignCenter: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `,

  Groups: styled.div`
    margin: 0 100px;

    @media ${device.mobileL} {
      margin: 0 40px;
    }
  `,

  RowSetting: styled.div``,

  GroupItem: styled.div`
    margin: 50px 0;
    @media ${device.mobileL} {
      margin: 10px 0;
    }
  `,
  GroupItemImage: styled(Image)`
    object-fit: cover;
    width: 100%;
    height: 200px;
    border-radius: 10px;
  `,
  GroupItemTitle: styled.div`
     
    font-weight: 600;
    font-size: 16px;
    width: 100%;
    color: #000;
    margin: 5px 0 0 5px;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #bf8c41;
    }
  `,
  GroupItemText: styled.div`
    margin: 5px 0 0 5px;

     
    width: 100%;

    font-weight: 400;
    font-size: 14px;
    color: #000;
  `,

  Button: styled.div`
    cursor: pointer;
     
    font-weight: 500;
    font-size: 14px;
    color: #fff;
    transition: all 0.4s ease-in-out;
    background-color: #bf8c41;
    padding: 10px;
    width: 120px;
    margin: 10px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 0.7;
    }

    @media ${device.mobileL} {
      padding: 5px;
      width: 90px;
      font-size: 12px;
    }
  `,
  CommentButtonRow: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  `,

  Blog: styled.div`
    margin-top: 50px;

    @media ${device.tablet} {
      margin-top: 20px;
    }
  `,

  BlogTitle: styled.div`
     
    width: 100%;
    font-weight: 600;
    font-size: 35px;
    color: #000;
    text-align: center;
    margin-bottom: 20px;
  `,

  ColBlog: styled.div`
    width: 100%;
    margin-top: 30px;
  `,

  Iframe: styled.iframe`
    outline: none;
    border-radius: 10px;
    border: none;
    margin-bottom: 20px;
  `,

  TextBlock: styled.div`
  position:absolute;
  `,

  TopTitle: styled.h3`
    font-size: 20px;
    color: #fff;
    font-weight: 600;
    text-align: center;
    @media ${device.mobileL} {
      font-size: 14px;
    }
  `,
  TopText: styled.h1`
     
    font-size: 50px;
    color: #bf8c41;
    font-weight: 800;
    text-align: center;
    @media ${device.mobileL} {
      font-size: 40px;
    }
  `,  

  ButtonMakale: styled.div`
     
    font-weight: 500;
    font-size: 16px;
    color: #fff;
    transition: all 0.4s ease-in-out;
    background-color: #bf8c41;
    padding: 10px;
    text-decoration: none !important;
    text-align: center;
    border-radius: 5px;
    margin:30px 0;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 0.7;
    }
  `,
};

export const ButtonText = styled.div`
   
  font-weight: 500;
  font-size: 14px;
  color: #000;
  margin-top: 15px;
  transition: all 0.4s ease-in-out;

  @media ${device.tablet} {
    font-size: 12px;
  }
`;
export const ButtonIcon = styled.div`
  margin-top: 18px;
  margin-left: 10px;
  transition: all 0.4s ease-in-out;
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  margin: 5px 0 0 5px;
  transition: all 0.4s ease-in-out;
  &:hover {
    ${ButtonText} {
      color: #bf8c41;
    }

    ${ButtonIcon} {
      transform: translateX(10px);
    }
  }
`;

const breatheAnimation = keyframes`
0% { transform: translatey(0) }
50% { transform: translatey(-30px) }
100% { transform: translatey(0); }
`;

const breatheAnimation2 = keyframes`
0% { transform: translatey(0) }
40% { transform: translatey(30px) }
100% { transform: translatey(0); }
`;

const breatheAnimation3 = keyframes`
0% { transform: translatey(0) }
60% { transform: translatey(-50px) }
100% { transform: translatey(0); }
`;

export const CommentImage = styled(Image)`
  width: 100px;
  height: 100px;
  object-fit: contain;
  animation-name: ${breatheAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
  @media ${device.tablet} {
    width: 50px;
    height: 50px;
  }

  @media ${device.mobileL} {
    display: none;
  }
`;

export const CommentImage2 = styled(Image)`
  width: 100px;
  height: 100px;
  object-fit: contain;
  animation-name: ${breatheAnimation2};
  animation-duration: 8s;
  animation-iteration-count: infinite;

  @media ${device.tablet} {
    width: 50px;
    height: 50px;
  }

  @media ${device.mobileL} {
    display: none;
  }
`;

export const CommentImage3 = styled(Image)`
  width: 100px;
  height: 100px;
  object-fit: contain;
  animation-name: ${breatheAnimation3};
  animation-duration: 8s;
  animation-iteration-count: infinite;
  @media ${device.tablet} {
    width: 50px;
    height: 50px;
  }

  @media ${device.mobileL} {
    display: none;
  }
`;
