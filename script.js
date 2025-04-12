const quotes = [
  "野球は90%がメンタルで、残りの50%がフィジカルだ。（ヨギ・ベラ）",
  "努力しない才能より、努力する才能の方が価値がある。（ベーブ・ルース）",
  "どんな失敗をしても、諦めなければ負けではない。（デレク・ジーター）"
];

function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}
