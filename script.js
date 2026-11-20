/* ===== 수정하는 곳 1: 연락처 =====
   입력한 항목만 표시되고, 모두 비워 두면 CONTACT 섹션과 메뉴가 숨겨집니다. */
const CONTACT = {
  email: "chltjdus333@naver.com",
  instagram: "https://www.instagram.com/fly.yeon_/",
  instagramHandle: "@fly.yeon_",
  /* Phone: 공개 사이트이므로 실제 번호 대신 자리 표시를 둡니다. 일반 텍스트로만 표시되고 전화 연결(tel:) 링크는 만들지 않습니다.
     ▶ 수정 위치: 아래 값을 실제 번호 또는 "Available upon request" 로 바꾸세요. 비우면("") Phone 줄이 사라집니다. */
  phone: "010-XXXX-XXXX",
  pdf: ""         // 예: "assets/portfolio.pdf"
};

/* ===== 수정하는 곳 2: Archive > Design Studies (드레이핑) =====
   비워 두면 Design Studies 그룹이 숨겨지고, 아래 REPORTS 도 비어 있으면 ARCHIVE 섹션과 메뉴까지 숨겨집니다.
   r 은 사진의 가로:세로 비율입니다. */
const A = "assets/archive/";
const ARCHIVE = [
  { src: A + "draping-1.jpg", r: "3/4", cap: "Draping Study 01" },
  { src: A + "draping-2.jpg", r: "3/4", cap: "Draping Study 02" },
  { src: A + "draping-3.jpg", r: "3/4", cap: "Draping Study 03" }
];

/* ===== 수정하는 곳 3: 프로젝트 =====
   sections 종류: steps / points / tags / text / gallery(사진, 클릭하면 확대) / images(사진 칸: 파일을 넣으면 자동 교체)
   gallery layout: p3(세로 3장) p2(세로 2장) g3(가로 3열) g2(가로 2열) one(1장 작게) wide(1장 크게)
   [작업자 메모] 졸업작품: 런웨이 영상은 type "video" (유튜브). 시작 시점은 start(초). 임베드가 막히면 '유튜브에서 보기' 버튼으로 이동.
   [작업자 메모] 졸업작품: 초기 스케치·무드보드는 최종 디자인이 아닌 발전 과정 자료. 제작 사진 번호는 순서가 아님.
   [작업자 메모] 돌웨어: 이미지는 PDF의 해당 쪽을 추출한 것(page-쪽번호.jpg). 원본 PDF는 같은 폴더.
   [작업자 메모] 졸업작품 개인 담당 범위·제작 도구가 확정되면 role 에 반영.
   [작업자 메모] VMD 설계 이미지는 CLO 3D, VMD 의상 사전 시안은 Photoshop으로 제작. */
