const miLista = ['velma', 'exploradora', 'jane', 'john', 'harry'];
let i = 0;
while (i < miLista.length) {
    console.log(`Elemento en el índice ${i}: ${miLista[i]}`);
    i++;
}
console.log("------------------------------------------------");

for (let i = 0; i < miLista.length; i++) {
    console.log(`Elemento en el índice ${i}: ${miLista[i]}`);
}

console.log("________________________________________________");

const saludar = () => {
    return "Hola mundo";
  };
  console.log(saludar());
