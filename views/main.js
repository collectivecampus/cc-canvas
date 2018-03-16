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
					<div class="${((state.canvas.value_prop_values.length > 0) ? 'bg-washed-green' : 'bg-white')} pv4 link dim ba b--black-20 br2 pointer" onclick=${handleClick} id="value-proposition">
						<h4 class="tc">VALUE PROPOSITION</h4>
					</div>
				</div>
				<div class="fl w-100 w-third-ns w-50-m pa2">
					<div class="bg-white pv4 link dim ba b--black-20 br2 pointer" onclick=${handleClick} id="customer-segments">
						<h4 class="tc">CUSTOMER SEGMENTS</h4>
					</div>
				</div>
				<div class="fl w-100 w-third-ns h-5-ns w-50-m h-4-m pa2">
					<div class="bg-white pv4 link dim ba b--black-20 br2 pointer" onclick=${handleClick} id="customer-relationships">
						<h4 class="tc">CUSTOMER RELATIONSHIPS</h4>
					</div>
				</div>
				<div class="fl w-100 w-third-ns w-50-m pa2">
					<div class="bg-white pv4 link dim ba b--black-20 br2 pointer" onclick=${handleClick} id="revenue">
						<h4 class="tc">REVENUE</h4>
					</div>
				</div>
				<div class="fl w-100 w-third-ns w-50-m pa2">
					<div class="bg-white pv4 link dim ba b--black-20 br2 pointer" onclick=${handleClick} id="channels">
						<h4 class="tc">CHANNELS</h4>
					</div>
				</div>
				<div class="fl w-100 w-third-ns w-50-m pa2">
					<div class="bg-white pv4 link dim ba b--black-20 br2 pointer" onclick=${handleClick} id="costs">
						<h4 class="tc">COSTS</h4>
					</div>
				</div>
				<div class="fl w-100 w-third-ns w-100-m pa2">
					<div class="bg-white pv4 link dim ba b--black-20 br2 pointer" onclick=${handleClick} id="key-activities">
						<h4 class="tc">KEY ACTIVITIES</h4>
					</div>
				</div>
				<div class="fl w-100 w-third-ns w-100-m pa2">
					<div class="bg-white pv4 link dim ba b--black-20 br2 pointer" onclick=${handleClick} id="partners">
						<h4 class="tc">PARTNERS</h4>
					</div>
				</div>
				<div class="fl w-100 w-third-ns w-100-m pa2">
					<div class="bg-white pv4 link dim ba b--black-20 br2 pointer" onclick=${handleClick} id="key-resources">
						<h4 class="tc">KEY RESOURCES</h4>
					</div>
				</div>
		  </div>
		</div>
		<footer class="pv4 ph3 ph5-m ph6-l mid-gray">
		  <small class="f6 db tc">© 2016 <b class="ttu">COLLECTIVE CAMPUS Inc</b>., All Rights Reserved</small>
		  <div class="tc mt3">
			<a href="/language/" title="Language" class="f6 dib ph2 link mid-gray dim">Language</a>
			<a href="/terms/"    title="Terms" class="f6 dib ph2 link mid-gray dim">Terms of Use</a>
			<a href="/privacy/"  title="Privacy" class="f6 dib ph2 link mid-gray dim">Privacy</a>
		  </div>
		</footer>
    </body>
	
  `

  function handleClick (event) {
	const newTitle = event.target.children[0].innerHTML;
    emit('pushState', '/area/' + event.target.id);
  }
}
