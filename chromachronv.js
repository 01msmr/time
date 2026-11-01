let isIOS;
let isStandalone;
let showMini = false;

let l, c, d, r;
const IOS_Y_OFFSET = 8;
let percentage = 0.9;
let arcInnerScale = 0.9675;
let colors = [
  "#F5E642", // 12: Gelb
  "#C8D444", // 1:  Gelbgrün
  "#7FC242", // 2:  Grün
  "#42A87A", // 3:  Türkisgrün
  "#3BAAB2", // 4:  Türkis
  "#3F6FBA", // 5:  Blau
  "#5A3D9A", // 6:  Violett
  "#8B3D8A", // 7:  Lila
  "#C43C6A", // 8:  Pink
  "#E84832", // 9:  Rot
  "#F07832", // 10: Orange
  "#F2A842", // 11: Hellorange
];

function mousePressed() {
  showMini = !showMini;
}

function setup() {
  isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (/Mac/.test(navigator.userAgent) && navigator.maxTouchPoints > 1);
  isStandalone = !!window.navigator.standalone;
  let sw = isIOS ? screen.width : windowWidth;
  let sh = isIOS ? screen.height : windowHeight;
  l = min(sw, sh);
  c = l / 2;
  d = l * percentage;
  r = c * percentage;
  createCanvas(windowWidth, windowHeight);
  stroke(86);
  angleMode(DEGREES);
}

function windowResized() {
  let sw = isIOS ? screen.width : windowWidth;
  let sh = isIOS ? screen.height : windowHeight;
  l = min(sw, sh);
  c = l / 2;
  d = l * percentage;
  r = c * percentage;
  resizeCanvas(windowWidth, windowHeight);
}

function sector(no, color) {
  push();
  fill(color);
  rotate(30 * no - 90);
  arc(0, 0, d, d, 0, 30);
  pop();
}


// ─────────────────────────────────────────────────────────────────
// Helix-Daten aus helix1a.ai (Rhino)
// X gespiegelt + auf Radius 1.0 normiert, 330°
// ─────────────────────────────────────────────────────────────────

const helixSegs = [
  [[ 0.0205, -0.0322], [ 0.0125, -0.0775], [-0.0193, -0.1094]],
  [[-0.0272, -0.1174], [-0.0367, -0.1246], [-0.0475, -0.1305]],
  [[-0.0582, -0.1365], [-0.0703, -0.1412], [-0.0833, -0.1444]],
  [[-0.0963, -0.1475], [-0.1103, -0.1492], [-0.1249, -0.1490]],
  [[-0.1395, -0.1489], [-0.1547, -0.1469], [-0.1701, -0.1429]],
  [[-0.1856, -0.1390], [-0.2011, -0.1331], [-0.2164, -0.1252]],
  [[-0.2317, -0.1172], [-0.2467, -0.1072], [-0.2609, -0.0952]],
  [[-0.2752, -0.0833], [-0.2886, -0.0692], [-0.3008, -0.0533]],
  [[-0.3130, -0.0375], [-0.3241, -0.0198], [-0.3333, -0.0004]],
  [[-0.3426,  0.0190], [-0.3502,  0.0400], [-0.3557,  0.0622]],
  [[-0.3612,  0.0845], [-0.3646,  0.1081], [-0.3656,  0.1325]],
  [[-0.3666,  0.1569], [-0.3652,  0.1822], [-0.3612,  0.2078]],
  [[-0.3571,  0.2334], [-0.3504,  0.2594], [-0.3409,  0.2851]],
  [[-0.3315,  0.3109], [-0.3192,  0.3364], [-0.3042,  0.3612]],
  [[-0.2891,  0.3859], [-0.2713,  0.4099], [-0.2508,  0.4325]],
  [[-0.2303,  0.4551], [-0.2071,  0.4763], [-0.1815,  0.4956]],
  [[-0.1559,  0.5148], [-0.1278,  0.5321], [-0.0976,  0.5469]],
  [[-0.0674,  0.5617], [-0.0352,  0.5740], [-0.0013,  0.5833]],
  [[ 0.0325,  0.5927], [ 0.0681,  0.5990], [ 0.1046,  0.6020]],
  [[ 0.1412,  0.6051], [ 0.1789,  0.6048], [ 0.2170,  0.6009]],
  [[ 0.2551,  0.5970], [ 0.2936,  0.5895], [ 0.3318,  0.5782]],
  [[ 0.3700,  0.5670], [ 0.4079,  0.5519], [ 0.4449,  0.5332]],
  [[ 0.4818,  0.5145], [ 0.5177,  0.4920], [ 0.5519,  0.4659]],
  [[ 0.5860,  0.4397], [ 0.6184,  0.4100], [ 0.6484,  0.3770]],
  [[ 0.6783,  0.3439], [ 0.7057,  0.3075], [ 0.7300,  0.2683]],
  [[ 0.7543,  0.2291], [ 0.7755,  0.1870], [ 0.7928,  0.1425]],
  [[ 0.8102,  0.0981], [ 0.8239,  0.0513], [ 0.8333,  0.0028]],
  [[ 0.8428, -0.0456], [ 0.8479, -0.0956], [ 0.8485, -0.1465]],
  [[ 0.8491, -0.1974], [ 0.8452, -0.2492], [ 0.8363, -0.3009]],
  [[ 0.8276, -0.3527], [ 0.8140, -0.4044], [ 0.7956, -0.4553]],
  [[ 0.7771, -0.5062], [ 0.7539, -0.5561], [ 0.7259, -0.6042]],
  [[ 0.6978, -0.6523], [ 0.6651, -0.6986], [ 0.6279, -0.7422]],
  [[ 0.5907, -0.7858], [ 0.5492, -0.8266], [ 0.5036, -0.8639]],
];

