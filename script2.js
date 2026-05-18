const tooltips = document.querySelectorAll('.tooltip');

tooltips.forEach((tooltip) => {
    tooltip.addEventListener('click', onTooltipClick);
});

function onTooltipClick (evt) {
    evt.currentTarget.classList.toggle('tooltip-animated')
}