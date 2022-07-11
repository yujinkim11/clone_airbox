import styled, { keyframes } from "styled-components";

const SectionWrap = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Left = styled.div`
  color: #004dd8;
  font-size: 60px;
  font-weight: 900;
  letter-spacing: -5px;
`;

const Img = styled.div`
  margin-left: 80px;
  width: 770px;
  height: 464px;
  background: url(https://airbox.co.kr/img/visual-img01.jpg) no-repeat center /
    cover;
`;

const Right = styled.div`
  margin-left: 80px;
  color: black;
  font-size: 45px;
  font-weight: 900;
  letter-spacing: -5px;
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

export const Section_3 = () => {
  return (
    <SectionWrap>
      <Left>
        공기로 만드는
        <br /> 새로운 세상
      </Left>
      <Img></Img>
      <Right>일상에서 느끼다</Right>
      <Scroll>scroll down</Scroll>
      <Arrow>
        <i class="fa-solid fa-down-long"></i>
      </Arrow>
    </SectionWrap>
  );
};
