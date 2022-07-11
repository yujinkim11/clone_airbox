import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Section6Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #004dd8;
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
  right: 0;
`;
const Sec6Img = styled.div`
  width: 890px;
  height: 445px;
  background: url("https://airbox.co.kr/img/protect.png") no-repeat center /
    cover;
  position: absolute;
  left: 200px;
`;

const ConWrap = styled.div`
  position: absolute;
  right: 330px;
  font-weight: 900;
`;

const Sec6Title = styled.div`
  font-size: 26px;
`;
const Sec6Con = styled.div`
  font-size: 60px;
  margin: 60px 0;
  letter-spacing: -2px;
`;
const Sec6Circle = styled.div`
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

export const Section_6 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Section6Wrap>
      <Bottom data-aos="fade-up" data-aos-duration="2000">
        PROTECT
      </Bottom>
      <Sec6Img data-aos="fade-up" data-aos-duration="2000"></Sec6Img>
      <ConWrap data-aos="fade-up" data-aos-duration="2000">
        <Sec6Title>PROTECT</Sec6Title>
        <Sec6Con>
          <span>친환경 원단 개발로</span>
          <br /> 사람과 환경 모두 보호
        </Sec6Con>
        <Sec6Circle>explore</Sec6Circle>
      </ConWrap>
    </Section6Wrap>
  );
};
