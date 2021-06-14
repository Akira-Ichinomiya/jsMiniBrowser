const quotes = [
  {
    quote: "오늘 저녁은 삼겹살 냉면 쌀밥",
    author: "이희수",
  },
  {
    quote: "라면 짜장면 김밥",
    author: "이희수",
  },
  {
    quote: "오늘은 6월 11일",
    author: "이희수",
  },
  {
    quote: "너무 졸리면 자면 된다",
    author: "이희수",
  },
  {
    quote: "에르고휴먼 v2 프로 의자 사고싶다",
    author: "이희수",
  },
  {
    quote: "아이패드 빨리좀 팔려라",
    author: "이희수",
  },
  {
    quote: "12.9인치로 다시 사야지",
    author: "이희수",
  },
  {
    quote: "괜히 11인치 샀네",
    author: "이희수",
  },
  {
    quote: "역시 디스플레이는 커야 좋다",
    author: "이희수",
  },
  {
    quote: "반박시 문재인",
    author: "이희수",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const aysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = aysQuote.quote;
author.innerText = aysQuote.author;
