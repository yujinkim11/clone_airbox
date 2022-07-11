import styled, { keyframes } from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BackGround = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(https://airbox.co.kr/img/loading-bg.jpg);
  position: relative;
  animation: Section2BG 10s alternate infinite;
  @keyframes Section2BG {
    0% {
      background-size: 120%;
    }
    100% {
      background-size: 100%;
    }
  }
`;

const Title = styled.span`
  color: black;
  font-size: 100px;
  font-weight: 900;
  line-height: 125px;
  text-align: center;
  .aircolor {
    color: white;
  }
`;

const Scroll = styled.p`
  position: absolute;
  bottom: 10%;
  color: black;
  font-size: 18px;
  font-weight: 700;
`;

const move = keyframes`
    0%{
       
    }
    100%{
        padding-bottom: 20px;
       
    }
`;

const Arrow = styled.div`
  position: absolute;
  bottom: 4%;
  font-size: 26px;
  color: black;
  animation: ${move} 1s infinite alternate;
`;

export const Section_2 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <BackGround>
        <Title data-aos="fade-up" data-aos-duration="2000">
          <span className="aircolor">"무형의 공기</span>로<br />
          세상에 존재하는
          <br />
          모든 것을 <span className="aircolor">유형화"</span>
        </Title>
        <Scroll>scroll down</Scroll>
        <Arrow>
          <i class="fa-solid fa-down-long"></i>
        </Arrow>
      </BackGround>
    </>
  );
};
