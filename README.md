# CHOE SEOYEON | Fashion Portfolio

최서연(CHOE SEOYEON)의 패션 포트폴리오 웹사이트입니다. 대학 수업의 포트폴리오 제작 과제로 시작했고, 이후 패션 브랜드 마케팅·전략 기획 직무 지원에도 쓸 수 있도록 정리했습니다.
서버나 빌드 과정이 없는 정적 사이트(HTML / CSS / JavaScript)이며, GitHub Pages로 배포합니다.

## 구조
```
index.html        Landing Page (대표 이미지, 이름, 슬로건, VIEW PORTFOLIO 버튼)
portfolio.html    Portfolio Page (ABOUT / PROJECTS / ARCHIVE / CONTACT)
landing.css       랜딩 전용 스타일          landing.js   예전 주소(#해시) 링크를 portfolio.html 로 연결
style.css         포트폴리오 스타일          script.js    프로젝트·보고서·연락처 내용과 화면 동작
transition.js     두 페이지 공통 이동 효과
favicon.svg / favicon.ico / apple-touch-icon.png   파비콘 (CS.)
assets/           이미지와 PDF (assets/og-image.jpg = 링크 공유용 이미지)
.nojekyll         GitHub Pages 설정 파일 (비어 있음)
```
모든 경로는 상대경로라 `https://<아이디>.github.io/seoyeon-portfolio/` 같은 하위 경로에서 그대로 동작합니다.

## 주요 기능
- 랜딩 ↔ 포트폴리오 전환: View Transitions를 지원하는 브라우저에서는 대표 사진과 로고가 이어지는 전환, 지원하지 않으면 짧은 페이드 이동(transition.js). 모션 감소 설정이면 효과 없이 이동합니다.
- ABOUT: 이름·학력·수행 경험·Software & Tools·Certifications·Languages
- PROJECTS 4건과 ARCHIVE(리서치 보고서 2건, 드레이핑 3장): 카드 → 상세 화면(이전·다음 이동), 이미지 확대 보기, PDF·유튜브 링크
- 스크롤 등장 효과(.reveal), 모바일 메뉴, 현재 섹션 표시
- 접근성: `prefers-reduced-motion` 지원, 키보드 포커스 표시, 이미지 대체 텍스트. 스크롤 등장 효과는 JS가 준비된 경우에만 적용되어, JS가 없어도 ABOUT 내용은 보입니다. (PROJECTS 카드·상세 화면은 JS가 켜져 있어야 표시되고, CONTACT는 안내용 이메일·Instagram 링크만 표시됩니다.)

## 사용 기술
HTML / CSS / 바닐라 JavaScript. 글꼴은 Inter(Google Fonts)와 Pretendard(jsDelivr CDN)를 인터넷으로 불러옵니다. 프레임워크와 빌드 도구는 쓰지 않았습니다.

## 자주 고치는 곳
| 내용 | 위치 |
|---|---|
| 연락처(이메일·Instagram·Phone) | script.js 맨 위 `CONTACT`. Phone 은 `010-XXXX-XXXX` 자리 표시이며 링크가 아닌 일반 텍스트입니다. 실제 번호 또는 `Available upon request` 로 바꾸거나, 비우면 줄이 사라집니다 |
| 프로젝트·보고서 문구와 사진 연결 | script.js `PROJECTS`, `REPORTS` |
| 드레이핑 사진 | script.js `ARCHIVE` |
| 이름·나이·성별, 학력·재학 상태, 수행 경험, 프로그램, 어학 | portfolio.html ABOUT (해당 위치에 주석 있음) |
| 푸터 크레딧 | portfolio.html 맨 아래 `.f-credit` |
| 색상 | style.css 맨 위 `:root` |
| 공유 미리보기(Open Graph) | index.html·portfolio.html `<head>`. 배포 주소를 바꾸면 `og:url`·`og:image`·`canonical` 의 주소도 함께 바꿉니다 |

## 내 컴퓨터에서 보기
폴더에서 터미널을 열고 `python3 -m http.server 8000` 실행 후 http://localhost:8000 접속.
(파일을 직접 열어도 대부분 보이지만, 페이지 전환 효과와 일부 동작은 주소(http)로 열었을 때 확인할 수 있습니다.)

## GitHub Pages 배포
1. 이 폴더의 파일 전체(`.nojekyll` 포함)를 저장소 루트에 올립니다.
2. Settings > Pages > Source: Deploy from a branch > main / (root) > Save
3. 1~2분 뒤 https://choiseoyeon333.github.io/seoyeon-portfolio/ 에서 확인합니다.

## 개인정보 주의
- 보고서 원본 PDF(학번·교수명이 있는 표지 포함)는 사이트 폴더 밖에 따로 보관하고 있으며, GitHub에 올리지 않습니다.
- 사이트에 포함된 보고서 PDF는 표지를 뺀 공개용 사본입니다.
- 공개 사이트이므로 실제 전화번호는 넣지 않았습니다.

## 제작 및 AI 활용
콘텐츠와 방향은 본인이 기획했고, 웹사이트 제작(코드 작성·문구 정리)에 Claude와 ChatGPT의 도움을 받았습니다. 이는 웹사이트 제작에 대한 표시이며, 패션 작품과 촬영 사진 자체를 AI로 만들었다는 뜻이 아닙니다. (DOLWEAR 프로젝트 상세 화면에는 해당 프로젝트의 생성형 AI 활용 안내가 따로 있습니다.)

## 테스트
Chromium(Playwright)에서 PC·태블릿·모바일 화면 크기로 동작을 확인했습니다. Safari, Firefox, 실제 휴대폰, 외부 서비스의 링크 공유 미리보기는 배포 후 직접 확인이 필요합니다.
