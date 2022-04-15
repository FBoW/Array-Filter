function debounce(fn, delay) {
	var timer = null;
	return function () {
	  clearTimeout(timer);
	  var self = this,
		args = arguments;
	  timer = setTimeout(function () {
		fn.apply(self, args);
	  }, delay);
	};
  }