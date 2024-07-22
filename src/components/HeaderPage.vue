<template>
    <header>
        <nav>
            <div class="logo">
                <img src="../assets/logoo.png" alt="logo">
            </div>
            <div class="links">
                <ul>
                    <li>
                        <routerLink to="/" class="liste">Home</routerLink>
                    </li>
                    <li>
                        <routerLink to="/book" class="liste">Books</routerLink>
                    </li>
                </ul>
            </div>
            <div class="login" v-if="!isAuthenticated">
                <button @click="login">Login</button>
            </div>
            <div class="loginn" v-if="isAuthenticated">
                <button><img src="../assets/study.png" alt="student"></button>
            </div>
        </nav>
        <div>
            <hr>
        </div>
    </header>
</template>

<script>
import router from '../router'
export default {
    name: 'HeaderPage',
    data() {
        return {
            isAuthenticated: false,
        };
    },
    methods: {
        login() { 
            router.push({ path: '/login', replace: true })
        }
    }
};
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

header {
    top: 0;
    right: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
}

nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
}

.logo img {
    width: 150px;
    height: 40px;
}

.login {
    margin-left: 20px;
}

.login button {
    border-radius: 5px;
    border: none;
    background-color: #5d3d2f;
    color: white;
    font-size: 18px;
    width: 170px;
    height: 45px;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
}


.loginn {
    margin-left: 20px;
}

.loginn button {
    border: none;
    background-color: transparent;
    width: 55px;
    height: 55px;
}

.loginn button img {
    width: 45px;
    height: 45px;
}

.links {
    margin-left: -150px;
}

.links ul {
    display: flex;
    list-style-type: none;
}

.links ul li {
    justify-content: space-between;
    padding-left: 100px;

}

.liste {
    text-decoration: none;
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
    color: black;
    font-weight: 600;
}

.links .liste:hover {
    color: #5d3d2f;
    font-weight: 600;
}

hr {
    margin-top: -4px;
    margin-left: 20px;
    margin-right: 20px;
    color: #5d3d2f;
}
</style>
