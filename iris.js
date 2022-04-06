//////////////////////////////////////////////////////////////////////////////80
// Iris Custom Events
//////////////////////////////////////////////////////////////////////////////80
// Copyright (c) 2020 Liam Siira (liam@siira.io), distributed as-is and without
//	warranty under the MIT License. See [root]/docs/LICENSE.md for more.
//	This information must remain intact.
// Copyright (c) 2013 appendTo LLC - https://amplifyjs.com/
//////////////////////////////////////////////////////////////////////////////80
// Description: 
//	Iris provides methods to facilitate the Publish and Subscribe messaging
//	pattern in your front-end application. A component can publish events with
//	arguements that multiple client components can subscribe to; it encourages
//	loose coupling of components, resulting in less brittle/more reusable code.
//
//	The Chronometer Module sets global intervals that are published through
//	Carbon subscriptions; allowing the client browser to only have a select few
//	Intervals running while providing plugins the ability to use timed events.
//////////////////////////////////////////////////////////////////////////////80
// Usage:
//	- list: Lists out all currently active subscriptions
//	- reset: resets iris, deleting all subscriptions
//  - sub: subscribes to an event, or multiple comma-delimited events
//  - pub: publishes an event with arguements
//  - del: deletes a subscribtion
//
//  iris.pub('system.userAuthenticated');
//
// 	iris.sub('system.loadExtra', () => plugin.init());
//
//  iris.sub('system.init', function(data) {
//    // Initialize component
//  });
//
//  - byte: publishes an event every 100 milliseconds (10th of a second)
//  - kilo: publishes an event every 1000 milliseconds (1 second)
//  - mega: publishes an event every 10000 milliseconds (10 seconds)
//  - giga: publishes an event every 100000 milliseconds (100 seconds)
//  - tera: publishes an event every 300000 milliseconds (5 minutes)
//
//	iris.sub('chrono.kilo', function() {
//		console.log("This will log every 1 second");
//	}
//////////////////////////////////////////////////////////////////////////////8080

(function() {
	'use strict';

	var subs = {};

	let msReg = /(\d+)([mshd]+)/g,
		msUnt = {
			s: 1000,
			m: 60000,
			h: 3600000,
			d: 86400000
		};

	window.ms = (val) => {
		let test = [...val.toLowerCase().matchAll(msReg)],
			ms = 0,
			unit;
		for (unit of test) {
			ms += unit[1] * msUnt[unit[2]];
		}
		return ms;
	};

	window.iris = {
		list: () => subs,
		reset: () => subs = {},
		pub: function(topic) {
			if (!subs[topic]) return;

			topic = subs[topic];

			var args = Array.prototype.slice.call(arguments, 1),
				i = topic.length;

			while (--i >= 0) {
				topic[i].apply(null, args);
			}
		},

		sub: function(topic, callback) {
			var topics = topic.split(' '),
				i = topics.length;

			while (--i >= 0) {
				topic = topics[i];
				(subs[topic] = subs[topic] || []).push(callback);

			}
			return callback;
		},

		del: function(topic, callback) {
			if (!subs[topic]) return;
			if (!callback) {
				delete subs[topic];
				return;
			}

			var i = subs[topic].length;

			while (--i > 0) {
				if (subs[topic][i].callback === callback) {
					subs[topic].splice(i, 1);
					i++;
				}
			}
		}
	};

	window.cron = {
		byte: setInterval(() => iris.pub('cron.byte'), 100), // 10th of a second
		kilo: setInterval(() => iris.pub('cron.kilo'), 1000), // 1 second
		mega: setInterval(() => iris.pub('cron.mega'), 10000), // 10 Seconds
		giga: setInterval(() => iris.pub('cron.giga'), 100000), // 100 Seconds
		tera: setInterval(() => iris.pub('cron.tera'), 300000) // 5 minutes
	};

}());