'use strict';
/* ========= الأيقونات ========= */
const P={
home:'<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>',
cal:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>',
flower:'<circle cx="12" cy="7.5" r="3"/><circle cx="7.5" cy="12" r="3"/><circle cx="16.5" cy="12" r="3"/><path d="M12 15v6M12 19c-2 0-4-1-5-3M12 19c2 0 4-1 5-3"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',
drop:'<path d="M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z"/>',
fork:'<path d="M6 3v7a2 2 0 004 0V3M8 3v18M17 3c-2 2-3 5-3 8h3v10"/>',
moon:'<path d="M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z"/>',
heart:'<path d="M12 20s-8-5-8-11a4.5 4.5 0 018-2.5A4.5 4.5 0 0120 9c0 6-8 11-8 11z"/>',
pen:'<path d="M4 20l1-4L16 5l3 3L8 19z"/>',
arr:'<path d="M19 12H5M11 6l-6 6 6 6"/>',
mail:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 7l9 6 9-6"/>',
lock:'<rect x="5" y="11" width="14" height="10" rx="3"/><path d="M8 11V8a4 4 0 018 0v3"/>',
eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
check:'<path d="M5 12l5 5 9-10"/>',
bell:'<path d="M6 16v-5a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4"/>',
gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
chev:'<path d="M9 6l6 6-6 6"/>',
out:'<path d="M10 4H5v16h5M16 8l4 4-4 4M20 12H9"/>',
spark:'<path d="M12 3l2 6 6 3-6 3-2 6-2-6-6-3 6-3z"/>',
help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 115 0c0 2-2.5 2-2.5 4M12 17v.5"/>'};
const ic=(n,c='')=>`<svg class="i ${c}" viewBox="0 0 24 24" aria-hidden="true">${P[n]}</svg>`;

/* ========= النصوص (عربي / English) ========= */
const T={ar:{
app:'توازن',welcome:'أهلاً بك في مساحتك الخاصة',lt:'سجّلي دخولك',ls:'نحن سعداء بعودتك، تابعي عاداتك الصحية من مكان واحد.',
st:'ابدئي رحلتك معنا',ss:'أنشئي حسابك لتتابعي عاداتك وتكتشفي توازنك.',email:'البريد الإلكتروني',pass:'كلمة المرور',
lb:'دخول إلى حسابي',sb:'إنشاء حساب',noacc:'ليس لديك حساب؟',mk:'أنشئي حساباً',has:'لديك حساب بالفعل؟',dl:'سجّلي دخولك',
hs:'رحلتك نحو حياة أكثر هدوءاً',ht:'صحتك تبدأ من توازنك.',q:'خطوات صغيرة كل يوم، تصنع فرقاً كبيراً في صحتك ومزاجك.',
home:'الرئيسية',daily:'المتابعة اليومية',tips:'النصائح الصحية',profile:'ملفي الشخصي',
morning:'صباح التوازن',hi:'مرحباً',hsub:'خطوة صغيرة اليوم، تصنع فرقاً كبيراً غداً.',trk:'متابعتك اليومية',habits:'عاداتك الصحية',all:'عرض الكل',
water:'شرب الماء',waterd:'8 أكواب على الأقل',food:'تناول طعام صحي',foodd:'3 وجبات متوازنة',sleep:'النوم الكافي',sleepd:'7–8 ساعات',
act:'النشاط البدني',actd:'30 دقيقة على الأقل',relax:'الاسترخاء وتقليل التوتر',relaxd:'10 دقائق',noteadd:'اكتبي ملاحظة عن يومك',
rem:'تذكير اليوم',remt:'اشربي كوباً من الماء',remp:n=>`أنجزت ${n} من 8 أكواب اليوم`,today:'اليوم',score:'نقاط التوازن المنجزة',scores:'استمرارك اليوم يصنع عادتك.',
notes:'ملاحظاتك اليوم',notesph:'اكتبي كيف كان يومك...',tipss:'إرشادات صغيرة، أثر كبير',
tfood:'التغذية',tsleep:'النوم',trest:'الراحة',tfaq:'أسئلة شائعة',more:'اقرئي المزيد',
d_food:'اختاري أطعمة غنية بالفيتامينات والألياف لدعم صحتك وطاقة جسمك.',d_water:'يساعدك الماء على تحسين التركيز والحفاظ على نشاط جسمك.',
d_sleep:'النوم الكافي يحسّن المزاج ويعزز قدرتك على بناء عاداتك.',d_rest:'خصصي دقائق يومياً للتنفس العميق أو الهدوء بعيداً عن الشاشات.',d_faq:'معلومات سريعة عن صحتك بإجابات موثوقة وبسيطة.',
f_food:'ابدئي بإضافة طبق خضار أو فاكهة لكل وجبة، وقلّلي المشروبات المحلّاة، ووزّعي وجباتك على اليوم دون تفويت الإفطار.',
f_water:'احملي زجاجة ماء معك، واشربي كوباً عند الاستيقاظ وكوباً مع كل وجبة. لون البول الفاتح علامة جيدة على الترطيب.',
f_sleep:'ثبّتي موعد نومك واستيقاظك، وأبعدي الشاشات قبل النوم بساعة، واجعلي الغرفة هادئة ومظلمة.',
f_rest:'جرّبي تمرين تنفّس: شهيق 4 ثوانٍ، حبس 4 ثوانٍ، زفير 6 ثوانٍ. كرّريه خمس مرات.',
f_faq:'هذه المعلومات للتوعية العامة ولا تغني عن استشارة الطبيب عند وجود أعراض أو حالة صحية خاصة.',
myspace:'مساحتك الخاصة',gs:'أهدافي الصحية',gt:'أضيفي هدفك الصحي',gd:'اكتبي ما تسعين لتحقيقه لصحتك الجسدية.',editg:'تعديل أهدافي',
wrem:'تذكير شرب الماء',on:'مفعل',off:'متوقف',settings:'إعدادات التطبيق',setd:'اختاري الشكل واللغة المناسبة لك.',look:'شكل التطبيق',
th1:'وردي فاتح',th2:'وردي داكن',th3:'أزرق غامق',sel:'محدد',lang:'اللغة',gq:'ما الأهداف التي تسعين لتحقيقها لصحتك الجسدية؟',
gph:'مثال: تحسين نومي والمشي ثلاث مرات أسبوعياً',saveg:'حفظ الأهداف',recent:'تحديثاتي الأخيرة',logout:'تسجيل الخروج',psub:'اهتمي بصحتك، فأنت تستحقين الأفضل',
lg_lang:'تم تغيير اللغة إلى العربية',lg_theme:n=>`تم تغيير المظهر إلى ${n}`,lg_goal:'تم حفظ الأهداف',
e_f:'أدخلي البريد الإلكتروني وكلمة المرور (6 أحرف على الأقل).',e_x:'هذا البريد مسجّل مسبقاً.',e_c:'البريد أو كلمة المرور غير صحيحة.'},
en:{
app:'Tawazun',welcome:'Welcome to your personal space',lt:'Log in',ls:"We're glad you're back. Track your healthy habits in one place.",
st:'Start your journey',ss:'Create an account to track your habits and find your balance.',email:'Email',pass:'Password',
lb:'Log in',sb:'Create account',noacc:"Don't have an account?",mk:'Create one',has:'Already have an account?',dl:'Log in',
hs:'Your path to a calmer life',ht:'Your health starts with your balance.',q:'Small steps every day make a big difference to your health and mood.',
home:'Home',daily:'Daily tracking',tips:'Health tips',profile:'My profile',
morning:'Balance morning',hi:'Hello',hsub:'A small step today makes a big difference tomorrow.',trk:'Your daily tracking',habits:'Your healthy habits',all:'View all',
water:'Drink water',waterd:'At least 8 cups',food:'Eat healthy food',foodd:'3 balanced meals',sleep:'Enough sleep',sleepd:'7–8 hours',
act:'Physical activity',actd:'At least 30 minutes',relax:'Relax and reduce stress',relaxd:'10 minutes',noteadd:'Write a note about your day',
rem:"Today's reminder",remt:'Drink a cup of water',remp:n=>`${n} of 8 cups done today`,today:'Today',score:'Balance points earned',scores:'Keeping it up today builds your habit.',
notes:"Today's notes",notesph:'Write how your day went...',tipss:'Small tips, big impact',
tfood:'Nutrition',tsleep:'Sleep',trest:'Rest',tfaq:'FAQ',more:'Read more',
d_food:'Choose foods rich in vitamins and fiber to support your health and energy.',d_water:'Water helps you focus and keeps your body active.',
d_sleep:'Enough sleep improves your mood and helps you build habits.',d_rest:'Set aside a few minutes a day for deep breathing or screen-free quiet.',d_faq:'Quick, simple and reliable answers about your health.',
f_food:'Add a vegetable or fruit to every meal, cut back on sugary drinks, and spread meals through the day without skipping breakfast.',
f_water:'Keep a water bottle with you: a cup when you wake up and one with each meal. Pale urine is a good sign of hydration.',
f_sleep:'Keep fixed sleep and wake times, put screens away an hour before bed, and keep the room quiet and dark.',
f_rest:'Try a breathing exercise: inhale 4 seconds, hold 4, exhale 6. Repeat five times.',
f_faq:'This is general information and does not replace a doctor if you have symptoms or a medical condition.',
myspace:'Your personal space',gs:'My health goals',gt:'Add your health goal',gd:'Write what you want to achieve for your physical health.',editg:'Edit my goals',
wrem:'Water reminder',on:'On',off:'Off',settings:'App settings',setd:'Choose the look and language that suit you.',look:'App theme',
th1:'Light pink',th2:'Dark pink',th3:'Deep blue',sel:'Selected',lang:'Language',gq:'What physical health goals do you want to reach?',
gph:'e.g. Sleep better and walk three times a week',saveg:'Save goals',recent:'My recent updates',logout:'Log out',psub:'Take care of your health, you deserve the best',
lg_lang:'Changed language to English',lg_theme:n=>`Changed theme to ${n}`,lg_goal:'Goals saved',
e_f:'Enter an email and a password (at least 6 characters).',e_x:'This email is already registered.',e_c:'Incorrect email or password.'}};

/* ========= الحالة والتخزين ========= */
const K={users:'tz:users',sess:'tz:session',ui:'tz:ui'};
const ld=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}};
const sv=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}};
const ui=ld(K.ui,{lang:'ar',theme:'light'});
let S=null,email=ld(K.sess,null),route=location.hash.slice(1)||'home',authMode='login',menu=false,setOpen=false,tab='food',open={},dayOff=0,msg='';
const t=k=>{const v=T[ui.lang][k];return v};
const HABITS=[['water','drop','c-water'],['food','fork','c-food'],['sleep','moon','c-sleep'],['act','heart','c-act'],['relax','flower','c-relax']];
const key=d=>{const x=new Date();x.setDate(x.getDate()+d);return`${x.getFullYear()}-${String(x.getMonth()+1).padStart(2,'0')}-${String(x.getDate()).padStart(2,'0')}`};
const dayOf=k=>S.days[k]||(S.days[k]={h:{},cups:0,note:''});
const save=()=>{if(email)sv('tz:u:'+email,S)};
const saveUi=()=>sv(K.ui,ui);
const nameOf=e=>e.split('@')[0];
async function hash(s){try{const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}catch{return btoa(unescape(encodeURIComponent(s)))}}
function loadUser(){S=ld('tz:u:'+email,null)||{days:{},goals:'',rem:true,log:[]}}
function log(text){S.log.unshift({t:text,d:new Date().toISOString()});S.log=S.log.slice(0,5);save()}
const hijri=iso=>new Date(iso).toLocaleDateString(ui.lang==='ar'?'ar-SA-u-ca-islamic-umalqura':'en-GB',{day:'numeric',month:'long',year:'numeric'});

