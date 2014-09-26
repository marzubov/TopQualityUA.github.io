var textArea;

function loading() {
  var handleDrag = function(e) {
    e.stopPropagation();
    e.preventDefault();
  };
  var handleDrop = function(e) {
    e.stopPropagation();
    e.preventDefault();
    x = e.clientX;
    y = e.clientY;
    var file = e.dataTransfer.files[0];

    if (file.type.match('image.*')) {
      var reader = new FileReader();
      
      reader.onload = (function(theFile) {
        var dataURI = theFile.target.result;
        var img = document.createElement("img");
        img.src = dataURI;

        if (document.caretPositionFromPoint) {
          var pos = document.caretPositionFromPoint(x, y);
          range = document.createRange();
          range.setStart(pos.offsetNode, pos.offset);
          range.collapse();
          range.insertNode(img);
        }
        else if (document.caretRangeFromPoint) {
          range = document.caretRangeFromPoint(x, y);
          range.insertNode(img);
        }
        else
        {
          console.log("don't support IE");
        }
      });                    
      reader.readAsDataURL(file);
    }
  };
  var dropZone = document.getElementById('textArea');
  dropZone.addEventListener('dragover', handleDrag, false);
  dropZone.addEventListener('drop', handleDrop, false);
  textArea = document.getElementById("textArea");  
}

function executeCommand(sCmd, sValue) {
  document.execCommand(sCmd, false, sValue); textArea.focus();
}