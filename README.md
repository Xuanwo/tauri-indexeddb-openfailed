# Tauri Indexed Database Open Failed


```js
let db;
const request = indexedDB.open("MyTestDatabase");
request.onerror = (event) => {
    console.error("Why didn't you allow my web app to use IndexedDB?!");
};
request.onsuccess = (event) => {
    console.info("Load success");
    db = event.target.result;
};
```
