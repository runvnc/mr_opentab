
function doNav(URL) {
  let win = window.open(URL, '_blank');
  if (!win) {
    console.log('Popup blocked');
    const randomID = Math.random().toString(36).substring(7);
    dialog_html = `
      <dialog id="dialog${randomID}">
        <h1>Open in new tab</h1>
        <p>Click the link below to open the link in a new tab:</p>
        <a href="${URL}">${URL}</button>
      </dialog>`
    document.body.insertAdjacentHTML('beforeend', dialog_html);
    dialog = document.getElementById(`dialog${randomID}`);
    dialog.showModal();
  }
}

setTimeout(() => {
  window.registerCommandHandler('open_web_page', (data) => {
    console.log('open_web_page', data);
    if (data.event == 'running') {
        doNav(data.args.url);
    }
  });
}, 5000)
