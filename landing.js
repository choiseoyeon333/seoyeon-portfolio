/* 랜딩 페이지: 예전 주소(index.html#projects 등)로 들어온 방문자를 포트폴리오의 같은 위치로 보냅니다.
   페이지 이동 효과는 transition.js 가 담당합니다. */
if (location.hash && location.hash.length > 1) location.replace("portfolio.html" + location.hash);
