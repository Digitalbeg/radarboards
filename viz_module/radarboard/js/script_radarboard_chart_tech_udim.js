//#region ///--------A   Start Set Root, Themes, Container, Chart, Legende, TitelHole---------------------------------
//#region ///--------A.2 Init Themes, Container, Chart, Legend, Title-----------------------------------------------
//-------------------------------Container und Radar Chart--------------------------------
var containerTechUDim = container.children.push(am5.Container.new(root, {
    width: myChartWidth,
    height: myChartHeight,

}));

var chartTechUDim = containerTechUDim.children.push(am5radar.RadarChart.new(root, {
    radius: radiusUDimRadarboard,
    innerRadius: radiusHoleDimUebersichtSeriesTausch,
    panX: false,
    panY: false,
    wheelX: "panX",
    scale: scaleChartUDim,

    dx: 100,
    dy: -35,
}));


//-------- pseudo legend um andere legend anzeigen und verbergen zu können-------------
var legendUDimFilterAnzeigen = chartTechUDim.children.push(am5.Legend.new(root, {
    nameField: "categoryX",

    y: 305,
    x: -90,

    useDefaultMarker: true,
    layout: root.verticalLayout
}));
legendUDimFilterAnzeigen.markers.template.setup = function (marker) {
    var check = am5.Graphics.new(root, {
        fill: am5.Color.brighten(am5.color(0xffffff), 0),
        fillOpacity: 0.8,
        layer: 50,
        svgPath: "M15.75 2.527c-.61-.468-1.46-.328-1.902.32l-6.325 9.255L4.04 8.328a1.3 1.3 0 0 0-1.922-.062 1.505 1.505 0 0 0-.062 2.043s4.234 4.695 4.843 5.168c.61.468 1.457.328 1.903-.32L16.05 4.55c.445-.653.308-1.555-.301-2.024Zm0 0"
    });
    check.states.create("disabled", {
        fillOpacity: 0
    });
    marker.children.push(check);
}
legendUDimFilterAnzeigen.markers.template.setAll({ width: 20, height: 20 });
legendUDimFilterAnzeigen.labels.template.setAll({
    fontSize: fontSizeLegendeDim,
    fontWeight: "500"
});
//--------Ende pseudo legend um andere legend anzeigen und verbergen zu können-------------


var legendTechUDim = chartTechUDim.children.push(am5.Legend.new(root, {
    nameField: "categoryX",

    y: 340,
    dx: -115,
    useDefaultMarker: true,



    layout: am5.GridLayout.new(root, {
        maxColumns: 2,

    })
}));
legendTechUDim.valueLabels.template.set("forceHidden", true); //macht Legende kompakter

//----------- Legend marker size und Aussehen-------------
legendTechUDim.markers.template.setup = function (marker) {
    var check = am5.Graphics.new(root, {
        fill: am5.Color.brighten(am5.color(0xffffff), 0),
        scale: 0.9,
        fillOpacity: 0.7,
        layer: 50,
        svgPath: "M15.75 2.527c-.61-.468-1.46-.328-1.902.32l-6.325 9.255L4.04 8.328a1.3 1.3 0 0 0-1.922-.062 1.505 1.505 0 0 0-.062 2.043s4.234 4.695 4.843 5.168c.61.468 1.457.328 1.903-.32L16.05 4.55c.445-.653.308-1.555-.301-2.024Zm0 0"
    });
    check.states.create("disabled", {
        fillOpacity: 0
    });
    marker.children.push(check);
}
legendTechUDim.markers.template.setAll({ width: 17, height: 17 });

//----------- Legend Textsize and value Textsize----------
legendTechUDim.labels.template.setAll({
    fontSize: fontSizeLegendeUDim,
    fontWeight: "500"
});



var textStatisch = "[fontWeight: 500 fontSize: 0.8em]Technologische\nUnterdimensionen";
var titleHoleTechUDim = chartTechUDim.children.push(am5.Label.new(root, {
    text: textStatisch,
    textAlign: "center",
    fontWeight: 400,
    x: am5.percent(50),
    y: am5.percent(50),
    dy: -8,
    centerY: am5.percent(50),
    centerX: am5.percent(50),
    background: am5.Rectangle.new(root, {
        fill: am5.color(0x000000),
        fillOpacity: 0
    })
}));


var titleHoleTechUDimDynamisch = chartTechUDim.children.push(am5.Label.new(root, {
    text: textDynamisch,
    textAlign: "center",
    fontWeight: 500,
    x: am5.percent(50),
    y: am5.percent(50),
    dy: 19,
    centerY: am5.percent(50),
    centerX: am5.percent(50)
}));


//#endregion ///-----A.2 End Init Themes, Container, Chart, Legend, Title--------------------------
//#region ///--------A.3 Konfiguration Chart, Grid, Legend, Tooltip, Axes--------------------------------------
//grid in chart auf farbe weiss setzen damit es unsichtbar wird
root.interfaceColors.set("grid", ColorGrid);

var yAxisTechUDim = chartTechUDim.yAxes.push(am5xy.ValueAxis.new(root, {

    min: 0,
    max: 100,

    numberFormat: "#'%'",
    strictMinMax: true,

    renderer: am5radar.AxisRendererRadial.new(root, { minGridDistance: 50, opposite: true })
}));