function drawSpiral(spiralRadius, h, m, s) {
  let progress = (m * 60 + s) / 3600;
  let totalRotation = h * 30 + progress * 390 + 60;

  push();
  rotate(totalRotation);

  let sc = spiralRadius - 2;
  let sc2 = spiralRadius - 4;

  // 1. Schwarze Helix — jedes Segment einzeln als bezier()
  stroke(0);
  strokeWeight(4);
  noFill();
  let px = 0, py = 0;
  for (let [[x1, y1], [x2, y2], [ex, ey]] of helixSegs) {
    bezier(
      px*sc,    py*sc,
      x1*sc,    y1*sc,
      x2*sc,    y2*sc,
      ex*sc,    ey*sc
    );
    px = ex; py = ey;
  }

  // 2. Weißer Glanz
  stroke(255);
  strokeWeight(2);
  px = 0.002; py = 0.002;
  for (let [[x1, y1], [x2, y2], [ex, ey]] of helixSegs) {
    bezier(
      px*sc2,  py*sc2,
      x1*sc2,  y1*sc2,
      x2*sc2,  y2*sc2,
      ex*sc2,  ey*sc2
    );
    px = ex; py = ey;
  }

  pop();
}


function drawClock(x, y, scaleFactor, h, m, s) {
  push();
  translate(x, y);
  scale(scaleFactor);

  stroke(255);
  strokeWeight(2);
  fill(244);
  circle(0, 0, d);

  for (let i = 0; i < 12; i++) {
    sector(i, colors[i]);
  }

  rotate(-90);
  drawSpiral(r * arcInnerScale, h, m, s);

  fill(0, 0, 0);
  noStroke();

  drawingContext.shadowColor = 'rgba(0,0,0,0.75)';
  drawingContext.shadowBlur = 20;
  drawingContext.shadowOffsetX = 6;
  drawingContext.shadowOffsetY = 8;

  push();
  rotate(h * 30 + m * 0.5);
  arc(0, 0, d * arcInnerScale, d * arcInnerScale, 0, 330);
  pop();

  drawingContext.shadowColor = 'transparent';
  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;

  // Weißer Glanzpunkt — FEST, rotiert nicht mit
  let glanzR = d * arcInnerScale / 2;
  let gx = glanzR * 0.45;
  let gy = -glanzR * 0.15;

  let grad = drawingContext.createRadialGradient(gx, gy, 0, gx, gy, glanzR * 0.6);
  grad.addColorStop(0, 'rgba(255,255,255,0.24)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');

  let arcStartDeg = h * 30 + m * 0.5;
  let arcS = arcStartDeg * Math.PI / 180;
  let arcE = (arcStartDeg + 330) * Math.PI / 180;

  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.moveTo(0, 0);
  drawingContext.arc(0, 0, glanzR, arcS, arcE, false);
  drawingContext.closePath();
  drawingContext.clip();
  drawingContext.fillStyle = grad;
  drawingContext.fillRect(-glanzR, -glanzR, glanzR * 2, glanzR * 2);
  drawingContext.restore();

  // Skala an der vorderen Fensterkante
  push();
  rotate(h * 30 + m * 0.5 + 270);
  for (let i = 1; i <= 11; i++) {
    let t = i / 12;
    let rad = t * r * arcInnerScale;
    let len = i % 3 === 0 ? r * 0.04 : r * 0.025;
    let sw  = i % 3 === 0 ? r * 0.008 : r * 0.005;
    stroke(128);
    strokeWeight(sw);
    line(-1, rad, -len, rad);
  }
  pop();

  pop();
}


function draw() {
  background(100);

  let offsetX = (windowWidth - l) / 2;
  let offsetY = (windowHeight - l) / 2 + (isIOS ? IOS_Y_OFFSET : 0);

  drawClock(offsetX + c, offsetY + c, 1, hour() % 12, minute(), second());

  if (showMini) {
    let factor = 3 / 16;
    let miniR = (l * factor) / 2;
    let totalMinutes = map(mouseX, 0, windowWidth, 0, 12 * 60);
    let mh = floor(totalMinutes / 60) % 12;
    let mm = floor(totalMinutes % 60);
    let miniOffset = (isIOS && isStandalone) ? 10 : 0;
    drawClock(windowWidth - miniR - 10 - miniOffset, miniR + 10 + miniOffset, factor, mh, mm, 0);
  }
}
