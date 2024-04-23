# Tauri Indexed Database Open Failed

Start app:

```shell
cargo tauri dev
```

Run js in console:

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
