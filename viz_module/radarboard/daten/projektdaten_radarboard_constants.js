//#region ///--------B Set Colors & Constants-----------------------------------------------------------------------------------
//const myChartHeight = am5.percent(100);
//const myChartWidth = am5.percent(100);

const myChartWidth = 1100;
const myChartHeight = 720;

var myChartWidthEinzel = 1300;
var myChartHeightEinzel = 750;

// bei <15 zoll bildschirm oder font size 150% chart in höhe kleiner machen
if (window.innerHeight < 700) { myChartHeightEinzel = 600, myChartWidthEinzel = 1100 }


const anzahlSliderKategorienDimUDim = 11; /// Anzahl der slider kategorien zwischen denen ausgewählt werden kann DIM/UDim
const anzahlSliderKategorienEinzel = 11; /// Anzahl der slider kategorien zwischen denen ausgewählt werden kann DIM/UDim
const anzahlSliderKategorien = 5; //alte einstellung

/* const scaleChartUDim = 0.92; */
var scaleChartDim = 1; //wird von js funktion unten auf 0.84 gesetzt wenn bildschirm klein und damit window.innerHeight <800 ist
var scaleChartUDim = 1; //wird unten in js neu gesetzt da abhängig von browser window höhe


///farben di ein Dim gebrtaucht werden hier schon festlegen
const ColorGrauValue1 = am5.Color.lighten(am5.color(0x909090), 0.0); // für inneren Kreis bei Einzelradarboard als Hintergrund
const ColorGrauValue2 = am5.Color.lighten(am5.color(0xD1D1D1), 0.0); // für mittleren Kreis bei Einzelradarboard als Hintergrund
const ColorGrauValue3 = am5.Color.lighten(am5.color(0xF3F3F3), 0.2); // für äußeren Kreis bei Einzelradarboard als Hintergrund Farbe

const ColorGrauTextBoxEinzelprojekt = am5.Color.lighten(am5.color(0xF3F3F3), 0.0); // für inneren Krei
//const ColorGrauValue3 = am5.Color.lighten(am5.color(0xF3F3D2), 0.0);

//const ColorGrid = am5.Color.lighten(am5.color(0xffffff), 0.0);
const ColorWhite = am5.Color.lighten(am5.color(0xffffff), 0.0);
const ColorBlack = am5.Color.lighten(am5.color(0x000000), 0.0);
const ColorBlackYAxis = am5.Color.lighten(am5.color(0x000000), 0.0);
const ColorBlackYAxisText = am5.Color.lighten(am5.color(0x000000), 0.2);

/// Dim
const radiusDimRadarboard = am5.percent(70) ///grösse chart in container, 70% lässtplatz für legende etc. war 65, 69.5

//*const radiusHoleDimUebersicht = am5.percent(1);
const radiusHoleDimUebersicht = am5.percent(16);
const radiusHoleDimUebersichtSeriesTausch = 70; //war 88
const radiusHoleUDimUebersicht = am5.percent(20);


const fontSizeLegendeDim = 11;
const fontSizeDimLabel = "1em";
const fontSizeLabelDimKreis = 13;
const fontSizeDimValue = 14;
const fontWeightLabelDimKreis = 700;
const radiusDimLabel = 15;
const radiusLabelDimValue = 15; //label in circle für %wert Dim value
const fontWeightDimLabel = 700;

const ColorWhiteCircleFill = am5.Color.lighten(am5.color(0xffffff), 0.0);
//const colorLabelCircle = am5.Color.lighten(am5.color(0xffffff), 0.0);
const colorLabelCircleSeries3 = am5.Color.lighten(am5.color(0xffffff), -0.4);
const colorLabelCircleSeries2 = am5.Color.lighten(am5.color(0xffffff), -0.1);
const colorLabelCircleSeries1 = am5.Color.lighten(am5.color(0xffffff), -0.1);


