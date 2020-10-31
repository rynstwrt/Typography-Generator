let mouseTimeoutId;

async function mouseStep(h1)
{
	mouseTimeoutId = setTimeout(() =>
	{

	}, 500);
}

function deselectAll()
{
	const t = $('h1');
	t.removeClass('selected');
	t.unbind('mousemove');
}

$('h1').click(function()
{
	const t = $(this);

	if (t.hasClass('selected'))
	{
		t.removeClass('selected');
		deselectAll();
		return;
	}

	t.addClass('selected');
	t.css({'position': 'absolute'});

	const squares = $(`
		<div id='square1' class='selectedsquare'></div>
		<div id='square2' class='selectedsquare'></div>
		<div id='square3' class='selectedsquare'></div>
		<div id='square4' class='selectedsquare'></div>
	`);
	t.append(squares);

	t.on('mousemove', (e) =>
	{
		const cursorX = e.clientX;
		const cursorY = e.clientY;
		t.css({'left': cursorX - (t.width() / 2)});
		t.css({'top': cursorY - (t.height() / 2)});
	});
});

$('#container').children().not('h1').click(function()
{
	deselectAll();
});
