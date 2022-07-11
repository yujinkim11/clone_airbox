import styled from "styled-components";

const Sec7Wrap = styled.div`
  height: 100vh;
  position: relative;
`;

const Sec7Title = styled.h3`
  font-size: 150px;
  font-weight: 500;
  color: #004dd8;
  .title1 {
    position: absolute;
    left: 230px;
    top: 35%;
    z-index: 99;
  }
  .title2 {
    position: absolute;
    right: 230px;
    bottom: 35%;
  }
`;

const Sec7Img_1 = styled.div`
  width: 318px;
  height: 318px;
  background: url("https://airbox.co.kr/img/welcome-01.png") no-repeat center /
    cover;
  position: absolute;
  left: 100px;
  top: 80px;
  :hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;

const Sec7Img_2 = styled.div`
  width: 268px;
  height: 178px;
  background: url("https://airbox.co.kr/img/welcome-02.jpg") no-repeat center /
    cover;
  position: absolute;
  right: 320px;
  top: 200px;
  :hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;

const Sec7Img_3 = styled.div`
  width: 248px;
  height: 164px;
  background: url("https://airbox.co.kr/img/welcome-03.jpg") no-repeat center /
    cover;
  position: absolute;
  right: 0px;
  top: 80px;
  :hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;

const Sec7Img_4 = styled.div`
  width: 244px;
  height: 137px;
  background: url("https://airbox.co.kr/img/welcome-04.jpg") no-repeat center /
    cover;
  position: absolute;
  left: 0px;
  bottom: 0px;
  :hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;

const Sec7Img_5 = styled.div`
  width: 265px;
  height: 176px;
  background: url("https://airbox.co.kr/img/welcome-05.jpg") no-repeat center /
    cover;
  position: absolute;
  left: 400px;
  bottom: 100px;
  :hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;

const Sec7Img_6 = styled.div`
  width: 300px;
  height: 200px;
  background: url("https://airbox.co.kr/img/welcome-06.jpg") no-repeat center /
    cover;
  position: absolute;
  right: 100px;
  bottom: 70px;
  :hover {
    transform: scale(1.1);
    transition: 0.7s;
  }
`;

export const Section_7 = () => {
  return (
    <Sec7Wrap>
      <Sec7Title>
        <span className="title1">Welcome to</span>
        <br />
        <span className="title2">AIRBOX World</span>
      </Sec7Title>
      <Sec7Img_1 />
      <Sec7Img_2 />
      <Sec7Img_3 />
      <Sec7Img_4 />
      <Sec7Img_5 />
      <Sec7Img_6 />
    </Sec7Wrap>
  );
};
