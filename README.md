# Inputs for Tweakpane
Additional inputs for [Tweakpane][tweakpane] GUI, including a numerical stepper input.

## Stepper input
The stepper is an alternative to range slider input, that is better-suited for small sets of discrete ranges. 

### Params
`min`: Range minimum (optional)
`max`: Range maximum (optional)
`step`: Step value (default value: 1)

### Features 
* Use the `-` and `+` buttons to decrement or increment value by `step`
* Support for Tweakpane input features, including `keypad` and `point and slide`. 



## Installation

### Browser
```html
<script type="module">
  import {Pane} as Tweakpane from './tweakpane.min.js';
  import * as TweakpanePluginInputs from './tweakpane-plugin-inputs.js';

  const pane = new Pane();
  pane.registerPlugin(TweakpanePluginInputs);
</script>
```


### Package
```js
import {Pane} from 'tweakpane';
import * as TweakpanePluginInputs from 'tweakpane-plugin-inputs';

const pane = new Pane();
pane.registerPlugin(TweakpanePluginInputs);
```


## Usage
```js
const params = {
  prop: 3,
};

pane.addInput(params, 'prop', {
  view: 'stepper',
  min: 0,
  max: 5, 
  step: 0.5
});
```
