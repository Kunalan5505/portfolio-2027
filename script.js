const header=document.querySelector('.nav-wrap');const menu=document.querySelector('.menu-btn');const links=document.querySelector('.nav-links');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>18));
menu?.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');ro.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

const galleries={
paid:[
['https://raw.githubusercontent.com/Kunalan5505/portfolio-2026/main/images/project-2-1.jpg','Paid media campaign evidence'],
['https://raw.githubusercontent.com/Kunalan5505/portfolio-2026/main/images/project-2-2.jpg','Campaign performance view'],
['https://raw.githubusercontent.com/Kunalan5505/portfolio-2026/main/images/project-2-3.jpg','Additional campaign evidence']
],
landing:[['https://raw.githubusercontent.com/Kunalan5505/portfolio-2026/main/images/project-1.jpg','Landing page development evidence']],
automation:[['https://raw.githubusercontent.com/Kunalan5505/portfolio-2026/main/images/project-3.jpg','WhatsApp automation / lead engagement workflow']],
analytics:[['https://raw.githubusercontent.com/Kunalan5505/portfolio-2026/main/images/project-5.jpg','Tracking and analytics infrastructure']],
seo:[
['https://raw.githubusercontent.com/Kunalan5505/portfolio-2026/main/images/project-6.jpg','SEO performance view'],
['https://raw.githubusercontent.com/Kunalan5505/portfolio-2026/main/images/project-6-1.jpg','SEO keyword and ranking evidence']
]
};
const lb=document.getElementById('lightbox'),img=document.getElementById('lightboxImage'),cap=document.getElementById('lightboxCaption');let current=[],idx=0;
function render(){img.src=current[idx][0];cap.textContent=current[idx][1]}
function openGallery(key){current=galleries[key]||[];idx=0;if(!current.length)return;render();lb.classList.add('open');lb.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeGallery(){lb.classList.remove('open');lb.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelectorAll('[data-gallery]').forEach(b=>b.addEventListener('click',()=>openGallery(b.dataset.gallery)));
document.querySelector('.lightbox-close')?.addEventListener('click',closeGallery);
document.querySelector('.lightbox-prev')?.addEventListener('click',()=>{idx=(idx-1+current.length)%current.length;render()});
document.querySelector('.lightbox-next')?.addEventListener('click',()=>{idx=(idx+1)%current.length;render()});
lb?.addEventListener('click',e=>{if(e.target===lb)closeGallery()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeGallery();if(lb.classList.contains('open')&&e.key==='ArrowRight'){idx=(idx+1)%current.length;render()}if(lb.classList.contains('open')&&e.key==='ArrowLeft'){idx=(idx-1+current.length)%current.length;render()}});
