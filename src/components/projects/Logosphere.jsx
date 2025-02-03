export default function Logosphere() {
  const info = `    Logosphere`;

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <h2>&nbsp;&nbsp;Logosphere</h2>
          <br />
          <p style={{ whiteSpace: "pre" }}>{info}</p>
          
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Logosphere can be found&nbsp;
            <em>
              <a
                href=""
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
          src=""
          title="Logosphere Demo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
}
