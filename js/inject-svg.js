var svg = document.getElementsByTagName('svg')[0];
var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path');
newElement.setAttribute("d","M31.68 40.43Q28.55 52.45 18.07 52.45Q11.57 52.45 7.77 47.04Q4.32 42.08 4.32 33.96Q4.32 26.19 7.56 21.23Q11.36 15.47 18 15.47Q30.97 15.47 31.82 35.05L9.74 35.05Q10.16 47.64 18.14 47.64Q24.47 47.64 26.05 40.43L31.68 40.43M26.05 30.45Q24.89 20.29 18 20.29Q11.36 20.29 9.95 30.45L26.05 30.45Z");
newElement.style.stroke = "#000";
newElement.style.strokeWidth = "5px";
svg.appendChild(newElement);
