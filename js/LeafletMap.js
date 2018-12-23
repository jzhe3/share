var  map;

//地图初始化
var Circle = require('js/Circle.js')

function init(){
  
	map = L.map('map').setView([22.9561411926, 113.420253442 ], 9);
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar'}).addTo(map);
    // var latlngs = [[23.06, 113.05],[23.07, 113.03],[24.08, 113.05],[23.09, 114.04]];
    // var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);

// var url = "http://localhost:8080/geoserver/volunteer/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=volunteer%3Avolunteer&maxFeatures=100&outputFormat=application%2Fjson&WITHIN(GEOM, POLYGON((23.06, 113.05 23.07, 113.03 24.08, 113.05 23.09, 114.04)))";

//     var geojson = [
// 		  {
// 		    "type": "Feature",
// 		    "geometry": {
// 		      "type": "Point",
// 		      "coordinates": [113.9230309538,22.5328601327]
// 		    }
// 		  },
// 		  {
// 		    "type": "Feature",
// 		    "geometry": {
// 		      "type": "Point",
// 		      "coordinates": [113.9098394332,22.5308440047]
// 		    }
// 		  },
// 		  {
// 		    "type": "Feature",
// 		    "geometry": {
// 		      "type": "Point",
// 		      "coordinates": [113.9184338316,22.5283211404]
// 		    }
// 		  },
// 		  {
// 		    "type": "Feature",
// 		    "geometry": {
// 		      "type": "Point",
// 		      "coordinates": [113.9001586386,22.5495591260]
// 		    }
// 		  },
// 		  		  {
// 		    "type": "Feature",
// 		    "geometry": {
// 		      "type": "Point",
// 		      "coordinates": [113.9497931782,22.5566469565]
// 		    }
// 		  },
// 		  {
// 		    "type": "Feature",
// 		    "geometry": {
// 		      "type": "Point",
// 		      "coordinates": [113.9592382646,22.5339793452]
// 		    }
// 		  },
// 		  {
// 		    "type": "Feature",
// 		    "geometry": {
// 		      "type": "Point",
// 		      "coordinates": [113.9472855028,22.5067787643]
// 		    }
// 		  },
// 		  {
// 		    "type": "Feature",
// 		    "geometry": {
// 		      "type": "Point",
// 		      "coordinates": [113.8875994756,22.5023345019]
// 		    }
// 		  },
// 		];

// 		var states = [{
// 		    "type": "Feature",
// 		    "properties": {"party": "Republican"},
// 		    "geometry": {
// 		        "type": "Polygon",
// 		        "coordinates": [[
// 					[113.9042260686, 22.5445272920],
// 					[113.9268836350,  22.5436866939],
// 					[113.9248790544,  22.5255291551],
// 					[113.9052404332, 22.5261030047]
// 		        ]]
// 		    }
// 		}];
        // {
		//     "type": "Feature",
		//     "properties": {"party": "Democrat"},
		//     "geometry": {
		//         "type": "Polygon",
		//         "coordinates": [[
		//             [113.9268836350, 22.5436866939],
		//             [113.9494341782,  22.5547779565],
		//             [113.9506008258,  22.5334206170],
		//             [113.9248790544, 22.5255291551]
        //
		//         ]]
		//     }
		// }
        // var circle = [22.5023345019,113.8875994756];
        // var radius = 5;
        // var units = 'kilometers';
        // var properties = { foo: 'bar' };
        //
        // var myCircle = new Circle(circle, radius, {
        //     units: units,
        //     zoom: 12,
        //     properties: properties
        // });
        // var geojsonn = myCircle.asGeojson();
        //var circle = L.circle([ 22.5023345019,113.8875994756], 500).addTo(map);
        // var circles = L.geoJson(geojsonn).addTo(map);

        //var polygons = L.geoJson(states).addTo(map);
	//	var points = L.geoJson(geojson).addTo(map);
       // polygons.eachLayer(function(l){
	//		var results = leafletPip.pointsInPolygon(points,l);
	//		if(results.length>0){

	//			results.forEach(function(r){
	//				console.log(r);
	//				r.setOpacity(0.5);
	//			})

	//		}
	//	});
	//var userpoint = L.marker([23, 113]).addTo(map);
	//lc = L.control.locate({
	//	position: 'topright',
	////	strings: {
	//		title: "定位我当前的位置!"
	//	},
	//	locateOptions: {
	//		enableHighAccuracy: true
	//	}
	//}).addTo(map);
	datas = datas.map(function (p) { return [p[0], p[1]]; });

	var heat = L.heatLayer(datas).addTo(map);
	var option = {
		tooltip: {
				show: true,
						formatter: function(item) {
								return item[0]
						}
						},
						list: [['志愿',3510],
								['活动',2633],
								['补录',1882],
								['2018',1745],
								['志愿者',1510],
								['探访',1395],
								['服务',1286],
								['义工',1245],
								['社区',1165],
								['长者',1016],
								['驿站',1013],
								['招募',765],
								['暑期',650],
								['培训',600],
								['时数',590],
								['值班',585],
								['公益',526],
								['广州',515],
								['羊城',487],
								['夏令营',484],
								['五羊',454],
								['宣传',449],
								['导诊',448],
								['爱洒',436],
								['爱心',426],
								['义剪',423],
								['小组',413],
								['恒常',406],
								['登革热',366],
								['景泰',359],
								['关爱',350],
								['中山大学',348],
								['医院',342],
								['值岗',336],
								['慰问',305],
								['天河',303],
								['火星人',300],
								['工疗',299],
								['协助',287],
								['童梦',261],
								['义工联',261],
								['团建',260],
								['义诊',260],
								['配餐',260],
								['附属',254],
								['2018.8',249],
								['fahaiday',249],
								['天使',248],
								['青少年',237],
								['尚丙辉',236],
								['微信',236],
								['家综',224],
								['学院',223],
								['广场',222],
								['开展',220],
								['行动',216],
								['飞扬',215],
								['文明',215],
								['番禺区',215],
								['白云机场',212],
								['2018.7',211],
								['NO',211],
								['暑假',209],
								['护航',205],
								['交通',204],
								['花都',201],
								['书香',200],
								['禁毒',195],
								['灭蚊',195],
								['第三',193],
								['29',187],
								['课程',185],
								['园工',182],
								['敬老院',177],
								['疗站',174],
								['市桥',174],
								['兴趣班',173],
								['亲子',171],
								['报名',167],
								['图书馆',165],
								['环保',165],
								['院区',165],
								['公益活动',163],
								['露宿',162],
								['三下乡',162],
								['28',162],
								['东涌',162],
								['2017',162],
								['共融',162],
								['服务部',160],
								['中心',160],
								['登峰',160],
								['添加',159],
								['岭南',157],
								['知识',154],
								['南站',153],
								['队长',151],
								['街康',149],
								['11',149],
								['sunny',149]],
						color: '#15a4fa',
						shape: 'circle',
						ellipticity: 1
				}
				var wc = new Js2WordCloud(document.getElementById('container'));
				wc.showLoading({
						backgroundColor: '#fff',
						text: '乐山大佛',
						effect: 'spin'
				})
				setTimeout(function() {
						wc.hideLoading()
						wc.setOption(option)
				}, 2000)

				setTimeout(function() {
						wc.setOption({
								noDataLoadingOption: {
										backgroundColor: '#f00',
										text: '暂无数据'
								}    
						})
				}, 4000)

				setTimeout(function() {
						wc.setOption(option)
				}, 6000)
				var option1 = {
						tooltip: {
								show: true,
												formatter: function(item) {
														return item[0]
												}
										},
										list: [['志愿',1585],
		['志愿者',1227],
		['活动',1147],
		['服务',1088],
		['2018',1087],
		['社区',922],
		['补录',889],
		['长者',712],
		['义工',591],
		['时数',584],
		['开展',547],
		['探访',441],
		['协助',423],
		['暑期',396],
		['广州',391],
		['招募',379],
		['社工',362],
		['00',337],
		['公益',326],
		['宣传',316],
		['爱心',301],
		['文明',300],
		['提供',276],
		['驿站',255],
		['指引',254],
		['青少年',243],
		['值班',236],
		['社会',236],
		['10',231],
		['培训',230],
		['广州市',217],
		['举办',215],
		['精神',205],
		['服务队',204],
		['组织',201],
		['工作',200],
		['关爱',199],
		['医院',195],
		['学生',194],
		['夏令营',191],
		['生活',183],
		['家庭',182],
		['安全',182],
		['进行',182],
		['知识',181],
		['市民',181],
		['30',181],
		['学习用品',179],
		['居民',176],
		['技能',171],
		['义工联',171],
		['航站楼',170],
		['旅客',170],
		['导诊',166],
		['12',166],
		['2017',166],
		['亲子',164],
		['募捐',162],
		['服务中心',158],
		['暑假',156],
		['课程',156],
		['垃圾',154],
		['体验',153],
		['交通',147],
		['引导',147],
		['主题',146],
		['义剪',146],
		['中山大学',144],
		['学习',143],
		['综将',140],
		['青藏',140],
		['配餐',138],
		['日常',137],
		['小组',136],
		['教育',131],
		['天使',128],
		['文化',126],
		['16',125],
		['健康',125],
		['时间',123],
		['慰问',123],
		['了解',122],
		['帮助',122],
		['园工',121],
		['义教',120],
		['书籍',119],
		['附属',119],
		['弘扬',116],
		['11',115],
		['疗站',115],
		['广东',115],
		['儿童',114],
		['南站',114],
		['测试',114],
		['参与',111],
		['东涌家',110],
		['童梦',110],
		['图书馆',108],
		['便民服务',107],
		['通过',107]],
										color: '#15a4fa',
										shape: 'circle',
										ellipticity: 1
								}
								var wc1 = new Js2WordCloud(document.getElementById('container1'));
								wc1.showLoading({
										backgroundColor: '#fff',
										text: '乐山大佛',
										effect: 'spin'
								})
								setTimeout(function() {
										wc1.hideLoading()
										wc1.setOption(option1)
								}, 2000)
				
								setTimeout(function() {
										wc1.setOption({
												noDataLoadingOption: {
														backgroundColor: '#f00',
														text: '暂无数据'
												}    
										})
								}, 4000)
				
								setTimeout(function() {
										wc1.setOption(option1)
								}, 6000)
								var option2 = {
										tooltip: {
												show: true,
																formatter: function(item) {
																		return item[0]
																}
														},
														list: [['志愿者',1675],
				['活动',1246],
				['志愿',1044],
				['服务',898],
				['00',884],
				['30',775],
				['2018',726],
				['义工',677],
				['协助',611],
				['长者',526],
				['社工',431],
				['补录',430],
				['社区',412],
				['12',404],
				['探访',375],
				['开展',367],
				['宣传',363],
				['10',324],
				['时数',303],
				['指引',294],
				['培训',265],
				['进行',257],
				['爱心',257],
				['签到',256],
				['报名',249],
				['现场',245],
				['招募',240],
				['时间',238],
				['驿站',238],
				['提供',236],
				['秩序',230],
				['地点',220],
				['工作',211],
				['内容',201],
				['单车',201],
				['垃圾',192],
				['11',186],
				['14',184],
				['参与',182],
				['地铁',181],
				['16',179],
				['文明',176],
				['广州',175],
				['亲子',171],
				['上午',170],
				['学员',169],
				['13',166],
				['15',166],
				['班次',163],
				['品格',161],
				['17',160],
				['负责',160],
				['市民',158],
				['游戏',157],
				['广州市',156],
				['街家',155],
				['禁毒',154],
				['帮助',153],
				['月昌华',150],
				['学习',150],
				['整理',146],
				['知识',145],
				['孩子',140],
				['咨询',139],
				['居民',137],
				['共享',135],
				['了解',131],
				['需要',129],
				['集合地点',127],
				['老人',127],
				['集合时间',127],
				['引导',125],
				['义剪',124],
				['参加',123],
				['服务中心',122],
				['20',121],
				['下午',121],
				['我们',119],
				['微信',119],
				['安排',119],
				['组织',118],
				['形象',118],
				['家庭',117],
				['通过',117],
				['安全',115],
				['生活',113],
				['物资',112],
				['对象',111],
				['青少年',111],
				['旅客',110],
				['互动',110],
				['课程',110],
				['18',108],
				['小朋友',108],
				['暑期',108],
				['分类',108],
				['社会',108],
				['公益',107],
				['维持',107],
				['团队',105]],
														color: '#15a4fa',
														shape: 'circle',
														ellipticity: 1
												}
												var wc2 = new Js2WordCloud(document.getElementById('container2'));
												wc2.showLoading({
														backgroundColor: '#fff',
														text: '乐山大佛',
														effect: 'spin'
												})
												setTimeout(function() {
														wc2.hideLoading()
														wc2.setOption(option2)
												}, 2000)
								
												setTimeout(function() {
														wc2.setOption({
																noDataLoadingOption: {
																		backgroundColor: '#f00',
																		text: '暂无数据'
																}    
														})
												}, 4000)
								
												setTimeout(function() {
														wc2.setOption(option2)
												}, 6000)
												var option3 = {
														tooltip: {
																show: true,
																				formatter: function(item) {
																						return item[0]
																				}
																		},
																		list: [['志愿者',3035],
				['志愿',2452],
				['报名',1658],
				['活动',1440],
				['服务',1416],
				['义工',1154],
				['参与',669],
				['参加',577],
				['时数',548],
				['00',469],
				['18',453],
				['签到',426],
				['录用',417],
				['30',410],
				['微信',410],
				['安排',399],
				['补录',382],
				['时间',366],
				['服从安排',335],
				['火星人',329],
				['12',325],
				['社工',322],
				['优先',317],
				['周岁',310],
				['身体健康',309],
				['培训',292],
				['审核',292],
				['工作组',288],
				['仅限',285],
				['有权',276],
				['广州',276],
				['请勿',267],
				['20',261],
				['提前',260],
				['服从',256],
				['爱心',255],
				['16',240],
				['公益',236],
				['二维码',234],
				['年龄',232],
				['领队',231],
				['当天',228],
				['以上',215],
				['耐心',212],
				['要求',211],
				['10',208],
				['责任心',205],
				['安全',205],
				['热爱',200],
				['驿站',199],
				['准时到达',195],
				['请假',195],
				['报名者',194],
				['长者',191],
				['录取',190],
				['需要',190],
				['地点',187],
				['拒绝',187],
				['现场',185],
				['岗前',182],
				['视为',179],
				['公众',177],
				['进群',176],
				['注意',173],
				['本次',173],
				['当日',170],
				['系统',170],
				['热心',169],
				['备注',168],
				['空降',166],
				['工作',165],
				['自备',157],
				['短裤',157],
				['通知',153],
				['带队',153],
				['准时',152],
				['签退',149],
				['做好',145],
				['下午',143],
				['身高',143],
				['添加',143],
				['特殊',142],
				['管理员',140],
				['伙伴',140],
				['管理',139],
				['接受',137],
				['欢迎',132],
				['责任',132],
				['整齐',132],
				['热情',131],
				['听从',130],
				['组织',130],
				['值岗',128],
				['45',128],
				['奉献',127],
				['社会',126],
				['通过',126],
				['加入',125],
				['乐于',124],
				['服务队',124]],
																		color: '#15a4fa',
																		shape: 'circle',
																		ellipticity: 1
																}
																var wc3 = new Js2WordCloud(document.getElementById('container3'));
																wc3.showLoading({
																		backgroundColor: '#fff',
																		text: '乐山大佛',
																		effect: 'spin'
																})
																setTimeout(function() {
																		wc3.hideLoading()
																		wc3.setOption(option3)
																}, 2000)
												
																setTimeout(function() {
																		wc3.setOption({
																				noDataLoadingOption: {
																						backgroundColor: '#f00',
																						text: '暂无数据'
																				}    
																		})
																}, 4000)
												
																setTimeout(function() {
																		wc3.setOption(option3)
																}, 6000)
				window.onresize = function() { 
						wc.resize()
						wc1.resize()
						wc2.resize()
						wc3.resize()
				}
// document.getElementById("ciyun_theme").onclick = function(){
//     var aimdiv = document.getElementById("container");
//     if(aimdiv.style.display === "none"){
//         aimdiv.style.display = "block";
//     }else{
//         aimdiv.style.display = "none";
//     }
		
// }

$("#ciyun_select").change(function(){
		var myselect = $(this).children('option:selected').val();
				alert(myselect);
				var aimdiv = document.getElementById("container");
				var aimdiv1 = document.getElementById("container1");
				var aimdiv2 = document.getElementById("container2");
				var aimdiv3 = document.getElementById("container3");
				if(myselect === "ciyun_theme"){
						aimdiv.style.display = "block";
						aimdiv1.style.display = "none";
						aimdiv2.style.display = "none";
						aimdiv3.style.display = "none";
				}
				else if(myselect === "ciyun_instruction"){
						aimdiv1.style.display = "block";
						aimdiv.style.display = "none";
						aimdiv2.style.display = "none";
						aimdiv3.style.display = "none";
				} else if(myselect === "ciyun_content"){
						aimdiv2.style.display = "block";
						aimdiv1.style.display = "none";
						aimdiv.style.display = "none";
						aimdi3v.style.display = "none";
				}else if(myselect === "ciyun_demand"){
						aimdiv3.style.display = "block";
						aimdiv1.style.display = "none";
						aimdiv.style.display = "none";
						aimdiv2.style.display = "none";
				} else{
						aimdiv3.style.display = "none";
						aimdiv1.style.display = "none";
						aimdiv.style.display = "none";
						aimdiv2.style.display = "none";
				}
		});

document.getElementById("heat").onclick = function(){
	
	var myheatmap = document.getElementById("map");
	if(myheatmap.style.display === "none"){
		alert(myheatmap.style.display);
		myheatmap.style.display === "block";
	} else {
		myheatmap.style.display === "none";
		alert(myheatmap.style.display);
	}
};
}
