function BMPFilter() {
  const info = `    This program allows users to choose a bmp      
    file and filter it. Users may blur, shift
    RGB values, grayscale or make the image look
    like swiss cheese. This project is adapted
    from two assignments in my operating systems
    class. It makes use of threads from the
    pthread library to filter the image in
    parallel, leading to faster execution
    times for a multicore system.
    `;

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <h2>&nbsp;&nbsp;BMP Image Filter</h2>
          <br />
          <p style={{ whiteSpace: "pre" }}>{info}</p>
          <br />
        </div>
        <iframe
          width="480"
          height="270"
          src="https://www.youtube.com/embed/nAbnyDso140"
          title="BMP Filtering Demo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}

export default BMPFilter;
