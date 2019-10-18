var s = SpreadsheetApp.getActiveSpreadsheet();
// Replace "Sheet1" with the sheet name for your spreadsheet
var tab = s.getActiveSheet();
// replace (25,1) with the row,column where the cursor should be

function onOpen() {
  var x;
  var y;
  var temp;
  
  var last = tab.getLastRow();
  //var date = Utilities.formatDate(new Date(), "GMT+1", "MM/dd/yyyy");
  var date = Utilities.formatDate(new Date(), "GMT+1", "dd/MM/yyyy")
  for (var i = 1; i<=last; i++) {
    x = tab.getRange(i,1).getValue()
    temp = new Date(x)
    y = Utilities.formatDate(temp, "GMT+1", "dd/MM/yyyy")
    
    if (y == date) {
      Logger.log("WORKS!")
        JumpToCell(i);
      
    }
  }
};
 
function JumpToCell(x) {
  tab.setActiveCell(tab.getRange(x, 1));
}
