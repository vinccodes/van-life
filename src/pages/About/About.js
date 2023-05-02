import './About.css';

const About = ()=>{
    return (
        <div className="about">
            <div className="about__img__container">
            </div>
            <div className="about__content">
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)</p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

                <div className="about__vans">
                    <h2 class="about__vans__title">Your destination is waiting. <br></br>Your van is ready.</h2>
                    <a className="about__vans__btn">Explore our vans</a>
                </div>
            </div>
        </div>
    )
}

export default About;