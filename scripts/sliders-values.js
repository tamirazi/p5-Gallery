const value1 = document.querySelector("#value1");
const value2 = document.querySelector("#value2");
const value3 = document.querySelector("#value3");
const value4 = document.querySelector("#value4");
const ivalue1 = document.querySelector("#input-value1");
const ivalue2 = document.querySelector("#input-value2");
const ivalue3 = document.querySelector("#input-value3");
const ivalue4 = document.querySelector("#input-value4");

let values = [Number(value1.value), Number(value2.value)];
ivalue1.value = Number(value1.value);
ivalue2.value = Number(value2.value);

value1.addEventListener("change", (e) => {
  values[0] = Number(e.target.value);
  ivalue1.value = Number(e.target.value);
  clear();
  setup();
  draw();
});

value2.addEventListener("change", (e) => {
  values[1] = Number(e.target.value);
  ivalue2.value = Number(e.target.value);
  clear();
  setup();
  draw();
});

ivalue1.addEventListener("change", (e) => {
  value1.value = Number(e.target.value);
  value1.dispatchEvent(new Event("change"));
});
ivalue2.addEventListener("change", (e) => {
  value2.value = Number(e.target.value);
  value2.dispatchEvent(new Event("change"));
});

if (value3 && value4) {
  values.push(Number(value3.value), Number(value4.value));
  ivalue3.value = Number(value3.value);
  ivalue4.value = Number(value4.value);

  value3.addEventListener("change", (e) => {
    values[2] = Number(e.target.value);
    ivalue3.value = Number(e.target.value);
    clear();
    setup();
    draw();
  });

  value4.addEventListener("change", (e) => {
    values[3] = Number(e.target.value);
    ivalue4.value = Number(e.target.value);
    clear();
    setup();
    draw();
  });

  ivalue3.addEventListener("change", (e) => {
    value3.value = Number(e.target.value);
    value3.dispatchEvent(new Event("change"));
  });
  ivalue4.addEventListener("change", (e) => {
    value4.value = Number(e.target.value);
    value4.dispatchEvent(new Event("change"));
  });
}
