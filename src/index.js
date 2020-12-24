const button = document.getElementById("addBtn")
const lists = document.getElementById("lists")

button.addEventListener("click", async () => {
  // データのやり取り
  // const res = await fetch("https://jsonplaceholder.typicode.com/todos")
  // const todos = await res.json()
  // console.log(todos);

  // DOM操作
  const list = document.createElement("li") // createでHTMLタグを生成
  list.innerText = "foo" // liに文字を入れる
  console.log(list)
  // lists.appendChild(list) // olにli追加
})

