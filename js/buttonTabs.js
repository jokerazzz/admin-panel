$('.tabgroup > div').hide();
$('.tabgroup > div:first-of-type').show();
$('.tabs-button a').click(function(e){
  e.preventDefault();
    var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs-button').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();
  
})
    