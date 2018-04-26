var w = 500,
  h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ["First Half", "Second Half"];

//Data
var data = [
  [
    { Player: "1", axis: "0 - 1 m/s (Barely Moving)", value: 0.1767 },
    { Player: "1", axis: "1 - 3 m/s (Jog)", value: 0.471 },
    { Player: "1", axis: "3 - 5 m/s (Faster Pace)", value: 0.2695 },
    {
      Player: "1",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.0827
    },
    { Player: "2", axis: "0 - 1 m/s (Barely Moving)", value: 0.2392 },
    { Player: "2", axis: "1 - 3 m/s (Jog)", value: 0.5547 },
    { Player: "2", axis: "3 - 5 m/s (Faster Pace)", value: 0.1834 },
    {
      Player: "2",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.0227
    },
    { Player: "3", axis: "0 - 1 m/s (Barely Moving)", value: 0.9588 },
    { Player: "3", axis: "1 - 3 m/s (Jog)", value: 0.0412 },
    { Player: "3", axis: "3 - 5 m/s (Faster Pace)", value: 0.0 },
    { Player: "3", axis: "5+ m/s (Almost Sprinting to Sprinting)", value: 0.0 },
    { Player: "4", axis: "0 - 1 m/s (Barely Moving)", value: 0.0 },
    { Player: "4", axis: "1 - 3 m/s (Jog)", value: 0.0 },
    { Player: "4", axis: "3 - 5 m/s (Faster Pace)", value: 0.0 },
    { Player: "4", axis: "5+ m/s (Almost Sprinting to Sprinting)", value: 0.0 },
    { Player: "5", axis: "0 - 1 m/s (Barely Moving)", value: 0.1844 },
    { Player: "5", axis: "1 - 3 m/s (Jog)", value: 0.5453 },
    { Player: "5", axis: "3 - 5 m/s (Faster Pace)", value: 0.2269 },
    {
      Player: "5",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.0435
    },
    { Player: "6", axis: "0 - 1 m/s (Barely Moving)", value: 0.6199 },
    { Player: "6", axis: "1 - 3 m/s (Jog)", value: 0.2769 },
    { Player: "6", axis: "3 - 5 m/s (Faster Pace)", value: 0.0996 },
    {
      Player: "6",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.0036
    },
    { Player: "7", axis: "0 - 1 m/s (Barely Moving)", value: 0.217 },
    { Player: "7", axis: "1 - 3 m/s (Jog)", value: 0.5189 },
    { Player: "7", axis: "3 - 5 m/s (Faster Pace)", value: 0.2164 },
    {
      Player: "7",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.0477
    },
    { Player: "8", axis: "0 - 1 m/s (Barely Moving)", value: 0.2348 },
    { Player: "8", axis: "1 - 3 m/s (Jog)", value: 0.5512 },
    { Player: "8", axis: "3 - 5 m/s (Faster Pace)", value: 0.1798 },
    {
      Player: "8",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.0343
    },
    { Player: "9", axis: "0 - 1 m/s (Barely Moving)", value: 0.2463 },
    { Player: "9", axis: "1 - 3 m/s (Jog)", value: 0.5205 },
    { Player: "9", axis: "3 - 5 m/s (Faster Pace)", value: 0.195 },
    {
      Player: "9",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.0381
    },
    { Player: "10", axis: "0 - 1 m/s (Barely Moving)", value: 0.1851 },
    { Player: "10", axis: "1 - 3 m/s (Jog)", value: 0.4985 },
    { Player: "10", axis: "3 - 5 m/s (Faster Pace)", value: 0.2483 },
    {
      Player: "10",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.0681
    },
    { Player: "11", axis: "0 - 1 m/s (Barely Moving)", value: 0.5682 },
    { Player: "11", axis: "1 - 3 m/s (Jog)", value: 0.3486 },
    { Player: "11", axis: "3 - 5 m/s (Faster Pace)", value: 0.0825 },
    {
      Player: "11",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.0007
    },
    { Player: "12", axis: "0 - 1 m/s (Barely Moving)", value: 0.0 },
    { Player: "12", axis: "1 - 3 m/s (Jog)", value: 0.0 },
    { Player: "12", axis: "3 - 5 m/s (Faster Pace)", value: 0.0 },
    {
      Player: "12",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.0
    },
    { Player: "13", axis: "0 - 1 m/s (Barely Moving)", value: 0.2048 },
    { Player: "13", axis: "1 - 3 m/s (Jog)", value: 0.5609 },
    { Player: "13", axis: "3 - 5 m/s (Faster Pace)", value: 0.1981 },
    {
      Player: "13",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.0362
    },
    { Player: "14", axis: "0 - 1 m/s (Barely Moving)", value: 0.1913 },
    { Player: "14", axis: "1 - 3 m/s (Jog)", value: 0.5238 },
    { Player: "14", axis: "3 - 5 m/s (Faster Pace)", value: 0.2353 },
    {
      Player: "14",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.0495
    },
    { Player: "15", axis: "0 - 1 m/s (Barely Moving)", value: 0.2202 },
    { Player: "15", axis: "1 - 3 m/s (Jog)", value: 0.5325 },
    { Player: "15", axis: "3 - 5 m/s (Faster Pace)", value: 0.1974 },
    {
      Player: "15",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.0499
    },
    { Player: "Team Total", axis: "0 - 1 m/s (Barely Moving)", value: 0.2283 },
    { Player: "Team Total", axis: "1 - 3 m/s (Jog)", value: 0.5188 },
    { Player: "Team Total", axis: "3 - 5 m/s (Faster Pace)", value: 0.2084 },
    {
      Player: "Team Total",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.0446
    }
  ],
  [
    { Player: "1", axis: "0 - 1 m/s (Barely Moving)", value: 0.0 },
    { Player: "1", axis: "1 - 3 m/s (Jog)", value: 0.0 },
    { Player: "1", axis: "3 - 5 m/s (Faster Pace)", value: 0.0 },
    { Player: "1", axis: "5+ m/s (Almost Sprinting to Sprinting)", value: 0.0 },
    { Player: "2", axis: "0 - 1 m/s (Barely Moving)", value: 0.2352 },
    { Player: "2", axis: "1 - 3 m/s (Jog)", value: 0.5963 },
    { Player: "2", axis: "3 - 5 m/s (Faster Pace)", value: 0.1466 },
    {
      Player: "2",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.022
    },
    { Player: "3", axis: "0 - 1 m/s (Barely Moving)", value: 0.0 },
    { Player: "3", axis: "1 - 3 m/s (Jog)", value: 0.0 },
    { Player: "3", axis: "3 - 5 m/s (Faster Pace)", value: 0.0 },
    { Player: "3", axis: "5+ m/s (Almost Sprinting to Sprinting)", value: 0.0 },
    { Player: "4", axis: "0 - 1 m/s (Barely Moving)", value: 0.9564 },
    { Player: "4", axis: "1 - 3 m/s (Jog)", value: 0.0242 },
    { Player: "4", axis: "3 - 5 m/s (Faster Pace)", value: 0.0079 },
    {
      Player: "4",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.0115
    },
    { Player: "5", axis: "0 - 1 m/s (Barely Moving)", value: 0.201 },
    { Player: "5", axis: "1 - 3 m/s (Jog)", value: 0.5726 },
    { Player: "5", axis: "3 - 5 m/s (Faster Pace)", value: 0.1927 },
    {
      Player: "5",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.0337
    },
    { Player: "6", axis: "0 - 1 m/s (Barely Moving)", value: 0.2545 },
    { Player: "6", axis: "1 - 3 m/s (Jog)", value: 0.4482 },
    { Player: "6", axis: "3 - 5 m/s (Faster Pace)", value: 0.2243 },
    {
      Player: "6",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.073
    },
    { Player: "7", axis: "0 - 1 m/s (Barely Moving)", value: 0.3118 },
    { Player: "7", axis: "1 - 3 m/s (Jog)", value: 0.4602 },
    { Player: "7", axis: "3 - 5 m/s (Faster Pace)", value: 0.1775 },
    {
      Player: "7",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.0504
    },
    { Player: "8", axis: "0 - 1 m/s (Barely Moving)", value: 0.2025 },
    { Player: "8", axis: "1 - 3 m/s (Jog)", value: 0.5699 },
    { Player: "8", axis: "3 - 5 m/s (Faster Pace)", value: 0.1765 },
    {
      Player: "8",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.051
    },
    { Player: "9", axis: "0 - 1 m/s (Barely Moving)", value: 0.2337 },
    { Player: "9", axis: "1 - 3 m/s (Jog)", value: 0.5346 },
    { Player: "9", axis: "3 - 5 m/s (Faster Pace)", value: 0.1912 },
    {
      Player: "9",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.0405
    },
    { Player: "10", axis: "0 - 1 m/s (Barely Moving)", value: 0.1894 },
    { Player: "10", axis: "1 - 3 m/s (Jog)", value: 0.5258 },
    { Player: "10", axis: "3 - 5 m/s (Faster Pace)", value: 0.2312 },
    {
      Player: "10",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.0536
    },
    { Player: "11", axis: "0 - 1 m/s (Barely Moving)", value: 0.4888 },
    { Player: "11", axis: "1 - 3 m/s (Jog)", value: 0.4025 },
    { Player: "11", axis: "3 - 5 m/s (Faster Pace)", value: 0.095 },
    {
      Player: "11",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.0136
    },
    { Player: "12", axis: "0 - 1 m/s (Barely Moving)", value: 0.0 },
    { Player: "12", axis: "1 - 3 m/s (Jog)", value: 0.0 },
    { Player: "12", axis: "3 - 5 m/s (Faster Pace)", value: 0.0 },
    {
      Player: "12",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.0
    },
    { Player: "13", axis: "0 - 1 m/s (Barely Moving)", value: 0.2192 },
    { Player: "13", axis: "1 - 3 m/s (Jog)", value: 0.5924 },
    { Player: "13", axis: "3 - 5 m/s (Faster Pace)", value: 0.1665 },
    {
      Player: "13",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.22
    },
    { Player: "14", axis: "0 - 1 m/s (Barely Moving)", value: 0.1958 },
    { Player: "14", axis: "1 - 3 m/s (Jog)", value: 0.5366 },
    { Player: "14", axis: "3 - 5 m/s (Faster Pace)", value: 0.2165 },
    {
      Player: "14",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.051
    },
    { Player: "15", axis: "0 - 1 m/s (Barely Moving)", value: 0.2169 },
    { Player: "15", axis: "1 - 3 m/s (Jog)", value: 0.5498 },
    { Player: "15", axis: "3 - 5 m/s (Faster Pace)", value: 0.1973 },
    {
      Player: "15",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.036
    },
    { Player: "Team Total", axis: "0 - 1 m/s (Barely Moving)", value: 0.2378 },
    { Player: "Team Total", axis: "1 - 3 m/s (Jog)", value: 0.5348 },
    { Player: "Team Total", axis: "3 - 5 m/s (Faster Pace)", value: 0.1865 },
    {
      Player: "Team Total",
      axis: "5+ m/s (Almost Sprinting to Sprinting)",
      value: 0.0409
    }
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
    [newPlayer[0], newPlayer[1], newPlayer[2], newPlayer[3]],
    [newPlayer[4], newPlayer[5], newPlayer[6], newPlayer[7]]
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