var yRendererTechUDim = yAxisTechUDim.get("renderer");
yRendererTechUDim.grid.template.setAll({
    stroke: ColorGrid,
    strokeWidth: 0.05
});

yRendererTechUDim.labels.template.setAll({
    minPosition: 0.05,
    maxPosition: 1,
    fill: ColorBlackYAxisText,

    fontSize: "0.75em",
    fontWeight: "bold",
    inside: true,
    visible: false
});

yRendererTechUDim.ticks.template.setAll({
    maxPosition: 0.95,
    stroke: ColorBlackYAxis,
    strokeWidth: 0.5,
    dy: -1,
    visible: false
});

yAxisTechUDim.labelsContainer.set("dy", "4");

// Create axes and their renderers, xAxis zweimal für Dim und für UDim
var xRendererTechUDim = am5radar.AxisRendererCircular.new(root, {});
xRendererTechUDim.labels.template.setAll({

    fontSize: 0.1,
    textType: "circular",

    fill: ColorWhite,

    inside: false,

});

var xAxisTechUDim = chartTechUDim.xAxes.push(am5xy.CategoryAxis.new(root, {

    maxDeviation: 0,
    categoryField: "dimension",
    renderer: xRendererTechUDim,
}));

xRendererTechUDim.grid.template.setAll({
    stroke: ColorGridEinzelProjekt,

    strokeWidth: 1
});

xRendererTechUDim.labels.template.setAll({
    oversizedBehavior: "wrap",
    textAlign: "center"
});


var tooltipNamenProjekteSeries1 = [];
var tooltipNamenProjekteSeries2 = [];
var tooltipNamenProjekteSeries3 = [];

function createTooltipNamenProjekte() {
    datensatz = dataUnterDimensionenEinzelStandZeitpunktA;

    for (var indexUDim = 0; indexUDim < datensatz.length; indexUDim++) {

        startProjekt = 1; endProjekt = 34;
        for (var indexValue = startProjekt; indexValue <= endProjekt; indexValue++) {

            if (datensatz[indexUDim]["value" + indexValue] == 0) { tooltipNamenProjekteSeries3[indexUDim] = tooltipNamenProjekteSeries3[indexUDim] ? tooltipNamenProjekteSeries3[indexUDim] + " | " + projekteNamen[indexValue - 1] : projekteNamen[indexValue - 1] };
            if (datensatz[indexUDim]["value" + indexValue] == 1) { tooltipNamenProjekteSeries3[indexUDim] = tooltipNamenProjekteSeries3[indexUDim] ? tooltipNamenProjekteSeries3[indexUDim] + " | " + projekteNamen[indexValue - 1] : projekteNamen[indexValue - 1] };
            if (datensatz[indexUDim]["value" + indexValue] == 2) { tooltipNamenProjekteSeries2[indexUDim] = tooltipNamenProjekteSeries2[indexUDim] ? tooltipNamenProjekteSeries2[indexUDim] + " | " + projekteNamen[indexValue - 1] : projekteNamen[indexValue - 1] };
            if (datensatz[indexUDim]["value" + indexValue] == 3) { tooltipNamenProjekteSeries1[indexUDim] = tooltipNamenProjekteSeries1[indexUDim] ? tooltipNamenProjekteSeries1[indexUDim] + " | " + projekteNamen[indexValue - 1] : projekteNamen[indexValue - 1] };

        };
    }
};
createTooltipNamenProjekte();

//#endregion ///-----A.3 End Anpassung Chart, Grid, Legend, Tooltip, Axes, Zoom Buttons-------------------------------
//#endregion ///-----A   End Set Root, Loading Indicator, Themes, Container, Title, Filter, Buttons-----------------


//#region ///--------B   Start Series, Ranges, Legenden Ausblenden, Events -----------------------------------------
//#region ///--------B.1 Init & Konfiguration Serie, Range ---------------------------------------------------

/// series 3 aussen neu innen Bewertung 0-1 keine Aussagen
var series3TechUDim = chartTechUDim.series.push(am5radar.RadarColumnSeries.new(root, {
    categoryXField: "dimension",
    fill: ColorGrauValue3,
    stacked: true,
    name: "keine Aussage oder in Ansätzen",
    xAxis: xAxisTechUDim,
    yAxis: yAxisTechUDim,
    valueYField: "value3",
    /* valueXField: "id" */
    valueXField: "id"
}));

series3TechUDim.columns.template.setAll({
    fillOpacity: fillOpacitySeriesKeineAussage,
    strokeWidth: 1,
    width: am5.percent(100)
});

series3TechUDim.columns.template.adapters.add("fill", function (fill, target) {
    var id = target.dataItem.get("valueX"); //array coplors fängt bei 0 an, dim id fängt bei 1 an

    return series3TechUDimColors[id - 1];
});

var labelTechUDimSeries3 = [];
var series3TechUDimCounter = 0;
var tooltipMitProjektNamenSeries3 = "";

