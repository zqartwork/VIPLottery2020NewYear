let selectCustom = function() {
    let cs = $('.custom_select');
    let csMenu = $('.select_menu');
    let csMenuOpt = $('.select_menu li')

    cs.click(function() {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).children('.select_menu').slideToggle(300);
    })
    cs.focusout(function() {
        $(this).removeClass('active');
        $(this).children('.select_menu').slideUp(300);
    })
    csMenuOpt.click(function() {
        $(this).parents('.custom_select').find('.selected').text($(this).text());
        $(this).parents('.custom_select').find('#data_input').attr('value', $(this).attr('id'));
    })
};
let glowingFic = function() {
    let bag = $('.lk_item');
    let rec = $('.btn_record');
    console.log(bag)
    bag.click(function() {
        $(this).children('img').attr('href', 'img/gh_lucky_bag_af.png')
        $(this).addClass('glow');
        let ref = $(this).attr('ref');
        setTimeout(function() {
            bag.removeClass('glow');
            console.log(ref)
            $(".inner-content." + ref).show();
        }, 1500);
        setTimeout(function() {
            $('#popup').fadeIn();
            $('body').addClass('pop');
        }, 2000);
    })
    rec.click(function() {
        let ref = $(this).attr('ref');
        $(".inner-content." + ref).show();
        $('#popup').fadeIn();
        $('body').addClass('pop');
    })
}
let popCloser = function() {
    let closer = $('.pop-closer');
    console.log(closer)
    closer.click(function() {
        $('#popup').fadeOut(100);
        $('body').removeClass('pop');
        $(".inner-content.fail, .inner-content.suc, .inner-content.records").hide();
    })
    $('.popup-wrapper').click(function(e) {
        console.log(e.target)
        if (e.target !== this)
            return;

        $('#popup').fadeOut(100);
        $('body').removeClass('pop');
        $(".inner-content.fail, .inner-content.suc, .inner-content.records").hide();
    })
}
let scrollStart = function() {
    $('.for-to').click(function() {
        $('html, body').animate({
            scrollTop: $("#LK").offset().top
        }, 2000);
    })
}