<template>
    <div>
    	<div class="center-content">
            <div class="recharge-nav-bar clearfix">
                <span><router-link to="/agent/recharge/phone">手机充值</router-link></span>
                <span><router-link to="/agent/recharge/flow">流量充值</router-link></span>
                <span><router-link to="/agent/recharge/qq">QQ充值</router-link></span>
            </div>
    	</div>
      	<transition name="slide-fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .recharge-nav-bar{overflow: hidden;}
    .recharge-nav-bar span{float:left;width:20%;display:block;box-sizing:border-box;position:relative;}
    .recharge-nav-bar span a{display:block;height:50px;text-align:center;line-height:50px;}
    .recharge-nav-bar span a:before{content:'';position:absolute;border-right:1px solid #efefef;height:100%;top:0;right:0;}
    .recharge-nav-bar span a:after{content:'';position:absolute;border-top:1px solid #efefef;width:100%;top:0;left:0;}
    .recharge-nav-bar span:nth-child(1) a:before,{border:0;}
    .recharge-nav-bar span:nth-child(2) a:before,{border:0;}
    .recharge-nav-bar span:nth-child(3) a:before,{border:0;}
    .recharge-nav-bar span:nth-child(4) a:before,{border:0;}
    .recharge-nav-bar span:nth-child(5) a:before,{border:0;}
    .recharge-nav-bar span:nth-child(5n+1) a:before{border-left:0;}
    .recharge-nav-bar span:nth-child(5n+1) a:after{border-left:0;}
    .recharge-nav-bar span a.router-link-active{background:#FF5F4E;color:#fff;}
    .recharge-nav-bar span a.router-link-active:before{border:none;}
    .recharge-nav-bar span a.router-link-active:after{border:none;}
</style>