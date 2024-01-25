function PalettePicker() {
  const info = `    Palette Picker is a fun React-built   
    application that helps the user generate       
    random color palettes. This project was
    made during the Sunhacks Hackathon at ASU.
    
    Users can choose from different palette
    types or suggest a singular color and get
    four added in return. Users can save
    palettes, draw with their colors, and even
    revisit old palettes.
    `;

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <h2>&nbsp;&nbsp;Palette Picker</h2>
          <br />
          <p style={{ whiteSpace: "pre" }}>{info}</p>

          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Palette Picker can be found&nbsp;
            <em>
              <a
                href="https://zebmoffat.github.io/Palette-Picker/"
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
          src="https://www.youtube.com/embed/krkXPEKqeDo"
          title="Palette Picker Demo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
    </>
  );
}

export default PalettePicker;
