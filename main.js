/* Crear el array de objetos "Pizzas". Debemos crear 6 objetos como mínimo.
Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (debe ser una lista) y precio. */

let pizzas = [
	{
		img: "https://www.clarin.com/img/2022/02/02/xqwJySBdj_1200x630__1.jpg",
		id: 2,
		name: "Napolitana",
		ingredients: ["Salsa de tomate", " muzzarella", " tomate en rodajas", " morrón picado", " ajo", " perejil"],
		price: 1960,
	},
	{
		img: "https://statics.diariomendoza.com.ar/2021/04/crop/61a52d94060e0__400x300.webp",
		id: 9,
		name: "Calabresa",
		ingredients: ["Salsa de tomate", " muzzarella", " cantimpalo", " morrón picado"],
		price: 1980,
	},
	{
		img: "https://burgercarabina.es/wp-content/uploads/2020/07/pizza_3_quesos.jpg",
		id: 43,
		name: "Tres Quesos",
		ingredients: ["Salsa de tomate", " muzzarella", " provolone", " roquefort"],
		price: 2650,
	},
	{
		img: "https://images.deliveryhero.io/image/pedidosya/products/70f616c9-d394-4dfe-b9cb-bf37900d8681.jpeg?quality=90&width=381",
		id: 29,
		name: "Gran Rulo",
		ingredients: [
			"Salsa de tomate",
			" muzzarella",
			" tomate en rodajas",
			" jamón",
			" cebolla",
			" huevo",
			" morrón",
			" provolone",
		],
		price: 2770,
	},
	{
		img: "https://placeralplato.com/files/2016/03/Pizza-de-anchoas.jpg",
		id: 20,
		name: "Canchera",
		ingredients: ["Salsa de tomate", " anchoas", " ajo", " aceite de oliva"],
		price: 1430,
	},
	{
		img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/664/252/products/8c32e4b3-12b3-4f3c-b856-43b75ca75f9d-7226687d543efd99e516276674545048-1024-1024.jpeg",
		id: 37,
		name: "Fugazzeta",
		ingredients: ["Muzzarella", " cebolla", " provolone"],
		price: 1500,
	},
];

/*Elementos del DOM*/

const form = document.getElementById("form");
const numberInput = document.querySelector(".number__input");
const messageContainer = document.getElementById("message-container");
const cardContainer = document.getElementById("card-container");

/*Funciones*/

const searchPizza = (value) => pizzas.find((pizza) => pizza.id === value);

const showEmptyError = () => {
	messageContainer.innerHTML = `
    <div>
    <h2>Por favor ingresar un número.</h2>
    </div> 
    `;
};

const renderResult = (pizza) => {
	if (!pizza) {
		messageContainer.innerHTML = `
        <div>
        <h2>El número ingresado no coincide con ningún id.</h2>
        </div>
        `;
	} else {
		cardContainer.innerHTML = `
            <div class="card">
                <img src="${pizza.img}"/>
                <div class="card__txt">
                    <h2>${pizza.name}</h2>
                    <p>${pizza.ingredients}</p>
                    <h3>$ ${pizza.price}</h3>
                </div>
            </div>
        `;
	}
};

const checkId = (e) => {
	e.preventDefault();
	const searchedValue = numberInput.value;

	if (!searchedValue) {
		showEmptyError();
		return;
	}

	const searchedPizza = searchPizza(Number(searchedValue));
	renderResult(searchedPizza);
	form.reset();
};

const init = () => {
	form.addEventListener("submit", checkId);
};
init();

/* Local Storage*/

//localStorage.setItem("lastPizza", "");
