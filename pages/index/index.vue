<template>
	<view class="gameName" v-if="!rule">
		<text class="oneFont">数</text>
		<text class="twoFont">字</text>
		<image src="../../static/dice.png" mode="aspectFill"></image>
		<text class="threeFont">盅</text>
	</view>
	<view class="rule" v-if="rule">
		<text>
			~把声音打开，以防作弊哈
		</text>
		<text>
			~在隐藏模式下不可摇一下
		</text>
	</view>
	<view class="content">
		<button class="ruleButtom" @click="isRule">游戏规则</button>
		<view class="row" v-if="isRow">
			<view class="dice" v-for="(item, index) in diceArr" :key="index"> 
				{{item}}
			</view>
		</view>
		<view class="buttom">
			<button class="rollButton" @click="rollDice" :disabled="isDisabled">摇一下</button>
			<button class="hideButton" @click="isHide">
				<image src="../../static/look.png" mode="aspectFill" v-show="isRow"></image>
				<image src="../../static/noLook.png" mode="aspectFill" v-show="!isRow"></image>
			</button>
		</view>
	</view>
</template>

<script setup>
import {ref} from 'vue'
const isRow = ref(true)
const rule = ref(false)
const isDisabled = ref(false)
const diceArr = ref([0,0,0,0,0])
const innerAudioContext = uni.createInnerAudioContext();
innerAudioContext.src="/static/48fhb-v5ksp.mp3"
const rollDice = () => {
	for(let i=0; i < diceArr.value.length; i++){
		diceArr.value[i] = Math.floor(Math.random() * 6) + 1;
	}
	console.log(diceArr.value)
	innerAudioContext.play();
}
const isHide = ()=>{
	isRow.value = !isRow.value;
	isDisabled.value = !isDisabled.value
}
const isRule = () => {
	rule.value = !rule.value
	console.log(rule.value)
}
</script>

<style lang="scss" scoped>
	.gameName{
		position: absolute;
		top: 9vh;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		image{
			width: 14vh;
			height: 14vh;
		}
		text{
			font-size: 130rpx;
			font-weight: 1000;
			margin: 10rpx;
		}
		.oneFont{
			color: 	#8B3A3A;
			rotate: 15deg;
		}
		.twoFont{
			color: 	#8A2BE2;
			rotate: -30deg;
		}
		.threeFont{
			color: #FF7F00;
			rotate: -25deg;
		}
	}
	.rule{
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		top: 10vh;
		font-size: 40rpx;
		font-weight: bold;
		width: 100%;
		color: #B22222;
	}
	.content{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background: linear-gradient(to bottom, #00ffff, #FFFFF0 40%, #7fff00);
		.ruleButtom{
			display: flex;
			justify-content: space-evenly;
			position: absolute;
			bottom: 35vh;
			font-size: 35rpx;
			background-color: #BA55D3;
			font-weight: bold;
			color: #90EE90;
		}
		.row{
			position: absolute;
			top: 35vh;
			width: 100%;
			display: flex;
			justify-content: space-around;
			.dice{
				font-size: 110rpx;
				font-weight: bold;
			}
		}
		.buttom{
			display: flex;
			justify-content: space-evenly;
			position: absolute;
			bottom: 15vh;
			.rollButton{
				margin-right: 2vh;
				margin-left: 1vh;
				width: 18vh;
				height: 18vh;
				line-height: 18vh;
				border-radius: 50%;
				background: #EE2C2C;
				color: #191970;
				font-size: 45rpx;
				font-weight: bold;
			}
			.hideButton{
				position: relative;
				margin-left: 2vh;
				margin-right: 1vh;
				width: 18vh;
				height: 18vh;
				line-height: 18vh;
				border-radius: 50%;
				background: #EE2C2C;
				font-size: 60rpx;
				font-weight: bold;
				display: inline-block;
				image{
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 12vh;
					height: 12vh;
				}
			}
		}
		.red{
			color: red;
		}
	}
</style>