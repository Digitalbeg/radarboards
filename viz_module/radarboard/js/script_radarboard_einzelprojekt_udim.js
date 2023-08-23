//#region ///---------A Set root, Loading Indicator, Themes, Container, Title, Filter, Buttons----
var root = am5.Root.new("chartdiv");

//#region ///--------A.2 Themes, Container Chart und Text, Title-------------------------
root.setThemes([
  am5themes_Animated.new(root),
  am5themes_Responsive.new(root),
]);

//-------------------------------Container und Radar Chart--------------------------------
var container = root.container.children.push(
  am5.Container.new(root, {
    width: myChartWidthEinzel,
    height: myChartHeightEinzel,
    layout: root.verticalLayout
  })
);

var textProjektTitel1 = "[#535353] Technologisches Radarboard ";
var textProjektTitel2 = "[#535353]Projekt_1 - ";

var textProjektTitel3 = "";
var textProjektTitel = textProjektTitel2 + textProjektTitel1;

//------------------title------------------------------------------------
var title = container.children.push(am5.Label.new(root, {

  text: " ",
  fontSize: 18,

  fontWeight: 700,
  x: am5.percent(56),
  centerX: am5.percent(50)
}));


function updateTitleText() {
  var counterVisible = 0; var indexSingle = 0;
  for (var udim = 1; udim <= projekteNamen.length; udim++) {
    if (seriesEinzelProjekt[udim].isVisible()) {
      containerTextRadarboardTech.show(0);
      counterVisible = counterVisible + 1;
      indexSingle = udim;
      textProjektTitel2 = "[#535353]" + projekteNamen[udim - 1];

    }
    if (counterVisible > 1) {
      textProjektTitel3 = "";


    }
    else if (counterVisible == 1) {

    }
    else if (counterVisible == 0) {
      textProjektTitel3 = ""; textProjektTitel2 = ""; containerTextRadarboardTech.hide(1500);
    }

  };
  textProjektTitel = textProjektTitel2 + textProjektTitel3 + textProjektTitel1;
  title.set("text", textProjektTitel);

};

var containerTextRadarboardTech = root.container.children.push(
  am5.Container.new(root, {

    width: 300,
    height: 340,
    x: 25,
    y: 210,

    background: am5.Rectangle.new(root, {
      fill: ColorGrauTextBoxEinzelprojekt,
      fillOpacity: 0.3
    })
  })
);
var textProjektBeschreibung = "";

function updateProjektBeschreibungText() {
  var counterVisible = 0;
  var indexVisible = -1;

  for (var indexProjekt = 1; indexProjekt <= projekteNamen.length; indexProjekt++) { //array aller projekte durchgehen
    if (seriesEinzelProjekt[indexProjekt].isVisible()) {
      indexVisible = indexProjekt - 1;
    }
  };
  if (indexVisible >= 0) {
    var text1Projekt = "[fontWeight: 600 fontSize: 13px]Entwicklungsfeld: [fontSize: 12px]" + dataUnterDimensionenEinzelTexte[indexVisible]["entwicklungsfeld"];
    var text2Projekt = "[fontWeight: 600 fontSize: 13px]Thema: [fontSize: 12px]" + dataUnterDimensionenEinzelTexte[indexVisible]["thema"];
    var text3Projekt = "[fontWeight: 600 fontSize: 13px]Branche: [fontSize: 12px]" + dataUnterDimensionenEinzelTexte[indexVisible]["branche"];
    var text4Projekt = "[fontWeight: 600 fontSize: 13px]Schwerpunkte: [fontSize: 12px]" + dataUnterDimensionenEinzelTexte[indexVisible]["schwerpunkte"];
    var text5Projekt = "[fontWeight: 600 fontSize: 13px]Technologische Ziel: [fontSize: 12px]" + dataUnterDimensionenEinzelTexte[indexVisible]["technologischeZiel"];

    var text6Projekt = "[fontWeight: 600 fontSize: 13px]Weiterbildungsplattformen: [fontSize: 12px]" + dataUnterDimensionenEinzelTexte[indexVisible]["weiterbildungsplattformen"];
    var text7Projekt = "[fontWeight: 600 fontSize: 13px]Zielgruppe: [fontSize: 12px]" + dataUnterDimensionenEinzelTexte[indexVisible]["zielgruppe"];
    var text8Projekt = "[fontWeight: 600 fontSize: 13px]Besonderheiten: [fontSize: 12px]" + dataUnterDimensionenEinzelTexte[indexVisible]["besonderheiten"];

    textProjektBeschreibung = text1Projekt + "\n[fontSize: 20px][fontSize: 12px]" + text2Projekt + "\n[fontSize: 20px][fontSize: 12px]" + text3Projekt + "\n[fontSize: 20px][fontSize: 12px]" + text4Projekt + "\n[fontSize: 20px][fontSize: 12px]" + text5Projekt;
    textRadarboardTech.set("text", textProjektBeschreibung);;
  }
  else {
    // 
  }
};

