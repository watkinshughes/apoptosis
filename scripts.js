const canvas = document.getElementById("canvas");
const shape1 = document.getElementById("shape1");
const shape2 = document.getElementById("shape2");

const shapes = [shape1, shape2];

const colors = [
  "#84372D",
  "#70766F",
  "#868980",
  "#ABAEA3",
  "#A5706D",
  "#67382D",
  "#8E7D70",
  "#8C6057",
  "#9C9388",
  "#BCBEB4",
  "#9F5145",
  "#A07265",
  "#9C9388",
  "#B36E5B",
  "#CFAB99",
  "#A46C5D"
];

const randRange = (min, max) => {
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
};

canvas.width = 1200;
canvas.height = 1200;

const images = [];
for (let i = 0; i <= 5; i++) {
  const image = {
    xlocation: randRange(15, 1000),
    ylocation: randRange(15, 1000),
    scale: randRange(5, 400),
    alpha: randRange(25, 100) * 0.1,
    rotation: randRange(0, 180),
    color: colors[Math.floor(Math.random() * colors.length)],
    shape: shapes[Math.floor(Math.random() * shapes.length)]
  };
  images.push(image);
}
debugger;
images.map(item => {
  const container = document.getElementById("container");
  container.appendChild(item.shape);
});