series3TechUDim.bullets.push(function () {
    color = series3TechUDimColors[series3TechUDimCounter];
    color = am5.Color.brighten(color, -0.3);

    textTooltip = "[fontSize: 14px fontWeight: 500]Dimension keine Aussage/keine Relevanz in\n{valueY}% der Vorhaben:"
    tooltipMitProjektNamenSeries3 = textTooltip + "\n[fontSize: 1.2em][fontSize: 13px fontStyle: italic]" + tooltipNamenProjekteSeries3[series3TechUDimCounter];

    series3TechUDimCounter = series3TechUDimCounter + 1;

    var container = am5.Container.new(root, {});
    var circle = container.children.push(am5.Circle.new(root, {
        interactive: true,
        radius: 15,
        tooltipY: -7,

        fill: ColorWhiteCircleFill,
        fillOpacity: fillOpacityWhiteCircleSeries3,

        strokeWidth: 0.0,
    }));

    var tooltipCircle = am5.Tooltip.new(root, { getFillFromSprite: false });
    tooltipCircle.get("background").setAll({
        fillOpacity: 0.95,
        fill: am5.Color.brighten(color, 0.8)
    });

    tooltipCircle.label.setAll({
        oversizedBehavior: "wrap",
        maxWidth: 350
    });

    circle.setAll({
        tooltip: tooltipCircle,
        tooltipText: tooltipMitProjektNamenSeries3,
    });

    circle.states.create("hover", { scale: 1.5, fillOpacity: 0.4 });

    labelTechUDimSeries3[series3TechUDimCounter] = container.children.push(am5.Label.new(root, {
        text: "{valueY}",
        fontSize: fontSizeUDimValue,
        fontWeight: 400,

        fill: color,

        centerY: am5.p50,
        centerX: am5.p50,
        populateText: true
    }));

    return am5.Bullet.new(root, {
        locationX: 0.5,

        locationY: 0.5,
        sprite: container
    });
});

/// series 2 mitte Merkmal adressiert
var series2TechUDim = chartTechUDim.series.push(am5radar.RadarColumnSeries.new(root, {
    categoryXField: "dimension",
    fill: ColorWhite,
    stacked: true,
    name: "Dimension vorhanden",
    xAxis: xAxisTechUDim,
    yAxis: yAxisTechUDim,
    valueYField: "value2",

    valueXField: "id"
}));


series2TechUDim.columns.template.setAll({

    fillOpacity: fillOpacitySeriesVorhanden,
    strokeWidth: 1,
    width: am5.percent(100)
});

series2TechUDim.columns.template.adapters.add("fill", function (fill, target) {
    var id = target.dataItem.get("valueX");
    return series2TechUDimColors[id - 1];
});

var labelTechUDimSeries2 = [];
var series2TechUDimCounter = 0;

series2TechUDim.bullets.push(function () {
    color = series2TechUDimColors[series2TechUDimCounter];
    color = am5.Color.brighten(color, -0.3);
    wertValue1 = dataUnterDimensionen[series2TechUDimCounter].value1; //value 1 = Dim ausgeprägt
    wertValue2 = dataUnterDimensionen[series2TechUDimCounter].value2; //value 2 = Dim Merkmal vorhanden
    wertValue3 = dataUnterDimensionen[series2TechUDimCounter].value3; //value 3 = Dim in Ansätzen


    textTooltip = "[fontSize: 14px fontWeight: 500]Dimension adressiert in {valueY}% der Vorhaben:";
    textTooltipMitProjektNamen = textTooltip + "\n[fontSize: 1.2em][fontSize: 13px fontStyle: italic]" + tooltipNamenProjekteSeries2[series2TechUDimCounter];

    series2TechUDimCounter = series2TechUDimCounter + 1;

    var container = am5.Container.new(root, {});
    if (wertValue2 > 0) { /// circle mit label nur an datenpunkt anbringen wenn wert value >0 ist
        var circle = container.children.push(am5.Circle.new(root, {
            interactive: true,
            radius: radiusLabelUDimValue,
            fill: ColorWhiteCircleFill,
            fillOpacity: fillOpacityWhiteCircleSeries2,

            tooltipY: -7,

            strokeWidth: 0.5,

        }));

        var tooltipCircle = am5.Tooltip.new(root, { getFillFromSprite: false });
        tooltipCircle.get("background").setAll({
            fillOpacity: 0.95,
            fill: am5.Color.brighten(color, 0.7)
        });

        tooltipCircle.label.setAll({
            oversizedBehavior: "wrap",
            maxWidth: 350
        });

        circle.setAll({
            tooltip: tooltipCircle,
            tooltipText: textTooltipMitProjektNamen,
        });

        circle.states.create("hover", { scale: 1.5, fillOpacity: 0.2 }); //bei mouse over circle, diesen auf das doppelte vergrössern

        labelTechUDimSeries2[series2TechUDimCounter] = container.children.push(am5.Label.new(root, {
            text: "{valueY}",
            fontSize: fontSizeUDimValue,
            fontWeight: 400,

            fill: colorLabelCircleSeries2,
            centerY: am5.p50,
            centerX: am5.p50,
            populateText: true
        }));
    };

    return am5.Bullet.new(root, {
        locationY: 0.5,
        sprite: container
    });
});

/// series 1 innnen Merkmal sehr ausgeprägt jetzt aussen
var series1TechUDim = chartTechUDim.series.push(am5radar.RadarColumnSeries.new(root, {

    categoryXField: "dimension",
    stacked: true,
    name: "Dimension sehr ausgeprägt",
    xAxis: xAxisTechUDim,
    yAxis: yAxisTechUDim,
    valueYField: "value1",
    valueXField: "id",
    stroke: ColorWhite,

    fill: fillSeriesAusgepraegt,
}));