const D = "assets/projects/dolwear/", G = "assets/projects/graduation/", T = "assets/projects/traditional-display/", F = "assets/projects/fashion-display/";
const PROJECTS = [
  {
    id: "dolwear", cat: "Brand Strategy", title: "DOLSILNAI × DOLWEAR",
    desc: "브랜드 분석에서 상품 구성, 마케팅 전략까지 혼자 기획한 공모전 출품작", tag: "개인 프로젝트",
    thumb: { src: D + "page-01.jpg", fit: "contain", bg: "#faf9f5" },
    cover: { src: D + "page-01.jpg", cap: "프로젝트 표지" },
    link: { href: D + "dolwear-project.pdf", label: "프로젝트 PDF 열기 (7.8MB)" },
    lead: "생활한복 브랜드 돌실나이를 분석하고, 세대가 함께 입을 수 있는 2027 S/S 라운지웨어 라인 ‘돌웨어’의 상품 구성과 마케팅 전략, 의상 디자인을 개인 프로젝트로 기획해 공모전에 출품했습니다.",
    facts: [["분류", "Brand Strategy"], ["형태", "개인 프로젝트 · 공모전 출품"], ["제안", "2027 S/S 캡슐 컬렉션"]],
    sections: [
      { h: "기획 흐름", type: "steps", items: [
        { t: "브랜드 이해", d: "돌실나이의 현황과 브랜드 방향을 정리했습니다." },
        { t: "시장·경쟁 조사", d: "환경 분석과 경쟁 분석으로 브랜드의 시장 내 위치를 파악했습니다." },
        { t: "타깃 설정", d: "STP로 세대 공감형 라운지웨어의 타깃과 포지셔닝을 정했습니다." },
        { t: "방향 도출", d: "SWOT 분석을 근거로 신규 라인과 팝업스토어 전략의 방향을 잡았습니다." },
        { t: "세부 기획", d: "MD 구성, 마케팅 전략, 의상 디자인으로 구체화했습니다." } ] },
      { h: "제안 내용", type: "points", items: [
        { t: "브랜드·환경·경쟁 분석", d: "기획의 출발점이 된 현황 분석" },
        { t: "SWOT · STP", d: "신규 라인의 방향과 타깃의 근거" },
        { t: "마케팅 전략", d: "팝업스토어, 패키지·판매, CRM 방안" },
        { t: "MD 구성", d: "2027 S/S 캡슐 컬렉션의 상품 구성" },
        { t: "의상 디자인", d: "돌웨어 룩 디자인과 도식화" } ] },
      { h: "브랜드 분석", type: "gallery", layout: "g3", ratio: "16/9", items: [
        { src: D + "page-04.jpg", cap: "브랜드 개요 · p.4" },
        { src: D + "page-15.jpg", cap: "SWOT 분석 · p.15" },
        { src: D + "page-16.jpg", cap: "경쟁환경 분석 · p.16" } ] },
      { h: "마케팅 전략", type: "gallery", layout: "g3", ratio: "16/9", items: [
        { src: D + "page-19.jpg", cap: "STP Positioning · p.19" },
        { src: D + "page-22.jpg", cap: "팝업스토어 · p.22" },
        { src: D + "page-23.jpg", cap: "패키지·판매·CRM · p.23" } ] },
      { h: "디자인", type: "gallery", layout: "g3", ratio: "16/9", items: [
        { src: D + "page-26.jpg", cap: "컬러·소재 보드 · p.26" },
        { src: D + "page-28.jpg", cap: "Look 01 · p.28" },
        { src: D + "page-30.jpg", cap: "Look 03 · p.30" },
        { src: D + "page-32.jpg", cap: "Look 05 · p.32" },
        { src: D + "page-34.jpg", cap: "도식화 · p.34" } ] },
      { type: "note", text: "파우치·팝업스토어·소재·룩 일러스트·도식화 등 일부 비주얼은 생성형 AI로 제작했으며, 사용한 프롬프트는 PDF 부록(AI 활용 및 Prompt)에 정리되어 있습니다." }
    ],
    role: "개인 프로젝트로, 브랜드 조사와 분석, 타깃 설정, 상품 구성, 의상 디자인, 마케팅 전략 제안까지 전체 기획을 진행했습니다."
  },
  {
    id: "graduation", cat: "Fashion Design", title: "Graduation Collection",
    desc: "팀 콘셉트 FLASH FREEZE 안에서 진행한 개인 의상 2벌 작업", tag: "졸업작품",
    thumb: { src: G + "grad-01.jpg", pos: "50% 28%" },
    lead: "팀이 공유한 FLASH FREEZE 콘셉트를 바탕으로, 시간·기억·빙하기라는 주제를 의상으로 풀어낸 졸업작품입니다. 팀 무드보드에서 시작해 개인 무드보드와 스케치, 의상 제작, 완성작 화보 촬영, 부산패션위크 런웨이까지의 과정을 정리했습니다.",
    facts: [["분류", "Fashion Design"], ["주제", "시간 · 기억 · 빙하기"], ["팀 콘셉트", "FLASH FREEZE"], ["개인 작업", "의상 2벌"], ["발표", "부산패션위크 런웨이"]],
    sections: [
      { h: "콘셉트", type: "tags", items: ["시간", "기억", "빙하기"] },
      { h: "작업 방식", type: "points", items: [
        { t: "팀이 함께 조율한 부분", d: "전체 콘셉트와 주제, 소재와 실루엣의 방향, 색감과 시각적 통일성" },
        { t: "개인 작업", d: "공통 방향 안에서 팀원마다 각자 자신의 의상을 디자인하고 작업했습니다." } ] },
      { h: "팀 콘셉트 · FLASH FREEZE", type: "gallery", layout: "full", ratio: "16/9", items: [{ src: G + "team-mood.jpg", cap: "팀 무드보드" }] },
      { type: "note", text: "갑작스러운 빙하기로 자연의 역동적인 순간이 얼어붙은 모습을 패션으로 표현한 팀 콘셉트입니다." },
      { h: "개인 무드보드", type: "gallery", layout: "full", ratio: "16/9", items: [{ src: G + "my-mood.jpg", cap: "개인 무드보드" }] },
      { h: "초기 구상 스케치", type: "gallery", layout: "p2", ratio: "3/4", items: [
        { src: G + "sketch-1.jpg", cap: "초기 디자인 스케치 1" }, { src: G + "sketch-2.jpg", cap: "초기 디자인 스케치 2" } ] },
      { type: "note", text: "초기 구상안입니다. 최종 완성 의상은 이 구상에서 달라졌습니다." },
      { h: "디자인 작업", type: "items", items: [
        { t: "주제·무드보드", d: "주제에 맞는 이미지와 분위기를 모았습니다." },
        { t: "디자인 스케치", d: "콘셉트를 의상 디자인으로 구체화했습니다." },
        { t: "소재·실루엣", d: "표현에 맞는 소재와 실루엣을 정했습니다." },
        { t: "제작", d: "디자인을 바탕으로 실물 의상을 제작했습니다." } ] },
      /* 사진 파일 번호는 제작 순서가 아니므로 캡션·번호 없이 나열 */
      { h: "원단 및 제작 과정", type: "gallery", layout: "g4", ratio: "3/4", items: [
        { src: G + "fabric.jpg", alt: "원단" }, { src: G + "work-1.jpg", alt: "제작 과정" }, { src: G + "work-5.jpg", alt: "제작 과정" },
        { src: G + "work-6.jpg", alt: "제작 과정" }, { src: G + "work-7.jpg", alt: "제작 과정" }, { src: G + "work-8.jpg", alt: "제작 과정" }, { src: G + "work-9.jpg", alt: "제작 과정" } ] },
      { type: "note", text: "제작을 마친 개인 의상 두 벌의 완성 모습을 화보 촬영으로 기록했습니다." },
      { h: "완성작 화보 · Look 01", type: "gallery", layout: "p3", ratio: "2/3", items: [
        { src: G + "grad-01.jpg", alt: "Look 01 사진 1" }, { src: G + "grad-03.jpg", alt: "Look 01 사진 2" }, { src: G + "grad-05.jpg", alt: "Look 01 사진 3" } ] },
      { h: "완성작 화보 · Look 02", type: "gallery", layout: "p3", ratio: "2/3", items: [
        { src: G + "grad-02.jpg", alt: "Look 02 사진 1" }, { src: G + "grad-04.jpg", alt: "Look 02 사진 2" }, { src: G + "grad-06.jpg", alt: "Look 02 사진 3" } ] },
      { h: "부산패션위크 런웨이", sub: "완성한 의상은 부산패션위크 졸업작품 패션쇼 런웨이에서 선보였습니다.", type: "video", id: "pkECOfxbTWY", start: 1253, href: "https://www.youtube.com/live/pkECOfxbTWY?t=1253" }
    ],
    role: "FLASH FREEZE의 콘셉트와 소재·실루엣·색감의 방향을 팀원들과 함께 조율하고, 이를 바탕으로 의상 2벌을 디자인하고 제작했습니다."
  },
  {
    id: "traditional-display", cat: "VMD", title: "Traditional Korean Display",
    desc: "CLO 3D 사전 시뮬레이션으로 공간을 설계한 전통 소품 전시", tag: "2인 공동",
    thumb: { src: T + "install-1.jpg", pos: "50% 42%" },
    lead: "실타래, 족두리, 원앙 장식 등 전통 소품과 꽃, 병풍, 단상으로 한국적인 분위기를 연출한 전시 디스플레이입니다. 설치에 앞서 CLO 3D로 공간을 시뮬레이션했습니다.",
    facts: [["분류", "VMD"], ["형태", "2인 공동 프로젝트"], ["작업", "오브제 선정 · 공간 구성 · 설치"]],
    sections: [
      { h: "사용한 오브제", type: "tags", items: ["실타래", "족두리", "원앙 장식", "꽃", "병풍", "단상"] },
      { h: "구성 방식", type: "text", text: "전시 콘셉트에 맞춰 오브제를 고르고, 색감과 높낮이를 조절해 한 장면으로 구성했습니다." },
      { h: "사전 시뮬레이션과 설치 과정", type: "gallery", layout: "p2", ratio: "3/4", items: [
        { src: T + "simulation.png", cap: "CLO 3D로 제작한 사전 공간 시뮬레이션" }, { src: T + "process.jpg", cap: "설치 과정" } ] },
      { h: "완성 결과", type: "gallery", layout: "p2", ratio: "3/4", items: [
        { src: T + "install-1.jpg", alt: "설치 결과 정면" }, { src: T + "install-2.jpg", alt: "설치 결과 전체" } ] }
    ],
    role: "2인 공동 프로젝트로, 오브제 선정과 공간 구성, CLO 3D 사전 시뮬레이션, 현장 설치와 디스플레이까지 전 과정을 함께 진행했습니다."
  },
  {
    id: "fashion-display", cat: "VMD", title: "Fashion Exhibition Display",
    desc: "이전 졸업생 의상 2벌을 위한 전시 기획과 디스플레이", tag: "2인 공동",
    thumb: { src: F + "display-1.jpg" },
    lead: "이전 졸업생의 의상 두 벌을 활용해 전시 공간을 기획하고, 원단과 오브제, 마네킹의 배치를 구성한 2인 공동 프로젝트입니다.",
    facts: [["분류", "VMD"], ["형태", "2인 공동 프로젝트"], ["전시 의상", "이전 졸업생 제작 2벌"]],
    sections: [
      { h: "전시 구성", type: "points", items: [
        { t: "전시 콘셉트", d: "전시 의상이 돋보이도록 원단과 오브제를 맞추는 방향으로 구상했습니다." },
        { t: "배치 구성", d: "마네킹과 오브제의 배치를 설계하고, Photoshop 사전 시안을 거쳐 현장에 설치했습니다." } ] },
      { h: "사전 시안과 설치 과정", type: "gallery", layout: "g2", ratio: "4/3", items: [
        { src: F + "sketch.jpg", cap: "Photoshop으로 제작한 사전 전시 배치 시안" }, { src: F + "process.jpg", cap: "설치 과정" } ] },
      { h: "완성 결과", type: "gallery", layout: "wide", ratio: "4/3", items: [{ src: F + "display-1.jpg", alt: "전시 전체 사진" }] }
    ],
    role: "2인 공동 프로젝트로, 전시 콘셉트와 배치 구상, Photoshop 사전 배치 시안, 현장 설치와 디스플레이까지 전 과정을 함께 진행했습니다."
  }
];

