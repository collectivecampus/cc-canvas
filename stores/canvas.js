module.exports = store

const DEFAULT_PAGE_TITLE = "Detail Page"

const VALUE_PROP_DEFAULT_PROMPTS = [
	"What problem are you solving?",
	"Are you otherwise creating value or a 'gain' for your customer?",
	"Performance attributes",
	"Customisation",
	"Design",
	"Service and customer experience",
	"Brand and status",
	"Price",
	"Cost reduction",
	"Risk reduction",
	"Accessibility and convenience",
	"Usability",
	"Unique market",
	"Network effects"
]

function store (state, emitter) {
  
  state.canvas = {
		title: DEFAULT_PAGE_TITLE,
		current_prompts: [],
		value_prop_values: []
		
  }
  
  emitter.on('DOMContentLoaded', function () {
    
	emitter.on('canvas:update:detailsPage', function (DETAILS_NAME) {
      state.canvas.title = DETAILS_NAME
	  
	  if (DETAILS_NAME == 'VALUE PROPOSITION') {
		  state.canvas.current_prompts = VALUE_PROP_DEFAULT_PROMPTS;
	  }
	  
    })
	
	emitter.on('canvas:update:value_prop_values', function (VALUE) {
		var index = state.canvas.value_prop_values.indexOf(VALUE);
		
		if (index === -1)
			state.canvas.value_prop_values.push(VALUE);
		else
			state.canvas.value_prop_values.splice(index,1);
	})
  	
	
  })
  
}
