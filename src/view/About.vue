<template>
	<div class="about-body">
	    <aside class="profile-card">
		    <header>
		        <div class="profile-card-photo"><img src="./../images/tx.gif"></div>
		        <div class="profile-card-text">
		        	<h1>花千骨炖萝卜</h1>
		        	<h2>武汉 挨踢民工</h2>
		        </div>
		    </header>
		    <section class="card-body">
		    	<div class="card-body-line">
		    		<div class="l"><span class="icon"><img src="./../images/about/icon-email.png"></span></div>
		    		<div class="r"><span>17671635808</span></div>
		    	</div>
		    	<div class="card-body-line">
		    		<div class="l"><span class="icon"><img src="./../images/about/icon-phone.png"></span></div>
		    		<div class="r"><span>1055127249@qq.com</span></div>
		    	</div>
		    	<div class="card-body-line">
		    		<div class="l"><span class="icon"><img src="./../images/about/icon-qq.png"></span></div>
		    		<div class="r"><span>17671635808</span></div>
		    	</div>
		    	<div class="card-body-line">
		    		<div class="l"><span class="icon"><img src="./../images/about/icon-net.png"></span></div>
		    		<div class="r"><span>武汉市江汉区新华小区</span></div>
		    	</div>
		    	<div class="card-body-line">
		    		<div class="l"></div>
		    		<div class="r" style="color:#fff;font-size:18px;margin-top:5px;">个人简介</div>
		    	</div>
		    	<div class="card-body-line">
		    		<div class="l"></div>
		    		<div class="r"><span>武汉市江汉区新华小区武汉市江汉区新华小区武汉市江汉区新华小区</span></div>
		    	</div>
		    	<div class="card-body-line">
		    		<div class="l"></div>
		    		<div class="r" style="color:#fff;font-size:18px;margin-top:5px;">个人技能</div>
		    	</div>
		    	<div class="card-body-line">
		    		<div class="l"></div>
		    		<div class="r"><span>武汉市江汉区新华小区武汉市江汉区新华小区武汉市江汉区新华小区</span></div>
		    	</div>
		    	<div class="card-body-line">
		    		<div class="l"></div>
		    		<div class="r" style="color:#fff;font-size:18px;margin-top:5px;">工作经历</div>
		    	</div>
		    	<div class="card-body-line">
		    		<div class="l time">2016.04</div>
		    		<div class="r"><span>武汉市江汉区新华小区</span></div>
		    	</div>
		    	<div class="card-body-line">
		    		<div class="l time">2016.04</div>
		    		<div class="r">
		    			<div>武汉市江汉区新华小区武汉市江汉区新华小区武汉市江汉区新华小区武汉市江汉区新华小区武汉市江汉区新华小区</div>
		    		</div>
		    	</div><div class="card-body-line">
		    		<div class="l time">2016.04</div>
		    		<div class="r"><span>武汉市江汉区新华小区</span></div>
		    	</div><div class="card-body-line">
		    		<div class="l time">2016.04</div>
		    		<div class="r"><span>武汉市江汉区新华小区</span></div>
		    	</div><div class="card-body-line">
		    		<div class="l time">2016.04</div>
		    		<div class="r"><span>武汉市江汉区新华小区</span></div>
		    	</div><div class="card-body-line">
		    		<div class="l time">2016.04</div>
		    		<div class="r"><span>武汉市江汉区新华小区</span></div>
		    	</div>
		    	<div class="card-body-line">
		    		<div class="l"><br></div>
		    		<div class="r"><span></span></div>
		    	</div>			    	
		    </section>
		</aside>
	</div>	
</template>

<script>
export default {
  
}
</script>

<style>
::-webkit-scrollbar  
{  
    width:5px;  
    height:5px;  
} 
/*定义滚动条轨道 内阴影+圆角*/  
::-webkit-scrollbar-track  
{  
    border-radius: 10px;  
}  
/*定义滑块 内阴影+圆角*/  
::-webkit-scrollbar-thumb  
{  
    border-radius: 10px;  
    background-color:rgba(255,255,255,0.3);  
}  
.about-body {
	left:0;
	top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
}
.profile-card {
    background: #FFB300;
    width: 56px;
    height: 56px;
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 2;
    overflow: hidden;
    opacity: 0;
    margin-top: 70px;
    -webkit-transform: translate(-50%, -65%);
    transform: translate(-50%, -65%);
    -webkit-border-radius: 50%;
    border-radius: 50%;
    -webkit-animation: 
    	init 0.5s 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, 
    	moveDown 1s 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards, 
    	moveUp 1s 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, 
    	materia 0.5s 2.7s cubic-bezier(0.86, 0, 0.07, 1) forwards;
    animation: 
    	init 0.5s 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, 
    	moveDown 1s 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards, 
    	moveUp 1s 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, 
    	materia 0.5s 2.7s cubic-bezier(0.86, 0, 0.07, 1) forwards
}

