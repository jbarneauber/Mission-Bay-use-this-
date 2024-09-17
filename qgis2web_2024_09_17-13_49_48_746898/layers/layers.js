var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Route_1 = new ol.format.GeoJSON();
var features_Route_1 = format_Route_1.readFeatures(json_Route_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_1.addFeatures(features_Route_1);
var lyr_Route_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Route_1, 
                style: style_Route_1,
                popuplayertitle: "Route",
                interactive: false,
                title: '<img src="styles/legend/Route_1.png" /> Route'
            });
var format_GearyStops_2 = new ol.format.GeoJSON();
var features_GearyStops_2 = format_GearyStops_2.readFeatures(json_GearyStops_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GearyStops_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GearyStops_2.addFeatures(features_GearyStops_2);
var lyr_GearyStops_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GearyStops_2, 
                style: style_GearyStops_2,
                popuplayertitle: "Geary Stops",
                interactive: true,
                title: '<img src="styles/legend/GearyStops_2.png" /> Geary Stops'
            });
var format_MarinaEmbarcaderoStops_3 = new ol.format.GeoJSON();
var features_MarinaEmbarcaderoStops_3 = format_MarinaEmbarcaderoStops_3.readFeatures(json_MarinaEmbarcaderoStops_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MarinaEmbarcaderoStops_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarinaEmbarcaderoStops_3.addFeatures(features_MarinaEmbarcaderoStops_3);
var lyr_MarinaEmbarcaderoStops_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MarinaEmbarcaderoStops_3, 
                style: style_MarinaEmbarcaderoStops_3,
                popuplayertitle: "Marina Embarcadero Stops",
                interactive: true,
                title: '<img src="styles/legend/MarinaEmbarcaderoStops_3.png" /> Marina Embarcadero Stops'
            });
var format_Route_4 = new ol.format.GeoJSON();
var features_Route_4 = format_Route_4.readFeatures(json_Route_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_4.addFeatures(features_Route_4);
var lyr_Route_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Route_4, 
                style: style_Route_4,
                popuplayertitle: "Route",
                interactive: false,
                title: '<img src="styles/legend/Route_4.png" /> Route'
            });
var format_Route_5 = new ol.format.GeoJSON();
var features_Route_5 = format_Route_5.readFeatures(json_Route_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_5.addFeatures(features_Route_5);
var lyr_Route_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Route_5, 
                style: style_Route_5,
                popuplayertitle: "Route",
                interactive: false,
                title: '<img src="styles/legend/Route_5.png" /> Route'
            });
var format_MarinStops_6 = new ol.format.GeoJSON();
var features_MarinStops_6 = format_MarinStops_6.readFeatures(json_MarinStops_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MarinStops_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarinStops_6.addFeatures(features_MarinStops_6);
var lyr_MarinStops_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MarinStops_6, 
                style: style_MarinStops_6,
                popuplayertitle: "Marin Stops",
                interactive: true,
                title: '<img src="styles/legend/MarinStops_6.png" /> Marin Stops'
            });
var format_Route_7 = new ol.format.GeoJSON();
var features_Route_7 = format_Route_7.readFeatures(json_Route_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_7.addFeatures(features_Route_7);
var lyr_Route_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Route_7, 
                style: style_Route_7,
                popuplayertitle: "Route",
                interactive: true,
                title: '<img src="styles/legend/Route_7.png" /> Route'
            });
var format_SouthBayStops_8 = new ol.format.GeoJSON();
var features_SouthBayStops_8 = format_SouthBayStops_8.readFeatures(json_SouthBayStops_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthBayStops_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SouthBayStops_8.addFeatures(features_SouthBayStops_8);
var lyr_SouthBayStops_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SouthBayStops_8, 
                style: style_SouthBayStops_8,
                popuplayertitle: "South Bay Stops",
                interactive: false,
                title: '<img src="styles/legend/SouthBayStops_8.png" /> South Bay Stops'
            });
