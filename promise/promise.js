function sayHello() {
  return new Promise((resolve, reject) => {
    // const hello = "Hello Hello";
    resolve("hello!!");
    // reject(new Error());
  });
}

// sayHello()
//   .then((resolvedData) => {
//     console.log(resolvedData);
//     return resolvedData;
//   })
//   .then((resolvedData) => {
//     console.log(resolvedData);
//     return resolvedData;
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function test() {
  const hello1 = await sayHello();
  console.log(hello1);
}

test();
