const eng_btn = document.querySelector('#eng_btn');
const kor_btn = document.querySelector('#kor_btn');
const eng = document.getElementsByClassName('eng');
const kor = document.getElementsByClassName('kor');

eng_btn.addEventListener('click', () => {
    for (var i = 0; eng.length; i++) {
        eng[i].style.display = 'block';
        kor[i].style.display = 'none';
    }
});

kor_btn.addEventListener('click', () => {
    for (var i = 0; kor.length; i++) {
        eng[i].style.display = 'none';
        kor[i].style.display = 'block';
    }
});