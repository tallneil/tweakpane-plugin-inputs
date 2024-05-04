# Inputs for Tweakpane
Additional inputs for [Tweakpane](https://tweakpane.github.io/docs/) GUI, including a numerical stepper input.

### Author
Made by [@tallneil](https://tallneil.io/). Thanks to [@cocopon](https://github.com/cocopon), the creator of Tweakpane.

![Tweakpane UI screenshot](/assets/cover.png)

## Stepper input
The stepper is an alternative to [range slider input](https://tweakpane.github.io/docs/input-bindings/#number_range). A stepper may be better-suited for small sets of discrete ranges, whereas a range slider is ideal for larger, continuous ranges.

### Params
`min`: Range minimum (optional)
`max`: Range maximum (optional)
`step`: Step value (default value: 1)

### Features 
* Use the `-` and `+` buttons to decrement or increment value by `step`
* Support for existing Tweakpane `number input` features, including `point and slide`. 



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
