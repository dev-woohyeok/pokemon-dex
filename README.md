# 🏆 Pokemon Dex

할일

-   프로젝트 셋업
    -   Home.jsx => 도감 시작하기 클릭해서
-   DashBoard, PokemonList, PokemonCard 등 주요 컴퍼넌트 폴터 생성
-   포켓몬 리스트 출력
-   포켓몬 선택 기능(최대 6마리까지 가능)
-   포켓몬 선택 해제 및 알림 기능

## 📌 프로젝트 소개

Pokemon Dex는 React를 활용하여 포켓몬 데이터를 관리하는 **싱글 페이지 애플리케이션(SPA)**입니다. 이 프로젝트를 통해 **prop drilling, Context API, Redux Toolkit**을 활용한 상태 관리 방법을 배우고, `react-router-dom`을 사용한 라우팅 구현을 경험할 수 있습니다.

## 🎯 프로젝트 목표

-   **React에서 prop drilling과 Context API를 적용하여 데이터 흐름을 이해하기**
-   **Redux Toolkit을 활용한 전역 상태 관리 경험하기**
-   **React Router를 사용하여 SPA(Single Page Application) 구조를 구현하기**
-   **기본적인 CRUD(생성, 조회, 수정, 삭제) 기능을 구현하기**

## 📌 주요 기능

✅ **포켓몬 리스트 조회**: 등록된 포켓몬들을 리스트로 확인할 수 있습니다.  
✅ **포켓몬 추가**: 새로운 포켓몬을 추가할 수 있습니다.  
✅ **포켓몬 수정**: 기존 포켓몬 정보를 수정할 수 있습니다.  
✅ **포켓몬 삭제**: 포켓몬을 삭제할 수 있습니다.  
✅ **React Router를 활용한 화면 전환**: 페이지 리로드 없이 포켓몬 상세 정보를 확인할 수 있습니다.

## 🛠️ 기술 스택

-   **Frontend**: React, React Router, Context API, Redux Toolkit
-   **State Management**: Prop Drilling, Context API, Redux Toolkit
-   **CSS**: Styled-components

## 📂 프로젝트 구조

```

```

## 🔧 설치 및 실행 방법

```bash
# 1. 레포지토리 클론
$ git clone https://github.com/your-username/pokemon-dex.git

# 2. 프로젝트 폴더로 이동
$ cd pokemon-dex

# 3. 패키지 설치
$ npm install

# 4. 개발 서버 실행
$ npm start
```

## 🌍 페이지 구성

| 페이지      | 경로            | 설명                         |
| ----------- | --------------- | ---------------------------- |
| 홈          | `/`             | 포켓몬 리스트 조회           |
| 포켓몬 상세 | `/pokemon/:pid` | 선택한 포켓몬 상세 정보 확인 |
| 포켓몬 추가 | `/add`          | 새 포켓몬 등록               |
| 포켓몬 수정 | `/edit/:pid`    | 기존 포켓몬 정보 수정        |

## 📜 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다. 자유롭게 사용하고 기여해주세요! 🎉
