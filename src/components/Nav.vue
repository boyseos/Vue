<template>
<div>
	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<div class="navbar-header">
				<a href="#" class="navbar-brand">쉐키럽</a>
			</div>
			<ul class="nav navbar-nav" style="width : 500px">
				<li class="active"><router-link to="/">HOME MAN</router-link></li>
				<li><router-link to="/cart">에코바구니</router-link></li>
				<li><router-link to="/helloworld">헬로월드</router-link></li>
				<li><router-link to="/calculator">계산기</router-link></li>
				<li><router-link to="/seqsum">수열계산</router-link></li>
				<li><router-link to="/account">계좌</router-link></li>
				<li><router-link to="/todo">할일</router-link></li>
			</ul>
		</div>
	</nav>
</div>
</template>
<script>
export default{

}
</script>
<style scoped>

</style>