<script setup>
import albums from '../assets/data.js'
const props = defineProps({
    AsideAlbum : Object
})
console.log(props.AsideAlbum);
</script>


<template>
    
    <aside v-if="AsideAlbum">
        <div class="container">
            <div><img :src="AsideAlbum.coverImage" alt="Image de couverture de l'album"></div>
            <h2>{{ AsideAlbum.title }}</h2>
            <div>{{ "Artiste : " + AsideAlbum.artist }}</div>
            <div>{{ "Date de sortie : " + AsideAlbum.releaseDate }}</div>
            <div>{{ "Genre : " + AsideAlbum.genre }}</div>
            <div>{{ "Label : " + AsideAlbum.label }}</div>
            <div class="play"><p>Play </p>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>
                </p>
            </div>
            <div>
                <h3>List of songs</h3>
                <ol>
                    <li v-for="track in AsideAlbum.tracks" :key="track.id"><a href="">{{ track.title }}</a></li>
                </ol>
            </div>
                
        </div>
    </aside>

</template>




<style scoped>



aside {
    background-color: white;
    padding: 25px;
}
.container {
    background-color: aliceblue;
}

img {
    max-width: 300px;
}

.play {
    box-sizing: border-box;
    display: flex;
    background-color: rgb(11, 99, 230);
    color: white;
    width: 100px;
    height: 35px;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 9px;
    
}

h3 {
    background-color: rgba(22, 36, 83, 0.603);
    margin: 10px;
    padding: 3px;
    color: white;
}

svg {
    background-color: white;
    border-radius: 50%;
    color: black;

    
    
}

</style>