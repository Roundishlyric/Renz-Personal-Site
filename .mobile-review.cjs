const fs = require('fs');
(async () => {
 const tabs = await (await fetch('http://127.0.0.1:9222/json')).json();
 const ws = new WebSocket(tabs.find(t => t.type === 'page').webSocketDebuggerUrl);
 await new Promise(r => ws.addEventListener('open', r, {once:true}));
 let id=0; const pending=new Map();
 ws.addEventListener('message', e => {const m=JSON.parse(e.data); if(pending.has(m.id)){pending.get(m.id)(m);pending.delete(m.id);}});
 const cmd=(method,params={})=>new Promise((resolve,reject)=>{const n=++id;pending.set(n,m=>m.error?reject(m.error):resolve(m.result));ws.send(JSON.stringify({id:n,method,params}));});
 const evalJs=async expression=>(await cmd('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true})).result.value;
 await cmd('Page.enable');
 for(const width of [320,390,768,1280]) {
  await cmd('Emulation.setDeviceMetricsOverride',{width,height:844,deviceScaleFactor:1,mobile:width<768});
  for(const route of ['/','/about','/projects','/experience','/credentials','/contact','/gaming']) {
   await cmd('Page.navigate',{url:'http://127.0.0.1:5173'+route});
   await new Promise(r=>setTimeout(r,900));
   const result=await evalJs(`({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,overflow:[...document.querySelectorAll('main *')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&(r.right>innerWidth+1||r.left< -1)&&getComputedStyle(e).position!=='absolute'&&!e.closest('[data-slot="carousel-content"]')}).slice(0,8).map(e=>({tag:e.tagName,text:e.textContent.slice(0,45),class:e.className})),main:!!document.querySelector('main')})`);
   console.log(JSON.stringify({width,route,...result}));
  }
 }
 await cmd('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
 await cmd('Page.navigate',{url:'http://127.0.0.1:5173/projects'});
 await new Promise(r=>setTimeout(r,700));
 console.log('carousel',await evalJs(`(async()=>{document.querySelector('[data-slot="carousel-next"]').click();await new Promise(r=>setTimeout(r,600));return {selected:document.querySelector('[aria-current="true"]').getAttribute('aria-label'),buttons:[...document.querySelectorAll('[data-slot="carousel-next"],[data-slot="carousel-previous"]')].map(e=>({width:e.getBoundingClientRect().width,x:e.getBoundingClientRect().x}))}})()`));
 console.log('menu',await evalJs(`(()=>{document.querySelector('[aria-controls="mobile-navigation"]').click();return true})()`));
 await new Promise(r=>setTimeout(r,150));
 console.log('menuExpanded', await evalJs(`document.querySelector('[aria-controls="mobile-navigation"]').getAttribute('aria-expanded')`));
 fs.writeFileSync('mobile-projects-review.png',Buffer.from((await cmd('Page.captureScreenshot',{format:'png'})).data,'base64'));
 ws.close();
})().catch(e=>{console.error(e);process.exit(1)});
