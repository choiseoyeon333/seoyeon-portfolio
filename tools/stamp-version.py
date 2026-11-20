#!/usr/bin/env python3
"""캐시 방지용 버전 표시 갱신 도구 (CSS·JS 파일 내용이 바뀌면 주소 끝의 ?v=... 값을 새로 계산합니다)

왜 필요한가: GitHub Pages 는 모든 파일에 10분짜리 캐시(Cache-Control: max-age=600)를 붙이고, 이 값은 바꿀 수 없습니다.
그래서 style.css 처럼 '주소가 그대로인' 파일은 방문자의 브라우저에 이전 내용이 남아, 새 HTML 과 옛 CSS 가 섞여 보일 수 있습니다.
파일 내용에서 계산한 ?v=해시 를 주소에 붙이면 내용이 바뀐 파일만 새 주소가 되어 항상 새 파일을 받습니다 (바뀌지 않은 파일은 그대로 캐시 사용).

사용법 (사이트 폴더 어디서든):
  python3 tools/stamp-version.py           # CSS·JS 를 고친 뒤, 커밋 전에 한 번 실행
  python3 tools/stamp-version.py --check   # 갱신이 필요한지만 확인 (필요하면 종료코드 1)
Windows 에서 python3 가 안 되면 `python tools/stamp-version.py` 또는 `py tools/stamp-version.py`
"""
import hashlib, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PAGES = ["index.html", "portfolio.html"]
# 같은 사이트 안의 .css / .js 참조 (https:// 외부 주소는 제외). 기존 ?v=값이 있으면 교체합니다.
REF = re.compile(r'((?:href|src)=")(?!https?:|//)([^"?#]+\.(?:css|js))(?:\?v=[0-9A-Za-z]+)?(")')

def short_hash(path: Path) -> str:
    return hashlib.sha1(path.read_bytes()).hexdigest()[:8]

def stamp(text: str, missing: list) -> str:
    def sub(m):
        f = ROOT / m.group(2)
        if not f.is_file():
            missing.append(m.group(2)); return m.group(0)
        return f'{m.group(1)}{m.group(2)}?v={short_hash(f)}{m.group(3)}'
    return REF.sub(sub, text)

def main() -> int:
    check = "--check" in sys.argv
    stale, missing = [], []
    for name in PAGES:
        p = ROOT / name
        old = p.read_text(encoding="utf-8")
        new = stamp(old, missing)
        if new != old:
            stale.append(name)
            if not check: p.write_text(new, encoding="utf-8")
    for m in missing: print("경고: 파일을 찾을 수 없음 ->", m)
    if check:
        print("갱신 필요: " + ", ".join(stale) if stale else "버전 표시가 최신입니다.")
        return 1 if stale or missing else 0
    print("갱신한 파일: " + ", ".join(stale) if stale else "변경 없음 (이미 최신)")
    for name in PAGES:
        for m in REF.finditer((ROOT / name).read_text(encoding="utf-8")):
            print(f"  {name}: {m.group(2)}?v={short_hash(ROOT / m.group(2))}")
    return 0

if __name__ == "__main__":
    sys.exit(main())
