<template>
    <div id="app">
        <div class="screen">
            <img src="../assets/cg.jpg" alt="background">
        </div>
        <div class="formm">
            <h1>Create an account</h1>
            <input 
                type="text" 
                v-model="fullName" 
                placeholder="Jhon Smith" 
                style="margin-top:30px;" 
                @blur="validateFullName"
            >
            <span v-if="errors.fullName" class="error">{{ errors.fullName }}</span>
            <br>
            <input 
                type="email" 
                v-model="email" 
                placeholder="example@example.com" 
                style="margin-top:25px;" 
                @blur="validateEmail"
            >
            <span v-if="errors.email" class="error">{{ errors.email }}</span>
            <br>

            <input 
                type="password" 
                v-model="password" 
                placeholder="Password" 
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
            
            <br>
            
            <button class="button" @click="login">Login</button>
            <p>Already have an account ? <routerLink to="/login"> Log in</routerLink></p>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fullName:'',
            email: '',
            password: '',
            cpassword:'',
            errors: {}
        };
    },
    methods: {
        validateFullName() {
            const namePattern = /^[a-zA-Z\s]+$/;
            if (!this.fullName) {
                this.errors.fullName = 'Full name is required';
            } else if (!namePattern.test(this.fullName)) {
                this.errors.fullName = 'Full name must contain only letters and spaces';
            } else {
                this.errors.fullName = '';
            }
        },
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
            this.validateFullName();
            this.validateEmail();
            this.validatePassword();
            this.confirmPassword();
            if (!this.errors.fullName && !this.errors.email && !this.errors.password && !this.errors.confirmPassword) {
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

.formm {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 1;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.formm h1 {
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    font-size: 35px;
    text-align: center;
    margin-top: 50px;
    color: #5d3d2f;
}

.formm p {
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
}

.formm input {
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

.formm input:focus {
    outline: none;
}

.formm .button {
    margin-left: 52px;
    width: 490px;
    height: 40px;
    border-radius: 5px;
    border: none;
    margin-top: 35px;
    font-size: 18px;
    background-color: #5d3d2f;
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
}

.formm p {
    text-align: center;
    color: #5d3d2f;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    margin-top: 40px;
}

.formm p a {
    color: black;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    text-decoration: none;
    font-size: 16px;
}

.error {
    color: red;
    font-size: 14px;
    margin-left: 52px;
    display: block;
}
</style>
