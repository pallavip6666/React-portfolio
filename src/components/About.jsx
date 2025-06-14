import React from 'react';
import './About.css'; // Optional: for custom styles

const About = () => (
    <section className="about">
        <h1>About Me</h1>
        <p>
            Hi, I'm <strong>Pallavi.P</strong>, a passionate Full Stack Developer with experience in building scalable web applications and engaging user experiences. I specialize in both frontend and backend technologies, and I enjoy solving complex problems with clean, efficient code.
        </p>
        <h2>Skills</h2>
        <ul>
            <li>Frontend: React, JavaScript, TypeScript, HTML, CSS, Tailwind CSS</li>
            <li>Backend: Node.js, Express, MongoDB, SQL</li>
            <li>Other: Git, REST APIs, Agile Methodologies</li>
        </ul>
        <h2>About My Work</h2>
        <p>
            I love collaborating with teams to deliver high-quality products. My goal is to create impactful solutions that make a difference. I am always eager to learn new technologies and take on new challenges.
        </p>
    </section>
);

export default About;