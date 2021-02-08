<template>
  <main>
   <nav class="primary-background-color">
    <div class="nav-wrapper container">
      <a href="#" class="brand-logo left">
         <img src="images/beach.png"/>
      </a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="sass.html">Resturanter</a></li>
        <li><a href="badges.html">Produkter</a></li>
        <li><a href="collapsible.html">Nyhedsbrev</a></li>
        <li><a href="collapsible.html">Kontakt</a></li>
      </ul>
    </div>
  </nav>
  <router-view/>
  </main>
</template>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

 ul, ul li {
   margin-left: 50px;
 }

 
  nav .brand-logo {
    position:inherit;

}

h2, h3 {
  font-size: 28px;
}

.primary-background-color{
   background-color:#BA2329;
}

.primary-text-color {
   color:#BA2329;  
}

.secondary-background-color {
  background-color: #007DDB
}
.secondary-text-color {
  color: #007DDB
}
</style>