var textRadarboardTech = containerTextRadarboardTech.children.push(am5.Label.new(root, {
  text: textProjektBeschreibung,
  oversizedBehavior: "wrap",
  maxWidth: 298,

}));


//-----------------ende container & textRadarboard Links-------------------------

//#endregion ///-----A.2 End Themes, Container, Title--------------------------

//#region ///--------A.3 Chart-------------------------------------------------

var chartTechUDimEinzel = container.children.push(am5radar.RadarChart.new(root, {

  scale: 0.90,
  panX: false,
  panY: false,

  y: am5.percent(0),
  dy: 38,
  centerX: am5.percent(-11),
}));

var cursor = chartTechUDimEinzel.set("cursor", am5radar.RadarCursor.new(root, {
  behavior: "selectX",
}));
cursor.lineY.set("visible", false);
cursor.lineX.set("visible", false);

//#endregion ///-----A.3 End Chart-------------------------------------------

//#region ///--------A.5 Axes und Legend---------------------------------------
// Create axes and their renderers
var xRendererTechUDimEinzel = am5radar.AxisRendererCircular.new(root, {});
xRendererTechUDimEinzel.labels.template.setAll({
  fontSize: 0.1,
  textType: "circular",


  fill: ColorWhite,
  radius: radiusUDimValue
});

var tooltip = am5.Tooltip.new(root, {
  getFillFromSprite: true,
  getLabelFillFromSprite: true,
  autoTextColor: true,
  pointerOrientation: "up",
  labelText: "[fontSize: 11px fontWeight: 500]Dim [fontSize: 11px fontWeight: 500]{category}"
});
tooltip.get("background").setAll({
  fillOpacity: 0.82,
  fill: ColorGrauValue3,
});

var xAxisTechUDimEinzel = chartTechUDimEinzel.xAxes.push(am5xy.CategoryAxis.new(root, {
  maxDeviation: 0,
  categoryField: "dimension",
  renderer: xRendererTechUDimEinzel,
  tooltip: tooltip,

}));

xRendererTechUDimEinzel.grid.template.setAll({
  stroke: ColorGridEinzelProjekt,

  strokeWidth: 2
});

xRendererTechUDimEinzel.labels.template.setAll({
  oversizedBehavior: "wrap",
  textAlign: "center"
});


var yAxisTechUDimEinzel = chartTechUDimEinzel.yAxes.push(am5xy.ValueAxis.new(root, {
  visible: false,
  min: 0,
  max: 3.5,

  strictMinMax: true,
  renderer: am5radar.AxisRendererRadial.new(root, { minGridDistance: 50 })
}));



var yRendererTechUDimEinzel = yAxisTechUDimEinzel.get("renderer");
yRendererTechUDimEinzel.grid.template.setAll({
  stroke: ColorGridEinzelProjekt,
  strokeWidth: 0
});

yRendererTechUDimEinzel.ticks.template.setAll({
  maxPosition: 0.95,
  stroke: ColorBlackYAxis,
  strokeWidth: 0.8,
  visible: true
});
yRendererTechUDimEinzel.labels.template.setAll({
  minPosition: 0.05,
  fill: ColorBlackYAxisText,
  fontSize: "0.85em",
  fontWeight: fontWeightUDimSkala,
  visible: true
});