/* ========= العرض ========= */
function applyUi(){
  const h=document.documentElement;
  h.lang=ui.lang;h.dir=ui.lang==='ar'?'rtl':'ltr';h.dataset.theme=ui.theme;
  document.title=t('app');
  const m=document.querySelector('meta[name=theme-color]');if(m)m.content=ui.theme==='navy'?'#f3f7fb':'#fdf5f8';
}
const logo=()=>`${t('app')} ${ic('flower')}`;
function header(title){
  return`<header class="hd"><button class="ib sq" data-a="menu" aria-label="menu" style="background:transparent">${ic(menu?'x':'menu')}</button>
  <div class="mid"><span>${title}</span><b>${logo()}</b></div>
  <button class="ib" data-a="go" data-v="profile" aria-label="${t('profile')}">${ic('user')}</button>
  ${menu?`<nav class="menu">${['home','daily','tips','profile'].map(r=>`<button data-a="go" data-v="${r}">${ic({home:'home',daily:'cal',tips:'flower',profile:'user'}[r])}${t(r)}</button>`).join('')}</nav>`:''}</header>`;
}
function bottom(){
  const it=[['home','home'],['tips','flower'],['daily','cal'],['profile','user']];
  return`<nav class="bn">${it.map(([r,i])=>`<button class="${route===r?'on':''}" data-a="go" data-v="${r}">${ic(i)}<span>${t(r)}</span></button>`).join('')}</nav>`;
}
function habitCard(id,ic_,cls,d){
  const on=!!d.h[id];
  return`<button class="hb" data-a="hab" data-v="${id}"><span class="ico ${cls}">${ic(ic_)}</span><span class="t"><b>${t(id)}</b><small>${t(id+'d')}</small></span><span class="chk ${on?'on':''}">${on?ic('check'):''}</span></button>`;
}
function vAuth(){
  const su=authMode==='signup';
  return`<div class="auth"><section class="hero">${ic('spark')}<p class="s">${t('hs')}</p><h2>${t('ht')}</h2><div class="q">${ic('heart')}${t('q')}</div></section>
  <section class="fm"><div class="logo">${logo()}</div><div class="c"><p>${t('welcome')}</p><h1>${su?t('st'):t('lt')}</h1><p>${su?t('ss'):t('ls')}</p></div>
  <div class="fld"><label for="em">${t('email')}</label><div class="wrap"><input id="em" class="inp" type="email" inputmode="email" autocomplete="email" placeholder="name@example.com"><span class="l">${ic('mail')}</span></div></div>
  <div class="fld"><label for="pw">${t('pass')}</label><div class="wrap"><input id="pw" class="inp" type="password" autocomplete="${su?'new-password':'current-password'}" placeholder="••••••••"><span class="l">${ic('lock')}</span><button class="e" data-a="eye" type="button" aria-label="show">${ic('eye')}</button></div></div>
  <p class="err" id="err">${msg}</p>
  <button class="btn" data-a="auth">${su?t('sb'):t('lb')}${ic('arr','arr')}</button>
  <p class="alt">${su?t('has'):t('noacc')} <button data-a="mode">${su?t('dl'):t('mk')}</button></p></section></div>`;
}
function vHome(){
  const d=dayOf(key(0));
  return`${header(t('home'))}<main>
  <section class="banner"><p class="eyebrow">${t('morning')}</p><h2>${t('hi')} ${nameOf(email)} ${ic('heart')}</h2><p>${t('hsub')}</p><span class="fl">${ic('flower')}</span></section>
  <div class="row"><div><p class="eyebrow">${t('trk')}</p><h1 style="font-size:24px">${t('habits')}</h1></div><button class="link" data-a="go" data-v="daily">${t('all')}${ic('arr','arr')}</button></div>
  <div class="grid2">${HABITS.slice(0,4).map(h=>habitCard(h[0],h[1],h[2],d)).join('')}</div>
  <button class="note-btn" data-a="go" data-v="daily"><span>${ic('pen')}${t('noteadd')}</span>${ic('arr','arr')}</button>
  <button class="card rem" data-a="cup"><div class="top"><div><p class="eyebrow">${t('rem')}</p><h3>${t('remt')}</h3></div><span class="ico c-water">${ic('drop')}</span></div>
  <div class="bar"><i style="width:${d.cups/8*100}%"></i></div><small>${t('remp')(d.cups)}</small></button></main>${bottom()}`;
}
function vDaily(){
  const k=key(dayOff),d=dayOf(k),n=HABITS.filter(h=>d.h[h[0]]).length;
  const dt=new Date();dt.setDate(dt.getDate()+dayOff);
  const loc=ui.lang==='ar'?'ar':'en-GB';
  const lbl=(dayOff===0?t('today')+(ui.lang==='ar'?'، ':', '):dt.toLocaleDateString(loc,{weekday:'long'})+(ui.lang==='ar'?'، ':', '))+dt.toLocaleDateString(loc,{day:'numeric',month:'long'});
  return`${header(t('daily'))}<main>
  <div class="pg-t"><div><p class="eyebrow">${lbl}</p><h1>${t('daily')}</h1></div><span class="ib sq">${ic('cal')}</span></div>
  <div class="card nav-d"><button data-a="day" data-v="-1" aria-label="prev">${ic('chev','arr')}</button><span>${lbl}</span><button data-a="day" data-v="1" aria-label="next" ${dayOff>=0?'disabled style="opacity:.3"':''}>${ic('chev','rv')}</button></div>
  <div class="score"><div class="ring" style="--p:${n/5*100}"><span>${n}/5</span></div><div class="t"><b>${t('score')}</b><small>${t('scores')}</small></div></div>
  <div class="list">${HABITS.map(h=>habitCard(h[0],h[1],h[2],d)).join('')}</div>
  <div class="card" style="margin-top:18px"><h3 style="display:flex;gap:8px;align-items:center;color:var(--dk);margin-bottom:12px">${ic('pen')}${t('notes')}</h3><textarea id="note" placeholder="${t('notesph')}">${d.note.replace(/</g,'&lt;')}</textarea></div></main>${bottom()}`;
}
const TIPS=[['food','fork','#fdeee6','d_food',['food']],['water','drop','#e6f3f2','d_water',['food']],['sleep','moon','#efe9f7','d_sleep',['sleep']],['rest','flower','#e9f4e4','d_rest',['rest']],['faq','help','#fcf3df','d_faq',['faq']]];
function vTips(){
  const tabs=[['food','tfood'],['sleep','tsleep'],['rest','trest'],['faq','tfaq']];
  const names={food:'tfood',water:'water',sleep:'tsleep',rest:'trest',faq:'tfaq'};
  const list=TIPS.filter(x=>x[4].includes(tab));
  const water=ui.lang==='ar'?'اشربي كوباً من الماء':'Drink a cup of water';
  return`${header(t('tips'))}<main>
  <div class="pg-t"><div><p class="eyebrow">${t('tipss')}</p><h1>${t('tips')}</h1></div><span class="ib sq">${ic('flower')}</span></div>
  <div class="tabs">${tabs.map(([k,l])=>`<button class="tab ${tab===k?'on':''}" data-a="tab" data-v="${k}">${t(l)}</button>`).join('')}</div>
  <div class="tips">${list.map(([id,i,bg,d])=>`<article class="card tip ${open[id]?'open':''}"><div class="pic" style="background:${bg}">${ic(i)}</div>
  <h3>${id==='water'?water:t(names[id])}<span style="color:var(--ac)">${ic('arr','arr')}</span></h3><p>${t(d)}</p><p class="full">${t('f_'+id)}</p><button class="more" data-a="more" data-v="${id}">${t('more')}</button></article>`).join('')}</div></main>${bottom()}`;
}
function vProfile(){
  const th=[['light','th1','#f9dfe9'],['dark','th2','#a84a6c'],['navy','th3','#17395c']];
  return`${header(t('profile'))}<main>
  <div class="pg-t"><div><p class="eyebrow">${t('myspace')}</p><h1>${t('profile')}</h1></div><span class="ib sq">${ic('user')}</span></div>
  <section class="prof"><div class="av">${ic('flower')}</div><b>${nameOf(email)}</b><small>${t('psub')}</small></section>
  <section class="card goal"><div class="top"><div><p class="eyebrow">${t('gs')}</p><h3>${S.goals?S.goals.replace(/</g,'&lt;'):t('gt')}</h3><small>${t('gd')}</small></div><span class="ico" style="background:var(--soft);color:var(--ac)">${ic('target')}</span></div>
  <button class="btn out" data-a="editg" style="margin-top:14px">${ic('pen')}${t('editg')}</button></section>
  <section class="card" style="padding:4px 16px"><button class="srow" data-a="rem"><span>${ic('bell')}${t('wrem')}</span><span class="badge ${S.rem?'':'off'}">${S.rem?t('on'):t('off')}</span></button>
  <button class="srow" data-a="set"><span>${ic('gear')}${t('settings')}</span>${ic('chev','arr')}</button></section>
  ${setOpen?`<section class="card set" id="set"><div class="top"><div><h3>${t('settings')}</h3><small>${t('setd')}</small></div><button data-a="set" aria-label="close" style="color:var(--ac)">${ic('x')}</button></div>
  <span class="lbl">${t('look')}</span><div class="themes">${th.map(([k,l,c])=>`<button class="th ${ui.theme===k?'on':''}" data-a="theme" data-v="${k}"><i style="background:${c}"></i><b>${t(l)}</b>${ui.theme===k?`<small>${t('sel')}</small>`:''}</button>`).join('')}</div>
  <span class="lbl">${t('lang')}</span><div class="langs"><button class="${ui.lang==='ar'?'on':''}" data-a="lang" data-v="ar">العربية</button><button class="${ui.lang==='en'?'on':''}" data-a="lang" data-v="en">English</button></div>
  <label class="lbl" for="goals">${t('gq')}</label><textarea id="goals" placeholder="${t('gph')}">${S.goals.replace(/</g,'&lt;')}</textarea>
  <button class="btn" data-a="saveg" style="margin-top:14px">${t('saveg')}</button>
  <span class="lbl">${t('recent')}</span>${S.log.map(l=>`<div class="log"><span>${l.t}</span><small>${hijri(l.d)}</small></div>`).join('')}</section>`:''}
  <button class="out-b" data-a="logout">${ic('out','arr')}${t('logout')}</button></main>${bottom()}`;
}
function render(){
  applyUi();
  const a=document.getElementById('app');
  if(!email){a.className='auth-wrap';a.innerHTML=vAuth();return}
  a.className='';
  const v={home:vHome,daily:vDaily,tips:vTips,profile:vProfile}[route]||vHome;
  a.innerHTML=v();
  if(route==='daily')document.getElementById('note').addEventListener('input',e=>{dayOf(key(dayOff)).note=e.target.value;save()});
}
function go(r){route=r;menu=false;location.hash=r;window.scrollTo(0,0);render()}
window.addEventListener('hashchange',()=>{const r=location.hash.slice(1);if(r&&r!==route&&email){route=r;menu=false;render()}});