series1TechUDim.columns.template.setAll({

    fillOpacity: fillOpacitySeriesAusgepraegt,
    strokeWidth: 0.5,
    width: am5.percent(100)
});

series1TechUDim.columns.template.adapters.add("fill", function (fill, target) {
    var id = target.dataItem.get("valueX");
    return series1TechUDimColors[id - 1];
});

var labelTechUDimSeries1 = [];
var series1TechUDimCounter = 0;

series1TechUDim.bullets.push(function () {
    color = series1TechUDimColors[series1TechUDimCounter];
    color = am5.Color.brighten(color, -0.3);
    wertValue1 = dataUnterDimensionen[series1TechUDimCounter].value1; //value 1 = Dim ausgeprägt
    wertValue2 = dataUnterDimensionen[series1TechUDimCounter].value2; //value 2 = Dim vorhanden
    wertValue3 = dataUnterDimensionen[series1TechUDimCounter].value3; //value 2 = Dim in Ansätzen


    textTooltip = "[fontSize: 14px #eee fontWeight: 500]Dimension ausgeprägt in {valueY}% der Vorhaben:"
    tooltipMitProjektNamenSeries1 = textTooltip + "\n[fontSize: 1.2em #fff][fontSize: 13px fontStyle: italic #fff]" + tooltipNamenProjekteSeries1[series1TechUDimCounter];

    series1TechUDimCounter = series1TechUDimCounter + 1;

    var series1bulletContainerTechUDim = am5.Container.new(root, {});

    if (wertValue1 > 0) { /// circle mit label nur an datenpunkt anbringen wenn wert value >0 ist
        var circle = series1bulletContainerTechUDim.children.push(am5.Circle.new(root, {
            interactive: true,
            radius: radiusLabelUDimValue,
            tooltipY: -7,
            fill: ColorWhiteCircleFill,
            fillOpacity: fillOpacityWhiteCircleSeries1,

            strokeWidth: 0.5,
        }));

        var tooltipCircle = am5.Tooltip.new(root, { getFillFromSprite: false });
        tooltipCircle.get("background").setAll({
            fillOpacity: 0.95,
            fill: am5.Color.lighten(color, 0.2)
        });

        tooltipCircle.label.setAll({
            oversizedBehavior: "wrap",
            maxWidth: 350
        });

        circle.setAll({
            tooltip: tooltipCircle,
            tooltipText: tooltipMitProjektNamenSeries1
        });

        labelTechUDimSeries1[series1TechUDimCounter] = series1bulletContainerTechUDim.children.push(am5.Label.new(root, {
            text: "{valueY}",
            fontSize: fontSizeUDimValue,
            fontWeight: 400,

            fill: colorLabelCircleSeries1,
            centerY: am5.p50,
            centerX: am5.p50,
            populateText: true
        }));
        circle.states.create("hover", { scale: 1.5, fillOpacity: 0.3 });

    };

    return am5.Bullet.new(root, {

        locationY: 0.5,

        sprite: (wertValue1 == 0) ? undefined : series1bulletContainerTechUDim
    });
});


/// pseudo series für Anzeige der Prozentwerte also insgesamt 60 zahlen
seriesProzentValuesUDim = chartTechUDim.series.push(am5radar.RadarLineSeries.new(root, {
    name: "Anzahl Vorhaben in %",
    xAxis: xAxisTechUDim,
    yAxis: yAxisTechUDim,
    fill: ColorGrauValue1,
    valueYField: undefined,
    categoryXField: "dimension",
}));

function showHideProzentValuesUDim(zeigeBeschriftung) {
    var counterUDimDatensatz = 0; am5.array.each(series1TechUDim.dataItems, function (dataItem) { counterUDimDatensatz++; if (labelTechUDimSeries1[counterUDimDatensatz]) { labelTechUDimSeries1[counterUDimDatensatz].set("visible", zeigeBeschriftung) }; });
    var counterUDimDatensatz = 0; am5.array.each(series2TechUDim.dataItems, function (dataItem) { counterUDimDatensatz++; if (labelTechUDimSeries2[counterUDimDatensatz]) { labelTechUDimSeries2[counterUDimDatensatz].set("visible", zeigeBeschriftung) }; });
    var counterUDimDatensatz = 0; am5.array.each(series3TechUDim.dataItems, function (dataItem) { counterUDimDatensatz++; if (labelTechUDimSeries3[counterUDimDatensatz]) { labelTechUDimSeries3[counterUDimDatensatz].set("visible", zeigeBeschriftung) }; });
};

seriesProzentValuesUDim.on("visible", function (visible, target) {
    if (visible) { showHideProzentValuesUDim(true) } // true bedeutet Beschriftung anzeigen
    else { showHideProzentValuesUDim(false) } // false bedeutet Beschriftung ausblenden
});

/// pseudo series für keineAussage ausblenden
seriesUDimKeineAussageAusblenden = chartTechUDim.series.push(am5radar.RadarLineSeries.new(root, {
    name: "alle Ausprägungen",
    xAxis: xAxisTechUDim,
    yAxis: yAxisTechUDim,
    fill: ColorGrauValue1,
    valueYField: undefined,
    categoryXField: "dimension",
}));

