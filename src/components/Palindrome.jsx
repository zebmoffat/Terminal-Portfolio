function Palindrome() {
  const info = `    Palindrome Checker is a self-described      
    program created with MIPS Assembly.
    This project was created in my Computer
    Organization and Assembly Programming
    course. This project posed a special
    challenge because reversing a string in
    assembly is not quite as easy as in a
    higher level language. PLPTool was used
    for the creation of this project.
  `;

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <h2>&nbsp;&nbsp;Palindrome Checker</h2>
          <br />
          <p style={{ whiteSpace: "pre" }}>{info}</p>
          <br />
        </div>
        <p>IFRAME</p>
      </div>
    </>
  );
}

export default Palindrome;