var legendTechUDimEinzel = container.children.push(am5.Legend.new(root, {
  nameField: "categoryX",
  dx: 60,

  useDefaultMarker: true,


  layout: am5.GridLayout.new(root, {
    maxColumns: 13,
    fixedWidthGrid: false
  })
}));

legendTechUDimEinzel.labels.template.setAll({
  fontSize: fontSizeLegende,
  fontWeight: "500"
});
legendTechUDimEinzel.valueLabels.template.set("forceHidden", true);

legendTechUDimEinzel.markers.template.setup = function (marker) {
  var check = am5.Graphics.new(root, {
    fill: am5.Color.brighten(am5.color(0x000000), 0.3),
    fillOpacity: 0.7,
    layer: 50,
    scale: 0.85,
    svgPath: "M15.75 2.527c-.61-.468-1.46-.328-1.902.32l-6.325 9.255L4.04 8.328a1.3 1.3 0 0 0-1.922-.062 1.505 1.505 0 0 0-.062 2.043s4.234 4.695 4.843 5.168c.61.468 1.457.328 1.903-.32L16.05 4.55c.445-.653.308-1.555-.301-2.024Zm0 0"
  });
  check.states.create("disabled", {
    fillOpacity: 0
  });
  marker.children.push(check);
}

legendTechUDimEinzel.markers.template.setAll({ width: 15, height: 15 });

legendTechUDimEinzel.markerRectangles.template.setAll({
  fillOpacity: 0.3,
  strokeOpacity: 0
});

//#endregion ///--------A.5 End Axes, Legends----------------------------------------

//#endregion ///-----A End Set root, Loading Indicator, Themes, Container, Title, Filter, Buttons, Legende----

//#region ///--------B Ranges-----------------------------------------------------------------------------

/// Range über Unterdim für Zusatz Beschriftung der UDim mit den Dim Namen Aussen
var rangeTechUDimEinzelLabelOnly = [];
var rangeDataItemTechUDimEinzelLabelOnly = [];

function erstelleRangeTechUDimEinzelLabelOnly(indexRange, colorAchseLabel, radiusLabel, fontWeightLabel, fontSize, labelText, startKategorie, endKategorie) {
  rangeDataItemTechUDimEinzelLabelOnly[indexRange] = xAxisTechUDimEinzel.makeDataItem({ above: true, category: startKategorie, endCategory: endKategorie });
  rangeTechUDimEinzelLabelOnly[indexRange] = xAxisTechUDimEinzel.createAxisRange(rangeDataItemTechUDimEinzelLabelOnly[indexRange]);

  rangeDataItemTechUDimEinzelLabelOnly[indexRange].get("label").setAll({
    fill: colorAchseLabel,
    fontWeight: fontWeightUDimLabelAussen,
    radius: radiusLabel, fontSize: fontSize,
    text: labelText
  });
  rangeTechUDimEinzelLabelOnly[indexRange].get("axisFill").setAll({
    visible: true,
    fillOpacity: 0.08,
    fill: colorAchseLabel,
    dRadius: 70,
    innerRadius: -39
  });
}

for (var index = 0; index < dataDimensionen.length - 1; index++) {
  start = index * 4;
  end = start + 3;
  erstelleRangeTechUDimEinzelLabelOnly(index, eval('ColorDim' + (index + 1) + 'Value1'), radiusEinzelTechUDimLabelAussen, fontWeightLabelAussen, fontSizeLabelAussen, dataDimensionen[index].dimension, dataUnterDimensionenEinzel[start].dimension, dataUnterDimensionenEinzel[end].dimension);
};


