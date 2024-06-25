<script setup>
import{ref } from "vue"

</script>


<template>
    <form>
        <div>
            <label for="email">Email address</label><br>
            <input class="input" type="email" name="emai" id="email" placeholder="Enter email" required><br>
            <p>we'll never share your email with anyone else.</p>
        </div>

        <div>
            <label for="password">Password</label><br>
            <input class="input" type="password" name="password" id="password"  placeholder="Password" required><br>
        </div>

        <div>
            <input type="checkbox" name="checkbox" id="checkbox">
            <label for="checkbox">Stay logged in</label><br>
        </div>

        <div><button>Submit</button></div>


    </form>
    
    
   

</template>




<style scoped>
form {
    padding: 10px;
    box-sizing: border-box;
    margin: 0 auto;
    width: 500px;
    height: 350px;
    background-color: rgb(226, 224, 221);
    display: flex;
    flex-direction: column;
    gap: 35px;
    border-radius: 3px;
}

p {
    margin-top: 0px;
    font-size: 12px;
}

.input {
    width:450px;
    height: 25px;
    border: none;
    font-size: 15px;
}

button {
    color: white;
    background-color: rgb(11, 99, 230);
    border: none;
    border-radius: 5px;
    padding: 10px;
    width: 80px;
}



</style>