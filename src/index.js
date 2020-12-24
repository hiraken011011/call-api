// DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

// メソッド
function addNameList(user) {
  const list = document.createElement("li"); // createでHTMLタグを生成
  list.innerText = user.name + '(' + user.email + ')'; // liに文字を入れる
  lists.appendChild(list); // olにli追加
}  

async function getUsers(){
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
}

async function listUsers() {
  const users = await getUsers();

  users.forEach(addNameList)
}

// イベント
window.addEventListener("load", listUsers);
button.addEventListener("click", listUsers);