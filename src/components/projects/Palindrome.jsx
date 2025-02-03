function Palindrome() {
  const info = `    Palindrome Checker is a self-described         
    program created with MIPS Assembly.
    This project was created in my Computer
    Organization and Assembly Programming
    course. This project posed a special
    challenge because reversing a string in
    assembly is not quite as easy as in a
    higher level language. Entered strings
    will be checked if they are a palindrome.
    The end of the string is denoted by a period.
    Spaces and letter casing are ignored.`;

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <h2>&nbsp;&nbsp;Palindrome Checker</h2>
          <br />
          <p style={{ whiteSpace: "pre" }}>{info}</p>
          <br />
        </div>
        <iframe
          width="480"
          height="270"
          src="https://www.youtube.com/embed/a_DTwM6xeYI"
          title="Palindrome Checker Demo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
}

export default Palindrome;
