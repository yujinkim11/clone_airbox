import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const SHeader = styled.div`
  width: 100%;
  max-width: 100%;
  height: 80px;
  padding: 0 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  a {
    text-decoration: none;
    color: white;
  }
`;

const Logo = styled.div`
  width: 170px;
  height: 42px;
`;

const MenuWrap = styled.div`
  width: 1120px;
  display: flex;
  justify-content: space-between;
`;

const Menu = styled.li`
  font-size: 18px;
  font-weight: 700;
  list-style: none;
  position: relative;
  display: flex;
  color: white;
  a {
    color: white;
  }
`;

const Btn = styled.div`
  margin-left: 7px;
  cursor: pointer;
`;

const HiddenMenu = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: white;
  position: absolute;
  top: 60px;
  right: 180px;
  display: ${(props) => props.openmenu};
`;

export const Header = () => {
  const [open, setOpen] = useState("none");

  const handleOpen = () => {
    if (open == "none") {
      setOpen("block");
    } else {
      setOpen("none");
    }
  };

  const handleScroll = () => {
    // const sct = window.getBoundingClientRect().top;
    // console.log(sct);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <SHeader>
      <Link to={"/"}>
        <Logo
          style={{
            background: `url(https://airbox.co.kr/img/logo-white.svg) no-repeat center / cover`,
          }}
        ></Logo>
      </Link>

      <MenuWrap>
        <Menu>
          <Link to={"/introduce"}>회사소개</Link>
        </Menu>
        <Menu>
          <Link to={"/double"}>이중공간지</Link>
        </Menu>
        <Menu>
          <Link to={"/product"}>제품소개</Link>
        </Menu>
        <Menu>
          <Link to={"/blog"}>블로그</Link>
        </Menu>
        <Menu>
          <Link to={"/cs"}>고객지원</Link>
        </Menu>
        <Menu>
          <Link to={"/shop"}>SHOP</Link>
        </Menu>
        <Menu>
          KOR
          <Btn onClick={handleOpen}>
            <i class="fa-solid fa-angle-down"></i>
          </Btn>
        </Menu>
      </MenuWrap>
      <HiddenMenu openmenu={open}>ENG</HiddenMenu>
    </SHeader>
  );
};
