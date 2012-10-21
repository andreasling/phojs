var execute = function() {
	try {
		document.getElementById("error").innerHTML = "";
		var source = getSource();
		eval(source);
	}
	catch (exception) {
		document.getElementById("error").innerHTML = "[!] " + exception.message;
		alert(exception);
	}
};

var getSource = function() {
	if (typeof(editor) !== "undefined")
		editor.save();
	var source = document.getElementById("source").value;
	return source;
};

var setSource = function(source) {
	document.getElementById("source").value = source;
	if (typeof(editor) !== "undefined")
		editor.setValue(source);
};

var save = function() {
	if (typeof(Storage) !== "undefined") {
		localStorage.source = getSource();
	}
};

var load = function() {
	if (typeof(Storage) !== "undefined") {
		setSource(localStorage.source);
	}
};

var init = function () {
	if (typeof(Storage) !== "undefined" && 
		typeof(localStorage.source) !== "undefined" && 
		localStorage.source !== null &&
		localStorage.source !== "") {
		load();
	}

	if (typeof(CodeMirror) !== "undefined") {
		window.editor = CodeMirror.fromTextArea(document.getElementById("source"), {
			mode:  "javascript", 
			lineNumbers: true,
			matchBrackets: true,
			theme: "monokai"
		});
	}
};

