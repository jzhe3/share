function init(){
	L.mapbox.accessToken = 'pk.eyJ1IjoibWlzd2N5IiwiYSI6ImNqbm9iZ2F6MzJmaG8za3FyYmpwZmQ0ZjQifQ.khWNJMJgoYhYiU-EFCNKyg';
	var map = L.mapbox.map('map', 'mapbox.streets')
	.setView([23.124558, 113.312261], 9);

//	var openstreetmap = L.tileLayer(
	//	'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar'}).addTo(map);
		
	//天地图
//	var TDnormalm = L.tileLayer.chinaProvider('TianDiTu.Normal.Map', {//天地图常规地图
//			maxZoom: 18,minZoom: 4
//		 }),
//		TDnormala = L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion', {//天地图常规地图标注
	//		maxZoom: 18,minZoom: 4
		// }),
		//TDimgm = L.tileLayer.chinaProvider('TianDiTu.Satellite.Map', {//天地图卫星影像
			//maxZoom: 18,minZoom: 4
		 //}),
		//TDimga = L.tileLayer.chinaProvider('TianDiTu.Satellite.Annotion', {//天地图卫星影像标注
			//maxZoom: 18,minZoom: 4
		 //});
	//天地图、影像与标注图层组合
	//var TDnormal = L.layerGroup([TDnormalm, TDnormala]),//地图与标注组合
		//	TDimage = L.layerGroup([TDimgm, TDimga]); //影像与标注组合
	//谷歌
	//var GoogleMap = L.tileLayer.chinaProvider('Google.Normal.Map', {//谷歌地图
		//	maxZoom: 18,minZoom: 4
		 //}),
		//Googlesatellite = L.tileLayer.chinaProvider('Google.Satellite.Map', {//谷歌影像
			//maxZoom: 18,minZoom: 4
		 //});
		 
	var featureGroup = L.featureGroup().addTo(map);

  	// Define circle options
  	// http://leafletjs.com/reference.html#circle
  	var circle_options = {
      	color: '#fff',      // Stroke color
      	opacity: 1,         // Stroke opacity
      	weight: 10,         // Stroke weight
      	fillColor: '#000',  // Fill color
      	fillOpacity: 0.6    // Fill opacity
  	};

  	var circle_one = L.circle([38.89415, -77.03738], 20, circle_options).addTo(featureGroup);
  	var circle_two = L.circle([38.89415, -77.03578], 20, circle_options).addTo(featureGroup);

  	// Create array of lat,lon points
  	var line_points = [
      	[38.893596444352134, -77.0381498336792],
      	[38.89337933372204, -77.03792452812195],
      	[38.89316222242831, -77.03761339187622],
      	[38.893028615148424, -77.03731298446655],
      	[38.892920059048464, -77.03691601753235],
      	[38.892903358095296, -77.03637957572937],
      	[38.89301191422077, -77.03592896461487],
      	[38.89316222242831, -77.03549981117249],
      	[38.89340438498248, -77.03514575958252],
      	[38.893596444352134, -77.0349633693695]
  	];

  	// Define polyline options
  	// http://leafletjs.com/reference.html#polyline
  	var polyline_options = {
      	color: '#000'
  	};

  	// Defining a polygon here instead of a polyline will connect the
  	// endpoints and fill the path.
  	// http://leafletjs.com/reference.html#polygon
  	var polyline = L.polyline(line_points, polyline_options).addTo(featureGroup);

  	var drawControl = new L.Control.Draw({
    	edit: {
      	featureGroup: featureGroup
    	}
  	}).addTo(map);

  	map.on('draw:created', function(e) {
      	featureGroup.addLayer(e.layer);
  	});
	
	var url='http://localhost:8080/geoserver/Hubei/wms' 
	const bounderLayer = L.tileLayer.wms(url, { 
		layers: 'Hubei:Volunteer',  
		format: "image/png", 
		crs: L.CRS.EPSG4326, 
		opacity: 0.5, 
		transparent: true 
	}).addTo(map);
	
	var url =
			"http://localhost:8080/geoserver/Hubei/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Hubei%3AVolunteer&maxFeatures=50&outputFormat=application%2Fjson"

	var VolunteerGeoJSON = L.geoJson(null, { 
			onEachFeature: function(feature, marker) {
				marker.bindPopup('<h4 style="color:'+feature.properties.color+'">'+
				'地点：'+ feature.properties.address+
				'<br/>主要内容：'+feature.properties.content+
				'<br/>针对人群：'+feature.properties.demand+
				'<br/>开始时间：'+feature.properties.starttime+'<br/>截止日期：'+feature.properties.lasttime+
				'<br/>所需人数：'+feature.properties.need+'<br/>联系人：'+feature.properties.lianxiren
				);
			}

	}).addTo(map);

	$.ajax({
		url: url, 
		dataType: 'json',
		outputFormat:'text/javascript',
		success: function(data) {
			VolunteerGeoJSON.addData(data);
		},
	});
	
    
}

