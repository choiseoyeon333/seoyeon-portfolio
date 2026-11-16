/* ===== 수정하는 곳 1: 연락처 =====
   입력한 항목만 표시되고, 모두 비워 두면 CONTACT 섹션과 메뉴가 숨겨집니다. */
const CONTACT = {
  email: "chltjdus333@naver.com",
  instagram: "",  // 예: "https://www.instagram.com/아이디"
  pdf: ""         // 예: "assets/portfolio.pdf"
};

/* ===== 수정하는 곳 2: Archive =====
   비워 두면 ARCHIVE 섹션과 메뉴가 숨겨집니다. r 은 사진의 가로:세로 비율입니다. */
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
    desc: "돌실나이 기반 신규 라인·마케팅 전략 제안", tag: "공모전 출품작",
    thumb: { src: D + "page-01.jpg", fit: "contain", bg: "#faf9f5" },
    cover: { src: D + "page-01.jpg", cap: "프로젝트 표지" },
    link: { href: D + "dolwear-project.pdf", label: "프로젝트 PDF 열기 (7.8MB)" },
    lead: "생활한복 브랜드 돌실나이를 분석하고, 세대가 함께 입을 수 있는 라운지웨어 ‘돌웨어’의 2027 S/S 캡슐 라인을 제안했습니다.",
    facts: [["분류", "Brand Strategy"], ["형태", "공모전 출품작"], ["제안", "2027 S/S 캡슐 컬렉션"]],
    sections: [
      { h: "기획 흐름", type: "steps", items: [
        { t: "브랜드 이해", d: "돌실나이의 현황과 브랜드 방향을 정리했습니다." },
        { t: "시장·경쟁 조사", d: "환경 분석과 경쟁 분석으로 브랜드가 놓인 위치를 살폈습니다." },
        { t: "타깃 설정", d: "STP로 세대 공감형 라운지웨어의 타깃과 포지션을 정했습니다." },
        { t: "방향 도출", d: "SWOT을 근거로 신규 라인과 팝업스토어 전략을 제안했습니다." },
        { t: "실행안", d: "MD 구성, 마케팅 전략, 의상 디자인으로 구체화했습니다." } ] },
      { h: "제안 내용", type: "points", items: [
        { t: "브랜드·환경·경쟁 분석", d: "제안의 출발점이 된 현황 분석" },
        { t: "SWOT · STP", d: "신규 라인의 방향과 타깃을 정한 근거" },
        { t: "마케팅 전략", d: "팝업스토어와 CRM 제안" },
        { t: "MD 구성", d: "2027 S/S 캡슐 라인의 상품 구성" },
        { t: "의상 디자인", d: "돌웨어 룩 디자인" } ] },
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
      { type: "note", text: "파우치·팝업스토어·소재·룩 일러스트·도식화 등 일부 비주얼은 생성형 AI를 활용해 제작했으며, 사용한 프롬프트는 PDF 부록(AI 활용 및 Prompt)에 정리되어 있습니다." }
    ],
    role: "브랜드 분석부터 타깃 설정, 상품 구성, 마케팅 제안까지 하나의 흐름으로 정리한 공모전 출품작입니다."
  },
  {
    id: "graduation", cat: "Fashion Design", title: "Graduation Collection",
    desc: "시간·기억·빙하기를 주제로 한 졸업작품", tag: "졸업작품",
    thumb: { src: G + "grad-01.jpg", pos: "50% 28%" },
    lead: "시간과 기억, 빙하기에서 출발한 콘셉트를 의상의 실루엣과 소재, 런웨이의 시각 요소로 발전시킨 졸업작품입니다.",
    facts: [["분류", "Fashion Design"], ["주제", "시간 · 기억 · 빙하기"], ["팀 콘셉트", "FLASH FREEZE"], ["결과", "의상 · 패션쇼"]],
    sections: [
      { h: "콘셉트", type: "tags", items: ["시간", "기억", "빙하기"] },
      { h: "팀 콘셉트 · FLASH FREEZE", type: "gallery", layout: "full", ratio: "16/9", items: [{ src: G + "team-mood.jpg", cap: "팀 무드보드" }] },
      { type: "note", text: "갑작스러운 빙하기로 자연의 역동적인 순간이 얼어붙은 모습을 패션으로 표현한 팀 콘셉트입니다." },
      { h: "개인 무드보드", type: "gallery", layout: "full", ratio: "16/9", items: [{ src: G + "my-mood.jpg", cap: "개인 무드보드" }] },
      { h: "초기 구상 스케치", type: "gallery", layout: "p2", ratio: "3/4", items: [
        { src: G + "sketch-1.jpg", cap: "초기 디자인 스케치 1" }, { src: G + "sketch-2.jpg", cap: "초기 디자인 스케치 2" } ] },
      { type: "note", text: "초기 구상안입니다. 최종 완성 의상은 이 구상에서 달라졌습니다." },
      { h: "디자인 과정", type: "steps", items: [
        { t: "주제·무드보드", d: "주제의 이미지와 분위기를 모았습니다." },
        { t: "디자인 스케치", d: "콘셉트를 의상 디자인으로 풀었습니다." },
        { t: "소재·실루엣", d: "표현에 맞는 소재와 실루엣을 정했습니다." },
        { t: "제작", d: "디자인을 의상으로 만들었습니다." },
        { t: "AI 비주얼", d: "시각 자료 제작에 AI를 활용했습니다." } ] },
      /* 사진 파일 번호는 제작 순서가 아니므로 캡션·번호 없이 나열 */
      { h: "원단 및 제작 과정", type: "gallery", layout: "g4", ratio: "3/4", items: [
        { src: G + "fabric.jpg", alt: "원단" }, { src: G + "work-1.jpg", alt: "제작 과정" }, { src: G + "work-5.jpg", alt: "제작 과정" },
        { src: G + "work-6.jpg", alt: "제작 과정" }, { src: G + "work-7.jpg", alt: "제작 과정" }, { src: G + "work-8.jpg", alt: "제작 과정" }, { src: G + "work-9.jpg", alt: "제작 과정" } ] },
      { h: "완성 작품 · Look 01", type: "gallery", layout: "p3", ratio: "2/3", items: [
        { src: G + "grad-01.jpg", alt: "Look 01 사진 1" }, { src: G + "grad-03.jpg", alt: "Look 01 사진 2" }, { src: G + "grad-05.jpg", alt: "Look 01 사진 3" } ] },
      { h: "완성 작품 · Look 02", type: "gallery", layout: "p3", ratio: "2/3", items: [
        { src: G + "grad-02.jpg", alt: "Look 02 사진 1" }, { src: G + "grad-04.jpg", alt: "Look 02 사진 2" }, { src: G + "grad-06.jpg", alt: "Look 02 사진 3" } ] },
      { h: "런웨이 영상", type: "video", id: "pkECOfxbTWY", start: 1253, href: "https://www.youtube.com/live/pkECOfxbTWY?t=1253" }
    ],
    role: "팀 콘셉트 FLASH FREEZE를 바탕으로, 시각적 콘셉트를 의상과 런웨이로 연결하는 개인 디자인 작업을 진행했습니다."
  },
  {
    id: "traditional-display", cat: "VMD", title: "Traditional Korean Display",
    desc: "한국 전통 소품 전시 / 2인 공동 작업", tag: "2인 공동",
    thumb: { src: T + "install-1.jpg", pos: "50% 42%" },
    lead: "실타래, 족두리, 원앙 장식 같은 전통 소품과 꽃, 병풍, 단상으로 한국적인 분위기를 연출한 전시 디스플레이입니다.",
    facts: [["분류", "VMD"], ["형태", "2인 공동 작업"], ["역할", "기획 · 연출 · 설치"]],
    sections: [
      { h: "사용한 오브제", type: "tags", items: ["실타래", "족두리", "원앙 장식", "꽃", "병풍", "단상"] },
      { h: "구성 방식", type: "text", text: "전시 콘셉트에 맞춰 오브제를 고르고, 색채와 높낮이를 조절해 한 장면으로 구성했습니다." },
      { h: "사전 시뮬레이션과 설치 과정", type: "gallery", layout: "p2", ratio: "3/4", items: [
        { src: T + "simulation.png", cap: "CLO 3D로 제작한 사전 공간 시뮬레이션" }, { src: T + "process.jpg", cap: "설치 과정" } ] },
      { h: "완성 결과", type: "gallery", layout: "p2", ratio: "3/4", items: [
        { src: T + "install-1.jpg", alt: "설치 결과 정면" }, { src: T + "install-2.jpg", alt: "설치 결과 전체" } ] }
    ],
    role: "2인 공동으로 기획하고 제작했습니다."
  },
  {
    id: "fashion-display", cat: "VMD", title: "Fashion Exhibition Display",
    desc: "이전 졸업생 의상 전시 / 2인 공동 작업", tag: "2인 공동",
    thumb: { src: F + "display-1.jpg" },
    lead: "이전 졸업생이 제작한 의상 두 벌을 주제로 원단과 오브제, 마네킹의 배치를 구성한 패션 전시 디스플레이입니다.",
    facts: [["분류", "VMD"], ["형태", "2인 공동 작업"], ["전시 의상", "이전 졸업생 제작 2벌"]],
    sections: [
      { h: "전시 구성", type: "points", items: [
        { t: "의상과 배경의 관계", d: "의상이 돋보이도록 원단과 오브제를 맞췄습니다." },
        { t: "공간 구성", d: "마네킹과 오브제의 배치를 설계했습니다." } ] },
      { h: "사전 시안과 설치 과정", type: "gallery", layout: "g2", ratio: "4/3", items: [
        { src: F + "sketch.jpg", cap: "Photoshop으로 제작한 사전 전시 배치 시안" }, { src: F + "process.jpg", cap: "설치 과정" } ] },
      { h: "완성 결과", type: "gallery", layout: "wide", ratio: "4/3", items: [{ src: F + "display-1.jpg", alt: "전시 전체 사진" }] }
    ],
    role: "2인 공동으로 전시를 기획하고 제작했습니다. 전시한 의상은 이전 졸업생의 작품이며, 제 작업 범위는 전시 기획과 연출입니다."
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
function gallery(host, layout, items, ratio) {
  host.className = "gal " + (layout || "g3");
  items.forEach(it => {
    const f = document.createElement("figure"), b = document.createElement("div");
    b.className = "box"; b.style.setProperty("--r", it.r || ratio || "4/3");
    f.appendChild(b);
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
  const b = e.target.closest(".box.zoom"); if (!b) return;
  lbList = [...b.closest(".gal").querySelectorAll(".box.zoom")];
  if (!lb.open) lb.showModal();
  lbShow(lbList.indexOf(b));
});
document.addEventListener("keydown", e => {
  const b = e.target.closest && e.target.closest(".box.zoom");
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
  b.innerHTML = `<div class="thumb"></div><span class="cat">${esc(p.cat)}</span><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p><span class="tag">${esc(p.tag)}</span>`;
  b.onclick = () => openProject(i);
  $("#cards").appendChild(b);
  const t = p.thumb || {};
  mount($(".thumb", b), t.src || `assets/projects/${p.id}/cover.jpg`, "대표 이미지", p.title, t);
});

/* 프로젝트 상세 */
const modal = $("#modal"), body = $("#mBody");
let cur = 0;
function section(s, i) {
  let inner = "";
  if (s.type === "steps") inner = `<ol class="steps">${s.items.map(x => `<li><b>${esc(x.t)}</b><span>${esc(x.d)}</span></li>`).join("")}</ol>`;
  if (s.type === "points") inner = `<dl class="points">${s.items.map(x => `<div><dt>${esc(x.t)}</dt><dd>${esc(x.d)}</dd></div>`).join("")}</dl>`;
  if (s.type === "tags") inner = `<div class="tags">${s.items.map(x => `<span>${esc(x)}</span>`).join("")}</div>`;
  if (s.type === "text") inner = `<p class="m-text">${esc(s.text)}</p>`;
  if (s.type === "gallery" || s.type === "images") inner = `<div data-si="${i}"></div>`;
  if (s.type === "video") inner = `<div class="vid" data-vid="${i}"><button class="vid-play" type="button"><span aria-hidden="true">▶</span> 런웨이 영상 재생</button></div><a class="m-link" href="${esc(s.href)}" target="_blank" rel="noopener">YouTube에서 보기</a>`;
  if (s.type === "note") return `<p class="m-note">${esc(s.text)}</p>`;
  return `<section class="ms"><h3>${esc(s.h)}</h3>${inner}</section>`;
}
function openProject(i) {
  cur = (i + PROJECTS.length) % PROJECTS.length;
  const p = PROJECTS[cur];
  body.innerHTML = `
    <div class="m-head"><h2 id="mTitle">${esc(p.title)}</h2><p class="m-lead">${esc(p.lead)}</p>
      <dl class="m-facts">${p.facts.map(f => `<div><dt>${esc(f[0])}</dt><dd>${esc(f[1])}</dd></div>`).join("")}</dl>
      ${p.link ? `<a class="m-link" href="${esc(p.link.href)}" target="_blank" rel="noopener">${esc(p.link.label)}</a>` : ""}</div>
    ${p.cover ? '<div class="m-cover" id="mCover"></div>' : ""}
    ${p.sections.map(section).join("")}
    <div class="m-role"><h3>Role</h3><p>${esc(p.role)}</p></div>`;
  if (p.cover) mount($("#mCover"), p.cover.src, "대표 이미지", null, { zoom: true });
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
modal.addEventListener("close", () => { document.documentElement.style.overflow = ""; history.replaceState(null, "", "#projects"); });
modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });
$("#mClose").onclick = () => modal.close();
$("#mPrev").onclick = () => openProject(cur - 1);
$("#mNext").onclick = () => openProject(cur + 1);
if (location.hash) { const i = PROJECTS.findIndex(p => "#" + p.id === location.hash); if (i > -1) openProject(i); }

/* Archive: 내용이 있을 때만 표시 */
function hide(id) { $("#" + id).remove(); const a = $(`#menu a[href="#${id}"]`); if (a) a.remove(); }
if (ARCHIVE.length) gallery($("#archiveList"), "g3", ARCHIVE, "3/4"); else hide("archive");

/* Contact: 입력된 항목이 있을 때만 표시 */
const rows = [];
if (CONTACT.email) rows.push(`<a class="row" href="mailto:${esc(CONTACT.email)}"><span>Email</span><span>${esc(CONTACT.email)}</span></a>`);
if (CONTACT.instagram) rows.push(`<a class="row" href="${esc(CONTACT.instagram)}" target="_blank" rel="noopener"><span>Instagram</span><span>바로가기</span></a>`);
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
const rv = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); rv.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => rv.observe(el));
