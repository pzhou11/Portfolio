var w = 500,
  h = 500;

var colorscale = d3.scaleOrdinal(d3.schemeCategory10);

//Legend titles
var LegendOptions = ["Player/Team: Team Total 11/03/17", "Player/Team: Team Total 11/07/17"];

//Data
var data = [
  [
    { Player: "1-110313", axis: "0 - 15 mins", value: 0.40 },
    { Player: "1-110313", axis: "15 - 30 mins", value: 0.40 },
    { Player: "1-110313", axis: "30 - 45 mins", value: 0.20 },
    { Player: "1-110313", axis: "45 - 60 mins", value: 0.0 },
    { Player: "1-110313", axis: "60 - 75 mins", value: 0.0 },
    { Player: "1-110313", axis: "75 - 90 mins", value: 0.0 },
    { Player: "2-110313", axis: "0 - 15 mins", value: 0.17 },
    { Player: "2-110313", axis: "15 - 30 mins", value: 0.14 },
    { Player: "2-110313", axis: "30 - 45 mins", value: 0.19 },
    { Player: "2-110313", axis: "45 - 60 mins", value: 0.18 },
    { Player: "2-110313", axis: "60 - 75 mins", value: 0.18 },
    { Player: "2-110313", axis: "75 - 90 mins", value: 0.14 },
    { Player: "5-110313", axis: "0 - 15 mins", value: 0.19 },
    { Player: "5-110313", axis: "15 - 30 mins", value: 0.17 },
    { Player: "5-110313", axis: "30 - 45 mins", value: 0.17 },
    { Player: "5-110313", axis: "45 - 60 mins", value: 0.17 },
    { Player: "5-110313", axis: "60 - 75 mins", value: 0.17 },
    { Player: "5-110313", axis: "75 - 90 mins", value: 0.14 },
    { Player: "6-110313", axis: "0 - 15 mins", value: 0.0 },
    { Player: "6-110313", axis: "15 - 30 mins", value: 0.08 },
    { Player: "6-110313", axis: "30 - 45 mins", value: 0.11 },
    { Player: "6-110313", axis: "45 - 60 mins", value: 0.22 },
    { Player: "6-110313", axis: "60 - 75 mins", value: 0.31 },
    { Player: "6-110313", axis: "75 - 90 mins", value: 0.28 },
    { Player: "7-110313", axis: "0 - 15 mins", value: 0.23 },
    { Player: "7-110313", axis: "15 - 30 mins", value: 0.24 },
    { Player: "7-110313", axis: "30 - 45 mins", value: 0.25 },
    { Player: "7-110313", axis: "45 - 60 mins", value: 0.21 },
    { Player: "7-110313", axis: "60 - 75 mins", value: 0.06 },
    { Player: "7-110313", axis: "75 - 90 mins", value: 0.0 },
    { Player: "8-110313", axis: "0 - 15 mins", value: 0.19 },
    { Player: "8-110313", axis: "15 - 30 mins", value: 0.15 },
    { Player: "8-110313", axis: "30 - 45 mins", value: 0.17 },
    { Player: "8-110313", axis: "45 - 60 mins", value: 0.17 },
    { Player: "8-110313", axis: "60 - 75 mins", value: 0.20 },
    { Player: "8-110313", axis: "75 - 90 mins", value: 0.13 },
    { Player: "9-110313", axis: "0 - 15 mins", value: 0.16 },
    { Player: "9-110313", axis: "15 - 30 mins", value: 0.14 },
    { Player: "9-110313", axis: "30 - 45 mins", value: 0.19 },
    { Player: "9-110313", axis: "45 - 60 mins", value: 0.19 },
    { Player: "9-110313", axis: "60 - 75 mins", value: 0.17 },
    { Player: "9-110313", axis: "75 - 90 mins", value: 0.14 },
    { Player: "10-110313", axis: "0 - 15 mins", value: 0.20 },
    { Player: "10-110313", axis: "15 - 30 mins", value: 0.19 },
    { Player: "10-110313", axis: "30 - 45 mins", value: 0.18 },
    { Player: "10-110313", axis: "45 - 60 mins", value: 0.21 },
    { Player: "10-110313", axis: "60 - 75 mins", value: 0.21 },
    { Player: "10-110313", axis: "75 - 90 mins", value: 0.01 },
    { Player: "11-110313", axis: "0 - 15 mins", value: 0.0 },
    { Player: "11-110313", axis: "15 - 30 mins", value: 0.0 },
    { Player: "11-110313", axis: "30 - 45 mins", value: 0.33 },
    { Player: "11-110313", axis: "45 - 60 mins", value: 0.21 },
    { Player: "11-110313", axis: "60 - 75 mins", value: 0.21 },
    { Player: "11-110313", axis: "75 - 90 mins", value: 0.25 },
    { Player: "13-110313", axis: "0 - 15 mins", value: 0.16 },
    { Player: "13-110313", axis: "15 - 30 mins", value: 0.15 },
    { Player: "13-110313", axis: "30 - 45 mins", value: 0.17 },
    { Player: "13-110313", axis: "45 - 60 mins", value: 0.18 },
    { Player: "13-110313", axis: "60 - 75 mins", value: 0.19 },
    { Player: "13-110313", axis: "75 - 90 mins", value: 0.15 },
    { Player: "14-110313", axis: "0 - 15 mins", value: 0.18 },
    { Player: "14-110313", axis: "15 - 30 mins", value: 0.16 },
    { Player: "14-110313", axis: "30 - 45 mins", value: 0.17 },
    { Player: "14-110313", axis: "45 - 60 mins", value: 0.18 },
    { Player: "14-110313", axis: "60 - 75 mins", value: 0.18 },
    { Player: "14-110313", axis: "75 - 90 mins", value: 0.13 },
    { Player: "15-110313", axis: "0 - 15 mins", value: 0.18 },
    { Player: "15-110313", axis: "15 - 30 mins", value: 0.16 },
    { Player: "15-110313", axis: "30 - 45 mins", value: 0.17 },
    { Player: "15-110313", axis: "45 - 60 mins", value: 0.17 },
    { Player: "15-110313", axis: "60 - 75 mins", value: 0.16 },
    { Player: "15-110313", axis: "75 - 90 mins", value: 0.17 },
    { Player: "Team-110313", axis: "0 - 15 mins", value: 0.18 },
    { Player: "Team-110313", axis: "15 - 30 mins", value: 0.16 },
    { Player: "Team-110313", axis: "30 - 45 mins", value: 0.18 },
    { Player: "Team-110313", axis: "45 - 60 mins", value: 0.18 },
    { Player: "Team-110313", axis: "60 - 75 mins", value: 0.18 },
    { Player: "Team-110313", axis: "75 - 90 mins", value: 0.12 },
    { Player: "2-110713", axis: "0 - 15 mins", value: 0.19 },
    { Player: "2-110713", axis: "15 - 30 mins", value: 0.16 },
    { Player: "2-110713", axis: "30 - 45 mins", value: 0.21 },
    { Player: "2-110713", axis: "45 - 60 mins", value: 0.09 },
    { Player: "2-110713", axis: "60 - 75 mins", value: 0.17 },
    { Player: "2-110713", axis: "75 - 90 mins", value: 0.17 },
    { Player: "6-110713", axis: "0 - 15 mins", value: 0.16 },
    { Player: "6-110713", axis: "15 - 30 mins", value: 0.15 },
    { Player: "6-110713", axis: "30 - 45 mins", value: 0.19 },
    { Player: "6-110713", axis: "45 - 60 mins", value: 0.10 },
    { Player: "6-110713", axis: "60 - 75 mins", value: 0.24 },
    { Player: "6-110713", axis: "75 - 90 mins", value: 0.16 },
    { Player: "7-110713", axis: "0 - 15 mins", value: 0.27 },
    { Player: "7-110713", axis: "15 - 30 mins", value: 0.20 },
    { Player: "7-110713", axis: "30 - 45 mins", value: 0.20 },
    { Player: "7-110713", axis: "45 - 60 mins", value: 0.16 },
    { Player: "7-110713", axis: "60 - 75 mins", value: 0.17 },
    { Player: "7-110713", axis: "75 - 90 mins", value: 0.0 },
    { Player: "8-110713", axis: "0 - 15 mins", value: 0.12 },
    { Player: "8-110713", axis: "15 - 30 mins", value: 0.19 },
    { Player: "8-110713", axis: "30 - 45 mins", value: 0.28 },
    { Player: "8-110713", axis: "45 - 60 mins", value: 0.10 },
    { Player: "8-110713", axis: "60 - 75 mins", value: 0.23 },
    { Player: "8-110713", axis: "75 - 90 mins", value: 0.07 },
    { Player: "10-110713", axis: "0 - 15 mins", value: 0.20 },
    { Player: "10-110713", axis: "15 - 30 mins", value: 0.17 },
    { Player: "10-110713", axis: "30 - 45 mins", value: 0.25 },
    { Player: "10-110713", axis: "45 - 60 mins", value: 0.11 },
    { Player: "10-110713", axis: "60 - 75 mins", value: 0.09 },
    { Player: "10-110713", axis: "75 - 90 mins", value: 0.18 },
    { Player: "11-110713", axis: "0 - 15 mins", value: 0.19 },
    { Player: "11-110713", axis: "15 - 30 mins", value: 0.16 },
    { Player: "11-110713", axis: "30 - 45 mins", value: 0.20 },
    { Player: "11-110713", axis: "45 - 60 mins", value: 0.10 },
    { Player: "11-110713", axis: "60 - 75 mins", value: 0.22 },
    { Player: "11-110713", axis: "75 - 90 mins", value: 0.13 },
    { Player: "12-110713", axis: "0 - 15 mins", value: 0.21 },
    { Player: "12-110713", axis: "15 - 30 mins", value: 0.17 },
    { Player: "12-110713", axis: "30 - 45 mins", value: 0.22 },
    { Player: "12-110713", axis: "45 - 60 mins", value: 0.12 },
    { Player: "12-110713", axis: "60 - 75 mins", value: 0.09 },
    { Player: "12-110713", axis: "75 - 90 mins", value: 0.18 },
    { Player: "13-110713", axis: "0 - 15 mins", value: 0.18 },
    { Player: "13-110713", axis: "15 - 30 mins", value: 0.15 },
    { Player: "13-110713", axis: "30 - 45 mins", value: 0.20 },
    { Player: "13-110713", axis: "45 - 60 mins", value: 0.10 },
    { Player: "13-110713", axis: "60 - 75 mins", value: 0.20 },
    { Player: "13-110713", axis: "75 - 90 mins", value: 0.16 },
    { Player: "15-110713", axis: "0 - 15 mins", value: 0.31 },
    { Player: "15-110713", axis: "15 - 30 mins", value: 0.20 },
    { Player: "15-110713", axis: "30 - 45 mins", value: 0.31 },
    { Player: "15-110713", axis: "45 - 60 mins", value: 0.16 },
    { Player: "15-110713", axis: "60 - 75 mins", value: 0.02 },
    { Player: "15-110713", axis: "75 - 90 mins", value: 0.0 },
    { Player: "16-110713", axis: "0 - 15 mins", value: 0.21 },
    { Player: "16-110713", axis: "15 - 30 mins", value: 0.18 },
    { Player: "16-110713", axis: "30 - 45 mins", value: 0.24 },
    { Player: "16-110713", axis: "45 - 60 mins", value: 0.11 },
    { Player: "16-110713", axis: "60 - 75 mins", value: 0.20 },
    { Player: "16-110713", axis: "75 - 90 mins", value: 0.05 },
    { Player: "Team-110713", axis: "0 - 15 mins", value: 0.20 },
    { Player: "Team-110713", axis: "15 - 30 mins", value: 0.17 },
    { Player: "Team-110713", axis: "30 - 45 mins", value: 0.24 },
    { Player: "Team-110713", axis: "45 - 60 mins", value: 0.11 },
    { Player: "Team-110713", axis: "60 - 75 mins", value: 0.16 },
    { Player: "Team-110713", axis: "75 - 90 mins", value: 0.11 }
  ],
  [
    { Player: "1-110313", axis: "0 - 15 mins", value: 0.42 },
    { Player: "1-110313", axis: "15 - 30 mins", value: 0.35 },
    { Player: "1-110313", axis: "30 - 45 mins", value: 0.23 },
    { Player: "1-110313", axis: "45 - 60 mins", value: 0.0 },
    { Player: "1-110313", axis: "60 - 75 mins", value: 0.0 },
    { Player: "1-110313", axis: "75 - 90 mins", value: 0.0 },
    { Player: "2-110313", axis: "0 - 15 mins", value: 0.21 },
    { Player: "2-110313", axis: "15 - 30 mins", value: 0.17 },
    { Player: "2-110313", axis: "30 - 45 mins", value: 0.18 },
    { Player: "2-110313", axis: "45 - 60 mins", value: 0.15 },
    { Player: "2-110313", axis: "60 - 75 mins", value: 0.13 },
    { Player: "2-110313", axis: "75 - 90 mins", value: 0.16 },
    { Player: "5-110313", axis: "0 - 15 mins", value: 0.19 },
    { Player: "5-110313", axis: "15 - 30 mins", value: 0.17 },
    { Player: "5-110313", axis: "30 - 45 mins", value: 0.19 },
    { Player: "5-110313", axis: "45 - 60 mins", value: 0.16 },
    { Player: "5-110313", axis: "60 - 75 mins", value: 0.16 },
    { Player: "5-110313", axis: "75 - 90 mins", value: 0.13 },
    { Player: "6-110313", axis: "0 - 15 mins", value: 0.0 },
    { Player: "6-110313", axis: "15 - 30 mins", value: 0.06 },
    { Player: "6-110313", axis: "30 - 45 mins", value: 0.05 },
    { Player: "6-110313", axis: "45 - 60 mins", value: 0.21 },
    { Player: "6-110313", axis: "60 - 75 mins", value: 0.36 },
    { Player: "6-110313", axis: "75 - 90 mins", value: 0.31 },
    { Player: "7-110313", axis: "0 - 15 mins", value: 0.26 },
    { Player: "7-110313", axis: "15 - 30 mins", value: 0.19 },
    { Player: "7-110313", axis: "30 - 45 mins", value: 0.26 },
    { Player: "7-110313", axis: "45 - 60 mins", value: 0.21 },
    { Player: "7-110313", axis: "60 - 75 mins", value: 0.08 },
    { Player: "7-110313", axis: "75 - 90 mins", value: 0.0 },
    { Player: "8-110313", axis: "0 - 15 mins", value: 0.18 },
    { Player: "8-110313", axis: "15 - 30 mins", value: 0.16 },
    { Player: "8-110313", axis: "30 - 45 mins", value: 0.17 },
    { Player: "8-110313", axis: "45 - 60 mins", value: 0.14 },
    { Player: "8-110313", axis: "60 - 75 mins", value: 0.18 },
    { Player: "8-110313", axis: "75 - 90 mins", value: 0.17 },
    { Player: "9-110313", axis: "0 - 15 mins", value: 0.19 },
    { Player: "9-110313", axis: "15 - 30 mins", value: 0.15 },
    { Player: "9-110313", axis: "30 - 45 mins", value: 0.16 },
    { Player: "9-110313", axis: "45 - 60 mins", value: 0.16 },
    { Player: "9-110313", axis: "60 - 75 mins", value: 0.15 },
    { Player: "9-110313", axis: "75 - 90 mins", value: 0.19 },
    { Player: "10-110313", axis: "0 - 15 mins", value: 0.21 },
    { Player: "10-110313", axis: "15 - 30 mins", value: 0.18 },
    { Player: "10-110313", axis: "30 - 45 mins", value: 0.20 },
    { Player: "10-110313", axis: "45 - 60 mins", value: 0.19 },
    { Player: "10-110313", axis: "60 - 75 mins", value: 0.21 },
    { Player: "10-110313", axis: "75 - 90 mins", value: 0.0 },
    { Player: "11-110313", axis: "0 - 15 mins", value: 0.0 },
    { Player: "11-110313", axis: "15 - 30 mins", value: 0.0 },
    { Player: "11-110313", axis: "30 - 45 mins", value: 0.36 },
    { Player: "11-110313", axis: "45 - 60 mins", value: 0.25 },
    { Player: "11-110313", axis: "60 - 75 mins", value: 0.30 },
    { Player: "11-110313", axis: "75 - 90 mins", value: 0.09 },
    { Player: "13-110313", axis: "0 - 15 mins", value: 0.18 },
    { Player: "13-110313", axis: "15 - 30 mins", value: 0.18 },
    { Player: "13-110313", axis: "30 - 45 mins", value: 0.17 },
    { Player: "13-110313", axis: "45 - 60 mins", value: 0.18 },
    { Player: "13-110313", axis: "60 - 75 mins", value: 0.14 },
    { Player: "13-110313", axis: "75 - 90 mins", value: 0.15 },
    { Player: "14-110313", axis: "0 - 15 mins", value: 0.18 },
    { Player: "14-110313", axis: "15 - 30 mins", value: 0.16 },
    { Player: "14-110313", axis: "30 - 45 mins", value: 0.19 },
    { Player: "14-110313", axis: "45 - 60 mins", value: 0.16 },
    { Player: "14-110313", axis: "60 - 75 mins", value: 0.17 },
    { Player: "14-110313", axis: "75 - 90 mins", value: 0.14 },
    { Player: "15-110313", axis: "0 - 15 mins", value: 0.17 },
    { Player: "15-110313", axis: "15 - 30 mins", value: 0.16 },
    { Player: "15-110313", axis: "30 - 45 mins", value: 0.18 },
    { Player: "15-110313", axis: "45 - 60 mins", value: 0.18 },
    { Player: "15-110313", axis: "60 - 75 mins", value: 0.15 },
    { Player: "15-110313", axis: "75 - 90 mins", value: 0.15 },
    { Player: "Team-110313", axis: "0 - 15 mins", value: 0.19 },
    { Player: "Team-110313", axis: "15 - 30 mins", value: 0.17 },
    { Player: "Team-110313", axis: "30 - 45 mins", value: 0.18 },
    { Player: "Team-110313", axis: "45 - 60 mins", value: 0.16 },
    { Player: "Team-110313", axis: "60 - 75 mins", value: 0.16 },
    { Player: "Team-110313", axis: "75 - 90 mins", value: 0.12 },
    { Player: "2-110713", axis: "0 - 15 mins", value: 0.19 },
    { Player: "2-110713", axis: "15 - 30 mins", value: 0.15 },
    { Player: "2-110713", axis: "30 - 45 mins", value: 0.17 },
    { Player: "2-110713", axis: "45 - 60 mins", value: 0.19 },
    { Player: "2-110713", axis: "60 - 75 mins", value: 0.15 },
    { Player: "2-110713", axis: "75 - 90 mins", value: 0.14 },
    { Player: "6-110713", axis: "0 - 15 mins", value: 0.20 },
    { Player: "6-110713", axis: "15 - 30 mins", value: 0.16 },
    { Player: "6-110713", axis: "30 - 45 mins", value: 0.18 },
    { Player: "6-110713", axis: "45 - 60 mins", value: 0.17 },
    { Player: "6-110713", axis: "60 - 75 mins", value: 0.16 },
    { Player: "6-110713", axis: "75 - 90 mins", value: 0.13 },
    { Player: "7-110713", axis: "0 - 15 mins", value: 0.25 },
    { Player: "7-110713", axis: "15 - 30 mins", value: 0.16 },
    { Player: "7-110713", axis: "30 - 45 mins", value: 0.19 },
    { Player: "7-110713", axis: "45 - 60 mins", value: 0.23 },
    { Player: "7-110713", axis: "60 - 75 mins", value: 0.17 },
    { Player: "7-110713", axis: "75 - 90 mins", value: 0.0 },
    { Player: "8-110713", axis: "0 - 15 mins", value: 0.33 },
    { Player: "8-110713", axis: "15 - 30 mins", value: 0.15 },
    { Player: "8-110713", axis: "30 - 45 mins", value: 0.16 },
    { Player: "8-110713", axis: "45 - 60 mins", value: 0.14 },
    { Player: "8-110713", axis: "60 - 75 mins", value: 0.13 },
    { Player: "8-110713", axis: "75 - 90 mins", value: 0.08 },
    { Player: "10-110713", axis: "0 - 15 mins", value: 0.14 },
    { Player: "10-110713", axis: "15 - 30 mins", value: 0.12 },
    { Player: "10-110713", axis: "30 - 45 mins", value: 0.13 },
    { Player: "10-110713", axis: "45 - 60 mins", value: 0.16 },
    { Player: "10-110713", axis: "60 - 75 mins", value: 0.30 },
    { Player: "10-110713", axis: "75 - 90 mins", value: 0.15 },
    { Player: "11-110713", axis: "0 - 15 mins", value: 0.21 },
    { Player: "11-110713", axis: "15 - 30 mins", value: 0.19 },
    { Player: "11-110713", axis: "30 - 45 mins", value: 0.22 },
    { Player: "11-110713", axis: "45 - 60 mins", value: 0.16 },
    { Player: "11-110713", axis: "60 - 75 mins", value: 0.15 },
    { Player: "11-110713", axis: "75 - 90 mins", value: 0.07 },
    { Player: "12-110713", axis: "0 - 15 mins", value: 0.0 },
    { Player: "12-110713", axis: "15 - 30 mins", value: 0.0 },
    { Player: "12-110713", axis: "30 - 45 mins", value: 0.0 },
    { Player: "12-110713", axis: "45 - 60 mins", value: 0.0 },
    { Player: "12-110713", axis: "60 - 75 mins", value: 0.0 },
    { Player: "12-110713", axis: "75 - 90 mins", value: 0.0 },
    { Player: "13-110713", axis: "0 - 15 mins", value: 0.18 },
    { Player: "13-110713", axis: "15 - 30 mins", value: 0.18 },
    { Player: "13-110713", axis: "30 - 45 mins", value: 0.17 },
    { Player: "13-110713", axis: "45 - 60 mins", value: 0.21 },
    { Player: "13-110713", axis: "60 - 75 mins", value: 0.16 },
    { Player: "13-110713", axis: "75 - 90 mins", value: 0.09 },
    { Player: "15-110713", axis: "0 - 15 mins", value: 0.28 },
    { Player: "15-110713", axis: "15 - 30 mins", value: 0.20 },
    { Player: "15-110713", axis: "30 - 45 mins", value: 0.23 },
    { Player: "15-110713", axis: "45 - 60 mins", value: 0.26 },
    { Player: "15-110713", axis: "60 - 75 mins", value: 0.04 },
    { Player: "15-110713", axis: "75 - 90 mins", value: 0.0 },
    { Player: "16-110713", axis: "0 - 15 mins", value: 0.16 },
    { Player: "16-110713", axis: "15 - 30 mins", value: 0.15 },
    { Player: "16-110713", axis: "30 - 45 mins", value: 0.20 },
    { Player: "16-110713", axis: "45 - 60 mins", value: 0.19 },
    { Player: "16-110713", axis: "60 - 75 mins", value: 0.23 },
    { Player: "16-110713", axis: "75 - 90 mins", value: 0.07 },
    { Player: "Team-110713", axis: "0 - 15 mins", value: 0.22 },
    { Player: "Team-110713", axis: "15 - 30 mins", value: 0.15 },
    { Player: "Team-110713", axis: "30 - 45 mins", value: 0.18 },
    { Player: "Team-110713", axis: "45 - 60 mins", value: 0.19 },
    { Player: "Team-110713", axis: "60 - 75 mins", value: 0.18 },
    { Player: "Team-110713", axis: "75 - 90 mins", value: 0.08 }
  ],
  [
    { Player: "1-110313", axis: "0 - 15 mins", value: 0.39 },
    { Player: "1-110313", axis: "15 - 30 mins", value: 0.37 },
    { Player: "1-110313", axis: "30 - 45 mins", value: 0.24 },
    { Player: "1-110313", axis: "45 - 60 mins", value: 0.0 },
    { Player: "1-110313", axis: "60 - 75 mins", value: 0.0 },
    { Player: "1-110313", axis: "75 - 90 mins", value: 0.0 },
    { Player: "2-110313", axis: "0 - 15 mins", value: 0.14 },
    { Player: "2-110313", axis: "15 - 30 mins", value: 0.20 },
    { Player: "2-110313", axis: "30 - 45 mins", value: 0.16 },
    { Player: "2-110313", axis: "45 - 60 mins", value: 0.09 },
    { Player: "2-110313", axis: "60 - 75 mins", value: 0.13 },
    { Player: "2-110313", axis: "75 - 90 mins", value: 0.29 },
    { Player: "5-110313", axis: "0 - 15 mins", value: 0.22 },
    { Player: "5-110313", axis: "15 - 30 mins", value: 0.14 },
    { Player: "5-110313", axis: "30 - 45 mins", value: 0.18 },
    { Player: "5-110313", axis: "45 - 60 mins", value: 0.15 },
    { Player: "5-110313", axis: "60 - 75 mins", value: 0.11 },
    { Player: "5-110313", axis: "75 - 90 mins", value: 0.21 },
    { Player: "6-110313", axis: "0 - 15 mins", value: 0.0 },
    { Player: "6-110313", axis: "15 - 30 mins", value: 0.01 },
    { Player: "6-110313", axis: "30 - 45 mins", value: 0.0 },
    { Player: "6-110313", axis: "45 - 60 mins", value: 0.0 },
    { Player: "6-110313", axis: "60 - 75 mins", value: 0.41 },
    { Player: "6-110313", axis: "75 - 90 mins", value: 0.58 },
    { Player: "7-110313", axis: "0 - 15 mins", value: 0.27 },
    { Player: "7-110313", axis: "15 - 30 mins", value: 0.15 },
    { Player: "7-110313", axis: "30 - 45 mins", value: 0.24 },
    { Player: "7-110313", axis: "45 - 60 mins", value: 0.30 },
    { Player: "7-110313", axis: "60 - 75 mins", value: 0.04 },
    { Player: "7-110313", axis: "75 - 90 mins", value: 0.0 },
    { Player: "8-110313", axis: "0 - 15 mins", value: 0.12 },
    { Player: "8-110313", axis: "15 - 30 mins", value: 0.09 },
    { Player: "8-110313", axis: "30 - 45 mins", value: 0.16 },
    { Player: "8-110313", axis: "45 - 60 mins", value: 0.24 },
    { Player: "8-110313", axis: "60 - 75 mins", value: 0.18 },
    { Player: "8-110313", axis: "75 - 90 mins", value: 0.21 },
    { Player: "9-110313", axis: "0 - 15 mins", value: 0.17 },
    { Player: "9-110313", axis: "15 - 30 mins", value: 0.21 },
    { Player: "9-110313", axis: "30 - 45 mins", value: 0.09 },
    { Player: "9-110313", axis: "45 - 60 mins", value: 0.16 },
    { Player: "9-110313", axis: "60 - 75 mins", value: 0.18 },
    { Player: "9-110313", axis: "75 - 90 mins", value: 0.19 },
    { Player: "10-110313", axis: "0 - 15 mins", value: 0.24 },
    { Player: "10-110313", axis: "15 - 30 mins", value: 0.14 },
    { Player: "10-110313", axis: "30 - 45 mins", value: 0.23 },
    { Player: "10-110313", axis: "45 - 60 mins", value: 0.23 },
    { Player: "10-110313", axis: "60 - 75 mins", value: 0.15 },
    { Player: "10-110313", axis: "75 - 90 mins", value: 0.0 },
    { Player: "11-110313", axis: "0 - 15 mins", value: 0.0 },
    { Player: "11-110313", axis: "15 - 30 mins", value: 0.0 },
    { Player: "11-110313", axis: "30 - 45 mins", value: 0.02 },
    { Player: "11-110313", axis: "45 - 60 mins", value: 0.03 },
    { Player: "11-110313", axis: "60 - 75 mins", value: 0.57 },
    { Player: "11-110313", axis: "75 - 90 mins", value: 0.37 },
    { Player: "13-110313", axis: "0 - 15 mins", value: 0.16 },
    { Player: "13-110313", axis: "15 - 30 mins", value: 0.25 },
    { Player: "13-110313", axis: "30 - 45 mins", value: 0.17 },
    { Player: "13-110313", axis: "45 - 60 mins", value: 0.13 },
    { Player: "13-110313", axis: "60 - 75 mins", value: 0.09 },
    { Player: "13-110313", axis: "75 - 90 mins", value: 0.19 },
    { Player: "14-110313", axis: "0 - 15 mins", value: 0.17 },
    { Player: "14-110313", axis: "15 - 30 mins", value: 0.18 },
    { Player: "14-110313", axis: "30 - 45 mins", value: 0.15 },
    { Player: "14-110313", axis: "45 - 60 mins", value: 0.15 },
    { Player: "14-110313", axis: "60 - 75 mins", value: 0.15 },
    { Player: "14-110313", axis: "75 - 90 mins", value: 0.21 },
    { Player: "15-110313", axis: "0 - 15 mins", value: 0.27 },
    { Player: "15-110313", axis: "15 - 30 mins", value: 0.10 },
    { Player: "15-110313", axis: "30 - 45 mins", value: 0.23 },
    { Player: "15-110313", axis: "45 - 60 mins", value: 0.15 },
    { Player: "15-110313", axis: "60 - 75 mins", value: 0.16 },
    { Player: "15-110313", axis: "75 - 90 mins", value: 0.09 },
    { Player: "Team-110313", axis: "0 - 15 mins", value: 0.20 },
    { Player: "Team-110313", axis: "15 - 30 mins", value: 0.17 },
    { Player: "Team-110313", axis: "30 - 45 mins", value: 0.17 },
    { Player: "Team-110313", axis: "45 - 60 mins", value: 0.15 },
    { Player: "Team-110313", axis: "60 - 75 mins", value: 0.14 },
    { Player: "Team-110313", axis: "75 - 90 mins", value: 0.16 },
    { Player: "2-110713", axis: "0 - 15 mins", value: 0.12 },
    { Player: "2-110713", axis: "15 - 30 mins", value: 0.21 },
    { Player: "2-110713", axis: "30 - 45 mins", value: 0.16 },
    { Player: "2-110713", axis: "45 - 60 mins", value: 0.17 },
    { Player: "2-110713", axis: "60 - 75 mins", value: 0.24 },
    { Player: "2-110713", axis: "75 - 90 mins", value: 0.10 },
    { Player: "6-110713", axis: "0 - 15 mins", value: 0.22 },
    { Player: "6-110713", axis: "15 - 30 mins", value: 0.15 },
    { Player: "6-110713", axis: "30 - 45 mins", value: 0.18 },
    { Player: "6-110713", axis: "45 - 60 mins", value: 0.16 },
    { Player: "6-110713", axis: "60 - 75 mins", value: 0.19 },
    { Player: "6-110713", axis: "75 - 90 mins", value: 0.10 },
    { Player: "7-110713", axis: "0 - 15 mins", value: 0.26 },
    { Player: "7-110713", axis: "15 - 30 mins", value: 0.24 },
    { Player: "7-110713", axis: "30 - 45 mins", value: 0.19 },
    { Player: "7-110713", axis: "45 - 60 mins", value: 0.23 },
    { Player: "7-110713", axis: "60 - 75 mins", value: 0.08 },
    { Player: "7-110713", axis: "75 - 90 mins", value: 0.0 },
    { Player: "8-110713", axis: "0 - 15 mins", value: 0.22 },
    { Player: "8-110713", axis: "15 - 30 mins", value: 0.16 },
    { Player: "8-110713", axis: "30 - 45 mins", value: 0.15 },
    { Player: "8-110713", axis: "45 - 60 mins", value: 0.23 },
    { Player: "8-110713", axis: "60 - 75 mins", value: 0.19 },
    { Player: "8-110713", axis: "75 - 90 mins", value: 0.06 },
    { Player: "10-110713", axis: "0 - 15 mins", value: 0.16 },
    { Player: "10-110713", axis: "15 - 30 mins", value: 0.14 },
    { Player: "10-110713", axis: "30 - 45 mins", value: 0.18 },
    { Player: "10-110713", axis: "45 - 60 mins", value: 0.28 },
    { Player: "10-110713", axis: "60 - 75 mins", value: 0.16 },
    { Player: "10-110713", axis: "75 - 90 mins", value: 0.07 },
    { Player: "11-110713", axis: "0 - 15 mins", value: 0.26 },
    { Player: "11-110713", axis: "15 - 30 mins", value: 0.13 },
    { Player: "11-110713", axis: "30 - 45 mins", value: 0.12 },
    { Player: "11-110713", axis: "45 - 60 mins", value: 0.24 },
    { Player: "11-110713", axis: "60 - 75 mins", value: 0.09 },
    { Player: "11-110713", axis: "75 - 90 mins", value: 0.16 },
    { Player: "12-110713", axis: "0 - 15 mins", value: 0.0 },
    { Player: "12-110713", axis: "15 - 30 mins", value: 0.0 },
    { Player: "12-110713", axis: "30 - 45 mins", value: 0.0 },
    { Player: "12-110713", axis: "45 - 60 mins", value: 0.0 },
    { Player: "12-110713", axis: "60 - 75 mins", value: 0.0 },
    { Player: "12-110713", axis: "75 - 90 mins", value: 0.0 },
    { Player: "13-110713", axis: "0 - 15 mins", value: 0.22 },
    { Player: "13-110713", axis: "15 - 30 mins", value: 0.12 },
    { Player: "13-110713", axis: "30 - 45 mins", value: 0.20 },
    { Player: "13-110713", axis: "45 - 60 mins", value: 0.16 },
    { Player: "13-110713", axis: "60 - 75 mins", value: 0.22 },
    { Player: "13-110713", axis: "75 - 90 mins", value: 0.07 },
    { Player: "15-110713", axis: "0 - 15 mins", value: 0.08 },
    { Player: "15-110713", axis: "15 - 30 mins", value: 0.05 },
    { Player: "15-110713", axis: "30 - 45 mins", value: 0.05 },
    { Player: "15-110713", axis: "45 - 60 mins", value: 0.06 },
    { Player: "15-110713", axis: "60 - 75 mins", value: 0.76 },
    { Player: "15-110713", axis: "75 - 90 mins", value: 0.0 },
    { Player: "16-110713", axis: "0 - 15 mins", value: 0.15 },
    { Player: "16-110713", axis: "15 - 30 mins", value: 0.25 },
    { Player: "16-110713", axis: "30 - 45 mins", value: 0.06 },
    { Player: "16-110713", axis: "45 - 60 mins", value: 0.20 },
    { Player: "16-110713", axis: "60 - 75 mins", value: 0.28 },
    { Player: "16-110713", axis: "75 - 90 mins", value: 0.06 },
    { Player: "Team-110713", axis: "0 - 15 mins", value: 0.18 },
    { Player: "Team-110713", axis: "15 - 30 mins", value: 0.16 },
    { Player: "Team-110713", axis: "30 - 45 mins", value: 0.14 },
    { Player: "Team-110713", axis: "45 - 60 mins", value: 0.19 },
    { Player: "Team-110713", axis: "60 - 75 mins", value: 0.25 },
    { Player: "Team-110713", axis: "75 - 90 mins", value: 0.08 }
  ],
  [
    { Player: "1-110313", axis: "0 - 15 mins", value: 0.41 },
    { Player: "1-110313", axis: "15 - 30 mins", value: 0.38 },
    { Player: "1-110313", axis: "30 - 45 mins", value: 0.22 },
    { Player: "1-110313", axis: "45 - 60 mins", value: 0.0 },
    { Player: "1-110313", axis: "60 - 75 mins", value: 0.0 },
    { Player: "1-110313", axis: "75 - 90 mins", value: 0.0 },
    { Player: "2-110313", axis: "0 - 15 mins", value: 0.18 },
    { Player: "2-110313", axis: "15 - 30 mins", value: 0.15 },
    { Player: "2-110313", axis: "30 - 45 mins", value: 0.18 },
    { Player: "2-110313", axis: "45 - 60 mins", value: 0.16 },
    { Player: "2-110313", axis: "60 - 75 mins", value: 0.16 },
    { Player: "2-110313", axis: "75 - 90 mins", value: 0.15 },
    { Player: "5-110313", axis: "0 - 15 mins", value: 0.19 },
    { Player: "5-110313", axis: "15 - 30 mins", value: 0.17 },
    { Player: "5-110313", axis: "30 - 45 mins", value: 0.18 },
    { Player: "5-110313", axis: "45 - 60 mins", value: 0.17 },
    { Player: "5-110313", axis: "60 - 75 mins", value: 0.16 },
    { Player: "5-110313", axis: "75 - 90 mins", value: 0.14 },
    { Player: "6-110313", axis: "0 - 15 mins", value: 0.0 },
    { Player: "6-110313", axis: "15 - 30 mins", value: 0.06 },
    { Player: "6-110313", axis: "30 - 45 mins", value: 0.08 },
    { Player: "6-110313", axis: "45 - 60 mins", value: 0.19 },
    { Player: "6-110313", axis: "60 - 75 mins", value: 0.34 },
    { Player: "6-110313", axis: "75 - 90 mins", value: 0.33 },
    { Player: "7-110313", axis: "0 - 15 mins", value: 0.24 },
    { Player: "7-110313", axis: "15 - 30 mins", value: 0.22 },
    { Player: "7-110313", axis: "30 - 45 mins", value: 0.25 },
    { Player: "7-110313", axis: "45 - 60 mins", value: 0.22 },
    { Player: "7-110313", axis: "60 - 75 mins", value: 0.06 },
    { Player: "7-110313", axis: "75 - 90 mins", value: 0.0 },
    { Player: "8-110313", axis: "0 - 15 mins", value: 0.18 },
    { Player: "8-110313", axis: "15 - 30 mins", value: 0.15 },
    { Player: "8-110313", axis: "30 - 45 mins", value: 0.17 },
    { Player: "8-110313", axis: "45 - 60 mins", value: 0.17 },
    { Player: "8-110313", axis: "60 - 75 mins", value: 0.19 },
    { Player: "8-110313", axis: "75 - 90 mins", value: 0.15 },
    { Player: "9-110313", axis: "0 - 15 mins", value: 0.17 },
    { Player: "9-110313", axis: "15 - 30 mins", value: 0.15 },
    { Player: "9-110313", axis: "30 - 45 mins", value: 0.17 },
    { Player: "9-110313", axis: "45 - 60 mins", value: 0.18 },
    { Player: "9-110313", axis: "60 - 75 mins", value: 0.16 },
    { Player: "9-110313", axis: "75 - 90 mins", value: 0.16 },
    { Player: "10-110313", axis: "0 - 15 mins", value: 0.21 },
    { Player: "10-110313", axis: "15 - 30 mins", value: 0.18 },
    { Player: "10-110313", axis: "30 - 45 mins", value: 0.20 },
    { Player: "10-110313", axis: "45 - 60 mins", value: 0.20 },
    { Player: "10-110313", axis: "60 - 75 mins", value: 0.20 },
    { Player: "10-110313", axis: "75 - 90 mins", value: 0.01 },
    { Player: "11-110313", axis: "0 - 15 mins", value: 0.0 },
    { Player: "11-110313", axis: "15 - 30 mins", value: 0.0 },
    { Player: "11-110313", axis: "30 - 45 mins", value: 0.33 },
    { Player: "11-110313", axis: "45 - 60 mins", value: 0.21 },
    { Player: "11-110313", axis: "60 - 75 mins", value: 0.24 },
    { Player: "11-110313", axis: "75 - 90 mins", value: 0.22 },
    { Player: "13-110313", axis: "0 - 15 mins", value: 0.16 },
    { Player: "13-110313", axis: "15 - 30 mins", value: 0.17 },
    { Player: "13-110313", axis: "30 - 45 mins", value: 0.17 },
    { Player: "13-110313", axis: "45 - 60 mins", value: 0.17 },
    { Player: "13-110313", axis: "60 - 75 mins", value: 0.17 },
    { Player: "13-110313", axis: "75 - 90 mins", value: 0.16 },
    { Player: "14-110313", axis: "0 - 15 mins", value: 0.18 },
    { Player: "14-110313", axis: "15 - 30 mins", value: 0.16 },
    { Player: "14-110313", axis: "30 - 45 mins", value: 0.18 },
    { Player: "14-110313", axis: "45 - 60 mins", value: 0.17 },
    { Player: "14-110313", axis: "60 - 75 mins", value: 0.17 },
    { Player: "14-110313", axis: "75 - 90 mins", value: 0.14 },
    { Player: "15-110313", axis: "0 - 15 mins", value: 0.19 },
    { Player: "15-110313", axis: "15 - 30 mins", value: 0.16 },
    { Player: "15-110313", axis: "30 - 45 mins", value: 0.18 },
    { Player: "15-110313", axis: "45 - 60 mins", value: 0.17 },
    { Player: "15-110313", axis: "60 - 75 mins", value: 0.16 },
    { Player: "15-110313", axis: "75 - 90 mins", value: 0.15 },
    { Player: "Team-110313", axis: "0 - 15 mins", value: 0.18 },
    { Player: "Team-110313", axis: "15 - 30 mins", value: 0.17 },
    { Player: "Team-110313", axis: "30 - 45 mins", value: 0.18 },
    { Player: "Team-110313", axis: "45 - 60 mins", value: 0.17 },
    { Player: "Team-110313", axis: "60 - 75 mins", value: 0.17 },
    { Player: "Team-110313", axis: "75 - 90 mins", value: 0.13 },
    { Player: "2-110713", axis: "0 - 15 mins", value: 0.19 },
    { Player: "2-110713", axis: "15 - 30 mins", value: 0.17 },
    { Player: "2-110713", axis: "30 - 45 mins", value: 0.18 },
    { Player: "2-110713", axis: "45 - 60 mins", value: 0.12 },
    { Player: "2-110713", axis: "60 - 75 mins", value: 0.17 },
    { Player: "2-110713", axis: "75 - 90 mins", value: 0.16 },
    { Player: "6-110713", axis: "0 - 15 mins", value: 0.18 },
    { Player: "6-110713", axis: "15 - 30 mins", value: 0.17 },
    { Player: "6-110713", axis: "30 - 45 mins", value: 0.16 },
    { Player: "6-110713", axis: "45 - 60 mins", value: 0.12 },
    { Player: "6-110713", axis: "60 - 75 mins", value: 0.22 },
    { Player: "6-110713", axis: "75 - 90 mins", value: 0.15 },
    { Player: "7-110713", axis: "0 - 15 mins", value: 0.27 },
    { Player: "7-110713", axis: "15 - 30 mins", value: 0.22 },
    { Player: "7-110713", axis: "30 - 45 mins", value: 0.23 },
    { Player: "7-110713", axis: "45 - 60 mins", value: 0.17 },
    { Player: "7-110713", axis: "60 - 75 mins", value: 0.11 },
    { Player: "7-110713", axis: "75 - 90 mins", value: 0.0 },
    { Player: "8-110713", axis: "0 - 15 mins", value: 0.22 },
    { Player: "8-110713", axis: "15 - 30 mins", value: 0.21 },
    { Player: "8-110713", axis: "30 - 45 mins", value: 0.21 },
    { Player: "8-110713", axis: "45 - 60 mins", value: 0.12 },
    { Player: "8-110713", axis: "60 - 75 mins", value: 0.18 },
    { Player: "8-110713", axis: "75 - 90 mins", value: 0.06 },
    { Player: "10-110713", axis: "0 - 15 mins", value: 0.18 },
    { Player: "10-110713", axis: "15 - 30 mins", value: 0.18 },
    { Player: "10-110713", axis: "30 - 45 mins", value: 0.19 },
    { Player: "10-110713", axis: "45 - 60 mins", value: 0.14 },
    { Player: "10-110713", axis: "60 - 75 mins", value: 0.18 },
    { Player: "10-110713", axis: "75 - 90 mins", value: 0.14 },
    { Player: "11-110713", axis: "0 - 15 mins", value: 0.20 },
    { Player: "11-110713", axis: "15 - 30 mins", value: 0.18 },
    { Player: "11-110713", axis: "30 - 45 mins", value: 0.18 },
    { Player: "11-110713", axis: "45 - 60 mins", value: 0.12 },
    { Player: "11-110713", axis: "60 - 75 mins", value: 0.20 },
    { Player: "11-110713", axis: "75 - 90 mins", value: 0.12 },
    { Player: "12-110713", axis: "0 - 15 mins", value: 0.19 },
    { Player: "12-110713", axis: "15 - 30 mins", value: 0.17 },
    { Player: "12-110713", axis: "30 - 45 mins", value: 0.17 },
    { Player: "12-110713", axis: "45 - 60 mins", value: 0.13 },
    { Player: "12-110713", axis: "60 - 75 mins", value: 0.18 },
    { Player: "12-110713", axis: "75 - 90 mins", value: 0.16 },
    { Player: "13-110713", axis: "0 - 15 mins", value: 0.18 },
    { Player: "13-110713", axis: "15 - 30 mins", value: 0.18 },
    { Player: "13-110713", axis: "30 - 45 mins", value: 0.18 },
    { Player: "13-110713", axis: "45 - 60 mins", value: 0.13 },
    { Player: "13-110713", axis: "60 - 75 mins", value: 0.19 },
    { Player: "13-110713", axis: "75 - 90 mins", value: 0.14 },
    { Player: "15-110713", axis: "0 - 15 mins", value: 0.27 },
    { Player: "15-110713", axis: "15 - 30 mins", value: 0.20 },
    { Player: "15-110713", axis: "30 - 45 mins", value: 0.23 },
    { Player: "15-110713", axis: "45 - 60 mins", value: 0.17 },
    { Player: "15-110713", axis: "60 - 75 mins", value: 0.14 },
    { Player: "15-110713", axis: "75 - 90 mins", value: 0.0 },
    { Player: "16-110713", axis: "0 - 15 mins", value: 0.21 },
    { Player: "16-110713", axis: "15 - 30 mins", value: 0.19 },
    { Player: "16-110713", axis: "30 - 45 mins", value: 0.21 },
    { Player: "16-110713", axis: "45 - 60 mins", value: 0.13 },
    { Player: "16-110713", axis: "60 - 75 mins", value: 0.20 },
    { Player: "16-110713", axis: "75 - 90 mins", value: 0.06 },
    { Player: "Team-110713", axis: "0 - 15 mins", value: 0.20 },
    { Player: "Team-110713", axis: "15 - 30 mins", value: 0.19 },
    { Player: "Team-110713", axis: "30 - 45 mins", value: 0.19 },
    { Player: "Team-110713", axis: "45 - 60 mins", value: 0.13 },
    { Player: "Team-110713", axis: "60 - 75 mins", value: 0.18 },
    { Player: "Team-110713", axis: "75 - 90 mins", value: 0.10 }
  ]
];


