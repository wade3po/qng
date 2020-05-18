<template>
	<div class="">
		<NavHead></NavHead>
		<ul>
			<li class="goods-list" v-for="val in 10" @click="detail(val)">
				<div class="img-wrap">
					<img src="../../assets/img/test.jpg" alt="">
				</div>
				<div class="goods-info">
					<p class="goods-name">河田鸡</p>
					<p class="goods-desc">正宗肥美河田鸡正宗肥美河田鸡正宗肥美河田鸡正宗肥美河田鸡正宗肥美河田鸡正宗肥美河田鸡正宗肥美河田鸡正宗肥美河田鸡</p>
					<p class="goods-price">¥<span>15</span> - ¥<span>20</span></p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import NavHead from '@/components/NavHead'
	export default {
		name: '',
		data() {
			return {}
		},
		components: {NavHead},
		mounted() {

		},
		methods: {
			//跳转详情
			detail(val){
				this.$router.push('/detail')
			}
		}
	}
</script>

<style lang="scss" type="text/scss" scoped>
	.goods-list{
		display: flex;
		height: p2r(300);
		margin-top: p2r(20);
		box-sizing: border-box;
		padding: p2r(30);
		background: #fff;
		.img-wrap{
			display: flex;
			align-items: center;
			width: p2r(300);
			height: 100%;
		}
		img{
			width: 100%;
		}
		.goods-info{
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin-left: p2r(30);
			.goods-name{
				font-size: p2r(30);
				font-weight: bold;
			}
			.goods-desc{
				margin: p2r(20) 0;
				@include line-clamp(3);
				line-height: p2r(40);
				font-size: p2r(24);
				color: #808080;
			}
			.goods-price{
				font-size: p2r(30);
				color: #F83B4A;
			}
		}
	}
</style>
