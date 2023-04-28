// getting buttons
const nextBtn = document.querySelector('.next');
const submitBtn = document.querySelector('.submit');
// getting buttons

// getting forms
let form1 = document.querySelector('.form1');
let form2 = document.querySelector('.form2');
// getting forms

nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    form1.style.display='none';
    form2.style.display='block';
});


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
});



