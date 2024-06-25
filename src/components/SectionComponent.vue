<script setup>
import { ref } from 'vue';
import albums from '../assets/data.js'
import AsideComponent from './AsideComponent.vue';
import { RouterLink, RouterView} from 'vue-router';
console.log(albums);
// État pour stocker l'album sélectionné
const selectedAlbum = ref(null);

// Fonction pour mettre à jour l'album sélectionné
function showDetails(album) {
selectedAlbum.value = album;
console.log('Album sélectionné :', selectedAlbum.value);

}

</script>


<template>
    
    <div class="container">
        <aside>
            <AsideComponent :AsideAlbum = "selectedAlbum" v-if="selectedAlbum" />
        </aside>

        <div class="main">
            <div class="header">
                <input type="search" placeholder="...">
                <button>Search</button>
                <h1>Page principale Album Music </h1>

                <RouterLink to="/" class="page"><button>Prev</button></RouterLink>
                <RouterLink to="/" class="page"><button>1</button></RouterLink>
                <RouterLink to="/SectionPage2" class="page"><button>2</button></RouterLink>
                <RouterLink to="/SectionPage3" class="page"><button>3</button> </RouterLink>
                <RouterLink to="/SectionPage4" class="page"><button>4</button> </RouterLink>
                <RouterLink to="/SectionPage4" class="page"><button>Next</button> </RouterLink>
                <RouterView></RouterView>

            </div>
            <section v-for="album in albums" :key="album.id">
                <article>
                    <p class="genre">{{ album.genre }}</p>
                    <h2><a href="#">{{album.title}}</a></h2>
                    <p>{{ album.description }}</p>
                    <span class="botom" v-for="i in album.tags" :key="i.id">
                        {{ i }}
                    </span >
                    <p >{{'Artiste: '+ album.artist }}</p>
                    <p >{{'Date: '+ album.releaseDate }}</p>
                    <div class="reaction">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"/></svg><span>45 min</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg><span>100</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z"/></svg>
                        <button @click="showDetails(album)">Details</button>
                    </div>
                </article>
            </section>
        </div>
        
        
    </div>
  

</template>



<style scoped>


.container {
    margin: 0 auto;
    width: 900px;
    display: flex;
    gap: 25px;
    
    
}

h1 {
  font-size: 35px;
  font-weight: bold;
  background-image: linear-gradient(
    to left,
    rgb(99, 255, 8),
    rgb(0, 217, 255),
    rgb(6, 6, 216),
    rgb(0, 0, 0),
    rgb(0, 37, 248),
    rgb(9, 44, 247)
    
  );
  -webkit-background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
}


.header {
    margin: 0 auto;
    text-align: center;
}

RouterLink:hover {
    background-color: rgb(11, 99, 230);; ;
}
input {
    margin: 15px;
    border-radius: 5px;
    padding: 8px;
    font-size: 20px;
    width: 80%;
    border: none;
    box-shadow: 5px 8px 5px 3px rgb(129, 127, 127);

}

a {
    color: white;
}

a button:active {
    background-color: rgb(11, 99, 230);;
}


.header button {
    margin: 15px;
    background-color: rgb(99, 99, 102);
    color: rgb(254, 254, 255);
    padding: 10px;
    border-radius: 5px;
    box-shadow: 5px 8px 5px 3px rgb(129, 127, 127);
    
}

article {

    border-radius: 5px;
    background-color: azure;
    margin: 20px;
    box-shadow: 25px 25px 75px rgb(0, 0, 0, 0.25),
    10px 10px 70px rgb(0, 0, 0, 0.25),
    inset 5px 5px 5px rgba(226, 225, 225, 0.2),
    inset 50px 50px 80px rgba(254, 253, 255, 0.75);
    padding: 20px;
}

article a {
    color: green;
}

article a:hover {
    text-decoration: underline;
}

.genre { 
    background-color: rgb(11, 99, 230);
    width: 100%;
    color: white;
    padding: 3px 5px;
    border-radius: 3px;
}
.botom {
    background-color: rgb(11, 99, 230);
    margin: 5px;
    padding: 2px 4px;
    color:white ;
    border-radius: 2px;
}

.reaction{
    display: flex;
    gap:5px;
}


/* @media and (min-width:599px) {

    
} */


</style>