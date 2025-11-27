deleteTimeoutBtn = document.getElementById('deleteTimeout');
deleteIntervalBtn = document.getElementById('deleteInterval');

const hello = () => {
    console.log("Hello")
}

const timeout1 = setTimeout(hello, 4000);

const timeout2 = setTimeout(() => {
    console.log("second timeout")
}, 3000)
count = 0;

const interval = setInterval(() => {
    console.log(count)
    count++
}, 2000)

deleteTimeoutBtn.addEventListener('click', () => {
  clearTimeout(timeout2);
  clearTimeout(timeout1);
});
deleteIntervalBtn.addEventListener('click', () => {
  clearInterval(interval);
});


