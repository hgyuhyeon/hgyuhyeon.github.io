const eng_btn = document.querySelector('#eng_btn');
const kor_btn = document.querySelector('#kor_btn');
const eng = document.getElementsByClassName('eng');
const kor = document.getElementsByClassName('kor');

eng_btn.addEventListener('click', () => {
    for (var i = 0; i < eng.length; i++) eng[i].style.display = 'block';
    for (var i = 0; i < kor.length; i++) kor[i].style.display = 'none';
});

kor_btn.addEventListener('click', () => {
    for (var i = 0; i < eng.length; i++) eng[i].style.display = 'none';
    for (var i = 0; i < kor.length; i++) kor[i].style.display = 'block';
});