var format_Route_9 = new ol.format.GeoJSON();
var features_Route_9 = format_Route_9.readFeatures(json_Route_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_9.addFeatures(features_Route_9);
var lyr_Route_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Route_9, 
                style: style_Route_9,
                popuplayertitle: "Route",
                interactive: true,
                title: '<img src="styles/legend/Route_9.png" /> Route'
            });
var format_DublinWalnutCreekStops_10 = new ol.format.GeoJSON();
var features_DublinWalnutCreekStops_10 = format_DublinWalnutCreekStops_10.readFeatures(json_DublinWalnutCreekStops_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DublinWalnutCreekStops_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DublinWalnutCreekStops_10.addFeatures(features_DublinWalnutCreekStops_10);
var lyr_DublinWalnutCreekStops_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DublinWalnutCreekStops_10, 
                style: style_DublinWalnutCreekStops_10,
                popuplayertitle: "Dublin Walnut Creek Stops",
                interactive: true,
                title: '<img src="styles/legend/DublinWalnutCreekStops_10.png" /> Dublin Walnut Creek Stops'
            });
var format_Route_11 = new ol.format.GeoJSON();
var features_Route_11 = format_Route_11.readFeatures(json_Route_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_11.addFeatures(features_Route_11);
var lyr_Route_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Route_11, 
                style: style_Route_11,
                popuplayertitle: "Route",
                interactive: false,
                title: '<img src="styles/legend/Route_11.png" /> Route'
            });
var format_19thAveandMissionStops_12 = new ol.format.GeoJSON();
var features_19thAveandMissionStops_12 = format_19thAveandMissionStops_12.readFeatures(json_19thAveandMissionStops_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19thAveandMissionStops_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19thAveandMissionStops_12.addFeatures(features_19thAveandMissionStops_12);
var lyr_19thAveandMissionStops_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19thAveandMissionStops_12, 
                style: style_19thAveandMissionStops_12,
                popuplayertitle: "19th Ave and Mission Stops",
                interactive: true,
                title: '<img src="styles/legend/19thAveandMissionStops_12.png" /> 19th Ave and Mission Stops'
            });
var format_Route_13 = new ol.format.GeoJSON();
var features_Route_13 = format_Route_13.readFeatures(json_Route_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_13.addFeatures(features_Route_13);
var lyr_Route_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Route_13, 
                style: style_Route_13,
                popuplayertitle: "Route",
                interactive: false,
                title: '<img src="styles/legend/Route_13.png" /> Route'
            });
var format_PanhandleStops_14 = new ol.format.GeoJSON();
var features_PanhandleStops_14 = format_PanhandleStops_14.readFeatures(json_PanhandleStops_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PanhandleStops_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PanhandleStops_14.addFeatures(features_PanhandleStops_14);
var lyr_PanhandleStops_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PanhandleStops_14, 
                style: style_PanhandleStops_14,
                popuplayertitle: "Panhandle Stops",
                interactive: true,
                title: '<img src="styles/legend/PanhandleStops_14.png" /> Panhandle Stops'
            });
var format_Route_15 = new ol.format.GeoJSON();
var features_Route_15 = format_Route_15.readFeatures(json_Route_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_15.addFeatures(features_Route_15);
var lyr_Route_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Route_15, 
                style: style_Route_15,
                popuplayertitle: "Route",
                interactive: false,
                title: '<img src="styles/legend/Route_15.png" /> Route'
            });
var format_FremontStops_16 = new ol.format.GeoJSON();
var features_FremontStops_16 = format_FremontStops_16.readFeatures(json_FremontStops_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FremontStops_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FremontStops_16.addFeatures(features_FremontStops_16);
var lyr_FremontStops_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FremontStops_16, 
                style: style_FremontStops_16,
                popuplayertitle: "Fremont Stops",
                interactive: true,
                title: '<img src="styles/legend/FremontStops_16.png" /> Fremont Stops'
            });
var format_Route_17 = new ol.format.GeoJSON();
var features_Route_17 = format_Route_17.readFeatures(json_Route_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_17.addFeatures(features_Route_17);
var lyr_Route_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Route_17, 
                style: style_Route_17,
                popuplayertitle: "Route",
                interactive: false,
                title: '<img src="styles/legend/Route_17.png" /> Route'
            });
