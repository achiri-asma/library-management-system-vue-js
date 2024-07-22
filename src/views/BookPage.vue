<template>
    <div id="app">
        <HeaderPage />
        <div class="heade">
            <img src="../assets/3565.jpg" alt="background">
            <p>Every book, a new experience.</p>
        </div>
        <div class="bode">
            <div class="left">
                <div class="search-container">
                    <input type="text" placeholder="Search books...">
                    <img src="../assets/search.png" alt="search" class="search-icon">
                </div>
                <div class="prt">
                    <div class="filters">Categories</div>

                    <div class="cats">
                        <input type="radio" id="option1" name="options" value="option1">
                        <label for="option1">Science Fiction</label><br>

                        <input type="radio" id="option2" name="options" value="option2">
                        <label for="option2">Philosophy</label><br>

                        <input type="radio" id="option3" name="options" value="option3">
                        <label for="option3">Mystery</label><br>

                        <input type="radio" id="option4" name="options" value="option4">
                        <label for="option4">Thriller</label><br>

                        <input type="radio" id="option5" name="options" value="option5">
                        <label for="option5">Romance</label><br>

                        <input type="radio" id="option4" name="options" value="option6">
                        <label for="option6">Fantasy</label><br>

                        <input type="radio" id="option7" name="options" value="option7">
                        <label for="option7">Horror</label><br>

                        <input type="radio" id="option8" name="options" value="option8">
                        <label for="option8">Biography</label><br>

                        <input type="radio" id="option9" name="options" value="option9">
                        <label for="option9">Adventure</label><br>

                        <input type="radio" id="option10" name="options" value="option10">
                        <label for="option10">Business</label><br>

                        <input type="radio" id="option11" name="options" value="option11">
                        <label for="option11">Travel</label><br>

                        <input type="radio" id="option12" name="options" value="option12">
                        <label for="option12">Poetry</label><br>

                        <input type="radio" id="option13" name="options" value="option13">
                        <label for="option13">Drama</label><br>

                        <input type="radio" id="option14" name="options" value="option14">
                        <label for="option14">Children's Literature</label><br>

                        <input type="radio" id="option15" name="options" value="option15">
                        <label for="option15">Crime</label><br>
                    </div>
                </div>
            </div>
            <div class="right">
                <div v-if="paginatedItems.length">
                    <div class="page">
                        <div v-for="item in paginatedItems[currentPage]" :key="item" class="item">
                            <img src="../assets/tml.jpg" alt="item" style="width:150px;height:200px;">
                            <p>{{ item }}</p>
                            <button class="view-button" @click="view">View book</button>
                        </div>
                    </div>
                    <div class="pagination">
                        <button @click="prevPage" :disabled="currentPage === 0"><img src="../assets/left.png" alt="left"></button>
                        <button @click="nextPage" :disabled="currentPage === paginatedItems.length - 1"><img src="../assets/right.png" alt="right"></button>
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
import router from '../router'

export default {
    components: {
        HeaderPage,
        FooterPage
    },
    data() {
        return {
            items: Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`), // Simulating 100 items
            itemsPerPage: 9,
            currentPage: 0,
 
        };
    },
    computed: {
        paginatedItems() {
            let pages = [];
            for (let i = 0; i < this.items.length; i += this.itemsPerPage) {
                pages.push(this.items.slice(i, i + this.itemsPerPage));
            }
            return pages;
        }
    },
    methods: {
        nextPage() {
            if (this.currentPage < this.paginatedItems.length - 1) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 0) {
                this.currentPage--;
            }
        },
        view(){
            router.push({ path: '/view-book', replace: true })
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

.heade {
    width: 100%;
    position: relative;
    border-radius: 5px;
    margin-bottom: 20px;
}

.heade img {
    border-radius: 15px;
    width: 97.25%;
    height: 60vh;
    object-fit: cover;
    margin-left: 20px;
}

.heade p {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    color: white;
    font-size: 3em;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    text-align: center;
}

.bode {
    display: flex;
    margin-top: 5px;
    padding: 0 20px;
    gap: 20px;
    height: 125vh;
}

.left {
    background: linear-gradient(180deg, #5d3d2f, #5d3d2f);
    width: 25%;
    height: 101%;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.right {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.page {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;
    border-radius: 20px;
}

.item {
    position: relative;
    flex: 1 1 calc(33.333% - 20px);
    background-color: rgb(255, 255, 255);
    box-shadow: 0 4px 8px #e3dedb;
    height: 300px;
    display: block;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.5em;
}
.item img{
    padding-left:90px;
    padding-top: 20px;

}
.item p{
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 23px;
    color:#5d3d2f;
    font-weight: 600;
}
.view-button {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    font-size: 0.7em;
    background-color: #5d3d2f;
    color: white;
    border: none;
    border-radius: 25px;
    opacity: 0;
    transition: opacity 0.3s ease;
    cursor: pointer;
}

.item:hover .view-button {
    opacity: 1;
}

.pagination {
    display: flex;
    justify-content: space-between;
    padding: 10px;
}
.pagination button{
    background-color: transparent;
    border: none;
}
.pagination img{
   width:15px;
   height:15px;
}
.search-container {
    position: relative;
    margin-bottom: 20px;
    margin-top: 30px;
}

.search-container input {
    width: 75%;
    padding: 10px 40px 10px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.1em;
    color: #5d3d2f;
}

.search-container input:focus {
    outline: none;
}

.search-container img {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 22px;
    height: 22px;
    cursor: pointer;
}

.prt {
    margin-top: 40px;
}

.filters {
    display: flex;
    align-items: center;
    margin-left: 1px;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    font-size: 25px;
    color: #fff;
}


.cats{
    margin-top:20px;
}
.cats input{
    margin-top: 30px;
    margin-left: -03px;
}
.cats label{
    margin-left: 10px;
    margin-top: 20px;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    color: #fff;
}
</style>
