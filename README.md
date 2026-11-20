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
tools/stamp-version.py   CSS·JS 주소의 ?v=해시 를 갱신하는 도구 (아래 "업데이트할 때" 참고)
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

## 업데이트할 때 (캐시 문제 방지) — 꼭 읽어 주세요
GitHub Pages 는 모든 파일을 방문자 브라우저에 10분간 캐시하도록 응답하며 이 설정은 바꿀 수 없습니다. 그래서 `style.css` 처럼 주소가 그대로인 파일은 수정해도 이전 방문자에게 옛 내용이 남아, 새 HTML 과 옛 CSS 가 섞여 보일 수 있습니다.
이를 막기 위해 HTML 의 CSS·JS 주소에 파일 내용으로 계산한 `?v=해시` 를 붙여 두었습니다 (예: `style.css?v=2c58e9aa`). 파일이 바뀌면 해시가 바뀌어 방문자가 새 파일을 받습니다.

**CSS·JS(style.css, landing.css, script.js, landing.js, transition.js)를 고쳤다면, 커밋 전에 한 번 실행하세요.**
```
python3 tools/stamp-version.py          # 버전 갱신 (Windows: python 또는 py)
python3 tools/stamp-version.py --check  # 갱신이 필요한지만 확인
```
그다음 index.html·portfolio.html 도 함께 커밋·푸시합니다. (HTML 만 고쳤다면 실행할 필요 없습니다.)
- 이 도구를 쓸 수 없으면: 두 HTML 에서 고친 파일의 `?v=` 뒤 값을 아무 새 값(예: 날짜)으로 직접 바꿔도 됩니다. 두 HTML 모두 같은 파일은 같은 값으로 맞추세요.
- 이미지·PDF 를 같은 이름으로 교체했다면 방문자에게 최대 10분간 옛 파일이 보일 수 있습니다. 새 파일 이름을 쓰거나(예: draping-1-v2.jpg) 잠시 기다려 주세요.
- HTML 자체도 최대 10분간 캐시될 수 있어, 배포 직후 10분 안에는 옛 화면이 보일 수 있습니다(옛 HTML 은 옛 CSS 와 짝이 맞아 깨져 보이지는 않습니다).
- 링크 공유 미리보기(og-image.jpg)는 카카오톡 등 서비스 쪽 캐시라 이 방법과 별개입니다. 공유 이미지를 바꾸면 해당 서비스의 미리보기 갱신 도구로 새로 고쳐야 합니다.

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
