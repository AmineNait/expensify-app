const promise = new Promise((resolve, reject) => {
  resolve("This is my resolve data");
});

promise.then((data) => {
  console.log(data);
});
