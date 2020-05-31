const value1 = document.querySelector("#value1");
const value2 = document.querySelector("#value2");
const ivalue1 = document.querySelector("#input-value1");
const ivalue2 = document.querySelector("#input-value2");

let values = [value1.value, value2.value];
ivalue1.value = value1.value;
ivalue2.value = value2.value;

value1.addEventListener("change", (e) => {
  values[0] = e.target.value;
  ivalue1.value = e.target.value;
  clear();
  draw();
});

value2.addEventListener("change", (e) => {
  values[1] = e.target.value;
  ivalue2.value = e.target.value;
  clear();
  draw();
});

ivalue1.addEventListener("change", (e) => {
  value1.value = e.target.value;
  value1.dispatchEvent(new Event("change"));
});
ivalue2.addEventListener("change", (e) => {
  value2.value = e.target.value;
  value2.dispatchEvent(new Event("change"));
});
