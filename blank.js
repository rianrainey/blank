$("a").each(function() {
  var a;
  a = new RegExp("/" + window.location.host + "/");
  if (!a.test(this.href)) {
    return $(this).click(function(event) {
      event.preventDefault();
      event.stopPropagation();
      return window.open(this.href, "_blank");
    });
  }
});
