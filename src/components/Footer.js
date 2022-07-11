import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterWrap = styled.div`
  height: 100vh;
  padding: 100px 200px 20px 200px;
  background-color: rgb(18, 18, 18);
  display: flex;

  a {
    color: white;
  }
`;
const Left = styled.div`
  width: 50%;
`;
const Right = styled.div`
  width: 50%;
`;

const MenuWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 75px;
`;

const Menu = styled.div`
  margin-right: 200px;
  margin-bottom: 30px;
`;
const Company = styled.div`
  color: #666;
  font-size: 18px;
  line-height: 30px;
  font-weight: 500;
  .footairbox {
    color: white;
    font-weight: 700;
  }
`;

const Footdesc = styled.div`
  margin-top: 30px;
  font-weight: 700;
  .onedesc {
    margin-right: 20px;
    :hover {
      color: white;
    }
  }
  .twodesc {
    margin-right: 20px;
    :hover {
      color: white;
    }
  }
  .threedesc {
    :hover {
      color: white;
    }
  }
`;
const Copyright = styled.div`
  margin-top: 30px;
`;

const Sns = styled.div`
  margin-top: 30px;
  display: flex;
`;

const Youtube = styled.div``;
const Instagram = styled.div`
  margin-left: 10px;
`;

const Homepage = styled.h3`
  margin-top: 30px;
  font-size: 16px;
  color: white;
`;

export const Footer = () => {
  return (
    <>
      <FooterWrap>
        <Left>
          <Link to="/">
            <img src="https://airbox.co.kr/img/logo-white.svg"></img>
          </Link>
        </Left>

        <Right>
          <MenuWrap>
            <Menu>
              <Link to={"/introduce"}>
                회사소개<i class="fa-solid fa-location-arrow"></i>
              </Link>
            </Menu>
            <Menu>
              <Link to={"/double"}>
                이중공간지<i class="fa-solid fa-location-arrow"></i>
              </Link>
            </Menu>
            <Menu>
              <Link to={"/product"}>
                제품소개<i class="fa-solid fa-location-arrow"></i>
              </Link>
            </Menu>
            <Menu>
              <Link to={"/blog"}>
                블로그<i class="fa-solid fa-location-arrow"></i>
              </Link>
            </Menu>
            <Menu>
              <Link to={"/cs"}>
                고객지원<i class="fa-solid fa-location-arrow"></i>
              </Link>
            </Menu>
            <Menu>
              <Link to={"/shop"}>
                SHOP<i class="fa-solid fa-location-arrow"></i>
              </Link>
            </Menu>
          </MenuWrap>

          <Company>
            <span className="footairbox">(주)에어박스</span>
            <br /> 대표 김병주 | 대표번호 032-819-3690 | 개인정보관리책임자 |
            김지현(admin@airbox.co.kr) | 인천광역시 남동구 능허대로577번길 182,
            우편번호 21698 | 사업자등록번호 131-86-02849 | 통신판매업신고번호
            제2007-인천남동구-0291호[사업자정보확인]
            <Footdesc>
              <span className="onedesc">개인정보처리방침</span>
              <span className="twodesc">이메일무단수집거부</span>
              <span className="threedesc">E-Catalog download-catalog</span>
            </Footdesc>
            <Copyright>Copyright 2022 에어박스. All Rights Reserved.</Copyright>
          </Company>

          <Sns>
            <Youtube>
              <Link to="https://www.youtube.com/c/AirBox119">
                <img src="https://airbox.co.kr/img/ico-youtube.png"></img>
              </Link>
            </Youtube>
            <Instagram>
              <Link to="https://www.instagram.com/airboxofficial_/">
                <img src="https://airbox.co.kr/img/ico-instagram.png"></img>
              </Link>
            </Instagram>
          </Sns>
          <Homepage>
            본 홈페이지는 인터넷의 화면 100% 및 모니터의 디스플레이 해상도
            100%에서 최적화 되었습니다.
          </Homepage>
        </Right>
      </FooterWrap>
    </>
  );
};
