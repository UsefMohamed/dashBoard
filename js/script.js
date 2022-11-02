const sections = document.getElementsByClassName("question-section");
// console.log(sections); => for check
const p = document.getElementsByClassName("question-body");
// console.log(p); => for check
for(let i = 0; i < sections.length; i++) {
    sections[i].onclick = function() {
        p[i].classList.toggle("show");
    }
}