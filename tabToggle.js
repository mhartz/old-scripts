// toggle dropdowns
function tabToggle(trigger, content) {
  function toggleOff() {
    $(trigger).removeClass('active');
    $(trigger).next(content).hide();
  }

  $(trigger).click(function() {
    if(!$(this).hasClass('active')) {
      toggleOff();
      $(this).addClass('active');
      $(this).next(content).show();
    }
    else {
      toggleOff();
    }
  });
}

tabToggle(".ddTrigger", ".hide");