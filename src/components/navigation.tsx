import "./styles/navigation.css";
import { useState } from "react";
// import { withRouter } from "react-router-dom";
import NavItem from "./navItem";

function Navigation(): JSX.Element {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const menu = [
    { name: "Home", address: "/" },
    { name: "지금 센터는", address: "/menu1" },
    { name: "떠들썩", address: "/menu2" },
    { name: "센터는요", address: "/menu3" },
    { name: "연결", address: "/menu4" }, 
     { name: "함께", address: "/menu5" },
  ];



//   상단바 (GNB)
// │  │   ├─  (LNB)
// │  │   │    ├─ 알립니다 (공지사항)
// │  │   │    ├─ 프로그램.ZIP
// │  │   │    ├─ 자료.ZIP
// │  │   │    └─ 함께해요 (채용공고)
// │  │   ├─  (LNB)
// │  │   │    ├─ 프로그램 후기
// │  │   │    ├─ 투데이
// │  │   │    ├─ 정보방 (서포터즈 기자단/종사자)
// │  │   │    ├─ 수다방 (사담 자유게시판)
// │  │   │    └─ 대나무 (대나무숲 익명 게시판)
// │  │   ├─  (LNB)
// │  │   │    ├─ 소개말
// │  │   │    ├─ 인사말
// │  │   │    ├─ 미션, 비전
// │  │   │    ├─ 연혁, 조직도
// │  │   │    ├─ 공간소개
// │  │   │    ├─ 사업소개
// │  │   │    └─ 찾아오시는 길
// │  │   ├─  (LNB)
// │  │   │    ├─ 센터 방문 요청
// │  │   │    └─ 센터 개발 척도 사용 요청
// │  │   ├─ 함께 (LNB)
// │  │   │    ├─ 함께하는 기관 (유관기관)
// │  │   │    └─ 함께 알려요 (유관기관 홍보 협조)
// │  │   ├─ 전체 검색 (input)
// │  │   └─ 로그인 (Btn)
  return (
    <nav className="navigation__wrapper">
      <div
        className={!menuToggle ? "burger__menu" : "x__menu"}
        onClick={() =>
          menuToggle ? setMenuToggle(false) : setMenuToggle(true)
        }
      >
        <div className="burger_line1"></div>
        <div className="burger_line2"></div>
        <div className="burger_line3"></div>
      </div>

      <div
        className={[
          "menu__box",
          !menuToggle ? "menu__box__hidden" : "menu__box__visible",
        ].join(" ")}
      >
        <div className="menu__list">
          {menu.map((data) => (
            <NavItem
              data={data}
              key={data.address}
              offNav={() => setMenuToggle(false)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;