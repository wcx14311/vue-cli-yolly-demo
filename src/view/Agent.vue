<template>
    <div>
      	<div class="head-bar">top</div>
	    <div class="body-box">
	        <div class="laft-bar">
	        	<div class="left-user-info">
	        		<div class="u-img"><img src="../images/touxiang.png"></div>
	        		<div class="u-text">
	        			<h4>炖萝卜</h4>
	        			<p>白金代理商</p>
	        		</div>
	        	</div>
	        	<div class="left-menu-list">
					<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                        <template v-for="child in item.children" v-if="item.show">
							<p><router-link :to="child.path"><span class="icon"></span>{{child.name}}</router-link></p>
                        </template>
                    </template>
	        		<p><a href="#/about"><span class="icon"></span>个人简介</a></p>
	        	</div>
	        </div>
	        <div class="right-content">
	        	<div style="padding:10px 20px 20px;">
	        		<div style="padding-bottom:10px;height:14px;">
		        		<el-col :span="24" class="breadcrumb-container">
							<el-breadcrumb separator="/" class="breadcrumb-inner">
								<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">{{ item.name }}</el-breadcrumb-item>
							</el-breadcrumb>
						</el-col>
		        	</div>
		        	<div>
		        		<transition name="fade" mode="out-in">
					      	<router-view></router-view>
					    </transition>
		        	</div>
	        	</div>
	        </div>
	    </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.head-bar{
	height:80px;
}
.body-box{
	position:absolute;
	top:80px;
	width:100%;
	bottom: 0;
	left: 0;
}
.laft-bar{
	width: 250px;
	position:absolute;
	bottom: 0;
	left:0;
	top:0;
	background:#2b303b;
}
.laft-bar li{
	display: block;
}
.left-user-info{
	padding: 20px 0 20px 20px;
	display: flex;
}
.left-user-info .u-img{
	margin-right: 10px;
	width: 50px;
	height: 50px;
}
.left-user-info .u-img img{
	display: block;
	width: 50px;
	height: 50px;
}
.left-user-info .u-text h4{
	margin-top:6px;
	color:#b0b3c8
}
.left-user-info .u-text p{
	color: #8386a0;
}
.left-menu-list a{
	color:#b0b3c8;
	height: 50px;
	line-height: 50px;
	display: block;
	padding-left:30px;
	-webkit-transition-duration: 300ms;
    transition-duration: 300ms;
}
.left-menu-list a .icon{
	border-radius: 10px;
	vertical-align:sub;
	margin-right: 5px;
	display: inline-block;
	width: 15px;
	height: 15px;
	background: #b0b3c8;
}
.left-menu-list a:hover{
	background:#21252d;
}
.left-menu-list a.router-link-active{
	background:#FF5F4E;
	color:#fff;
}
.left-menu-list a.router-link-active .icon{
	background:#fff;
}
.right-content{
	position: relative;
	margin-left: 250px;
	border-top:1px solid #eee;
	background:#f2f4f8;
	height:100%;
	box-sizing:border-box;
}
.center-content {
    background: #fff;
    box-shadow: 0px 0 15px rgba(0,0,0,0.08);
}
.mt20{
	margin-top: 20px;
}
.pa20{
	padding: 20px;
}
</style>
