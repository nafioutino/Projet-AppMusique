<script setup>
 import { RouterLink, RouterView  } from 'vue-router';
 import ChronoComponent from './components/ChronoComponent.vue';

</script>


<template>
  <div>
    <nav>

      <div>
        <RouterLink to='/' class="lien"  id="muzart">MUZART</RouterLink>
        <RouterLink to='/' class="lien">Home</RouterLink>
        <RouterLink to="connect" class="lien">Connecter</RouterLink>
        
      </div>
      <ChronoComponent />
    </nav>
    <RouterView></RouterView>
  </div>
  
 
</template>



<style scoped>
* {
  box-sizing: border-box;
  margin: 0px;
  padding:0px;
}

#muzart {
  font-size: 20px;
  font-weight: bold;
  background-image: linear-gradient(
    to left,
    rgb(248, 8, 8),
    yellow,
    orange
  );
  -webkit-background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
}

#muzart {
  width: 100px;
  height: 50px;
  background-color: red;
  font-weight: bold;
  position: relative;
  animation: mymove 10s infinite alternate;
  animation-fill-mode: forwards;
}

#div1 {animation-timing-function: linear;}
#div2 {animation-timing-function: ease;}
#div3 {animation-timing-function: ease-in;}
#div4 {animation-timing-function: ease-out;}
#div5 {animation-timing-function: ease-in-out;}

@keyframes mymove {
  from {left: 300px;}
  to {left: 0px;}

 
}

  
  

nav {
  background-color: rgb(11, 99, 230);
  padding: 20px;
  margin-bottom: 20px;
  margin: 0 auto; 
  width: 80%;
  display: flex;
  justify-content: space-between;
  gap: 100px;

}

.lien {
  color: white;
  padding: 20px;

}






</style>