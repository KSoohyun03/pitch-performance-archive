// 아래 공연/멤버 정보는 화면 예시입니다. 실제 내용으로 바꿔주세요.
// 각 공연의 teams 안에 팀명, 팀원, 해당 팀의 셋리스트를 함께 기록합니다.
const shows = [
  {id:'s4',date:'2026-10-18',title:'Autumn Frequency',venue:'롤링홀 · 서울 마포구',note:'가을밤을 각자의 주파수로 채운 합동 공연',teams:[
    {name:'PITCH',members:['이름 · 파트 입력','이름 · 파트 입력','이름 · 파트 입력','이름 · 파트 입력','이름 · 파트 입력'],songs:['The Adults Are Talking — The Strokes','밤편지 — 아이유']},
    {name:'Blue Hour',members:['팀원 정보 입력'],songs:['나는 나비 — YB']},
    {name:'Neon Picnic',members:['팀원 정보 입력'],songs:['Misery Business — Paramore']},
    {name:'Daybreak',members:['팀원 정보 입력'],songs:['좋지 아니한가 — 크라잉넛']}
  ]},
  {id:'s3',date:'2026-06-07',title:'Room 404 Live',venue:'프리즘홀 · 서울 마포구',note:'작은 공간을 가득 채운 여름 라이브',teams:[
    {name:'PITCH',members:['이름 · 파트 입력','이름 · 파트 입력','이름 · 파트 입력','이름 · 파트 입력','이름 · 파트 입력'],songs:['Seven Nation Army — The White Stripes','한 페이지가 될 수 있게 — DAY6']},
    {name:'Mellow Days',members:['팀원 정보 입력'],songs:['주저하는 연인들을 위해 — 잔나비']},
    {name:'Soda Pop',members:['팀원 정보 입력'],songs:['Basket Case — Green Day']}
  ]},
  {id:'s2',date:'2026-03-21',title:'First Take: Spring',venue:'클럽 FF · 서울 마포구',note:'새로운 계절, 첫 번째 합동 무대',teams:[
    {name:'PITCH',members:['이름 · 파트 입력','이름 · 파트 입력','이름 · 파트 입력','이름 · 파트 입력','이름 · 파트 입력'],songs:['Holiday — Green Day']},
    {name:'April Tape',members:['팀원 정보 입력'],songs:['한숨 — 이하이']},
    {name:'Low Battery',members:['팀원 정보 입력'],songs:['나는 문제없어 — 황규영']},
    {name:'Cloud Nine',members:['팀원 정보 입력'],songs:['곡 제목 · 원곡자 입력']},
    {name:'Mono Sunday',members:['팀원 정보 입력'],songs:['곡 제목 · 원곡자 입력']}
  ]},
  {id:'s1',date:'2025-12-13',title:'Winter Soundcheck',venue:'살롱 문보우 · 서울 마포구',note:'한 해의 마지막을 함께 노래한 밤',teams:[
    {name:'PITCH',members:['이름 · 파트 입력','이름 · 파트 입력','이름 · 파트 입력','이름 · 파트 입력','이름 · 파트 입력'],songs:['Smells Like Teen Spirit — Nirvana','Love Lee — AKMU']},
    {name:'Offbeat',members:['팀원 정보 입력'],songs:['밤이 깊었네 — 크라잉넛']},
    {name:'Blue Hour',members:['팀원 정보 입력'],songs:['Last Nite — The Strokes']}
  ]}
];

const grid=document.querySelector('#show-grid');
const archiveView=document.querySelector('#archive-view');
const showPage=document.querySelector('#show-page');
const sortSelect=document.querySelector('#sort-select');
const dateLabel=value=>new Intl.DateTimeFormat('ko-KR',{year:'numeric',month:'long',day:'numeric'}).format(new Date(`${value}T12:00:00`));

// 병합 정렬: 목록을 절반씩 나누고 정렬된 부분을 합칩니다. 시간 복잡도는 O(n log n)입니다.
function mergeSort(items,compare){
  if(items.length<=1)return items;
  const middle=Math.floor(items.length/2);
  const left=mergeSort(items.slice(0,middle),compare);
  const right=mergeSort(items.slice(middle),compare);
  const merged=[];let i=0,j=0;
  while(i<left.length&&j<right.length){if(compare(left[i],right[j])<=0)merged.push(left[i++]);else merged.push(right[j++]);}
  return merged.concat(left.slice(i),right.slice(j));
}
function renderShows(){
  let compare=(a,b)=>b.date.localeCompare(a.date);
  if(sortSelect.value==='oldest')compare=(a,b)=>a.date.localeCompare(b.date);
  if(sortSelect.value==='title')compare=(a,b)=>a.title.localeCompare(b.title,'ko');
  const list=mergeSort([...shows],compare);
  grid.innerHTML=list.map((s,i)=>`<a class="show-card" href="#show/${s.id}" aria-label="${s.title} 공연 상세 보기"><div class="card-art"><span class="card-no">PITCH ARCHIVE / 0${i+1}</span><strong class="card-title-art">${escapeHtml(s.title).replace(': ','<br>')}</strong><span class="card-date-art">${s.date.slice(0,4)} — ${s.date.slice(5)}</span></div><div class="card-body"><div class="card-meta"><span>${dateLabel(s.date)}</span><span>${s.teams.length} TEAMS</span></div><h3>${escapeHtml(s.title)}</h3><p class="card-venue">${escapeHtml(s.venue)}</p><div class="card-teams"><span>함께한 팀</span><strong>${s.teams.map(t=>escapeHtml(t.name)).join(' · ')}</strong></div><span class="card-open">팀별 셋리스트와 소감 보기 ↗</span></div></a>`).join('');
  document.querySelector('#show-count').textContent=String(shows.length).padStart(2,'0');
}
function escapeHtml(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}

