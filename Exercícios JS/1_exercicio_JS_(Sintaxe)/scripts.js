document.write('<h2 style="color: blue;">Resolução</h2><br>');


// Digite a resolução do exercício aqui e visualize o resultado no navegador
let produto = 'Maçã';
let preco = 4;
let quantidade = 6;
let compra = 2;
let total = preco * quantidade;
let sobra = quantidade - compra


// 3ª Digitação (Aqui)
document.write(`Temos atualmente no estoque o produto: <strong>${produto}</strong> que está saindo por:<strong>R$ ${preco}</strong><br> com ainda <strong>${quantidade} </strong> no estoque, e na compra de ${quantidade} produtos o preço ira ser de <strong> R$ ${total}</strong>.<br>Eu irei comprar <strong>${compra}</strong> maçãs então vão sobrar<strong> ${sobra}</strong> produtos no estoque. `)