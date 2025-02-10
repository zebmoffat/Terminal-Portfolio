export default function SimpleMusicStorage() {
  const info = `    Simple Music Storage is an application that
    enables seamless communication between clients 
    and a MySQL database server. Built using Java
    for the server-side, the app supports CRUD
    operations on the database. Communication
    between the server and Python or Go clients is
    handled via gRPC, ensuring efficient and
    secure data exchange.
    `;

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <h2>&nbsp;&nbsp;Simple-Music-Storage</h2>
          <br />
          <p style={{ whiteSpace: "pre" }}>{info}</p>
          
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Simple Music Storage can be found&nbsp;
            <em>
              <a
                href="https://github.com/zebmoffat/Simple-Music-Storage"
                target="_blank"
              >
                here
              </a>
            </em>
            .
          </p>
          <br />
        </div>
        <iframe
          width="480"
          height="270"
          src="https://www.youtube.com/embed/JiSDPNUjfJs"
          title="Simple Music Storage Demo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
