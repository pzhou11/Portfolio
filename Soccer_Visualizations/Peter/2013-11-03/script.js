var w = 500,
  h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ["First Half", "Second Half"];

//Data
var data = [
  [
    { Player: "1", axis: "0 - 3 m/s (Walk/Jog)", value: 0.43 },
    { Player: "1", axis: "3 - 5 m/s (Faster Pace)", value: 0.40 },
    { Player: "1", axis: "5+ m/s (Sprinting)", value: 0.18 },
    { Player: "2", axis: "0 - 3 m/s (Walk/Jog)", value: 0.30 },
    { Player: "2", axis: "3 - 5 m/s (Faster Pace)", value: 0.18 },
    { Player: "2", axis: "5+ m/s (Fast/Sprinting)", value: 0.03 },
    { Player: "3", axis: "0 - 3 m/s (Walk/Jog)", value: 0.100 },
    { Player: "3", axis: "3 - 5 m/s (Faster Pace)", value: 0.0 },
    { Player: "3", axis: "5+ m/s (Fast/Sprinting)", value: 0.0 },
    { Player: "4", axis: "0 - 3 m/s (Walk/Jog)", value: 0.0 },
    { Player: "4", axis: "3 - 5 m/s (Faster Pace)", value: 0.0 },
    { Player: "4", axis: "5+ m/s (Fast/Sprinting)", value: 0.0 },
    { Player: "5", axis: "0 - 3 m/s (Walk/Jog)", value: 0.31 },
    { Player: "5", axis: "3 - 5 m/s (Faster Pace)", value: 0.18 },
    { Player: "5", axis: "5+ m/s (Fast/Sprinting)", value: 0.03 },
    { Player: "6", axis: "0 - 3 m/s (Walk/Jog)", value: 0.09 },
    { Player: "6", axis: "3 - 5 m/s (Faster Pace)", value: 0.04 },
    { Player: "6", axis: "5+ m/s (Fast/Sprinting)", value: 0.0 },
    { Player: "7", axis: "0 - 3 m/s (Walk/Jog)", value: 0.41 },
    { Player: "7", axis: "3 - 5 m/s (Faster Pace)", value: 0.24 },
    { Player: "7", axis: "5+ m/s (Fast/Sprinting)", value: 0.07 },
    { Player: "8", axis: "0 - 3 m/s (Walk/Jog)", value: 0.30 },
    { Player: "8", axis: "3 - 5 m/s (Faster Pace)", value: 0.17 },
    { Player: "8", axis: "5+ m/s (Fast/Sprinting)", value: 0.04 },
    { Player: "9", axis: "0 - 3 m/s (Walk/Jog)", value: 0.26 },
    { Player: "9", axis: "3 - 5 m/s (Faster Pace)", value: 0.17 },
    { Player: "9", axis: "5+ m/s (Fast/Sprinting)", value: 0.05 },
    { Player: "10", axis: "0 - 3 m/s (Walk/Jog)", value: 0.31 },
    { Player: "10", axis: "3 - 5 m/s (Faster Pace)", value: 0.22 },
    { Player: "10", axis: "5+ m/s (Fast/Sprinting)", value: 0.07 },
    { Player: "11", axis: "0 - 3 m/s (Walk/Jog)", value: 0.26 },
    { Player: "11", axis: "3 - 5 m/s (Faster Pace)", value: 0.07 },
    { Player: "11", axis: "5+ m/s (Fast/Sprinting)", value: 0.0 },
    { Player: "12", axis: "0 - 3 m/s (Walk/Jog)", value: 0.48 },
    { Player: "12", axis: "3 - 5 m/s (Faster Pace)", value: 0.0 },
    { Player: "12", axis: "5+ m/s (Fast/Sprinting)", value: 0.0 },
    { Player: "13", axis: "0 - 3 m/s (Walk/Jog)", value: 0.30 },
    { Player: "13", axis: "3 - 5 m/s (Faster Pace)", value: 0.16 },
    { Player: "13", axis: "5+ m/s (Fast/Sprinting)", value: 0.04 },
    { Player: "14", axis: "0 - 3 m/s (Walk/Jog)", value: 0.25 },
    { Player: "14", axis: "3 - 5 m/s (Faster Pace)", value: 0.21 },
    { Player: "14", axis: "5+ m/s (Fast/Sprinting)", value: 0.05 },
    { Player: "15", axis: "0 - 3 m/s (Walk/Jog)", value: 0.30 },
    { Player: "15", axis: "3 - 5 m/s (Faster Pace)", value: 0.16 },
    { Player: "15", axis: "5+ m/s (Fast/Sprinting)", value: 0.05 },
    { Player: "Team Total", axis: "0 - 3 m/s (Walk/Jog)", value: 0.29 },
    { Player: "Team Total", axis: "3 - 5 m/s (Faster Pace)", value: 0.19 },
    { Player: "Team Total", axis: "5+ m/s (Fast/Sprinting)", value: 0.05 }
  ],
  [
    { Player: "1", axis: "0 - 3 m/s (Walk/Jog)", value: 0.0 },
    { Player: "1", axis: "3 - 5 m/s (Faster Pace)", value: 0.0 },
    { Player: "1", axis: "5+ m/s (Fast/Sprinting)", value: 0.0 },
    { Player: "2", axis: "0 - 3 m/s (Walk/Jog)", value: 0.31 },
    { Player: "2", axis: "3 - 5 m/s (Faster Pace)", value: 0.14 },
    { Player: "2", axis: "5+ m/s (Fast/Sprinting)", value: 0.03 },
    { Player: "3", axis: "0 - 3 m/s (Walk/Jog)", value: 0.0 },
    { Player: "3", axis: "3 - 5 m/s (Faster Pace)", value: 0.0 },
    { Player: "3", axis: "5+ m/s (Fast/Sprinting)", value: 0.0 },
    { Player: "4", axis: "0 - 3 m/s (Walk/Jog)", value: 0.98 },
    { Player: "4", axis: "3 - 5 m/s (Faster Pace)", value: 0.01 },
    { Player: "4", axis: "5+ m/s (Fast/Sprinting)", value: 0.01 },
    { Player: "5", axis: "0 - 3 m/s (Walk/Jog)", value: 0.29 },
    { Player: "5", axis: "3 - 5 m/s (Faster Pace)", value: 0.16 },
    { Player: "5", axis: "5+ m/s (Fast/Sprinting)", value: 0.03 },
    { Player: "6", axis: "0 - 3 m/s (Walk/Jog)", value: 0.41 },
    { Player: "6", axis: "3 - 5 m/s (Faster Pace)", value: 0.33 },
    { Player: "6", axis: "5+ m/s (Fast/Sprinting)", value: 0.13 },
    { Player: "7", axis: "0 - 3 m/s (Walk/Jog)", value: 0.14 },
    { Player: "7", axis: "3 - 5 m/s (Faster Pace)", value: 0.10 },
    { Player: "7", axis: "5+ m/s (Fast/Sprinting)", value: 0.03 },
    { Player: "8", axis: "0 - 3 m/s (Walk/Jog)", value: 0.28 },
    { Player: "8", axis: "3 - 5 m/s (Faster Pace)", value: 0.16 },
    { Player: "8", axis: "5+ m/s (Fast/Sprinting)", value: 0.06 },
    { Player: "9", axis: "0 - 3 m/s (Walk/Jog)", value: 0.28 },
    { Player: "9", axis: "3 - 5 m/s (Faster Pace)", value: 0.18 },
    { Player: "9", axis: "5+ m/s (Fast/Sprinting)", value: 0.06 },
    { Player: "10", axis: "0 - 3 m/s (Walk/Jog)", value: 0.22 },
    { Player: "10", axis: "3 - 5 m/s (Faster Pace)", value: 0.14 },
    { Player: "10", axis: "5+ m/s (Fast/Sprinting)", value: 0.04 },
    { Player: "11", axis: "0 - 3 m/s (Walk/Jog)", value: 0.53 },
    { Player: "11", axis: "3 - 5 m/s (Faster Pace)", value: 0.12 },
    { Player: "11", axis: "5+ m/s (Fast/Sprinting)", value: 0.02 },
    { Player: "12", axis: "0 - 3 m/s (Walk/Jog)", value: 52 },
    { Player: "12", axis: "3 - 5 m/s (Faster Pace)", value: 0.0 },
    { Player: "12", axis: "5+ m/s (Fast/Sprinting)", value: 0.0 },
    { Player: "13", axis: "0 - 3 m/s (Walk/Jog)", value: 0.33 },
    { Player: "13", axis: "3 - 5 m/s (Faster Pace)", value: 0.14 },
    { Player: "13", axis: "5+ m/s (Fast/Sprinting)", value: 0.02 },
    { Player: "14", axis: "0 - 3 m/s (Walk/Jog)", value: 0.25 },
    { Player: "14", axis: "3 - 5 m/s (Faster Pace)", value: 0.19 },
    { Player: "14", axis: "5+ m/s (Fast/Sprinting)", value: 0.05 },
    { Player: "15", axis: "0 - 3 m/s (Walk/Jog)", value: 0.29 },
    { Player: "15", axis: "3 - 5 m/s (Faster Pace)", value: 0.16 },
    { Player: "15", axis: "5+ m/s (Fast/Sprinting)", value: 0.04 },
    { Player: "Team Total", axis: "0 - 3 m/s (Walk/Jog)", value: 0.27 },
    { Player: "Team Total", axis: "3 - 5 m/s (Faster Pace)", value: 0.16 },
    { Player: "Team Total", axis: "5+ m/s (Fast/Sprinting)", value: 0.04 }
  ]
];



