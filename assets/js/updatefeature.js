require([
        "esri/Map",
        "esri/views/MapView",
		"esri/layers/TileLayer",
        "esri/layers/FeatureLayer",
		"esri/Basemap",
        "esri/layers/GraphicsLayer",
        "esri/geometry/geometryEngine",
        "esri/Graphic",
		"esri/widgets/Expand",
		"esri/Viewpoint",
		"esri/core/watchUtils",

        "dojo/on",
        "dojo/dom",
        "dojo/dom-construct",
        "dojo/domReady!"
    ],	function(
        Map, MapView, TileLayer,
        FeatureLayer, Basemap,GraphicsLayer,
        geometryEngine,Graphic,
		Expand, Viewpoint, watchUtils,
        on, dom, domConstruct
		) {

			var editExpand, editArea, attributeEditing, inputtheme, inputtype, inputtime1, inputtime2,
			 inputgroup, inputtel, inputphone, inputaddress, inputinstruction, inputcontent, inputdemand,
			  inputpeople, updateInstructionDiv;
			  
			var featurelayer_org = new FeatureLayer({
				url: "https://localhost:6443/arcgis/rest/services/excat/FeatureServer/0",
				outFields: ["*"]
			});
			
			var resultlayer = new GraphicsLayer();
			
			var tilelayer = new TileLayer({
				url: "http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer?f=jsapi"
			});
			var basemap = new Basemap({
				baseLayers: tilelayer
			});
			var map = new Map({
				basemap: basemap,
				layers: [featurelayer_org,resultlayer]
			});
			var view = new MapView({
				container: "viewDiv",
				map: map,
				center: [113,23],
				zoom: 10
			});
			setupEditing();
			setupView();
			// view.ui.add("editArea","top-right");
			
			function applyEdits(params){
				unselectFeature();
				var promise = featurelayer_org.applyEdits(params);
				editResultsHandler(promise);
			}
			function editResultsHandler(promise){
				promise
					.then(function(editsResult) {
						var extractObjectId = function(result) {
							return result.objectId;
						};
						
						if (editsResult.addFeatureResults.length > 0){
							var adds = editsResult.addFeatureResults.map(extractObjectId);
							newIncidentId = adds[0];
							
							selectFeature(newIncidentId);
						}
					})
					.catch(function(error){
						console.log("============================");
						console.error("[ applyEdits ] FAILURE:", error.code, error.name, error.message);
						console.log("error = ", error);
					});
			}
			function unselectFeature(){
				attributeEditing.style.display = "none";
				updateInstructionDiv.style.display = "block";
				inputtheme.value = null;
				inputtype.value = null;
				inputtime1.value = null;
				inputtime2.value = null;
				inputgroup.value = null;
				inputtel.value = null;
				inputphone.value = null;
				inputaddress.value = null;
				inputinstruction.value = null;
				inputcontent.value = null;
				inputdemand.value = null;
				inputpeople.value = null;
				view.graphics.removeAll();
			}
			view.on("click",function(event){
				unselectFeature();
				view.hitTest(event).then(function(response){
					if (response.results.length > 0 && response.results[0].graphic) {
						var feature = response.results[0].graphic;
						selectFeature(feature.attributes[featurelayer_org.objectIdField]);
						
						inputtheme.value = feature.attributes["theme"];
						inputtype.value = feature.attributes["type"];
						inputgroup.value = feature.attributes["group_"];
						inputaddress.value = feature.attributes["address"];
						inputtime1.value = feature.attributes["starttime"];
						inputtime2.value = feature.attributes["lasttime"];
						inputtel.value = feature.attributes["lianxiren"];
						inputphone.value = feature.attributes["phone"];
						inputinstruction.value = feature.attributes["instructio"];
						inputcontent.value = feature.attributes["content"];
						inputdemand.value = feature.attributes["demand"];
						inputpeople.value = feature.attributes["num_people"];
						
						attributeEditing.style.display = "block";
						updateInstructionDiv.style.display = "none";
					}
				});
			});
			function selectFeature(objectId){
				var selectionSymbol = {
					type: "simple-marker",
					color: [0,0,0,0],
					style: "squre",
					size: "40px",
					outline: {
						color: [0,255,255,1],
						width: "3px"
					}
				};
				var query = featurelayer_org.createQuery();
				query.where  = featurelayer_org.objectIdField + " = " + objectId;
				featurelayer_org.queryFeatures(query).then(function(results){
					if (results.features.length > 0){
						editFeature = results.features[0];
						editFeature.symbol = selectionSymbol;
						view.graphics.add(editFeature);
					}
				});
			}
			function setupView(){
				editExpand = new Expand({
					expandIconClass: "esri-icon-edit",
					expandTooltip: "Expand Edit",
					expanded: true,
					view: view,
					content: editArea
				});
				view.ui.add(editExpand, "top-right");
			}
			function setupEditing() {
				editArea = dom.byId("editArea");
				updateInstructionDiv = dom.byId("updateInstructionDiv");
				attributeEditing = dom.byId("featureUpdateDiv");
				inputtheme = dom.byId("theme");
				inputtype = dom.byId("type");
				inputtime1 = dom.byId("starttime");
				inputtime2 = dom.byId("lasttime");
				inputgroup = dom.byId("group");
				inputtel = dom.byId("lianxiren");
				inputphone = dom.byId("phone");
				inputaddress = dom.byId("address");
				inputinstruction = dom.byId("instruction");
				inputcontent = dom.byId("content");
				inputdemand = dom.byId("demand");
				inputpeople = dom.byId("people");
				
				on(dom.byId("btnUpdate"), "click", function(){
					if (editFeature) {
						editFeature.attributes["theme"] = inputtheme.value;
						editFeature.attributes["type"] = inputtype.value;
						editFeature.attributes["group_"] = inputgroup.value;
						editFeature.attributes["address"] = inputaddress.value;
						editFeature.attributes["starttime"] = inputtime1.value;
						editFeature.attributes["lasttime"] = inputtime2.value;
						editFeature.attributes["lianxiren"] = inputtel.value;
						editFeature.attributes["phone"] = inputphone.value;
						editFeature.attributes["instructio"] = inputinstruction.value;
						editFeature.attributes["content"] = inputcontent.value;
						editFeature.attributes["demand"] = inputdemand.value;
						editFeature.attributes["num_people"] = inputpeople.value;
						editFeature.attributes["X"] =newIncident.geometry.longitude;
						editFeature.attributes["Y"] =newIncident.geometry.latitude;
						var edits = {
							updateFeatures: [editFeature]
						};
						applyEdits(edits);
					}
				});
				
				on(dom.byId("btnAddFeature"), "click", function(){
					unselectFeature();
					on.once(view, "click", function(event){
						event.stopPropagation();
						
						if (event.mapPoint) {
							point = event.mapPoint.clone();
							point.z = undefined;
							point.hasZ = false;
							
							newIncident = new Graphic({
								geometry: point,
								attributes: {}
							});
							
							var edits = {
								addFeatures: [newIncident]
							};
							
							applyEdits(edits);
							
							attributeEditing.style.display = "block";
							updateInstructionDiv.style.display = "none";
							dom.byId("viewDiv").style.cursor = "auto";
						} else {
							console.error("event.mapPoint is not defined");
						}
					});
					
					dom.byId("viewDiv").style.cursor = "crosshair";
					editArea.style.cursor = "auto";
				});
				
				on(dom.byId("btnDelete"), "click", function(){
					var edits = {
						deleteFeatures: [editFeature]
					};
					applyEdits(edits);
				});
				view.when(function() {
					featurelayer_org.when(function(){
						view.goTo(featurelayer_org.fullExtent);
					});
					watchUtils.whenTrue(view, "stationary", function() {
					  if (editExpand) {
						if (view.zoom <= 14) {
						  editExpand.domNode.style.display = "none";
						} else {
						  editExpand.domNode.style.display = "block";
						}
					  }
					});
				});
			}
			
			function handleLayerLoadError(error){
				console.log("Layer failed to load:", error);
			}
			
	});