/// Range über Unterdim für Beschriftung der Unterdim
var rangeTechUDimEinzel = [];
var rangeDataItemTechUDimEinzel = [];
function erstelleRangeTechUDimEinzel(indexRange, colorAchseLabel, colorAchseFill, radiusLabel, fontWeightLabel, fontSizeLabel, labelText, startKategorie, endKategorie) {
  rangeDataItemTechUDimEinzel[indexRange] = xAxisTechUDimEinzel.makeDataItem({ above: true, category: startKategorie, endCategory: endKategorie });
  rangeTechUDimEinzel[indexRange] = xAxisTechUDimEinzel.createAxisRange(rangeDataItemTechUDimEinzel[indexRange]);
  rangeDataItemTechUDimEinzel[indexRange].get("label").setAll({
    text: labelText,
    fill: colorAchseLabel,
    fontWeight: fontWeightLabel,
    fontSize: fontSizeLabel, radius: radiusLabel,

  });
  rangeTechUDimEinzel[indexRange].get("axisFill").setAll({
    visible: true,

    fillOpacity: 0.04,
    fill: colorAchseLabel,
    dRadius: 31,
    innerRadius: -59
  });
}

const fontSizeUDimLabel2 = fontSizeLabelKreis;
for (var udim = 1; udim <= dataUnterDimensionenEinzel.length; udim++) {
  index = udim;
  dim = Math.ceil(udim / 4);
  erstelleRangeTechUDimEinzel(index - 1, eval('ColorDim' + dim + 'Value1'), eval('ColorDim' + dim + 'Value1'), radiusEinzelTechUDimLabel, fontWeightUDimLabel, fontSizeUDimLabel2, dataBeschreibungUnterDimensionen[index - 1].nameKurz, dataUnterDimensionenEinzel[index - 1].dimension, dataUnterDimensionenEinzel[index - 1].dimension);
};


/// Range über Unterdim für Zusatz-Beschriftung der Gesamtvalues
var rangeTechUDimEinzelGesamtValues = [];
var rangeDataItemTechUDimEinzelGesamtValues = [];

function erstelleRangeTechUDimEinzelGesamtValues(indexRange, colorAchseLabel, radiusLabel, fontWeightLabel, fontSize, labelText, tooltipText, startKategorie, endKategorie) { //radius ist abstand des Textlabels in px vom äußeren Kreis
  var tooltip = am5.Tooltip.new(root, { getFillFromSprite: true });
  tooltip.get("background").setAll({ fillOpacity: 0.85 });

  rangeDataItemTechUDimEinzelGesamtValues[indexRange] = xAxisTechUDimEinzel.makeDataItem({ category: startKategorie, endCategory: endKategorie });
  rangeTechUDimEinzelGesamtValues[indexRange] = xAxisTechUDimEinzel.createAxisRange(rangeDataItemTechUDimEinzelGesamtValues[indexRange]);
  rangeDataItemTechUDimEinzelGesamtValues[indexRange].get("axisFill").setAll({ visible: true, fill: colorAchseLabel, fillOpacity: 0.9, dRadius: 7, innerRadius: -29, tooltip: tooltip, tooltipText: tooltipText }); //innerRadius dicke farbiger streifen
  rangeDataItemTechUDimEinzelGesamtValues[indexRange].get("label").setAll({ fill: ColorWhite /* colorAchseLabel */, fontWeight: fontWeightLabel, radius: radiusLabel, fontSize: fontSize, text: labelText });
}

/// Hilsfunktion für Aufruf der Gesamtvalue Beschriftung um aufruf aus series hide/show event zu ermöglichen
function generiereRangesGesamtValues() {
  var radius = -19; var fontWeight = 300; var fontSize = "0.8em"; var color = ColorBlackYAxisText;
  for (var udim = 1; udim <= dataUnterDimensionenEinzel.length; udim++) {
    index = udim;
    dim = Math.ceil(udim / 4); //runden auf nächst höheren integer damit dim von 1 bis 5 läuft während udim von 1 bis 20 läuft

    var labelText = "[fontWeight:400]" + dataUnterDimensionenEinzel[index - 1].valueGesamt3 + "[/]" + " | " + dataUnterDimensionenEinzel[index - 1].valueGesamt2 + " | " + dataUnterDimensionenEinzel[index - 1].valueGesamt1;
    var tooltipText = "[fontSize: 14px fontWeight: 500]" + dataUnterDimensionenEinzel[index - 1].valueGesamt3 + " Vorhaben: Merkmal ausgeprägt[/]\n" + "[fontSize: 14px fontWeight: 400]" + dataUnterDimensionenEinzel[index - 1].valueGesamt2 + " Vorhaben: Merkmal vorhanden\n" + "[fontSize: 14px fontWeight: 400]" + dataUnterDimensionenEinzel[index - 1].valueGesamt1 + " Vorhaben: Merkmal in Ansätzen/nicht relevant";

    erstelleRangeTechUDimEinzelGesamtValues(index - 1, eval('ColorDim' + dim + 'Value1'), radius, fontWeight, fontSize, labelText, tooltipText, dataUnterDimensionenEinzel[index - 1].dimension, dataUnterDimensionenEinzel[index - 1].dimension);
  };
};

