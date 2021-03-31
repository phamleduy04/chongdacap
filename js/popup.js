chrome.storage.sync.get(['chongdacap'], (res) => {
    createBody('p', `Số người là đa cấp có trong dữ liệu: ${res.chongdacap.length}`);
});

function createBody(type, text) {
    const h = document.createElement(type);
    const t = document.createTextNode(text);
    h.appendChild(t);
    document.body.appendChild(h);
}