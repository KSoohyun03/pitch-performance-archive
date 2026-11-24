// 각 공연의 teams 안에 팀명, 팀원, 해당 팀의 셋리스트를 함께 기록합니다.
const shows = [
  {id:'nov27-2026',date:'2026-11-27',time:'18:00',title:'가만 있으면 되는데 자꾸만 밴드를 할라 그래',venue:'락교 라이브펍',note:'피치의 공연 아카이브. 공연 시간은 오후 6시입니다.',teams:[
    {name:'장기보관복숭아',members:['안시현','이규웅','이채은','정지윤','김수현','신가온'],songs:['내 사랑에 노련한 사랑이 어딨나요 — 장기하','빠지기는 빠지더라 — 장기하','그건 니 생각이고 — 장기하','얼마나 가겠어 — 장기하','부럽지가 않어 — 장기하','우리 지금 만나 — 장기하','달이 차오른다, 가자 — 장기하']},
    {name:'급똥 오브더 레전드',members:['쿠란경','바크 민쥰','현예누르','살라미야 서지딘','퉁퉁퉁 차후르','이규웅'],songs:['의심스러워 — 술탄 오브 더 디스코','탱탱볼 — 술탄 오브 더 디스코','사라지는 꿈 — 술탄 오브 더 디스코','요술왕자 — 술탄 오브 더 디스코','Shining Road — 술탄 오브 더 디스코']},
    {name:'실리카겔먹지마세요',members:['김승규','박주민','안시현','김동현','박민준','박현우'],songs:['Memory — 실리카겔','BigVoid — 실리카겔','APEX — 실리카겔','T+Tik Tak Tok — 실리카겔','NO PAIN — 실리카겔']}
  ]},
  {id:'nov15-2026',date:'2026-11-15',time:'18:00',title:'도화선 (桃花線)',venue:'락교 라이브펍',note:'피치 6기 신입 정기공연 · 포스터 표기: 桃花線',teams:[
    {name:'민권아 가지마',members:['보컬 · 이윤재','기타 · 최유준','기타 · 김주원','베이스 · 장현규','키보드 · 신정연','드럼 · 제민권'],songs:['밤이 깊었네 — 크라잉넛','고백 — 델리스파이스','첫 눈에 널 사랑할 수는 없었을까 — can’t be blue','サムライハート (Some Like It Hot!!) — SPYAIR']},
    {name:'관악산더덕순대',members:['VDK · 김다희','GV · 이규웅','B · 이지원','K · 이정석','KGV · 차유빈','DV · 박상헌'],songs:['Dreams — The Cranberries','Superstition — Stevie Wonder, Jeff Beck','Smooth — Santana, Rob Thomas','When Christmas Comes — Mariah Carey, John Legend','This Must Be My Dream — The 1975']},
    {name:'개돼쥐',members:['보컬 · 조현준','보컬 · 김다희','기타 · 이도현','기타 · 손민성','베이스 · 이건희','키보드 · 김수현','키보드 · 박민준','드럼 · 구승모'],songs:['뜨거운 여름밤은 가고 남은 건 볼품없지만 — 잔나비','November Rain — 잔나비','로켓트 — 잔나비','외딴섬 로맨틱 — 잔나비','Monkey hotel — 잔나비']},
    {name:'품에 끌어안고서 악!!!',members:['보컬 · 김지후','기타 · 강현지','기타 · 이서진','베이스 · 배상훈','키보드 · 이율림','드럼 · 김민혁'],songs:['클라우드 쿠쿠랜드 — 정우','Love Story — Taylor Swift','The Scientist — Coldplay','Last Night on Earth — Green Day','혜성 — 윤하']},
    {name:'YG',members:['보컬 · 장명진','기타 · 이유찬','기타 · 박재우','베이스 · 김세현','키보드 · 하유진','드럼 · 안지후'],songs:['우리의 밤은 당신의 낮보다 아름답다 — 쏜애플','Back In Time — 너드커넥션','Souvenirs D’un Autre Monde — Alcest','Stockholm Syndrome — Muse']},
    {name:'달군머리를변기에쳐박고울었다',members:['보컬 · 정희진','기타 · 박재욱','기타 · 이서진','베이스 · 현연우','키보드 · 김태환','키보드 · 이도현','드럼 · 박현우'],songs:['충동 1분 — 정우','양 — 정우','천사 — 정우','철의 삶 — 정우']}
  ]}
];

