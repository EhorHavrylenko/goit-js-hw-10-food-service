const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
}

const bodyEl = document.querySelector('body');
const switchMarker = document.querySelector('#theme-switch-toggle');

switchMarker.addEventListener('change', handleChangeTheme);

function handleChangeTheme({target}){
    const { checked } = target; 
    
    if(checked){ // проверяем в каком положении тумблер изменения темы, если выбрана темная, то checked = true
        bodyEl.classList.add(Theme.DARK); 
    } else {
        bodyEl.classList.replace(Theme.DARK, Theme.LIGHT);
    }

    const theme = checked ? Theme.DARK : Theme.LIGHT; // создаем переменную выбранной темы в зависимости от checked
    localStorage.setItem('StorageTheme', theme); // записываем выбранную тему в localStorage
}

if(localStorage.getItem('StorageTheme') !== null){ // проверяем есть ли в локалСторедже сохпаненная тема, если да отображаем выбранную
    const colorThemeLocal = localStorage.getItem('StorageTheme');
    bodyEl.classList.add(colorThemeLocal);
    
    if(colorThemeLocal){
        switchMarker.checked = colorThemeLocal === Theme.DARK; // проверяем положение тумблера изменение темы, чтобы при перезагрузке был в правильном месте. Если checked true оставляем в положении темной темной темы
    }
}