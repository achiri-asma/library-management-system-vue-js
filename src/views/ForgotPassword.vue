<template>
    <div id="app">
        <div class="screen">
            <img src="../assets/cg.jpg" alt="background">
        </div>
        <div class="form1">
            <h1>Reset your password</h1>

            <input 
                type="email" 
                v-model="email" 
                placeholder="example@example.com" 
                style="margin-top:20px;" 
                @blur="validateEmail"
            >
            <span v-if="errors.email" class="error">{{ errors.email }}</span>
            <br>
            
            <button @click="login">Send</button>

        </div>
    </div>
</template>

<script>
import router from '../router';
export default {
    data() {
        return {
            email: '',
            errors: {}
        };
    },
    methods: {
        validateEmail() {
            const emailPattern = /^[^\s@]+@gmail\.com$/;
            if (!this.email) {
                this.errors.email = 'Email is required';
            } else if (!emailPattern.test(this.email)) {
                this.errors.email = 'Invalid email format';
            } else {
                this.errors.email = '';
            }
        },

        login() {
            this.validateEmail();
            if (!this.errors.email ) {
                router.push({ path: '/new-pass', replace: true })
            }
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

.form1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 300px;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 1;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form1 h1 {
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    font-size: 35px;
    text-align: center;
    margin-top: 50px;
    color: #5d3d2f;
}


.form1 input {
    margin-left: 52px;
    width: 465px;
    height: 40px;
    padding-left: 25px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    color: #5d3d2f;
    font-family: 'Open Sans', sans-serif;
    background-color: white;
}

.form1 input:focus {
    outline: none;
}


.form1 button {
    margin-left: 52px;
    width: 490px;
    height: 40px;
    border-radius: 5px;
    border: none;
    margin-top: 20px;
    font-size: 18px;
    background-color: #5d3d2f;
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
}

.error {
    color: red;
    font-size: 14px;
    margin-left: 52px;
    display: block;
}
</style>
