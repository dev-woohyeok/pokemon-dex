# 🏆 Pokemon Dex

## 📌 프로젝트 소개

Pokemon Dex는 React를 활용하여 포켓몬 데이터를 관리하는 **싱글 페이지 애플리케이션(SPA)**입니다. 이 프로젝트를 통해 **prop drilling, Context API, Redux Toolkit**을 활용한 상태 관리 방법을 배우고, `react-router-dom`을 사용한 라우팅 구현을 경험할 수 있습니다.

## 🎯 프로젝트 목표

-   **React에서 prop drilling과 Context API를 적용하여 데이터 흐름을 이해하기**
-   **Redux Toolkit을 활용한 전역 상태 관리 경험하기**
-   **React Router를 사용하여 SPA(Single Page Application) 구조를 구현하기**
-   **기본적인 CRUD(생성, 조회, 수정, 삭제) 기능을 구현하기**

## 📌 주요 기능

✅ **포켓몬 리스트 조회**: 등록된 포켓몬들을 검색어를 통해 리스트로 확인할 수 있습니다.  
✅ **포켓몬 추가**: 새로운 포켓몬을 추가할 수 있습니다.  
✅ **포켓몬 수정**: 기존 포켓몬 정보를 수정할 수 있습니다.  
✅ **포켓몬 삭제**: 포켓몬을 삭제할 수 있습니다.
✅ **React Router를 활용한 화면 전환**: 페이지 리로드 없이 포켓몬 상세 정보를 확인할 수 있습니다.

---

## 🛠️ 기술 스택

-   **Frontend**: React, React Router, Context API, Redux Toolkit
-   **State Management**: Prop Drilling, Context API, Redux Toolkit
-   **CSS**: Styled-components

## 📂 프로젝트 구조

## 🚀 트러블 슈팅

[페이지 이동시,동일 포켓몬 이미지 변경이 안되는 문제](https://aboard-particle-0d4.notion.site/React-191ee001a71580fbbf0aee90f6298812?pvs=4)

## 🔧 설치 및 실행 방법

```bash
# 1. 레포지토리 클론
$ git clone https://github.com/your-username/pokemon-dex.git

# 2. 프로젝트 폴더로 이동
$ cd pokemon-dex

# 3. 패키지 설치
$ npm install

# 4. 개발 서버 실행
$ npm run dev
```

## 🌍 페이지 구성

| 페이지      | 경로           | 설명                         |
| ----------- | -------------- | ---------------------------- |
| 홈          | `/`            | 포켓몬 홈화면                |
| 포켓몬 도감 | `/dex`         | 포켓몬 도감 및 포켓몬 등록   |
| 포켓몬 상세 | `/detail/:pid` | 선택한 포켓몬 상세 정보 확인 |

## 📜 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다. 자유롭게 사용하고 기여해주세요! 🎉
