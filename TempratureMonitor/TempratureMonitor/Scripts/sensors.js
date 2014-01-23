var sensor1, sensor2, sensor3, sensor4, sensor5;

window.onload = function () {
    sensor1 = new JustGage({
        id: "sensor1",
        value: 0,
        min: 1,
        max: 10,
        titleFontColor: "#444444",
        valueFontColor: "#444444",
        labelFontColor: "#444444",
        levelColors: [
                        "#ff0000",
                        "#f9c800",
                        "#a7d400",
                        "#f9c800",
                        "#ff0000"
        ],
        levelColorsGradient: false,
        title: "Cold Room 1",
        label: "C°"
    });

    sensor2 = new JustGage({
        id: "sensor2",
        value: 0,
        min: 1,
        max: 10,
        titleFontColor: "#444444",
        valueFontColor: "#444444",
        labelFontColor: "#444444",
        levelColors: [
                        "#ff0000",
                        "#f9c800",
                        "#a7d400",
                        "#f9c800",
                        "#ff0000"
        ],
        levelColorsGradient: false,
        title: "Cold Room 2",
        label: "C°"
    });

    sensor3 = new JustGage({
        id: "sensor3",
        value: 0,
        min: 1,
        max: 10,
        titleFontColor: "#444444",
        valueFontColor: "#444444",
        labelFontColor: "#444444",
        levelColors: [
                        "#ff0000",
                        "#f9c800",
                        "#a7d400",
                        "#f9c800",
                        "#ff0000"
        ],
        levelColorsGradient: false,
        title: "Cold Room 3",
        label: "C°"
    });

    sensor4 = new JustGage({
        id: "sensor4",
        value: -20,
        min: -20,
        max: -14,
        valueFontColor: "#444444",
        labelFontColor: "#444444",
        titleFontColor: "#444444",
        levelColors: [
                     "#ff0000",
                     "#f9c800",
                     "#a7d400",
                     "#f9c800",
                     "#ff0000"
        ],
        levelColorsGradient: false,
        title: "Cold Room 4",
        label: "C°"
    });

    sensor5 = new JustGage({
        id: "sensor5",
        value: 0,
        min: 1,
        max: 10,
        titleFontColor: "#444444",
        valueFontColor: "#444444",
        labelFontColor: "#444444",
        levelColors: [
                        "#ff0000",
                        "#f9c800",
                        "#a7d400",
                        "#f9c800",
                        "#ff0000"
        ],
        levelColorsGradient: false,
        title: "Cold Room 5",
        label: "C°"
    });

    setInterval(UpdateGages, 5000);
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
                    try {
                        sensor1.refresh(tempratureData[0]);
                        sensor2.refresh(tempratureData[1]);
                        sensor3.refresh(tempratureData[2]);
                        sensor4.refresh(tempratureData[3]);
                        sensor5.refresh(tempratureData[4]);
                    }
                    catch (x) {
                        sensor1.refresh(-47);
                        sensor2.refresh(-47);
                        sensor3.refresh(-47);
                        sensor4.refresh(-47);
                        sensor5.refresh(-47);
                    }
                }
            }
        })

}