import React, { useState } from "react";
import "./portfolio.css";

export default function Portfolio() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phonenumber: "",
        message: "",
    });
    const [result, setResult] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setResult("Please wait...");
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    ...form,
                    access_key: "bdbdf333-d88c-4d09-bd7e-77f697bf2ccb",
                }),
            });
            const data = await response.json();
            setResult(data.message);
            setForm({ name: "", email: "", phonenumber: "", message: "" });
        } catch {
            setResult("Something went wrong!");
        }
        setSubmitting(false);
        setTimeout(() => setResult(""), 3000);
    };

    return (
        <div className="portfolio-root">
            {/* Navigation */}
            <header className="header_wrapper">
                <nav className="navbar">
                    <div className="navbar-brand">
                        <img src="./pal.png" alt="logo" width="60" height="30" />
                    </div>
                    <ul className="navbar-nav">
                        <li><a href="#about"><b>About Me</b></a></li>
                        <li><a href="#services"><b>Services</b></a></li>
                        <li><a href="#projects"><b>Projects</b></a></li>
                        <li><a href="#contact"><b>Contact Me</b></a></li>
                    </ul>
                </nav>
            </header>

            <main>
                {/* About Me */}
                <section id="about" className="lighty">
                    <div className="container">
                        <h1 className="section-title">About Me</h1>
                        <div className="row about-row">
                            <div className="about-text">
                                <h2>
                                    Hello everyone!!! My name is Pallavi.P. I am a Full-Stack developer. Welcome to my Portfolio!!!! Keep smiling:)
                                </h2>
                                <div className="action__btns">
                                    <button className="buttons">
                                        <a href="#contact">Hire Me</a>
                                    </button>
                                    <button className="buttons">
                                        <a href="MYRESUME.pdf" download="Pallavi.P resume">
                                            Download CV
                                        </a>
                                    </button>
                                </div>
                            </div>
                            <div className="about-img">
                                <img className="coding" src="./codinggal.jpg" alt="profile" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services */}
                <section id="services" className="dark">
                    <div className="container">
                        <h1 className="section-title">Services</h1>
                        <div className="row cards-row">
                            <div className="card">
                                <img src="img/pics/front-end-developer.jpg" alt="Front-end" />
                                <div className="card-body">
                                    <h5>Front-end developer</h5>
                                    <p>As a frontend developer, I create the visual and interactive aspects of a website or web application.</p>
                                    <a href="#services" className="btn">Read more</a>
                                </div>
                            </div>
                            <div className="card">
                                <img src="img/pics/full.jpg" alt="Full Stack" />
                                <div className="card-body">
                                    <h5>Full Stack Developer</h5>
                                    <p>I create scalable web applications by writing and testing code, building databases and servers and building APIs and other services.</p>
                                    <a href="#services" className="btn">Read more</a>
                                </div>
                            </div>
                            <div className="card">
                                <img src="img/pics/Backend.jpg" alt="Backend" />
                                <div className="card-body">
                                    <h5>Backend developer</h5>
                                    <p>As a backend developer,I help in creating the server-side logic, databases, and overall functionality of web applications.</p>
                                    <a href="#services" className="btn">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section id="projects" className="light">
                    <div className="container">
                        <h1 className="section-title">Projects</h1>
                        <div className="row cards-row">
                            <div className="card">
                                <img src="img/pics/frontend.jpg" alt="Frontend" />
                                <div className="card-body">
                                    <h5>Frontend projects using HTML,CSS,Javascript</h5>
                                    <p>Front-end development is the process of designing and building the graphical user interface of a website. Click on the button to see the website built using HTML,CSS and Javascript.</p>
                                    <a href="https://pallavipallz.netlify.app/" className="btn">Click Here</a>
                                </div>
                            </div>
                            <div className="card">
                                <img src="img/pics/front.jpg" alt="Bootstrap" />
                                <div className="card-body">
                                    <h5>Frontend projects mainly using Bootstrap-5</h5>
                                    <p>Front-end development is the process of designing and building the graphical user interface of a website. Click on the button to see the website built mainly using Bootstrap-5 and little bit of CSS.</p>
                                    <a href="https://cakeshopbycoder.netlify.app" className="btn">Click Here</a>
                                </div>
                            </div>
                            <div className="card">
                                <img src="img/pics/frontend.jpg" alt="Frontend2" />
                                <div className="card-body">
                                    <h5>Frontend projects using React.js</h5>
                                    <p>Front-end development is the process of designing and building the graphical user interface of a website. Click on the button to see the website built using React.js.</p>
                                    <a href="https://spontaneous-croquembouche-ab430c.netlify.app/" className="btn">Click Here</a>
                                </div>
                            </div>
                            <div className="card">
                                <img src="img/pics/full.jpg" alt="Fullstack" />
                                <div className="card-body">
                                    <h5>Fullstack development projects using MERN stack</h5>
                                    <p>This is a full stack Gym application developed using MERN stack and both frontend and backend of this app is deployed on railway.app.It also includes BMI Calculator in it.</p>
                                    <a href="https://frontend-gym-production.up.railway.app" className="btn">Click Here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className="dark">
                    <div className="container contact">
                        <h1 className="section-title">Contact Me</h1>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" name="name" id="name" value={form.name} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" name="email" id="email" value={form.email} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phonenumber">Phone Number</label>
                                <input type="text" name="phonenumber" id="phonenumber" value={form.phonenumber} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" rows="3" value={form.message} onChange={handleChange} required />
                            </div>
                            <button type="submit" className="btn" disabled={submitting}>Submit</button>
                        </form>
                        <div className="result">{result}</div>
                        <a href="#" className="top" title="Back to top"></a>
                    </div>
                   
                </section>
                
            </main>
            
            <footer className="footer">
                <p>
                    <center>
                        <b>Copyright &copy; Portfolio of Pallavi.P</b>
                    </center>
                </p>
            </footer>
        </div>
    );
}