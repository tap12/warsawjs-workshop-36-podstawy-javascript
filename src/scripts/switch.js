const SOUND_ON = "sound on"; //celowo tutaj nie ma nazwy zmiennej, nie chce wejsc w zle praktyki programistyczne i hardkodowac te wartosci, które sie ma na zewnatrz
const SOUND_OFF = "sound off";

export function switchButton() { //nie moge skorzystac ze slowa zarezerwowanego switch
    const $btn = document.querySelector('.btn');
    const $audio = document.querySelector('.audio');

    $btn.addEventListener("click", function toogleState() { //toogle State, bo zmienia się stan napisu
        //instrukcja warunkowa if pozwala nam żeby ieć możliwość wyboru, potrzebuję zmienną, która przyda mi się w instrukcji wybory, current value będzie pozwalał korzystać z inst. wyboru
        const currentValue = $btn.value;
        if (currentValue === SOUND_ON) {
            $btn.value = SOUND_OFF;
            $audio.play();
        } else {
            $btn.value = SOUND_ON;
            $audio.pause();
        }
    });
}