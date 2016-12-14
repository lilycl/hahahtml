import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import { Cell } from 'mint-ui';
import BottomCart from 'modules/BottomCart';
import Comment from 'modules/Comment';

import './style.postcss';

module.exports = entry({
	template: require('./index.tpl'),
	components: { 
		BottomCart, Comment,
		[Cell.name]: Cell
	},

	data() {
		return {
			detail: {},

			commentList: []
		};
	},

	methods: {
		init() {
			S.order.getDetail({id: this.__getPageData().id}).then(ret => {
				this.detail = ret.data;
			}).catch(err => {

			});
		},
		buy() {
			
		}
	},
	ready() {
		this.init();
	}
});