seriesUDimKeineAussageAusblenden.on("visible", function (visible, target) { //UDim werte in Ansätzen / nicht relevant ein und ausblenden
    for (var index = 0; index < dataUnterDimensionen.length; index++) {
        if (visible) { series3TechUDim.dataItems[index].show(); }
        else { series3TechUDim.dataItems[index].hide(); }
    }
});

/// pseudo series für in Ansätzen und wird adressiert ausblenden
seriesUDimWirdAdressiertAusblenden = chartTechUDim.series.push(am5radar.RadarLineSeries.new(root, {
    name: "Dim wird adressiert",
    xAxis: xAxisTechUDim,
    yAxis: yAxisTechUDim,
    fill: ColorGrauValue1,
    valueYField: undefined,
    categoryXField: "dimension",
}));

seriesUDimWirdAdressiertAusblenden.on("visible", function (visible, target) { //UDim werte in Ansätzen / nicht relevant ein und ausblenden
    for (var index = 0; index < dataUnterDimensionen.length; index++) {
        if (visible) { series2TechUDim.dataItems[index].show(); }
        else { series2TechUDim.dataItems[index].hide(); }
    }
});

/// pseudo series für alle UDim ausblenden 
seriesUDimAusblenden = chartTechUDim.series.push(am5radar.RadarLineSeries.new(root, {
    name: "Dimensionen anzeigen",
    xAxis: xAxisTechUDim,
    yAxis: yAxisTechUDim,
    fill: ColorGrauValue1,
    valueYField: undefined,
    categoryXField: "dimension",
}));

seriesUDimAusblenden.on("visible", function (visible, target) { //Dim ausblenden
    if (visible) {
        for (var index = 0; index < dataUnterDimensionen.length; index++) {
            console.log("udim einblenden", index)
            series1TechUDim.dataItems[index].show();
            series2TechUDim.dataItems[index].show();

        }
    }
    else {
        for (var index = 0; index < dataUnterDimensionen.length; index++) {
            console.log("udim ausblenden", index)
            series1TechUDim.dataItems[index].hide();
            series2TechUDim.dataItems[index].hide();
            series3TechUDim.dataItems[index].hide();

        }
    }
});

/// pseudo series für UDim Filter anzeigenn
seriesUDimFilterAnzeigen = chartTechUDim.series.push(am5radar.RadarLineSeries.new(root, {
    name: "Filter anzeigen",
    xAxis: xAxisTechUDim,
    yAxis: yAxisTechUDim,

    fill: ColorBlack,
    valueYField: undefined,
    categoryXField: "dimension",
}));

seriesUDimFilterAnzeigen.on("visible", function (visible, target) {

    if (visible) {
        legendTechUDim.show();

    }
    else {
        legendTechUDim.hide();

    }
});

///Range definieren für Hintergrund Farbe und Label Text
// Funktion für range definieren, da bei UDim 20 Kategorien anfallen
var rangeTechUDim = [];
var rangeDataItemTechUDim = [];

var rangeTechUDimLabelOnly = [];
var rangeDataItemTechUDimLabelOnly = [];

function erstelleRangeTechUDim(indexRange, colorAchseLabel, radiusLabel, fontWeightLabel, fontSize, labelText, text, startKategorie, endKategorie) {
    rangeDataItemTechUDim[indexRange] = xAxisTechUDim.makeDataItem({ above: true, category: startKategorie, endCategory: endKategorie });
    rangeTechUDim[indexRange] = xAxisTechUDim.createAxisRange(rangeDataItemTechUDim[indexRange]);

    var tooltip = am5.Tooltip.new(root, { getFillFromSprite: true });
    tooltip.get("background").setAll({ fillOpacity: 0.8 });

    rangeDataItemTechUDim[indexRange].get("label").setAll({
        text: labelText,
        fill: colorAchseLabel,
        fontWeight: fontWeightLabel,
        fontSize: fontSize,
        radius: radiusLabel
    });

    rangeTechUDim[indexRange].get("axisFill").setAll({
        tooltip: tooltip,
        tooltipText: text,
        tooltipX: -600,
        tooltipY: -600,
        visible: true,
        fillOpacity: 0.08, //war 0.15
        fill: colorAchseLabel,
        toggleKey: "active",
        cursorOverStyle: "pointer",
        dRadius: 35,
        innerRadius: -35
    });

    rangeTechUDim[indexRange].get("axisFill").events.on("click", function (event) {
        {
            var dataItem = event.target.dataItem;
            console.log("dataItem:" + dataItem.get("category"));

        }
    });

}

