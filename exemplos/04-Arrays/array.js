// Criando um array (ou vetor)

let equipe =["Christian Horner", "Hannah Schmitz","Gianpiero Lambiase","Red bull Racing"];

document.write('<h2 style="color: blue;">Criando um array (ou vetor)</h2><br>');


// 1ª Digitação (Aqui)
document.write("Os melhores profissionais da F1 são:" +equipe+ "<br><br>")

document.write("Os melhor chefe de F1 é: <strong>"+equipe[0]+"</strong><br>")
document.write("A melhor estrategísta de F1 é: <strong>" +equipe[1]+"</strong><br>")
document.write("Os melhor engenheiro de F1 é: <strong>" +equipe[2]+ "</strong><br>")

document.write("Equipe N°1 F1 é: <strong>" +equipe[3]+ "</strong> sem sombra de dúvida <br>")

document.write("__________________________________________________________________<br>");

// ______________________________________________________________________________________

// ________________________________________________________________________________
// Array como matriz (array bidimensional)

document.write('<h2 style="color: blue;">Array como matriz (array bidimensional)</h2><br>');

let equipesF1 = [
    // 0           1             2
    ['Mercedes', 'Ferrari', 'Red Bull'], // 0

    // 0         1          2           3         4
    ['McLaren', 'Haas', 'AlphaTauri', 'Alpine', 'Williams'], // 1
];

// Exibir Red Bull

// 2ª Digitação (Aqui)"
document.write(`Melhor equipe de F1 da atualidade:<strong>${equipesF1[0][2]}</strong>"<br>"`) 
document.write(`Melhor equipe de F1 da atualidade:<strong>${equipesF1[1][3]}</strong>`) 