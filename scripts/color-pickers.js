let backgroundColor = "#fffafa";
let mainColor = "#333333";

const bg = Pickr.create({
  el: ".bg-color-picker",
  theme: "nano", // or 'monolith', or 'nano'
  default: "#fffafa",
  components: {
    // Main components
    preview: true,
    opacity: true,
    hue: true,

    // Input / output Options
    interaction: {
      hex: true,
      rgba: true,
      input: true,
      clear: true,
      save: true,
    },
  },
});

bg.on("change", (color) => {
  backgroundColor = color.toHEXA().toString();
  clear();
  setup();
  draw();
}).on("save", (color, instance) => {
  bg.hide();
});

const main = Pickr.create({
  el: ".main-color-picker",
  theme: "nano", // or 'monolith', or 'nano'
  default: "#333333",
  components: {
    // Main components
    preview: true,
    opacity: true,
    hue: true,

    // Input / output Options
    interaction: {
      hex: true,
      rgba: true,
      input: true,
      clear: true,
      save: true,
    },
  },
});

main
  .on("change", (color) => {
    mainColor = color.toHEXA().toString();
    clear();
    setup();
    draw();
  })
  .on("save", (color, instance) => {
    main.hide();
  });