/* ===== 수정하는 곳 4: Archive > Research & Analysis (수업 과제 보고서) =====
   PDF는 학번·교수명이 있는 표지를 뺀 공개용 사본입니다. 학번이 들어 있는 원본 PDF는 이 폴더에 넣지 마세요.
   [작업자 메모] 두 보고서 모두 직접 설문·실험이 아닌 수업 과제입니다.
     TOPTEN = 개인 구매 경험 기반 분석 / Footwear = 한국소비자원 공개 사례 조사·분석.
     기업 내부 데이터나 대규모 조사에 근거한 연구처럼 쓰지 않습니다.
   미리보기 이미지: assets/archive/research/<topten|footwear>/page-N.jpg (PDF에서 개인정보 없는 쪽만 추출) */
const RS = "assets/archive/research/";
const REPORTS = [
  {
    id: "topten", eyebrow: "Academic Research · Retail Strategy", cat: "Academic Research · Retail Strategy",
    title: "TOPTEN 매장 경험 분석",
    desc: "탑텐 오프라인 매장 이용 경험을 STP·VMD·CRM 관점에서 분석하고, 핏 중심의 개선안을 제안한 수업 과제입니다.",
    tags: ["Retail Experience", "STP", "VMD", "CRM"],
    /* 카드 썸네일: PDF 캡처가 아니라 CSS로 만든 타이포그래피 표지 (style.css 의 .rcover) */
    thumb: { cover: { no: "01", big: "TOPTEN", small: "매장 경험 분석", keys: "Retail · STP · VMD · CRM", tone: "dark" } },
    lead: "탑텐 오프라인 매장 이용 경험을 바탕으로 STP·VMD·CRM을 분석하고, 체형과 핏 중심의 개선안을 제안한 수업 과제입니다.",
    facts: [["유형", "Academic Research"], ["수업", "패션리테일링"], ["분석 대상", "탑텐 오프라인 매장"], ["근거", "개인 구매 경험"]],
    link: { href: RS + "topten/topten-retail-experience-analysis.pdf", label: "보고서 PDF 열기 · 공개용(표지 제외)" },
    sections: [
      { type: "scope", text: "개인 구매 경험을 바탕으로 한 분석입니다. 기업 내부 데이터나 대규모 소비자 조사에 근거한 연구가 아닙니다." },
      { h: "조사 배경과 목적", type: "points", items: [
        { t: "배경", d: "최근 6개월 이내에 매장에서 상품을 둘러보고 직접 피팅한 뒤 구매한 경험입니다. 가격과 사이즈를 가장 중요하게 봤고, 코디에 두루 쓸 수 있는 기본 아이템을 선호했습니다." },
        { t: "목적", d: "이 경험을 STP·VMD·CRM 관점에서 분석하고, 체형과 핏을 기준으로 한 개선 방안을 제안하는 것입니다." } ] },
      { h: "핵심 분석", sub: "STP · VMD · CRM", type: "cols", items: [
        { t: "STP", d: "‘합리적인 가격의 데일리 캐주얼 브랜드’로 포지셔닝하고, 실용성과 가격 대비 만족을 중시하며 할인에 민감한 소비자를 주요 타깃으로 봤습니다." },
        { t: "VMD", d: "입구의 1+1·할인·시즌 상품으로 가격 혜택이 바로 전달되고 카테고리·컬러별로 고르기 편합니다. 다만 행사 상품이 몰리면 혼잡해지고 저가 행사장처럼 보일 수 있습니다." },
        { t: "CRM", d: "회원 적립과 행사 안내가 재방문 동기를 만듭니다. 다만 할인 중심으로만 운영되면 충성도가 가격에만 의존합니다." } ] },
      { h: "주요 관찰", type: "points", items: [
        { t: "오프라인의 장점", d: "소재감, 두께, 실제 색상, 착용 핏을 직접 확인할 수 있어 구매 실패를 줄여 준다고 봤습니다." },
        { t: "행사 기간의 불편", d: "매장이 혼잡하고 할인 상품이 한곳에 몰려 원하는 색상과 사이즈를 찾는 데 시간이 걸렸습니다." },
        { t: "가격 중심 운영의 한계", d: "할인 중심으로 운영되면 ‘할인할 때 사는 브랜드’로 인식될 수 있다고 분석했습니다." } ] },
      { h: "개선 전략 제안", sub: "체형과 착용 목적에 맞춘 VMD와 CRM 강화", cls: "propose", type: "cols", items: [
        { t: "체형·핏 기준 상품 안내", d: "행거에 ‘슬림핏’, ‘정핏’, ‘오버핏’ 같은 착용감 중심 태그를 붙여 사이즈뿐 아니라 핏으로도 고를 수 있게 합니다." },
        { t: "피팅룸 주변 추천 코디 보드", d: "피팅룸 인근에 체형별·스타일별 코디 보드를 두고 ‘깔끔한 데일리룩’, ‘활동성이 좋은 여유핏’ 같은 추천을 안내합니다." },
        { t: "사이즈 선호 기반 개인화 CRM", d: "멤버십 데이터로 자주 구매하는 사이즈와 선호 핏을 파악해, 비슷한 핏의 신상품과 행사 상품을 알림과 온라인몰 추천으로 안내합니다." } ],
        after: "‘가격이 합리적인 브랜드’를 넘어 ‘나에게 맞는 옷을 쉽게 찾을 수 있는 브랜드’로 인식되고, 일회성 구매가 반복 구매로 이어질 수 있다고 정리했습니다." },
      { h: "보고서 일부", type: "gallery", layout: "p3", ratio: "1012/1430", items: [
        { src: RS + "topten/page-1.jpg", cap: "구매 경험 분석" },
        { src: RS + "topten/page-2.jpg", cap: "STP 및 VMD 평가" },
        { src: RS + "topten/page-3.jpg", cap: "CRM 평가와 개선점" } ] }
    ],
    roleLabel: "Scope",
    role: "개인 수업 과제로 작성한 보고서입니다."
  },
  {
    id: "footwear", eyebrow: "Academic Research · Consumer Research", cat: "Academic Research · Consumer Research",
    title: "신발 소비자 불만사례 분석",
    desc: "한국소비자원 공개 사례를 바탕으로 신발의 품질 하자, 세탁, 온라인 거래 분쟁을 유형별로 분석했습니다.",
    tags: ["Consumer Complaints", "Product Defect", "Care & Laundry", "Online Returns"],
    thumb: { cover: { no: "02", big: "FOOTWEAR", small: "소비자 불만사례 분석", keys: "Consumer · Quality · Case Study", tone: "slate" } },
    lead: "한국소비자원이 공개한 신발 관련 피해사례를 제품 손상, 관리, 취급 유형으로 나눠 분석하고, 소비자와 사업자 측 시사점을 정리한 수업 과제입니다.",
    facts: [["유형", "Academic Research"], ["수업", "섬유제품 품질관리"], ["조사 대상", "신발 관련 소비자 피해사례"], ["조사 기관", "한국소비자원(KCA)"], ["조사 기간", "최근 15년 이내 (2010~2025)"]],
    link: { href: RS + "footwear/footwear-consumer-complaints-research.pdf", label: "보고서 PDF 열기 · 공개용(표지 제외)" },
    sections: [
      { type: "scope", text: "한국소비자원이 공개한 피해예방주의보와 소비자분쟁조정 사례를 조사해 유형별로 분석한 수업 과제입니다. 설문·실험 없이 공개 사례를 분석했으며, 사례별 결과는 한국소비자원의 조정·판단으로 법원 판결과는 다릅니다." },
      { h: "조사 목적과 대상", type: "points", items: [
        { t: "목적", d: "신발에서 어떤 소비자 분쟁이 생기고 무엇을 기준으로 판단되는지 유형별로 정리하는 것입니다. 제품 손상, 관리(세탁·보관), 취급(온라인 거래)을 한 품목 안에서 함께 살펴볼 수 있습니다." },
        { t: "대상", d: "한국소비자원의 피해예방주의보와 소비자분쟁조정 사례 중 최근 15년 이내의 신발 관련 사례입니다." },
        { t: "배경 수치", d: "2020년 1월~2021년 6월 온라인 신발 구매 피해구제 신청은 924건이었고, 여름용 신발 121건 중 81건(약 67%)이 품질하자로 판단됐습니다. (한국소비자원 집계)" } ] },
      { h: "주요 피해사례 유형", type: "cols", items: [
        { t: "제품 손상 · 품질 하자", d: "보고서의 사례에서 설계·접착 불량 같은 구조적 문제는 제품 결함으로 판단됐습니다. 사용 환경의 영향이 큰 밑창 마모는 제조 하자로 보기 어렵다고 봤습니다." },
        { t: "관리 · 세탁", d: "세탁 불가 표시가 있어도 세탁업체가 라벨을 확인하지 않고 세탁한 사례에서는 업체의 배상 책임이 인정됐고, 소비자의 과실도 함께 고려됐습니다." },
        { t: "취급 · 온라인 거래", d: "수령 후 7일 이내에 문제를 제기하고 청약철회 의사를 밝힌 점이 환불 결정의 근거가 됐습니다." } ] },
      { h: "사례별 핵심 분석", type: "points", items: [
        { t: "스트랩 길이 비대칭 (샌들)", d: "오른발 스트랩이 5mm 이상 짧아 설계 불량에 따른 제품 결함으로 판단됐습니다." },
        { t: "갑피·밑창 접착 불량 (샌들)", d: "연결 부위의 접착 강도가 부족한 제조 공정상의 결함으로 판단됐습니다." },
        { t: "밑창 마모 (운동화)", d: "객관적 품질 기준이 없고 사용 환경과 착용 습관에 따라 달라 제조 하자로 보기 어렵다고 판단됐습니다." },
        { t: "세탁 불가 스니커즈 변색", d: "스웨이드 제품을 취급 정보 확인 없이 물세탁해, 세탁업체가 잔존가치와 세탁비를 합한 금액을 배상하도록 조정됐습니다." },
        { t: "세탁 불가 표시 신발의 변색", d: "라벨의 세탁 불가 표시를 고려해 소비자 책임 70%, 세탁업체 책임 30%로 나뉘었습니다." },
        { t: "사이즈 불일치 환불 (중고 신사화)", d: "수령 7일 이내 문제 제기와 청약철회 의사가 인정돼 대금 전액을 환급하도록 결정됐습니다. 수선은 사업자의 ‘수선 가능’ 안내에 따른 것이라 소비자 과실이 아니며, 실외 착용 주장은 증거가 부족했습니다." } ] },
      { h: "소비자 및 사업자 측 시사점", cls: "propose", type: "cols", items: [
        { t: "소비자 측", d: "수령 직후 사이즈·외관·기능을 점검하고, 이상이 있으면 7일 이내에 문제를 제기하며 청약철회 의사를 남기는 것이 중요합니다. 케어라벨을 확인하지 않으면 소비자 과실이 함께 고려될 수 있습니다." },
        { t: "사업자·세탁업자 측", d: "설계·접착·내구성 등 기본 품질을 관리하고, 사이즈·소재·취급 정보와 품질보증기간을 명확히 안내해야 합니다. 세탁업자는 라벨 확인, 세탁 방법 안내, 인수증 교부 같은 기본 절차를 지켜야 합니다." } ] },
      { h: "보고서 일부", type: "gallery", layout: "g2", ratio: "16/9", items: [
        { src: RS + "footwear/page-1.jpg", cap: "서론: 조사 배경" },
        { src: RS + "footwear/page-4.jpg", cap: "제품 손상 사례" },
        { src: RS + "footwear/page-2.jpg", cap: "관리·세탁 사례와 책임 구분" },
        { src: RS + "footwear/page-3.jpg", cap: "결론과 시사점" } ] },
      { h: "인용 출처", type: "sources", items: [
        "한국소비자원 피해구제 신청 통계",
        "한국소비자원 피해예방주의보, 「여름용 신발 품질하자 '내구성 불량'이 가장 많아」",
        "한국소비자원 피해예방주의보, 「운동화 품질하자 등 '내구성 불량'이 80.2%로 가장 많아」",
        "한국소비자원 소비자분쟁조정위원회, 「세탁 후 갑피 변형된 스니커즈에 대한 배상 요구」, 「세탁 후 변색된 신발 관련 손해배상 청구」",
        "한국소비자원 소비자분쟁조정위원회, 「사이즈가 작은 신사화 반품 요구」" ] }
    ],
    roleLabel: "Scope",
    role: "개인 수업 과제로 작성한 조사 보고서입니다. 인용한 사례와 통계의 출처는 한국소비자원 공개 자료입니다."
  }
];

