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
				<h1>${state.canvas.title}
					  <a style="float:right;" class="f6 link dim br-pill ph3 pv2 mb2 dib white bg-black" href="#" onclick=${onback}>Back</a>
				</h1>
				<form class="pa4" onchange=${onchange}>
				  <fieldset id="favorite_movies" class="bn">
					<legend class="fw7 mb2">Which ones apply?</legend>
					${state.canvas.current_prompts.map(checkbox)}
				  </fieldset>
				</form>
			</div>
		</div>
    </body>
  `
	
	function checkbox(currentValue, index) {
		
		let checked = false;
		
		if (state.canvas.value_prop_values.indexOf(index) != -1) {
			checked = true;
		};
		
		return html`
			<div class="flex items-center mb2">
				<input class="mr2" type="checkbox" id="${slugify(currentValue)}" value="${index}" ${((checked) ? 'checked' : '')}>
				<label for="${slugify(currentValue)}" class="lh-copy">${currentValue}</label>
			</div>`
	}
	
	function onback (event) {
		emit('pushState', '/');
	}

	function onchange (event) {
		const value = event.target.value;
		emit('canvas:update:value_prop_values', parseInt(value));
	}

}


