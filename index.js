const countText = document.querySelector("#count");
const incButton = document.querySelector("#inc");
const decButton = document.querySelector("#dec");
const resButton = document.querySelector("#reset");

function counter() {
  let count = 0;

  const increment = () => {
    count++;
    writeCount(); // Güncellenen değeri ekrana yansıt
  };

  const decrement = () => {
    if (count > 0) {
      count--;
    } else {
      alert("Count is already 0");
    }
    writeCount(); // Güncellenen değeri ekrana yansıt
  };

  const reset = () => {
    count = 0;
    writeCount(); // Güncellenen değeri ekrana yansıt
  };

  const getCount = () => count; // Mevcut sayacı almak için

  return { increment, decrement, reset, getCount };
}

const { increment, decrement, reset, getCount } = counter();

const writeCount = () => {
  countText.textContent = `Count: ${getCount()}`;
};

incButton.addEventListener("click", increment);
decButton.addEventListener("click", decrement);
resButton.addEventListener("click", reset);
window.addEventListener("DOMContentLoaded", writeCount);

/*
const sum = (args) => {
  return args[0] + args[1];
};

const sum2 = (val) => {
  return val * 2;
};
const sum3 = (a) => {
  return a * 5;
};

const compose = (...fns) => {
  console.log(fns, "fns");

  return (...args) => {
    console.log(args, "args");

    return fns.reduce((acc, fn) => {
      console.log(acc, "acc");
      return fn(acc);
    }, args);
  };
};

const task = compose(sum, sum2, sum3);

console.log(task(2, 5));
 */
