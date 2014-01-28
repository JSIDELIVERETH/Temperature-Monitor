var chart;
var lineChartData;

function LoadChart() {
    AllSensorsChart();
}

function AllSensorsChart() {

     lineChartData = {
         labels: ["00:00:00", "00:00:00", "00:00:00", "00:00:00", "00:00:00", "00:00:00", "00:00:00", "00:00:00", "00:00:00", "00:00:00", "00:00:00", "00:00:00", "00:00:00", "00:00:00"],
         scaleShowLabels : true,
        datasets: [
            {
                fillColor: "rgba(220,220,220,0)",
                strokeColor: "rgba(255,0,0,2)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                // data: [2, 5, 1, 4, 6, 3, 1]
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
            ,
            {
                fillColor: "rgba(151,187,205,0)",
                strokeColor: "rgba(4,247,10,2)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
            ,
            {
                fillColor: "rgba(151,187,205,0)",
                strokeColor: "rgba(14,12,245,2)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
            ,
            {
                fillColor: "rgba(151,187,205,0)",
                strokeColor: "rgba(151,187,4,2)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
            ,
            {
                fillColor: "rgba(151,187,205,0)",
                strokeColor: "rgba(4,200,150,2)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        ]
    }

    var optionsNoAnimation = { animation: false }
    var ctx = document.getElementById("AllGraphs").getContext("2d");
    chart = new Chart(ctx);
    chart.Line(lineChartData, optionsAnimation);
}

function UpdateChart(time, Sensor1Value, Sensor2Value, Sensor3Value, Sensor4Value, Sensor5Value) {

    var labels = lineChartData["labels"];
    var sensor1Data = lineChartData["datasets"][0]["data"];
    var sensor2Data = lineChartData["datasets"][1]["data"];
    var sensor3Data = lineChartData["datasets"][2]["data"];
    var sensor4Data = lineChartData["datasets"][3]["data"];
    var sensor5Data = lineChartData["datasets"][4]["data"];

    var today = new Date();
    var dd = today.getHours();

    labels.push(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
    sensor1Data.push(Sensor1Value);
    sensor2Data.push(Sensor2Value);
    sensor3Data.push(Sensor3Value);
    sensor4Data.push(Sensor4Value);
    sensor5Data.push(Sensor5Value);

    labels.shift();
    sensor1Data.shift();
    sensor2Data.shift();
    sensor3Data.shift();
    sensor4Data.shift();
    sensor5Data.shift();

    var optionsNoAnimation = { animation: false }
    chart.Line(lineChartData, optionsNoAnimation);
}

var updateData = function (oldData) {
    var labels = oldData["labels"];
    var sensor1Data = oldData["datasets"][0]["data"];
    var sensor2Data = oldData["datasets"][1]["data"];
    var sensor3Data = oldData["datasets"][2]["data"];
    var sensor4Data = oldData["datasets"][3]["data"];
    var sensor5Data = oldData["datasets"][4]["data"];

    labels.shift();
    count++;
    labels.push(count.toString());
    var newDataA = dataSetA[9] + (20 - Math.floor(Math.random() * (41)));
    var newDataB = dataSetB[9] + (20 - Math.floor(Math.random() * (41)));
    dataSetA.push(newDataA);
    dataSetB.push(newDataB);
    dataSetA.shift();
    dataSetB.shift();
};

var optionsAnimation = {
    //Boolean - If we want to override with a hard coded scale
    scaleOverride: true,
    //** Required if scaleOverride is true **
    //Number - The number of steps in a hard coded scale
    scaleSteps: 10,
    //Number - The value jump in the hard coded scale
    scaleStepWidth: 10,
    //Number - The scale starting value
    scaleStartValue: 0
}

// Not sure why the scaleOverride isn't working...
var optionsNoAnimation = {
    animation: false,
    //Boolean - If we want to override with a hard coded scale
    scaleOverride: true,
    //** Required if scaleOverride is true **
    //Number - The number of steps in a hard coded scale
    scaleSteps: 20,
    //Number - The value jump in the hard coded scale
    scaleStepWidth: 10,
    //Number - The scale starting value
    scaleStartValue: 0
}


/*
function Sensor1Chart() {
    var lineChartData = {
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [
            {
                fillColor: "rgba(220,220,220,0)",
                strokeColor: "rgba(255,3,3,2)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                data: [2, 5, 1, 4, 6, 3, 1]
            }
        ]
    }
    var myLine = new Chart(document.getElementById("sensorGraph1").getContext("2d")).Line(lineChartData);
}

function Sensor2Chart() {
    var lineChartData = {
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [
            {
                fillColor: "rgba(151,187,205,0)",
                strokeColor: "rgba(151,250,205,2)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                data: [6, 2, 1, 5, 6, 3, 7]
            }
        ]
    }
    var myLine = new Chart(document.getElementById("sensorGraph2").getContext("2d")).Line(lineChartData);
}

function Sensor3Chart() {
    var lineChartData = {
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [
            {
                fillColor: "rgba(151,187,205,0)",
                strokeColor: "rgba(151,187,205,2)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                data: [3, 2, 6, 4, 7, 1, 3]
            }
        ]
    }
    var myLine = new Chart(document.getElementById("sensorGraph3").getContext("2d")).Line(lineChartData);
}

function Sensor4Chart() {
    var lineChartData = {
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [
            {
                fillColor: "rgba(151,187,205,0)",
                strokeColor: "rgba(151,187,205,2)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                data: [-11, -17, -16, -11, -17, -11, -13]
            }
        ]
    }
    var myLine = new Chart(document.getElementById("sensorGraph4").getContext("2d")).Line(lineChartData);
}

function Sensor5Chart() {
    var lineChartData = {
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [
            {
                fillColor: "rgba(151,187,205,0)",
                strokeColor: "rgba(151,187,205,2)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                data: [1, 7, 6, 1, 7, 1, 7]
            }
        ]
    }
    var myLine = new Chart(document.getElementById("sensorGraph5").getContext("2d")).Line(lineChartData);
}

*/