var tt = function(a, b, c) {
  var newPlayer = [];
  var newPlayer2 = [];

  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].length; j++) {
      if (data[i][j].Player == a) {
        newPlayer.push(data[i][j]);
      }
    }
  }
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].length; j++) {
      if (data[i][j].Player == b) {
        newPlayer2.push(data[i][j]);
      }
    }
  }
  return [
    [newPlayer[c], newPlayer[c+1], newPlayer[c+2], newPlayer[c+3], newPlayer[c+4], newPlayer[c+5]],
    [newPlayer2[c], newPlayer2[c+1], newPlayer2[c+2], newPlayer2[c+3], newPlayer2[c+4], newPlayer2[c+5]]
  ];
};

//Initize graph
var d = tt("Team-110313", "Team-110713", 18);
//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.3,
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
    .text("% of the energy spent for: All Speeds");

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
  var sect2 = document.getElementById("inds2");
  var section2 = sect2.options[sect2.selectedIndex].value;
  var speed_sect = document.getElementById("speed");
  var speed_section = Number(speed_sect.options[speed_sect.selectedIndex].value);
  var d = tt(section, section2, speed_section);

  var LegendOptions = ["Player/Team: " + section, "Player/Team: " + section2];

  if (speed_section < 6) {
        LegendTitle = "0-3 meters/sec"
    } else if (speed_section < 12) {
        LegendTitle = "3-5 meters/sec"
    } else if (speed_section < 18){
        LegendTitle = "5+ meter/sec"
    } else {
        LegendTitle = "All Speeds"
    };

  //Options for the Radar chart, other than default
  var mycfg = {
    w: w,
    h: h,
    maxValue: 0.3,
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
    .text("% of the energy spent for: " + LegendTitle);

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

d3.select("#inds2").on("change", function() {
  var sect = document.getElementById("inds");
  var section = sect.options[sect.selectedIndex].value;
  var sect2 = document.getElementById("inds2");
  var section2 = sect2.options[sect2.selectedIndex].value;
  var speed_sect = document.getElementById("speed");
  var speed_section = Number(speed_sect.options[speed_sect.selectedIndex].value);
  var d = tt(section, section2, speed_section);

  var LegendOptions = ["Player/Team: " + section, "Player/Team: " + section2];

  if (speed_section < 6) {
        LegendTitle = "0-3 meters/sec"
    } else if (speed_section < 12) {
        LegendTitle = "3-5 meters/sec"
    } else if (speed_section < 18){
        LegendTitle = "5+ meter/sec"
    } else {
        LegendTitle = "All Speeds"
    };

  //Options for the Radar chart, other than default
  var mycfg = {
    w: w,
    h: h,
    maxValue: 0.3,
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
    .text("% of the energy spent for: " + LegendTitle);

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

d3.select("#speed").on("change", function() {
  var sect = document.getElementById("inds");
  var section = sect.options[sect.selectedIndex].value;
  var sect2 = document.getElementById("inds2");
  var section2 = sect2.options[sect2.selectedIndex].value;
  var speed_sect = document.getElementById("speed");
  var speed_section = Number(speed_sect.options[speed_sect.selectedIndex].value);
  var d = tt(section, section2, speed_section);

  var LegendOptions = ["Player/Team: " + section, "Player/Team: " + section2];

  if (speed_section < 6) {
        LegendTitle = "0-3 meters/sec"
    } else if (speed_section < 12) {
        LegendTitle = "3-5 meters/sec"
    } else if (speed_section < 18){
        LegendTitle = "5+ meter/sec"
    } else {
        LegendTitle = "All Speeds"
    };

  //Options for the Radar chart, other than default
  var mycfg = {
    w: w,
    h: h,
    maxValue: 0.3,
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
    .text("% of the energy spent for: " + LegendTitle);

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


