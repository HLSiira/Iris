
<div align="center">
    <h1><a href="https://github.com/hlsiira/iris">Iris</a> - A compact library for component events.</h1>
</div>

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

</div>

## About
Iris is a compact library for allowing loose coupling of various components of the same application, built off of <a href=" https://amplifyjs.com/">AmplifyJS</a>. Weighing in at under <b>50 lines</b> of code, Iris provides a convenient interface for building an internal customizable API for an application. Iris was modified in order to be used as a compact and intuitive library for development on the <a href="https://www.athos.io/">Atheos IDE</a>, however it's proved so valuable as to become it's own mini library.
From AmplifyJS:
> AmplifyJS provides methods to facilitate the Publish and Subscribe messaging pattern in your front-end application. The idea is that someone is broadcasting one or more messages (publishing) and someone else is listening to one or more messages (subscribing). By separating your logic out like this it allows for loose coupling of your components, which results in less brittle and more reusable code.
> It is possible to implement the publish and subscribe model by using jQuery custom events, however, the AmplifyJS pub/sub component provides a slightly cleaner interface, prevents collisions between custom events and method names, and allows a priority to your messages.

## Features
<p><code>Pleasently Parsed:</code> Iris automatically tries to parse JSON replies.</p>
<p><code>Crazily Condensed:</code> The minified version is less than ~1K, roughly 500b gzipped.</p>
<p><code>Easily Extensible:</code> Iris is easily modifyable to meet your needs.</p>

Below is the typical structure for utilizing sending an Iris:

```javascript
iris.subscribe('system.init', function(data) {
	// Initialize Component
});

iris.publish('system.init', data);
```