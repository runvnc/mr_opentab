
function doNav(URL) {
  let win = window.open(URL, '_blank');
  if (!win) {
    window.location.href = URL
  }
}

setTimeout(() => {
  window.registerCommandHandler('open_web_page', (data) => {
    console.log('open_web_page', data);
    if (data.event == 'running') {
        doNav(data.params.url);
    }
  });
, 5000)
