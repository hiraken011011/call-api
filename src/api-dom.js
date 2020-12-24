async function callApi(){ // 非同期関数
  const res = await fetch("https://jsonplaceholder.typicode.com/todos") // APIからデータ取得
  const todos = await res.json() // json形式に変換
  console.log(todos)
}

callApi()

/*
・fetchはXMLHttpRequestの代替
*/