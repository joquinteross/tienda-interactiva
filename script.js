function init(){
    var card = document.getElementById("card1")
    card = card.innerHTML =
    `
    <div>
            <h1>Lista de productos....</h1>
            <h2>Producto B:</h2>
            <input type="number" id= "input1" >
            <button onclick="agregarCarrtio()" type="button" class="btn btn-outline-primary-" type="button">Agregar A carrito</button>
    </div>
    
    `



}

function agregarCarrtio(){
    var valor = document.getElementById("input1").value
    var carrito = document.getElementById("carrito")
    carrito = carrito.innerHTML=`<h1>Valor: ${valor}</h1>`


}