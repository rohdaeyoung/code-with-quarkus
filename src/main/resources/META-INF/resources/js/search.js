// document.getElementById('searchForm').addEventListener('submit', function(e) {
//     e.preventDefault(); // 폼 기본 동작 차단(새로고침)
//     const query = document.getElementById('searchInput').value.trim();
//     if (!query) return;
//     window.open('https://www.google.com/search?q=' + encodeURIComponent(query), '_blank');
// });


// // ── 챔피언 데이터 ──────────────────────────────────────────────
// const CHAMPIONS = [
//     { name: '아트록스', engName: 'Aatrox', role: '전사', lane: '탑', img: 'image/Atrox.jpg', difficulty: '상' },
//     { name: '멜', engName: 'Mell', role: '마법사', lane: '미드', img: 'image2/Mell.jpg', difficulty: '중' },
//     { name: '애니비아', engName: 'Anivia', role: '마법사', lane: '미드', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Anivia.png', difficulty: '상' },
//     { name: '브라이어', engName: 'Briar', role: '전사', lane: '정글', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Briar.png', difficulty: '중' },
//     { name: '잭스', engName: 'Jax', role: '전사', lane: '탑', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Jax.png', difficulty: '하' },
//     { name: '징크스', engName: 'Jinx', role: '원거리딜러', lane: '원딜', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Jinx.png', difficulty: '중' },
//     { name: '잔나렘', engName: 'Janahrem', role: '탱커', lane: '서포트', img: 'image4/잔나렘.jpg', difficulty: '중' },
//     { name: '흐웨이', engName: 'Hwei', role: '탱커', lane: '서포트', img: 'image5/흐웨이.jpg', difficulty: '중' },
    
// ]

// // ── 뉴스 데이터 ──────────────────────────────────────────────
// const NEWS = [
// { title: '새로운 챔피언 출시', desc: '2026 루나 레벨 이벤트! 신규 챔피언과 함께하는 특별한 시즌.', category: '게임 업데이트' },
// { title: '패치 노트 16.4', desc: '챔피언 밸런스 및 아이템 업데이트 내용을 확인하세요.', category: '패치 노트' },
// ];
// // ── 검색 실행 ────────────────────────────────────────────────
// function performSearch(query) {
// const q = query.trim().toLowerCase(); // 앞 뒤 공백제거, 소문자 변환
// if (!q) return;
// document.getElementById('searchKeywordDisplay').textContent = `"${query}"`; // 검색어 인식
// // 챔피온 데이터에서 이름, 영문명, 역할군, 라인 중 하나라도 검색어에 포함되면
// const champResults = CHAMPIONS.filter(c =>
// c.name.includes(q) || c.engName.toLowerCase().includes(q) ||
// c.role.includes(q) || c.lane.includes(q)
// );
// // 뉴스 데이터에서 제목, 설명, 카테고리 중 하나라도 검색어에 포함되면
// const newsResults = NEWS.filter(n =>
// n.title.toLowerCase().includes(q) || n.desc.toLowerCase().includes(q) || n.category.toLowerCase().includes(q)
// );


// document.getElementById('champCount').textContent = `(${champResults.length})`; // 검색 결과 개수를 카운트 영역에 표시
// document.getElementById('newsCount').textContent = `(${newsResults.length})`;
// const champList = document.getElementById('championResultList'); // 검색 결과 없는 경우, 있으면 카드형태 출력

//     if (champResults.length === 0) {
//         champList.innerHTML = `<div class="no-result"><h4>검색 결과 없음</h4><p>"${query}"에 해당하는 챔피언이 없습니다.</p></div>`;
// } else {

//     champList.innerHTML = champResults.map(c => `
//         <div class="search-result-card d-flex align-items-center p-0 overflow-hidden">
//         <img src="${c.img}" alt="${c.name}">
//         <div class="p-3">
//           <div style="font-weight:700; font-size:1rem; color:#111;">${c.name} <span style="color:#888; font-size:0.85rem;">(${c.engName})</span></div>
//           <div style="color:#555; font-size:0.9rem; margin-top:4px;">역할: ${c.role} &nbsp;|&nbsp; 라인: ${c.lane} &nbsp;|&nbsp; 난이도: ${c.difficulty}</div>
//         </div>
//         </div>
//         `).join('');

