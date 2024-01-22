function Help() {
  const help = `
    'about'                         about me

    'contact'                       my contact information

    'projects'                      lists my projects

    'resume'                        displays my resume

    'theme (--optional name)'       changes the theme
      --Blues
      --Classic
      --Grape
      --Grass
      --Reds
      --Sunset

    'help'                          lists usable commands

    'history'                       lists previously used commands

    'ascii'                         ascii art

    'clear'                         clears the terminal
    `;

  return <p style={{ whiteSpace: "pre" }}>{help}</p>;
}

export default Help;
