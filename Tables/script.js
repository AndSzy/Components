const firstRows = document.querySelectorAll('.first-row');

firstRows.forEach((row) => {
    row.addEventListener('click', () => {
		let chevronIcon = row.querySelector('.fa-chevron-down')
        let sibling = getNextSibling(row, '.hidden-row');
        if (sibling) {
			let mytd = sibling.querySelector('td');
			let mydiv = sibling.querySelector('.hidden-div');
			mytd.classList.toggle('p-0');
			mydiv.classList.toggle('hide-div');
			chevronIcon.classList.toggle('fa-rotate-270');
        }
    })
})


function getNextSibling (elem, selector) {
	let sibling = elem.nextElementSibling;
	if (!selector) return sibling;
	if (sibling.matches(selector)) return sibling;
};
