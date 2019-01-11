const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
const CIRCLE1 = document.querySelector('.circle1');

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

function moveCircle(e) {
	//Making circle move along with the cursor
	var horizontalPosition = e.clientX;
	var verticalPosition = e.clientY;
	CIRCLE1.style.left = horizontalPosition + 'px';
	CIRCLE1.style.top = verticalPosition + 'px';

	//Making the circle move in the opposite direction to the cursor
	var horizontalPosition = windowWidth - e.clientX - 50;
	var verticalPosition = windowHeight - e.clientY - 50;
	CIRCLE.style.left = horizontalPosition + 'px';
	CIRCLE.style.top = verticalPosition + 'px';
}

function changeColor() {
	CIRCLE.style.background = 'blue';
	CIRCLE1.style.background = 'green';
}
//Event Listener to move the circle
AREA.addEventListener('mousemove', moveCircle);

// Event Listener to change color of circle when mouse touches and leaves circle
CIRCLE.addEventListener('mouseenter', changeColor);
CIRCLE.addEventListener('mouseleave', function() {
	CIRCLE.style.background = 'white';
	CIRCLE1.style.background = 'white';
});
