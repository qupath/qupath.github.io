(function () {
  var htmlElement = document.documentElement;

  if (navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)) {
    // console.log(navigator.platform);
    // if (navigator.platform == "MacIntel") {
    //   htmlElement.className = "macIntel";
    // } else {
      htmlElement.className = "macAll";
    // }
  } else if (navigator.platform.match(/(Win16|Win32|Android)/i)) {
    htmlElement.className = "win";
    console.log(navigator.platform);
  } else if (
    navigator.platform.match(
      /(Linux i686|Linux armv7l|Linux x86_64|Linux x86_64)/i
    )
  ) {
    htmlElement.className = "lin";
  } else {
    htmlElement.className = "default";
  }
})();