/// Hilsfunktion für Aufruf der Gesamtvalue Beschriftung um aufruf aus series hide/show event zu ermöglichen
function erstelleRangeGrauCircleAussen(indexRange, colorAchseLabel, radiusLabel, fontWeightLabel, fontSize, labelText, tooltipText, startKategorie, endKategorie) { //radius ist abstand des Textlabels in px vom äußeren Kreis
  var tooltip = am5.Tooltip.new(root, { getFillFromSprite: true });
  rangeDataItemTechUDimEinzelGesamtValues[indexRange] = xAxisTechUDimEinzel.makeDataItem({ category: startKategorie, endCategory: endKategorie });
  rangeTechUDimEinzelGesamtValues[indexRange] = xAxisTechUDimEinzel.createAxisRange(rangeDataItemTechUDimEinzelGesamtValues[indexRange]);
  rangeDataItemTechUDimEinzelGesamtValues[indexRange].get("axisFill").setAll({ visible: true, fill: colorAchseLabel, fillOpacity: 1, dRadius: -18, innerRadius: -92, tooltip: tooltip, tooltipText: tooltipText }); //innerRadius -55 ist dicker dicke farbiger streifen
}

function generiereRangesGrauCircleAussen() {
  var radius = -23; var fontWeight = 300; var fontSize = "0.8em"; var color = am5.Color.lighten(ColorGrauValue3, -0.04); //war radius = -23;
  for (var udim = 1; udim <= dataUnterDimensionenEinzel.length; udim++) {
    index = udim;
    dim = Math.ceil(udim / 4);
    var labelText = "";
    var tooltipText = "";
    erstelleRangeGrauCircleAussen(index - 1, color, radius, fontWeight, fontSize, labelText, tooltipText, dataUnterDimensionenEinzel[index - 1].dimension, dataUnterDimensionenEinzel[index - 1].dimension);
  };
};

function erstelleRangeGrauCircleMitte(indexRange, colorAchseLabel, radiusLabel, fontWeightLabel, fontSize, labelText, tooltipText, startKategorie, endKategorie) { //radius ist abstand des Textlabels in px vom äußeren Kreis
  var tooltip = am5.Tooltip.new(root, { getFillFromSprite: true });
  rangeDataItemTechUDimEinzelGesamtValues[indexRange] = xAxisTechUDimEinzel.makeDataItem({ category: startKategorie, endCategory: endKategorie });
  rangeTechUDimEinzelGesamtValues[indexRange] = xAxisTechUDimEinzel.createAxisRange(rangeDataItemTechUDimEinzelGesamtValues[indexRange]);
  rangeDataItemTechUDimEinzelGesamtValues[indexRange].get("axisFill").setAll({ visible: true, fill: colorAchseLabel, fillOpacity: 0.9, dRadius: -101, innerRadius: -85, tooltip: tooltip, tooltipText: tooltipText }); //innerRadius -55 ist dicker dicke farbiger streifen
}

function generiereRangesGrauCircleMitte() {
  var radius = -23; var fontWeight = 300; var fontSize = "0.8em"; var color = am5.Color.lighten(ColorGrauValue2, -0.04);//war radius = -23;
  for (var udim = 1; udim <= dataUnterDimensionenEinzel.length; udim++) {
    index = udim;
    dim = Math.ceil(udim / 4);
    var labelText = "";
    var tooltipText = "";
    erstelleRangeGrauCircleMitte(index - 1, color, radius, fontWeight, fontSize, labelText, tooltipText, dataUnterDimensionenEinzel[index - 1].dimension, dataUnterDimensionenEinzel[index - 1].dimension);
  };
};