const fillOpacityWhiteCircleSeries1 = 0.0; // war 0.6 für test kreis weg da bei udim 60 zahlen mit kriesen sichtbar, aber nur opacity ausschalten damit tooltip bleibt
const fillOpacityWhiteCircleSeries2 = 0.0; // war 0.5
const fillOpacityWhiteCircleSeries3 = 0.0; // war 0.5

/// UDim
const radiusUDimRadarboard = am5.percent(68) ///grösse chart in container, 70% lässtplatz für legende etc. war 70, 65

const fontSizeLegendeUDim = 11;
//const fontSizeUDimLabel = "0.7em"; //Font Size für Beschriftung UDim war0.75
const fontSizeUDimLabel = 10; //Font Size für Beschriftung UDim 
const fontWeightUDimLabel = 600;
const fontWeightUDimSkala = 600;

const fontSizeUDimValue = 13;
const radiusLabelUDimValue = 14; //Label in cirle für %wert in UDim 
const radiusUDimValue = 14; //Label in cirle für %wert in UDim 

radiusTechUDimFarbKreis = 117; ///alles über 100 bestimmt dicke des farbigen (zuschaltbaren) aussenkreises war 117

/// TechUDim
const radiusTechUDimLabel = 22; //war 18, 11,9
const radiusUDimDimLabel = 45;
const ColorWhiteYellow = am5.Color.lighten(am5.color(0xFFFFF3), 0.0);
const fillSeriesKeineAussage = ColorGrauValue3; ///color ist grau die über range grundfarbe gelegt wird, und dann transparent gemacht wird
const fillOpacitySeriesKeineAussage = 1; //war 0.3

const fillSeriesVorhanden = ColorGrauValue3; /// grau srbe über rang elegen u nd dann teiltransparent machen
const fillOpacitySeriesVorhanden = 1; //war 0.5

const fillSeriesAusgepraegt = ColorGrauValue3; /// farbe fast egal da opacity gering und range farbe wirksam wird
//const fillOpacitySeriesAusgepraegt = 0.01; /// color ist grau siehe series eintrag, opacity bestimmt wie weit grau transparent oder sichtbar ist
const fillOpacitySeriesAusgepraegt = 1;


///EinzelTechUDim
const radiusEinzelTechUDimLabel = 20; //war 16
const radiusEinzelTechUDimLabelAussen = 40;
const fontSizeLabelAussen = 14.5;
const fontSizeLabelKreis = 10;
const fontWeightLabelAussen = 500;
const fontWeightUDimLabelAussen = 700;
var fontSizeLegende = 11; if (window.innerHeight < 700) { fontSizeLegende = 10 };

const ColorGrid = ColorBlack;
const ColorGridEinzelProjekt = am5.Color.lighten(am5.color(0x000000), 0.85);
//const ColorLineGesamt = ColorWhite;
const ColorLineGesamt = am5.Color.lighten(am5.color(0x2D2F42), 0.4);
const ColorStrokeLineGesamt = am5.Color.lighten(am5.color(0x2D2F42), 0.3);

booleanStackedLine = true;

/// Button Settings
var colorKategorieButtonContainer = am5.color(0x212327);
var colorKategorieButtonBackground = am5.Color.brighten(am5.color(0x212327), 0.4);

//var colorKategorieButtonHoverDownActive = am5.Color.lighten(am5.color(0xB89362), -0.2);
var colorKategorieButtonHoverDownActive = am5.Color.brighten(am5.color(0x212327), 0.2);
var colorKategorieButtonInActive = am5.Color.brighten(am5.color(0x212327), 0);

var colorHomeButtonForeground = am5.Color.lighten(am5.color(0xffffff), -0.3);
var colorTextLabelLegend = am5.Color.lighten(am5.color(0xffffff), -0.2);
var colorTextTitel = am5.Color.lighten(am5.color(0xffffff), -0.25);
var colorTextButton = am5.Color.lighten(am5.color(0xffffff), -0.05);