/* ================= 이하 동작 코드 (보통 수정할 필요 없음) ================= */
const $ = (s, r = document) => r.querySelector(s);
const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* 이미지가 있으면 보여주고, 없으면 교체 위치 안내 상자를 보여줍니다 (칸의 비율은 CSS가 유지) */
function mount(el, src, label, note, o = {}) {
  el.innerHTML = `<div class="ph"><b>${esc(label)}</b>${note ? `<span>${esc(note)}</span>` : ""}<code>${esc(src)}</code></div>`;
  const img = new Image();
  img.alt = label;
  img.onload = () => {
    el.innerHTML = '<div class="fill"></div>'; $(".fill", el).appendChild(img);
    if (o.decor) img.alt = "";
    if (o.pos) img.style.objectPosition = o.pos;
    if (o.fit) img.style.objectFit = o.fit;
    if (o.bg) el.style.background = o.bg;
    if (o.zoom) { el.classList.add("zoom"); el.tabIndex = 0; el.setAttribute("role", "button"); el.setAttribute("aria-label", label + " 확대"); }
  };
  img.src = src;
}
document.querySelectorAll("[data-img]").forEach(el => {
  if (el.dataset.ratio) el.style.setProperty("--r", el.dataset.ratio);
  mount(el, el.dataset.img, el.dataset.label, el.dataset.note);
});

