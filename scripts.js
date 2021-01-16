const container = document.getElementById("container");
const shapes = Array.from(document.querySelectorAll("svg"));
const paths = Array.from(document.querySelectorAll("svg path"));
const images = [];
const colors = [
  "#333333",
  "#FFFFFF",
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

for (let i = 0; i <= 120; i++) {
  const image = {
    xlocation: randRange(15, 500),
    ylocation: randRange(15, 500),
    scale: randRange(0.1, 1.0),
    alpha: randRange(0.25, 1.0),
    rotation: randRange(0, 180),
    shape: shapes[Math.floor(Math.random() * shapes.length)]
  };
  images.push(image);
}

images.map((item, index) => {
  item.shape.id = `shape-${index}`;
  item.shape.style = `left: ${item.xlocation};
    top: ${item.ylocation};
    opacity: ${item.alpha};
    fill: ${item.color};
    transform: scale(${item.scale});
    transform: rotate(${item.rotation})`;
  container.appendChild(item.shape);
});

paths.map(item => {
  item.style.fill = colors[Math.floor(Math.random() * colors.length)];
});
