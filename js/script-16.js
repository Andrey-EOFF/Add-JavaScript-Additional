const colors = [
    { hex: "#f44336", rgb: "244,67,54" },
    { hex: "#2196f3", rgb: "33,150,243" },
    { hex: "#4caf50", rgb: "76,175,80" },
    { hex: "#ffeb3b", rgb: "255,235,59" },
  ];
  
console.log(colors);

const hexColors = [];
const rgbColors = [];

for (let color of colors) {

    hexColors.push(color.hex);
    console.log(hexColors)
    rgbColors.push(color.rgb);
    console.log(rgbColors)
   
}