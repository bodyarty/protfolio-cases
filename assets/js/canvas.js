	var canvasWrapper = document.querySelector('.map-wrapper');
	var canvas = document.querySelector('.responsive-canvas');
	var ctx = canvas.getContext("2d");

	/**
	 * Resets canvas width and height
	 */
	var resetCanvasSize = function () {
		canvas.width = 0;
		canvas.height = 0;
	};

	/**
	 * Sets canvas width and height
	 */
	var setCanvasSize = function () {
		var canvasWrapperHeight = canvasWrapper.clientHeight;
		var canvasWrapperWidth = canvasWrapper.clientWidth;

		canvas.width = canvasWrapperWidth;
		canvas.height = canvasWrapperHeight;
	};

	setCanvasSize();

	/**
	 * On window resize recalculates canvas width and height.
	 * Timeout is necessary for correct parent block size calculation.
	 */
	window.addEventListener('resize', function () {
		resetCanvasSize();
		setTimeout(setCanvasSize, 100);
		// Everything should be re-drawn on resize.
		setTimeout(draw, 150);
	});

	/**
	 * Example function for drawing on canvas
	 */
	var draw = function () {
		ctx.lineWidth = 3;
		ctx.fillStyle = '#F3F3F3';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.fill();
		ctx.stroke();
		ctx.font = '18px Verdana';
		ctx.fillStyle = '#F3F3F3';
	};

	draw();