var format_BerkeleyOaklandStops_18 = new ol.format.GeoJSON();
var features_BerkeleyOaklandStops_18 = format_BerkeleyOaklandStops_18.readFeatures(json_BerkeleyOaklandStops_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BerkeleyOaklandStops_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BerkeleyOaklandStops_18.addFeatures(features_BerkeleyOaklandStops_18);
var lyr_BerkeleyOaklandStops_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BerkeleyOaklandStops_18, 
                style: style_BerkeleyOaklandStops_18,
                popuplayertitle: "Berkeley Oakland Stops",
                interactive: true,
                title: '<img src="styles/legend/BerkeleyOaklandStops_18.png" /> Berkeley Oakland Stops'
            });
var group_Isochrones15MinWalk = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Isochrones 15 Min Walk"});
var group_BerkeleyRoute = new ol.layer.Group({
                                layers: [lyr_Route_17,lyr_BerkeleyOaklandStops_18,],
                                fold: "open",
                                title: "Berkeley Route"});
var group_FremontRoute = new ol.layer.Group({
                                layers: [lyr_Route_15,lyr_FremontStops_16,],
                                fold: "open",
                                title: "Fremont Route"});
var group_PanhandleRoute = new ol.layer.Group({
                                layers: [lyr_Route_13,lyr_PanhandleStops_14,],
                                fold: "open",
                                title: "Panhandle Route"});
var group_19MissionRoute = new ol.layer.Group({
                                layers: [lyr_Route_11,lyr_19thAveandMissionStops_12,],
                                fold: "open",
                                title: "19 Mission Route"});
var group_DublinWalnutCreek = new ol.layer.Group({
                                layers: [lyr_Route_9,lyr_DublinWalnutCreekStops_10,],
                                fold: "open",
                                title: "Dublin Walnut Creek"});
var group_SouthBayRoute = new ol.layer.Group({
                                layers: [lyr_Route_7,lyr_SouthBayStops_8,],
                                fold: "open",
                                title: "South Bay Route"});
var group_MarinRoute = new ol.layer.Group({
                                layers: [lyr_Route_5,lyr_MarinStops_6,],
                                fold: "open",
                                title: "Marin Route"});
var group_MarinaRoute = new ol.layer.Group({
                                layers: [lyr_MarinaEmbarcaderoStops_3,lyr_Route_4,],
                                fold: "open",
                                title: "Marina Route"});
var group_GearyRoute = new ol.layer.Group({
                                layers: [lyr_Route_1,lyr_GearyStops_2,],
                                fold: "open",
                                title: "Geary Route"});

