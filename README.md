# Inputs for Tweakpane
Additional inputs for [Tweakpane](https://tweakpane.github.io/docs/) GUI, including a numerical stepper input.

### Author
Made by [@tallneil](https://tallneil.io/). Thanks to [@cocopon](https://github.com/cocopon), the creator of Tweakpane.

![Tweakpane UI screenshot](https://raw.githubusercontent.com/tallneil/tweakpane-plugin-inputs/main/assets/cover.png)

## Stepper input
This stepper input is an alternative to the Tweakpane default [number input](https://tweakpane.github.io/docs/input-bindings/#number) and [number range input](https://tweakpane.github.io/docs/input-bindings/#number_range). 

### Demo
[Try it →](https://tallneil.github.io/tweakpane-plugin-inputs/)

### Features 
* Use the `-` and `+` buttons to decrement or increment value by `step`
* Optional `min`, `max`, and `step` params (`step` defaults to `1`)
* Support for existing Tweakpane `number input` features, including `point and slide`. 

### Optional bounds
The range (slider) input requires both `min` and `max` values, but the stepper input requires neither. This makes the stepper useful for properties that have a mandatory lower bound, but no mandatory upper bound, or vice versa. 

For instance, consider the many CSS properties such as `border-radius` that require non-negative values. This tells us to set `min` to `0`, but what about `max`? If I want to use a range input, I'd have to give `max` some arbitrarily large value, but a stepper input with no `max` would well here. 

Because the upper bound is optional, a stepper input is also well-suited for properties like `count` or `quantity`. 

## Installation

### [CDN](https://www.jsdelivr.com/package/npm/tweakpane-plugin-inputs)
```html
<script type="module">
  import {Pane} from 'https://cdn.jsdelivr.net/npm/tweakpane/dist/tweakpane.min.js';
  import * as TweakpanePluginInputs from 'https://cdn.jsdelivr.net/npm/tweakpane-plugin-inputs/dist/tweakpane-plugin-inputs.min.js';
</script>
```

### [NPM](https://www.npmjs.com/package/tweakpane-plugin-inputs)
```bash
npm i tweakpane
npm i tweakpane-plugin-inputs
```

```js
import {Pane} from 'tweakpane';
import * as TweakpanePluginInputs from 'tweakpane-plugin-inputs';
```


## Example (JS)
```js
// import Tweakpane and this plugin using CDN links
import {Pane} from 'https://cdn.jsdelivr.net/npm/tweakpane/dist/tweakpane.min.js';
import * as TweakpanePluginInputs from 'https://cdn.jsdelivr.net/npm/tweakpane-plugin-inputs/dist/tweakpane-plugin-inputs.min.js';

// make a new pane
const pane = new Pane();
pane.registerPlugin(TweakpanePluginInputs);

// set params you want to tweak
const params = {
  prop: 2.5,
};

// make a stepper input and bind it to a param
pane.addBinding(params, 'prop', {
    view: 'stepper',
    min: 0.5,
    max: 3,
    step: 0.5,
}).on('change', newValue => {updateValue(newValue.value)});

function updateValue(v) {
  // do something with the new value
}
```
