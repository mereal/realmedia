var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_POLARUANG0 = new ol.format.GeoJSON();
var features_POLARUANG0 = format_POLARUANG0.readFeatures(json_POLARUANG0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_POLARUANG0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_POLARUANG0.addFeatures(features_POLARUANG0);var lyr_POLARUANG0 = new ol.layer.Vector({
                source:jsonSource_POLARUANG0, 
                style: style_POLARUANG0,
                title: "POLA RUANG"
            });var format_AREAKECAMATAN1 = new ol.format.GeoJSON();
var features_AREAKECAMATAN1 = format_AREAKECAMATAN1.readFeatures(json_AREAKECAMATAN1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AREAKECAMATAN1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AREAKECAMATAN1.addFeatures(features_AREAKECAMATAN1);var lyr_AREAKECAMATAN1 = new ol.layer.Vector({
                source:jsonSource_AREAKECAMATAN1, 
                style: style_AREAKECAMATAN1,
                title: "AREA KECAMATAN"
            });var format_AREAPARIWISATA2 = new ol.format.GeoJSON();
var features_AREAPARIWISATA2 = format_AREAPARIWISATA2.readFeatures(json_AREAPARIWISATA2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AREAPARIWISATA2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AREAPARIWISATA2.addFeatures(features_AREAPARIWISATA2);var lyr_AREAPARIWISATA2 = new ol.layer.Vector({
                source:jsonSource_AREAPARIWISATA2, 
                style: style_AREAPARIWISATA2,
                title: "AREA PARIWISATA"
            });var format_TITIKPARIWISATA3 = new ol.format.GeoJSON();
var features_TITIKPARIWISATA3 = format_TITIKPARIWISATA3.readFeatures(json_TITIKPARIWISATA3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TITIKPARIWISATA3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TITIKPARIWISATA3.addFeatures(features_TITIKPARIWISATA3);var lyr_TITIKPARIWISATA3 = new ol.layer.Vector({
                source:jsonSource_TITIKPARIWISATA3, 
                style: style_TITIKPARIWISATA3,
                title: "TITIK PARIWISATA"
            });var format_TITIKKECAMATAN4 = new ol.format.GeoJSON();
var features_TITIKKECAMATAN4 = format_TITIKKECAMATAN4.readFeatures(json_TITIKKECAMATAN4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TITIKKECAMATAN4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TITIKKECAMATAN4.addFeatures(features_TITIKKECAMATAN4);var lyr_TITIKKECAMATAN4 = new ol.layer.Vector({
                source:jsonSource_TITIKKECAMATAN4, 
                style: style_TITIKKECAMATAN4,
                title: "TITIK KECAMATAN"
            });

lyr_POLARUANG0.setVisible(true);lyr_AREAKECAMATAN1.setVisible(true);lyr_AREAPARIWISATA2.setVisible(true);lyr_TITIKPARIWISATA3.setVisible(true);lyr_TITIKKECAMATAN4.setVisible(true);
var layersList = [baseLayer,lyr_POLARUANG0,lyr_AREAKECAMATAN1,lyr_AREAPARIWISATA2,lyr_TITIKPARIWISATA3,lyr_TITIKKECAMATAN4];
lyr_POLARUANG0.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AREAKECAMATAN1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_AREAPARIWISATA2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_TITIKPARIWISATA3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_TITIKKECAMATAN4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_POLARUANG0.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_AREAKECAMATAN1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_AREAPARIWISATA2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_TITIKPARIWISATA3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_TITIKKECAMATAN4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_POLARUANG0.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AREAKECAMATAN1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_AREAPARIWISATA2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_TITIKPARIWISATA3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_TITIKKECAMATAN4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_TITIKKECAMATAN4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});