// Set start
let start = true;
let selected = 0;
let enabled = false;
let id = 0;
let finish = false;

const optionDivs = document.querySelectorAll('.option');

// Set test result variable
let testResult = 0;

// Getting the question
const question = document.getElementById("question");

// Getting the options
const opt0 = document.getElementById("option0");
const opt1 = document.getElementById("option1");
const opt2 = document.getElementById("option2");
const opt3 = document.getElementById("option3");

// Setting all unchecked
const opt0checked = document.getElementById("opt0");
const opt1checked = document.getElementById("opt1");
const opt2checked = document.getElementById("opt2");
const opt3checked = document.getElementById("opt3");

// Next button and method
const next = document.querySelector(".next");
next.addEventListener("click", () => {
  start = false;
  if (enabled === true) {
    if (next.innerText === "Zakończ test") {
      finish = true;
      testResult = testResult + selected;
      const result = document.getElementsByClassName("result");
      result[0].innerText = "Twój wynik testu to: " + testResult;
    }

    if (id < Questions.length - 1) {
      testResult = testResult + selected;
      console.log(testResult);
      id += 1;
      iterate(id);
      if (id === Questions.length - 1) {
        next.innerText = "Zakończ test";
      }
    }

    // Remove checked
    opt0checked.checked = false;
    opt1checked.checked = false;
    opt2checked.checked = false;
    opt3checked.checked = false;

    // Remove styling for checked
    optionDivs.forEach(div => div.classList.remove('option-active'));

    // selected = "";
    enabled = false;
    next.classList.remove("next-active");
  }
});

document.querySelector('.option-container').addEventListener('click', (e) => {
  if (e.target.nodeName === 'INPUT') {
    const { parentNode, value } = e.target;
    console.log(`clicked ${value}!`);
    optionDivs.forEach(div => div.classList.remove('option-active'));
    parentNode.classList.add('option-active');
    selected = Questions[id].a[value].score;
    enabled = true;
    next.classList.add("next-active");
  }
});

// Iterate
function iterate(id) {
  // Getting the result display section
  const result = document.querySelector(".result");
  result.innerText = "";
  // Setting the question text
  question.innerText = Questions[id].q;

  // Providing option text
  opt0.innerText = Questions[id].a[0].text;
  opt1.innerText = Questions[id].a[1].text;
  opt2.innerText = Questions[id].a[2].text;
  opt3.innerText = Questions[id].a[3].text;

  // Providing the true or false value to the options
  opt0.value = Questions[id].a[0].score;
  opt1.value = Questions[id].a[1].score;
  opt2.value = Questions[id].a[2].score;
  opt3.value = Questions[id].a[3].score;
}

if (start) {
  iterate(0);
}
