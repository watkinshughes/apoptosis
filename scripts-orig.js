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

const shapes = ["shape1.svg", "shape2.svg"];

const randRange = (min, max) => {
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
};
const canvas = document.getElementById("canvas");
canvas.width = 1200;
canvas.height = 1200;
const context = canvas.getContext("2d");

const images = [];
for (let i = 0; i <= 125; i++) {
  const image = {
    image: new Image(),
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

images.map(item => {
  item.image.onload = () => {
    context.drawImage(
      item.image,
      item.xlocation,
      item.ylocation,
      item.scale,
      item.scale
    );
  };
  item.image.src = item.shape;
  // item.image.style.fill = `${item.color} !important`;
  // item.image.style.transform = `rotate(${item.rotation}deg) !important`;
  // item.image.style.opacity = item.alpha;
});
