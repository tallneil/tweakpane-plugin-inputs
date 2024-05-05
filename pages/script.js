import {Pane} from 'https://cdn.jsdelivr.net/npm/tweakpane@4.0.3/dist/tweakpane.min.js';
import * as TweakpanePluginInputs from '../dist/tweakpane-plugin-inputs.js';

const pane = new Pane({
    title: 'Tweakpane',
    expanded: true,
});
pane.registerPlugin(TweakpanePluginInputs);

var r = document.querySelector(':root');

const params = {
    stroke: 2,
  };
  
function makePane() {
    pane.addBinding(params, 'stroke', {
        view: 'stepper',
        min: 0.5,
        max: 3,
        step: 0.5,
    }).on('change', newValue => {updateStroke(newValue.value.val)});
}

function updateStroke(v) {
    r.style.setProperty('--stroke', v);
}

document.addEventListener('DOMContentLoaded', function () {
    makePane();
});