/* 사진 갤러리 (클릭하면 확대) */
function gallery(host, layout, items, ratio, reveal) {
  host.className = "gal " + (layout || "g3");
  items.forEach(it => {
    const f = document.createElement("figure"), b = document.createElement("div");
    b.className = "box"; b.style.setProperty("--r", it.r || ratio || "4/3");
    f.appendChild(b);
    if (reveal) { f.classList.add("reveal"); f.dataset.stg = "1"; }   /* 스크롤 등장 (프로젝트 카드와 같은 .reveal) */
    const cap = it.cap || "";
    if (cap) { const c = document.createElement("figcaption"); c.textContent = cap; f.appendChild(c); }
    host.appendChild(f);
    mount(b, it.src, it.alt || cap || "사진", null, { zoom: !it.noZoom });
    b.dataset.cap = cap;
  });
}

/* 확대 보기 */
const lb = $("#lb"); let lbList = [], lbI = 0;
function lbShow(i) {
  lbI = (i + lbList.length) % lbList.length;
  const b = lbList[lbI], img = $("img", b);
  $("#lbImg").src = img.src; $("#lbImg").alt = img.alt; $("#lbCap").textContent = b.dataset.cap || "";
  const one = lbList.length < 2; $("#lbPrev").hidden = $("#lbNext").hidden = one;
}
document.addEventListener("click", e => {
  const b = e.target.closest(".zoom"); if (!b) return;
  const g = b.closest(".gal");   /* 갤러리 안 사진은 묶어서 넘기고, 단독 대표 이미지는 한 장만 보여줍니다 */
  lbList = g ? [...g.querySelectorAll(".zoom")] : [b];
  if (!lb.open) lb.showModal();
  lbShow(lbList.indexOf(b));
});
document.addEventListener("keydown", e => {
  const b = e.target.closest && e.target.closest(".zoom");
  if (b && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); b.click(); }
  if (lb.open && e.key === "ArrowRight") lbShow(lbI + 1);
  if (lb.open && e.key === "ArrowLeft") lbShow(lbI - 1);
});
$("#lbClose").onclick = () => lb.close();
$("#lbPrev").onclick = () => lbShow(lbI - 1);
$("#lbNext").onclick = () => lbShow(lbI + 1);
lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });

