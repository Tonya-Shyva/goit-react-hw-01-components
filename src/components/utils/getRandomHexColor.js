export default function getRandomHexColor() {
  const bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return bgColor;
}
