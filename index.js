function trim(s) {
  return s.replace(/(^\s+)|(\s+$)/, '');
}

exports.hasClass = function hasClass(classes, name) {
  var exp = new RegExp('(^|\\s+)' + name + '(\\s+|$)');
  return exp.test(classes);
};

exports.removeClass = function removeClass(classes, name) {
  var exp = new RegExp('(^|\\s+)' + name + '(\\s+|$)');
  return trim(classes.replace(exp, ''));
};

exports.addClass = function addClass(classes, name) {
  return hasClass(classes, name)
    ? classes
    : classes + ' ' + name;
};

exports.toggleClass = function toggleClass(classes, name) {
  return hasClass(classes, name)
    ? removeClass(classes, name)
    : classes + ' ' + name;
};

exports.swapClasses = function swapClasses(classes, a, b) {
  return hasClass(classes, a)
    ? addClass(removeClass(classes, a), b)
    : addClass(removeClass(classes, b), a);
};