const ColorDim1Value1 = am5.Color.lighten(am5.color(0x538335), 0.0); // Dimension1 in Invite=Interoperabilität, Farbe grün, value 1 ausgeprägt
const ColorDim1Value2 = am5.Color.lighten(am5.color(0x9FAF7B), 0.0); // values 2 vorhanden, ///wird nicht benutzt, da opacity verändert wird
const ColorDim1Value3 = am5.Color.lighten(am5.color(0xD9DFCA), 0.0); // values 3 ohne loch, bewertung 0-1 innen kreis

const ColorDim2Value1 = am5.Color.lighten(am5.color(0x28235C), 0.0); // Serie2 in Invite=Algorithmen, Farbe türkis
const ColorDim2Value2 = am5.Color.lighten(am5.color(0x9895C9), 0.0); // 
const ColorDim2Value3 = am5.Color.lighten(am5.color(0xD6D5EA), 0.0); // 


const ColorDim3Value1 = am5.Color.lighten(am5.color(0x662483), 0.0); // Serie3 in Invite=Nutzerorientierung, Farbe lila
const ColorDim3Value2 = am5.Color.lighten(am5.color(0xBDA3CF), 0.0); // 
const ColorDim3Value3 = am5.Color.lighten(am5.color(0xE5DBEC), 0.0); //

const ColorDim4Value1 = am5.Color.lighten(am5.color(0x36A9E1), 0.0); // Serie4 in Invite=Nachnutzbarkeit, Farbe blau
const ColorDim4Value2 = am5.Color.lighten(am5.color(0x9DCCEF), 0.0); // 
const ColorDim4Value3 = am5.Color.lighten(am5.color(0xD8EBF9), 0.0); //

const ColorDim5Value1 = am5.Color.lighten(am5.color(0xC34A48), 0.0); // Serie5 in Invite=Informationssicherheit, Farbe rot
const ColorDim5Value2 = am5.Color.lighten(am5.color(0xDB9489), 0.0); // 
const ColorDim5Value3 = am5.Color.lighten(am5.color(0xECCFCB), 0.0); //

const ColorDim6Value1 = am5.Color.lighten(am5.color(0x588584), 0.20); // Serie6 in Invite=Informationssicherheit, Farbe hrll türkis, 588584
const ColorDim6Value2 = am5.Color.lighten(am5.color(0xAAB7B7), 0.0); //
const ColorDim6Value3 = am5.Color.lighten(am5.color(0xCEDDDD), 0.25); //

var series1TechDimColors = [ColorDim1Value1, ColorDim2Value1, ColorDim3Value1, ColorDim4Value1, ColorDim5Value1, ColorDim6Value1];
var series2TechDimColors = [ColorDim1Value2, ColorDim2Value2, ColorDim3Value2, ColorDim4Value2, ColorDim5Value2, ColorDim6Value2];
var series3TechDimColors = [ColorDim1Value3, ColorDim2Value3, ColorDim3Value3, ColorDim4Value3, ColorDim5Value3, ColorDim6Value3];

var series1TechUDimColors = [ColorDim1Value1, ColorDim1Value1, ColorDim1Value1, ColorDim1Value1, ColorDim2Value1, ColorDim2Value1, ColorDim2Value1, ColorDim2Value1, ColorDim3Value1, ColorDim3Value1, ColorDim3Value1, ColorDim3Value1, ColorDim4Value1, ColorDim4Value1, ColorDim4Value1, ColorDim4Value1, ColorDim5Value1, ColorDim5Value1, ColorDim5Value1, ColorDim5Value1, ColorDim6Value1, ColorDim6Value1, ColorDim6Value1, ColorDim6Value1];
var series2TechUDimColors = [ColorDim1Value2, ColorDim1Value2, ColorDim1Value2, ColorDim1Value2, ColorDim2Value2, ColorDim2Value2, ColorDim2Value2, ColorDim2Value2, ColorDim3Value2, ColorDim3Value2, ColorDim3Value2, ColorDim3Value2, ColorDim4Value2, ColorDim4Value2, ColorDim4Value2, ColorDim4Value2, ColorDim5Value2, ColorDim5Value2, ColorDim5Value2, ColorDim5Value2, ColorDim6Value2, ColorDim6Value2, ColorDim6Value2, ColorDim6Value2];
var series3TechUDimColors = [ColorDim1Value3, ColorDim1Value3, ColorDim1Value3, ColorDim1Value3, ColorDim2Value3, ColorDim2Value3, ColorDim2Value3, ColorDim2Value3, ColorDim3Value3, ColorDim3Value3, ColorDim3Value3, ColorDim3Value3, ColorDim4Value3, ColorDim4Value3, ColorDim4Value3, ColorDim4Value3, ColorDim5Value3, ColorDim5Value3, ColorDim5Value3, ColorDim5Value3, ColorDim6Value3, ColorDim6Value3, ColorDim6Value3, ColorDim6Value3];

