/*FAZENDO A BATERIA FUNCIONAR*/


// Eventos:
document
 //
document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase());
});
//
document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;

    if(song !== '') {
        let songArray = song.split(''); // Separa cada letra pelo vazio entre elas, virando tudo uma Array;
        playComposition(songArray); // Toca a composição
    }
})



// Funções:
function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    // Verifica se achou
    if(audioElement) { // Se achou
        audioElement.currentTime = 0; // Coloca o tempo do aúdio para 0;
        audioElement.play()
    }
    if(keyElement) { // Ativa a mudança de cor da tecla
        keyElement.classList.add('active')

        // Remove a cor com o passar do tempo
        setTimeout(()=>{
            keyElement.classList.remove('active')
        }, 300)
    }
}
//
function playComposition(songArray) { 
    let wait = 0;

    // Percorre cada letra e toca o som referente a elas
    for (let songItem of songArray) { // Dúvida entre For in e For of;

    // Tempos para cada som
        setTimeout(()=>{ // Toca cada letra no tempo 0, 250, 500, 750, 1000
            playSound(`key${songItem}`)
        }, wait)

        wait += 250; // Adiciona milisegundos

    }
    // Letras que não foram computadas, servem como som vazio para a composição
}






/*
    - (document.body) Representa o corpo do site;
    - (addEventListener('keyup', (evento)=>{})) 
        ** Cria um observador | O parâmetro (evento) recebe os dados;
    - (play()) Toca o som especifico;
    - (.querySelector(`div[data-key="keyw"]`)) Seleciona o elemento pelo atributo;
    - (audioElement.currentTime = 0) Coloca o tempo do aúdio para 0;
    - (querySelector('#input').value) Pega o que foi colocado no elemento; 
    - (song.split('')) Separa cada letra pelo vazio entre elas, virando tudo uma Array;
    
    * For In: Mostra as propriedades/chaves;
    * For Of: Mostra o valor das propriedas;
 
*/