function erstelleRangeGrauCircleInnen(indexRange, colorAchseLabel, radiusLabel, fontWeightLabel, fontSize, labelText, tooltipText, startKategorie, endKategorie) { //radius ist abstand des Textlabels in px vom äußeren Kreis
  var tooltip = am5.Tooltip.new(root, { getFillFromSprite: true });
  rangeDataItemTechUDimEinzelGesamtValues[indexRange] = xAxisTechUDimEinzel.makeDataItem({ category: startKategorie, endCategory: endKategorie });
  rangeTechUDimEinzelGesamtValues[indexRange] = xAxisTechUDimEinzel.createAxisRange(rangeDataItemTechUDimEinzelGesamtValues[indexRange]);
  rangeDataItemTechUDimEinzelGesamtValues[indexRange].get("axisFill").setAll({ visible: true, fill: colorAchseLabel, fillOpacity: 0.9, dRadius: -171, innerRadius: -91, tooltip: tooltip, tooltipText: tooltipText }); //innerRadius -55 ist dicker dicke farbiger streifen
}

function generiereRangesGrauCircleInnen() {
  var radius = -23; var fontWeight = 300; var fontSize = "0.8em"; var color = am5.Color.lighten(ColorGrauValue1, -0.04); //war radius = -23;
  for (var udim = 1; udim <= dataUnterDimensionenEinzel.length; udim++) {
    index = udim;
    dim = Math.ceil(udim / 4);
    var labelText = "";
    var tooltipText = "";
    erstelleRangeGrauCircleInnen(index - 1, color, radius, fontWeight, fontSize, labelText, tooltipText, dataUnterDimensionenEinzel[index - 1].dimension, dataUnterDimensionenEinzel[index - 1].dimension);
  };
};

//#endregion ///-----B Ranges------------------------------------------------------

//#region ///--------C Series-----------------------------------------------------------------------------

var seriesEinzelProjekt = [];
function erstelleSeriesEinzelTechUDimEinzel(index) { /// index= Index für Projekt geht von 1..34

  color = colorSetKoordinatoren[index]; color = am5.Color.lighten(am5.color(color), -0.65); //war 0.1

  seriesEinzelProjekt[index] = chartTechUDimEinzel.series.push(am5radar.RadarLineSeries.new(root, {
    name: projekteNamen[index - 1], //projekteNamen Array läuft von 0..33 deshalb index-1
    xAxis: xAxisTechUDimEinzel,
    yAxis: yAxisTechUDimEinzel,
    valueYField: "value" + index,
    categoryXField: "dimension",
    stroke: color,
    fill: color,

  }));

  seriesEinzelProjekt[index].strokes.template.setAll({ strokeWidth: 1.35, fillOpacity: 0, fill: color }); //war fillOpacity: 0.2 weg wegen grau zonen
  seriesEinzelProjekt[index].bullets.push(function () {
    return am5.Bullet.new(root, {
      sprite: am5.Circle.new(root, {
        radius: 4,
        fillOpacity: 0.7,

        fill: am5.Color.lighten(seriesEinzelProjekt[index].get("fill"), 0)
      })
    });
  });
};

// series automatisch für alle 34 Projekte erstellen
for (var index = 1; index <= projekteNamen.length; index++) {
  erstelleSeriesEinzelTechUDimEinzel(index);
};

/// pseudo series für Anzeige der Gesamtvalues erstellen
seriesGesamtValues = chartTechUDimEinzel.series.push(am5radar.RadarLineSeries.new(root, {
  name: "Summe",
  xAxis: xAxisTechUDimEinzel,
  yAxis: yAxisTechUDimEinzel,
  fill: ColorDim6Value1,

  valueYField: undefined,
  categoryXField: "dimension",
}));

