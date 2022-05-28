import '../styles/globals.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link rel="shortcut icon" href="assets/img/favicon.png" type="image/x-icon"/>
<link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'/>

<link rel="stylesheet" href="css/swiper-bundle.min.css"/>

<link rel="stylesheet" href="css/styles.css"/>

<title>AMO Creative</title>
 <script src="js/scrollreveal.min.js"></script>

    
    {/* <script src="js/swiper-bundle.min.js"></script> */}

    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.1.6/swiper-bundle.min.js" integrity="sha512-BalAj1QDxNKnkwuDTiYL62iR/evB9429/SoJVTK9344Sc1VJtwpC4OFxKNu3vZMtSpbLEre3oCtr0maV3CddRw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="js/main.js"></script>
</Head>

<Component {...pageProps} />

    </>
  ) 
}

export default MyApp
