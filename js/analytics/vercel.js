window.va = function() {
    (window.vaq = window.vaq || []).push(arguments);
};
window.va('beforeSend', (event) => {
    if (event.url.includes('secret')) return null;
    return event;
});