seriesGesamtValues.on("visible", function (visible, target) { //Dim1
  if (visible) {
    generiereRangesGesamtValues();
  }
  else {
    for (var index = 1; index <= dataUnterDimensionenEinzel.length; index++) {
      range = rangeTechUDimEinzelGesamtValues[index - 1];
      xAxisTechUDimEinzel.axisRanges.removeValue(range);
    };


  }
});

seriesGrauCircleAussen = chartTechUDimEinzel.series.push(am5radar.RadarLineSeries.new(root, {

  xAxis: xAxisTechUDimEinzel,
  yAxis: yAxisTechUDimEinzel,
  fill: ColorGrauValue3,
  valueYField: undefined,
  categoryXField: "dimension",
}));
generiereRangesGrauCircleAussen();

seriesGrauCircleMitte = chartTechUDimEinzel.series.push(am5radar.RadarLineSeries.new(root, {

  xAxis: xAxisTechUDimEinzel,
  yAxis: yAxisTechUDimEinzel,
  fill: ColorGrauValue2,
  valueYField: undefined,
  categoryXField: "dimension",
}));
generiereRangesGrauCircleMitte();

seriesGrauCircleInnen = chartTechUDimEinzel.series.push(am5radar.RadarLineSeries.new(root, {

  xAxis: xAxisTechUDimEinzel,
  yAxis: yAxisTechUDimEinzel,
  fill: ColorGrauValue1,
  valueYField: undefined,
  categoryXField: "dimension",
}));
generiereRangesGrauCircleInnen();


function erstelleLegendEventsTechUDimEinzel(index) {
  seriesEinzelProjekt[index].on("visible", function (visible, target) {
    updateTitleText();
    updateProjektBeschreibungText();

    if (visible) {


      for (var i = 1; i <= projekteNamen.length; i++) {
        if (i == index) {
          console.log("i==index show", i, index)
          seriesEinzelProjekt[i].show();
        }
        else {
          console.log("i<>index hide", i, index)
          seriesEinzelProjekt[i].hide();
        }
      };

    }
    else {
      // 

    }
  });
};

/// series events automatisch für alle 34 Projekte erstellen
for (var index = 1; index <= projekteNamen.length; index++) {
  erstelleLegendEventsTechUDimEinzel(index);
};

//#endregion ///--------C End Series-------------------------------------------------------

//#region ///--------D Slider-----------------------------------------------------------------------------
var containerSlider = chartTechUDimEinzel.children.push(am5.Container.new(root, {

  y: am5.percent(95),
  dy: 85,
  centerX: am5.p50,
  x: am5.p50,
  dx: -20,
  width: am5.percent(57),
  layout: root.horizontalLayout
}));

var playButton = containerSlider.children.push(am5.Button.new(root, {
  themeTags: ["play"],
  centerY: am5.p50,
  marginRight: 15,
  icon: am5.Graphics.new(root, { themeTags: ["icon"] })
}));

playButton.get("background").setAll({ fill: ColorGrauValue1 });
playButton.events.on("click", function () {
  if (playButton.get("active")) {
    slider.set("start", slider.get("start") + 0.0001);
  }
  else {
    slider.animate({
      key: "start",
      to: 1,
      duration: 10000 * (1 - slider.get("start"))
    });
  }
})

var slider = containerSlider.children.push(am5.Slider.new(root, {
  orientation: "horizontal",
  start: 0.05,
  centerY: am5.p50
}));

slider.on("start", function (start) {
  if (start === 1) {
    playButton.set("active", false);
  }
});

slider.events.on("rangechanged", function () {
  updateSliderDatensatz(Math.round(slider.get("start", 0) * anzahlSliderKategorienEinzel));
});

var sliderTextStandA = chartTechUDimEinzel.children.push(am5.Label.new(root, {
  text: "Stand Zeitpunkt A",
  y: am5.percent(95.5),
  dy: 40,
  x: am5.percent(24),
  fontSize: 14,
  fontWeight: 500,
  fill: ColorBlackYAxisText,
  tooltipText: "[fontWeight: 500 fontSize: 13px]Datengrundlage\n[fontWeight: 400 fontSize: 12px]Datenerhebung vom ...",
  background: am5.Rectangle.new(root, {
    fill: am5.color(0x000000),
    fillOpacity: 0
  })
}));


