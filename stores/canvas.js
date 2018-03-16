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
		defs: VALUE_PROP_DEFAULT_PROMPTS,
		title: DEFAULT_PAGE_TITLE,
		content: {
			'value-proposition': {
				'page-title': 'VALUE PROPOSITION',
				'prompts': [
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
				],
				selected: [],
				answers: {}
			},
			'customer-segments': {
				'page-title': 'CUSTOMER SEGMENTS',
				'prompts': [
					"Early adopters",
					"Company",
					"Individuals",
					"Demographics",
					"How they make purchasing decisions",
					"How to find them offline/online",
					"What their goals/KPIs are",
					"What language resonates with them?",
					"How to satisfy their 'job to be done'"
				],
				selected: [],
				answers: {}
			},
			'customer-relationships': {
				'page-title': 'CUSTOMER RELATIONSHIPS',
				'prompts': [
					"Cirect sales v automated",
					"Outbound v inbound",
					"Free v paid",
					"Sales / business development",
					"Social media",
					"Organic search",
					"Paid search",
					"Content marketing",
					"Influencer marketing",
					"Affiliates, resellers and third parties",
					"Conferences, trade shows and meetups",
					"Offline media",
					"Word of mouth / referral"
				],
				selected: [],
				answers: {}
			},
			'channels': {
				'page-title': 'CHANNELS',
				'prompts': [
					"Direct v indirect",
					"Web / mobile",
					"Third-party marketplace",
					"Affiliates and resellers",
					"Wholesale / distributor",
					"Dealer / retailer",
					"Consultants and professional services",
					"Manufacturers representative",
					"Catalog",
				],
				selected: [],
				answers: {}
			},
			'key-activities': {
				'page-title': 'KEY ACTIVITIES',
				'prompts': [
					"R&D related",
					"Distribution related",
					"Production related",
					"Customer-service related",
					"Marketing and sales related",
					"Technology related",
				],
				selected: [],
				answers: {},
			},
			'revenue': {
				'page-title': 'REVENUE',
				'prompts': [
					"Pay-per-service / use",
					"Subscription",
					"Lending / lease",
					"Licensing",
					"Brokerage or commission fee",
					"Advertising revenues",
					"Asset sale",
					"Maintenance and support",
					"Affiliate fee"
				],
				selected: [],
				answers: {},
			},
			'costs': {
				'page-title': 'COSTS',
				'prompts': [
					"Fixed costs",
					"Variable costs",
					"People",
					"Design",
					"Development",
					"Hardware",
					"Other tech and software",
					"Branding and marketing",
					"Legal and accounting",
					"Data and intelligence",
					"Support"
				],
				selected: [],
				answers: {},
			},
			'partners': {
				'page-title': 'PARTNERS',
				'prompts': [
					"User-value chain (research, manufacturing, operations, marketing and sales, distribution, customer service)",
					"Where do you customers go before and after they come to you?"
				],
				selected: [],
				answers: {},
			},
			'key-resources': {
				'page-title': 'key-resources',
				'prompts': [
					"Physical",
					"Intellectual",
					"Human resources",
					"Financial resources"
				],
				selected: [],
				answers: {},
			},
		},
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
	
	emitter.on('canvas:update:area:answer', function(VALUE, answer, area) {
		
		state.canvas.content[area].answers[answer] = VALUE;
		
	});
	
	emitter.on('canvas:update:area', function (VALUE, area) {
		
		var index = state.canvas.content[area].selected.indexOf(VALUE);
		
		if (index === -1)
			state.canvas.content[area].selected.push(VALUE);
		else
			state.canvas.content[area].selected.splice(index,1);
	})
  	
	
  })
  
}
