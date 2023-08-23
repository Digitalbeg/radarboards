//#region ///--------A   Start Set Root, Themes, Container, Chart, Legende, TitelHole---------------------------------
//#region ///--------A.2 Init Themes, Container, Chart, Legend, Title-----------------------------------------------

//-------------------------------Container und Radar Chart--------------------------------
var containerTechDim = container.children.push(am5.Container.new(root, {
  width: myChartWidth,
  height: myChartHeight,
  //layout: root.verticalLayout
}));

var chartTechDim = containerTechDim.children.push(am5radar.RadarChart.new(root, {
  radius: radiusDimRadarboard,
  innerRadius: radiusHoleDimUebersichtSeriesTausch,
  panX: false,
  panY: false,
  wheelX: "panX",
  scale: scaleChartDim,
  dx: 100,
  dy: -50,
}));


//-------- pseudo legend um andere legend anzeigen und verbergen zu können-------------
var legendDimFilterAnzeigen = chartTechDim.children.push(am5.Legend.new(root, {
  nameField: "categoryX",
  y: 320,
  dx: -110,
  useDefaultMarker: true,
  layout: root.verticalLayout
}));
legendDimFilterAnzeigen.markers.template.setup = function (marker) {
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
legendDimFilterAnzeigen.markers.template.setAll({ width: 20, height: 20 });
legendDimFilterAnzeigen.labels.template.setAll({
  fontSize: fontSizeLegendeDim,
  fontWeight: "500"
});
//--------Ende pseudo legend um andere legend anzeigen und verbergen zu können-------------

var legendTechDim = chartTechDim.children.push(am5.Legend.new(root, {
  nameField: "categoryX",
  y: 355,
  dx: -110,
  useDefaultMarker: true,
  layout: root.verticalLayout
}));


legendTechDim.markers.template.setup = function (marker) {
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
legendTechDim.markers.template.setAll({ width: 17, height: 17 });

//----------- Legend Textsize and value Textsize----------
legendTechDim.labels.template.setAll({
  fontSize: fontSizeLegendeDim,
  fontWeight: "500"
});

var textStatisch = "[fontWeight: 500 fontSize: 0.85em]Technologische\nDimensionen";
var titleHoleTechDim = chartTechDim.children.push(am5.Label.new(root, {
  text: textStatisch,
  textAlign: "center",
  fontWeight: 500,
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

var textDynamischStandA = "[fontStyle: italic fontWeight: 400 fontSize: 0.8em]Stand Zeitpunkt A[/]";
var textDynamischStandB = "[fontStyle: italic fontWeight: 400 fontSize: 0.8em]Stand Zeitpunkt B[/]";
var textDynamischStandC = "[fontStyle: italic fontWeight: 400 fontSize: 0.8em]Stand Zeitpunkt C[/]";
var textDynamisch = textDynamischStandA; // wird in slider event handler dynamisch mit neuem text gesetzt

var titleHoleTechDimDynamisch = chartTechDim.children.push(am5.Label.new(root, {
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
//#region ///--------A.3 Konfiguration Chart, Grid, Legend, Tooltip, Axes--------------------------

root.interfaceColors.set("grid", ColorGrid);

var yAxisTechDim = chartTechDim.yAxes.push(am5xy.ValueAxis.new(root, {
  min: 0,
  max: 100,
  numberFormat: "#'%'",
  renderer: am5radar.AxisRendererRadial.new(root, { minGridDistance: 20, opposite: true })
}));

var yRendererTechDim = yAxisTechDim.get("renderer");
yRendererTechDim.grid.template.setAll({
  stroke: ColorGrid,
  strokeWidth: 0.05
});
yRendererTechDim.ticks.template.setAll({
  maxPosition: 0.95,
  stroke: ColorBlackYAxis,
  strokeWidth: 0.2,

  visible: false
});
yRendererTechDim.labels.template.setAll({
  minPosition: 0.05,
  fill: ColorBlackYAxisText,
  fontSize: "0.75em",
  visible: true, //false für ausblenden beschriftung Y Achse
  visible: false
});

// Create axes and their renderers, xAxis zweimal für Dim und für UDim
var xRendererTechDim = am5radar.AxisRendererCircular.new(root, {});
xRendererTechDim.labels.template.setAll({
  fontSize: 0.1,
  textType: "circular",
  fill: ColorWhite,

});

var xAxisTechDim = chartTechDim.xAxes.push(am5xy.CategoryAxis.new(root, {
  maxDeviation: 0,
  categoryField: "dimension",
  renderer: xRendererTechDim,
}));


/// Zoom buttons
var buttonsTechDim = containerTechDim.children.push(am5.Container.new(root, {
  layout: root.horizontalLayout,
  x: am5.percent(100),
  dx: -95,
  y: am5.percent(0),
}));
var currentScaleTechDim = 1;

//#endregion ///-----A.3 End Anpassung Chart, Grid, Legend, Tooltip, Axes, Buttons Zoom------------------------------------
//#endregion ///-----A   End Set Root, Loading Indicator, Themes, Container, Title, Filter, Buttons-------------------

//#region ///--------B   Start Series, Ranges, Legenden Ausblenden, Events -------------------------------------------
//#region ///--------B.1 Init & Konfiguration Serie, Range ---------------------------
// Create series für UDim extra series
/// series 3 aussen neu innen Bewertung 0-1 keine Aussagen
var series3TechDim = chartTechDim.series.push(am5radar.RadarColumnSeries.new(root, {
  categoryXField: "dimension",
  //fill: fillSeriesKeineAussage, ///wird in adapter gesetzt
  fill: ColorWhite,
  stroke: ColorWhite,
  stacked: true,
  name: "keine Aussage oder in Ansätzen",
  xAxis: xAxisTechDim,
  yAxis: yAxisTechDim,
  valueYField: "value3",
  valueXField: "id"
}));

series3TechDim.columns.template.setAll({ fillOpacity: fillOpacitySeriesKeineAussage, strokeWidth: 1, width: am5.percent(100) });

series3TechDim.columns.template.adapters.add("fill", function (fill, target) {
  var id = target.dataItem.get("valueX"); //array coplors fängt bei 0 an, dim id fängt bei 1 an
  //console.log("series3 id:" + id);
  return series3TechDimColors[id - 1];
});

var labelTechDimSeries3 = [];
var series3TechDimCounter = 0;

series3TechDim.bullets.push(function () {
  color = series3TechDimColors[series3TechDimCounter];
  color = am5.Color.brighten(color, -0.3);
  series3TechDimCounter = series3TechDimCounter + 1;

  var container = am5.Container.new(root, {});
  var circle = container.children.push(am5.Circle.new(root, {
    interactive: true,
    radius: 15,
    tooltipY: -7,
    //fill: color,
    fill: ColorWhiteCircleFill,
    fillOpacity: fillOpacityWhiteCircleSeries3,
    // stroke: ColorWhiteCircleFill,
    strokeWidth: 0.0,
  }));

  var tooltipCircle = am5.Tooltip.new(root, { getFillFromSprite: false });
  tooltipCircle.get("background").setAll({
    fillOpacity: 1,
    fill: am5.Color.brighten(color, 0.8)
  });
  circle.setAll({
    tooltip: tooltipCircle,
    //tooltipText: "[fontSize: 1em #fff]Dimension [fontSize: 1em fontWeight: bold]adressiert[/][#fff] in\n[fontSize: 1em fontWeight: bold #fff]{valueY}%[/][fontSize: 1em #fff] der Vorhaben",
    tooltipText: "[fontSize: 0.85em]Dimension [fontSize: 0.85em fontWeight: bold]keine Aussage\noder keine Relevanz[/] in [fontSize: 0.85em fontWeight: bold]\n{valueY}%[/][fontSize: 0.85em] der Vorhaben"

  });

  circle.states.create("hover", { scale: 1.5, fillOpacity: 0.5 }); //bei mouse over circle, diesen auf das doppelte vergrössern

  labelTechDimSeries3[series3TechDimCounter] = container.children.push(am5.Label.new(root, {
    text: "{valueY}",
    fontSize: fontSizeDimValue,
    fontWeight: 400,
    //fill: ColorWhite,
    fill: color,
    centerY: am5.p50,
    centerX: am5.p50,
    populateText: true
  }));

  return am5.Bullet.new(root, {
    locationX: 0.5,
    //locationY: 1,
    locationY: 0.5,
    sprite: container
  });
});

/// series 2 mitte Merkmal adressiert
var series2TechDim = chartTechDim.series.push(am5radar.RadarColumnSeries.new(root, {
  categoryXField: "dimension",
  //fill: ColorWhite,
  fill: fillSeriesVorhanden,
  stroke: ColorWhite,
  stacked: true,
  name: "Dimension vorhanden",
  xAxis: xAxisTechDim,
  yAxis: yAxisTechDim,
  valueYField: "value2",
  valueXField: "id"
}));
series2TechDim.columns.template.setAll({
  fillOpacity: fillOpacitySeriesVorhanden, ///keine farbe definiert, da diese von range kommt und hier nur opacity angepasst wird
  strokeWidth: 1,
  width: am5.percent(100)
});

series2TechDim.columns.template.adapters.add("fill", function (fill, target) {
  var id = target.dataItem.get("valueX"); //array coplors fängt bei 0 an, dim id fängt bei 1 an
  return series2TechDimColors[id - 1];
});

var labelTechDimSeries2 = [];
var series2TechDimCounter = 0; //Dim 1 bis 6 mitzählen für color von label circle in radar column segment

series2TechDim.bullets.push(function () {
  color = series2TechDimColors[series2TechDimCounter];
  color = am5.Color.brighten(color, -0.3);
  wertValue1 = dataDimensionen[series2TechDimCounter].value1; //value 1 = Dim ausgeprägt
  wertValue2 = dataDimensionen[series2TechDimCounter].value2; //value 2 = Dim Merkmal vorhanden
  wertValue3 = dataDimensionen[series2TechDimCounter].value3; //value 3 = Dim in Ansätzen

  series2TechDimCounter = series2TechDimCounter + 1;

  var container = am5.Container.new(root, {});
  var circle = container.children.push(am5.Circle.new(root, {
    interactive: true,
    radius: radiusLabelDimValue,
    //fill: color,
    fill: ColorWhiteCircleFill,
    fillOpacity: fillOpacityWhiteCircleSeries2,
    //fill: ColorWhite, //fillOpacity: 0.05, //fill: ColorGrauValue1,
    tooltipY: -7,
    // stroke: ColorWhiteCircleFill,
    strokeWidth: 0.0,
    //tooltipText: "[fontSize: 13px]adressiert bei [fontSize: 13px fontWeight: 500]\n{valueY}%[/][fontSize: 13px] der Vorhaben",
  }));

  var tooltipCircle = am5.Tooltip.new(root, { getFillFromSprite: false });
  tooltipCircle.get("background").setAll({
    fillOpacity: 1,
    fill: am5.Color.brighten(color, 0.6)
  });
  circle.setAll({
    tooltip: tooltipCircle,
    //tooltipText: "[fontSize: 1em #fff]Dimension [fontSize: 1em fontWeight: bold]adressiert[/][#fff] in\n[fontSize: 1em fontWeight: bold #fff]{valueY}%[/][fontSize: 1em #fff] der Vorhaben",
    tooltipText: "[fontSize: 0.9em ]Dimension [fontSize: 0.9em fontWeight: 500]adressiert[/] in\n[fontSize: 0.9em fontWeight: 500 ]{valueY}%[/][fontSize: 0.9em] der Vorhaben",
  });

  circle.states.create("hover", { scale: 1.5, fillOpacity: 0.3 }); //bei mouse over circle, diesen auf das doppelte vergrössern

  labelTechDimSeries2[series2TechDimCounter] = container.children.push(am5.Label.new(root, {
    text: "{valueY}",
    fontSize: fontSizeDimValue,
    fontWeight: 400,
    //fill: ColorWhite,
    //fill: color,
    fill: colorLabelCircleSeries2,
    centerY: am5.p50,
    centerX: am5.p50,
    populateText: true
  }));

  return am5.Bullet.new(root, {
    //locationX: 0.5,
    locationY: 0.5,
    //locationY: (wertValue1 < 10) ? 0.9 : 1, ///wenn datenwert assen zu klein dann würde mit mittlere datenwert überlappen-verschieben
    // locationY: 1,
    sprite: container
  });
});

/// series 1 innnen Merkmal sehr ausgeprägt jetzt aussen
var series1TechDim = chartTechDim.series.push(am5radar.RadarColumnSeries.new(root, {
  categoryXField: "dimension",
  stacked: true,
  name: "Dimension sehr ausgeprägt",
  xAxis: xAxisTechDim,
  yAxis: yAxisTechDim,
  valueYField: "value1",
  valueXField: "id",
  stroke: ColorWhite,
  tooltip: am5.Tooltip.new(root, {
    pointerOrientation: "down", //"left", "right", "vertical", "down", "up" orig down
    dy: -45,
    dx: -10,
    labelText: "[fontSize: 14px fontWeight: 500]{name}:\n[fontSize: 13px fontWeight: 400]{textLang}"
  }),
  fill: fillSeriesAusgepraegt,  /// wird auch für legenden eintrag benutzt, color in column kommt von range, dann wir pro serie opacity angepasst
}));
series1TechDim.columns.template.setAll({ fillOpacity: fillOpacitySeriesAusgepraegt, strokeWidth: 0.5, width: am5.percent(100) });

series1TechDim.columns.template.adapters.add("fill", function (fill, target) {
  var id = target.dataItem.get("valueX"); //array coplors fängt bei 0 an, dim id fängt bei 1 an
  return series1TechDimColors[id - 1];
});

var labelTechDimSeries1 = [];
var series1TechDimCounter = 0; //Dim 1 bis 6 mitzählen für color von label circle in radar column segment

series1TechDim.bullets.push(function () {
  color = series1TechDimColors[series1TechDimCounter];
  color = am5.Color.brighten(color, -0.3);
  //console.log("series1TechDimCounter: " + series1TechDimCounter);
  wertValue1 = dataDimensionen[series1TechDimCounter].value1; //value 1 = Dim ausgeprägt
  wertValue2 = dataDimensionen[series1TechDimCounter].value2; //value 2 = Dim Merkmal vorhanden
  wertValue3 = dataDimensionen[series1TechDimCounter].value3; //value 3 = Dim in Ansätzen
  //console.log("wertValue1=" + wertValue1);

  series1TechDimCounter = series1TechDimCounter + 1;

  var container = am5.Container.new(root, {});
  var circle = container.children.push(am5.Circle.new(root, {
    interactive: true,
    radius: 15,
    tooltipY: -7,
    //fill: color,
    fill: ColorWhiteCircleFill,
    fillOpacity: fillOpacityWhiteCircleSeries1,
    //stroke: ColorWhiteCircleFill,
    strokeWidth: 0.0,
  }));

  var tooltipCircle = am5.Tooltip.new(root, { getFillFromSprite: false });
  tooltipCircle.get("background").setAll({
    fillOpacity: 1,
    fill: am5.Color.brighten(color, 0.3)
  });
  var text = "[fontSize: 0.9em #fff]Dimension [fontSize: 0.9em fontWeight: 500]ausgeprägt[/][#fff] in\n[fontSize: 0.9em fontWeight: 500 #fff]{valueY}%[/][fontSize: 0.9em #fff] der Vorhaben";
  ///text = text + ":\n[fontSize: 0.9em #fff fontWeight: 500]" + "ADAPT, Apollo, Comp-Ass"
  circle.setAll({
    tooltip: tooltipCircle,
    tooltipText: text,
  });

  labelTechDimSeries1[series1TechDimCounter] = container.children.push(am5.Label.new(root, {
    populateText: true,
    text: "{valueY}",
    fontSize: fontSizeDimValue,
    fontWeight: 400,
    //fill: ColorWhite,
    //fill: color,
    fill: colorLabelCircleSeries1,
    centerY: am5.p50,
    centerX: am5.p50

  }));

  circle.states.create("hover", { scale: 1.5, fillOpacity: 0.2 }); //bei mouse over circle, diesen auf das doppelte vergrössern

  return am5.Bullet.new(root, {
    // locationX: locationXCalc,
    locationY: 0.5,
    // locationY: (wertValue1 < 25) ? 0.7 : 0.80, ///wenn datenwert assen zu klein dann würd emit mittlere datenwert überlappen-verschieben
    // locationY: locationYCalc,
    sprite: container
  });
});

/// pseudo series für Anzeige der Prozentwerte also insgesamt 15 zahlen --------------------------
seriesProzentValuesDim = chartTechDim.series.push(am5radar.RadarLineSeries.new(root, {
  name: "Anzahl Vorhaben in %",
  xAxis: xAxisTechDim,
  yAxis: yAxisTechDim,
  fill: ColorGrauValue1,
  valueYField: undefined,
  categoryXField: "dimension",
}));

function showHideProzentValuesDim(zeigeBeschriftung) {
  var counterDimDatensatz = 0; am5.array.each(series1TechDim.dataItems, function (dataItem) { counterDimDatensatz++; if (labelTechDimSeries1[counterDimDatensatz]) { labelTechDimSeries1[counterDimDatensatz].set("visible", zeigeBeschriftung) }; });
  var counterDimDatensatz = 0; am5.array.each(series2TechDim.dataItems, function (dataItem) { counterDimDatensatz++; if (labelTechDimSeries2[counterDimDatensatz]) { labelTechDimSeries2[counterDimDatensatz].set("visible", zeigeBeschriftung) }; });
  var counterDimDatensatz = 0; am5.array.each(series3TechDim.dataItems, function (dataItem) { counterDimDatensatz++; if (labelTechDimSeries3[counterDimDatensatz]) { labelTechDimSeries3[counterDimDatensatz].set("visible", zeigeBeschriftung) }; });
};

seriesProzentValuesDim.on("visible", function (visible, target) { //Dim1
  if (visible) { showHideProzentValuesDim(true) } // true bedeutet Beschriftung anzeigen
  else { showHideProzentValuesDim(false) } // false bedeutet Beschriftung ausblenden
});

/// pseudo series für alle Dimensionen ausblenden ----------------------------------------
seriesDimAusblenden = chartTechDim.series.push(am5radar.RadarLineSeries.new(root, {
  name: "alle Dimensionen anzeigen",
  xAxis: xAxisTechDim,
  yAxis: yAxisTechDim,
  fill: ColorGrauValue1,
  valueYField: undefined,
  categoryXField: "dimension",
}));

seriesDimAusblenden.on("visible", function (visible, target) { //Dim ausblenden
  var keineAussageDimEingeblendet = seriesDimKeineAussageAusblenden.get("visible");
  var wirdAdressiertDimEingeblendet = seriesDimWirdAdressiertAusblenden.get("visible");

  for (var index = 0; index < dataDimensionen.length - 1; index++) {
    if (!visible) {
      series1TechDim.dataItems[index].hide();
      series2TechDim.dataItems[index].hide();
      series3TechDim.dataItems[index].hide();
      seriesProzentValuesDim.hide();
      showHideProzentValuesDim(false);
    }
    else {
      series1TechDim.dataItems[index].show();
      //* später series2 / 3 show nur wenn entsprechnende legend box auf an steht
      series2TechDim.dataItems[index].show();
      series3TechDim.dataItems[index].show();
      seriesProzentValuesDim.show();
      showHideProzentValuesDim(true);
    }
  }
});

/// pseudo series für keineAussage ausblenden ------------------
seriesDimKeineAussageAusblenden = chartTechDim.series.push(am5radar.RadarLineSeries.new(root, {
  name: "alle Ausprägungen anzeigen",
  xAxis: xAxisTechDim,
  yAxis: yAxisTechDim,
  fill: ColorGrauValue1,
  valueYField: undefined,
  categoryXField: "dimension",
}));

seriesDimKeineAussageAusblenden.on("visible", function (visible, target) { //UDim werte in Ansätzen / nicht relevant ein und ausblenden
  if (visible) { series3TechDim.show(); }
  else { series3TechDim.hide(); }

});

/// pseudo series für in Ansätzen und wird adressiert ausblenden
seriesDimWirdAdressiertAusblenden = chartTechDim.series.push(am5radar.RadarLineSeries.new(root, {
  name: "Dim wird adressiert",
  xAxis: xAxisTechDim,
  yAxis: yAxisTechDim,
  fill: ColorGrauValue1,
  valueYField: undefined,
  categoryXField: "dimension",
}));


/// pseudo series für Filter anzeigenn
seriesDimFilterAnzeigen = chartTechDim.series.push(am5radar.RadarLineSeries.new(root, {
  name: "Filter anzeigen",
  xAxis: xAxisTechDim,
  yAxis: yAxisTechDim,
  /* fill: ColorGrauValue1, */
  fill: ColorBlack,
  valueYField: undefined,
  categoryXField: "dimension",
}));

seriesDimFilterAnzeigen.on("visible", function (visible, target) {
  if (visible) {
    legendTechDim.show();
  }
  else {
    legendTechDim.hide();
    //wenn filter durch user ausgeblendet wird, dann alle einstellungen zurücksetzen
    series3TechDim.hide(); //dim keine relevanz ausblenden
    for (var index = 0; index < dataDimensionen.length - 1; index++) {
      series1TechDim.dataItems[index].show();
      series2TechDim.dataItems[index].show();
      seriesProzentValuesDim.show();
      showHideProzentValuesDim(true);
    }
  }
});

showHideProzentValuesDim(true);
seriesProzentValuesDim.show(); // beim start gesamtvalues einblenden da nur 15 werte
//seriesDimAusblenden.hide(); // beim start Legendeneintrag für alle Dim ausblenden auf false


///Range definieren für Hintergrund Farbe und Label Text
// Funktion für range definieren, da bei UDim 20 Kategorien anfallen
var rangeTechDim = [];
var rangeDataItemTechDim = [];

function erstelleRangeTechDim(indexRange, colorAchseLabel, radiusLabel, labelText, text, startKategorie, endKategorie) { //radius ist abstand des Textlabels in px vom äußeren Kreis
  rangeDataItemTechDim[indexRange] = xAxisTechDim.makeDataItem({ above: true, category: startKategorie, endCategory: endKategorie });
  rangeTechDim[indexRange] = xAxisTechDim.createAxisRange(rangeDataItemTechDim[indexRange]);

  var tooltip = am5.Tooltip.new(root, { getFillFromSprite: true });
  tooltip.get("background").setAll({ fillOpacity: 0.85 });

  rangeDataItemTechDim[indexRange].get("label").setAll({
    text: labelText,
    fill: colorAchseLabel,
    fontWeight: fontWeightLabelDimKreis,
    fontSize: fontSizeLabelDimKreis,
    radius: radiusLabel

  });

  rangeTechDim[indexRange].get("axisFill").setAll({
    tooltip: tooltip,
    tooltipText: text,
    tooltipX: -600,
    tooltipY: -600,
    fillOpacity: 0.08, //war 0.15
    //fill: colorAchseFill,
    fill: colorAchseLabel,
    toggleKey: "active",
    cursorOverStyle: "pointer",
    dRadius: 46,
    innerRadius: -46
  });

  //* nicht mehr nötig tooltip jetzt direkt in axisFill objek
  //*rangeTechDim[indexRange].get("axisFill").events.on("pointerover", function (event) { { rangeDataItemTechDim[indexRange].get("label").showTooltip(); } });
  //*rangeTechDim[indexRange].get("axisFill").events.on("pointerout", function (event) { { rangeDataItemTechDim[indexRange].get("label").hideTooltip(); } });

  rangeTechDim[indexRange].get("axisFill").events.on("click", function (event) {
    {
      var dataItem = event.target.dataItem;
      console.log("dataItem:" + dataItem.get("category"));
      // tabelle anzeigen mit url parameter category
    }
  });

}

fontWeightLabel2 = 500; //fontWeightLabel1 ist erstes Label am Aussenkreis des Radarborads, Label 2 ist zweites Label weiter aussen
/// Range für Dim 1 bis 5 erstellen beginnt bei 0 da array series auch bei 0 beginnt

for (var index = 0; index < dataDimensionen.length - 1; index++) {
  /// erstelleRangeTechDim(index, eval('ColorDim' + (index + 1) + 'Value1'), eval('ColorDim' + (index + 1) + 'Value1'), radiusDimLabel, fontWeightDimLabel, dataDimensionen[index].dimension, dataDimensionen[index].dimension);
  textDimTooltip = "[fontSize: 14px fontWeight: 700]" + dataDimensionen[index].nameKurz + "[/]\n[fontSize: 14px fontWeight: 400]" + dataDimensionen[index].textLang + "[/]";
  erstelleRangeTechDim(index, eval('ColorDim' + (index + 1) + 'Value1'), radiusDimLabel, dataDimensionen[index].dimension, textDimTooltip, dataDimensionen[index].dimension, dataDimensionen[index].dimension);

};

/// range für Dim 6 Sonstige wird erst bei klick auf Legendeneintrag Sonstige dynamisch erstellt, damit Radarboard mit den orig. 5 Dimensionen beginnt
//#endregion ///---------B.4 End Init & Anpassung Serie, Range -----------------------------------------------------------

//#region ///----------------------------Slider----------------------------------------------
var containerSliderTechDim = chartTechDim.children.push(am5.Container.new(root, {
  y: am5.percent(99),
  centerX: am5.p50,
  x: 540,
  width: am5.percent(56),
  layout: root.horizontalLayout
}));

var playButtonTechDim = containerSliderTechDim.children.push(am5.Button.new(root, {
  themeTags: ["play"],
  centerY: am5.p50,
  marginRight: 15,
  icon: am5.Graphics.new(root, { themeTags: ["icon"] })
}));

playButtonTechDim.get("background").setAll({ fill: ColorGrauValue1 });
playButtonTechDim.events.on("click", function () {
  if (playButtonTechDim.get("active")) {
    sliderTechDim.set("start", sliderTechDim.get("start") + 0.0001);
  }
  else {
    sliderTechDim.animate({
      key: "start",
      to: 1,
      duration: 10000 * (1 - sliderTechDim.get("start"))
    });
  }
})

var sliderTechDim = containerSliderTechDim.children.push(am5.Slider.new(root, {
  orientation: "horizontal",
  start: 0.05,
  centerY: am5.p50
}));

sliderTechDim.on("start", function (start) {
  if (start === 1) {
    playButtonTechDim.set("active", false);
  }
});

sliderTechDim.events.on("rangechanged", function () {
  updateSliderDatensatzTechDim(Math.round(sliderTechDim.get("start", 0) * anzahlSliderKategorienDimUDim));
});

var sliderTextStandATechDim = chartTechDim.children.push(am5.Label.new(root, {
  text: "Stand Zeitpunkt A",
  y: am5.percent(93),
  x: am5.percent(25),
  fontSize: "0.9em",
  fontWeight: 500,
  fill: ColorBlackYAxisText,
  tooltipText: "[fontWeight: 500 fontSize: 13px]Datengrundlage\n[fontWeight: 400 fontSize: 12px]Datenerhebung vom ...",
  background: am5.Rectangle.new(root, {
    fill: am5.color(0x000000),
    fillOpacity: 0
  })
}));
var sliderTextStandBTechDim = chartTechDim.children.push(am5.Label.new(root, {
  text: "Stand Zeitpunkt B",
  y: am5.percent(93),
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
var sliderTextStandCTechDim = chartTechDim.children.push(am5.Label.new(root, {
  text: "Stand Zeitpunkt C",
  y: am5.percent(93),
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

function updateValuesDatensatzTechDim(datensatz) {
  dataDimensionen = datensatz;
  var keineAussageDimEingeblendet = seriesDimKeineAussageAusblenden.get("visible");
  var wirdAdressiertDimEingeblendet = seriesDimWirdAdressiertAusblenden.get("visible");

  if (true) {
    var counterDimDatensatz = 0;
    am5.array.each(series1TechDim.dataItems, function (dataItem) {
      var newValue = dataDimensionen[counterDimDatensatz].value1;
      //*console.log("newvalue1:" + newValue);
      counterDimDatensatz = counterDimDatensatz + 1;
      dataItem.set("valueY", newValue);
      if (labelTechDimSeries1[counterDimDatensatz]) { labelTechDimSeries1[counterDimDatensatz].set("text", newValue) };
      dataItem.animate({ key: "valueYWorking", to: newValue, duration: 500 });
    });
  };

  if (wirdAdressiertDimEingeblendet) {
    var counterDimDatensatz = 0;
    am5.array.each(series2TechDim.dataItems, function (dataItem) {
      var newValue = dataDimensionen[counterDimDatensatz].value2;
      //*console.log("newvalue2:" + newValue);
      counterDimDatensatz = counterDimDatensatz + 1;
      dataItem.set("valueY", newValue);
      if (labelTechDimSeries2[counterDimDatensatz]) { labelTechDimSeries2[counterDimDatensatz].set("text", newValue) };
      dataItem.animate({ key: "valueYWorking", to: newValue, duration: 500 });
    });
  };

  if (keineAussageDimEingeblendet) {
    var counterDimDatensatz = 0;
    am5.array.each(series3TechDim.dataItems, function (dataItem) {
      var newValue = dataDimensionen[counterDimDatensatz].value3;
      counterDimDatensatz = counterDimDatensatz + 1;
      dataItem.set("valueY", newValue);
      if (labelTechDimSeries3[counterDimDatensatz]) { labelTechDimSeries3[counterDimDatensatz].set("text", newValue) };
      dataItem.animate({ key: "valueYWorking", to: newValue, duration: 500 });
    });
  };
};

function updateSliderDatensatzTechDim(sliderWert) {

  if (sliderWert == 0 || sliderWert == 1) {
    updateValuesDatensatzTechDim(dataDimensionenStandZeitpunktA);
    titleHoleTechDimDynamisch.set("text", textDynamischStandA)
  }
  else if (sliderWert == 4 || sliderWert == 5 || sliderWert == 6) {
    updateValuesDatensatzTechDim(dataDimensionenStandZeitpunktB);
    titleHoleTechDimDynamisch.set("text", textDynamischStandB)
  }
  else if (sliderWert == 9 || sliderWert == 10 || sliderWert == 11) {
    updateValuesDatensatzTechDim(dataDimensionenStandZeitpunktC);
    titleHoleTechDimDynamisch.set("text", textDynamischStandC)
  };

};
//#endregion ///----------------------------End Slider----------------------------------------------

//#region ///--------B.2 Series füllen mit Data Array----------------------------------
// Series füllen mit data Array
series1TechDim.data.setAll(dataDimensionen);
series2TechDim.data.setAll(dataDimensionen);
series3TechDim.data.setAll(dataDimensionen);
//#endregion ///-----B.2  END Series füllen-------------------------------------------
//#region ///--------B.3 Legend: series2+3 & range ausblenden bei klick in Legende ------------------------------------
series1TechDim.dataItems[0].on("visible", function (visible, target) { //Dim1
  if (visible) {
    series2TechDim.dataItems[0].show();
    series3TechDim.dataItems[0].show();
  }
  else {
    series2TechDim.dataItems[0].hide();
    series3TechDim.dataItems[0].hide();
  }
});

series1TechDim.dataItems[1].on("visible", function (visible, target) { //Dim2
  if (visible) {
    series2TechDim.dataItems[1].show();
    series3TechDim.dataItems[1].show();
  }
  else {
    series2TechDim.dataItems[1].hide();
    series3TechDim.dataItems[1].hide();
  }
});

series1TechDim.dataItems[2].on("visible", function (visible, target) { //Dim3
  if (visible) {
    series2TechDim.dataItems[2].show();
    series3TechDim.dataItems[2].show();
  }
  else {
    series2TechDim.dataItems[2].hide();
    series3TechDim.dataItems[2].hide();
  }
});

series1TechDim.dataItems[3].on("visible", function (visible, target) { //Dim4
  if (visible) {
    series2TechDim.dataItems[3].show();
    series3TechDim.dataItems[3].show();
  }
  else {
    series2TechDim.dataItems[3].hide();
    series3TechDim.dataItems[3].hide();
  }
});
series1TechDim.dataItems[4].on("visible", function (visible, target) { //Dim5
  if (visible) {
    series2TechDim.dataItems[4].show();
    series3TechDim.dataItems[4].show();
  }
  else {
    series2TechDim.dataItems[4].hide();
    series3TechDim.dataItems[4].hide();
  }
});

series1TechDim.dataItems[5].on("visible", function (visible, target) { //Dim6 Weitere technologische Merkmale array geht von 0 bis 5
  if (visible) {
    index = 5; //Array geht von 0-5 für die 6 Dimensionen 5 bedeutet DIm Sonstiges
    textDimTooltip = "[fontSize: 18px fontWeight: 600]" + dataDimensionen[index].name + "[/]\n[fontSize: 16px fontWeight: 400]" + dataDimensionen[index].textLang + "[/]";
    erstelleRangeTechDim(index, eval('ColorDim' + (index + 1) + 'Value1'), radiusDimLabel, dataDimensionen[index].dimension, textDimTooltip, dataDimensionen[index].dimension, dataDimensionen[index].dimension);

    xAxisTechDim.data.setAll(dataDimensionen);
    series2TechDim.dataItems[5].show();
    series3TechDim.dataItems[5].show();
  }
  else {
    xAxisTechDim.data.setAll(dataOhneLetzteDimension);
    if (rangeTechDim[5]) { rangeTechDim[5].dispose() };

  }
});

//#endregion ///--------Legend: series2+3 & range ausblenden  --------------------------------------------
//#endregion ///-----B   End Start Series, Ranges, Legenden Ausblenden, Events-----------------------------------------

//#region ///--------C   Init Datenstrukturen für serie, legende, chart beim ersten laden-------------------------------

// Dim 6 (Sonstige) bei start verbergen
series1TechDim.dataItems[5].hide();
series2TechDim.dataItems[5].hide();
series3TechDim.dataItems[5].hide();

xAxisTechDim.data.setAll(dataOhneLetzteDimension);

// Legende befüllen 
seriesDimFilterAnzeigen.hide();
legendDimFilterAnzeigen.data.push(seriesDimFilterAnzeigen);

legendTechDim.data.push(seriesDimAusblenden);
legendTechDim.data.push(seriesProzentValuesDim);
legendTechDim.data.push(seriesDimKeineAussageAusblenden);

legendTechDim.data.push(series1TechDim.dataItems[0]);
legendTechDim.data.push(series1TechDim.dataItems[1]);
legendTechDim.data.push(series1TechDim.dataItems[2]);
legendTechDim.data.push(series1TechDim.dataItems[3]);
legendTechDim.data.push(series1TechDim.dataItems[4]);
/* legendTechDim.data.push(series1TechDim.dataItems[5]); */

legendTechDim.hide();

//#endregion ///-----C END Init Datenstrukturen für serie, legende, chart beim ersten laden---------------------------------------------

//#region ///--------D   Series & Chart Hide und appear------------------------------------------------------------------

seriesDimKeineAussageAusblenden.hide();
series3TechDim.hide(); //ist optional anzeigbar mit filter

series1TechDim.appear(50);
series2TechDim.appear(50);
//series3TechDim.appear(500);

chartTechDim.appear(3000, 100);
//#endregion ///----D END Series & Chart appear-----------------------------------------------------------------------------

