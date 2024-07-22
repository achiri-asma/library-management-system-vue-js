<template>
    <div id="app">
        <HeaderPage />
        <div class="section-one">
            <div class="body">
                <div class="part-one">
                    <img src="../assets/range1.jpg" alt="range 1">
                </div>
                <div class="part-two">
                    <p class="text">YOUR GATEWAY TO KNOWLEDGE</p>
                    <p class="desc">We are here to provide and to make easy borrowing books and returning and
                        discovering the available books in our library.</p>
                    <button class="join">Join us</button>
                </div>
                <div class="part-three">
                    <img src="../assets/range2.jpg" alt="range 2">
                </div>
            </div>
        </div>
        <div class="section-three">
            <div class="d1" style="margin-left:100px;">
                <img src="../assets/categories.png" alt="categories">
                <p>+7 Categorie</p>
            </div>
            <div class="d2">
                <img src="../assets/open-book.png" alt="books">
                <p>+100 Book</p>
            </div>
            <div class="d3" style="border-right:none;">
                <img src="../assets/customer-service.png" alt="services">
                <p>Service available anytime</p>
            </div>
        </div>

        <div class="section-four">
            <h2>Featured Books</h2>
            <div class="book-carousel">
                <Carousel :items-to-show="3.95" :wrap-around="true" :autoplay="3000" :pause-autoplay-on-hover="true">
                    <Slide v-for="slide in books" :key="slide">
                        <div class="carousel__item">
                            <img :src="slide.icon" :alt="'Book ' + slide">
                            <h3>{{ slide.title }}</h3>
                            <p> {{ slide.author }} </p>
                        </div>
                    </Slide>
                </Carousel>
            </div>
        </div>
        <FooterPage/>
    </div>
</template>

<script>
import HeaderPage from '../components/HeaderPage.vue';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import FooterPage from '../components/FooterPage.vue';

export default {
    name: 'App',
    components: {
        HeaderPage,
        Carousel,
        Slide,
        FooterPage
    },
    data() {
        return {
            books: [
                { title: "The Midnight Library", author: "Matt Haig", icon: require('../assets/tml.jpg') },
                { title: "Educated", author: "Tara Westover", icon: require('../assets/ed.jpg') },
                { title: "The Song of Achilles", author: "Madeline Miller", icon: require('../assets/tas.jpg') },
                { title: "The Alchemist", author: "Paulo Coelho", icon: require('../assets/al.jpg') },
                { title: "To Kill a Mockingbird", author: "Harper Lee", icon: require('../assets/tkm.jpg') },
                { title: "1984", author: "George Orwell", icon: require('../assets/1984.jpg') },
                { title: "The Great Gatsby", author: "F. Scott Fitzgerald", icon: require('../assets/tgr.jpg') },
                { title: "Pride and Prejudice", author: "Jane Austen", icon: require('../assets/pridep.jpg') },
                { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", icon: require('../assets/gg.jpg') },
                { title: "The Kite Runner", author: "Khaled Hosseini", icon: require('../assets/kn.jpg') }
            ]
        };
    },
};
</script>

<style>
html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
}

#app {
    height: 100%;
}

.section-one {
    width: 100%;
    margin-top: 100px;
}


.part-two p {
    text-align: center;
    margin-top: 25px;
    font-size: 90px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;

}

.part-two .desc {
    text-align: center;
    margin-top: -20px;
    margin-left: 25px;
    line-height: 45px;
    font-size: 25px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;

}

.text {
    background-image: url('../assets/slide1.jpg');
    background-size: cover;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}

.body {
    display: flex;
    margin-top: 20px;
    padding: 0 20px;
    gap: 20px;
}

.part-one,
.part-three {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -80px;
}

.part-one img,
.part-three img {
    max-width: 100%;
    height: 705px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.part-two {
    width: 60%;
    margin-top: 0;
}

.join {
    display: block;
    margin: 0 auto;
    margin-top: 70px;
    padding: 10px 20px;
    background-color: #5d3d2f;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 300px;
    height: 50px;
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    font-weight: 600;
}

.section-three {
    width: 100%;
    height: 13vh;
    background-color: #5d3d2f;
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.d1,
.d2,
.d3 {
    padding: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 30%;
    border-right: 2px solid white;
    height: 15px;
}

.d1 img,
.d2 img,
.d3 img {
    max-width: 50px;
}

.d1 p,
.d2 p,
.d3 p {
    color: white;
    font-size: 18px;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    margin-left: 20px;
}

.carousel__slide {
    padding: 5px;
    transition: all 0.3s ease;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.section-four {
    margin-top: 60px;
}

.section-four h2 {
    text-align: center;
    margin-bottom: 45px;
    font-size: 35px;
    color: #5d3d2f;
}

.book-carousel {
    width: 80%;
    margin: 0 auto;
}

.carousel__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 3px solid #5d3d2f;
}

.carousel__item img {
    max-width: 150px;
    height: auto;
    margin-bottom: 10px;
}

.carousel__item h3 {
    font-size: 18px;
    margin-bottom: 5px;
}

.carousel__item p {
    font-size: 14px;
    color: #666;
}
</style>