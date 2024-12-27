const canvas = document.createElement('canvas');
document.body.insertAdjacentElement('beforeend', canvas);
canvas.id = 'secret-canvas';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
ctx.strokeStyle = '#B953D0'

const secretstyle = document.createElement('style');
secretstyle.id = 'supersecretstyle';
secretstyle.innerText = `
section.active-section {
	border: 1px solid var(--active);
	border-left: none;
	border-spacing: 10px;
}
section.active-section + .active-section {
	border: none;
}
`;
document.head.appendChild(secretstyle);


document.onscroll = () => {
	const tocEntry = document.querySelector('#main-nav>ul>li.active');
	const section = document.querySelector('section.active-section');
	if (tocEntry === null || section === null) return
	const tocEntryRect = tocEntry.getBoundingClientRect();
	const sectionRect = section.getBoundingClientRect();
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.moveTo(tocEntryRect.right, tocEntryRect.top); // start point
	ctx.lineTo(sectionRect.left, sectionRect.top); // end point
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(tocEntryRect.right, tocEntryRect.bottom); // start point
	ctx.lineTo(sectionRect.left, sectionRect.bottom); // end point
	ctx.stroke();
}

// WITH P5 (OUTDATED, NOW WE JUST USE CANVAS)
// function setup() {
//   createCanvas(canvas.width, canvas.height, canvas);
//   stroke('#B953D0');
// }

// document.onscroll = () => {
//   let tocEntry = document.querySelector('#main-nav>ul>li.active');
//   let section = document.querySelector('section.active-section');
//   if (tocEntry === null || section === null) return
//   let tocEntryRect = tocEntry.getBoundingClientRect();
//   let sectionRect = section.getBoundingClientRect();

//   clear();
//   line(tocEntryRect.right, tocEntryRect.top, sectionRect.left, sectionRect.top);
//   line(tocEntryRect.right, tocEntryRect.bottom, sectionRect.left, sectionRect.bottom);
// }