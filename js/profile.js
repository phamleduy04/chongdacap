const url = window.location.href;
if (haveIDInProfile()) process(url.replace(/(https|http):\/\/www.facebook.com\/profile.php\?id=/gm, ''));
else if (usernamePofile()) {
    getFBID(url.replace(/(https|http):\/\/www.facebook.com\//gm, '').replace('/', '')).then(id => {
        if (!id) return;
        else process(id);
    });
};

function usernamePofile() {
    const url = window.location.href;
    if (url.match(/(https|http):\/\/www.facebook.com\/(?!settings|pages|groups|gaming|stories|friends|help|saved|campus|climatescienceinfo|coronavirus_info|weather|votinginformationcenter|townhall|fundraisers|events|offers|marketplace|login.php)\S{5,}/gm))
        return true;
    return false;
};

function haveIDInProfile() {
    if (window.location.href.match(/(https|http):\/\/www.facebook.com\/profile.php\?id=[0-9]{10,}/gm)) return true;
    return false;
};

async function getFBID(username) {
    if (!username) return null;
    try {
        const id = await fetch(`https://chongdacap.xyz/api/getID?username=${username}`).then(res => res.text());
        return id;
    }
    catch (e) {
        return null;
    }
};

function check(res, id) {
    if (res.chongdacap.includes(id)) return true;
    return false;
}

function process(id) {
    chrome.storage.sync.get(['chongdacap'], (res) => {
        const dacap = check(res, id);
        if (!dacap) return;
        addTag(Array.from(document.getElementsByClassName("gmql0nx0 l94mrbxd p1ri9a11 lzcic4wl bp9cbjyn j83agx80")));
    });
};

function addTag(el) {
    if (el.length == 0) return;
    var tag = document.createElement('a');
    tag.appendChild(document.createTextNode('(Đa cấp)'));
    tag.style.color = 'red';
    tag.style.position = 'relative';
    tag.style.left = '5px';
    el[0].appendChild(tag);
};