/// Range über Unterdim für zusatz Beschriftung der UDim mit den Dim Namen
function erstelleRangeTechUDimLabelOnly(indexRange, colorAchseLabel, radiusLabel, labelText, text, startKategorie, endKategorie) { //radius ist abstand des Textlabels in px vom äußeren Kreis
    rangeDataItemTechUDimLabelOnly[indexRange] = xAxisTechUDim.makeDataItem({ above: true, category: startKategorie, endCategory: endKategorie });
    rangeTechUDimLabelOnly[indexRange] = xAxisTechUDim.createAxisRange(rangeDataItemTechUDimLabelOnly[indexRange]);

    var tooltip = am5.Tooltip.new(root, { getFillFromSprite: true });
    tooltip.get("background").setAll({ fillOpacity: 0.8 });


    rangeDataItemTechUDimLabelOnly[indexRange].get("label").setAll({
        text: labelText, /// überschreibt vor initialisierten wert von dimension
        fill: colorAchseLabel,
        fontWeight: fontWeightLabelDimKreis,
        radius: radiusLabel,
        fontSize: fontSizeLabelDimKreis,

    });

    rangeTechUDimLabelOnly[indexRange].get("axisFill").setAll({
        tooltip: tooltip,
        tooltipText: text,
        tooltipX: -600,
        tooltipY: -600,
        visible: true,
        fillOpacity: 0.08, //war 0.15, 0.08
        fill: colorAchseLabel,
        toggleKey: "active",
        cursorOverStyle: "pointer",
        dRadius: 74,
        innerRadius: -39
    });

    rangeTechUDimLabelOnly[indexRange].get("axisFill").events.on("click", function (event) {
        {
            var dataItem = event.target.dataItem;
            console.log("dataItem:" + dataItem.get("category"));

        }
    });
}

fontWeightLabel2 = 500;
/// Range für UDim 1-20 erstellen

for (var dim = 1; dim < dataDimensionen.length; dim++) {
    for (var udim = 1; udim <= dataUnterDimensionen.length; udim++) {
        index = udim;
        dim = Math.ceil(udim / 4); //runden auf nächst höheren integer damit dim von 1 bis 5 läuft während udim von 1 bis 20 läuft
        textUDimTooltip = "[fontSize: 12px fontWeight: 700]" + dataBeschreibungUnterDimensionen[index - 1].nameKurz + "[/]\n[fontSize: 12px fontWeight: 400]" + dataBeschreibungUnterDimensionen[index - 1].textLang + "[/]";
        //  erstelleRangeTechUDim(index - 1, eval('ColorDim' + dim + 'Value1'), radiusTechUDimLabel, fontWeightUDimLabel, fontSizeUDimLabel, dataUnterDimensionen[index - 1].dimension, textUDimTooltip, dataUnterDimensionen[index - 1].dimension, dataUnterDimensionen[index - 1].dimension);

        erstelleRangeTechUDim(index - 1, eval('ColorDim' + dim + 'Value1'), radiusTechUDimLabel, fontWeightUDimLabel, fontSizeUDimLabel, dataBeschreibungUnterDimensionen[index - 1].nameKurz, textUDimTooltip, dataUnterDimensionen[index - 1].dimension, dataUnterDimensionen[index - 1].dimension);

    };
};

// Range für Dim 1 bis 5 erstellen beginnt bei 0 da array series auch bei 0 beginnt
fontSizeLabelOnly = "1em";

for (var index = 0; index < dataDimensionen.length - 1; index++) {
    start = index * 4;
    end = start + 3;
    textDimTooltip = "[fontSize: 13px fontWeight: 700]" + dataDimensionen[index].nameKurz + "[/]\n[fontSize: 13px fontWeight: 400]" + dataDimensionen[index].textLang + "[/]";

    erstelleRangeTechUDimLabelOnly(index, eval('ColorDim' + (index + 1) + 'Value1'), radiusUDimDimLabel, dataDimensionen[index].dimension, textDimTooltip, dataUnterDimensionen[start].dimension, dataUnterDimensionen[end].dimension);
};

/// Range über Unterdim für Zusatz-Beschriftung der Gesamtvalues
var rangeTechUDimGesamtValues = [];
var rangeDataItemTechUDimGesamtValues = [];

function erstelleRangeTechUDimGesamtValues(indexRange, colorAchseLabel, radiusLabel, fontWeightLabel, fontSize, labelText, tooltipText, startKategorie, endKategorie) { //radius ist abstand des Textlabels in px vom äußeren Kreis
    rangeDataItemTechUDimGesamtValues[indexRange] = xAxisTechUDim.makeDataItem({ category: startKategorie, endCategory: endKategorie });
    rangeTechUDimGesamtValues[indexRange] = xAxisTechUDim.createAxisRange(rangeDataItemTechUDimGesamtValues[indexRange]);
    ///nicht nötig da farbkreis durch hauptrange erzeugt wird rangeDataItemTechUDimGesamtValues[indexRange].get("axisFill").setAll({ visible: true, fill: colorAchseLabel, fillOpacity: 0.9, dRadius: -2, innerRadius: -25, tooltipText: tooltipText }); //innerRadius dicke farbiger streifen
    rangeDataItemTechUDimGesamtValues[indexRange].get("label").setAll({ fill: ColorWhite /* colorAchseLabel */, fontWeight: fontWeightLabel, radius: radiusLabel, fontSize: fontSize, text: labelText });
}

//#region ///----------------------------Slider-------------------------------------------------------------------------------------------------------------------------------------------------------------------
var containerSliderTechUDim = chartTechUDim.children.push(am5.Container.new(root, {
    y: am5.percent(102),
    centerX: am5.p50,
    x: am5.p50,
    width: am5.percent(52),
    layout: root.horizontalLayout
}));

var playButtonTechUDim = containerSliderTechUDim.children.push(am5.Button.new(root, {
    themeTags: ["play"],
    centerY: am5.p50,
    marginRight: 15,
    icon: am5.Graphics.new(root, { themeTags: ["icon"] })
}));

