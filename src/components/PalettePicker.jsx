function PalettePicker() {
  const info = `    Palette Picker is a fun React-built
    application that helps the user generate    
    random color palettes. Users can choose 
    from different palette types or suggest
    a singular color to get five in return.
    Users can save palettes, draw with their
    colors, and even revisit old palettes.
    `;

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
        <h2>&nbsp;&nbsp;Palette Picker</h2>
        <br />
          <p style={{ whiteSpace: "pre" }}>{info}</p>
          <br />
          <p>&nbsp;&nbsp;&nbsp;&nbsp;Palette Picker can be found <em><a href="https://zebmoffat.github.io/Palette-Picker/" target="_blank">here</a></em></p>
        </div>
        <iframe
          width="480"
          height="270"
          src="https://www.youtube.com/embed/krkXPEKqeDo"
          title="Palette Picker Demo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          all
        />
      </div>
    </>
  );
}

export default PalettePicker;
