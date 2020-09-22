const row = document.querySelector('.row');
let cardSelected = false;

const cardSelect = (event) => {
	event.preventDefault();
	const target = event.target;

	if (cardSelected === false) {
		cardSelected = true;
		if (target.closest('.card') && target.closest('.card').querySelector('.card__subtitle').textContent !== 'с курой') {
			const cardBorder = target.closest('.card-border'),
				cardWeight = target.closest('.card').querySelector('.card__weight'),
				cardBottom = target.closest('.card-wrapper').querySelector('.card__bottom');
			cardBorder.style.backgroundColor = '#d91667';
			cardWeight.style.backgroundColor = '#d91667';
			if (target.closest('.card').querySelector('.card__subtitle').textContent === 'с фуа-гра') {
				cardBottom.textContent = 'Печень утки разварная с артишоками.';
			}
			else if (target.closest('.card').querySelector('.card__subtitle').textContent === 'с рыбой') {
				cardBottom.textContent = 'Головы щучьи с чесноком да свежайшая сёмгушка.';
			}
			else if (target.closest('.card').querySelector('.card__subtitle').textContent === 'с курой') {
				return;
			}
		}
		else if (target.closest('.card__bottom > a')) {
			const cardWrapper = target.closest('.card-wrapper').querySelector('.card-border'),
				cardWeight = target.closest('.card-wrapper').querySelector('.card__weight'),
				cardBottom = target.closest('.card-wrapper').querySelector('.card__bottom');
			cardWrapper.style.backgroundColor = '#d91667';
			cardWeight.style.backgroundColor = '#d91667';
			if (target.closest('.card-wrapper').querySelector('.card__subtitle').textContent === 'с фуа-гра') {
				cardBottom.textContent = 'Печень утки разварная с артишоками.';
			}
			else if (target.closest('.card-wrapper').querySelector('.card__subtitle').textContent === 'с рыбой') {
				cardBottom.textContent = 'Головы щучьи с чесноком да свежайшая сёмгушка.';
			}
			else if (target.closest('.card-wrapper').querySelector('.card__subtitle').textContent === 'с курой') {
				return;
			}
		}
	}
	else {
		cardSelected = false;
		if (target.closest('.card') && target.closest('.card').querySelector('.card__subtitle').textContent !== 'с курой') {
			const cardBorder = target.closest('.card-border'),
				cardWeight = target.closest('.card').querySelector('.card__weight'),
				cardBottom = target.closest('.card-wrapper').querySelector('.card__bottom');
			cardBorder.style.backgroundColor = '#1698d9';
			cardWeight.style.backgroundColor = '#1698d9';
			if (target.closest('.card').querySelector('.card__subtitle').textContent === 'с фуа-гра') {
				cardBottom.innerHTML = 'Чего сидишь? Порадуй котэ, <a href="#">купи.</a>';
			}
			else if (target.closest('.card').querySelector('.card__subtitle').textContent === 'с рыбой') {
				cardBottom.innerHTML = 'Чего сидишь? Порадуй котэ, <a href="#">купи.</a>';
			}
			else if (target.closest('.card').querySelector('.card__subtitle').textContent === 'с курой') {
				return;
			}
		}
	}
};




row.addEventListener('click', cardSelect);

