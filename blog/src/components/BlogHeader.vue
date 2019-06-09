<template>
  <nav>
    <ul>
      <li>
        <router-link to='/' exact>博客</router-link>
        <router-link to='/add' exact>写博客</router-link>

      </li>
    </ul>
  </nav>
</template>
<style scoped>
li{
  list-style: none;
  text-align: center;

}
a{
  margin-right: 10px;
  text-decoration: none;

} 
.router-link-active{
  background: green;
}
</style>