lyr_ESRIGraylight_0.setVisible(true);lyr_Route_1.setVisible(true);lyr_GearyStops_2.setVisible(true);lyr_MarinaEmbarcaderoStops_3.setVisible(true);lyr_Route_4.setVisible(true);lyr_Route_5.setVisible(true);lyr_MarinStops_6.setVisible(true);lyr_Route_7.setVisible(true);lyr_SouthBayStops_8.setVisible(true);lyr_Route_9.setVisible(true);lyr_DublinWalnutCreekStops_10.setVisible(true);lyr_Route_11.setVisible(true);lyr_19thAveandMissionStops_12.setVisible(true);lyr_Route_13.setVisible(true);lyr_PanhandleStops_14.setVisible(true);lyr_Route_15.setVisible(true);lyr_FremontStops_16.setVisible(true);lyr_Route_17.setVisible(true);lyr_BerkeleyOaklandStops_18.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,group_GearyRoute,group_MarinaRoute,group_MarinRoute,group_SouthBayRoute,group_DublinWalnutCreek,group_19MissionRoute,group_PanhandleRoute,group_FremontRoute,group_BerkeleyRoute];
lyr_Route_1.set('fieldAliases', {'id': 'id', 'time': 'time', 'distance': 'distance', });
lyr_GearyStops_2.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'English Neighborhood': 'English Neighborhood', 'English Primary PoI': 'English Primary PoI', 'English Secondary PoI': 'English Secondary PoI', 'Local Neighborhood': 'Local Neighborhood', 'Local Primary PoI': 'Local Primary PoI', 'Local Secondary PoI': 'Local Secondary PoI', });
lyr_MarinaEmbarcaderoStops_3.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'English Neighborhood': 'English Neighborhood', 'English Primary PoI': 'English Primary PoI', 'English Secondary PoI': 'English Secondary PoI', 'Local Neighborhood': 'Local Neighborhood', 'Local Primary PoI': 'Local Primary PoI', 'Local Secondary PoI': 'Local Secondary PoI', });
lyr_Route_4.set('fieldAliases', {'id': 'id', 'time': 'time', 'distance': 'distance', });
lyr_Route_5.set('fieldAliases', {'id': 'id', 'time': 'time', 'distance': 'distance', });
lyr_MarinStops_6.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'English Neighborhood': 'English Neighborhood', 'English Primary PoI': 'English Primary PoI', 'English Secondary PoI': 'English Secondary PoI', 'Local Neighborhood': 'Local Neighborhood', 'Local Primary PoI': 'Local Primary PoI', 'Local Secondary PoI': 'Local Secondary PoI', });
lyr_Route_7.set('fieldAliases', {'id': 'id', 'time': 'time', 'distance': 'distance', });
lyr_SouthBayStops_8.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'English Neighborhood': 'English Neighborhood', 'English Primary PoI': 'English Primary PoI', 'English Secondary PoI': 'English Secondary PoI', 'Local Neighborhood': 'Local Neighborhood', 'Local Primary PoI': 'Local Primary PoI', 'Local Secondary PoI': 'Local Secondary PoI', });
lyr_Route_9.set('fieldAliases', {'id': 'id', 'time': 'time', 'distance': 'distance', });
lyr_DublinWalnutCreekStops_10.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'English Neighborhood': 'English Neighborhood', 'English Primary PoI': 'English Primary PoI', 'English Secondary PoI': 'English Secondary PoI', 'Local Neighborhood': 'Local Neighborhood', 'Local Primary PoI': 'Local Primary PoI', 'Local Secondary PoI': 'Local Secondary PoI', });
lyr_Route_11.set('fieldAliases', {'id': 'id', 'time': 'time', 'distance': 'distance', });
lyr_19thAveandMissionStops_12.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'English Neighborhood': 'English Neighborhood', 'English Primary PoI': 'English Primary PoI', 'English Secondary PoI': 'English Secondary PoI', 'Local Neighborhood': 'Local Neighborhood', 'Local Primary PoI': 'Local Primary PoI', 'Local Secondary PoI': 'Local Secondary PoI', });
lyr_Route_13.set('fieldAliases', {'id': 'id', 'time': 'time', 'distance': 'distance', });
lyr_PanhandleStops_14.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'English Neighborhood': 'English Neighborhood', 'English Primary PoI': 'English Primary PoI', 'English Secondary PoI': 'English Secondary PoI', 'Local Neighborhood': 'Local Neighborhood', 'Local Primary PoI': 'Local Primary PoI', 'Local Secondary PoI': 'Local Secondary PoI', });
lyr_Route_15.set('fieldAliases', {'id': 'id', 'time': 'time', 'distance': 'distance', });
lyr_FremontStops_16.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'English Neighborhood': 'English Neighborhood', 'English Primary PoI': 'English Primary PoI', 'English Secondary PoI': 'English Secondary PoI', 'Local Neighborhood': 'Local Neighborhood', 'Local Primary PoI': 'Local Primary PoI', 'Local Secondary PoI': 'Local Secondary PoI', });
lyr_Route_17.set('fieldAliases', {'id': 'id', 'time': 'time', 'distance': 'distance', });
lyr_BerkeleyOaklandStops_18.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'English Neighborhood': 'English Neighborhood', 'English Primary PoI': 'English Primary PoI', 'English Secondary PoI': 'English Secondary PoI', 'Local Neighborhood': 'Local Neighborhood', 'Local Primary PoI': 'Local Primary PoI', 'Local Secondary PoI': 'Local Secondary PoI', });
lyr_Route_1.set('fieldImages', {'id': 'Range', 'time': 'TextEdit', 'distance': 'TextEdit', });
lyr_GearyStops_2.set('fieldImages', {'Name': '', 'Latitude': '', 'Longitude': '', 'English Neighborhood': '', 'English Primary PoI': '', 'English Secondary PoI': '', 'Local Neighborhood': '', 'Local Primary PoI': '', 'Local Secondary PoI': '', });
lyr_MarinaEmbarcaderoStops_3.set('fieldImages', {'Name': '', 'Latitude': '', 'Longitude': '', 'English Neighborhood': '', 'English Primary PoI': '', 'English Secondary PoI': '', 'Local Neighborhood': '', 'Local Primary PoI': '', 'Local Secondary PoI': '', });
lyr_Route_4.set('fieldImages', {'id': 'Range', 'time': 'TextEdit', 'distance': 'TextEdit', });
lyr_Route_5.set('fieldImages', {'id': 'Range', 'time': 'TextEdit', 'distance': 'TextEdit', });
lyr_MarinStops_6.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'English Neighborhood': 'Hidden', 'English Primary PoI': 'Hidden', 'English Secondary PoI': 'Hidden', 'Local Neighborhood': 'Hidden', 'Local Primary PoI': 'Hidden', 'Local Secondary PoI': 'Hidden', });
lyr_Route_7.set('fieldImages', {'id': 'Range', 'time': 'TextEdit', 'distance': 'TextEdit', });
lyr_SouthBayStops_8.set('fieldImages', {'Name': '', 'Latitude': '', 'Longitude': '', 'English Neighborhood': '', 'English Primary PoI': '', 'English Secondary PoI': '', 'Local Neighborhood': '', 'Local Primary PoI': '', 'Local Secondary PoI': '', });
lyr_Route_9.set('fieldImages', {'id': 'Range', 'time': 'TextEdit', 'distance': 'TextEdit', });
lyr_DublinWalnutCreekStops_10.set('fieldImages', {'Name': '', 'Latitude': '', 'Longitude': '', 'English Neighborhood': '', 'English Primary PoI': '', 'English Secondary PoI': '', 'Local Neighborhood': '', 'Local Primary PoI': '', 'Local Secondary PoI': '', });
lyr_Route_11.set('fieldImages', {'id': 'Range', 'time': 'TextEdit', 'distance': 'TextEdit', });
lyr_19thAveandMissionStops_12.set('fieldImages', {'Name': '', 'Latitude': '', 'Longitude': '', 'English Neighborhood': '', 'English Primary PoI': '', 'English Secondary PoI': '', 'Local Neighborhood': '', 'Local Primary PoI': '', 'Local Secondary PoI': '', });
lyr_Route_13.set('fieldImages', {'id': 'Range', 'time': 'TextEdit', 'distance': 'TextEdit', });
lyr_PanhandleStops_14.set('fieldImages', {'Name': '', 'Latitude': '', 'Longitude': '', 'English Neighborhood': '', 'English Primary PoI': '', 'English Secondary PoI': '', 'Local Neighborhood': '', 'Local Primary PoI': '', 'Local Secondary PoI': '', });
lyr_Route_15.set('fieldImages', {'id': 'Range', 'time': 'TextEdit', 'distance': 'TextEdit', });
lyr_FremontStops_16.set('fieldImages', {'Name': '', 'Latitude': '', 'Longitude': '', 'English Neighborhood': '', 'English Primary PoI': '', 'English Secondary PoI': '', 'Local Neighborhood': '', 'Local Primary PoI': '', 'Local Secondary PoI': '', });
lyr_Route_17.set('fieldImages', {'id': 'Range', 'time': 'TextEdit', 'distance': 'TextEdit', });
lyr_BerkeleyOaklandStops_18.set('fieldImages', {'Name': '', 'Latitude': '', 'Longitude': '', 'English Neighborhood': '', 'English Primary PoI': '', 'English Secondary PoI': '', 'Local Neighborhood': '', 'Local Primary PoI': '', 'Local Secondary PoI': '', });
lyr_Route_1.set('fieldLabels', {'id': 'hidden field', 'time': 'hidden field', 'distance': 'hidden field', });
lyr_GearyStops_2.set('fieldLabels', {'Name': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'English Neighborhood': 'hidden field', 'English Primary PoI': 'hidden field', 'English Secondary PoI': 'hidden field', 'Local Neighborhood': 'hidden field', 'Local Primary PoI': 'hidden field', 'Local Secondary PoI': 'hidden field', });
lyr_MarinaEmbarcaderoStops_3.set('fieldLabels', {'Name': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'English Neighborhood': 'hidden field', 'English Primary PoI': 'hidden field', 'English Secondary PoI': 'hidden field', 'Local Neighborhood': 'hidden field', 'Local Primary PoI': 'hidden field', 'Local Secondary PoI': 'hidden field', });
lyr_Route_4.set('fieldLabels', {'id': 'hidden field', 'time': 'hidden field', 'distance': 'hidden field', });
lyr_Route_5.set('fieldLabels', {'id': 'header label - always visible', 'time': 'hidden field', 'distance': 'hidden field', });
lyr_MarinStops_6.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Route_7.set('fieldLabels', {'id': 'hidden field', 'time': 'hidden field', 'distance': 'hidden field', });
lyr_SouthBayStops_8.set('fieldLabels', {'Name': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'English Neighborhood': 'hidden field', 'English Primary PoI': 'hidden field', 'English Secondary PoI': 'hidden field', 'Local Neighborhood': 'hidden field', 'Local Primary PoI': 'hidden field', 'Local Secondary PoI': 'hidden field', });
lyr_Route_9.set('fieldLabels', {'id': 'hidden field', 'time': 'hidden field', 'distance': 'hidden field', });
lyr_DublinWalnutCreekStops_10.set('fieldLabels', {'Name': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'English Neighborhood': 'hidden field', 'English Primary PoI': 'hidden field', 'English Secondary PoI': 'hidden field', 'Local Neighborhood': 'hidden field', 'Local Primary PoI': 'hidden field', 'Local Secondary PoI': 'hidden field', });
lyr_Route_11.set('fieldLabels', {'id': 'hidden field', 'time': 'hidden field', 'distance': 'hidden field', });
lyr_19thAveandMissionStops_12.set('fieldLabels', {'Name': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'English Neighborhood': 'hidden field', 'English Primary PoI': 'hidden field', 'English Secondary PoI': 'hidden field', 'Local Neighborhood': 'hidden field', 'Local Primary PoI': 'hidden field', 'Local Secondary PoI': 'hidden field', });
lyr_Route_13.set('fieldLabels', {'id': 'hidden field', 'time': 'hidden field', 'distance': 'hidden field', });
lyr_PanhandleStops_14.set('fieldLabels', {'Name': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'English Neighborhood': 'hidden field', 'English Primary PoI': 'hidden field', 'English Secondary PoI': 'hidden field', 'Local Neighborhood': 'hidden field', 'Local Primary PoI': 'hidden field', 'Local Secondary PoI': 'hidden field', });
lyr_Route_15.set('fieldLabels', {'id': 'hidden field', 'time': 'hidden field', 'distance': 'hidden field', });
lyr_FremontStops_16.set('fieldLabels', {'Name': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'English Neighborhood': 'hidden field', 'English Primary PoI': 'hidden field', 'English Secondary PoI': 'hidden field', 'Local Neighborhood': 'hidden field', 'Local Primary PoI': 'hidden field', 'Local Secondary PoI': 'hidden field', });
lyr_Route_17.set('fieldLabels', {'id': 'hidden field', 'time': 'hidden field', 'distance': 'hidden field', });
lyr_BerkeleyOaklandStops_18.set('fieldLabels', {'Name': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'English Neighborhood': 'hidden field', 'English Primary PoI': 'hidden field', 'English Secondary PoI': 'hidden field', 'Local Neighborhood': 'hidden field', 'Local Primary PoI': 'hidden field', 'Local Secondary PoI': 'hidden field', });
lyr_BerkeleyOaklandStops_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});