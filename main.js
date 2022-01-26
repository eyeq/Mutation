$(function () {
    const blockUrls = [
    ]

    let changed = true;
    let func = function() {
        if(changed) {
            changed = false;
            
            // Google Search
            $('[data-text-ad="1"]').remove();
            
            // Dummy iframe
            $('iframe:not([src])').remove();
            $('iframe[src="about:blank"]').remove();
            
            for(let url of blockUrls) {
                $('[src*="' + url + '"]').remove();
                $('[style*="' + url + '"]').remove();
            }
            for(let url of blockUrls) {
                $('[href*="' + url + '"] *').css('text-decoration', 'line-through');
                $('[href*="' + url + '"]').css('text-decoration', 'line-through').removeAttr('href');
            }
        }
    };

    func();
    setInterval(func, 100);

    let observer = new MutationObserver((mutations) => {
        for(let mutation of mutations) {
            if(mutation.addedNodes) {
                changed = true;
            }
        }
    });
    observer.observe(document.body, {
        childList    : true,
        attributes   : true,
        characterData: true,
        subtree      : true,
    });
    
    
    document.body.addEventListener = function() {};
});
