let backgroundColor = '#ffffff';
let mainColor = '#000000';

const bg = Pickr.create({
  el: '.bg-color-picker',
  theme: 'nano', // or 'monolith', or 'nano'

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

bg.on('change', (color) => {
  backgroundColor = color.toHEXA().toString();
  clear();
  draw();
});

const main = Pickr.create({
  el: '.main-color-picker',
  theme: 'nano', // or 'monolith', or 'nano'

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

main.on('change', (color) => {
  mainColor = color.toHEXA().toString();
  clear();
  draw();
});
