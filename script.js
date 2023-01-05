document.body.addEventListener("keyup", (e) => {
    playSound(e.code.toLowerCase());
});

document.querySelector(".botao").addEventListener("click", () => {
    playCompose();
});


function playSound(soundCode) {
    let soundId = `#s_${soundCode}`;
    let soundElement = document.querySelector(soundId);
    let tecla = document.querySelector(`div[data-key="${soundCode}"`);

    if (tecla) {
        tecla.classList.add("active");

        setTimeout(() => {
            tecla.classList.remove("active")
        }, 300);
    }

    if(soundElement) {
        soundElement.currentTime = -1;
        soundElement.play();
    }
}

function playCompose() {
    let input = document.querySelector("input");
    
    //Tocar as notas no input

    //Quais são as notas?
    let notes = input.value.split("");
    let timer = 250;

    for (note of notes) {
        let noteCode = `key${note.toLowerCase()}`;

        setTimeout(() => {
            playSound(noteCode)
        }, timer);
        
        timer += 250;
    }

}

function clicou(key) {
    let tecla = document.querySelector(`div[data-key="key${key}"`);
    let soundId = `#s_key${key}`;
    let soundElement = document.querySelector(soundId);

    if (tecla) {
        tecla.classList.add("active");

        setTimeout(() => {
            tecla.classList.remove("active")
        }, 300);
    }

    if(soundElement) {
        soundElement.currentTime = -1;
        soundElement.play();
    }
}




