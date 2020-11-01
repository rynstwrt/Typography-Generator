function deselectAll()
{
	const t = $('h1');
	t.removeClass('selected');
	t.unbind('mousemove');
	$(document).unbind('keydown');
}



$('#fontselect').on('input', function()
{
	let font;

	switch ($(this).val())
	{
		case 'Anton':
			font = "'Anton', sans-serif";
			break;
		case 'Barlow Condensed':
			font = "'Barlow Condensed', sans-serif";
			break;
		case 'Lato':
			font = "'Lato', sans-serif";
			break;
		case 'Open Sans':
			font = "'Open Sans', sans-serif";
			break;
		case 'Roboto':
			font = "'Roboto', sans-serif";
			break;
		case 'Roboto Condensed':
			font = "'Roboto Condensed', sans-serif";
			break;
	}

	$('h1').css({'font-family': font});
});


$('#themeselect').on('input', function()
{
	if ($(this).val() === 'Light')
	{
		$('body').addClass('light');
	}
	else
	{
		$('body').removeClass('light');
	}
});




$('#container').click(function(e)
{
	if (e.target.id !== 'container') return;

	deselectAll();
});



$('#resetbutton').click(() => $('h1').remove());



$('#newlinebutton').click(() =>
{
	const h1 = $('<h1>Lorem Ipsum</h1>');
	$('#container').append(h1);





	h1.on('mousedown', function(e)
	{
		if (e.target.tagName !== 'H1') return;

		if (h1.css('position') === 'static')
		{
			const left = h1.offset().left;
			const top = h1.offset().top;
			h1.css({'position': 'absolute'});
			h1.css({'left': left});
			h1.css({'top': top});
		}

		h1.on('mousemove', (e) =>
		{
			const cursorX = e.clientX;
			const cursorY = e.clientY;
			h1.css({'left': cursorX - (h1.width() / 2)});
			h1.css({'top': cursorY - (h1.height() / 2)});
		});
	});


	h1.dblclick(function()
	{
		$(document).on('keydown', function(e)
		{
			const key = e.key;
			const keyCode = e.keyCode;
			let currentText = h1.text();

			console.log(keyCode);

			if (e.keyCode === 8) // backspace
			{
				currentText = currentText.split('');
				currentText.pop();
				currentText = currentText.join('');

				h1.text(currentText);
				return;
			}
			else if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) // if space or a-z
			{
				h1.text(currentText + key);
			}
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
