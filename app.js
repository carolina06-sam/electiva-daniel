const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
/* creo un array con los sonidos */
sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");

    btn.innerText = sound;
    console.log(sound);
    /* recorro el array , creo una constante btn y en e documento creo un elemto button y le añado una clase y lo agrego al html innert text de sound(array)  */

    btn.addEventListener("click", () => {
        stopSongs();
        document
            .getElementById(sound)
            .play(); /* todas las canciones tienen un id creo un arrayt con esos nombres luego lo recorro y a esa variable la llamo sound y ese es el id que tomo para todos los sonidos */
    });

    document.getElementById("buttons").appendChild(btn);

    /* el padre es Buttons y le agrego un hijo btn */
});

function stopSongs() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0; /* cuando este en pausa el tiempo se ajusta para volver a 0  */
    });
}