.profile-card header {
	transition:300ms;
	height: 120px;
	box-sizing: border-box;
    position: relative;
    padding: 30px 20px 30px 40px;
    display: flex;
    background: #eb5153;
    color: #fff;
    opacity: 0;
    -webkit-animation: moveIn 1s 3.1s ease forwards;
    animation: moveIn 1s 3.1s ease forwards
}
.profile-card header .profile-card-photo {
	transition:300ms;
    display: inline-block;
    text-align: center;
    position: relative;
    opacity: 1;
}
.profile-card header .profile-card-photo img {
	transition:300ms;
    width:60px;
    max-width: 100%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    -webkit-transition: -webkit-box-shadow 0.3s ease;
    transition: box-shadow 0.3s ease;
    opacity: 1;
}
.profile-card header .profile-card-text{
	transition:300ms;
	margin:5px 0 5px 30px;
	border-left: 2px solid #fff;
	padding-left: 30px;
	opacity: 1;
}

.profile-card header .profile-card-text h1 {
    color: #fff;
    font-size: 18px;
    font-weight: normal;
}

.profile-card header .profile-card-text h2 {
	margin-top: 5px;
    color: #fff;
    font-size:13px;
    font-weight: normal;
}

.profile-card .card-body {
	background:url(../images/xiaosanjiao.png) no-repeat;
	background-size: 25px;
	background-position:57px -4px;
	overflow: hidden;
	transition:300ms;
	opacity: 0;
	color:#b0b3c8;
	position: relative;
	height: 120px;
	box-sizing: border-box;
	padding-top:7px;
	font-size: 12px;
	-webkit-animation: moveIn 1s 3.1s ease forwards;
    animation: moveIn 1s 3.1s ease forwards
}
.profile-card .card-body .card-body-line{
	display: flex;
}
.profile-card .card-body .card-body-line .l{
	text-align: center;
	width:69px;
	border-right: 1px solid #eb5153;
	padding-top:7px;
}
.profile-card .card-body .card-body-line .r{
	flex: 1;
	padding-left: 10px;
	padding-right: 20px;
	padding-top:7px;
}
.profile-card .card-body .icon{
	display: inline-block;
	width:18px;
	height:18px;
	border-radius: 10px;
	vertical-align: top;
}
.profile-card .card-body .icon img{
	display: block;
	width: 100%;
}
.profile-card:hover header{
	height: 0;
	padding-top: 0;
	padding-bottom: 0;
}
.profile-card:hover header .profile-card-photo{
	opacity: 0;
}
/*.profile-card:hover header .profile-card-photo img{
	opacity: 0;
}*/
.profile-card:hover header .profile-card-text{
	opacity: 0;
}
.profile-card:hover .card-body{
	height:240px;
	overflow: auto;
}
@-webkit-keyframes init {
    0% {
        width: 0px;
        height: 0px
    }
    100% {
        width: 56px;
        height: 56px;
        margin-top: 0px;
        opacity: 1
    }
}

@keyframes init {
    0% {
        width: 0px;
        height: 0px
    }
    100% {
        width: 56px;
        height: 56px;
        margin-top: 0px;
        opacity: 1
    }
}

@-webkit-keyframes puff {
    100% {
        top: 50%;
        height: 100%;
        padding: 0px 100%
    }
}

@keyframes puff {
    100% {
        top: 50%;
        height: 100%;
        padding: 0px 100%
    }
}

@-webkit-keyframes borderRadius {
    100% {
        border-radius: 0px
    }
}

@keyframes borderRadius {
    100% {
        border-radius: 0px
    }
}

@-webkit-keyframes moveDown {
    50% {
        top: 40%
    }
    100% {
        top: 100%
    }
}

@keyframes moveDown {
    50% {
        top: 40%
    }
    100% {
        top: 100%
    }
}

@-webkit-keyframes moveUp {
    0% {
        background: #FFB300;
        top: 100%
    }
    50% {
        top: 40%
    }
    100% {
        top: 50%;
        background: #E0E0E0
    }
}

@keyframes moveUp {
    0% {
        background: #FFB300;
        top: 100%
    }
    50% {
        top: 40%
    }
    100% {
        top: 50%;
        background: #E0E0E0
    }
}

@-webkit-keyframes materia {
    0% {
        background: #E0E0E0
    }
    50% {
        -webkit-border-radius: 0;
        border-radius: 0
    }
    100% {
        width: 475px;
        height: 280px;
        background: #283949;
        -webkit-border-radius: 0;
        border-radius: 0
    }
}

@keyframes materia {
    0% {
        background: #E0E0E0
    }
    50% {
        -webkit-border-radius: 0;
        border-radius: 0
    }
    100% {
        width:390px;
        height:240px;
        background: #283949;
        -webkit-border-radius: 0;
        border-radius: 0
    }
}

@-webkit-keyframes moveIn {
    100% {
        opacity: 1
    }
}

@keyframes moveIn {
    100% {
        opacity: 1
    }
}

@-webkit-keyframes scaleIn {
    100% {
        transform: scale(1)
    }
}

@keyframes scaleIn {
    100% {
        transform: scale(1)
    }
}

@-webkit-keyframes ripple {
    50%,
    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }
    100% {
        opacity: 0
    }
}

@keyframes ripple {
    50%,
    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }
    100% {
        opacity: 0
    }
}

</style>
