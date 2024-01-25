function ContactsApp() {
  const info = `    Contacts Book was my first project I           
    worked on outside of school. It was also
    my first time learning a programming
    language not introduced in school, with
    JavaScript. Learning something new without
    the pressure of school was so much fun.
    
    Contacts Book allows the user
    to create and remove contacts, or just
    clear all of them. Contacts are saved
    with local storage.`;

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <h2>&nbsp;&nbsp;Contacts Book</h2>
          <br />
          <p style={{ whiteSpace: "pre" }}>{info}</p>
          <br />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Contacts Book can be found&nbsp;
            <em>
              <a
                href="https://zebmoffat.github.io/Contacts-App/"
                target="_blank"
              >
                here
              </a>
            </em>
            .
          </p>
        </div>
        <iframe
          width="480"
          height="270"
          src="https://www.youtube.com/embed/mGO4573gmAA"
          title="Contacts Book Demo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
}

export default ContactsApp;
