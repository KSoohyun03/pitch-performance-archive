// 공연별 정보: teams 배열에 팀원과 그 팀의 셋리스트를 기록합니다.
const shows = [
  {
    id:'nov27-2026', date:'2026-11-27', time:'18:00',
    title:'가만 있으면 되는데 자꾸만 밴드를 할라 그래', venue:'락교 라이브펍',
    poster:'assets/poster-nov27.png',
    note:'피치 공연 · 오후 6시 시작',
    teams:[
      {name:'장기보관복숭아',members:['안시현','이규웅','이채은','정지윤','김수현','신가온'],songs:['내 사랑에 노련한 사랑이 어딨나요 — 장기하','빠지기는 빠지더라 — 장기하','그건 니 생각이고 — 장기하','얼마나 가겠어 — 장기하','부럽지가 않어 — 장기하','우리 지금 만나 — 장기하','달이 차오른다, 가자 — 장기하']},
      {name:'급똥 오브더 레전드',members:['쿠란경','바크 민쥰','현예누르','살라미야 서지딘','퉁퉁퉁 차후르','이규웅'],songs:['의심스러워 — 술탄 오브 더 디스코','탱탱볼 — 술탄 오브 더 디스코','사라지는 꿈 — 술탄 오브 더 디스코','요술왕자 — 술탄 오브 더 디스코','Shining Road — 술탄 오브 더 디스코']},
      {name:'실리카겔먹지마세요',members:['김승규','박주민','안시현','김동현','박민준','박현우'],songs:['Memory — 실리카겔','BigVoid — 실리카겔','APEX — 실리카겔','T+Tik Tak Tok — 실리카겔','NO PAIN — 실리카겔']}
    ]
  },
  {
    id:'nov15-2026', date:'2026-11-15', time:'18:00',
    title:'도화선 (桃花線)', venue:'락교 라이브펍',
    poster:'assets/poster-nov15.png',
    note:'피치 6기 신입 정기공연',
    teams:[
      {name:'품에 끌어안고서 악!!!',members:['보컬 · 김지후','기타 · 강현지','기타 · 이서진','베이스 · 배상훈','키보드 · 이율림','드럼 · 김민혁'],songs:['클라우드 쿠쿠랜드 — 정우','Love Story — Taylor Swift','The Scientist — Coldplay','Last Night on Earth — Green Day','혜성 — 윤하']},
      {name:'YG',members:['보컬 · 장명진','기타 · 이유찬','기타 · 박재우','베이스 · 김세현','키보드 · 하유진','드럼 · 안지후'],songs:['우리의 밤은 당신의 낮보다 아름답다 — 쏜애플','Back In Time — 너드커넥션','Souvenirs D’un Autre Monde — Alcest','Stockholm Syndrome — Muse']},
      {name:'달군머리를변기에쳐박고울었다',members:['보컬 · 정희진','기타 · 박재욱','기타 · 이서진','베이스 · 현연우','키보드 · 김태환','키보드 · 이도현','드럼 · 박현우'],songs:['충동 1분 — 정우','양 — 정우','천사 — 정우','철의 삶 — 정우']},
      {name:'민권아 가지마',members:['보컬 · 이윤재','기타 · 최유준','기타 · 김주원','베이스 · 장현규','키보드 · 신정연','드럼 · 제민권'],songs:['밤이 깊었네 — 크라잉넛','고백 — 델리스파이스','첫 눈에 널 사랑할 수는 없었을까 — can’t be blue','サムライハート (Some Like It Hot!!) — SPYAIR']},
      {name:'관악산더덕순대',members:['VDK · 김다희','GV · 이규웅','B · 이지원','K · 이정석','KGV · 차유빈','DV · 박상헌'],songs:['Dreams — The Cranberries','Superstition — Stevie Wonder, Jeff Beck','Smooth — Santana, Rob Thomas','When Christmas Comes — Mariah Carey, John Legend','This Must Be My Dream — The 1975']},
      {name:'개돼쥐',members:['보컬 · 조현준','보컬 · 김다희','기타 · 이도현','기타 · 손민성','베이스 · 이건희','키보드 · 김수현','키보드 · 박민준','드럼 · 구승모'],songs:['뜨거운 여름밤은 가고 남은 건 볼품없지만 — 잔나비','November Rain — 잔나비','로켓트 — 잔나비','외딴섬 로맨틱 — 잔나비','Monkey hotel — 잔나비']}
    ]
  },
  {
    id:'aug27-2026', date:'2026-08-27', time:'18:00–21:00',
    title:'2026 PITCH ROCK FESTIVAL', venue:'ALIVE HALL',
    poster:'assets/poster-rock-festival.png',
    note:'피치 전체 정기공연 · 6–9 PM',
    teams:[
      {name:'환등 (Gentou)',members:['보컬 · 이채진','기타 · 이규웅','기타 · 이예준','베이스 · 정지운','키보드 · 이경훈','드럼 · 백현준'],songs:['さよならモルテン (안녕 모루텐) — ヨルシカ','アルジャーノン (앨저넌) — ヨルシカ','老人と海 (노인과 바다) — ヨルシカ','又三郎 (마타사부로) — ヨルシカ']},
      {name:'하늘로 26 (Into the Sky)',members:['보컬 · 김동현','기타 · 현승우','기타 · 이도현','베이스 · 배상훈','키보드 · 김준혁','드럼 · 제민권'],songs:['차우차우 — 델리스파이스','Smile Boy — 로이킴','주저하는 연인들을 위해 — 잔나비','하늘을 달리다 — 이적']},
      {name:'유빈점프! (No She Can’t)',members:['보컬 · 차유빈','기타 · 이규웅','기타 · 차윤빈','베이스 · 류재민','드럼 · 박현우'],songs:['거울 — 국카스텐','너의 무리 — 쏜애플','플랑크톤 — 쏜애플','매미는 비가 와도 운다 — 쏜애플']},
      {name:'엘리키릴리 (ElriKiri)',members:['보컬 · 조현준','기타 · 박주민','기타 · 현승우','베이스 · 강윤재','키보드 · 김도현','드럼 · 신가은'],songs:['폭포 — 이승윤','폭죽타임 — 이승윤','비싼 숙취 — 이승윤','들려주고 싶었던 — 이승윤']},
      {name:'채은이의 지각교실',members:['보컬 · 지민','보컬 · 김건','기타 · 지민','기타 · 김건','베이스 · 이채은','키보드 · 정유진','드럼 · 신가은'],songs:['물고기 — 백예린','빠지기는 빠지더라 — 장기하와 얼굴들','빈 — 데카당','This Must Be the Place — Talking Heads']},
      {name:'조연병아니고조연준 (I’m semi-Schizophrenia)',members:['보컬 · 조현준','기타 · 이도현','기타 · 이규웅','베이스 · 이지원','키보드 · 김태한','드럼 · 한건우'],songs:['Come As You Are — Nirvana','The Masterplan — Oasis','Mr. Brightside — The Killers','Livin’ on a Prayer — Bon Jovi']}
    ]
  },
  {
    id:'july04-2026', date:'2026-07-04', dateEnd:'2026-07-05', time:'18:00',
    title:'밴드의 기초', venue:'락교 라이브펍',
    poster:'assets/poster-fundamentals.png',
    note:'피치 5기 신입부원 정기공연',
    teams:[
      {day:'2026-07-04',session:'1부',name:'TWO OK ROCK',members:['보컬 · 오현성','기타 · 박주민','기타 · 임춘선','베이스 · 황지훈','키보드 · 김윤성','드럼 · 백현준'],songs:[]},
      {day:'2026-07-04',session:'1부',name:'룰렛돌려서정하기',members:['보컬 · 신민을','기타 · 김규민','기타 · 김도영','베이스 · 이지원','키보드 · 박민준','드럼 · 한건우'],songs:['Wake Me Up When September Ends — Green Day','Last Night on Earth — Green Day','You Give Love a Bad Name — Bon Jovi','Don’t Let Me Down — The Beatles','Champagne Supernova — Oasis']},
      {day:'2026-07-04',session:'1부',name:'1+1',members:['보컬 · 조상휘','기타 · 김도현','기타 · 박찬서','베이스 · 김정현','키보드 · 구기현','드럼 · 제민권'],songs:['물빛여름 — 달담','사랑은 여섯줄 — 10cm','Hero — 루시','나는 나비 — 윤도현 밴드']},
      {day:'2026-07-04',session:'2부',name:'피게단',members:['보컬 · 오현성','보컬 · 이서진','기타 · 김건','기타 · 류재민','베이스 · 황지훈','키보드 · 이정훈','키보드 · 한지훈','드럼 · 박현우'],songs:['Cry Baby — Official髭男dism','폭탄마 — Yorushika','꽃의 탑 — Sayuri','푸름과 여름 — Mrs. GREEN APPLE','지 꿈을 덧그리며 — YOASOBI']},
      {day:'2026-07-04',session:'2부',name:'괴꽃없는 바운디',members:['보컬 · 송승환','기타 · 최준서','기타 · 김도현','베이스 · 이준수','키보드 · 김동언','드럼 · 최인호'],songs:['무희 — Vaundy','불가행력 — Vaundy','잊기 전에 — Vaundy','Imagination — SPYAIR']},
      {day:'2026-07-04',session:'2부',name:'파자마 보이즈',members:['보컬 · 이준수','기타 · 김건','기타 · 이한영','베이스 · 현연우','키보드 · 김경민','드럼 · 주현우'],songs:['Piano Man — Billy Joel','좋은 밤 좋은 꿈 — 너드커넥션','2월 — 쏜애플','Antifreeze — 검정치마','하늘을 달리다 — 이적']},
      {day:'2026-07-05',session:'1부',name:'대장민교 ^3^',members:['보컬 · 장민교','기타 · 이시현','기타 · 현승우','베이스 · 배상훈','키보드 · 안지원','드럼 · 김려민'],songs:['습관 — 롤러코스터','Complicated — Avril Lavigne','행복한 나를 — 쏜애플','입춘 — 한로로']},
      {day:'2026-07-05',session:'1부',name:'오이씻은배추',members:['보컬 · 정희진','기타 · 이예준','기타 · 이승현','베이스 · 강태규','키보드 · 이도윤','드럼 · 구승모'],songs:['0310 — 백예린','Don’t Look Back in Anger — Oasis','ㅈㅣㅂ — 한로로','염라 — 달의하루']},
      {day:'2026-07-05',session:'1부',name:'신과 함께',members:['보컬 · 이승환','기타 · 백지원','기타 · 이도현','베이스 · 이건희','키보드 · 김준형','드럼 · 신가은'],songs:['위잉위잉 — 혁오','TOMBOY — 혁오','오늘이야 (Good Day) — 유다빈밴드','나에게로 떠나는 여행 — 버즈']},
      {day:'2026-07-05',session:'2부',name:'Chamiseul Supernova',members:['보컬 · 차유빈','기타 · 최수민','기타 · 최유준','베이스 · 정지윤','키보드 · 김도현','드럼 · 조하연'],songs:['Victorious — Panic! At the Disco','혜성 — 윤하','Champagne Supernova — 백예린','Highlight — 터치드']},
      {day:'2026-07-05',session:'2부',name:'첨웅의 기생수',members:['보컬 · 조현준','기타 · 박재우','기타 · 손민성','베이스 · 강윤재','키보드 · 김태한','드럼 · 박현우'],songs:['은하 — 쏜애플','사랑의 미학 — 리도어','불세례 — 검정치마','DETOX — 설']},
      {day:'2026-07-05',session:'2부',name:'뽀로로 케로로 한로로 Let’s go!',members:['보컬 · 지민','기타 · 김규민','기타 · 김건','베이스 · 최지예','키보드 · 김수현','드럼 · 박현우'],songs:['내일에서 온 티켓 — 한로로','이상비행 — 한로로','금붕어 — 한로로','해초 — 한로로']}
    ]
  }
];

