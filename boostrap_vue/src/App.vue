<template>
  <div id="app">
<!-- MENU NAVBAR -------------->
    <b-navbar toggleable="md" type="dark" variant="danger">
      <b-container>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name:'home'}" exact>Home</b-nav-item>
            <b-nav-item :to="{name:'about'}">About</b-nav-item>
            <b-nav-item :to="{name:'grid'}">Grid</b-nav-item>
            <b-nav-item :to="{name:'cards'}">Cards</b-nav-item>
            <b-nav-item :to="{name:'form'}">Form</b-nav-item>
          </b-navbar-nav>
        </b-collapse>

      </b-container>
    </b-navbar>
<!-- CUERPO BODY ------------->
    <b-container>
      <router-view/>
    </b-container>

  </div>
</template>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
