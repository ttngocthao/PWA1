let deferredPrompt;
//check if browser supports promise
if (!window.Promise) {
  window.Promise = Promise; //this is the promise from polyfill
}
//check if service worker is supported
//navigator means browser here
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/serviceWorker.js").then(function () {
    console.log("service worker registered!");
  });
} else {
  console.log("testing");
}

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  return false;
});
const baseURL = "https://httpbin.org/ip";
// const promise = new Promise(function(resolve,reject){
//   setTimeout(function(){
//    // resolve('This is called inside set timeout func')
//    reject({status:500,msg:'this is reject which is called inside setTimeout'})
//    // console.log('')
//   },3000)
// })
fetch("https://httpbin.org/ip")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

fetch("https://httpbin.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  mode: "cors", //other option is no-cors
  body: JSON.stringify({
    msg: "Does this work?",
  }),
})
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// promise.then((res)=>{
//   console.log(res)
// }).catch(err=>{
//   console.log(err)
// })
