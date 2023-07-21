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
  {
    id: 4,
    q: "Pytanie 4",
    a: [
      { text: "To, co robię, sprawia mi przyjemność.", score: 0 },
      { text: "Nie cieszy mnie to, co robię.", score: 1 },
      {
        text: "Nic mi teraz nie daje prawdziwego zadowolenia.",
        score: 2,
      },
      {
        text: "Nie potrafię przeżywać zadowolenia i przyjemności; wszystko mnie nuży.",
        score: 3,
      },
    ],
  },
  {
    id: 5,
    q: "Pytanie 5",
    a: [
      {
        text: "Nie czuję się winnym / winną ani wobec siebie, ani wobec innych.",
        score: 0,
      },
      { text: "Dość często miewam wyrzuty sumienia.", score: 1 },
      {
        text: "Często czuję, że zawiniłem / zawiniłam.",
        score: 2,
      },
      {
        text: "Stale czuję się winny / winna.",
        score: 3,
      },
    ],
  },
  {
    id: 6,
    q: "Pytanie 6",
    a: [
      { text: "Sądzę, że nie zasługuję na karę.", score: 0 },
      { text: "Sądzę, że zasługuję na karę.", score: 1 },
      {
        text: "Spodziewam się ukarania.",
        score: 2,
      },
      {
        text: "Wiem, że jestem karany /karana (lub ukarany / ukarana)",
        score: 3,
      },
    ],
  },
  {
    id: 7,
    q: "Pytanie 7",
    a: [
      { text: "Jestem z siebie zadowolony / zadowolona.", score: 0 },
      { text: "Nie jestem z siebie zadowolony / zadowolona.", score: 1 },
      {
        text: "Czuję do siebie niechęć.",
        score: 2,
      },
      {
        text: "Nienawidzę siebie.",
        score: 3,
      },
    ],
  },
  {
    id: 8,
    q: "Pytanie 8",
    a: [
      { text: "Nie czuję się gorszy / gorsza od innych ludzi.", score: 0 },
      { text: "Zarzucam sobie, że jestem nieudolny / nieudolna i popełniam błędy.", score: 1 },
      {
        text: "Stale potępiam siebie za popełnione błędy.",
        score: 2,
      },
      {
        text: "Winię siebie za wszelkie zło, które istnieje.",
        score: 3,
      },
    ],
  },
  {
    id: 9,
    q: "Pytanie 9",
    a: [
      { text: "Nie myślę o odebraniu sobie życia.", score: 0 },
      { text: "Myślę o samobójstwie — ale nie mógłbym / nie mogłabym tego dokonać.", score: 1 },
      {
        text: "Pragnę odebrać sobie życie.",
        score: 2,
      },
      {
        text: "Popełnię samobójstwo, jak będzie odpowiednia sposobność.",
        score: 3,
      },
    ],
  },
  {
    id: 10,
    q: "Pytanie 10",
    a: [
      { text: "Nie płaczę częściej niż zwykle.", score: 0 },
      { text: "Płaczę częściej niż dawniej.", score: 1 },
      {
        text: "Ciągle chce mi się płakać.",
        score: 2,
      },
      {
        text: "Chciałbym / chciałabym płakać, lecz nie jestem w stanie.",
        score: 3,
      },
    ],
  },
  {
    id: 11,
    q: "Pytanie 11",
    a: [
      { text: "Nie jestem bardziej podenerwowany / podenerwowana niż dawniej.", score: 0 },
      { text: "Jestem bardziej nerwowy / nerwowa i przykry / przykra niż dawniej.", score: 1 },
      {
        text: "Jestem stale zdenerwowany / zdenerwowana lub rozdrażniony / rozdrażniona.",
        score: 2,
      },
      {
        text: "Wszystko, co dawniej mnie drażniło, stało się obojętne.",
        score: 3,
      },
    ],
  },
  {
    id: 12,
    q: "Pytanie 12",
    a: [
      { text: "Ludzie interesują mnie jak dawniej.", score: 0 },
      { text: "Interesuję się ludźmi mniej niż dawniej.", score: 1 },
      {
        text: "Utraciłem / utraciłam większość zainteresowań innymi ludźmi.",
        score: 2,
      },
      {
        text: "Utraciłem / utraciłam wszelkie zainteresowanie innymi ludźmi.",
        score: 3,
      },
    ],
  },
  {
    id: 13,
    q: "Pytanie 13",
    a: [
      { text: "Decyzje podejmuję łatwo, tak jak dawniej.", score: 0 },
      { text: "Częściej niż kiedyś odwlekam podjęcie decyzji.", score: 1 },
      {
        text: "Mam dużo trudności z podjęciem decyzji.",
        score: 2,
      },
      {
        text: "Nie jestem w stanie podjąć żadnej decyzji.",
        score: 3,
      },
    ],
  },
  {
    id: 14,
    q: "Pytanie 14",
    a: [
      { text: "Sądzę, że wyglądam nie gorzej niż dawniej.", score: 0 },
      { text: "Martwię się tym, że wyglądam staro i nieatrakcyjnie.", score: 1 },
      {
        text: "Czuję, że wyglądam coraz gorzej.",
        score: 2,
      },
      {
        text: "Jestem przekonany / przekonana, że wyglądam okropnie i odpychająco.",
        score: 3,
      },
    ],
  },
  {
    id: 15,
    q: "Pytanie 15",
    a: [
      { text: "Mogę pracować jak dawniej.", score: 0 },
      { text: "Z trudem rozpoczynam każdą czynność.", score: 1 },
      {
        text: "Z wielkim wysiłkiem zmuszam się do zrobienia czegokolwiek.",
        score: 2,
      },
      {
        text: "Nie jestem w stanie nic zrobić.",
        score: 3,
      },
    ],
  },
  {
    id: 16,
    q: "Pytanie 16",
    a: [
      { text: "Sypiam dobrze, jak zwykle.", score: 0 },
      { text: "Sypiam gorzej niż dawniej.", score: 1 },
      {
        text: "Rano budzę się 1-2 godziny za wcześnie i trudno jest mi ponownie usnąć.",
        score: 2,
      },
      {
        text: "Budzę się kilka godzin za wcześnie i nie mogę usnąć.",
        score: 3,
      },
    ],
  },
  {
    id: 17,
    q: "Pytanie 17",
    a: [
      { text: "Nie męczę się bardziej niż dawniej.", score: 0 },
      { text: "Męczę się znacznie łatwiej niż poprzednio.", score: 1 },
      {
        text: "Męczę się wszystkim, co robię.",
        score: 2,
      },
      {
        text: "Jestem zbyt zmęczony / zmęczona, aby cokolwiek robić.",
        score: 3,
      },
    ],
  },
  {
    id: 18,
    q: "Pytanie 18",
    a: [
      { text: "Mam apetyt nie gorszy niż dawniej.", score: 0 },
      { text: "Mam trochę gorszy apetyt.", score: 1 },
      {
        text: "Apetyt mam wyraźnie gorszy.",
        score: 2,
      },
      {
        text: "Nie mam w ogóle apetytu.",
        score: 3,
      },
    ],
  },
  {
    id: 19,
    q: "Pytanie 19",
    a: [
      { text: "Nie tracę na wadze (w okresie ostatniego miesiąca).", score: 0 },
      { text: "Straciłem / straciłam na wadze więcej niż 2 kg.", score: 1 },
      {
        text: "Straciłem / straciłam na wadze więcej niż 4 kg.",
        score: 2,
      },
      {
        text: "Straciłem / straciłam na wadze więcej niż 6 kg.",
        score: 3,
      },
    ],
  },
  {
    id: 20,
    q: "Pytanie 20",
    a: [
      { text: "Nie martwię się o swoje zdrowie bardziej niż zawsze.", score: 0 },
      { text: "Martwię się swoimi dolegliwościami, mam rozstrój żołądka, zaparcie, bóle.", score: 1 },
      {
        text: "Stan mojego zdrowia bardzo mnie martwi, często o tym myślę.",
        score: 2,
      },
      {
        text: "Tak bardzo martwię się o swoje zdrowie, że nie mogę o niczym innym myśleć.",
        score: 3,
      },
    ],
  },
  {
    id: 21,
    q: "Pytanie 21",
    a: [
      { text: "Moje zainteresowania seksualne nie uległy zmianom.", score: 0 },
      { text: "Jestem mniej zainteresowany sprawami płci (seksu).", score: 1 },
      {
        text: "Problemy płciowe wyraźnie mniej mnie interesują.",
        score: 2,
      },
      {
        text: "Utraciłem / utraciłam wszelkie zainteresowanie sprawami seksu.",
        score: 3,
      },
    ],
  },
];

