var sensor1
function LoadCharts() {
    SensorAllChart();
    //Sensor1Chart();
    //Sensor2Chart();
    //Sensor3Chart();
    //Sensor4Chart();
    //Sensor5Chart();
}

function SensorAllChart() {
    var lineChartData = {
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [
            {
                fillColor: "rgba(220,220,220,0)",
                strokeColor: "rgba(220,220,220,2)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                data: [2, 5, 1, 4, 6, 3, 1]
            }
            ,
            {
                fillColor: "rgba(151,187,205,0)",
                strokeColor: "rgba(151,187,205,2)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                data: [6, 2, 1, 5, 6, 3, 7]
            }
            ,
            {
                fillColor: "rgba(151,187,205,0)",
                strokeColor: "rgba(151,187,205,2)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                data: [6, 2, 1, 5, 6, 3, 7]
            }
            ,
            {
                fillColor: "rgba(151,187,205,0)",
                strokeColor: "rgba(151,187,205,2)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                data: [-11, -17, -16, -11, -17, -11, -13]
            }
            ,
            {
                fillColor: "rgba(151,187,205,0)",
                strokeColor: "rgba(151,187,205,2)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                data: [3, 2, 6, 4, 7, 1, 3]
            }
        ]
    }
    var myLine = new Chart(document.getElementById("AllGraphs").getContext("2d")).Line(lineChartData);
}

function Sensor1Chart() {
    var lineChartData = {
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [
            {
                fillColor: "rgba(220,220,220,0)",
                strokeColor: "rgba(220,220,220,2)",
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
                strokeColor: "rgba(151,187,205,2)",
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