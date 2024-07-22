<template>
    <div id="app">
        <div class="screen">
            <img src="../assets/cg.jpg" alt="background">
        </div>
        <div class="form2">
            <h1>Reset your password</h1>

            <input 
                type="password" 
                v-model="password" 
                placeholder="New password" 
                style="margin-top: 25px;" 
                @blur="validatePassword"
            >
            <span v-if="errors.password" class="error">{{ errors.password }}</span>
            <br>
            <input 
                type="password" 
                v-model="cpassword" 
                placeholder="Confirm password" 
                style="margin-top: 25px;" 
                @blur="confirmPassword"
            >
            <span v-if="errors.cpassword" class="error">{{ errors.cpassword }}</span>
            <br>
            
            <button @click="login">Save</button>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            password: '',
            cpassword:'',
            errors: {}
        };
    },
    methods: {
        validatePassword() {
            if (!this.password) {
                this.errors.password = 'Password is required';
            } else if (this.password.length < 8) {
                this.errors.password = 'Password must be at least 8 characters long';
            } else {
                this.errors.password = '';
            }
        },
        confirmPassword() {
            if (!this.cpassword) {
                this.errors.cpassword = 'Confirmation password is required';
            } else if (this.cpassword !== this.password) {
                this.errors.cpassword = 'Passwords do not match';
            } else {
                this.errors.cpassword = '';
            }
        },
        login() {
            this.validatePassword();
            this.confirmPassword();
            if (!this.errors.password && !this.errors.cpassword ) {
                alert('Login successful');
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

.form2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 390px;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 1;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form2 h1 {
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    font-size: 35px;
    text-align: center;
    margin-top: 50px;
    color: #5d3d2f;
}


.form2 input {
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

.form2 input:focus {
    outline: none;
}


.form2 button {
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
