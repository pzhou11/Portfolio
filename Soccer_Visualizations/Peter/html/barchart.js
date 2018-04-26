var uu = function(a, b, c) {
  var svg = d3.select("svg"),
      margin = {top: 30, right: 20, bottom: 30, left: 250},
      width = +svg.attr("width") - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom,
      g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var x0 = d3.scaleBand()
      .rangeRound([0, width])
      .paddingInner(0.1);

  var x1 = d3.scaleBand()
      .padding(0.05);

  var y = d3.scaleLinear()
      .rangeRound([height, 0]);

  var z = d3.scaleOrdinal(d3.schemeCategory10)

  d3.csv("data/bar_data.csv", function(d, i, columns) {
    for (var i = 1, n = columns.length; i < n; ++i) d[columns[i]] = +d[columns[i]];
    return d;
  }, function(error, data) {
    if (error) throw error;

    var keys = [a+"-"+c, b+"-"+c];

    x0.domain(data.map(function(d) { return d.Category; }));
    x1.domain(keys).rangeRound([0, x0.bandwidth()]);
    y.domain([0, d3.max(data, function(d) { return d3.max(keys, function(key) { return d[key]; }); })]).nice();

    g.append("g")
      .selectAll("g")
      .data(data)
      .enter().append("g")
        .attr("transform", function(d) { return "translate(" + x0(d.Category) + ",0)"; })
      .selectAll("rect")
      .data(function(d) { return keys.map(function(key) { return {key: key, value: d[key]}; }); })
      .enter().append("rect")
        .attr("x", function(d) { return x1(d.key); })
        .attr("y", function(d) { return y(d.value); })
        .attr("width", x1.bandwidth())
        .attr("height", function(d) { return height - y(d.value); })
        .attr("fill", function(d) { return z(d.key); })
        .style("fill-opacity", 0.75);

    g.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x0));

    g.append("g")
        .attr("class", "axis")
        .call(d3.axisLeft(y).ticks(null, "s"))
      .append("text")
        .attr("x", 2)
        .attr("y", y(y.ticks().pop()) + 0.5)
        .attr("dy", "0.32em")
        .attr("fill", "#000")
        .attr("font-weight", "bold")
        .attr("text-anchor", "start")

    var legend = g.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .attr("text-anchor", "end")
      .selectAll("g")
      .data(keys.slice())
      .enter().append("g")
        .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

    legend.append("rect")
        .attr("x", width - 19)
        .attr("width", 19)
        .attr("height", 19)
        .attr("fill", z)
        .style("fill-opacity", 0.75);

    legend.append("text")
        .attr("x", width - 24)
        .attr("y", 9.5)
        .attr("dy", "0.32em")
        .text(function(d) { return "Player/Team: " + d.substring(0,d.indexOf("-", 5)); });

  });
}

//initial bar graph
uu("Team-110313", "Team-110713", 18)

//on change
d3.select("#inds").on("change", function() {
  var sect = document.getElementById("inds");
  var section = sect.options[sect.selectedIndex].value;
  var sect2 = document.getElementById("inds2");
  var section2 = sect2.options[sect2.selectedIndex].value;
  var speed_sect = document.getElementById("speed");
  var speed_section = Number(speed_sect.options[speed_sect.selectedIndex].value);
  
  d3.selectAll('svg > g > *').remove();
  
  uu(section, section2, speed_section)

});

//on change
d3.select("#inds2").on("change", function() {
  var sect = document.getElementById("inds");
  var section = sect.options[sect.selectedIndex].value;
  var sect2 = document.getElementById("inds2");
  var section2 = sect2.options[sect2.selectedIndex].value;
  var speed_sect = document.getElementById("speed");
  var speed_section = Number(speed_sect.options[speed_sect.selectedIndex].value);
  
  d3.selectAll('svg > g > *').remove();
  
  uu(section, section2, speed_section)
});

//on change
d3.select("#speed").on("change", function() {
  var sect = document.getElementById("inds");
  var section = sect.options[sect.selectedIndex].value;
  var sect2 = document.getElementById("inds2");
  var section2 = sect2.options[sect2.selectedIndex].value;
  var speed_sect = document.getElementById("speed");
  var speed_section = Number(speed_sect.options[speed_sect.selectedIndex].value);
  
  d3.selectAll('svg > g > *').remove();
  
  uu(section, section2, speed_section)
});