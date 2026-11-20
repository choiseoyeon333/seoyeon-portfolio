/* 페이지 전환: 랜딩 ↔ 포트폴리오 (두 페이지 공통, <head> 에서 로드)
   1) 문서 간 View Transition 을 지원하는 브라우저(Chrome·Edge·Safari 18.2+ 등):
      CSS 의 @view-transition 이 담당합니다. 랜딩 대표 사진이 ABOUT 프로필 사진으로, 로고가 메뉴 로고로 이어지고
      나머지 화면은 부드럽게 교차합니다. 이동 전 페이드나 빈 화면 없이 현재 화면이 유지되다가 바로 이어집니다.
   2) 지원하지 않는 브라우저: 현재 화면을 짧게 페이드 아웃한 뒤 이동하고, 도착 페이지가 ABOUT 을 차례로 올립니다.
   JS 가 동작하지 않아도 링크는 일반 이동이고, 모션 감소 설정이면 효과 없이 바로 이동합니다. */
(function () {
  var root = document.documentElement;
  var LEAVE = 220;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var VT = root.classList.contains("vt");

  /* 짝이 없는 사진(화면 밖에 있는 프로필)은 이어 붙이지 않음: 엉뚱한 곳으로 날아가지 않도록 */
  function guardPhoto(skipHash) {
    var p = document.querySelector(".profile");
    if (!p) return;
    var r = p.getBoundingClientRect(), h = window.innerHeight || 800;
    var h0 = location.hash;
    var off = r.top > h * 0.8 || r.bottom < 40 || (skipHash && h0 && h0 !== "#about" && h0 !== "#top");
    if (off) p.style.viewTransitionName = "none";
  }
  window.addEventListener("pagereveal", function (e) { if (e.viewTransition) guardPhoto(true); });
  window.addEventListener("pageswap", function (e) { if (e.viewTransition) guardPhoto(false); });

  /* 1) 이동 전 페이드: View Transition 이 없는 브라우저에서만 */
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[data-page]");
    if (!a || VT || reduce || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target === "_blank") return;
    e.preventDefault();
    var b = document.body;
    b.style.transition = "opacity " + LEAVE + "ms ease";
    b.style.opacity = "0";
    setTimeout(function () { location.href = a.href; }, LEAVE + 20);   /* 어떤 경우에도 이동은 반드시 실행 */
  });

  /* 뒤로·앞으로 가기로 복원된 화면이 투명하게 남지 않도록 */
  window.addEventListener("pageshow", function () {
    if (document.body) { document.body.style.opacity = ""; document.body.style.transition = ""; }
    try { if (root.dataset.page !== "portfolio") sessionStorage.removeItem("seoyeon-from"); } catch (_) {}
  });
  /* 포트폴리오를 떠날 때 표시해 두면, 랜딩이 짧은 등장 효과로 열립니다 (뒤로 가기 포함) */
  window.addEventListener("pagehide", function () {
    try { if (root.dataset.page === "portfolio") sessionStorage.setItem("seoyeon-from", "portfolio"); } catch (_) {}
  });
})();
