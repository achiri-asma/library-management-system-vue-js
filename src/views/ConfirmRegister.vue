<template>
    <div id="app">
        <div class="screen">
            <img src="../assets/cg.jpg" alt="background">
        </div>
        <div class="form3">
            <h1>Confirm your registration</h1>
            <p>Registration successful, <br> Please click on the bottom button to confirm your registration.</p>
            
            <button @click="login">Confirm</button>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
  
        };
    },
    methods: {

        login() {
                alert('Login successful');
        }
    }
};
</script>

<style scoped>
#app {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

.screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.screen img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: blur(6px) brightness(90%) contrast(100%);
}

.form3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 320px;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 1;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form3 h1 {
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    font-size: 35px;
    text-align: center;
    margin-top: 50px;
    color: #5d3d2f;
}

.form3 p {
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    margin-top: 30px;
    color:black;
    text-align: center;
    line-height: 40px;
}


.form3 button {
    margin-left: 52px;
    width: 490px;
    height: 40px;
    border-radius: 5px;
    border: none;
    margin-top: 10px;
    font-size: 18px;
    background-color: #5d3d2f;
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
}



</style>
