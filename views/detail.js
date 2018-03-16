var html = require('choo/html')

var slugify = require('node-slugify'); 

var TITLE = 'Collective Campus - Detail Page'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">
		<div class="mw9 center ph3-ns">
			<div class="cf ph2-ns">
				<h2>${state.canvas.title}
					  <a style="float:right;" class="f6 link dim br-pill ph3 pv2 mb2 dib white bg-black" href="#" onclick=${onback}>Back</a>
				</h2>
				<form class="pa4" onchange=${onchange}>
				  <legend class="fw7 mb2">${(state.canvas.value_prop_values.length)}/${(state.canvas.current_prompts.length)} selected</legend>
				  <fieldset id="favorite_movies" class="bn">
					${state.canvas.current_prompts.map(checkbox)}
				  </fieldset>
				</form>
			</div>
		</div>
    </body>
  `
	
	function checkbox(currentValue, index) {
		
		const checked = state.canvas.value_prop_values.indexOf(index) != -1
		
		return html`
			<div class="">
			<div class="flex items-center mb2">
				<input class="mr2" type="checkbox" 
					id="${slugify(currentValue)}" 
					value="${index}" 
					${((checked) ? 'checked' : '')}>
				<label for="${slugify(currentValue)}" class="lh-copy ${((checked) ? 'green' : '')}">${currentValue}</label>
				
			</div>
			<div class="">
				${((checked) ? textInput() : '')}
			</div>
			</div>`
	}
	
	function textInput() {
		return html`<textarea id="name" class="input-reset f6 lh-copy ba b--green pa2 mb2 db w-100" type="text" aria-describedby="name-desc"></textarea>`
	}
	
	function onback (event) {
		emit('pushState', '/');
	}

	function onchange (event) {
		const value = event.target.value;
		emit('canvas:update:value_prop_values', parseInt(value));
		emit('render');
	}

}


