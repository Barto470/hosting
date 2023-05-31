(function(){
    const titleQuestions = [...document.querySelectorAll('.questions__title')];
    console.log(titleQuestions)

    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add');
            question.children[0].classList.toggle('questions__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();

function togglePDF() {
    var pdfEmbed = document.getElementById('pdfEmbed');
    var questionsArrow = document.querySelector('.questions__arrow');
  
    if (pdfEmbed.style.display === 'none') {
      pdfEmbed.style.display = 'block';
      questionsArrow.classList.add('questions__arrow--rotate');
    } else {
      pdfEmbed.style.display = 'none';
      questionsArrow.classList.remove('questions__arrow--rotate');
    }
  }
function togglePDF1() {
    var pdfEmbed = document.getElementById('pdfEmbed1');
    var questionsArrow = document.querySelector('.questions__arrow');
  
    if (pdfEmbed.style.display === 'none') {
      pdfEmbed.style.display = 'block';
      questionsArrow.classList.add('questions__arrow--rotate');
    } else {
      pdfEmbed.style.display = 'none';
      questionsArrow.classList.remove('questions__arrow--rotate');
    }
  }

function togglePDF2() {
    var pdfEmbed = document.getElementById('pdfEmbed2');
    var questionsArrow = document.querySelector('.questions__arrow');
  
    if (pdfEmbed.style.display === 'none') {
      pdfEmbed.style.display = 'block';
      questionsArrow.classList.add('questions__arrow--rotate');
    } else {
      pdfEmbed.style.display = 'none';
      questionsArrow.classList.remove('questions__arrow--rotate');
    }
  }

function togglePDF4() {
    var pdfEmbed = document.getElementById('pdfEmbed4');
    var questionsArrow = document.querySelector('.questions__arrow');
  
    if (pdfEmbed.style.display === 'none') {
      pdfEmbed.style.display = 'block';
      questionsArrow.classList.add('questions__arrow--rotate');
    } else {
      pdfEmbed.style.display = 'none';
      questionsArrow.classList.remove('questions__arrow--rotate');
    }
  }