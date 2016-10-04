d3.selectAll('iframe').on('click', overlayPlayer);

function overlayPlayer(d) {
  console.log('Hello');
  var shim = d3.select('.container')
      .append('div')
      .attr('class', 'shim');

  shim.append('div')
      .attr('id', 'shim-player');
}
