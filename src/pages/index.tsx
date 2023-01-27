import Image from "next/image";
import styled from "styled-components";
import Router from "next/router";

export default function Home() {
  const SendQuery = () => {
    Router.push({
      pathname: "/main",
    });
  };
  return (
    <BackgroundCss>
      <TitleContainer>
        <TitleFont>두근두근 교수님</TitleFont>
        <TitleFont>평가하기</TitleFont>
        <ImgCss src="/star.png" alt="star" width={200} height={200} />
        <ImgCss src="/star.png" alt="star" width={150} height={150} />
        <ImgCss src="/star.png" alt="star" width={200} height={200} />
        <Image src="/gold.png" alt="gold" width={500} height={60} />
      </TitleContainer>

      <button onClick={SendQuery}>평가하기</button>
    </BackgroundCss>
  );
}

const BackgroundCss = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("./backgroundImage.jpg");
  background-size: cover;
  padding: 16%;
  button {
    font-family: "S-CoreDream-3Light";
    color: green;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
`;
const TitleContainer = styled.div`
  margin-bottom: 3em;
  text-align: center;
  position: relative;
`;
const TitleFont = styled.div`
  font-size: 5em;
  font-family: "HSBombaram";
  color: white;
  text-shadow: -0.03em 0 0.05em #7c927b, 0 -0.03em 0.05em #7c927b,
    0.03em 0.02em 0.05em #7c927b, 0.03em 0 0.05em #7c927b;
  min-width: 530px;
`;
const ImgCss = styled.img`
  position: absolute;
  top: -100px;
  left: -100px;

  :nth-child(3) {
    top: 40px;
    left: 320px;
  }

  :nth-child(4) {
    top: 0px;
    left: 30px;
  }
`;
