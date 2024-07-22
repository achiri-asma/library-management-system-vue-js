<template>
    <div id="app">
        <HeaderPage />
        <div class="boddy">
            <div class="book-image"><img src="../assets/tml.jpg" alt="book"></div>
            <div class="boook">
                <div class="book-details">
                    <p id="title">The Midnight Library</p>
                    <p id="author">Author :<span style="margin-left:20px;font-weight: 550;"> Matt Haig</span></p>
                    <p id="author">Category :<span style="margin-left:20px;font-weight: 550;">genre</span></p>
                    <p id="author">Published Date :<span style="margin-left:20px;font-weight: 550;">30/09/2010</span>
                    </p>
                </div>
                <div class="more" @click="show">See other details </div>
                <div v-show="showDetails" class="other-details">
                    <p id="author">Available copies :<span style="margin-left:20px;font-weight: 550;">5</span></p>
                    <p id="author">Shelf :<span style="margin-left:20px;font-weight: 550;">1</span></p>
                    <p id="author">Row :<span style="margin-left:20px;font-weight: 550;">2</span></p>
                    <p id="author">column :<span style="margin-left:20px;font-weight: 550;">3</span></p>
                </div>
                <div class="borrow">
                    <button @click="showConfirmDialog">borrow</button>
                </div>
            </div>
            <div class="container">
                <div class="scroll-container">
                <div class="animated-div"> <img src="../assets/tml.jpg" alt="item" style="width:150px;height:200px;">
                    <p>item </p>
                </div>
                <div class="animated-div"> <img src="../assets/tml.jpg" alt="item" style="width:150px;height:200px;">
                    <p>tml</p>
                </div>
                <div class="animated-div"> <img src="../assets/tml.jpg" alt="item" style="width:150px;height:200px;">
                    <p>tml</p>
                </div>
                <div class="animated-div"> <img src="../assets/tml.jpg" alt="item" style="width:150px;height:200px;">
                    <p>item </p>
                </div>
                <div class="animated-div"> <img src="../assets/tml.jpg" alt="item" style="width:150px;height:200px;">
                    <p>item </p>
                </div>
                <div class="animated-div"> <img src="../assets/tml.jpg" alt="item" style="width:150px;height:200px;">
                    <p> item </p>
                </div><div class="animated-div"> <img src="../assets/tml.jpg" alt="item" style="width:150px;height:200px;">
                    <p>item </p>
                </div>
                <div class="animated-div"> <img src="../assets/tml.jpg" alt="item" style="width:150px;height:200px;">
                    <p>item </p>
                </div>
                <div class="animated-div"> <img src="../assets/tml.jpg" alt="item" style="width:150px;height:200px;">
                    <p> item </p>
                </div>
            </div>
            </div>
        </div>
        <FooterPage />
    </div>
</template>

<script>
import HeaderPage from '../components/HeaderPage.vue';
import FooterPage from '../components/FooterPage.vue';

export default {
    components: {
        HeaderPage,
        FooterPage
    },
    data() {
        return {
            showDetails: false,
        };
    },
    methods: {
        show() {
            this.showDetails = !this.showDetails;
        },
        showConfirmDialog() {
            const result = confirm("Do you want to borrow the book ?");
            if (result) {
                alert("Vous avez choisi de continuer.");
            } else {
                alert("Vous avez choisi d'annuler.");
            }
        }
    }
};
</script>

<style>
html,
body {
    height: 100%;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
}

#app {
    height: 100%;
}

.boddy {
    display: flex;
    margin-left: 20px;
    margin-top: 70px;
}

.book-image {
    width: 350px;
    height: 500px;
    margin-left: 275px;
}

.boddy img {
    width: 95%;
    height: 95%;
    border-radius: 15px;
    box-shadow: 0 4px 8px #e3dedb;
}

.boook {
    display: block;
    margin-left: 35px;
}

#title {
    font-weight: 700;
    font-size: 35px;
    font-family: 'Open Sans', sans-serif;
    margin-top: 0px;
}

#author {
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
}

.more {
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
    color: blue;
    font-weight: 600;
}

.more:hover {
    text-decoration: underline;
}

.borrow button {
    border-radius: 5px;
    border: none;
    background-color: #5d3d2f;
    color: white;
    font-size: 18px;
    width: 170px;
    height: 45px;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    margin-top: 8px;
}

.container {
    height: 600px;
    overflow: hidden;
    position: relative;
    margin-top: -50px;
    margin-left: 300px;
}

.animated-div {
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 8px #e3dedb;
    margin: 10px 0;
}

.scroll-container {
    animation: slideVertical 20s linear infinite;
}

@keyframes slideVertical {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(calc(-100% /2));
    }
}
.animated-div p{
    padding:10px;
    text-align: center;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
}
</style>
