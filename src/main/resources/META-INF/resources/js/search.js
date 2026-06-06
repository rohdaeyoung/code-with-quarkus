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



// ── 데이터 영역 ──────────────────────────────────────────────
const CHAMPIONS = [
    { name: '애니비아', engName: 'Anivia', role: '마법사', lane: '미드', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Anivia.png', difficulty: '상', modal: 'modals/Anivia.html' },
    { name: '브라이어', engName: 'Briar', role: '전사', lane: '정글', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Briar.png', difficulty: '중', modal: 'modals/Briar.html' },
    { name: '잭스', engName: 'Jax', role: '전사', lane: '탑', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Jax.png', difficulty: '하', modal: 'modals/Jax.html' },
    { name: '징크스', engName: 'Jinx', role: '원거리딜러', lane: '원딜', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Jinx.png', difficulty: '중', modal: 'modals/Jinx.html' },
    { name: '아트록스', engName: 'Aatrox', role: '전사', lane: '탑', img: 'image/Atrox.jpg', difficulty: '상', modal: 'modals/Aatrox.html' },
    { name: '멜', engName: 'Mell', role: '마법사', lane: '미드', img: 'image2/Mell.jpg', difficulty: '중', modal: 'modals/Mell.html' },
    { name: '흐웨이', engName: 'Hwei', role: '탱커', lane: '서포트', img: 'image5/흐웨이.jpg', difficulty: '중', modal: 'modals/Hwei.html' },
    { name: '잔나렘', engName: 'Janahrem', role: '탱커', lane: '서포트', img: 'image4/잔나렘.jpg', difficulty: '중', modal: 'modals/Janahrem.html' },
    { name: '앰베사', engName: 'Ambessa', role: '전사', lane: '탑/미드', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Ambessa.png', difficulty: '상', modal: 'modals/Ambessa.html' },
    { name: '스몰더', engName: 'Smolder', role: '원거리딜러', lane: '원딜', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Smolder.png', difficulty: '중', modal: 'modals/Smolder.html' },
    { name: '나아피리', engName: 'Naafiri', role: '암살자', lane: '미드', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Naafiri.png', difficulty: '하', modal: 'modals/Naafiri.html' },
    { name: '오로라', engName: 'Aurora', role: '마법사', lane: '미드/탑', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Aurora.png', difficulty: '중', modal: 'modals/Aurora.html' }
];

const NEWS = [
    { title: '새로운 챔피언 출시', desc: '2026 루나 레벨 이벤트! 신규 챔피언과 함께하는 특별한 시즌.', category: '게임 업데이트' },
    { title: '패치 노트 16.4', desc: '챔피언 밸런스 및 아이템 업데이트 내용을 확인하세요.', category: '패치 노트' },
];

// ── 1. 메인 화면으로 복구 ──────────────────────────────────────────
function showMainScreen() {
    const searchResults = document.getElementById('searchResults');
    if (searchResults) {
        searchResults.style.display = 'none';
        searchResults.classList.add('d-none');
    }
    const mainSections = document.querySelectorAll('section:not(#searchResults)');
    mainSections.forEach(section => {
        section.classList.remove('d-none');
        section.style.display = 'block';
    });
    document.getElementById('searchInput').value = '';
}

// ── 2. 검색 실행 (안전한 필터링 버전) ──────────────────────────────────
function performSearch(query) {
    const inputVal = typeof query === 'string' ? query : document.getElementById('searchInput').value;
    const q = inputVal.trim().toLowerCase();

    if (!q) {
        showMainScreen();
        return;
    }

    // UI 제어
    document.querySelectorAll('section:not(#searchResults)').forEach(s => s.classList.add('d-none'));
    const searchResults = document.getElementById('searchResults');
    searchResults.classList.remove('d-none');
    searchResults.style.display = 'block';
    document.getElementById('searchKeywordDisplay').textContent = `"${inputVal}" 검색 결과`;

    // 챔피언 필터링 (데이터가 비어있어도 에러 안 나게 처리)
    const champResults = CHAMPIONS.filter(c => {
        const name = c.name || "";
        const eng = c.engName || "";
        const role = c.role || "";
        const lane = c.lane || "";
        return name.includes(q) || eng.toLowerCase().includes(q) || role.includes(q) || lane.includes(q);
    });

    const newsResults = NEWS.filter(n =>
        n.title.toLowerCase().includes(q) || n.desc.toLowerCase().includes(q) || n.category.toLowerCase().includes(q)
    );

    document.getElementById('champCount').textContent = `(${champResults.length})`;
    document.getElementById('newsCount').textContent = `(${newsResults.length})`;

    const champList = document.getElementById('championResultList');
    if (champResults.length === 0) {
        champList.innerHTML = `<div class="no-result"><h4>검색 결과 없음</h4><p>"${inputVal}"에 해당하는 챔피언이 없습니다.</p></div>`;
    } else {
        champList.innerHTML = champResults.map(c => `
            <div class="search-result-card d-flex align-items-center p-0 overflow-hidden mb-3" 
                 onclick="openChampionModal('${c.name}')" 
                 style="cursor:pointer;">
                <img src="${c.img || 'https://via.placeholder.com/100'}" alt="${c.name}" style="width:100px; height:100px; object-fit:cover;">
                <div class="p-3">
                    <div style="font-weight:700; font-size:1rem; color:#111;">${c.name} <span style="color:#888; font-size:0.85rem;">(${c.engName})</span></div>
                    <div style="color:#555; font-size:0.9rem; margin-top:4px;">역할: ${c.role || '-'} &nbsp;|&nbsp; 라인: ${c.lane || '-'} &nbsp;|&nbsp; 난이도: ${c.difficulty || '-'}</div>
                </div>
            </div>
        `).join('');
    }

    const newsList = document.getElementById('newsResultList');
    newsList.innerHTML = newsResults.length === 0 
        ? `<p class="p-3">검색된 뉴스가 없습니다.</p>`
        : newsResults.map(n => `
            <div class="search-result-card p-3 mb-3">
                <span style="font-size:0.75rem; background:#c8253a; color:#fff; padding:2px 8px; border-radius:3px;">${n.category}</span>
                <div style="font-weight:700; font-size:1rem; color:#111; margin-top:8px;">${n.title}</div>
                <div style="color:#555; font-size:0.9rem; margin-top:4px;">${n.desc}</div>
            </div>
        `).join('');

    const firstCategoryTab = document.querySelector('.search-category-item');
    switchCategory('champion', firstCategoryTab);
}

// ── 3. 카테고리 전환 ────────────────────────────────────────────
function switchCategory(type, el) {
    if (!el) return;
    document.querySelectorAll('.search-category-item').forEach(i => i.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('resultChampion').style.display = type === 'champion' ? 'block' : 'none';
    document.getElementById('resultNews').style.display = type === 'news' ? 'block' : 'none';
}

// ── 4. 모달 열기 함수 (중요: fetch 에러 처리 추가) ───────────────────────────
async function openChampionModal(name) {
    try {
        const champion = CHAMPIONS.find(c => c.name === name);
        if (!champion || !champion.modal) {
            console.error("모달 경로가 없는 챔피언입니다.");
            return;
        }

        const container = document.getElementById("modalContainer");
        const response = await fetch(champion.modal);
        
        if(!response.ok) throw new Error("파일을 찾을 수 없습니다.");
        
        const html = await response.text();
        container.innerHTML = html;

        const modalElement = container.querySelector(".modal");
        if (!modalElement) throw new Error("HTML 내에 .modal 클래스가 없습니다.");

        const modal = new bootstrap.Modal(modalElement);
        modal.show();

        modalElement.addEventListener("hidden.bs.modal", () => {
            container.innerHTML = "";
        });
    } catch (error) {
        console.error("모달 로드 실패:", error);
        alert("모달을 불러오는 데 실패했습니다. (파일 경로 등을 확인하세요)");
    }
}

// ── 5. 이벤트 리스너 ────────────────────────────────────────────────
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    performSearch();
});