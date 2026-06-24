const info = document.getElementById("info");
const demo = document.getElementById("demoBox");
function updateInfo(){
const w = window.innerWidth, h = window.innerHeight;
const dir = w>=h? '横向 (landscape)' : '纵向 (portrait)';
info.textContent = 当前窗口方向：${dir}；尺寸：${w}x${h};
demo.classList.remove('portrait','landscape');
demo.classList.add(w>=h? 'landscape':'portrait');
}
window.addEventListener('resize', updateInfo);
window.addEventListener('orientationchange', updateInfo);
updateInfo();

// 模拟切换（仅改变 demo 区样式）
document.getElementById('portrait').addEventListener('click', ()=>{
demo.classList.remove('landscape'); demo.classList.add('portrait');
});
document.getElementById('landscape').addEventListener('click', ()=>{
demo.classList.remove('portrait'); demo.classList.add('landscape');
});
