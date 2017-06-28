<template>
    <div class="order-statistics-box">
        <div class="order-statistics-body">
            <ul class="clearfix line2">
               <li>
                  <div class="order-statistics-item txdd"><div class="item-top"><h3>通讯订单</h3><p>话费、流量、固话、宽带</p></div><p class="m-t-15">总笔数：<span class="txtcolorred">1340</span><span class="f-right">总金额：<span class="txtcolorred">56568.00</span>元</span></p></div>
               </li>
               <li><div class="order-statistics-item wlcz"><div class="item-top"><h3>网络充值</h3><p>QQ、网游、支付宝</p></div><p class="m-t-15">总笔数：<span class="txtcolorred">1340</span><span class="f-right">总金额：<span class="txtcolorred">56568.00</span>元</span></p></div></li>
               <li><div class="order-statistics-item txdd"><div class="item-top"><h3>通讯订单</h3><p>话费、流量、固话、宽带</p></div><p class="m-t-15">总笔数：<span class="txtcolorred">1340</span><span class="f-right">总金额：<span class="txtcolorred">56568.00</span>元</span></p></div></li>
               <li><div class="order-statistics-item shfw"><div class="item-top"><h3>生活服务</h3><p>话费、流量、固话、宽带</p></div><p class="m-t-15">总笔数：<span class="txtcolorred">1340</span><span class="f-right">总金额：<span class="txtcolorred">56568.00</span>元</span></p></div></li>
               <li><div class="order-statistics-item czka"><div class="item-top"><h3>充值卡</h3><p>话费充值卡、中石化加油卡</p></div><p class="m-t-15">总笔数：<span class="txtcolorred">1340</span><span class="f-right">总金额：<span class="txtcolorred">56568.00</span>元</span></p></div></li>
               <li><div class="order-statistics-item xyka"><div class="item-top"><h3>信用卡还款</h3><p>信用卡还款</p></div><p class="m-t-15">总笔数：<span class="txtcolorred">1340</span><span class="f-right"> 总金额：<span class="txtcolorred">56568.00</span>元</span></p></div></li>
               <li><div class="order-statistics-item ywbl"><div class="item-top"><h3>业务办理</h3><p>话费、宽带、流量、ITV</p></div><p class="m-t-15"> 总笔数：<span class="txtcolorred">1340</span><span class="f-right">总金额：<span class="txtcolorred">56568.00</span>元</span></p></div></li>
               <li><div class="order-statistics-item slfw"><div class="item-top"><h3>商旅服务</h3><p>火车、汽车、飞机</p></div><p class="m-t-15">总笔数：<span class="txtcolorred">1340</span><span class="f-right">总金额：<span class="txtcolorred">56568.00</span>元</span></p></div></li>
               <li><div class="order-statistics-item txdd"><div class="item-top"><h3>通讯订单</h3><p>话费、流量、固话、宽带</p></div><p class="m-t-15">总笔数：<span class="txtcolorred">1340</span><span class="f-right">总金额：<span class="txtcolorred">56568.00</span>元</span></p></div></li>
            </ul>
        </div>
    </div>
</template>

<style>
  .order-statistics-body{
    margin-top:10px;
  }
  .order-statistics-body li{
    float:left;width:20%;
  }
  .order-statistics-body li .order-statistics-item{
    box-shadow:0px 0 15px rgba(0,0,0,0.08);
    height:110px;
    cursor:pointer;
    display:block;
    background:#fff;
    padding:30px;
    margin:10px;
    -webkit-transition-duration:300ms;
    transition-duration:300ms;
  }
  .order-statistics-body li .item-top{
    border-bottom:1px solid #eaeef1;
    padding-bottom:25px;
  }
  .order-statistics-body li .item-top h3{
    font-size:24px;
    color:#595959;
    line-height:24px;
  }
  .order-statistics-body li .item-top p{
    color:#999;
    margin-top:10px;
  }
  .order-statistics-body li:hover .order-statistics-item{
    background-color:#FF5F4E;
    border-color:#FF5F4E;
  }
  .order-statistics-body li:hover .item-top{
    border-bottom:1px solid #fff;
  }
  .order-statistics-body li:hover .item-top h3{
    font-size:24px;color:#fff;
    background:url(../../images/right-icon.png) no-repeat right center;
  }
  .order-statistics-body li:hover .item-top p{
    color:#ffafa7;
  }
  .order-statistics-body li:hover p .txtcolorred{
    color:#fff;
  }
  .order-statistics-body li:hover p{
    color:#fff;
  }
  .order-statistics-body .m-t-15{
    margin-top:15px;
  }
  .order-statistics-item .item-top{
    padding-left:65px;
  }
  .order-statistics-item.txdd .item-top{
    background:url(../../images/order/red1.png) no-repeat top left;
  }
  .order-statistics-item.wlcz .item-top{
    background:url(../../images/order/red2.png) no-repeat top left;
  }
  .order-statistics-item.shfw .item-top{
    background:url(../../images/order/red3.png) no-repeat top left;
  }
  .order-statistics-item.czka .item-top{
    background:url(../../images/order/red4.png) no-repeat top left;
  }
  .order-statistics-item.xyka .item-top{
    background:url(../../images/order/red5.png) no-repeat top left;
  }
  .order-statistics-item.ywbl .item-top{
    background:url(../../images/order/red7.png) no-repeat top left;
  }
  .order-statistics-item.slfw .item-top{
    background:url(../../images/order/red8.png) no-repeat top left;
  }

  .order-statistics-body li:hover .txdd .item-top{
    background:url(../../images/order/red1-1.png) no-repeat top left;
  }
  .order-statistics-body li:hover .wlcz .item-top{
    background:url(../../images/order/red2-1.png) no-repeat top left;
  }
  .order-statistics-body li:hover .shfw .item-top{
    background:url(../../images/order/red3-1.png) no-repeat top left;
  }
  .order-statistics-body li:hover .czka .item-top{
    background:url(../../images/order/red4-1.png) no-repeat top left;
  }
  .order-statistics-body li:hover .xyka .item-top{
    background:url(../../images/order/red5-1.png) no-repeat top left;
  }
  .order-statistics-body li:hover .ywbl .item-top{
    background:url(../../images/order/red7-1.png) no-repeat top left;
  }
  .order-statistics-body li:hover .slfw .item-top{
    background:url(../../images/order/red8-1.png) no-repeat top left;
  }

</style>