$(function () {
    let observer = new MutationObserver((mutations) => {
        for(let mutation of mutations) {
            if(mutation.addedNodes) {
                $('[data-text-ad="1"]').empty()
            }
        }
    });

    observer.observe(document.body, {
        childList    : true,
        attributes   : true,
        characterData: true,
        subtree      : true,
    });
});