const ColorTooltipSerien = ColorGrauValue3;
const ColorTooltipSerie3 = am5.Color.lighten(am5.color(ColorGrauValue1), 0.8);
const ColorCircleLabel = am5.Color.lighten(am5.color(0x000000), 0.4);

//#endregion ///-----A End Set Colors & Constants-----------------------------------------------------------------------------------------------

const colorKoordinatoren_00 = am5.color(0x2D2F42);
const colorKoordinatoren_01 = am5.Color.lighten(am5.color(0x2D2F42), 0.4);
const colorKoordinatoren_02 = am5.Color.lighten(am5.color(0x5E187E), 0.4);
const colorKoordinatoren_03 = am5.Color.lighten(am5.color(0x501D80), 0.4);
const colorKoordinatoren_04 = am5.Color.lighten(am5.color(0x472786), 0.4);
const colorKoordinatoren_05 = am5.Color.lighten(am5.color(0x42368F), 0.4);
const colorKoordinatoren_06 = am5.Color.lighten(am5.color(0x3F469A), 0.4);
const colorKoordinatoren_07 = am5.Color.lighten(am5.color(0x3F56A7), 0.4);
const colorKoordinatoren_08 = am5.Color.lighten(am5.color(0x4066B3), 0.2);
const colorKoordinatoren_09 = am5.Color.lighten(am5.color(0x4275BC), 0.2);
const colorKoordinatoren_10 = am5.Color.lighten(am5.color(0x4583C1), 0.2);
const colorKoordinatoren_11 = am5.Color.lighten(am5.color(0x4A8FC1), 0.2);
const colorKoordinatoren_12 = am5.Color.lighten(am5.color(0x4F99BB), 0.2);
const colorKoordinatoren_13 = am5.Color.lighten(am5.color(0x56A2B0), 0.2);
const colorKoordinatoren_14 = am5.Color.lighten(am5.color(0x5DA9A3), 0.2);
const colorKoordinatoren_15 = am5.Color.lighten(am5.color(0x65AF94), 0.1);
const colorKoordinatoren_16 = am5.Color.lighten(am5.color(0x6FB386), 0.1);
const colorKoordinatoren_17 = am5.Color.lighten(am5.color(0x79B779), 0.1);
const colorKoordinatoren_18 = am5.Color.lighten(am5.color(0x83BA6D), 0);
const colorKoordinatoren_19 = am5.Color.lighten(am5.color(0x8FBC63), 0);
const colorKoordinatoren_20 = am5.Color.lighten(am5.color(0x9ABE5B), -0.1);
const colorKoordinatoren_21 = am5.Color.lighten(am5.color(0xA6BE53), -0.1);
const colorKoordinatoren_22 = am5.Color.lighten(am5.color(0xB1BE4D), -0.1);
const colorKoordinatoren_23 = am5.Color.lighten(am5.color(0xBDBC48), -0.1);
const colorKoordinatoren_24 = am5.Color.lighten(am5.color(0xC7B944), -0.1);
const colorKoordinatoren_25 = am5.Color.lighten(am5.color(0xD0B540), -0.1);
const colorKoordinatoren_26 = am5.Color.lighten(am5.color(0xD8AF3D), -0.1);
const colorKoordinatoren_27 = am5.Color.lighten(am5.color(0xDEA63A), -0.1);
const colorKoordinatoren_28 = am5.Color.lighten(am5.color(0xE39C37), 0.1);
const colorKoordinatoren_29 = am5.Color.lighten(am5.color(0xE68F34), 0.2);
const colorKoordinatoren_30 = am5.Color.lighten(am5.color(0xE78031), 0.2);
const colorKoordinatoren_31 = am5.Color.lighten(am5.color(0xE76F2E), 0.4);
const colorKoordinatoren_32 = am5.Color.lighten(am5.color(0xE55C2B), 0.4);
const colorKoordinatoren_33 = am5.Color.lighten(am5.color(0xE24827), 0.4);
const colorKoordinatoren_34 = am5.Color.lighten(am5.color(0xDE3424), 0.4);
const colorKoordinatoren_35 = am5.Color.lighten(am5.color(0xD92120), 0.4);