var tt = function(a) {
  var newPlayer = [];

  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].length; j++) {
      if (data[i][j].Player == a) {
        newPlayer.push(data[i][j]);
      }
    }
  }
  return [
    [newPlayer[0], newPlayer[1], newPlayer[2]],
    [newPlayer[3], newPlayer[4], newPlayer[5]]
  ];
};

//Initize graph
var d = tt("Team Total");
//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 6,
  ExtraWidthX: 300
};
RadarChart.draw("#chart", d, mycfg);

  ////////////////////////////////////////////
  /////////// Initiate legend ////////////////
  ////////////////////////////////////////////

  var svg = d3
    .select("#body")
    .selectAll("svg")
    .append("svg")
    .attr("width", w + 300)
    .attr("height", h);

  //Create the title for the legend
  var text = svg
    .append("text")
    .attr("class", "title")
    .attr("transform", "translate(90,0)")
    .attr("x", w - 70)
    .attr("y", 10)
    .attr("font-size", "12px")
    .attr("fill", "#404040")
    .text("% of the energy spent at different speeds");

  //Initiate Legend
  var legend = svg
    .append("g")
    .attr("class", "legend")
    .attr("height", 100)
    .attr("width", 200)
    .attr("transform", "translate(90,20)");
  //Create colour squares
  legend
    .selectAll("rect")
    .data(LegendOptions)
    .enter()
    .append("rect")
    .attr("x", w - 65)
    .attr("y", function(d, i) {
      return i * 20;
    })
    .attr("width", 10)
    .attr("height", 10)
    .style("fill", function(d, i) {
      return colorscale(i);
    });
  //Create text next to squares
  legend
    .selectAll("text")
    .data(LegendOptions)
    .enter()
    .append("text")
    .attr("x", w - 52)
    .attr("y", function(d, i) {
      return i * 20 + 9;
    })
    .attr("font-size", "11px")
    .attr("fill", "#737373")
    .text(function(d) {
      return d;
    });

    //On selection
