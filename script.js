// Questions
const Questions = [
  {
    id: 1,
    q: "Pytanie 1",
    a: [
      {
        text: "Nie jestem smutny / smutna ani przygnębiony / przygnębiona.",
        score: 0,
      },
      { text: "Odczuwam często smutek, przygnębienie.", score: 1 },
      {
        text: "Przeżywam stale smutek, przygnębienie i nie mogę uwolnić się od tych przeżyć.",
        score: 2,
      },
      {
        text: "Jestem stale tak smutny / smutna i nieszczęśliwy / nieszczęśliwa, że jest to nie do wytrzymania.",
        score: 3,
      },
    ],
  },
  {
    id: 2,
    q: "Pytanie 2",
    a: [
      { text: "Nie przejmuję się zbytnio przyszłością.", score: 0 },
      { text: "Często martwię się o przyszłość.", score: 1 },
      {
        text: "Obawiam się, że w przyszłości nic dobrego mnie nie czeka.",
        score: 2,
      },
      {
        text: "Czuję, że przyszłość jest beznadziejna i nic tego nie zmieni.",
        score: 3,
      },
    ],
  },
  {
    id: 3,
    q: "Pytanie 3",
    a: [
      { text: "Sądzę, że nie popełniam większych zaniedbań.", score: 0 },
      { text: "Sądzę, że czynię więcej zaniedbań niż inni.", score: 1 },
      {
        text: "Kiedy spoglądam na to, co robiłem / robiłam, widzę mnóstwo błędów i zaniedbań.",
        score: 2,
      },
      {
        text: "Jestem zupełnie niewydolny / niewydolna i wszystko robię źle.",
        score: 3,
      },
    ],
  },
];

// Set start
let start = true;
//   let enabled = false;
//   let selected = "";

//   // Set test result variable
//   let testResult = 0;

// Getting the question
const question = document.getElementById("question");

// Getting the options
const opt0 = document.getElementById("option0");
const opt1 = document.getElementById("option1");
const opt2 = document.getElementById("option2");
const opt3 = document.getElementById("option3");

//   // Show selection for op1
//   op1.addEventListener("click", () => {
//     if (op1.classList.contains("option-active")) {
//       op1.classList.remove("option-active");
//       selected = false;
//       enabled = false;
//       next.classList.remove("next-active");
//     } else {
//       op1.classList.add("option-active");
//       op2.classList.remove("option-active");
//       selected = op1.value;
//       enabled = true;
//       next.classList.add("next-active");
//     }
//   });

//   // Show selection for op2
//   op2.addEventListener("click", () => {
//     if (op2.classList.contains("option-active")) {
//       op2.classList.remove("option-active");
//       selected = false;
//       enabled = false;
//       next.classList.remove("next-active");
//     } else {
//       op2.classList.add("option-active");
//       op1.classList.remove("option-active");
//       selected = op2.value;
//       enabled = true;
//       next.classList.add("next-active");
//     }
//   });

// Iterate
function iterate(id) {
  // Getting the result display section
  const result = document.getElementsByClassName("result");
  result[0].innerText = "";
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
  iterate("0");
}

  // Next button and method
  const next = document.getElementsByClassName("next")[0];
  let id = 1;

  let finish = false;

  next.addEventListener("click", () => {
    start = false;
    // if (enabled === true) {
      // if (selected === "true" && finish === false) {
      //   testResult = testResult + 1;
      // }
      if (id == 2) {
        next.innerText = "Zakończ test";
      }
      if (id == 3) {
        finish = true;
        const result = document.getElementsByClassName("result");
        result[0].innerText = "Twój wynik testu to: "; // + testResult;
      }

      if (id < 3) {
        iterate(id);
        id++;
      }
      // enabled = false;
      // op1.classList.remove("option-active");
      // op2.classList.remove("option-active");
      // next.classList.remove("next-active");
    // }
  });
