import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Section5Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Bottom = styled.h3`
  font-size: 280px;
  font-weight: 900;
  opacity: 0.1;
  position: absolute;
  bottom: -20px;
`;
const Sec5Img = styled.div`
  width: 890px;
  height: 445px;
  background: url("https://airbox.co.kr/img/typication.png") no-repeat center /
    cover;
  position: absolute;
  left: 200px;
`;

const ConWrap = styled.div`
  position: absolute;
  right: 200px;
  font-weight: 900;
`;

const Sec5Title = styled.div`
  font-size: 26px;
`;
const Sec5Con = styled.div`
  font-size: 60px;
  margin: 60px 0;
  letter-spacing: -2px;
`;
const Sec5Circle = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid white;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  :hover {
    background-color: white;
    color: black;
    transition: 0.5s;
  }
`;

export const Section_5 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Section5Wrap>
      <Bottom data-aos="fade-up" data-aos-duration="2000">
        TYPIFICATION
      </Bottom>
      <Sec5Img data-aos="fade-up" data-aos-duration="2000"></Sec5Img>
      <ConWrap data-aos="fade-up" data-aos-duration="2000">
        <Sec5Title>TYPIFICATION</Sec5Title>
        <Sec5Con>
          <span>무형의 공기로 세상에</span>
          <br /> 존재하는 모든 것을 유형화
        </Sec5Con>
        <Sec5Circle>explore</Sec5Circle>
      </ConWrap>
    </Section5Wrap>
  );
};