var sliderTextStandB = chartTechUDimEinzel.children.push(am5.Label.new(root, {
  text: "Stand Zeitpunkt B",
  y: am5.percent(95.5),
  dy: 40,
  x: am5.percent(50),
  centerX: am5.percent(50),
  fontSize: 14,
  fontWeight: 500,
  fill: ColorBlackYAxisText,
  tooltipText: "[fontWeight: 500 fontSize: 13px]Datengrundlage\n[fontWeight: 400 fontSize: 12px]Datenerhebung vom ...",
  background: am5.Rectangle.new(root, {
    fill: am5.color(0x000000),
    fillOpacity: 0
  })
}));
var sliderTextStandC = chartTechUDimEinzel.children.push(am5.Label.new(root, {
  text: "Stand Zeitpunkt C",
  y: am5.percent(95.5),
  dy: 40,
  x: am5.percent(70),
  centerX: am5.percent(50),
  fontSize: 14,
  fontWeight: 500,
  fill: ColorBlackYAxisText,
  tooltipText: "[fontWeight: 500 fontSize: 13px]Datengrundlage\n[fontWeight: 400 fontSize: 12px]Datenerhebung vom ...",
  background: am5.Rectangle.new(root, {
    fill: am5.color(0x000000),
    fillOpacity: 0
  })
}));

function updateValuesDatensatz(datensatz) {
  dataUnterDimensionenEinzel = datensatz;


  for (var index = 1; index <= projekteNamen.length; index++) {
    var counterDatensatz = 0;
    am5.array.each(seriesEinzelProjekt[index].dataItems, function (dataItem) {
      var newValue = dataUnterDimensionenEinzel[counterDatensatz]['value' + index];

      counterDatensatz = counterDatensatz + 1;
      dataItem.set("valueY", newValue);
      dataItem.animate({ key: "valueYWorking", to: newValue, duration: 500 });
    });
  };
};

function updateSliderDatensatz(sliderWert) { /// bei slider move updatevalues funktion aufrufen

  if (sliderWert == 0 || sliderWert == 1) {
    updateValuesDatensatz(dataUnterDimensionenEinzelStandZeitpunktA)
  }
  else if (sliderWert == 4 || sliderWert == 5 || sliderWert == 6) {
    updateValuesDatensatz(dataUnterDimensionenEinzelStandZeitpunktB)
  }
  else if (sliderWert == 9 || sliderWert == 10 || sliderWert == 11) {
    updateValuesDatensatz(dataUnterDimensionenEinzelStandZeitpunktC);
  }
};

//#endregion ///-----------D End Slider-------------------------------------------------------

//#region ///--------E Main Init Chart Data, Hide Series at startup etc-----------------------------------

///series mit neuem datensatz initialisieren
for (var index = 1; index <= projekteNamen.length; index++) {
  seriesEinzelProjekt[index].data.setAll(dataUnterDimensionenEinzel);
};


///series ab Projekt 2 hide damit nur erstes sichtbar ist
for (var index = 2; index <= projekteNamen.length; index++) {
  seriesEinzelProjekt[index].hide();
};

//seriesGesamtValues.hide(); ///Anzeige Gesamtvalues beim start deaktivieren
seriesGesamtValues.show();
generiereRangesGesamtValues(); ///Anzeige Gesamtvalues beim start aktivieren

xAxisTechUDimEinzel.data.setAll(dataUnterDimensionenEinzel);

//legendTechUDimEinzel.data.setAll(chartTechUDimEinzel.series.values);

for (var index = 1; index <= projekteNamen.length; index++) {
  legendTechUDimEinzel.data.push(seriesEinzelProjekt[index]);
};

legendTechUDimEinzel.data.push(seriesGesamtValues);

legendTechUDimEinzel.appear(2000, 10);

//seriesEinzelProjekt[1].appear(2000); //erstes Projekt anzeigen, die anderen ausgeblendet lassen

chartTechUDimEinzel.appear(300, 10);

//#endregion ///-----------E End Main Init Chart Data, Hide Series at startup etc---------------------------