const grid=document.querySelector('#show-grid');
const archiveView=document.querySelector('#archive-view');
const showPage=document.querySelector('#show-page');
const sortSelect=document.querySelector('#sort-select');
const dateLabel=value=>new Intl.DateTimeFormat('ko-KR',{year:'numeric',month:'long',day:'numeric'}).format(new Date(`${value}T12:00:00`));
const showDateLabel=show=>`${dateLabel(show.date)}${show.time?` · ${show.time}`:''}`;

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
  grid.innerHTML=list.map((s,i)=>`<a class="show-card" href="#show/${s.id}" aria-label="${escapeHtml(s.title)} 공연 상세 보기"><div class="card-art"><span class="card-no">PITCH ARCHIVE / 0${i+1}</span><strong class="card-title-art">${escapeHtml(s.title).replace(': ','<br>')}</strong><span class="card-date-art">${s.date.slice(0,4)} — ${s.date.slice(5)}</span></div><div class="card-body"><div class="card-meta"><span>${showDateLabel(s)}</span><span>${s.teams.length} TEAMS</span></div><h3>${escapeHtml(s.title)}</h3><p class="card-venue">${escapeHtml(s.venue)}</p><div class="card-teams"><span>함께한 팀</span><strong>${s.teams.map(t=>escapeHtml(t.name)).join(' · ')}</strong></div><span class="card-open">팀별 셋리스트와 소감 보기 ↗</span></div></a>`).join('');
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
  showPage.innerHTML=`<div class="show-detail-shell"><a class="back-link" href="#shows">← 공연 목록으로</a><header class="detail-heading"><p class="eyebrow">PITCH LIVE ARCHIVE · ${show.date.slice(0,4)}</p><h1>${escapeHtml(show.title)}</h1><p class="detail-meta">${showDateLabel(show)} <span>·</span> ${escapeHtml(show.venue)}</p><p class="detail-note">${escapeHtml(show.note)}</p></header><section class="detail-teams"><div class="detail-section-heading"><div><p class="eyebrow">LINEUP & SETLIST</p><h2>팀별 무대 기록<span class="accent">.</span></h2></div><span class="team-total">${show.teams.length} TEAMS</span></div><div class="team-cards">${show.teams.map((team,index)=>`<article class="team-card"><div class="team-card-heading"><span class="team-number">0${index+1}</span><h3>${escapeHtml(team.name)}</h3></div><div class="team-info-block"><h4>TEAM MEMBERS</h4><ul class="member-list">${team.members.map(member=>`<li>${escapeHtml(member)}</li>`).join('')}</ul></div><div class="team-info-block"><h4>SETLIST</h4><ol class="setlist">${team.songs.map(song=>`<li>${escapeHtml(song)}</li>`).join('')}</ol></div></article>`).join('')}</div></section><section class="show-comments-section"><div class="detail-section-heading"><div><p class="eyebrow">AFTER THE SHOW</p><h2>이 공연의 소감<span class="accent">.</span></h2><p class="section-desc">공연진도 관객도, 이 공연에서 기억하고 싶은 순간을 남겨주세요.</p></div><span class="comment-total"><strong id="comment-count">0</strong> COMMENTS</span></div><div class="comment-layout"><form class="comment-form" id="comment-form" data-show-id="${show.id}"><label>오늘 공연은 어떤 기분이었나요?</label><div class="mood-picker" role="group" aria-label="공연 소감 이모티콘"><button type="button" class="mood selected" data-mood="🤩" aria-label="최고였어요">🤩</button><button type="button" class="mood" data-mood="🎸" aria-label="신났어요">🎸</button><button type="button" class="mood" data-mood="🥹" aria-label="감동했어요">🥹</button><button type="button" class="mood" data-mood="🫶" aria-label="따뜻했어요">🫶</button><button type="button" class="mood" data-mood="✨" aria-label="잊지 못할 거예요">✨</button></div><input type="hidden" id="mood-value" value="🤩"><label for="writer">이름 또는 별명</label><input id="writer" maxlength="24" placeholder="예: 공연진 지민 / 익명의 관객" required><label for="message">공연 소감</label><textarea id="message" rows="4" maxlength="300" placeholder="기억하고 싶은 무대나 장면을 적어주세요." required></textarea><div class="form-footer"><span>최대 300자</span><button class="button button-purple" type="submit">소감 등록 <span>↗</span></button></div><p class="privacy-note">작성한 소감은 현재 브라우저에 저장됩니다. 모든 방문자와 공유하려면 온라인 저장 기능을 연결해야 합니다.</p></form><div class="memories" id="show-comments" aria-live="polite"></div></div></section></div>`;
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
