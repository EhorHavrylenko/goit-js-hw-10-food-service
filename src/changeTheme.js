const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
}

const bodyEl = document.querySelector('body');
const switchMarker = document.querySelector('#theme-switch-toggle');

switchMarker.addEventListener('change', handleChangeTheme);

function handleChangeTheme({target}){
    const { checked } = target; 
    
    checked ?
    bodyEl.classList.replace(Theme.LIGHT,Theme.DARK)
    : bodyEl.classList.replace(Theme.DARK, Theme.LIGHT);


    // checked ? 
    // bodyEl.classList.add(Theme.DARK)
    // : bodyEl.classList.remove(Theme.DARK);

    //-------------

    // bodyEl.classList.toggle(Theme.DARK);

}


