<template>
    <div id="app">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}

</script>

<style>
body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select{margin:0;padding:0} 
body{font:14px "微软雅黑","Arial Narrow",HELVETICA;background:#fff;-webkit-text-size-adjust:100%;} 
a{color:#2d374b;text-decoration:none} 
a:hover{color:#cd0200;} 
em{font-style:normal} 
li{list-style:none} 
img{border:0;vertical-align:middle} 
table{border-collapse:collapse;border-spacing:0} 
p{word-wrap:break-word} 
.clearfix:after {content: "."; display: block; height:0; clear:both; visibility: hidden;}
.clearfix{ *zoom:1;}
.slide-fade-enter-active {transition: all .3s ease;}
.slide-fade-enter{transform: translateX(10px);opacity: 0;}
.fade-enter-active{transition: opacity .5s}
.fade-enter{opacity: 0}
.w1200{width:1200px;margin:auto;}
</style>