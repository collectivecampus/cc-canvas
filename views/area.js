var html = require('choo/html')

var slugify = require('node-slugify'); 

var TITLE = 'Collective Campus - Detail Page'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  let prompts = [];
  let selected = [];
  let answers = {};
  
  if (state.canvas.content[state.params.area] == null) {
	console.log('dont do it')
  } else {
	  prompts = state.canvas.content[state.params.area].prompts;
	  selected = state.canvas.content[state.params.area].selected;
	  answers = state.canvas.content[state.params.area].answers;
  }
  
  return html`
    <body class="code lh-copy">
		<div class="mw9 center ph3-ns">
			<div class="cf ph2-ns">
				<h2>${state.canvas.title}
					  <a style="float:right;" class="f6 link dim br-pill ph3 pv2 mb2 dib white bg-black" href="#" onclick=${onback}>Back</a>
				</h2>
				<form class="pa4">
				  <legend class="fw7 mb2">${(selected.length)}/${(prompts.length)} selected</legend>
				  <fieldset id="favorite_movies" class="bn">
					${prompts.map(checkbox)}
				  </fieldset>
				</form>
			</div>
		</div>
    </body>
  `
	
	function checkbox(currentValue, index) {
		
		const checked = selected.indexOf(index) != -1
		
		return html`
			<div class="">
			<div class="flex items-center mb2">
				<input class="mr2" type="checkbox" 
					id="${slugify(currentValue)}" 
					value="${index}" 
					${((checked) ? 'checked' : '')}
					onchange=${onchange}>
				<label for="${slugify(currentValue)}" class="lh-copy ${((checked) ? 'green' : '')}">${currentValue}</label>
				
			</div>
			<div class="">
				${((checked) ? textInput(index) : '')}
			</div>
			</div>`
	}
	
	function textInput(index) {
		return html`<textarea onchange=${onTextAreaUpdate} id="${index}" class="input-reset f6 lh-copy ba b--green pa2 mb2 db w-100" type="text" aria-describedby="name-desc">
		${state.canvas.content[state.params.area].answers[index]}</textarea>`
	}
	
	function onback (event) {
		emit('pushState', '/');
	}
	
	function onTextAreaUpdate (event) {
		const answer = event.target.value
		const index = event.target.id
		emit('canvas:update:area:answer', answer, index, state.params.area)
	}

	function onchange (event) {
		const value = event.target.value;
		emit('canvas:update:area', parseInt(value), state.params.area);
		emit('render');
	}

}


