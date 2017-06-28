<template>
    <div>
        <div class="order-statistics-head">
            <div class="clearfix order-search-options p-l-40" style="position:relative;">
                <el-date-picker
                    v-model="value4"
                    type="datetimerange"
                    :picker-options="pickerOptions2"
                    placeholder="选择时间范围">
                </el-date-picker>
                <el-select v-model="value" placeholder="请选择状态" style="margin-right:10px;">
                    <el-option v-for="item in selectoptions":key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
                <el-button type="danger">查询</el-button>
            </div>
        </div>
        <div style="overflow: hidden;width:100%">
            <transition name="slide-fade">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>
<script>
    
</script>
<style>
    
</style>