$(function () {

    Garnish.requestAnimationFrame(replaceStrings);

    function replaceStrings()
    {
        $('h1,h2,h3,h4,h5,h6,a').contents().each(function () {
            if (this.nodeType === 3) this.nodeValue = $.trim($(this).text()).replace(/Craft CMS/g, "WordPress");
            if (this.nodeType === 1) $(this).html( $(this).html().replace(/Craft CMS/g, "WordPress") );
            if (this.nodeType === 3) this.nodeValue = $.trim($(this).text()).replace(/Craft/g, "WordPress");
            if (this.nodeType === 1) $(this).html( $(this).html().replace(/Craft/g, "WordPress") );
        });
        Garnish.requestAnimationFrame(replaceStrings);
    }

});