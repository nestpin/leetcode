let Colores = ['rojo','verde','magenta','cobrizo']
Colores[4] = 'Blanco'
console.log(Colores)

for (let i=0 ; i<Colores.length ;i++){
    let Color = Colores[i];
    //console.log(Color)
    let Letras = Color.length;
    console.log('En el color ',Color, ' hay ',Letras, ' Letras.');
}