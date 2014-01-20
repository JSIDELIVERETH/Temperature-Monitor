var sensor1, sensor2, sensor3, sensor4, sensor5, sensor6;

window.onload = function () {
     sensor1 = new JustGage({
        id: "sensor1",
        value: getRandomInt(-20, 20),
        min: -20,
        max: 20,
        titleFontColor: "#444444",
        valueFontColor: "#444444",
        labelFontColor: "#444444",
        title: "Cold Room 1",
        label: "C°"
    });

     sensor2 = new JustGage({
        id: "sensor2",
        value: getRandomInt(-20, 20),
        min: -20,
        max: 20,
        valueFontColor: "#444444", labelFontColor: "#444444",
        titleFontColor: "#444444",
        title: "Cold Room 2",
        label: "C°"
    });

     sensor3 = new JustGage({
        id: "sensor3",
        value: getRandomInt(-35, 20),
        min: -35,
        max: 20,
        valueFontColor: "#444444", labelFontColor: "#444444",
        titleFontColor: "#444444",
        title: "Cold Room 3",
        label: "C°"
    });

     sensor4 = new JustGage({
        id: "sensor4",
        value: getRandomInt(-20, 20),
        min: -20,
        max: 20,
        valueFontColor: "#444444", labelFontColor: "#444444",
        titleFontColor: "#444444",
        title: "Cold Room 4",
        label: "C°"
    });

     sensor5 = new JustGage({
        id: "sensor5",
        value: getRandomInt(-20, 20),
        min: -20,
        max: 20,
        valueFontColor: "#444444", labelFontColor: "#444444",
        titleFontColor: "#444444",
        title: "Cold Room 5",
        label: "C°"
    });

     sensor6 = new JustGage({
        id: "sensor6",
        value: getRandomInt(-20, 20),
        min: -20,
        max: 20,
        valueFontColor: "#444444", labelFontColor: "#444444",
        titleFontColor: "#444444",
        title: "Cold Room 6",
        label: "C°"
    });
    setInterval(UpdateGages, 2500);
};

function UpdateGages() {
    $.ajax(
        {
            url: '/Home/UpdatedTempratures/',
            cache: false,
            type: "Post",
            dataType: "html",
            success: function (data, textStatus, XMLHttpRequest) {
                var tempratureData = JSON.parse(data);
                if (data) {

                    sensor1.refresh(tempratureData[0]);
                    sensor2.refresh(tempratureData[1]);
                    sensor3.refresh(tempratureData[2]);
                    sensor4.refresh(tempratureData[3]);
                    sensor5.refresh(tempratureData[4]);
                    sensor6.refresh(tempratureData[5]);
                }
            }
        })

}