playButtonTechUDim.get("background").setAll({ fill: ColorGrauValue1 });

playButtonTechUDim.events.on("click", function () {
    if (playButtonTechUDim.get("active")) {
        sliderTechUDim.set("start", sliderTechUDim.get("start") + 0.0001);
    } else {
        sliderTechUDim.animate({ key: "start", to: 1, duration: 10000 * (1 - sliderTechUDim.get("start")) });
    }
})

var sliderTechUDim = containerSliderTechUDim.children.push(am5.Slider.new(root, { orientation: "horizontal", start: 0.05, centerY: am5.p50 }));
sliderTechUDim.on("start", function (start) { if (start === 1) { playButtonTechUDim.set("active", false); } });

sliderTechUDim.events.on("rangechanged", function () {
    updateSliderDatensatzTechUDim(Math.round(sliderTechUDim.get("start", 0) * anzahlSliderKategorienDimUDim));
}); /// wenn slider bewegt wird dann aufruf funktions zum update der values


var sliderTextStandATechUDim = chartTechUDim.children.push(am5.Label.new(root, {
    text: "Stand Zeitpunkt A",
    y: am5.percent(96),
    x: am5.percent(27),
    fontSize: "0.9em",
    fontWeight: 500,
    fill: ColorBlackYAxisText,
    tooltipText: "[fontWeight: 500 fontSize: 13px]Datengrundlage\n[fontWeight: 400 fontSize: 12px]Datenerhebung vom ...",
    background: am5.Rectangle.new(root, {
        fill: am5.color(0x000000),
        fillOpacity: 0
    })
}));
var sliderTextStandBTechUDim = chartTechUDim.children.push(am5.Label.new(root, {
    text: "Stand Zeitpunkt B",
    y: am5.percent(96),
    x: am5.percent(51),
    centerX: am5.percent(50),
    fontSize: "0.9em",
    fontWeight: 500,
    fill: ColorBlackYAxisText,
    tooltipText: "[fontWeight: 500 fontSize: 13px]Datengrundlage\n[fontWeight: 400 fontSize: 12px]Datenerhebung vom ...",
    background: am5.Rectangle.new(root, {
        fill: am5.color(0x000000),
        fillOpacity: 0
    })
}));
var sliderTextStandCTechUDim = chartTechUDim.children.push(am5.Label.new(root, {
    text: "Stand Zeitpunkt C",
    y: am5.percent(96),
    x: am5.percent(71),
    centerX: am5.percent(50),
    fontSize: "0.9em",
    fontWeight: 500,
    fill: ColorBlackYAxisText,
    tooltipText: "[fontWeight: 500 fontSize: 13px]Datengrundlage\n[fontWeight: 400 fontSize: 12px]Datenerhebung vom ...",
    background: am5.Rectangle.new(root, {
        fill: am5.color(0x000000),
        fillOpacity: 0
    })
}));



function updateValuesDatensatzTechUDim(datensatz) { ///update der value1..3 in series 1..3 bei slider bewegeung
    dataUnterDimensionen = datensatz;
    var keineAussageUDimEingeblendet = seriesUDimKeineAussageAusblenden.get("visible");
    var wirdAdressiertUDimEingeblendet = seriesUDimWirdAdressiertAusblenden.get("visible");


    var counterUDimDatensatz = 0;
    am5.array.each(series1TechUDim.dataItems, function (dataItem) {
        var newValue = dataUnterDimensionen[counterUDimDatensatz].valueProzentGesamt1;

        counterUDimDatensatz = counterUDimDatensatz + 1;
        dataItem.set("valueY", newValue);
        if (labelTechUDimSeries1[counterUDimDatensatz]) { labelTechUDimSeries1[counterUDimDatensatz].set("text", newValue) };
        dataItem.animate({ key: "valueYWorking", to: newValue, duration: 500 });
    });

    if (wirdAdressiertUDimEingeblendet) {
        var counterUDimDatensatz = 0;
        am5.array.each(series2TechUDim.dataItems, function (dataItem) {
            var newValue = dataUnterDimensionen[counterUDimDatensatz].valueProzentGesamt2;
            //*console.log("newvalue2:" + newValue);
            counterUDimDatensatz = counterUDimDatensatz + 1; dataItem.set("valueY", newValue);
            if (labelTechUDimSeries2[counterUDimDatensatz]) { labelTechUDimSeries2[counterUDimDatensatz].set("text", newValue) };
            dataItem.animate({ key: "valueYWorking", to: newValue, duration: 500 });
        });
    };

    if (keineAussageUDimEingeblendet) {
        var counterUDimDatensatz = 0;
        am5.array.each(series3TechUDim.dataItems, function (dataItem) {
            var newValue = dataUnterDimensionen[counterUDimDatensatz].valueProzentGesamt3;
            //*console.log("newvalue3:" + newValue);
            counterUDimDatensatz = counterUDimDatensatz + 1; dataItem.set("valueY", newValue);
            if (labelTechUDimSeries3[counterUDimDatensatz]) { labelTechUDimSeries3[counterUDimDatensatz].set("text", newValue) };
            dataItem.animate({ key: "valueYWorking", to: newValue, duration: 500 });
        });
    };
};

