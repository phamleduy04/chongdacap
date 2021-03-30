var regex2;
if (window.location.href.includes('facebook')) regex2 = /(https|http):\/\/www.facebook.com\/messages\/t\/*/gm;
else regex2 = /(https|http):\/\/www.messenger.com\/t\/*/gm;
var observer = new MutationObserver(function(mutaions) {
    mutaions.forEach(el => {
        if (el.target.hasAttribute('aria-label')) processData();
    });
})
function processData() {
    let testArr = Array.from(document.getElementsByClassName('oajrlxb2')).filter(el => el.href && el.href.match(regex2));
    if (testArr.length == 0) return;
    testArr.forEach(el => {
        pChild('test', el);
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
    tag.appendChild(document.createTextNode(content));
    tag.style.color = "red";
    body.appendChild(tag);
}