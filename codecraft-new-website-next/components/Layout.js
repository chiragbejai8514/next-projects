import Head from 'next/head'
import Header from '../components/Header/Header'

const Layout = props =>
    (<div>
        <Head>
            <title>Leading Mobile App development company in India: CodeCraft Technologies</title>
            <link rel="shortcut icon" href="//d18q2npc6mijvg.cloudfront.net/other/favicon.png" type="image/x-icon" />

            <link rel="stylesheet" href="owl-carousel/owl.carousel.css" />



            <script src="jquery-1.9.1.min.js"></script>

            <script src="assets/owl-carousel/owl.carousel.js"></script>

            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>

            <link rel="stylesheet" href="owl-carousel/owl.theme.css" />

            {/* <link rel="stylesheet" href="../css/owl.carousel.min.css" />
            <script src="../js/owl.carousel.min.js"></script> */}

        </Head>

        <Header />
        {props.children}

    </div>
    )

export default Layout