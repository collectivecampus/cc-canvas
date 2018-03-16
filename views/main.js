var html = require('choo/html')

var TITLE = 'Collective Campus - Business Model Canvas'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">
		<div class="mw9 center ph3-ns">
			<div class="cf ph2-ns">
				<div class="fl w-100">
					<h2 class="tc">BUSINESS MODEL CANVAS</h2>
				</div>
				<div class="fl w-100 w-third-ns w-50-m pa2">
					<div class="${((state.canvas.value_prop_values.length > 0) ? 'bg-washed-green' : 'bg-white')} pv4 link dim ba b--black-20 br2 pointer" onclick=${handleClick}>
						<h4 class="tc">VALUE PROPOSITION</h4>
					</div>
				</div>
				<div class="fl w-100 w-third-ns w-50-m pa2">
					<div class="bg-white pv4 link dim ba b--black-20 br2 pointer" onclick=${handleClick}>
						<h4 class="tc">CUSTOMER SEGMENTS</h4>
					</div>
				</div>
				<div class="fl w-100 w-third-ns h-5-ns w-50-m h-4-m pa2">
					<div class="bg-white pv4 link dim ba b--black-20 br2 pointer" onclick=${handleClick}>
						<h4 class="tc">CUSTOMER RELATIONSHIPS</h4>
					</div>
				</div>
				<div class="fl w-100 w-third-ns w-50-m pa2">
					<div class="bg-white pv4 link dim ba b--black-20 br2 pointer" onclick=${handleClick}>
						<h4 class="tc">REVENUE</h4>
					</div>
				</div>
				<div class="fl w-100 w-third-ns w-50-m pa2">
					<div class="bg-white pv4 link dim ba b--black-20 br2 pointer" onclick=${handleClick}>
						<h4 class="tc">CHANNELS</h4>
					</div>
				</div>
				<div class="fl w-100 w-third-ns w-50-m pa2">
					<div class="bg-white pv4 link dim ba b--black-20 br2 pointer" onclick=${handleClick}>
						<h4 class="tc">COSTS</h4>
					</div>
				</div>
				<div class="fl w-100 w-third-ns w-100-m pa2">
					<div class="bg-white pv4 link dim ba b--black-20 br2 pointer" onclick=${handleClick}>
						<h4 class="tc">KEY ACTIVITIES</h4>
					</div>
				</div>
				<div class="fl w-100 w-third-ns w-100-m pa2">
					<div class="bg-white pv4 link dim ba b--black-20 br2 pointer" onclick=${handleClick}>
						<h4 class="tc">PARTNERS</h4>
					</div>
				</div>
				<div class="fl w-100 w-third-ns w-100-m pa2">
					<div class="bg-white pv4 link dim ba b--black-20 br2 pointer" onclick=${handleClick}>
						<h4 class="tc">KEY RESOURCES</h4>
					</div>
				</div>
		  </div>
		</div>
    </body>
  `

  function handleClick (event) {
	
	const newTitle = event.target.children[0].innerHTML;
	emit('canvas:update:detailsPage', newTitle)

    emit('pushState', '/detail');
  }
}
