const featuresButton = document.querySelectorAll('.product-features__item-button');
const featuresItem = document.querySelectorAll('.product-features__item-content');

featuresButton.forEach(function(element){
	element.addEventListener('click', open)
});

function open(evt){
	const elTarget = evt.currentTarget;
	const button = elTarget.dataset.button;

	featuresButton.forEach(function(item){
		item.classList.remove('product-features__item-button--active');
	});

	featuresItem.forEach(function(item){
		item.classList.remove('product-features__item-content--active');
	});

	elTarget.classList.add('product-features__item-button--active');
	document.querySelector(`#${button}`).classList.add('product-features__item-content--active');
}