//     }

//     const newsList = document.getElementById('newsResultList'); //검색 결과 없는 경우, 있으면 카드형태 출력
//         if (newsResults.length === 0) {
//             newsList.innerHTML = `<div class="no-result"><h4>검색 결과 없음</h4><p>"${newsResults}"에 해당하는 뉴스가 없습니다.</p></div>`;
//         } else {
//             newsList.innerHTML = newsResults.map(n => `
//                 <div class="search-result-card p-3">
//                 <span style="font-size:0.75rem; background:#c8253a; color:#fff; padding:2px 8px; border-radius:3px;">${n.category}</span>
//                 <div style="font-weight:700; font-size:1rem; color:#111; margin-top:8px;">${n.title}</div>
//                 <div style="color:#555; font-size:0.9rem; margin-top:4px;">${n.desc}</div>
//                 </div>
//                 `).join('');
//             }
//             switchCategory('champion', document.querySelector('.search-category-item')); // 챔피온 탭이 먼저 보임
//                 document.querySelector('.hero').classList.add('d-none'); // 히어로 섹션 숨김
//                     document.querySelectorAll('section:not(#searchResults)').forEach(s => s.classList.add('d-none')); // 나머지 섹션 숨김

//                         document.getElementById('searchResults').classList.remove('d-none'); // 기타 섹션까지 숨김

//                             document.getElementById('searchResults').style.display = 'block'; // 결과 섹션만 출력
//  }

//  // ── 카테고리 전환 ────────────────────────────────────────────
// function switchCategory(type, el) {
//     document.querySelectorAll('.search-category-item').forEach(i => i.classList.remove('active'));
//     el.classList.add('active');
//     document.getElementById('resultChampion').style.display = type === 'champion' ? 'block' : 'none';
//     document.getElementById('resultNews').style.display = type === 'news' ? 'block' : 'none';
// }

// // ── 폼 이벤트 ────────────────────────────────────────────────
// document.getElementById('searchForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     const query = document.getElementById('searchInput').value;
//     performSearch(query);
// });