const commentsKey='pitch-archive-comments-by-show-v2';
function getComments(){try{return JSON.parse(localStorage.getItem(commentsKey)||'{}')}catch{return {}}}
function renderComments(show){
  const all=getComments(),comments=all[show.id]||[];
  const container=document.querySelector('#show-comments');
  document.querySelector('#comment-count').textContent=comments.length;
  container.innerHTML=comments.length?comments.slice().reverse().map(c=>`<article class="memory"><div class="memory-head"><span class="memory-person"><span class="memory-mood">${escapeHtml(c.mood)}</span>${escapeHtml(c.writer)}</span><time class="memory-date">${escapeHtml(c.date)}</time></div><p>${escapeHtml(c.message).replace(/\n/g,'<br>')}</p></article>`).join(''):'<p class="empty-memory">아직 남겨진 소감이 없어요. 이 공연의 첫 순간을 기록해보세요.</p>';
}
function renderShowPage(id){
  const show=shows.find(item=>item.id===id);
  if(!show){showPage.hidden=true;archiveView.hidden=false;return;}
  archiveView.hidden=true;showPage.hidden=false;
  showPage.innerHTML=`<div class="show-detail-shell"><a class="back-link" href="#shows">← 공연 목록으로</a><header class="detail-heading"><p class="eyebrow">PITCH LIVE ARCHIVE · ${show.date.slice(0,4)}</p><h1>${escapeHtml(show.title)}</h1><p class="detail-meta">${dateLabel(show.date)} <span>·</span> ${escapeHtml(show.venue)}</p><p class="detail-note">${escapeHtml(show.note)}</p></header><section class="detail-teams"><div class="detail-section-heading"><div><p class="eyebrow">LINEUP & SETLIST</p><h2>팀별 무대 기록<span class="accent">.</span></h2></div><span class="team-total">${show.teams.length} TEAMS</span></div><div class="team-cards">${show.teams.map((team,index)=>`<article class="team-card"><div class="team-card-heading"><span class="team-number">0${index+1}</span><h3>${escapeHtml(team.name)}</h3></div><div class="team-info-block"><h4>TEAM MEMBERS</h4><ul class="member-list">${team.members.map(member=>`<li>${escapeHtml(member)}</li>`).join('')}</ul></div><div class="team-info-block"><h4>SETLIST</h4><ol class="setlist">${team.songs.map(song=>`<li>${escapeHtml(song)}</li>`).join('')}</ol></div></article>`).join('')}</div></section><section class="show-comments-section"><div class="detail-section-heading"><div><p class="eyebrow">AFTER THE SHOW</p><h2>이 공연의 소감<span class="accent">.</span></h2><p class="section-desc">공연진도 관객도, 이 공연에서 기억하고 싶은 순간을 남겨주세요.</p></div><span class="comment-total"><strong id="comment-count">0</strong> COMMENTS</span></div><div class="comment-layout"><form class="comment-form" id="comment-form" data-show-id="${show.id}"><label>오늘 공연은 어떤 기분이었나요?</label><div class="mood-picker" role="group" aria-label="공연 소감 이모티콘"><button type="button" class="mood selected" data-mood="🤩" aria-label="최고였어요">🤩</button><button type="button" class="mood" data-mood="🎸" aria-label="신났어요">🎸</button><button type="button" class="mood" data-mood="🥹" aria-label="감동했어요">🥹</button><button type="button" class="mood" data-mood="🫶" aria-label="따뜻했어요">🫶</button><button type="button" class="mood" data-mood="✨" aria-label="잊지 못할 거예요">✨</button></div><input type="hidden" id="mood-value" value="🤩"><label for="writer">이름 또는 별명</label><input id="writer" maxlength="24" placeholder="예: 공연진 지민 / 익명의 관객" required><label for="message">공연 소감</label><textarea id="message" rows="4" maxlength="300" placeholder="기억하고 싶은 무대나 장면을 적어주세요." required></textarea><div class="form-footer"><span>최대 300자</span><button class="button button-purple" type="submit">소감 등록 <span>↗</span></button></div><p class="privacy-note">작성한 소감은 현재 브라우저에 저장됩니다. 모든 방문자와 공유하려면 온라인 저장 기능을 연결해야 합니다.</p></form><div class="memories" id="show-comments" aria-live="polite"></div></div></section></div>`;
  document.querySelectorAll('.mood').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.mood').forEach(item=>item.classList.remove('selected'));button.classList.add('selected');document.querySelector('#mood-value').value=button.dataset.mood;}));
  document.querySelector('#comment-form').addEventListener('submit',event=>{
    event.preventDefault();
    const form=event.currentTarget,writer=document.querySelector('#writer').value.trim(),message=document.querySelector('#message').value.trim();
    if(!writer||!message)return;
    const all=getComments();all[show.id]=all[show.id]||[];
    all[show.id].push({writer,message,mood:document.querySelector('#mood-value').value,date:new Intl.DateTimeFormat('ko-KR',{year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date())});
    localStorage.setItem(commentsKey,JSON.stringify(all));form.reset();document.querySelector('#mood-value').value='🤩';document.querySelectorAll('.mood').forEach((button,index)=>button.classList.toggle('selected',index===0));renderComments(show);
  });
  renderComments(show);window.scrollTo(0,0);
}
function route(){const match=location.hash.match(/^#show\/([\w-]+)$/);if(match)renderShowPage(match[1]);else{showPage.hidden=true;archiveView.hidden=false;if(location.hash==='#shows'||location.hash==='#about')setTimeout(()=>document.querySelector(location.hash)?.scrollIntoView(),0);}}
sortSelect.addEventListener('change',renderShows);window.addEventListener('hashchange',route);renderShows();route();