const grid=document.querySelector('#show-grid');
const archiveView=document.querySelector('#archive-view');
const showPage=document.querySelector('#show-page');
const sortSelect=document.querySelector('#sort-select');
const dateLabel=value=>new Intl.DateTimeFormat('ko-KR',{year:'numeric',month:'long',day:'numeric'}).format(new Date(`${value}T12:00:00`));
function showDateLabel(show){
  let label=dateLabel(show.date);
  if(show.dateEnd){
    const start=new Date(`${show.date}T12:00:00`),end=new Date(`${show.dateEnd}T12:00:00`);
    const sameMonth=start.getFullYear()===end.getFullYear()&&start.getMonth()===end.getMonth();
    label=sameMonth?`${start.getFullYear()}년 ${start.getMonth()+1}월 ${start.getDate()}일 ~ ${end.getDate()}일`:`${dateLabel(show.date)} ~ ${dateLabel(show.dateEnd)}`;
  }
  return `${label}${show.time?` · ${show.time}`:''}`;
}

// 병합 정렬: 목록을 반씩 나누고 정렬된 두 부분을 다시 합칩니다. 시간 복잡도는 O(n log n)입니다.
function mergeSort(items,compare){
  if(items.length<=1)return items;
  const middle=Math.floor(items.length/2);
  const left=mergeSort(items.slice(0,middle),compare);
  const right=mergeSort(items.slice(middle),compare);
  const merged=[];let i=0,j=0;
  while(i<left.length&&j<right.length){if(compare(left[i],right[j])<=0)merged.push(left[i++]);else merged.push(right[j++]);}
  return merged.concat(left.slice(i),right.slice(j));
}
function escapeHtml(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function renderShows(){
  let compare=(a,b)=>b.date.localeCompare(a.date);
  if(sortSelect.value==='oldest')compare=(a,b)=>a.date.localeCompare(b.date);
  if(sortSelect.value==='title')compare=(a,b)=>a.title.localeCompare(b.title,'ko');
  const list=mergeSort([...shows],compare);
  grid.innerHTML=list.map((show,index)=>`<a class="show-card" href="#show/${show.id}" aria-label="${escapeHtml(show.title)} 공연 상세 보기"><div class="card-art"><img src="${escapeHtml(show.poster)}" alt="${escapeHtml(show.title)} 공연 포스터" loading="lazy"><span class="poster-shade"></span><span class="card-no">PITCH ARCHIVE / 0${index+1}</span><span class="card-date-art">${show.date.slice(0,4)} — ${show.date.slice(5)}</span></div><div class="card-body"><div class="card-meta"><span>${showDateLabel(show)}</span><span>${show.teams.length} TEAMS</span></div><h3>${escapeHtml(show.title)}</h3><p class="card-venue">${escapeHtml(show.venue)}</p><div class="card-teams"><span>함께한 팀</span><strong>${show.teams.slice(0,3).map(team=>escapeHtml(team.name)).join(' · ')}${show.teams.length>3?' 외':''}</strong></div><span class="card-open">포스터와 팀별 셋리스트 보기</span></div></a>`).join('');
  document.querySelector('#show-count').textContent=String(shows.length).padStart(2,'0');
}
function getComments(){try{return JSON.parse(localStorage.getItem('pitch-archive-comments-by-show-v2')||'{}')}catch{return {};}}
function renderComments(show){
  const comments=getComments()[show.id]||[],container=document.querySelector('#show-comments');
  document.querySelector('#comment-count').textContent=comments.length;
  container.innerHTML=comments.length?comments.slice().reverse().map(comment=>`<article class="memory"><div class="memory-head"><span class="memory-person"><span class="memory-mood">${escapeHtml(comment.mood)}</span>${escapeHtml(comment.writer)}</span><time class="memory-date">${escapeHtml(comment.date)}</time></div><p>${escapeHtml(comment.message).replace(/\n/g,'<br>')}</p></article>`).join(''):'<p class="empty-memory">아직 남겨진 소감이 없어요. 이 공연의 첫 순간을 기록해보세요.</p>';
}
function teamCard(team,index){
  const songs=team.songs.length?`<ol class="setlist">${team.songs.map(song=>`<li>${escapeHtml(song)}</li>`).join('')}</ol>`:'<p class="setlist-missing">자료에서 곡 목록을 확인하지 못했습니다.</p>';
  return `<article class="team-card"><div class="team-card-heading"><span class="team-number">${String(index+1).padStart(2,'0')}</span><h3>${escapeHtml(team.name)}</h3></div><div class="team-info-block"><h4>TEAM MEMBERS</h4><ul class="member-list">${team.members.map(member=>`<li>${escapeHtml(member)}</li>`).join('')}</ul></div><div class="team-info-block"><h4>SETLIST</h4>${songs}</div></article>`;
}
function renderTeamSections(show){
  if(!show.teams.some(team=>team.day))return `<div class="team-cards">${show.teams.map(teamCard).join('')}</div>`;
  const groups=[];
  for(const team of show.teams){
    const key=`${team.day}|${team.session}`;
    let group=groups.find(item=>item.key===key);
    if(!group){group={key,day:team.day,session:team.session,teams:[]};groups.push(group);}
    group.teams.push(team);
  }
  return groups.map(group=>`<section class="team-day-group"><div class="team-day-heading"><h3>${dateLabel(group.day)} 셋리스트</h3><span>${escapeHtml(group.session)}</span></div><div class="team-cards">${group.teams.map(team=>teamCard(team,group.teams.indexOf(team))).join('')}</div></section>`).join('');
}
const moodButtons='<button type="button" class="mood selected" data-mood="🤩" aria-label="최고였어요">🤩</button><button type="button" class="mood" data-mood="🎸" aria-label="신났어요">🎸</button><button type="button" class="mood" data-mood="🥹" aria-label="감동했어요">🥹</button><button type="button" class="mood" data-mood="🫶" aria-label="따뜻했어요">🫶</button><button type="button" class="mood" data-mood="✨" aria-label="잊지 못할 거예요">✨</button>';
function renderShowPage(id){
  const show=shows.find(item=>item.id===id);
  if(!show){showPage.hidden=true;archiveView.hidden=false;return;}
  archiveView.hidden=true;showPage.hidden=false;
  showPage.innerHTML=`<div class="show-detail-shell"><a class="back-link" href="#shows">← 공연 목록으로</a><div class="detail-overview"><header class="detail-heading"><p class="eyebrow">PITCH LIVE ARCHIVE · ${show.date.slice(0,4)}</p><h1>${escapeHtml(show.title)}</h1><p class="detail-meta">${showDateLabel(show)} <span>·</span> ${escapeHtml(show.venue)}</p><p class="detail-note">${escapeHtml(show.note)}</p></header><figure class="detail-poster"><img src="${escapeHtml(show.poster)}" alt="${escapeHtml(show.title)} 공연 포스터" loading="lazy"></figure></div><section class="detail-teams"><div class="detail-section-heading"><div><p class="eyebrow">LINEUP & SETLIST</p><h2>팀별 무대 기록<span class="accent">.</span></h2></div><span class="team-total">${show.teams.length} TEAMS</span></div>${renderTeamSections(show)}</section><section class="show-comments-section"><div class="detail-section-heading"><div><p class="eyebrow">AFTER THE SHOW</p><h2>이 공연의 소감<span class="accent">.</span></h2><p class="section-desc">공연진도 관객도, 이 공연에서 기억하고 싶은 순간을 남겨주세요.</p></div><span class="comment-total"><strong id="comment-count">0</strong> COMMENTS</span></div><div class="comment-layout"><form class="comment-form" id="comment-form" data-show-id="${show.id}"><label>오늘 공연은 어떤 기분이었나요?</label><div class="mood-picker" role="group" aria-label="공연 소감 이모티콘">${moodButtons}</div><input type="hidden" id="mood-value" value="🤩"><label for="writer">이름 또는 별명</label><input id="writer" maxlength="24" placeholder="예: 공연진 지민 / 익명의 관객" required><label for="message">공연 소감</label><textarea id="message" rows="4" maxlength="300" placeholder="기억하고 싶은 무대나 장면을 적어주세요." required></textarea><div class="form-footer"><span>최대 300자</span><button class="button button-purple" type="submit">소감 등록 <span>↗</span></button></div><p class="privacy-note">작성한 소감은 현재 브라우저에 저장됩니다. 모든 방문자와 공유하려면 온라인 저장 기능을 연결해야 합니다.</p></form><div class="memories" id="show-comments" aria-live="polite"></div></div></section></div>`;
  document.querySelectorAll('.mood').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.mood').forEach(item=>item.classList.remove('selected'));button.classList.add('selected');document.querySelector('#mood-value').value=button.dataset.mood;}));
  document.querySelector('#comment-form').addEventListener('submit',event=>{
    event.preventDefault();const form=event.currentTarget,writer=document.querySelector('#writer').value.trim(),message=document.querySelector('#message').value.trim();
    if(!writer||!message)return;
    const all=getComments();all[show.id]=all[show.id]||[];
    all[show.id].push({writer,message,mood:document.querySelector('#mood-value').value,date:new Intl.DateTimeFormat('ko-KR',{year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date())});
    localStorage.setItem('pitch-archive-comments-by-show-v2',JSON.stringify(all));form.reset();document.querySelector('#mood-value').value='🤩';document.querySelectorAll('.mood').forEach((button,index)=>button.classList.toggle('selected',index===0));renderComments(show);
  });
  renderComments(show);window.scrollTo(0,0);
}
function route(){const match=location.hash.match(/^#show\/([\w-]+)$/);if(match)renderShowPage(match[1]);else{showPage.hidden=true;archiveView.hidden=false;if(['#shows','#about'].includes(location.hash))setTimeout(()=>document.querySelector(location.hash)?.scrollIntoView(),0);}}
sortSelect.addEventListener('change',renderShows);window.addEventListener('hashchange',route);renderShows();route();