d3.select("#inds").on("change", function() {
  var sect = document.getElementById("inds");
  var section = sect.options[sect.selectedIndex].value;

  var d = tt(section);

  //Options for the Radar chart, other than default
  var mycfg = {
    w: w,
    h: h,
    maxValue: 0.6,
    levels: 6,
    ExtraWidthX: 300
  };

  //Call function to draw the Radar chart
  //Will expect that data is in %'s
  RadarChart.draw("#chart", d, mycfg);

  ////////////////////////////////////////////
  /////////// Initiate legend ////////////////
  ////////////////////////////////////////////

  var svg = d3
    .select("#body")
    .selectAll("svg")
    .append("svg")
    .attr("width", w + 300)
    .attr("height", h);

  //Create the title for the legend
  var text = svg
    .append("text")
    .attr("class", "title")
    .attr("transform", "translate(90,0)")
    .attr("x", w - 70)
    .attr("y", 10)
    .attr("font-size", "12px")
    .attr("fill", "#404040")
    .text("% of the energy spent at different speeds");

  //Initiate Legend
  var legend = svg
    .append("g")
    .attr("class", "legend")
    .attr("height", 100)
    .attr("width", 200)
    .attr("transform", "translate(90,20)");
  //Create colour squares
  legend
    .selectAll("rect")
    .data(LegendOptions)
    .enter()
    .append("rect")
    .attr("x", w - 65)
    .attr("y", function(d, i) {
      return i * 20;
    })
    .attr("width", 10)
    .attr("height", 10)
    .style("fill", function(d, i) {
      return colorscale(i);
    });
  //Create text next to squares
  legend
    .selectAll("text")
    .data(LegendOptions)
    .enter()
    .append("text")
    .attr("x", w - 52)
    .attr("y", function(d, i) {
      return i * 20 + 9;
    })
    .attr("font-size", "11px")
    .attr("fill", "#737373")
    .text(function(d) {
      return d;
    });
});
