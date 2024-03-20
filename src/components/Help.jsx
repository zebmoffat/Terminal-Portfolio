function Help() {
  const help = `
    'about'                         about me

    'contact'                       my contact information

    'projects'                      lists my projects

    'resume'                        links to my resume

    'theme (--optional)'            changes the theme
      --blues
      --classic
      --grape
      --grass
      --reds
      --sunset

    'help'                          lists usable commands

    'history'                       lists previously used commands

    'ascii'                         ascii art

    'clear'                         clears the terminal
    `;

  return <p style={{ whiteSpace: "pre" }}>{help}</p>;
}

export default Help;
