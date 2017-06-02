var size = 0;

var styleCache_AREAKECAMATAN1={}
var style_AREAKECAMATAN1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3}), 
    })];
    var labelText = "";
    var currentFeature = feature;
    clusteredFeatures = feature.get("features");
    if (typeof clusteredFeatures !== "undefined") {
        if (size >= 2) {
            labelText = size.toString()
        } else {
            labelText = ""
        }
        var key = value + "_" + labelText
        if (!styleCache_AREAKECAMATAN1[key]){
            var text = new ol.style.Text({
                  font: '10.725px \'MS Shell Dlg 2\', sans-serif',
                  text: labelText,
                  textAlign: "center",
                  fill: new ol.style.Fill({
                    color: 'rgba(0, 0, 0, 1)'
                  }),
                });
            styleCache_AREAKECAMATAN1[key] = new ol.style.Style({"text": text})
        }
    } else {
        if (feature.get("Name") !== null && resolution > 0 && resolution < 2800) {
            labelText = String(feature.get("Name"));
        } else {
            labelText = ""
        }
        var key = value + "_" + labelText
        if (!styleCache_AREAKECAMATAN1[key]){
            var text = new ol.style.Text({
                    font: '10.725px \'MS Shell Dlg 2\', sans-serif',
                    text: labelText,
                    textBaseline: "center",
                    textAlign: "left",
                    offsetX: 5,
                    offsetY: 3,
                    fill: new ol.style.Fill({
                      color: 'rgba(0, 0, 0, 1)'
                    }),
                });
            styleCache_AREAKECAMATAN1[key] = new ol.style.Style({"text": text})
        }
    }
    var allStyles = [styleCache_AREAKECAMATAN1[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};