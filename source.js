let submit = document.getElementById('enter');
let input = document.getElementById('userinput');
let ul = document.querySelector('ul');
let list = document.querySelectorAll('.list');
let deleteBtn = document.querySelectorAll('.delete');

const query = () => {
	list = document.querySelectorAll('.list');
	deleteBtn = document.querySelectorAll('.delete');
}

const addListenerBykey = (key) => {
	list[key].addEventListener("click", () => list[key].classList.toggle("done"));
	deleteBtn[key].addEventListener("click", function() {
		this.parentElement.remove();
	});
}

const addElementToList = () => {
	if(input.value !== "") {
		let li = document.createElement("li");

		let span = document.createElement("span");
		span.classList.add("list");
		span.appendChild(document.createTextNode(input.value));
		li.appendChild(span);

		let deleteElement = document.createElement("button");
		deleteElement.classList.add("delete");
		deleteElement.classList.add("btn");
		deleteElement.classList.add("btn-dark")
		deleteElement.appendChild(document.createTextNode("delete"));
		li.appendChild(deleteElement);

		ul.appendChild(li);
		input.value = "";
		query();
		addListenerBykey(list.length -1);
	}
};

submit.addEventListener("click", addElementToList);
input.addEventListener("keypress", () => {
	 event.which === 13 && addElementToList();
});

for(let key = 0; key < list.length; key++) {
	addListenerBykey(key);
}