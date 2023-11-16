document.write('<h2 style="color: blue;">Resolução</h2><br>');



// Digite a resolução do exercício aqui e visualize o resultado no navegador

let instrumentos = [
    "Violão", "Violino", "Bateria", "Guitarra", "Viola"
];

// Cache do tamanho array
let tamanho = instrumentos.length;

// 4ª Digitação (Aqui)

for (let i = 0; i < tamanho; i= i+1) {
    document.write(`Os instrumentos mais tocados são:<strong> ${instrumentos[i]}</strong><br>`);
}


