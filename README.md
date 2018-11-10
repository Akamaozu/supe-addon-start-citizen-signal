# [Supe](https://github.com/Akamaozu/node-supe) Add-On: Start Citizen on Signal

## Send signals to a supervisor to start a citizen

# Install

```
npm install --save supe-addon-start-citizen-signal
```

# Setup

`supervisor` 
```js
var supe = require('supe')(),
    start_citizen_on_signal_addon = require('supe-addon-start-citizen-signal');

supervisor.use( start_citizen_on_signal_addon );

supervisor.register( 'homepage-checker', './citizens/homepage-checker' );
```

# Usage

`citizen`
```js
var citizen = require('supe'),
    minute_in_ms = 1000 * 60;

// run homepage checker every five mins
  setInterval( start_homepage_checker, 5 * minute_in_ms );

function start_homepage_checker(){
  citizen.signal.send( 'START-CITIZEN', { citizen: 'homepage-checker' });
}
```