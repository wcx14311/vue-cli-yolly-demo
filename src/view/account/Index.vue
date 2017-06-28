<template>
    <div>
        <div class="breadcrumb">
            <span class="breadcrumb_item"><router-link to="/home/index">首页</router-link><span class="breadcrumb_separator">/</span></span><span class="breadcrumb_item"><a>财务管理</a><span class="breadcrumb_separator">-</span></span>
        </div>
        <div class="cw-manange-box clearfix">
            <el-row>
                <el-col :span="16" class="cw-account-num">
                    <el-row class="p-b">
                        <el-col :span="24">
                            <div class="grid-content-yue bg-purple-yue">
                                <p class="cw-title">余额账户</p>
                                <div class="cw-number">
                                    <span class="jine" style="vertical-align:top;">568089.00</span>
                                    <el-button type="danger">查询</el-button>
                                    <el-button type="danger">查询</el-button>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row class="b-t p-t">
                        <el-col :span="12">
                            <div class="grid-content bg-purple-one">
                                <p class="cw-title">余额账户</p>
                                <p class="cw-number"><span class="jine">568089.00</span></p>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-two">
                                <p class="cw-title">余额账户</p>
                                <p class="cw-number"><span class="jine">568089.00</span></p>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row class="b-t">
                        <el-col :span="12">
                            <div class="grid-content bg-purple-three">
                                <p class="cw-title">余额账户</p>
                                <p class="cw-number"><span class="jine">568089.00</span></p>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-four">
                                <p class="cw-title">余额账户</p>
                                <p class="cw-number"><span class="jine">568089.00</span></p>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="8" class="cw-account-card">
                    <el-row>
                        <el-col :span="24">
                            <div class="grid-content  bg-purple-dark">
                               <p class="p-icon">银行卡</p> 
                               <p class="p-text">6</p> 
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <div class="grid-content bg-purple-dark">
                               <p class="p-icon">银行卡</p> 
                               <p class="p-text">6</p> 
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <div class="grid-content bg-purple-dark">
                               <p class="p-icon">银行卡</p> 
                               <p class="p-text">6</p> 
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <br>
            <br>
            <br>
            <br>
            <br>
            <p>账户变动记录</p>
            <br>
            <el-table :data="tableData" border style="width:100%">
                <el-table-column prop="date" label="日期" width="180"></el-table-column>
                <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
	export default {
	  	data:function(){
	        return {
	            tableData: [
	                {date: '2016-05-02',name: '王小虎',address: '上海市普陀区金沙江路 1518 弄'}, 
	                {date: '2016-05-04',name: '王小虎',address: '上海市普陀区金沙江路 1517 弄'}, 
	                {date: '2016-05-04',name: '王小虎',address: '上海市普陀区金沙江路 1517 弄'}, 
	                {date: '2016-05-04',name: '王小虎',address: '上海市普陀区金沙江路 1517 弄'}, 
	                {date: '2016-05-04',name: '王小虎',address: '上海市普陀区金沙江路 1517 弄'}, 
	            ]
	        }
	    }
	}
</script>