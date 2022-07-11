import styled, { keyframes } from "styled-components";

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
  animation: backgroundBG 10s alternate infinite;
  @keyframes backgroundBG {
    0% {
      background-size: 100%;
    }
    100% {
      background-size: 120%;
    }
  }
`;

const Title = styled.h3`
  width: 1000px;
  height: 248px;
  color: white;

  @media screen and (max-width: 500px) {
    width: 400px;
    height: 100px;
    background-size: cover;
  }
`;

const Scroll = styled.p`
  position: absolute;
  bottom: 10%;
  color: white;
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
  color: white;
  animation: ${move} 1s infinite alternate;
`;

export const Section_1 = () => {
  return (
    <>
      <BackGround>
        <Title
          style={{
            background: `url(https://airbox.co.kr/img/logo-white.svg) no-repeat center / cover`,
          }}
        ></Title>

        <Scroll>scroll down</Scroll>
        <Arrow>
          <i class="fa-solid fa-down-long"></i>
        </Arrow>
      </BackGround>
    </>
  );
};