var colorSetKoordinatoren = [
  colorKoordinatoren_00,
  colorKoordinatoren_01,
  colorKoordinatoren_02,
  colorKoordinatoren_03,
  colorKoordinatoren_04,
  colorKoordinatoren_05,
  colorKoordinatoren_06,
  colorKoordinatoren_07,
  colorKoordinatoren_08,
  colorKoordinatoren_09,
  colorKoordinatoren_10,
  colorKoordinatoren_11,
  colorKoordinatoren_12,
  colorKoordinatoren_13,
  colorKoordinatoren_14,
  colorKoordinatoren_15,
  colorKoordinatoren_16,
  colorKoordinatoren_17,
  colorKoordinatoren_18,
  colorKoordinatoren_19,
  colorKoordinatoren_20,
  colorKoordinatoren_21,
  colorKoordinatoren_22,
  colorKoordinatoren_23,
  colorKoordinatoren_24,
  colorKoordinatoren_25,
  colorKoordinatoren_26,
  colorKoordinatoren_27,
  colorKoordinatoren_28,
  colorKoordinatoren_29,
  colorKoordinatoren_30,
  colorKoordinatoren_31,
  colorKoordinatoren_32,
  colorKoordinatoren_33,
  colorKoordinatoren_34,
  colorKoordinatoren_35
];

const colorGesamt_01 = am5.Color.lighten(am5.color(0x9DBBBA), 0.2); //Bewertung 0-1 
const colorGesamt_02 = am5.Color.lighten(am5.color(0x9DBBBA), 0); //Bewertung adressiet=2
const colorGesamt_03 = am5.Color.lighten(am5.color(0x9DBBBA), -0.2); //Bewertung ausgepr.=3

var colorSetGesamt = [
  colorGesamt_01,
  colorGesamt_02,
  colorGesamt_03
];

function setScaleChartDim() {
  var height = window.innerHeight;
  var previousScaleChartDim = scaleChartDim; // Den aktuellen Wert speichern, um später darauf zuzugreifen

  if (height > 750) {
    scaleChartDim = 1;
    scaleChartUDim = 1; //war 0.97
    // alert("Höhe, Scale: " + height + ", " + scaleChartDim);
  } else {
    scaleChartDim = 0.84;
    scaleChartUDim = 0.84;
    //alert("Höhe, Scale: " + height + ", " + scaleChartDim);
  }
  // Überprüfen, ob sich der Wert von scaleChartDim geändert hat und ob er jetzt 1 ist
  if (previousScaleChartDim !== scaleChartDim && scaleChartDim === 1) {
    location.reload(); // Die Seite neu laden
  }
}
window.addEventListener('resize', setScaleChartDim);
// Funktion aufrufen, um die Variable sofort zu setzen
setScaleChartDim();