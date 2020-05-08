module.exports = {
	css:{
		loaderOptions:{
			scss: {
				prependData: `@import "@/assets/css/mixins.scss";`
			},
		}
	},
}
