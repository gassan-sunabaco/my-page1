// DOM要素を取得
const greetBtn = document.getElementById('greetBtn');
const greetMessage = document.getElementById('greetMessage');

// ボタンがクリックされたらメッセージを表示
greetBtn.addEventListener('click', () => {
  greetMessage.textContent = 'おはこんばんにちは∼';
});
