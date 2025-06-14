import './Home.css'; // Optional: for custom styles
import profilePic from './pal.jpg'; // Replace with your image path

const Home = () => {
    return (
        <section className="home-section" id="home">
            <div className="home-content">
                <div className="home-text">
                    <h1>Hello, I'm <span className="highlight">Pallavi</span></h1>
                    <h2>Full Stack Developer</h2>
                    <p>
                        I build modern, scalable web applications using React, Node.js, and more.
                        Passionate about clean code, UI/UX, and solving real-world problems.
                    </p>
                    <div className="home-buttons">
                        <a href="#projects" className="btn">View Projects</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>
                <div className="home-image">
                    <img src={profilePic} alt="Pallavi Profile" />
                </div>
            </div>
        </section>
    );
};

export default Home;

