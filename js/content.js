var regex;
if (isFacebook()) regex = /(https|http):\/\/www.facebook.com\/messages\/t\/*/gm;
else regex = /(https|http):\/\/www.messenger.com\/t\/*/gm;
var observer = new MutationObserver((mutaions) => {
    mutaions.forEach(el => {
        if (el.target.hasAttribute('aria-label') || el.target.hasAttribute('data-testid')) 
            chrome.storage.sync.get(['chongdacap'], (res) => processData(res));
    });
});

async function processData(database) {
    let messageArr = Array.from(document.getElementsByClassName('oajrlxb2 gs1a9yip')).filter(el => el.href && el.href.match(regex));
    if (messageArr.length == 0) return;
    messageArr.forEach(el => {
        const id = getIDFromURL(el.href);
        if (database.chongdacap.includes(id)) pChild('Đa cấp', el);
    });
}

observer.observe(document.body, {
    childList: true,
    subtree: true
})

function pChild(content = 'yay', body) {
    const checkPrevious = body.getElementsByTagName('a');
    if (checkPrevious.length != 0) {
        checkPrevious[0].innerText = content;
        return;
    }
    var tag = document.createElement('a');
    tag.appendChild(document.createTextNode("Đa cấp"));
    tag.style.color = 'red';
    tag.style.position = 'relative';
    tag.style.left = '20px';
    body.appendChild(tag);
}

function getIDFromURL(url) {
    return url.replace(regex, '').replace('/', '');
}

function isFacebook() {
    if (window.location.href.includes('facebook')) return true;
    return false;
}