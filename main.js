function deselectAll()
{
	const t = $('h1');
	t.removeClass('selected');
	t.unbind('mousemove');
}






$('#container').click(function(e)
{
	if (e.target.id !== 'container') return;

	deselectAll();
});







$('#newlinebutton').click(() =>
{
	const h1 = $('<h1>Lorem Ipsum</h1>');
	$('#container').append(h1);





	h1.on('mousedown', function(e)
	{
		if (e.target.tagName !== 'H1') return;

		h1.css({'position': 'absolute'});
		h1.on('mousemove', (e) =>
		{
			const cursorX = e.clientX;
			const cursorY = e.clientY;
			h1.css({'left': cursorX - (h1.width() / 2)});
			h1.css({'top': cursorY - (h1.height() / 2)});
		});
	});





	h1.on('mouseup', () =>
	{
		h1.addClass('selected');
		const squares = $(`
			<div id='square4' class='selectedsquare'></div>
		`);
		h1.append(squares);

		squares.on('mousedown', () =>
		{
			const originalWidth = h1.width();
			const originalHeight = h1.height();
			squares.on('mousemove', (e) =>
			{
				const cursorX = e.clientX;
				const cursorY = e.clientY;
				const lineLength = h1.text().trim().length;
				const distanceX = cursorX - h1.offset().left;
				const distanceY = cursorY - h1.offset().top;

				h1.css({'transform': `scaleX(${distanceX / originalWidth}) scaleY(${distanceY / originalHeight})`});
			});
		});

		squares.on('mouseup', () =>
		{
			squares.unbind('mousemove');
		});

		h1.unbind('mousemove');
	});
});

$('#newlinebutton').click();
