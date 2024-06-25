<script setup>
document.addEventListener('DOMContentLoaded', () => {
    let hour = document.querySelector('.hour');
    let min = document.querySelector('.min');
    let sec = document.querySelector('.sec');

    hour.innerText = "00";
    min.innerText = "00";
    sec.innerText = "00";

    let counterHour = 0;
    let counterMin = 0;
    let counterSec = 0;

    let chrono = setInterval(() => {
        counterSec++;
        if (counterSec < 10) {
            sec.innerText = "0" + counterSec;
        } else {
            sec.innerText = counterSec;
            if (counterSec == 60) {
                counterSec = 0;
                counterMin++;
                min.innerText = counterMin;
                sec.innerText = "00";
                if (counterMin < 10) {
                    min.innerText = "0" + counterMin;
                }
                if (counterMin == 60) {
                    counterMin = 0;
                    min.innerText = "00";
                    counterHour++;
                    if (counterHour < 10) {
                        hour.innerText = "0" + counterHour;
                    }
                    if (counterHour == 24) {
                        clearInterval(chrono);
                        hour.innerText = "00";
                        min.innerText = "00";
                        sec.innerText = "00";
                    }
                }
            }
        }

    }, 1000);

})

</script>


<template>

    <div class="container">
        <div id="chrono">
            <div>Time: </div>
            <p class="hour">{{hour  }}</p>h 
            <p class="min">{{ min }}</p>min
            <p class="sec">{{ sec }}</p>s
        </div>
    </div>

</template>



<style scoped>
#chrono {
        display: flex;
        color: white;
        justify-content: end;
        align-items: center;
        gap: 5px;
        position: relative;
        

}

</style>