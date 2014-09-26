var oDoc, sDefTxt;

function loading() {
  oDoc = document.getElementById("textArea");
  sDefTxt = oDoc.innerHTML;
  if (document.all) {
      oDoc.innerHTML = oDoc.innerText;
    } else {
      oContent = document.createRange();
      oContent.selectNodeContents(oDoc.firstChild);
      oDoc.innerHTML = oContent.toString();
    }
  oDoc.contentEditable = true; 
  oDoc.focus();
}

function executeCommand(sCmd, sValue) {
  document.execCommand(sCmd, false, sValue); oDoc.focus();
}