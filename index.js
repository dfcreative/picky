var Picker = require('color-picky');
var q = require('queried');
var Color = require('color');


var doc = document, loc = doc.location, win = window;


/** Get initial color as url param */
var cstr = loc.href.slice(loc.origin.length + 1);
var color = Color(cstr || 'red');


/** Init first big demo picker */
var demoPickerEl = q('.section-demo-picker');

var demoPicker = new Picker(demoPickerEl, {
	space: 'hsl',
	channel: ['hue', 'lightness'],
	worker: false,
	color: color,
	change: function () {
		//update picker color
		this.element.style.color = this.color.rgbString();
		this.element.firstChild.style.backgroundColor = this.color.rgbString();

		//update document location
		var cstr = this.color.hexString()//.replace(/\s/g, '');
		win.history.replaceState(null, cstr, cstr);
	}
});

var demoPickerEl = q('.section-demo-picker-s');

var demoPicker = new Picker(demoPickerEl, {
	space: 'hsl',
	channel: ['saturation'],
	worker: false,
	color: color,
	change: function () {
		//update picker color
		this.element.style.color = this.color.rgbString();
		this.element.firstChild.style.backgroundColor = this.color.rgbString();

		//update document location
		var cstr = this.color.hexString()//.replace(/\s/g, '');
		win.history.replaceState(null, cstr, cstr);
	}
});