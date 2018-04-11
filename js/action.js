/* pro.html 产品页面 操作js*/
function changeButtonLightPro() {
    var url = location.href;
    var search = location.search;
    var num = search.substr(search.length - 1);
    var arr = $("#menu").find('a');
    if (num == 1) {
        $(".nytit").find('h2').text('仪器维修');
        $(".mbxwrap").find('em').text('仪器维修');
        arr.each(function(index) {
            if (num == (index + 1)) {
                $(this).addClass('cur');
            } else {
                $(this).removeClass('cur');
            }
        });
    } else if (num == 2) {
        $(".nytit").find('h2').text('产品订制');
        $(".mbxwrap").find('em').text('产品订制');
        arr.each(function(index) {
            if (num && num == (index + 1)) {
                $(this).addClass('cur');
            } else {
                $(this).removeClass('cur');
            }
        });
    } else if (num == 3) {
        $(".nytit").find('h2').text('仪器销售');
        $(".mbxwrap").find('em').text('仪器销售');
        arr.each(function(index) {
            if (num && num == (index + 1)) {
                $(this).addClass('cur');
            } else {
                $(this).removeClass('cur');
            }
        });
    } else {

    }
}

function setHighlightPro(num) {
    var arr = $("#menu").find('a');
    if (num == 1) {
        $(".nytit").find('h2').text('仪器维修');
        $(".mbxwrap").find('em').text('仪器维修');
        arr.each(function(index) {
            if (num == (index + 1)) {
                $(this).addClass('cur');
            } else {
                $(this).removeClass('cur');
            }
        });
    } else if (num == 2) {
        $(".nytit").find('h2').text('产品订制');
        $(".mbxwrap").find('em').text('产品订制');
        arr.each(function(index) {
            if (num && num == (index + 1)) {
                $(this).addClass('cur');
            } else {
                $(this).removeClass('cur');
            }
        });
    } else if (num == 3) {
        $(".nytit").find('h2').text('仪器销售');
        $(".mbxwrap").find('em').text('仪器销售');
        arr.each(function(index) {
            if (num && num == (index + 1)) {
                $(this).addClass('cur');
            } else {
                $(this).removeClass('cur');
            }
        });
    } else {

    }
}

/* pro.html 产品页面 操作js*/

/* about.html 企业介绍页面 操作js*/

function changeButtonLightAbout() {
    var url = location.href;
    var search = location.search;
    var num = search.substr(search.length - 1);
    var arr = $("#menu").find('a');
    if (num == 1) {
        arr.each(function(index) {
            if (num == (index + 1)) {
                $(this).addClass('cur');
            } else {
                $(this).removeClass('cur');
            }
        });
    } else if (num == 2) {
        $(".nytit").find('h2').text('企业文化');
        $(".mbxwrap").find('em').text('企业文化');
        arr.each(function(index) {
            if (num && num == (index + 1)) {
                $(this).addClass('cur');
            } else {
                $(this).removeClass('cur');
            }
        });
    } else {

    }
}

function setHighlightAbout(num) {
    var arr = $("#menu").find('a');
    if (num == 1) {
        $(".nytit").find('h2').text('公司简介');
        $(".mbxwrap").find('em').text('公司简介');
        $(".culture").hide();
        $(".profile").show();
        arr.each(function(index) {
            if (num == (index + 1)) {
                $(this).addClass('cur');
            } else {
                $(this).removeClass('cur');
            }
        });
    } else {
        $(".nytit").find('h2').text('企业文化');
        $(".mbxwrap").find('em').text('企业文化');
        $(".culture").show();
        $(".profile").hide();
        arr.each(function(index) {
            if (num && num == (index + 1)) {
                $(this).addClass('cur');
            } else {
                $(this).removeClass('cur');
            }
        });
    }
}

/* about.html 企业介绍页面 操作js*/