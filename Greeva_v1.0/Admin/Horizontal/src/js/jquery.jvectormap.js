/*
Template Name: Greeva - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
File: Vector maps
*/

! function($) {
	"use strict";

	var VectorMap = function() {
	};

	VectorMap.prototype.init = function() {
		//various examples
		$('#world-map-markers').vectorMap({
			map : 'world_en',
			normalizeFunction : 'polynomial',
			hoverOpacity : 0.7,
			hoverColor : false,
			backgroundColor: '#fff',
			color: '#f2f5f7',
			borderColor: '#bcbfc7',
			colors: {
				in: '#35b8e0',
				au: '#35b8e0',
				gl: '#35b8e0',
				us: '#35b8e0',
				sa: '#35b8e0'
			},
			borderColors: {
				in: '#35b8e0',
				au: '#35b8e0',
				gl: '#35b8e0',
				us: '#35b8e0',
				sa: '#35b8e0'
			}
		});

		$('#usa').vectorMap({
			map: 'usa_en',
			enableZoom: true,
			showTooltip: true,
			selectedColor: null,
			hoverColor: null,
			backgroundColor: '#fff',
			color: '#f2f5f7',
			borderColor: '#bcbfc7',
			colors: {
				mo: '#35b8e0',
				fl: '#35b8e0',
				or: '#35b8e0'
			},
			onRegionClick: function (event, code, region) {
				event.preventDefault();
			}
		});
		$('#iran').vectorMap({
			map: 'iran_ir',
			enableZoom: true,
			showTooltip: true,
			selectedColor: null,
			hoverColor: null,
			backgroundColor: '#fff',
			color: '#f2f5f7',
			borderColor: '#bcbfc7'
		});
		$('#canada').vectorMap({
			map: 'canada_en',
			enableZoom: true,
			showTooltip: true,
			selectedColor: null,
			hoverColor: null,
			backgroundColor: '#fff',
			color: '#f2f5f7',
			borderColor: '#bcbfc7'
		});
		$('#germany').vectorMap({
			map: 'germany_en',
			enableZoom: true,
			showTooltip: true,
			selectedColor: null,
			hoverColor: null,
			backgroundColor: '#fff',
			color: '#31ce77',
			borderColor: '#bcbfc7'
		});
	},
	//init
	$.VectorMap = new VectorMap, $.VectorMap.Constructor =
	VectorMap
}(window.jQuery),

//initializing
function($) {
	"use strict";
	$.VectorMap.init()
}(window.jQuery);
