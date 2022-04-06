
<div align="center">
    <h1><a href="https://github.com/hlsiira/iris">Iris</a> - A compact library for component events.</h1>
</div>

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

</div>

## About
Iris is a compact library for allowing loose coupling of various components of the same application, built off of <a href=" https://amplifyjs.com/">AmplifyJS</a>. Weighing in at under <b>100 lines</b> of code, Iris provides a convenient interface for building an internal customizable API for an application. Iris was modified in order to be used as a compact and intuitive library for development on the <a href="https://www.athos.io/">Atheos IDE</a>, however it's proved so valuable as to become it's own mini library.
From AmplifyJS:
> AmplifyJS provides methods to facilitate the Publish and Subscribe messaging pattern in your front-end application. The idea is that someone is broadcasting one or more messages (publishing) and someone else is listening to one or more messages (subscribing). By separating your logic out like this it allows for loose coupling of your components, which results in less brittle and more reusable code.
> It is possible to implement the publish and subscribe model by using jQuery custom events, however, the AmplifyJS pub/sub component provides a slightly cleaner interface, prevents collisions between custom events and method names, and allows a priority to your messages.

Iris also provides a convenient method for creating repeating, periodic triggers for events using <code>setInterval</code>.

## Features
<p><code>Pleasently Parsed:</code> Iris automatically tries to parse JSON replies.</p>
<p><code>Crazily Condensed:</code> The minified version is less than ~1K, roughly 500b gzipped.</p>
<p><code>Easily Extensible:</code> Iris is easily modifyable to meet your needs.</p>

Below is the typical structure for utilizing sending an Iris:

```javascript
// - list: Lists out all currently active subscriptions
// - reset: resets iris, deleting all subscriptions
// - sub: subscribes to an event, or multiple comma-delimited events
// - pub: publishes an event with arguements
// - del: deletes a subscribtion

iris.pub('system.userAuthenticated');

iris.sub('system.loadExtra', () => plugin.init());

iris.sub('system.init', function(data) {
	// Initialize component
});

// - byte: publishes an event every 100 milliseconds (10th of a second)
// - kilo: publishes an event every 1000 milliseconds (1 second)
// - mega: publishes an event every 10000 milliseconds (10 seconds)
// - giga: publishes an event every 100000 milliseconds (100 seconds)
// - tera: publishes an event every 300000 milliseconds (5 minutes)
iris.sub('chrono.kilo', function() {
	console.log("This will log every 1 second");
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.