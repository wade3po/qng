<template>
	<div class="nav-wrap">
		<ul class="nav-list">
			<li><router-link to="/home">首页</router-link></li>
<!--			<li><router-link to="/collect">收藏</router-link></li>-->
			<li><router-link to="/about">关于</router-link></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {}
		},
		components: {},
		mounted() {
		
		},
		methods: {}
	}
</script>

<style lang="scss" type="text/scss" scoped>
	.nav-wrap{
		height: p2r(80);
	}
	.nav-list{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		width: 10rem;
		height: p2r(80);
		margin: 0 auto;
		background: #fff;
		li{
			flex: 1;
			text-align: center;
			line-height: p2r(80);
			a{
				padding: p2r(20);
				text-decoration: none;
				font-size: p2r(30);
				color: #333;
			}
			.router-link-exact-active{
				color: $font-color;
				border-bottom: solid 2px $bg-color;
			}
		}
	}
</style>
