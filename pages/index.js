import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
    <header className="header" id="header">
        <nav className="nav container">
            <a href="#" className="nav__logo">
                AMO Creative <i className='bx bxs-home-alt-2'></i>
            </a>

            <div className="nav__menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">
                            <i className='bx bx-home-alt-2' ></i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#popular" className="nav__link">
                            <i className='bx bx-printer'></i>
                            <span>Print Work</span>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#value" className="nav__link">
                            <i className='bx bx-award' ></i>
                            <span>Value</span>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <span>Contact</span>
                            <i className='bx bx-phone' ></i>
                        </a>
                    </li>
                </ul>
            </div>

            
            <i className='bx bx-moon change-theme' id="theme-button"></i>

            <a href="#" className="nav__button button">Subscribe</a>
        </nav>
    </header>

    
    <main className="main">
        
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__data">
                    <h1 className="home__title">
                        Idea <br/> Design & Product <br/> Under One Roof
                    </h1>
                    <p className="home__description">
                        Find a variety of product that suit you very easily, 
                        forget all difficulties in finding a digital printing for you
                    </p>

                    <form action="" className="home__search">
                        <i className='bx bxs-map'></i>
                        <input type="search" placeholder="Search by Product..." className="home__search-input" />
                        <button className="button">
                            Search
                        </button>
                    </form>

                    <div className="home__value">
                        <div>
                            <h1 className="home__value-number">
                                9K <span>+</span>
                            </h1>
                            <span className="home__value-description">
                                Premium <br/> Product
                            </span>
                        </div>

                        <div>
                            <h1 className="home__value-number">
                                2K <span>+</span>
                            </h1>
                            <span className="home__value-description">
                                Happy <br/> Customer
                            </span>
                        </div>

                        <div>
                            <h1 className="home__value-number">
                                28K <span>+</span>
                            </h1>
                            <span className="home__value-description">
                                Awards <br/> Winning
                            </span>
                        </div>
                    </div>
                </div>

                <div className="home__images">
                    <div className="home__orbe"></div>

                    <div className="home__img">
                        <img src="img/home.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="logos section">
            <div className="logos__container container grid">
                <div className="logos__img">
                    <img src="img/logo1.png" alt=""/>
                </div>
                <div className="logos__img">
                    <img src="img/logo2.png" alt=""/>
                </div>
                <div className="logos__img">
                    <img src="img/logo3.png" alt=""/>
                </div>
                <div className="logos__img">
                    <img src="img/logo4.png" alt=""/>
                </div>
            </div>
        </section>

        
        <section className="section" id="popular">
            <div className="container">
                <span className="section__subtitle">Best Choise</span>
                <h2 className="section__title">
                    Popular Product<span>.</span>
                </h2>

                <div className="popular__container grid swiper">
                    <div className="swiper-wrapper">
                        <article className="popular__card swiper-slide">
                            <img src="img/popular1.jpg" alt="" className="popular__img"/>

                            <div className="popular__data">
                                <h2 className="popular__price">
                                    <span>IDR</span>35000
                                </h2>
                                <h3 className="popular__title">
                                    Business Card
                                </h3>
                                <p className="popular__description">
                                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae voluptatum dicta pariatur itaque magnam, officia, ut temporibus mollitia perspiciatis cupiditate id qui saepe a consectetur, ipsam dolorum praesentium sapiente.
                                </p>
                            </div>
                        </article>

                        <article className="popular__card swiper-slide">
                            <img src="img/popular2.jpg" alt="" className="popular__img"/>

                            <div className="popular__data">
                                <h2 className="popular__price">
                                    <span>IDR</span>35000
                                </h2>
                                <h3 className="popular__title">
                                    Packaging
                                </h3>
                                <p className="popular__description">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem accusamus harum explicabo iusto nostrum quas reprehenderit autem repellendus consequuntur quam commodi sit placeat optio veritatis, eum distinctio quaerat maiores! Placeat?
                                </p>
                            </div>
                        </article>

                        <article className="popular__card swiper-slide">
                            <img src="img/popular3.jpg" alt="" className="popular__img"/>

                            <div className="popular__data">
                                <h2 className="popular__price">
                                    <span>IDR</span>35000
                                </h2>
                                <h3 className="popular__title">
                                    Invitation
                                </h3>
                                <p className="popular__description">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis a laborum fugiat natus maiores dolorem facilis illum ad error quaerat neque unde aliquam beatae, qui eligendi eaque perferendis laboriosam nobis?
                                </p>
                            </div>
                        </article>

                        <article className="popular__card swiper-slide">
                            <img src="img/popular4.jpg" alt="" className="popular__img"/>

                            <div className="popular__data">
                                <h2 className="popular__price">
                                    <span>IDR</span>35000
                                </h2>
                                <h3 className="popular__title">
                                    Stationery
                                </h3>
                                <p className="popular__description">
                                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque aut beatae corporis nisi. Perspiciatis doloribus numquam atque corporis quos aliquam reiciendis laboriosam impedit, illum rerum dolor excepturi repellendus nam! Minus.
                                </p>
                            </div>
                        </article>

                        <article className="popular__card swiper-slide">
                            <img src="img/popular5.jpg" alt="" className="popular__img"/>

                            <div className="popular__data">
                                <h2 className="popular__price">
                                    <span>IDR</span>35000
                                </h2>
                                <h3 className="popular__title">
                                    Sticker
                                </h3>
                                <p className="popular__description">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis est, quisquam, dolor natus repellendus deserunt quaerat totam similique quam aperiam doloremque. Ipsa modi tempora, quos repellat libero nostrum eum impedit?
                                </p>
                            </div>
                        </article>
                    </div>

                    <div className="swiper-button-next">
                        <i className='bx bx-chevron-right' ></i>
                    </div>
                    <div className="swiper-button-prev">
                        <i className='bx bx-chevron-left'></i>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="value section" id="value">
            <div className="value__container container grid">
                <div className="value__images">
                    <div className="value__orbe"></div>

                    <div className="value__img">
                        <img src="img/value.jpg" alt=""/>
                    </div>
                </div>

                <div className="value__content">
                    <div className="value__data">
                        <span className="section__subtitle">Our Value</span>
                        <h2 className="section__title">
                            Value We Give To You<span>.</span>
                        </h2>
                        <p className="value__description">
                            We always ready to help by providing the best service for you. 
                            We believe a good product to be good betters.
                        </p>
                    </div>

                    <div className="value__accordion">
                        <div className="value__accordion-item">
                            <header className="value__accordion-header">
                                <i className='bx bxs-shield-x value__accordion-icon'></i>
                                <h3 className="value__accordion-title">
                                    Best interest rates on the market
                                </h3>
                                <div className="value__accordion-arrow">
                                    <i className='bx bxs-down-arrow'></i>
                                </div>
                            </header>

                            <div className="value__accordion-content">
                                <p className="value__accordion-description">
                                    Price we provides is the best for you, 
                                    we guarantee no price changes on your property due 
                                    to various unexpected costs that may come.
                                </p>
                            </div>
                        </div>

                        <div className="value__accordion-item">
                            <header className="value__accordion-header">
                                <i className='bx bxs-x-square value__accordion-icon'></i>
                                <h3 className="value__accordion-title">
                                    Prevent unstable prices
                                </h3>
                                <div className="value__accordion-arrow">
                                    <i className='bx bxs-down-arrow'></i>
                                </div>
                            </header>

                            <div className="value__accordion-content">
                                <p className="value__accordion-description">
                                    Price we provides is the best for you, 
                                    we guarantee no price changes on your property due 
                                    to various unexpected costs that may come.
                                </p>
                            </div>
                        </div>

                        <div className="value__accordion-item">
                            <header className="value__accordion-header">
                                <i className='bx bxs-bar-chart-square value__accordion-icon' ></i>
                                <h3 className="value__accordion-title">
                                    Best prices on the market 
                                </h3>
                                <div className="value__accordion-arrow">
                                    <i className='bx bxs-down-arrow'></i>
                                </div>
                            </header>

                            <div className="value__accordion-content">
                                <p className="value__accordion-description">
                                    Price we provides is the best for you, 
                                    we guarantee no price changes on your property due 
                                    to various unexpected costs that may come.
                                </p>
                            </div>
                        </div>

                        <div className="value__accordion-item">
                            <header className="value__accordion-header">
                                <i className='bx bxs-checkbox-checked value__accordion-icon'></i>
                                <h3 className="value__accordion-title">
                                    Security of your data
                                </h3>
                                <div className="value__accordion-arrow">
                                    <i className='bx bxs-down-arrow'></i>
                                </div>
                            </header>

                            <div className="value__accordion-content">
                                <p className="value__accordion-description">
                                    Price we provides is the best for you, 
                                    we guarantee no price changes on your property due 
                                    to various unexpected costs that may come.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="contact section" id="contact">
            <div className="contact__container container grid">
                <div className="contact__images">
                    <div className="contact__orbe"></div>

                    <div className="contact__img">
                        <img src="img/contact.png" alt=""/>
                    </div>
                </div>

                <div className="contact__content">
                    <div className="contact__data">
                        <span className="section__subtitle">Contact Us</span>
                        <h2 className="section__title">
                            Easy to Contact us<span>.</span>
                        </h2>
                        <p className="contact__description">
                            Is there a problem finding your product to be better ? Need a 
                            guide to devlop your product? or need a consultation 
                            on residential issues? just contact us.
                        </p>
                    </div>

                    <div className="contact__card">
                        <div className="contact__card-box">
                            <div className="contact__card-info">
                                <i className='bx bxs-phone-call'></i>
                                
                                <div>
                                    <h3 className="contact__card-title">
                                        Call
                                    </h3>
                                    <p className="contact__card-description">
                                        𝟎𝟖𝟐𝟏𝟏𝟗𝟗𝟗𝟗𝟐𝟕𝟎
                                    </p>
                                </div>
                            </div>
                            <button className="button contact__card-button">
                                Call Now
                            </button>
                        </div>

                        <div className="contact__card-box">
                            <div className="contact__card-info">
                                <i className='bx bxs-message-rounded-dots' ></i>
                                
                                <div>
                                    <h3 className="contact__card-title">
                                        Chat
                                    </h3>
                                    <p className="contact__card-description">
                                        𝟎𝟖𝟐𝟏𝟏𝟗𝟗𝟗𝟗𝟐𝟕𝟎
                                    </p>
                                </div>
                            </div>
                            <button className="button contact__card-button">
                                Chat Now
                            </button>
                        </div>

                        <div className="contact__card-box">
                            <div className="contact__card-info">
                                <i className='bx bxs-video' ></i>
                                
                                <div>
                                    <h3 className="contact__card-title">
                                        Video Call
                                    </h3>
                                    <p className="contact__card-description">
                                        𝟎𝟖𝟐𝟏𝟏𝟗𝟗𝟗𝟗𝟐𝟕𝟎
                                    </p>
                                </div>
                            </div>
                            <button className="button contact__card-button">
                                Video Call Now
                            </button>
                        </div>

                        <div className="contact__card-box">
                            <div className="contact__card-info">
                                <i className='bx bxs-envelope'></i>
                                
                                <div>
                                    <h3 className="contact__card-title">
                                        Message
                                    </h3>
                                    <p className="contact__card-description">
                                        hi@amocreative.co
                                    </p>
                                </div>
                            </div>
                            <button className="button contact__card-button">
                                Message Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="subscribe section">
            <div className="subscribe__container container">
                <h1 className="subscribe__title">
                    Get Started with AMO Creative
                </h1>
                <p className="subscribe__description">
                    Subscribe and find super attractive price
                    quotes from us, Find your product soon
                </p>
                <a href="#" className="button subscribe__button">
                    Get Started
                </a>
            </div>
        </section>
    </main>

    
    <footer className="footer section">
        <div className="footer__container container grid">
            <div>
                <a href="" className="footer__logo">
                    AMO Creative<i className='bx bxs-home-alt-2'></i>
                </a>
                <p className="footer__description">
                    Our vision is to make all product <br/> 
                    the best buiild product to be better.
                </p>
            </div>

            <div className="footer__content">
                <div>
                    <h3 className="footer__title">
                        About
                    </h3>

                    <ul className="footer__links">
                        <li>
                            <a href="#" className="footer__link">About Us</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Features</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">News & Blog</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="footer__title">
                        Company
                    </h3>

                    <ul className="footer__links">
                        <li>
                            <a href="#" className="footer__link">How We Work?</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Capital</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Security</a>
                        </li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="footer__title">
                        Support
                    </h3>

                    <ul className="footer__links">
                        <li>
                            <a href="#" className="footer__link">FAQs</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Support center</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Contact Us</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="footer__title">
                        Follow us
                    </h3>

                    <ul className="footer__social">
                        <a href="https://www.facebook.com/" target="_blank" className="footer__social-link">
                            <i className='bx bxl-facebook-circle' ></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" className="footer__social-link">
                            <i className='bx bxl-instagram-alt' ></i>
                        </a>
                        <a href="https://www.pinterest.com/" target="_blank" className="footer__social-link">
                            <i className='bx bxl-pinterest' ></i>
                        </a>    
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer__info container">
            <span className="footer__copy">
                &#169; AMO Creative. All rigths reserved
            </span>

            <div className="footer__privacy">
                <a href="#">Terms & Agreements</a>
                <a href="#">Privacy Policy</a>
            </div>
        </div>
    </footer>


    
    <a href="#" className="scrollup" id="scroll-up">
        <i className='bx bx-chevrons-up'></i>
    </a>

    
   
    </div>

  )
}
