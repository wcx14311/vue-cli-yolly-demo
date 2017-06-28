<template>
    <div class="loginpage">
        <div class="header">
            <div class="w1200">
                <div class="left">
                    <div class="logo">
                        <!--首页链接-->
                        <a href="index.html"></a>
                    </div>
                </div>
                <div class="right links">
                    <ul>
                        <li><a href="sever.html">首页</a></li>
                        <li><a href="map.html">加盟合作</a></li>
                        <li><a href="aboutus.html">解决方案</a></li>
                        <li><a href="aboutus.html">永乐产品</a></li>
                        <li><a href="aboutus.html">开放API</a></li>          
                        <li><a href="aboutus.html">关于我们</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="banner">
            <div class="bannerslide"></div>
            <div class="weizhi">
                <div class="loginbox">
                    <h4>代理商登录</h4>
                    <div class="input">
                        <div class="dinput as1">
                            <input v-model="user.username" type="text" name="" placeholder="账号">
                            <span class="tishi">{{error.name}}</span>
                        </div>
                        <div class="dinput as2">
                            <input v-model="user.password" type="password" name="" placeholder="密码">
                            <span class="tishi">{{error.pwd}}</span>
                        </div>
                        <div style="height:42px;margin-bottom:10px;position:relative;">
                            <div class="jianyan">
                                <div class="dinput as3"><input v-model="user.vCode" type="text" name="" placeholder="验证码"></div>
                                <div class="checkcode"><img src="../images/verifyCodeImage.jpg"></div>
                            </div>
                            <div class="jianyan" style="display:none;">
                                <div class="dinput as3"><input type="text" id="namse" name="" placeholder="验证码"></div>
                                <a class="getCheckNo">重新获取验证码88秒</a>
                            </div>
                        </div>
                        <div class="lgbtn"><a v-on:click="handleSubmit">立即登录</a></div>
                        <div class="option">
                            <a class="letf"><label><input type="checkbox" name="">记住密码</label></a>
                            <a class="right" href="">忘记密码？</a>
                        </div>
                        <p>没有帐号？<span class="red">立即注册</span>，或使用合作平台登录</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="w1200">
                <div class="s-dac">
                    <div class="l-links">
                        <h4>关于我们</h4>
                        <p><a>集团介绍</a></p>
                        <p><a>平台介绍</a></p>
                        <p><a>平台优势</a></p>
                        <p><a>服务承诺</a></p>
                    </div>
                    <div class="l-links">
                        <h4>购物指南</h4>
                        <p><a>帮您找到商品</a></p>
                        <p><a>帮您购买商品</a></p>
                        <p><a>帮您跟踪订单</a></p>
                    </div>
                    <div class="l-links">
                        <h4>账号管理</h4>
                        <p><a>如何注册</a></p>
                        <p><a>找回密码</a></p>
                        <p><a>修改地址</a></p>
                        <p><a>修改手机号</a></p>
                    </div>
                    <div class="l-links">
                        <h4>售后服务</h4>
                        <p><a>申请售后退款说明</a></p>


                        <p><a>取消订单退款说明</a></p>
                        <p><a>手机寄修服务</a></p>
                        <p><a>退换货流程</a></p>
                    </div>
                    <div class="r-company-info">
                        <h4>联系我们</h4>
                        <p class="tell-no">0531-55599118</p>
                        <p>工作日：24小时接受订单，因公司周日休息，周日可接受订单，但无法发货；</p>
                        <p>客服在线：早8：30 - 18：00；</p>
                        <p>配送说明：订货次日下午18：00前配送到店</p>
                        <div class="qq-server">
                            <a class="kefu1" href="tencent://message/?uin=3372981578&amp;Site=有事Q我&amp;Menu=yes"></a>
                            <a class="kefu2" href="tencent://message/?uin=267024119&amp;Site=有事Q我&amp;Menu=yes"></a>
                            <a class="kefu3" href="tencent://message/?uin=3516588861&amp;Site=有事Q我&amp;Menu=yes"></a>
                        </div>
                    </div>
                </div>
                <div class="ftbm">
                    <p class="dc">Copyright © 2015 Yolly.Co,Ltd ALL Rights Reserved<br/>鄂B2-20090028-1</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data: function () {
        return {
            user:{
                username:'admin',
                password:'admin',
                vCode:''
            },
            error:{
               name:'', 
               pwd:'' 
            },
            serverData:{},
            apiUrl: '/api/datass.json'
        }
    },
    methods:{
        handleSubmit:function() {
            if(this.user.username.length<1){
                this.error.name = '请输入账号';
            }else{
                this.error.pwd = '';
            };
            if(this.user.username!='admin'){
                this.error.name = '账号错误';
            }else{
                this.error.name = '';
            };
            if(this.user.password<1){
                this.error.pwd = '请输入密码';
            }else{
                this.error.pwd = '';
            };
            if(this.user.password!='admin'){
                this.error.pwd = '密码错误';
            }else{
                this.error.pwd = '';
            };
            if(this.user.vCode!='6077'){ 
                this.$notify({
                    title: '请输入验证码',
                    message: '请输入验证码',
                    type: 'warning'
                });
                return false;
            };
            this.$notify({
                title: '成功',
                message: '登录成功',
                type: 'success'
            });
            this.$router.push({ path:'/agent/index'});
        }
    }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.loginpage{
    overflow:auto;
    height:100%;
    background:#fff;
}
.loginpage .left{
    float:left;
}
.loginpage .right{
    float:right;
}
.loginpage .header{
    height:130px;
}
.loginpage .header .logo{
    background:url(../images/img-logo.jpg) no-repeat;
    height:83px;
    width:442px;
    margin-top:20px;
}
.loginpage .banner .bannerslide{
    position:absolute;
    width:100%;
    height:480px;
    background-image:url('../images/imgbanner-1.jpg');
}
.loginpage .header .links{font-size:16px;color:#40444a;margin-top:52px;margin-right:-25px;}
.loginpage .header .links li{float:left;margin:0 25px;}
.loginpage .header .links li.c{padding:0 30px;}
.loginpage .header .links li a span{color:#b0b1b4;}
.loginpage .header .links{color:#40444a;margin-top:50px;}
.loginpage .header .links li{float:left;}
.loginpage .header .links li.c{padding:0 30px;}
.loginpage .header .links li a{font-size:18px;}
.loginpage .header .links li a span{color:#b0b1b4;}
.loginpage .banner{height:480px;position:relative;overflow:hidden;}
.loginpage .banner .bannerslide{position:absolute;width:100%;height:480px;}
.loginpage .banner .weizhi{left:50%;margin-left:600px;height:480px;position:absolute;}
.loginpage .banner .loginbox{width:280px;padding:30px;position:absolute;right:0;top:50px;background:rgba(255,255,255,0.9);height:310px;}
.loginpage .banner .loginbox h4{color:#33363c;font-size:18px;font-weight:bolder;padding-bottom:10px;}
.loginpage .banner .loginbox .input input{outline:none;display:block;width:100%;outline:none;height:40px;transition-duration:500ms;box-sizing:border-box;background:no-repeat #fff;border:1px solid #eaeef1;text-indent:43px;}
.loginpage .banner .loginbox .input input:focus{border:1px solid #ff5f4e;box-shadow:0 0 15px rgba(0,0,0,0.15);}
.loginpage .banner .loginbox .input .dinput{display:block;height:40px;width:100%;margin-bottom:10px;position: relative;}
.loginpage .banner .loginbox .input .tishi{position:absolute;right:10px;top:10px;color:#f00;}
.loginpage .banner .loginbox .input .dinput.as1 input{background-image:url(../images/icon-ad-1.png);background-position:16px 10px;}
.loginpage .banner .loginbox .input .dinput.as2 input{background-image:url(../images/icon-ad-2.png);background-position:18px 10px;}
.loginpage .banner .loginbox .input .jianyan .dinput.as3{width:120px;display:inline-block;margin:0;vertical-align: top;}
.loginpage .banner .loginbox .input .jianyan .dinput.as3 input{padding:0 10px;text-indent:0;width:120px;}
.loginpage .banner .loginbox .input .jianyan .checkcode{vertical-align:top;margin-left:10px;display:inline-block;}
.loginpage .banner .loginbox .input .jianyan .checkcode img{display:block;overflow:hidden;height:39px;}
.loginpage .banner .loginbox .option{padding-top:18px;height:20px;padding-bottom:8px;}
.loginpage .banner .loginbox .option a.letf{color:#666;line-height:14px;vertical-align: top;display:inline;float:left;}
.loginpage .banner .loginbox .option label{vertical-align: top;}
.loginpage .banner .loginbox .option label input{vertical-align:middle;background:#fff;height:14px;margin-right:5px;width:20px;float:left;}
.loginpage .banner .loginbox .lgbtn{padding-top:10px;}
.loginpage .banner .loginbox .lgbtn a{color:#fff;background:#ff5f4e;display:block;text-align:center;border-radius:5px;height:40px;line-height:40px;}
.loginpage .banner .loginbox p{font-size:12px;}
.loginpage .banner .loginbox p .red{color:#ff5f4e;cursor:pointer;}
.loginpage .banner .loginbox .weating{text-align:center;margin-top:126px;}
.loginpage .banner .loginbox .weating img{width:50px;}
.loginpage .banner .loginbox .lg_toast{position:absolute;background:#000;border-radius:5px;z-index:100;color:#fff;width:200px;text-align:center;padding:10px 0 14px;border-radius:8px;font-size:16px;left:50%;top:40%;margin-left:-100px;}
.loginpage .xiaoNo{background:#f1f2f8;height:80px;}
.loginpage .xiaoNo .w1200 div{padding-left:45px;background:no-repeat;background-position:1px 10px;width:350px;display:inline-block;float:left;margin-top:14px;}
.loginpage .xiaoNo .w1200 div p{font-size:14px;color:#797c95;padding:2px 0 1px;}
.loginpage .xiaoNo .w1200 div p span{font-size:24px;font-weight:bolder;padding-right:5px;}
.loginpage .xiaoNo div.panno1{background-image:url(../images/icon-nu-1.png)}
.loginpage .xiaoNo div.panno2{background-image:url(../images/icon-nu-2.png)}
.loginpage .xiaoNo div.panno3{background-image:url(../images/icon-nu-3.png)}
.loginpage .footer .ftbm{border-top:1px solid #ebebeb;padding:5px}
.loginpage .footer .ftbm p{text-align:center;padding:15px 0}
.loginpage .footer .ftbm p.ds{font-size:14px;color:#5c5c5c}
.loginpage .footer .ftbm p.dc{color:#8d8d8d}
.loginpage .footer .ftbm p .xiaoshuxian{
    color:#eee;
    padding:0 12px
}
.loginpage .footer .s-dac{padding:50px 0;}
.loginpage .footer .s-dac h4{font-size:18px;color:#5c5c5c;line-height:40px;padding-bottom:10px;}
.loginpage .footer .s-dac p {font-size:14px;color:#9a9a9a;line-height:22px;}
.loginpage .footer .l-links{display: inline-block;vertical-align: top;zoom: 1;*display: inline;padding-right:90px;text-align:center;}
.loginpage .footer .r-company-info{display: inline-block;vertical-align: top;zoom: 1;*display: inline;}
.loginpage .footer .r-company-info .tell-no{color:#FF5F4E;font-size:27px;padding-bottom:10px;background:url(../images/icon-red-phone.png) no-repeat;padding-left:35px;padding-top:2px;background-size: 25px;}

.loginpage .footer .qq-server{margin-top:5px;}
.loginpage .footer .qq-server a{display: inline-block;vertical-align: top;zoom: 1;*display: inline;width:24px;height:24px;margin-right:5px;}
.loginpage .footer .qq-server .kefu1{background-image:url(../images/icon-qq1.png);}
.loginpage .footer .qq-server .kefu2{background-image:url(../images/icon-qq2.png);}
.loginpage .footer .qq-server .kefu3{background-image:url(../images/icon-qq3.png);}
</style>
