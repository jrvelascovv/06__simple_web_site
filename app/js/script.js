(function () {
  
  const savedMode = localStorage.getItem('colorMode');
  // console.log(savedMode);
  const darkModeMQ = window.matchMedia('(prefers-color-scheme: dark)');
  const body = document.getElementsByTagName('body')[0];
  const darkToggle = document.getElementById('dark');
  const lightToggle = document.getElementById('light');

  if (savedMode) {
    // colorMode: úsalo
    // console.log('usando colorMode');
    body.classList = savedMode;
    savedMode === "dark" ? darkToggle.click() : lightToggle.click();
  } else if (darkModeMQ.matches) {
    // Tema general: aplica dark mode
    // console.log('usando System pref');
    body.classList = 'dark';
    darkToggle.click();
  } else {
    body.classList = 'light';
    lightToggle.click();
  }

  darkToggle.addEventListener('click', () => {
    setAndSaveMode("dark");
  });
  lightToggle.addEventListener('click', () => {
    setAndSaveMode("light");
  });

  const setAndSaveMode = mode => {
    body.classList = mode;
    localStorage.setItem('colorMode', mode);
  };

})();


