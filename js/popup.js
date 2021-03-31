chrome.storage.sync.get(['chongdacap'], (res) => {
    createBody('p', `Số người là đa cấp có trong dữ liệu: ${res.chongdacap.length}`);
    createButton('Update database', 'update');
    document.getElementById('update').addEventListener('click', async () => {
        await fetch('https://chongdacap.herokuapp.com/api/blacklist?type=array').then(res => res.json()).then(data => chrome.storage.sync.set({ chongdacap: data }));
        alert('Đã update thành công!');
    })
});


function createBody(type, text) {
    const h = document.createElement(type);
    const t = document.createTextNode(text);
    h.appendChild(t);
    document.body.appendChild(h);
}

function createButton(text, id) {
    const btn = document.createElement('button');
    btn.innerHTML = text;
    btn.id = id;
    document.body.appendChild(btn);
}