// Set start
let start = true;
let selected = "";
//   let enabled = false;

// Set test result variable
let testResult = 0;

// Getting the question
const question = document.getElementById("question");

// Getting the options
const opt0 = document.getElementById("option0");
const opt1 = document.getElementById("option1");
const opt2 = document.getElementById("option2");
const opt3 = document.getElementById("option3");

// Getting opitions div

const opt0div = document.getElementById("first-option");
const opt1div = document.getElementById("second-option");
const opt2div = document.getElementById("third-option");
const opt3div = document.getElementById("fourth-option");

// Setting all unchecked
const opt0checked = document.getElementById("opt0");
const opt1checked = document.getElementById("opt1");
const opt2checked = document.getElementById("opt2");
const opt3checked = document.getElementById("opt3");

// Selection rules

opt0div.addEventListener("click", () => {
  console.log("clicked!");
  if (!opt0div.classList.contains("option-active")) {
    opt0div.classList.add("option-active");
    opt1div.classList.remove("option-active");
    opt2div.classList.remove("option-active");
    opt3div.classList.remove("option-active");
    opt0checked.checked = true;
    opt1checked.checked = false;
    opt2checked.checked = false;
    opt3checked.checked = false;
    selected = Questions[id].a[0].score;
  }
});
opt1div.addEventListener("click", () => {
  console.log("clicked 2!");
  if (!opt1div.classList.contains("option-active")) {
    opt0div.classList.remove("option-active");
    opt1div.classList.add("option-active");
    opt2div.classList.remove("option-active");
    opt3div.classList.remove("option-active");
    opt0checked.checked = false;
    opt1checked.checked = true;
    opt2checked.checked = false;
    opt3checked.checked = false;
    selected = Questions[id].a[1].score;
  }
});
opt2div.addEventListener("click", () => {
  console.log("clicked 3!");
  if (!opt2div.classList.contains("option-active")) {
    opt0div.classList.remove("option-active");
    opt1div.classList.remove("option-active");
    opt2div.classList.add("option-active");
    opt3div.classList.remove("option-active");
    opt0checked.checked = false;
    opt1checked.checked = false;
    opt2checked.checked = true;
    opt3checked.checked = false;
    selected = Questions[id].a[2].score;
  }
});
opt3div.addEventListener("click", () => {
  console.log("clicked 4!");
  if (!opt3div.classList.contains("option-active")) {
    opt0div.classList.remove("option-active");
    opt1div.classList.remove("option-active");
    opt2div.classList.remove("option-active");
    opt3div.classList.add("option-active");
    opt0checked.checked = false;
    opt1checked.checked = false;
    opt2checked.checked = false;
    opt3checked.checked = true;
    selected = Questions[id].a[3].score;
  }
});

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
  if (id == 20) {
    next.innerText = "Zakończ test";
  }
  if (id == 21) {
    finish = true;
    testResult = testResult + selected;
    const result = document.getElementsByClassName("result");
    result[0].innerText = "Twój wynik testu to: " + testResult;
  }

  if (id < 21) {
    testResult = testResult + selected;
    console.log(testResult);
    iterate(id);
    id++;
  }
  // Remove checked
  opt0checked.checked = false;
  opt1checked.checked = false;
  opt2checked.checked = false;
  opt3checked.checked = false;

  // Remove styling for checked
  opt0div.classList.remove("option-active");
  opt1div.classList.remove("option-active");
  opt2div.classList.remove("option-active");
  opt3div.classList.remove("option-active");

  // selected = "";
  // enabled = false;
  // next.classList.remove("next-active");
  // }
});
