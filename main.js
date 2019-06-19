var tid = null;
$(window).scroll(function() {
  if (tid) return;
  tid = setTimeout(function() {
    tid = null;
    var el = document.documentElement.querySelector('.absolutesticky');
    var r = el.getBoundingClientRect();
    if (r.left <= 0 && r.right >= window.innerWidth) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  }, 100);
});