/* 프로젝트 카드 */
PROJECTS.forEach((p, i) => {
  const b = document.createElement("button");
  b.className = "card reveal";
  b.innerHTML = `<div class="thumb"></div><span class="cat">${esc(p.cat)}</span><h3>${esc(p.title)}<span class="arr" aria-hidden="true">→</span></h3><p>${esc(p.desc)}</p><span class="tag">${esc(p.tag)}</span>`;
  b.onclick = () => openItem(PROJECTS, i);
  $("#cards").appendChild(b);
  const t = p.thumb || {};
  mount($(".thumb", b), t.src || `assets/projects/${p.id}/cover.jpg`, `${p.title} 대표 이미지`, p.title, { ...t, decor: true });   /* 카드 안 사진은 바로 옆 제목과 같은 내용이라 대체 텍스트를 비움(스크린 리더 중복 방지) */
});

/* Archive 보고서 카드: 썸네일은 이미지 파일 대신 글자로 만든 표지 */
function rcover(el, c, title) {
  el.classList.add("rc");
  el.innerHTML = `<div class="rcover ${esc(c.tone)}" role="img" aria-label="${esc(title)}"><span class="rc-top"><i>Research</i><i>No. ${esc(c.no)}</i></span><span class="rc-main"><b>${esc(c.big)}</b><em>${esc(c.small)}</em></span><span class="rc-keys">${esc(c.keys)}</span></div>`;
}
/* Archive 보고서 카드 */
REPORTS.forEach((p, i) => {
  const b = document.createElement("button");
  b.className = "card reveal";
  b.innerHTML = `<div class="thumb"></div><span class="cat">${esc(p.cat)}</span><h3>${esc(p.title)}<span class="arr" aria-hidden="true">→</span></h3><p>${esc(p.desc)}</p><div class="ktags">${p.tags.map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;
  b.onclick = () => openItem(REPORTS, i);
  $("#reportCards").appendChild(b);
  rcover($(".thumb", b), p.thumb.cover, p.title);
});

/* 프로젝트 상세 */
const modal = $("#modal"), body = $("#mBody");
let cur = 0, curList = PROJECTS, curBack = "#projects";
function section(s, i) {
  let inner = "";
  if (s.type === "cols") inner = `<ul class="steps cols">${s.items.map(x => `<li><b>${esc(x.t)}</b><span>${esc(x.d)}</span></li>`).join("")}</ul>`;
  if (s.type === "sources") inner = `<ul class="src">${s.items.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;
  if (s.type === "items") inner = `<ul class="steps">${s.items.map(x => `<li><b>${esc(x.t)}</b><span>${esc(x.d)}</span></li>`).join("")}</ul>`;   /* 순서가 없는 목록 (steps 와 모양은 같고 순서 의미만 없음) */
  if (s.type === "steps") inner = `<ol class="steps">${s.items.map(x => `<li><b>${esc(x.t)}</b><span>${esc(x.d)}</span></li>`).join("")}</ol>`;
  if (s.type === "points") inner = `<dl class="points">${s.items.map(x => `<div><dt>${esc(x.t)}</dt><dd>${esc(x.d)}</dd></div>`).join("")}</dl>`;
  if (s.type === "tags") inner = `<div class="tags">${s.items.map(x => `<span>${esc(x)}</span>`).join("")}</div>`;
  if (s.type === "text") inner = `<p class="m-text">${esc(s.text)}</p>`;
  if (s.type === "gallery" || s.type === "images") inner = `<div data-si="${i}"></div>`;
  if (s.type === "video") inner = `<div class="vid" data-vid="${i}"><button class="vid-play" type="button"><span aria-hidden="true">▶</span> 런웨이 영상 재생</button></div><a class="m-link" href="${esc(s.href)}" target="_blank" rel="noopener">YouTube에서 보기</a>`;
  if (s.type === "note") return `<p class="m-note">${esc(s.text)}</p>`;
  if (s.type === "scope") return `<p class="m-scope">${esc(s.text)}</p>`;
  return `<section class="ms${s.cls ? " " + s.cls : ""}"><h3>${esc(s.h)}</h3>${s.sub ? `<p class="sub">${esc(s.sub)}</p>` : ""}${inner}${s.after ? `<p class="m-text m-after">${esc(s.after)}</p>` : ""}</section>`;
}
function openItem(list, i) {
  curList = list; curBack = list === REPORTS ? "#archive" : "#projects";
  cur = (i + list.length) % list.length;
  const p = list[cur];
  body.classList.toggle("rep", !!p.eyebrow);
  body.innerHTML = `
    <div class="m-head">${p.eyebrow ? `<p class="m-eyebrow">${esc(p.eyebrow)}</p>` : ""}<h2 id="mTitle">${esc(p.title)}</h2><p class="m-lead">${esc(p.lead)}</p>
      <dl class="m-facts">${p.facts.map(f => `<div><dt>${esc(f[0])}</dt><dd>${esc(f[1])}</dd></div>`).join("")}</dl>
      ${p.link ? `<a class="m-link" href="${esc(p.link.href)}" target="_blank" rel="noopener">${esc(p.link.label)}</a>` : ""}</div>
    ${p.cover ? '<div class="m-cover" id="mCover"></div>' : ""}
    ${p.sections.map(section).join("")}
    <div class="m-role"><h3>${esc(p.roleLabel || "Role")}</h3><p>${esc(p.role)}</p></div>`;
  if (p.cover) mount($("#mCover"), p.cover.src, `${p.title} 대표 이미지`, null, { zoom: true });
  if (p.cover) $("#mCover").dataset.cap = p.cover.cap || "";
  body.querySelectorAll("[data-si]").forEach(h => {
    const s = p.sections[+h.dataset.si];
    const items = s.type === "images"
      ? Array.from({ length: s.n }, (_, k) => ({ src: `${s.dir}${s.name}-${k + 1}.jpg`, alt: s.n > 1 ? `${s.label} ${k + 1}` : s.label, noZoom: false }))
      : s.items;
    gallery(h, s.layout, items, s.ratio);
  });
  body.querySelectorAll("[data-vid]").forEach(v => {
    const s = p.sections[+v.dataset.vid];
    $(".vid-play", v).onclick = () => { v.innerHTML = `<iframe src="https://www.youtube.com/embed/${s.id}?start=${s.start || 0}&autoplay=1&rel=0" title="${esc(s.h)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`; };
  });
  if (!modal.open) { modal.showModal(); document.documentElement.style.overflow = "hidden"; }
  modal.scrollTop = 0;
  history.replaceState(null, "", `#${p.id}`);
}
/* 상세 화면 열기·닫기·이동: 짧은 페이드 + 작은 이동 (모션 감소 설정이면 즉시) */
const calm = matchMedia("(prefers-reduced-motion: reduce)");
let closing = false, swapT = null, target = null;
function closeModal() {
  if (!modal.open || closing) return;
  if (calm.matches) { modal.close(); return; }
  closing = true; modal.classList.add("closing");
  setTimeout(() => { modal.classList.remove("closing"); closing = false; if (modal.open) modal.close(); }, 240);
}
modal.addEventListener("close", () => {
  document.documentElement.style.overflow = ""; history.replaceState(null, "", curBack);
  /* 닫은 뒤 키보드 포커스는 마지막으로 보던 프로젝트의 카드로 */
  const c = (curList === REPORTS ? $("#reportCards") : $("#cards")).querySelectorAll(".card")[cur];
  if (c) c.focus({ preventScroll: false });
});
modal.addEventListener("cancel", e => { e.preventDefault(); closeModal(); });   /* ESC */
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
$("#mClose").onclick = closeModal;
/* 이전·다음: 내용을 짧게 사라지게 한 뒤 교체하고 다시 나타냄. 연타하면 마지막 목적지로 한 번만 이동 */
function go(d) {
  if (closing) return;
  target = (((target === null ? cur : target) + d) % curList.length + curList.length) % curList.length;
  if (calm.matches) { openItem(curList, target); target = null; return; }
  if (swapT) return;
  body.classList.remove("swap-in"); body.classList.add("swap-out");
  swapT = setTimeout(() => {
    const t = target; target = null; swapT = null;
    openItem(curList, t);
    body.classList.remove("swap-out"); void body.offsetWidth; body.classList.add("swap-in");
    setTimeout(() => body.classList.remove("swap-in"), 420);
  }, 140);
}
$("#mPrev").onclick = () => go(-1);
$("#mNext").onclick = () => go(1);
if (location.hash) {
  const pi = PROJECTS.findIndex(p => "#" + p.id === location.hash), ri = REPORTS.findIndex(p => "#" + p.id === location.hash);
  if (pi > -1) openItem(PROJECTS, pi); else if (ri > -1) openItem(REPORTS, ri);
}

addEventListener("hashchange", () => {   /* 같은 화면에서 주소의 #해시만 바뀐 경우에도 해당 상세 화면 열기 */
  const pi = PROJECTS.findIndex(p => "#" + p.id === location.hash), ri = REPORTS.findIndex(p => "#" + p.id === location.hash);
  if (pi > -1) openItem(PROJECTS, pi); else if (ri > -1) openItem(REPORTS, ri);
});

/* Archive: 내용이 있을 때만 표시 */
function hide(id) { $("#" + id).remove(); const a = $(`#menu a[href="#${id}"]`); if (a) a.remove(); }
if (ARCHIVE.length) gallery($("#archiveList"), "g3", ARCHIVE, "3/4", true); else $("#arcDesign").remove();
if (!REPORTS.length) $("#arcResearch").remove();
if (!ARCHIVE.length && !REPORTS.length) hide("archive");

/* Contact: 입력된 항목이 있을 때만 표시 */
const rows = [];
if (CONTACT.email) rows.push(`<a class="row" href="mailto:${esc(CONTACT.email)}"><span>Email</span><span>${esc(CONTACT.email)}</span></a>`);
if (CONTACT.instagram) rows.push(`<a class="row" href="${esc(CONTACT.instagram)}" target="_blank" rel="noopener"><span>Instagram</span><span>${esc(CONTACT.instagramHandle || "바로가기")} ↗</span></a>`);
if (CONTACT.phone) rows.push(`<div class="row"><span>Phone</span><span class="row-val">${esc(CONTACT.phone)}</span></div>`);   /* 링크 아님: 일반 텍스트 */
if (CONTACT.pdf) rows.push(`<a class="row" href="${esc(CONTACT.pdf)}" target="_blank" rel="noopener"><span>Portfolio PDF</span><span>열기</span></a>`);
if (rows.length) $("#contactBox").innerHTML = `<p>협업과 채용 문의는 아래로 연락해 주세요.</p>${rows.join("")}`; else hide("contact");

/* 모바일 메뉴 · 스크롤 상태 · 현재 섹션 표시 */
const burger = $("#burger"), menu = $("#menu");
const setMenu = o => { menu.classList.toggle("open", o); burger.setAttribute("aria-expanded", o); };
burger.onclick = () => setMenu(!menu.classList.contains("open"));
menu.querySelectorAll("a").forEach(a => a.onclick = () => setMenu(false));
addEventListener("scroll", () => $("#nav").classList.toggle("scrolled", scrollY > 8), { passive: true });
const links = [...menu.querySelectorAll("a")];
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section").forEach(s => io.observe(s));
/* 스크롤 등장(.reveal): 한 번 나타나면 계속 보입니다.
   같은 순간에 함께 나타나는 요소(data-stg)는 화면 배치 순서(위→아래, 왼쪽→오른쪽)로 짧은 시차를 둡니다.
   data-stg 값이 1이면 0.13초(드레이핑 사진), 그 외 숫자는 그 값(ms)씩, 최대 0.36초까지만 */
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
if ("IntersectionObserver" in window && !reduceMotion) {
  const rv = new IntersectionObserver(es => {
    const hit = es.filter(e => e.isIntersecting);
    hit.sort((a, b) => { const A = a.boundingClientRect, B = b.boundingClientRect; return (Math.round(A.top / 24) - Math.round(B.top / 24)) || (A.left - B.left); });
    let n = 0;
    hit.forEach(e => {
      const t = e.target, st = +t.dataset.stg;
      if (st) {
        /* data-lag: 두 열로 나란히 놓였을 때 오른쪽 칸은 왼쪽 칸보다 조금 늦게 (한 열일 때는 적용 안 함) */
        const lag = (+t.dataset.lag || 0) * (innerWidth > 820 ? 1 : 0);
        t.style.transitionDelay = Math.min(n++ * (st > 1 ? st : 130) + lag, 360) + "ms";
      }
      t.classList.add("in"); rv.unobserve(t);
    });
  }, { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(el => rv.observe(el));
} else document.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
window.__rvOK = true;
