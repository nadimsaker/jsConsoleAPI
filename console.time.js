const startTime = Date.now();
for (let i = 1; i < 100; i++) {
  console.log(i * i);
}
const timeDiff = Date.now() - startTime;
console.log(timeDiff);

console.time("Time");
for (let i = 1; i < 100; i++) {
  console.log(i * i);
}
console.timeEnd("Time");
