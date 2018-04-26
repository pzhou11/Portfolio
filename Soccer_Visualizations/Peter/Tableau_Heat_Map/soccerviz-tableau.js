function initViz() {
  var containerDiv = document.getElementById("tableauviz"),
    url =
      "https://public.tableau.com/views/Heat_map/Dashboard1?:embed=y&:display_count=yes";

  var viz = new tableau.Viz(containerDiv, url);
}
