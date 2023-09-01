(function () {
  var htmlElement = document.documentElement;

  if (navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)) {
    htmlElement.className = "mac";
  } else if (navigator.platform.match(/(Win16|Win32|Android)/i)) {
    htmlElement.className = "win";
  } else if (navigator.platform.match(/(Linux i686|Linux armv7l|Linux x86_64|Linux x86_64)/i)) {
    htmlElement.className = "lin";
  } else {
    htmlElement.className = "default";
  }

  // console.log(htmlElement.className);
})();
