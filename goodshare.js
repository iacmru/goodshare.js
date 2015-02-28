/*
	@author Interactive agency "Central marketing" http://iacm.ru
	@copyright Copyright (c) 2015, Interactive agency "Central marketing"	
	@license http://opensource.org/licenses/MIT The MIT License (MIT)
	@version 2.0 at 24/02/2015 (19:45)
	
	goodshare.js
	
	Useful jQuery plugin that will help your website visitors share a link on social networks and microblogs.
	Easy to install and configuring on any of your website!
*/

;(function($, document, window, undefined) {
	
	$(document).ready(function() {
		
		goodshare = {
			
			/*
				Declaration SVG icons
			*/
			
			svgicons: {
				 
				vk: 'M136.023,103.305c-3.89-4.194-9.066-6.97-15.534-8.329v-0.563c4.499-1.873,8.024-4.802,10.579-8.786c2.554-3.982,3.832-8.527,3.832-13.637c0-4.404-0.927-8.294-2.777-11.667c-1.853-3.374-4.651-6.069-8.4-8.085c-3.468-1.873-7.181-3.104-11.142-3.69c-3.959-0.585-9.781-0.879-17.467-0.879H58.141v104.664h41.894c7.265,0,13.251-0.654,17.961-1.968c4.71-1.311,9.032-3.514,12.969-6.607c3.326-2.576,5.974-5.835,7.942-9.77c1.969-3.938,2.953-8.507,2.953-13.706C141.858,113.156,139.914,107.499,136.023,103.305L136.023,103.305z M107.907,131.104c-2.718,1.172-5.391,1.805-8.013,1.897c-2.625,0.096-7.359,0.141-14.2,0.141h-1.406v-26.218h4.851c4.685,0,8.423,0.034,11.212,0.105c2.787,0.069,4.978,0.41,6.572,1.017c2.624,0.939,4.592,2.319,5.904,4.148s1.97,4.358,1.97,7.593c0,2.529-0.552,4.792-1.653,6.783C112.041,128.564,110.296,130.076,107.907,131.104L107.907,131.104z M102.636,87.383c-1.922,0.892-3.784,1.384-5.589,1.478S92.092,89,87.593,89h-3.304V66.858h1.828c4.686,0,8.212,0.035,10.578,0.105c2.365,0.069,4.417,0.48,6.149,1.229c1.828,0.798,3.176,2.086,4.043,3.867c0.866,1.78,1.301,3.514,1.301,5.201c0,2.297-0.399,4.312-1.195,6.045C106.196,85.04,104.744,86.399,102.636,87.383L102.636,87.383z',
				ok: 'M82.646,103.7c5.4,3.267,11.183,4.899,17.35,4.899c6.166,0,11.951-1.633,17.35-4.899c1.866-1.133,3.783-1.483,5.75-1.05c1.966,0.434,3.55,1.55,4.75,3.35c1.065,1.867,1.383,3.784,0.95,5.75c-0.435,1.967-1.55,3.55-3.35,4.75c-4.668,2.935-9.668,5-15,6.2l14.399,14.399c1.533,1.533,2.3,3.301,2.3,5.301s-0.767,3.766-2.3,5.3c-1.534,1.532-3.3,2.3-5.3,2.3s-3.8-0.734-5.4-2.2l-14.1-14.2l-14.2,14.2c-1.534,1.466-3.3,2.2-5.3,2.2s-3.767-0.768-5.3-2.3c-1.535-1.534-2.3-3.284-2.3-5.25c0-1.968,0.733-3.75,2.2-5.351l14.4-14.399c-5.267-1.2-10.267-3.266-15-6.2c-1.8-1.2-2.917-2.783-3.35-4.75c-0.434-1.966-0.084-3.883,1.05-5.75c0.732-1.133,1.666-2,2.8-2.6c1.133-0.601,2.366-0.9,3.7-0.9C80.079,102.5,81.379,102.9,82.646,103.7z M118.247,57.6c4.865,4.867,7.399,10.934,7.6,18.2c-0.2,7.268-2.734,13.334-7.6,18.2c-4.867,4.867-10.935,7.4-18.201,7.6c-7.334-0.199-13.417-2.732-18.25-7.6c-4.834-4.866-7.35-10.933-7.55-18.2c0.2-7.266,2.715-13.333,7.55-18.2c4.833-4.866,10.916-7.4,18.25-7.6C107.312,50.2,113.38,52.734,118.247,57.6z M92.497,68.25c-2.035,2.034-3.084,4.55-3.15,7.55c0.066,3,1.116,5.518,3.15,7.55c2.033,2.034,4.55,3.084,7.55,3.15c3-0.065,5.516-1.116,7.55-3.15c2.033-2.033,3.083-4.55,3.15-7.55c-0.067-3-1.117-5.516-3.15-7.55c-2.034-2.033-4.55-3.083-7.55-3.15C97.046,65.167,94.529,66.217,92.497,68.25z',
				fb: 'M73.1,103.7V84.6h15.4V75c0-6.933,2.266-12.833,6.801-17.7c4.531-4.865,9.965-7.3,16.299-7.3H126.9v19.1H111.6c-1,0-1.9,0.534-2.699,1.6c-0.801,1.067-1.201,2.434-1.201,4.1v9.8H126.9v19.1h-19.201V150H88.5v-46.3H73.1z',
				tw: 'M38.5,138.698c2,0.201,4,0.301,6,0.301c11.732,0,22.2-3.601,31.4-10.8c-5.468-0.066-10.367-1.733-14.7-5c-4.335-3.266-7.3-7.434-8.9-12.5c1.333,0.267,2.9,0.399,4.7,0.399c2.333,0,4.565-0.3,6.7-0.899c-5.867-1.133-10.7-4.033-14.5-8.7c-3.8-4.666-5.734-10-5.8-16v-0.3c3.532,2,7.365,3.034,11.5,3.1c-3.468-2.266-6.2-5.266-8.2-9c-2-3.732-3.034-7.732-3.101-12c0-4.533,1.166-8.766,3.5-12.7c6.266,7.8,13.934,14,23,18.6c9.066,4.6,18.733,7.2,29,7.8c-0.467-2.2-0.699-4.133-0.699-5.8c0-6.933,2.465-12.866,7.399-17.8c4.933-4.933,10.9-7.4,17.9-7.4c7.266,0,13.399,2.667,18.399,8c5.801-1.2,11.133-3.266,16-6.2c-1.867,6.067-5.534,10.734-11,14c4.866-0.6,9.666-1.933,14.4-4c-3.2,5-7.367,9.367-12.5,13.1v3.3c0,6.734-0.967,13.467-2.9,20.2c-1.934,6.734-4.934,13.2-9,19.4s-8.899,11.7-14.5,16.5c-5.6,4.8-12.3,8.632-20.1,11.499s-16.234,4.266-25.3,4.201C63.266,149.999,50.365,146.231,38.5,138.698z',
				gp: 'M40.8,131.799c0-5.8,2.966-10.966,8.9-15.5c5.933-4.532,13.1-6.8,21.5-6.8h5.4c-2.801-2.665-4.201-5.532-4.201-8.6c0-1.933,0.533-3.866,1.602-5.8c-0.668,0.067-1.635,0.1-2.9,0.1c-6.935,0-12.601-2.166-17.001-6.5c-4.399-4.333-6.6-9.666-6.6-16c0-6.066,2.732-11.366,8.2-15.9c5.466-4.533,11.699-6.8,18.699-6.8h31l-6.898,5H88.7c3.133,1.2,5.6,3.467,7.4,6.8c1.799,3.334,2.666,7.035,2.6,11.1c0,6.2-2.934,11.6-8.801,16.2c-2.467,1.934-4.066,3.467-4.799,4.6c-0.734,1.134-1.1,2.534-1.1,4.2c0,1.267,0.898,2.867,2.699,4.8c1.801,1.935,3.6,3.567,5.4,4.9c4.064,2.867,6.9,5.8,8.5,8.8s2.365,6.767,2.299,11.3c0,6-2.734,11.232-8.199,15.7c-5.467,4.465-12.867,6.665-22.199,6.6c-8.868,0-16.368-1.667-22.501-5C43.865,141.665,40.8,137.265,40.8,131.799z M52,128.499c0,4.6,1.966,8.533,5.9,11.8c3.933,3.266,8.765,4.866,14.499,4.8c7.934,0,13.701-1.467,17.301-4.399c3.6-2.935,5.365-6.833,5.301-11.7c0-1.266-0.135-2.333-0.4-3.2c-0.201-0.732-0.436-1.433-0.701-2.1c-0.266-0.666-0.666-1.3-1.199-1.9l-1.4-1.6c-0.4-0.466-1.033-1-1.9-1.601l-4.6-3.3c-1.135-0.8-2-1.365-2.6-1.699c-2.6-0.801-5.168-1.2-7.699-1.2c-6-0.065-11.235,1.5-15.701,4.7C54.333,120.299,52.065,124.099,52,128.499z M58.6,72.6c0.733,5.267,2.766,9.8,6.101,13.6c3.332,3.8,6.965,5.75,10.9,5.85c3.932,0.1,7.064-1.65,9.4-5.25c2.332-3.6,3.164-8.033,2.5-13.3c-0.668-5.266-2.635-9.733-5.9-13.4c-3.268-3.666-6.936-5.566-11-5.7c-4.068-0.133-7.235,1.567-9.501,5.1C58.833,63.034,58,67.399,58.6,72.6z M114.101,75v-5h20V50h5v20h20.1v5h-20.1v20.1h-5V75H114.101z',
				tm: 'M69.2,91V76.8c4-1.333,7.366-3.133,10.101-5.4c2.732-2.266,4.965-5.133,6.699-8.6c1.733-3.465,2.9-7.732,3.5-12.8h14.3v25.3h23.701V91H103.8v25.6c0,5.734,0.301,9.435,0.9,11.101c0.6,1.667,1.732,3,3.4,4c2.266,1.334,4.801,2,7.6,2c5.133,0,10.166-1.633,15.1-4.9v15.7c-4.199,2.065-8.049,3.5-11.549,4.3s-7.25,1.2-11.25,1.2c-4.535,0-8.6-0.567-12.2-1.7c-3.668-1.267-6.668-2.935-9-5c-2.335-2.067-4.035-4.334-5.101-6.8c-0.935-2.266-1.399-5.766-1.399-10.5V91H69.2z',
				bl: 'M50.2,118.499V81.6c0-8.666,3.101-16.1,9.3-22.3c6.2-6.2,13.633-9.3,22.3-9.3h22.102c4.332,0.534,8.965,2.435,13.898,5.7c4.934,3.267,8.4,7.1,10.4,11.5l0.5,0.9c0.266,0.467,0.434,0.8,0.5,1l0.4,1c0.199,0.467,0.332,0.867,0.4,1.2l0.699,3.8c0.133,0.734,0.266,1.7,0.4,2.9c0.6,4.667,1.465,7.5,2.6,8.5c0.934,0.867,3.301,1.334,7.1,1.4c3.801,0.067,5.967,0.334,6.5,0.8l1.4,1.1l0.801,1.7l0.299,1.4l-0.199,25.6c-0.066,8.667-3.168,16.1-9.301,22.3s-13.533,9.266-22.199,9.2H81.8c-8.667,0-16.1-3.067-22.3-9.2C53.301,134.666,50.2,127.233,50.2,118.499z M76.101,81.799c0,1.667,0.6,3.1,1.8,4.3c1.2,1.2,2.634,1.8,4.3,1.8h17.5c1.666,0,3.1-0.6,4.301-1.8c1.199-1.2,1.766-2.633,1.699-4.3c-0.066-1.666-0.635-3.1-1.699-4.3c-1.068-1.2-2.5-1.766-4.301-1.7H82.2c-1.666,0-3.1,0.567-4.3,1.7C76.7,78.634,76.101,80.067,76.101,81.799z M76.101,117.999c0,1.667,0.6,3.067,1.8,4.2c1.2,1.135,2.634,1.734,4.3,1.8h35.6c1.666,0,3.102-0.6,4.301-1.8s1.766-2.6,1.699-4.2c-0.066-1.6-0.633-3.032-1.699-4.3c-1.066-1.266-2.5-1.833-4.301-1.7H82.2c-1.666,0-3.1,0.567-4.3,1.7C76.7,114.834,76.101,116.267,76.101,117.999z',
				li: 'M48.2,62.025c0-3.333,1.166-6.1,3.5-8.3c2.333-2.2,5.35-3.283,9.05-3.25c3.7,0.034,6.7,1.134,9,3.3c2.3,2.167,3.45,5.017,3.45,8.55c0,3.2-1.15,5.885-3.45,8.05c-2.3,2.167-5.35,3.25-9.15,3.25h-0.1c-3.667,0-6.634-1.1-8.9-3.3C49.333,68.125,48.2,65.36,48.2,62.025z M49.5,149.525v-66.8h22.2v66.8H49.5z M84,149.525h22.2v-37.3c0-2.333,0.266-4.133,0.8-5.4c0.933-2.266,2.366-4.2,4.3-5.8c1.934-1.6,4.301-2.366,7.101-2.3c7.466,0,11.2,5.034,11.2,15.1v35.7H151.8v-38.3c0-9.866-2.334-17.366-7-22.5c-4.667-5.133-10.834-7.666-18.5-7.6c-8.6,0-15.3,3.7-20.1,11.1v0.2h-0.1l0.1-0.2v-9.5H84c0.133,2.134,0.2,8.767,0.2,19.899C84.2,113.76,84.133,129.393,84,149.525z',
				pt: 'M61.3,85.89c0-4.2,0.9-8.366,2.7-12.5c1.8-4.133,4.333-7.965,7.6-11.5c3.266-3.533,7.6-6.4,13-8.6c5.4-2.2,11.333-3.3,17.8-3.3c10.601,0,19.301,3.267,26.101,9.8c6.8,6.535,10.2,14.234,10.2,23.1c0,11.4-2.867,20.8-8.601,28.201c-5.734,7.399-13.2,11.134-22.399,11.199c-3,0-5.801-0.699-8.4-2.1s-4.467-3.1-5.6-5.1l-4,15.8c-0.335,1.267-0.768,2.534-1.301,3.8c-0.534,1.266-1.1,2.532-1.7,3.8c-0.6,1.266-1.234,2.4-1.9,3.4c-0.667,1-1.3,2-1.9,3s-1.167,1.8-1.7,2.399c-0.534,0.601-0.967,1.133-1.3,1.601l-0.6,0.8c-0.2,0.266-0.467,0.365-0.8,0.3c-0.334-0.067-0.535-0.268-0.6-0.6l-0.1-1.4c-0.067-0.867-0.167-1.768-0.3-2.7c-0.135-0.935-0.234-2.2-0.3-3.8c-0.067-1.6-0.1-3.067-0.1-4.4c0-1.334,0.1-2.933,0.3-4.8c0.2-1.865,0.433-3.465,0.7-4.8l7.4-31.3c-0.535-1.066-0.967-2.366-1.3-3.9c-0.334-1.533-0.5-2.732-0.5-3.6l-0.1-1.5c0-4.266,1.1-7.833,3.3-10.7c2.2-2.866,4.8-4.266,7.8-4.2c2.465,0,4.399,0.8,5.8,2.4c1.399,1.6,2.065,3.667,2,6.2c0,1.535-0.268,3.4-0.8,5.6c-0.535,2.2-1.301,4.767-2.301,7.7c-1,2.934-1.667,5.3-2,7.1c-0.667,3-0.066,5.601,1.801,7.801c1.865,2.199,4.3,3.3,7.3,3.3c5.266,0,9.633-3,13.1-9c3.466-6,5.166-13.2,5.101-21.601c0-6.465-2.101-11.766-6.301-15.9c-4.199-4.133-10.066-6.166-17.6-6.1c-8.4,0-15.2,2.7-20.4,8.1c-5.2,5.4-7.834,11.867-7.9,19.4c0,4.467,1.266,8.234,3.8,11.3c0.866,1,1.133,2.067,0.8,3.2c-0.134,0.335-0.334,1.101-0.6,2.301c-0.268,1.199-0.467,1.967-0.6,2.3c-0.134,0.734-0.467,1.2-1,1.399c-0.535,0.2-1.134,0.2-1.8,0c-3.934-1.6-6.867-4.365-8.8-8.3C62.365,95.558,61.365,91.024,61.3,85.89z',
				yz: 'M129.071,51.3V148.9c0,0.732-0.434,1.1-1.3,1.1h-10.1c-0.335,0-0.601-0.1-0.8-0.3c-0.2-0.2-0.301-0.4-0.301-0.601V112.9h-8.1l-22.5,36.199c-0.267,0.601-0.9,0.9-1.9,0.9h-11.5c-0.667,0-1.15-0.2-1.45-0.6c-0.3-0.4-0.25-0.9,0.15-1.5l24.8-36.801c-6.667-2.465-11.784-6.065-15.35-10.8c-3.567-4.732-5.35-10.4-5.35-17c0.266-11,3.565-19.3,9.9-24.9c6.333-5.6,14.166-8.4,23.5-8.4h18.5C128.404,50,129.005,50.435,129.071,51.3z M116.571,58.5h-8.199c-5.135-0.065-9.635,1.767-13.5,5.5c-3.867,3.734-5.9,9.734-6.1,18c0.2,7.935,2.366,13.667,6.5,17.2c4.133,3.534,8.966,5.267,14.5,5.2h6.8V58.5z',
				en: 'M58.15,80.9c0-2.666,0.5-4.6,1.5-5.8c0.6-0.933,1.466-1.633,2.6-2.1c1.2-0.6,2.766-0.9,4.7-0.9h9.4c1,0,1.865-0.366,2.6-1.1c0.733-0.733,1.101-1.6,1.101-2.6c0-1.4-0.035-2.866-0.101-4.4v-5.9c0-1.666,0.4-3.133,1.2-4.4c1-1.4,2.666-2.433,5-3.1c0.732-0.4,2.5-0.6,5.3-0.6h1.9c3.933,0.134,7.183,0.717,9.75,1.75c2.566,1.034,4.084,3.084,4.551,6.15c1.732-0.065,3.332-0.1,4.799-0.1c3.533,0,6.5,0.167,8.9,0.5c6.467,0.8,10.766,1.6,12.9,2.4c2.801,0.867,4.551,3.117,5.25,6.75c0.699,3.634,1.316,10.617,1.85,20.95c0.334,5.935,0.5,10.834,0.5,14.7c0,2.935-0.1,5.301-0.299,7.101c-1.068,11.467-2.5,19.935-4.301,25.399c-0.934,2.801-1.867,5.101-2.801,6.9s-1.834,3.2-2.699,4.2c-0.867,1-2.1,1.766-3.699,2.3c-1.602,0.533-3,0.833-4.201,0.9c-1.199,0.065-3.166,0.1-5.9,0.1c-7.199,0-12.033-0.834-14.5-2.5c-2.467-1.667-3.734-5.234-3.799-10.7c0-3,0.333-5.399,1-7.2c0.666-1.8,1.766-3.032,3.299-3.699c1.533-0.666,3.066-1.101,4.602-1.301c1-0.065,2.332-0.1,4-0.1h2.799c0.266,0,0.467,0.034,0.6,0.1c0.133,0.067,0.133,0.234,0,0.5c-0.133,0.268-0.199,0.535-0.199,0.801c0,0.267-0.1,0.634-0.301,1.1c-0.199,0.467-0.266,0.9-0.199,1.3c0,0.601,0.066,1.2,0.199,1.8c0.133,0.601,0.166,1,0.102,1.2c-0.068,0.2-0.301,0.3-0.701,0.3h-3c-0.666,0-1,0.067-1,0.2c0,0.135-0.268,0.2-0.799,0.2c-0.535,0-0.801,0.135-0.801,0.4c0,0.267-0.199,0.467-0.6,0.6c-0.4,0.135-0.535,0.435-0.4,0.9c0.133,0.467,0.1,0.867-0.1,1.199c0,0.934,0.133,1.7,0.4,2.301c0.266,0.6,0.531,1.065,0.799,1.399c0.266,0.333,0.865,0.565,1.801,0.7c0.932,0.133,1.666,0.2,2.199,0.2h3.201c3.799,0,6.232-0.435,7.299-1.3c1.066-0.867,1.6-3,1.6-6.4c0-5.065-0.6-8.5-1.799-10.3c-1.201-1.8-3.1-2.833-5.701-3.101c-5.867-0.6-9.834-1.266-11.898-2c-3.535-1.332-5.301-5.3-5.301-11.899c0-0.133-0.066-0.2-0.199-0.2c-0.135,0-0.235,0.067-0.301,0.2c0,4.467-0.6,8.467-1.8,12l-0.8,2.399c-0.734,1.668-1.967,2.535-3.7,2.601h-0.6c-1.601,0-3.4-0.266-5.4-0.8c-8.467-1.066-15.067-2.633-19.8-4.7c-1.6-0.733-2.834-2.065-3.7-4c-1.134-2.333-2.3-6.633-3.5-12.9c-1.2-6.266-2-10.7-2.4-13.3C58.283,83.8,58.15,82.1,58.15,80.9z M58.75,69v-0.2l18.3-18c0-0.065,0.032-0.1,0.1-0.1l-0.3,0.6c-0.734,1.334-1.101,2.935-1.101,4.8l0.101,10.3c0,0.667-0.335,1-1,1h-9.3c-2.267,0-4.234,0.367-5.9,1.1L58.75,69z M115.551,98c1.398-0.2,2.932-0.3,4.6-0.3c3,0.067,5.699,0.667,8.1,1.8c0-5.666-2.035-8.565-6.1-8.7h-0.301c-2,0-3.484,0.685-4.449,2.05C116.434,94.217,115.816,95.935,115.551,98z',
				di: 'M43.9,119.8V82.6c0-0.866,0.433-1.3,1.3-1.3h17.601V68.4c0-0.933,0.432-1.4,1.299-1.4H73.9v51.4c0,0.934-0.4,1.399-1.201,1.399H43.9z M54.8,111.5h6.7c0.865,0,1.301-0.466,1.301-1.4V89.5h-6.7c-0.867,0-1.301,0.467-1.301,1.4V111.5z M77.301,75.3v-6.9c0-0.933,0.398-1.4,1.199-1.4h9.9v6.9c0,0.935-0.4,1.4-1.201,1.4H77.301z M77.301,119.8V82.6c0-0.866,0.432-1.3,1.299-1.3H88.4V118.4c0,0.934-0.4,1.399-1.201,1.399H77.301z M92.199,119.8V82.6c0-0.866,0.434-1.3,1.301-1.3h28.801v50.4c0,0.867-0.436,1.3-1.301,1.3H92.199l0.102-6.9c0-0.933,0.398-1.399,1.199-1.399h17.6v-4.9H92.199z M103.199,111.5h6.701c0.799,0,1.199-0.466,1.199-1.4V89.5H104.4c-0.801,0-1.201,0.467-1.201,1.4V111.5z M126.1,126.1c0-0.933,0.434-1.399,1.301-1.399H145v-4.9h-18.9V82.6c0-0.866,0.434-1.3,1.301-1.3H156.1v50.4c0,0.867-0.4,1.3-1.199,1.3H126.1V126.1z M137,111.5h6.699c0.867,0,1.301-0.466,1.301-1.4V89.5h-6.699c-0.867,0-1.301,0.467-1.301,1.4V111.5z',
				rd: 'M39.75,99.7c0-4.133,1.666-7.666,5-10.6c3.333-2.933,7.065-4.4,11.2-4.4c4.133,0,7.633,1.2,10.5,3.6h0.5c8.933-5.465,20.1-8.2,33.5-8.2l0.5-0.4l7-26.7l24.2,3.6c0,0.067,0.05,0.1,0.149,0.1c0.101,0,0.116-0.033,0.05-0.1c0.133-0.066,0.533-0.6,1.2-1.6c0.666-1,1.133-1.6,1.4-1.8c2.266-2.133,5.016-3.2,8.25-3.2c3.232,0,5.982,1.067,8.25,3.2c2.266,2.134,3.365,4.867,3.3,8.2c-0.067,3.334-1.167,6.134-3.3,8.4c-2.135,2.268-4.9,3.435-8.3,3.5c-3.801,0-6.7-1.3-8.7-3.9s-3-5.8-3-9.6c-0.135,0.067-3.367-0.365-9.7-1.3c-6.334-0.933-10-1.5-11-1.7h-0.3c-0.135,0.135-0.667,1.9-1.601,5.3l-3,10.9c-1.066,3.867-1.667,6-1.8,6.4v0.3l0.5,0.4c4.8,0,9.733,0.667,14.8,2c5.066,1.334,9.4,3.267,13,5.8l0.301,0.2c0.065-0.066,0.133-0.1,0.199-0.1s0.133-0.033,0.2-0.1c1.666-1.2,2.866-2.033,3.601-2.5c0.732-0.465,1.699-0.9,2.899-1.3s2.633-0.6,4.3-0.6c4.533,0,8.4,1.6,11.601,4.8c3.2,3.2,4.8,7.1,4.8,11.7c0,3.135-0.867,6-2.6,8.6c-1.734,2.601-4.067,4.601-7,6c0,13-8.668,23.101-26,30.301c-2.734,1.199-4.601,1.965-5.601,2.3c-2.134,0.665-5.167,1.3-9.1,1.899c-3.935,0.601-7.034,0.9-9.3,0.9c-8,0-15.7-1.167-23.101-3.5c-0.134-0.135-2.534-1.4-7.2-3.8c-6.334-3.4-11.4-7.268-15.2-11.601c-3.8-4.332-5.734-9.532-5.8-15.6h-0.5c-2.2-1.133-4.167-2.8-5.9-5l-0.9-1.2c-1-1.8-1.634-3.333-1.9-4.6C39.883,103.435,39.75,101.768,39.75,99.7z M43.15,100.9c0,4.399,1.9,8.134,5.7,11.199c0.333-3.933,1.933-7.8,4.8-11.6c2.866-3.8,6.233-7.166,10.1-10.1c-2.467-1.733-5.2-2.6-8.2-2.6c-3.267,0-6.134,1.334-8.6,4C44.483,94.467,43.216,97.5,43.15,100.9z M53.35,115.5c0,3.6,1.033,7.067,3.1,10.4c2.065,3.334,4.732,6.167,8,8.5c3.266,2.332,6.666,4.332,10.2,6c3.532,1.665,7.032,2.8,10.5,3.399c5,0.933,9.865,1.4,14.6,1.4c8.2,0,15.966-1.3,23.3-3.9c7.333-2.6,13.5-6.7,18.5-12.3h-0.3c2-2.533,3.433-4.833,4.3-6.9c0.866-2.065,1.3-4.465,1.3-7.199c0-3.601-0.867-7.033-2.6-10.301c-1.734-3.266-4.067-6.065-7-8.399c-2.935-2.333-6-4.366-9.2-6.1c-3.2-1.733-6.534-3-10-3.8c-5.667-1.533-11.7-2.3-18.1-2.3c-4.935,0-9.968,0.6-15.101,1.8c-5.134,1.2-10.134,3-15,5.4c-4.867,2.4-8.834,5.7-11.9,9.899C54.883,105.3,53.35,110.1,53.35,115.5z M71.95,108.2c0-2.466,0.766-4.466,2.3-6c1.533-1.533,3.5-2.266,5.9-2.2c2.399,0.067,4.465,0.8,6.199,2.2c1.733,1.399,2.566,3.399,2.5,6c0,2.399-0.834,4.399-2.5,6c-1.667,1.6-3.734,2.399-6.199,2.399c-2.468,0-4.435-0.8-5.9-2.399C72.783,112.6,72.016,110.6,71.95,108.2z M75.55,124.6h4.4c1.665,3,4.333,5.268,8,6.801c3.665,1.534,7.365,2.334,11.1,2.399c3.866,0,7.533-0.8,11-2.399c3.466-1.601,6.266-3.866,8.4-6.801h4.1c-1.667,4.135-4.767,7.335-9.3,9.601c-4.534,2.266-9.234,3.399-14.1,3.399c-4.867,0-9.601-1.167-14.2-3.5C80.35,131.768,77.216,128.6,75.55,124.6z M109.15,108.2c0-2.533,0.766-4.533,2.3-6c1.532-1.466,3.565-2.2,6.1-2.2c2.266,0,4.2,0.8,5.8,2.4c1.601,1.6,2.4,3.534,2.4,5.8c0,2.267-0.8,4.234-2.4,5.899c-1.6,1.668-3.534,2.5-5.8,2.5c-2.467,0-4.467-0.8-6-2.399C110.016,112.6,109.216,110.6,109.15,108.2z M134.65,61.4c0,2.334,0.832,4.334,2.5,6c1.665,1.667,3.683,2.5,6.05,2.5c2.365,0,4.315-0.833,5.85-2.5c1.533-1.666,2.3-3.65,2.3-5.95c0-2.3-0.8-4.25-2.399-5.85c-1.601-1.6-3.534-2.4-5.8-2.4c-2.268,0-4.234,0.8-5.9,2.4C135.583,57.2,134.716,59.134,134.65,61.4z M136.05,89.5c3.666,2.4,6.833,5.467,9.5,9.2c2.666,3.734,4.533,7.734,5.601,12c3.933-2.866,5.899-6.065,5.899-9.601c0-3.865-1.167-7.2-3.5-10c-2.334-2.8-5.435-4.2-9.3-4.2C141.25,86.9,138.516,87.767,136.05,89.5z',
				sb: 'M140.997,75.983l-1.655,15.322l-26.504,26.088H98.759l-5.386,14.079v19.463l-19.05-5.383l21.949-39.342L38.298,73.496l43.481,5.799l-21.121-30.23l57.562,31.06l16.979-19.05h7.869l18.634,8.282L140.997,75.983z'
				
			},
		    
			doit: function(_element, _options) {
			    
				/*
					Default options:
					
					(social) type = vk
					url = current browser adress stroke
					title = current document <title>
					image = current document <meta property="og:image" ... />
					text = current document <meta name="description" ... />
				*/
				
				var self = goodshare, 
					options = $.extend({
						type:	'vk',
						url:	location.href,
						title:	document.title,
						image:	$('meta[property="og:image"]').attr('content'),
						text:	$('meta[name="description"]').attr('content')
					},
					$(_element).data(), _options);
			            
				/*
					Open popup
				*/
				
				if (self.popup(link = self[options.type](options)) === null) {
				
					/*
						If popup don't open
					*/
				            
					if ($(_element).is('a')) {
					            
						/*
							If it's <a> put into href
						*/
					            
		                $(_element).prop('href', link);
		                return true;
				                
					}
					else {
				            
						/*
							If it's no <a> go to link
						*/
			                
		                location.href = link;
		                return false;
				                
					}
		        }
		        else {
			        
					/*
						Popup opened
					*/
			            
					return false;
				
		        }
		        
			},
		
			/*
				Vkontakte
				http://vk.com
			*/
		    
			vk: function(_options) {
			    
				var options = $.extend({
					url:    location.href,
					title:  document.title,
					image:  '',
					text:   ''
				}, _options);
				
				return 'http://vkontakte.ru/share.php?'
					+ 'url='          + encodeURIComponent(options.url)
					+ '&title='       + encodeURIComponent(options.title)
					+ '&description=' + encodeURIComponent(options.text)
					+ '&image='       + encodeURIComponent(options.image)
					+ '&noparse=true';
					
			},
		
			/*
				Odnoklassniki
				http://ok.ru
			*/
		    
			ok: function(_options) {
			
				var options = $.extend({
					url:    location.href,
					text:   ''
				}, _options);
				
				return 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1'
					+ '&st.comments=' + encodeURIComponent(options.text)
					+ '&st._surl='    + encodeURIComponent(options.url);
			
			},
		 
			/*
				Facebook
				http://facebook.com
			*/
		    
			fb: function(_options) {
			
				var options = $.extend({
					url:    location.href,
					title:  document.title,
					image:  '',
					text:   ''
				}, _options);
				
				return 'http://www.facebook.com/sharer.php?s=100'
					+ '&p[title]='     + encodeURIComponent(options.title)
					+ '&p[summary]='   + encodeURIComponent(options.text)
					+ '&p[url]='       + encodeURIComponent(options.url)
					+ '&p[images][0]=' + encodeURIComponent(options.image);
			
			},
		
			/*
				LiveJournal
				http://livejournal.com
			*/
		    
			lj: function(_options) {
			
				var options = $.extend({
					url:    location.href,
					title:  document.title,
					text:   ''
				}, _options);
				
				return 'http://livejournal.com/update.bml?'
					+ 'subject='        + encodeURIComponent(options.title)
					+ '&event='         + encodeURIComponent('<a href="' + options.url + '">' + options.title + '</a> ' + options.text)
					+ '&transform=1';
			
			},
		
			/*
				Twitter
				http://twitter.com
			*/
		    
			tw: function(_options) {
			
				var options = $.extend({
					url:        location.href,
					title:      document.title
				}, _options);
				
				return 'http://twitter.com/share?'
					+ 'text='      + encodeURIComponent(options.title)
					+ '&url='      + encodeURIComponent(options.url);
			
			},
		    
			/*
				Google+
				http://plus.google.com
			*/
		    
			gp: function(_options) {
				
				var options = $.extend({
					url:    location.href
				}, _options);
			
				return 'https://plus.google.com/share?url='
					+ encodeURIComponent(options.url);
					
			},
		
			/*
				My@Mail.Ru
				http://my.mail.ru
			*/
		    
			mr: function(_options) {
			
				var options = $.extend({
					url:    location.href,
					title:  document.title,
					image:  '',
					text:   ''
				}, _options);
				
				return 'http://connect.mail.ru/share?'
					+ 'url='          + encodeURIComponent(options.url)
					+ '&title='       + encodeURIComponent(options.title)
					+ '&description=' + encodeURIComponent(options.text)
					+ '&imageurl='    + encodeURIComponent(options.image);
			
			},
		    
			/*
				LinkedIn
				http://linkedin.com
			*/
		    
			li: function(_options) {
				
				var options = $.extend({
					url:    location.href,
					title:  document.title,
					text:   ''
				}, _options);
				
				return 'http://www.linkedin.com/shareArticle?mini=true'
					+ '&url='       + encodeURIComponent(options.url)
					+ '&title='     + encodeURIComponent(options.title)
					+ '&summary='   + encodeURIComponent(options.text);
			        
			},
			
			/*
				tumblr
				http://tumblr.com
			*/
		    
			tm: function(_options) {
				
				var options = $.extend({
					url:    location.href,
					title:  document.title,
					text:   ''
				}, _options);
				
				return 'http://www.tumblr.com/share/link?'
					+ 'url='			+ encodeURIComponent(options.url)
					+ '&name='     		+ encodeURIComponent(options.title)
					+ '&description='	+ encodeURIComponent(options.text);
			        
			},
			
			/*
				Blogger
				https://www.blogger.com
			*/
		    
			bl: function(_options) {
				
				var options = $.extend({
					url:    location.href,
					title:  document.title,
					text:   ''
				}, _options);
				
				return 'https://www.blogger.com/blog-this.g?'
					+ 'u='	+ encodeURIComponent(options.url)
					+ '&n='	+ encodeURIComponent(options.title);
			        
			},
			
			/*
				Pinterest
				http://www.pinterest.com
			*/
		    
			pt: function(_options) {
				
				var options = $.extend({
					url:    location.href,
					title:  document.title,
					text:   ''
				}, _options);
				
				return 'https://www.pinterest.com/pin/create/button/?'
					+ 'url='			+ encodeURIComponent(options.url)
					+ '&description='	+ encodeURIComponent(options.title);
			        
			},
			
			/*
				Evernote
				http://www.evernote.com
			*/
		    
			en: function(_options) {
				
				var options = $.extend({
					url:    location.href,
					title:  document.title,
					text:   ''
				}, _options);
				
				return 'https://www.evernote.com/clip.action?'
					+ 'url='	+ encodeURIComponent(options.url)
					+ '&title='	+ encodeURIComponent(options.title)
					+ '&body='	+ encodeURIComponent(options.text + '<br/><a href="' + options.url + '">' + options.title + '</a>');

			},
			
			/*
				Digg
				http://www.digg.com
			*/
		    
			di: function(_options) {
				
				var options = $.extend({
					url:    location.href,
					title:  document.title,
					text:   ''
				}, _options);
				
				return 'http://digg.com/submit?'
					+ 'url='	+ encodeURIComponent(options.url)
					+ '&title='	+ encodeURIComponent(options.title);
			        
			},
			
			/*
				Yandex.Zakladki
				http://zakladki.yandex.ru
			*/
		    
			yz: function(_options) {
				
				var options = $.extend({
					url:    location.href,
					title:  document.title,
					text:   ''
				}, _options);
				
				return 'http://zakladki.yandex.ru/newlink.xml?'
					+ 'url='	+ encodeURIComponent(options.url)
					+ '&name='	+ encodeURIComponent(options.title)
					+ '&descr='	+ encodeURIComponent(options.text);
			        
			},
			
			/*
				Reddit
				http://www.reddit.com
			*/
		    
			rd: function(_options) {
				
				var options = $.extend({
					url:    location.href,
					title:  document.title,
					text:   ''
				}, _options);
				
				return 'http://www.reddit.com/submit?'
					+ 'url='	+ encodeURIComponent(options.url)
					+ '&title='	+ encodeURIComponent(options.title);
			        
			},
			
			/*
				Surfingbird
				http://www.surfingbird.ru
			*/
		    
			sb: function(_options) {
				
				var options = $.extend({
					url:    location.href,
					title:  document.title,
					text:   ''
				}, _options);
				
				return 'http://surfingbird.ru/share?'
					+ 'url='	+ encodeURIComponent(options.url)
					+ '&title='	+ encodeURIComponent(options.title);
			        
			},
					
			/*
				Popup
			*/
		    
			popup: function(url) {
			    
				return window.open(url, '', 'toolbar=0,status=0,scrollbars=1,width=626,height=436');
			
			}
		    
		};
		
		/*
			Create SVG icons
		*/
		
		$.each(goodshare.svgicons, function(index, value) {
			
			$('SVG[data-type="' + index + '"] PATH').attr('d', value);
			
		});
		
		/*
			Init goodshare.go()
		*/
		
		$(document).on('click', '.goodshare', function(event) {
			
			event.preventDefault();
			goodshare.doit(this);
			
		});
		
	});
	
})(jQuery, document, window);
