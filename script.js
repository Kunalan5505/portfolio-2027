const header=document.querySelector('.site-header');const menu=document.querySelector('.menu-btn');const nav=document.querySelector('.nav-links');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>18));
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const galleries={
 paid:[
  ['https://raw.githubusercontent.com/Kunalan5505/portfolio-2026/main/images/project-2-1.jpg','Paid media campaign evidence'],
  ['https://raw.githubusercontent.com/Kunalan5505/portfolio-2026/main/images/project-2-2.jpg','Campaign performance view'],
  ['https://raw.githubusercontent.com/Kunalan5505/portfolio-2026/main/images/project-2-3.jpg','Additional campaign evidence']
 ],
 landing:[['https://raw.githubusercontent.com/Kunalan5505/portfolio-2026/main/images/project-1.jpg','Landing page development evidence']],
 automation:[['https://raw.githubusercontent.com/Kunalan5505/portfolio-2026/main/images/project-3.jpg','WhatsApp automation workflow']],
 analytics:[['https://raw.githubusercontent.com/Kunalan5505/portfolio-2026/main/images/project-5.jpg','Tracking and attribution infrastructure']],
 seo:[
  ['https://raw.githubusercontent.com/Kunalan5505/portfolio-2026/main/images/project-6.jpg','SEO performance evidence'],
  ['https://raw.githubusercontent.com/Kunalan5505/portfolio-2026/main/images/project-6-1.jpg','SEO keyword and ranking evidence']
 ]
};
const box=document.getElementById('lightbox'),photo=document.getElementById('lbImage'),caption=document.getElementById('lbCaption');let current=[],idx=0;
function render(){photo.src=current[idx][0];caption.textContent=current[idx][1]}
function openGallery(key){current=galleries[key]||[];idx=0;if(!current.length)return;render();box.classList.add('open');box.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeGallery(){box.classList.remove('open');box.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelectorAll('[data-gallery]').forEach(b=>b.addEventListener('click',()=>openGallery(b.dataset.gallery)));
document.querySelector('.lb-close')?.addEventListener('click',closeGallery);
document.querySelector('.lb-prev')?.addEventListener('click',()=>{idx=(idx-1+current.length)%current.length;render()});
document.querySelector('.lb-next')?.addEventListener('click',()=>{idx=(idx+1)%current.length;render()});
box?.addEventListener('click',e=>{if(e.target===box)closeGallery()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeGallery();if(box.classList.contains('open')&&e.key==='ArrowRight'){idx=(idx+1)%current.length;render()}if(box.classList.contains('open')&&e.key==='ArrowLeft'){idx=(idx-1+current.length)%current.length;render()}});
