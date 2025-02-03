function About() {
  const about = `
    Hi, I'm Zeb! 
    
    I'm a software engineering senior at Arizona State University. I was first introduced to coding in high school
    with a small html/css website project. I thought it was cool, but soon forgot about it. My original major in
    college was Computer Information Systems, where we started learning the basics of Python. After falling in love
    with programming and the logical thinking needed for it, I switched majors to software engineering. Now I am a
    senior and haven't looked back!

    Some of my personality traits include being team oriented, being a self starter, having a positive attitude,
    being dedicated, and working hard.
    
    I am most proficient with Java, Python, Javascript (React), SQL, C, HTML and CSS.
  
    If you're curious about my work, feel free to explore my portfolio, and don't hesitate to reach out. I look
    forward to connecting with you!  
    `;

  return <p style={{ whiteSpace: "pre", lineHeight: "1.4" }}>{about}</p>;
}

export default About;