// ── 데이터 영역 (챔피언 및 뉴스) ──────────────────────────────────────────────
const CHAMPIONS = [
    { name: '아트록스', engName: 'Aatrox', role: '전사', lane: '탑', img: 'image/Atrox.jpg', difficulty: '상' },
    { name: '멜', engName: 'Mell', role: '마법사', lane: '미드', img: 'image2/Mell.jpg', difficulty: '중' },
    { name: '애니비아', engName: 'Anivia', role: '마법사', lane: '미드', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Anivia.png', difficulty: '상' },
    { name: '브라이어', engName: 'Briar', role: '전사', lane: '정글', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Briar.png', difficulty: '중' },
    { name: '잭스', engName: 'Jax', role: '전사', lane: '탑', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Jax.png', difficulty: '하' },
    { name: '징크스', engName: 'Jinx', role: '원거리딜러', lane: '원딜', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Jinx.png', difficulty: '중' },
    { name: '잔나렘', engName: 'Janahrem', role: '탱커', lane: '서포트', img: 'image4/잔나렘.jpg', difficulty: '중' },
    { name: '흐웨이', engName: 'Hwei', role: '탱커', lane: '서포트', img: 'image5/흐웨이.jpg', difficulty: '중' },
];

const NEWS = [
    { title: '새로운 챔피언 출시', desc: '2026 루나 레벨 이벤트! 신규 챔피언과 함께하는 특별한 시즌.', category: '게임 업데이트' },
    { title: '패치 노트 16.4', desc: '챔피언 밸런스 및 아이템 업데이트 내용을 확인하세요.', category: '패치 노트' },
];

// ── 1. 메인 화면으로 복구하는 함수 ──────────────────────────────────────────
function showMainScreen() {
    // 검색 결과 섹션 숨기기
    const searchResults = document.getElementById('searchResults');
    if (searchResults) {
        searchResults.style.display = 'none';
        searchResults.classList.add('d-none');
    }

    // 기존 메인 섹션들(Hero, Champions 리스트 등) 다시 보이기
    const mainSections = document.querySelectorAll('section:not(#searchResults)');
    mainSections.forEach(section => {
        section.style.display = 'block';
        section.classList.remove('d-none');
    });

    // 입력창 비우기
    document.getElementById('searchInput').value = '';
}

// ── 2. 검색 실행 함수 (통합 버전) ──────────────────────────────────────────
function performSearch(query) {
    // query 인자가 직접 들어오지 않은 경우(이벤트로 호출된 경우) 처리
    const inputVal = typeof query === 'string' ? query : document.getElementById('searchInput').value;
    const q = inputVal.trim().toLowerCase();

    // [조건] 검색어가 없거나 공백인 경우 메인화면으로 복귀
    if (!q) {
        showMainScreen();
        return;
    }

    // 검색어가 있을 때 UI 제어: 메인 섹션 숨기고 결과창 띄우기
    document.querySelectorAll('section:not(#searchResults)').forEach(s => s.classList.add('d-none'));
    const searchResults = document.getElementById('searchResults');
    searchResults.classList.remove('d-none');
    searchResults.style.display = 'block';

    // 키워드 표시
    document.getElementById('searchKeywordDisplay').textContent = `"${inputVal}" 검색 결과`;

    // 데이터 필터링 (챔피언)
    const champResults = CHAMPIONS.filter(c =>
        c.name.includes(q) || c.engName.toLowerCase().includes(q) ||
        c.role.includes(q) || c.lane.includes(q)
    );

    // 데이터 필터링 (뉴스)
    const newsResults = NEWS.filter(n =>
        n.title.toLowerCase().includes(q) || n.desc.toLowerCase().includes(q) || n.category.toLowerCase().includes(q)
    );

    // 카운트 업데이트
    document.getElementById('champCount').textContent = `(${champResults.length})`;
    document.getElementById('newsCount').textContent = `(${newsResults.length})`;

    // 챔피언 결과 렌더링
    const champList = document.getElementById('championResultList');
    if (champResults.length === 0) {
        champList.innerHTML = `<div class="no-result"><h4>검색 결과 없음</h4><p>"${inputVal}"에 해당하는 챔피언이 없습니다.</p></div>`;
    } else {
        champList.innerHTML = champResults.map(c => `
            <div class="search-result-card d-flex align-items-center p-0 overflow-hidden mb-3">
                <img src="${c.img}" alt="${c.name}" style="width:100px; height:100px; object-fit:cover;">
                <div class="p-3">
                    <div style="font-weight:700; font-size:1rem; color:#111;">${c.name} <span style="color:#888; font-size:0.85rem;">(${c.engName})</span></div>
                    <div style="color:#555; font-size:0.9rem; margin-top:4px;">역할: ${c.role} &nbsp;|&nbsp; 라인: ${c.lane} &nbsp;|&nbsp; 난이도: ${c.difficulty}</div>
                </div>
            </div>
        `).join('');
    }

    // 뉴스 결과 렌더링
    const newsList = document.getElementById('newsResultList');
    if (newsResults.length === 0) {
        newsList.innerHTML = `<div class="no-result"><h4>검색 결과 없음</h4><p>"${inputVal}"에 해당하는 뉴스가 없습니다.</p></div>`;
    } else {
        newsList.innerHTML = newsResults.map(n => `
            <div class="search-result-card p-3 mb-3">
                <span style="font-size:0.75rem; background:#c8253a; color:#fff; padding:2px 8px; border-radius:3px;">${n.category}</span>
                <div style="font-weight:700; font-size:1rem; color:#111; margin-top:8px;">${n.title}</div>
                <div style="color:#555; font-size:0.9rem; margin-top:4px;">${n.desc}</div>
            </div>
        `).join('');
    }

    // 탭 초기화 (챔피언 탭 우선)
    const firstCategoryTab = document.querySelector('.search-category-item');
    switchCategory('champion', firstCategoryTab);
}

// ── 3. 카테고리 전환 함수 ────────────────────────────────────────────
function switchCategory(type, el) {
    if (!el) return;
    document.querySelectorAll('.search-category-item').forEach(i => i.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('resultChampion').style.display = type === 'champion' ? 'block' : 'none';
    document.getElementById('resultNews').style.display = type === 'news' ? 'block' : 'none';
}

// ── 4. 이벤트 리스너 ────────────────────────────────────────────────
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    performSearch(); // 내부에서 input 값을 읽어오도록 수정됨
});
