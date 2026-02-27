console.log("hello world ");

setTimeout(() => {
  console.log("this is secoind ");
}, 2000);

// Promise.resolve().then(() => console.log("this is first "));
const mypromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("this is first ");
  }, 0);
});

mypromise.then((res) => console.log(res));
