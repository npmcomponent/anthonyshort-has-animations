var docStyle = document.body.style;
module.exports = "animation" in docStyle || "webkitAnimation" in docStyle || "MozAnimation" in docStyle;