<template>
    <div class="center-content mt20 pa20">
      话费充值
      <div>
      	<el-steps :space="100" :active="active" finish-status="success">
    		  <el-step title="步骤 1"></el-step>
    		  <el-step title="步骤 2"></el-step>
    		  <el-step title="步骤 3"></el-step>
    		</el-steps>

      	<a @click="getData">sssss</a>
      	<div>
      		<div v-if="active==1">1</div>
      		<div v-if="active==2">2</div>
      		<div v-if="active==3">3</div>
      	</div>
      </div>
    </div>
</template>

<script>
export default {
  	data() {
      return {
        active: 0
      };
    },
    methods: {
      getData() {
        if (this.active++ > 2) this.active = 0;
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>