/* ========= الأحداث ========= */
document.addEventListener('click',async e=>{
  const b=e.target.closest('[data-a]');if(!b)return;
  const a=b.dataset.a,v=b.dataset.v;
  if(a==='go')return go(v);
  if(a==='menu'){menu=!menu;return render()}
  if(a==='mode'){authMode=authMode==='login'?'signup':'login';msg='';return render()}
  if(a==='eye'){const p=document.getElementById('pw');p.type=p.type==='password'?'text':'password';return}
  if(a==='auth'){
    const em=document.getElementById('em').value.trim().toLowerCase(),pw=document.getElementById('pw').value;
    if(!/^\S+@\S+\.\S+$/.test(em)||pw.length<6){msg=t('e_f');return render()}
    const users=ld(K.users,{}),h=await hash(pw);
    if(authMode==='signup'){if(users[em]){msg=t('e_x');return render()}users[em]=h;sv(K.users,users)}
    else if(users[em]!==h){msg=t('e_c');return render()}
    email=em;sv(K.sess,em);loadUser();msg='';return go('home');
  }
  if(a==='logout'){email=null;S=null;localStorage.removeItem(K.sess);setOpen=false;authMode='login';route='home';location.hash='';return render()}
  if(a==='hab'){const d=dayOf(key(dayOff));d.h[v]=!d.h[v];if(v==='water'&&!d.h[v])d.cups=Math.min(d.cups,7);save();return render()}
  if(a==='cup'){const d=dayOf(key(0));d.cups=d.cups>=8?0:d.cups+1;d.h.water=d.cups>=8;save();return render()}
  if(a==='day'){dayOff=Math.min(0,dayOff+Number(v));return render()}
  if(a==='tab'){tab=v;return render()}
  if(a==='more'){open[v]=!open[v];return render()}
  if(a==='rem'){S.rem=!S.rem;save();return render()}
  if(a==='set'){setOpen=!setOpen;return render()}
  if(a==='editg'){setOpen=true;render();const g=document.getElementById('goals');g.scrollIntoView({behavior:'smooth',block:'center'});g.focus();return}
  if(a==='saveg'){S.goals=document.getElementById('goals').value.trim();log(t('lg_goal'));return render()}
  if(a==='theme'){ui.theme=v;saveUi();log(t('lg_theme')(t({light:'th1',dark:'th2',navy:'th3'}[v])));return render()}
  if(a==='lang'){ui.lang=v;saveUi();log(t('lg_lang'));return render()}
});

/* ========= التشغيل ========= */
if(email)loadUser();
if(email&&!['home','daily','tips','profile'].includes(route))route='home';
render();
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}))}
