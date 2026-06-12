(function(){
  const views = document.querySelectorAll('.view');
  const navBtns = document.querySelectorAll('.nav-btn[data-view]');
  const themeToggle = document.getElementById('themeToggle');
  const todayList = document.getElementById('todayList');
  const addSample = document.getElementById('addSample');
  const confetti = document.getElementById('confetti');
  const rewardsList = document.getElementById('rewardsList');
  const chatLog = document.getElementById('chatLog');
  const sendMsg = document.getElementById('sendMsg');
  const chatMsg = document.getElementById('chatMsg');

  function show(view){
    views.forEach(v=>v.classList.add('hidden'));
    document.getElementById(view).classList.remove('hidden');
    navBtns.forEach(b=>b.classList.toggle('active', b.dataset.view===view));
  }
  navBtns.forEach(b=>b.addEventListener('click',()=>show(b.dataset.view)));

  // Theme
  let dark = false;
  function applyTheme(){
    if(dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    themeToggle.textContent = dark? 'Modo Claro' : 'Modo Oscuro';
  }
  themeToggle.addEventListener('click', ()=>{ dark = !dark; applyTheme(); });
  applyTheme();

  // Sample data
  let tasks = [
    {id:1,title:'Ejercicio 20 min',category:'Personal',done:false},
    {id:2,title:'Revisar presupuesto',category:'Financiera',done:false},
    {id:3,title:'Lavar platos',category:'Operativa',done:false}
  ];
  let rewards = [
    {id:1,proposer:'Carlos',desc:'Cenar fuera',status:'PROPOSED'}
  ];

  function renderToday(){
    todayList.innerHTML = '';
    tasks.forEach(t=>{
      const li = document.createElement('li'); li.className='today-item';
      const chk = document.createElement('div'); chk.className='check'; if(t.done) chk.classList.add('done'); chk.textContent = t.done? '✓' : '';
      chk.addEventListener('click', ()=>{ toggleDone(t.id); });
      const meta = document.createElement('div'); meta.style.flex='1';
      const title = document.createElement('div'); title.textContent = t.title; title.style.fontWeight='600';
      const metaSmall = document.createElement('div'); metaSmall.style.fontSize='13px'; metaSmall.style.color='var(--muted)'; metaSmall.textContent = t.category;
      meta.appendChild(title); meta.appendChild(metaSmall);
      const actions = document.createElement('div');
      const btn = document.createElement('button'); btn.className='small'; btn.textContent='Abrir'; actions.appendChild(btn);
      li.appendChild(chk); li.appendChild(meta); li.appendChild(actions);
      todayList.appendChild(li);
    });
  }

  function toggleDone(id){
    tasks = tasks.map(t=> t.id===id? {...t, done:!t.done} : t);
    renderToday();
    const done = tasks.find(t=>t.id===id).done;
    if(done) fireConfetti();
  }

  function fireConfetti(){
    confetti.classList.remove('hidden');
    confetti.style.opacity = 1;
    setTimeout(()=>{ confetti.style.opacity=0; confetti.classList.add('hidden'); },1200);
  }

  addSample.addEventListener('click', ()=>{
    const id = Date.now();
    tasks.push({id,title:'Nueva tarea '+id,category:'Personal',done:false});
    renderToday();
  });

  function renderRewards(){
    rewardsList.innerHTML='';
    rewards.forEach(r=>{
      const li = document.createElement('li');
      li.innerHTML = `<strong>${r.proposer}</strong>: ${r.desc} — <em>${r.status}</em> <button class="small" data-id="${r.id}">Validar</button>`;
      rewardsList.appendChild(li);
    });
    rewardsList.querySelectorAll('button').forEach(b=> b.addEventListener('click', ()=>{
      const id = Number(b.dataset.id); validateReward(id);
    }));
  }

  function validateReward(id){
    rewards = rewards.map(r=> r.id===id? {...r, status:'VALIDATED'} : r);
    renderRewards();
    alert('Recompensa validada');
  }

  function renderChat(){
    chatLog.innerHTML = '';
    const samples = [
      {who:'María',text:'¡Buen trabajo hoy!'},
      {who:'Carlos',text:'Vamos por la racha de lectura.'}
    ];
    samples.forEach(m=>{
      const msg = document.createElement('div'); msg.style.padding='6px 0'; msg.innerHTML = `<strong>${m.who}:</strong> ${m.text}`;
      chatLog.appendChild(msg);
    });
  }
  sendMsg.addEventListener('click', ()=>{
    const v = chatMsg.value.trim(); if(!v) return; const msg = document.createElement('div'); msg.style.padding='6px 0'; msg.innerHTML = `<strong>Tú:</strong> ${v}`;
    chatLog.appendChild(msg); chatMsg.value=''; chatLog.scrollTop = chatLog.scrollHeight;
  });

  // Initial render
  renderToday(); renderRewards(); renderChat();

})();