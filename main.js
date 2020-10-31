
$('input[type=text]').on('input', function()
{
	const line = this.id.replace(/\D/g, '');
	$(`#line${line}`).text(this.value);
});

$('input[type=range]').on('input', function()
{
	const line = this.id.replace(/\D/g, '');
	const isFontSize = this.id.includes('fontsize');
	const isWidth = this.id.includes('width');
	const isHeight = this.id.includes('height');
	const isX = this.id.includes('horizontal');
	const isY = this.id.includes('vertical');

	if (isFontSize)
		$(`#line${line}`).css({'font-size': `${this.value}rem`});
	else if (isWidth)
		$(`#line${line}`).css({'letter-spacing': `${this.value}rem`});
	else if (isHeight)
		$(`#line${line}`).css({'transform': `scaleY(${this.value})`});
	else if (isX)
		$(`#line${line}`).css({'margin-left': `${this.value}rem`});
	else if (isY)
		$(`#line${line}`).css({'margin-bottom': `${this.value}rem`});
});
