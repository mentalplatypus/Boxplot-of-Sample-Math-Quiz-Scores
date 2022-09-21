var c = document.getElementById("boxplot");

// draw axis lines
var axis = c.getContext("2d");

axis.beginPath();
axis.moveTo(100,200);
axis.lineTo(700,200);
axis.stroke();

// draw axis labels
var label = c.getContext("2d");

label.fillText("70",90,220);
label.fillText("71",110,220);
label.fillText("72",130,220);
label.fillText("73",150,220);
label.fillText("74",170,220);
label.fillText("75",190,220);
label.fillText("76",210,220);
label.fillText("77",230,220);
label.fillText("78",250,220);
label.fillText("79",270,220);
label.fillText("80",290,220);
label.fillText("81",310,220);
label.fillText("82",330,220);
label.fillText("83",350,220);
label.fillText("84",370,220);
label.fillText("85",390,220);
label.fillText("86",410,220);
label.fillText("87",430,220);
label.fillText("88",450,220);
label.fillText("89",470,220);
label.fillText("90",490,220);
label.fillText("91",510,220);
label.fillText("92",530,220);
label.fillText("93",550,220);
label.fillText("94",570,220);
label.fillText("95",590,220);
label.fillText("96",610,220);
label.fillText("97",630,220);
label.fillText("98",650,220);
label.fillText("99",670,220);
label.fillText("100",690,220);

label.fillText("Scores",375,250);


// draw boxplot
var box = c.getContext("2d");

box.beginPath();
box.rect(255,100,300,66);
box.moveTo(455,100)
box.lineTo(455,166)
box.moveTo(555,133)
box.lineTo(595,133)
box.moveTo(135,133)
box.lineTo(255,133)
box.stroke();