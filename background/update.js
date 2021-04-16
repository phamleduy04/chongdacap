const update = () => {
    try {
        fetch('https://chongdacap.xyz/api/blacklist?type=array').then(res => res.json()).then(data => chrome.storage.sync.set({ chongdacap: data }));
    }
    catch(err) {

    }
};

update();

// update database every 1 hour
setInterval(() => update(), 36e5);