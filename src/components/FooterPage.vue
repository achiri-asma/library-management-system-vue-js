<template>
    <footer>
        <div class="footer-content">
            <div class="logo">
                <img src="../assets/logoo.png" alt="logo">
            </div>
            <div class="social-links">
                <a href="#"><img src="../assets/facebook.png" alt="facebook"></a>
                <a href="#"><img src="../assets/twitter.png" alt="twitter"></a>
                <a href="#"><img src="../assets/instagram.png" alt="instagram"></a>
                <a href="#"><img src="../assets/web.png" alt="site"></a>
            </div>
            <div class="copyright">
                <p>&copy; 2024 Asma ACHIRI. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>

<style scoped>
footer {
    width: 100%;
    background-color: #5d3d2f;
    padding: 20px 0;
    margin-top: 70px;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.logo img {
    height: 50px;
    width: auto;
}

.social-links {
    display: flex;
    gap: 15px;
}

.social-links a img {
    width: 30px;
    height: 30px;
    transition: transform 0.3s ease;
}

.social-links a:hover img {
    transform: scale(1.1);
}

.copyright {
    color: #000000;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
}

</style>