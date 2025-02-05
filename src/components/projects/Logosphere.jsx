export default function Logosphere() {
  const info = `    Logosphere is a work-in-progress web app
    designed to help users reflect and grow. It
    combines journaling features with access to
    timeless classics like Meditations and
    The Art of War, offering a space to both
    capture your thoughts and gain wisdom from
    the past.
    `;

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
              <a href="https://logosphere.app" target="_blank">
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
