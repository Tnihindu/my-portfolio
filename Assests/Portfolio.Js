/* MATRIX / CODE RAIN
   Simple canvas effect for "hacker" vibe. */
   (function matrixEffect(){
    const canvas = document.getElementById('matrix');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = innerWidth;
    let height = canvas.height = innerHeight;
    const cols = Math.floor(width / 14);
    const ypos = Array(cols).fill(0);
  
    function matrixLoop(){
      ctx.fillStyle = 'rgba(0,0,0,0.08)';
      ctx.fillRect(0,0,width,height);
  
      ctx.fillStyle = '#00ff41';
      ctx.font = '13px "Share Tech Mono", monospace';
  
      for(let i=0;i<ypos.length;i++){
        const text = String.fromCharCode(33 + Math.random()*94);
        const x = i * 14;
        ctx.fillText(text, x, ypos[i]*14);
  
        if(ypos[i]*14 > height && Math.random() > 0.975) ypos[i]=0;
        ypos[i]++;
      }
      requestAnimationFrame(matrixLoop);
    }
  
    window.addEventListener('resize', ()=>{
      width = canvas.width = innerWidth;
      height = canvas.height = innerHeight;
    });
  
    matrixLoop();
  })();
  
  /* Simple 'type' effect for the fake terminal */
  (function typeEffect(){
    const el = document.getElementById('type-area');
    if(!el) return;
    const text = el.innerText;
    el.innerText = '';
    let i = 0;
    function step(){
      if(i < text.length){
        el.innerText += text[i++];
        setTimeout(step, 18 + Math.random()*40);
      }
    }
    setTimeout(step, 600);
  })();
  
  /* tiny interaction: prevent real submission, show fake "sent" */
  function fakeSubmit(e){
    e.preventDefault();
    const btn = document.querySelector('.contact-form button');
    if(!btn) return;
    btn.textContent = 'sending...';
    setTimeout(()=>{
      btn.textContent = 'sent ✓';
      btn.disabled = true;
      setTimeout(()=>{ btn.textContent = 'send'; btn.disabled = false; }, 2200);
    }, 900);
  }
  (function photoGlitch() {
    const photo = document.querySelector('.photo-container');
    if(!photo) return;

    function glitchSlice() {
        const slice = document.createElement('div');
        slice.style.position = 'absolute';
        slice.style.width = `${Math.random() * 100 + 20}px`;
        slice.style.height = `${Math.random() * 20 + 5}px`;
        slice.style.top = `${Math.random() * 100}%`;
        slice.style.left = '0';
        slice.style.background = 'rgba(57,255,20,0.3)';
        slice.style.zIndex = '10';
        slice.style.pointerEvents = 'none';
        slice.style.mixBlendMode = 'screen';
        photo.appendChild(slice);
        setTimeout(() => photo.removeChild(slice), 300);
    }

    setInterval(glitchSlice, 200);
})();
