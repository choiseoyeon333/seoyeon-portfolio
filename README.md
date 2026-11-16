# 최서연 | CHOI SEOYEON — Fashion Portfolio

원페이지 정적 웹사이트 (HTML / CSS / JavaScript). 서버·빌드 불필요.

## 파일 구성
- index.html : 페이지 구조 (HOME / ABOUT / PROJECTS / ARCHIVE / CONTACT)
- style.css : 색상·글꼴·레이아웃 (맨 위 :root 에서 색상 변경)
- script.js : 프로젝트 내용, 연락처, 이미지 연결 (맨 위 3곳이 수정 지점)
- assets/ : 이미지 폴더

## 이미지 위치 (사용한 파일)
- assets/profile.jpg : 프로필 사진
- assets/projects/graduation/grad-01~06.jpg : 졸업작품 (Look 01 = 01·03·05, Look 02 = 02·04·06). grad-01은 홈 화면 대표 이미지로도 사용 (중복 파일 없음)
- assets/projects/dolwear/ : dolwear-project.pdf(원본), page-01~34.jpg (PDF에서 추출한 쪽)
- assets/projects/traditional-display/ : simulation.png(사전 디지털 시뮬레이션), install-1·2.jpg(설치 결과)
- assets/projects/fashion-display/display-1.jpg : 졸업작품 의상 전시
- assets/archive/draping-1~3.jpg : 드레이핑
- 졸업작품 추가 자료: team-mood.jpg, my-mood.jpg(PDF 2쪽 추출), sketch-1·2.jpg, fabric.jpg, work-1·5~9.jpg
- VMD 추가 자료: traditional-display/process.jpg, fashion-display/sketch.jpg, fashion-display/process.jpg
- 런웨이 영상: script.js 졸업작품의 type "video" (유튜브 id·start 초)

- assets/archive/research/topten/, footwear/ : 보고서 미리보기(page-N.jpg, PDF에서 개인정보 없는 쪽만 추출)와 공개용 PDF(표지 제외)

## 내용 수정
- Archive > Research & Analysis(보고서): script.js 의 REPORTS / Design Studies(드레이핑): ARCHIVE
- 보고서 카드 썸네일은 이미지 파일이 아니라 REPORTS 의 thumb.cover(번호·큰 글자·한글 제목·키워드·tone: dark/slate)로 만든 글자 표지입니다. 문구는 script.js, 모양은 style.css 의 .rcover 에서 고칩니다. page-N.jpg 는 상세 화면의 '보고서 일부'에 쓰입니다.
- 연락처: script.js 의 CONTACT (비우면 CONTACT 섹션 숨김)
- Archive: script.js 의 ARCHIVE (비우면 숨김)
- 프로젝트 문구·사진 연결: script.js 의 PROJECTS
- 소개문·학력: index.html 의 ABOUT 섹션

## 내 컴퓨터에서 보기
폴더에서 터미널을 열고 `python3 -m http.server 8000` 실행 후 http://localhost:8000 접속
(index.html 더블클릭도 가능하지만 일부 브라우저에서 이미지 연결 확인이 제한될 수 있음)

## GitHub Pages 배포
1. GitHub에서 새 저장소 생성 (예: seoyeon-portfolio)
2. 이 폴더의 파일 전체를 저장소 루트에 업로드
3. Settings > Pages > Source: Deploy from a branch > main / (root) > Save
4. 1~2분 뒤 https://<깃허브아이디>.github.io/seoyeon-portfolio/ 접속

## 개인정보 주의
- 보고서 원본 PDF(학번·교수명이 있는 표지 포함)는 사이트 폴더 밖에 따로 보관하고 있습니다. GitHub에 올리지 마세요.
- 사이트에 포함된 PDF는 표지를 뺀 공개용 사본이며, 메타데이터도 비워 두었습니다.
