function Help() {
  const help = `
    'about'                         about me

    'contact'                       my contact information

    'projects'                      lists my projects

    'resume'                        displays my resume

    'theme'                         changes the theme

    'help'                          lists usable commands

    'history'                       lists previously used commands

    'clear'                         clears the terminal
    `;

  return <p style={{ whiteSpace: "pre" }}>{help}</p>;
}

export default Help;
