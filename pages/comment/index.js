import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import BottomCart from 'modules/BottomCart';
import Comment from 'modules/Comment';

import './style.postcss';

module.exports = entry({
	template: require('./index.tpl'),
	components: { BottomCart, Comment },

	data() {
		return {
			detail: {},

			commentList: []
		};
	},

	methods: {
		init() {
		},
		buy() {
			
		}
	},
	ready() {
		this.init();
	}
});