function updateSliderDatensatzTechUDim(sliderWert) { /// bei slider move updatevalues funktioin aufrufen und text in hole updaten

    if (sliderWert == 0 || sliderWert == 1) {
        updateValuesDatensatzTechUDim(dataUnterDimensionenEinzelStandZeitpunktA);
        titleHoleTechUDimDynamisch.set("text", textDynamischStandA)
    }
    else if (sliderWert == 4 || sliderWert == 5 || sliderWert == 6) {
        updateValuesDatensatzTechUDim(dataUnterDimensionenEinzelStandZeitpunktB);
        titleHoleTechUDimDynamisch.set("text", textDynamischStandB)
    }
    else if (sliderWert == 9 || sliderWert == 10 || sliderWert == 11) {
        updateValuesDatensatzTechUDim(dataUnterDimensionenEinzelStandZeitpunktC);
        titleHoleTechUDimDynamisch.set("text", textDynamischStandC)
    };
};
//#endregion ///----------------------------Slider------------------------------------------------------------------------

//#endregion ///---------B.4 End Init & Anpassung Serie, Range -----------------------------------------------------------
//#region ///--------B.2 Series füllen mit data Array---------------------------------------------------------
// Series füllen mit data Array

series1TechUDim.data.setAll(dataUnterDimensionen);
series2TechUDim.data.setAll(dataUnterDimensionen);
series3TechUDim.data.setAll(dataUnterDimensionen);

//#endregion ///-----B.2  END Series füllen-------------------------------------------
//#region ///--------B.3 Legend: series2+3 & range ausblenden bei klick in Legende ----------------------------
/// evenbts für series2,3 ausblenden wenn 1 ausgeblendet wird
function erstelleSeriesLegendEventsTechUDim(index) {

    series1TechUDim.dataItems[index].on("visible", function (visible, target) { ///UDim an stelle index
        if (visible) {
            series2TechUDim.dataItems[index].show();
            series3TechUDim.dataItems[index].show();

        }
        else {
            series2TechUDim.dataItems[index].hide();
            series3TechUDim.dataItems[index].hide();

        }
    });

};

for (var index = 0; index < dataUnterDimensionen.length; index++) {
    erstelleSeriesLegendEventsTechUDim(index);
};

//#endregion ///--------Legend: series2+3 & range ausblenden  --------------------------------------------
//#endregion ///-----B   End Start Series, Ranges, Legenden Ausblenden, Events---------------------------------------


//#region ///--------C   Init Datenstrukturen für serie, legende, chart beim ersten laden-----------------------------

xAxisTechUDim.data.setAll(dataUnterDimensionen);
//*xAxisTechUDim.data.setAll(dataUnterDimensionen);

// Legende befüllen 

//pseudo Series für Optionen
seriesUDimFilterAnzeigen.hide();
legendUDimFilterAnzeigen.data.push(seriesUDimFilterAnzeigen);


legendTechUDim.data.push(seriesProzentValuesUDim);
/* legendTechUDim.data.push(seriesUDimWirdAdressiertAusblenden); */
//legendTechUDim.data.push(seriesUDimAusblenden);
legendTechUDim.data.push(seriesUDimKeineAussageAusblenden);

legendTechUDim.data.push(series1TechUDim.dataItems[0]);
legendTechUDim.data.push(series1TechUDim.dataItems[1]);
legendTechUDim.data.push(series1TechUDim.dataItems[2]);
legendTechUDim.data.push(series1TechUDim.dataItems[3]);
legendTechUDim.data.push(series1TechUDim.dataItems[4]);
legendTechUDim.data.push(series1TechUDim.dataItems[5]);
legendTechUDim.data.push(series1TechUDim.dataItems[6]);
legendTechUDim.data.push(series1TechUDim.dataItems[7]);
legendTechUDim.data.push(series1TechUDim.dataItems[8]);
legendTechUDim.data.push(series1TechUDim.dataItems[9]);
legendTechUDim.data.push(series1TechUDim.dataItems[10]);
legendTechUDim.data.push(series1TechUDim.dataItems[11]);
legendTechUDim.data.push(series1TechUDim.dataItems[12]);
legendTechUDim.data.push(series1TechUDim.dataItems[13]);
legendTechUDim.data.push(series1TechUDim.dataItems[14]);
legendTechUDim.data.push(series1TechUDim.dataItems[15]);
legendTechUDim.data.push(series1TechUDim.dataItems[16]);
legendTechUDim.data.push(series1TechUDim.dataItems[17]);
legendTechUDim.data.push(series1TechUDim.dataItems[18]);
legendTechUDim.data.push(series1TechUDim.dataItems[19]);

//#endregion ///-----C END Init Datenstrukturen für serie, legende, chart beim ersten laden---------------------------------------------

//#region ///--------D   Series & Chart Hide und appear------------------------------------------------------------------
showHideProzentValuesUDim(true); seriesProzentValuesUDim.show(); // beim start gesamtvalues ausblenden
seriesUDimKeineAussageAusblenden.hide();

chartTechUDim.appear(3000, 100);

//#endregion ///----D END Series & Chart appear-----------------------------------------------------------------------------

//containerTechDim.hide(); // intial UDim nicht anzeigen, wir bei changeDatensatz gewechselt

containerTechUDim.hide(); // intial UDim nicht anzeigen, wird bei changeDatensatz gewechselt

