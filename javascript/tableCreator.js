var tableData = [];

    function createTable() {
      var table = document.getElementById("myTable");
      var columnsInput = document.getElementById("columns");
      var rowsInput = document.getElementById("rows");
      var columns = parseInt(columnsInput.value);
      var rows = parseInt(rowsInput.value);

      // Clear existing table
      while (table.firstChild) {
        table.removeChild(table.firstChild);
      }

      // Create table header
      var headerRow = document.createElement("tr");
      for (var i = 0; i < columns; i++) {
        var th = document.createElement("th");
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("class", "header-input");
        input.setAttribute("placeholder", "Column " + (i + 1));
        th.appendChild(input);
        headerRow.appendChild(th);
      }
      table.appendChild(headerRow);

      // Create table rows
      for (var i = 0; i < rows; i++) {
        var rowData = [];
        var row = document.createElement("tr");
        for (var j = 0; j < columns; j++) {
          var cell = document.createElement("td");
          cell.setAttribute("contenteditable", "true");
          cell.setAttribute("class", "editable-cell");
          cell.addEventListener("input", updateCell);
          rowData.push("");
          row.appendChild(cell);
        }
        table.appendChild(row);
        tableData.push(rowData);
      }
    }

    function updateCell(event) {
      var rowIndex = event.target.parentNode.rowIndex;
      var columnIndex = event.target.cellIndex;
      var value = event.target.textContent.trim();
      updateData(rowIndex, columnIndex, value);
    }

    function updateData(row, col, value) {
      tableData[row][col] = value;
    }

    function updateRow(row) {
      var table = document.getElementById("myTable");
      var rowData = tableData[row];
      var cells = table.rows[row + 1].cells;
      for (var i = 0; i < rowData.length; i++) {
        var value = cells[i].textContent.trim();
        rowData[i] = value;
      }
    }

    function deleteRow() {
      var deletionInput = document.getElementById("deletionInput");
      var row = parseInt(deletionInput.value);
      var table = document.getElementById("myTable");

      if (isNaN(row)){
        window.alert("Bitte gib eine Nummer größer als 0 und kleiner gleich " + (tableData.length-1) );
        return;
      } else if (!tableData[0]){
        window.alert("Da ist gar keine Tabelle. Du hast wohl die ganze Tabelle gelöscht du Schlingel. Lade einfach die Seite neu.");
        return;
      } else if (row < 0 || row > tableData.length-1){
        window.alert("Bitte gib eine Nummer größer als 0 und kleiner gleich " + (tableData.length-1) );
        return;
      }

      table.deleteRow(row);
      tableData.splice(row, 1);
    }

    function deleteColumn() {
      var table = document.getElementById("myTable");
      var rowCount = table.rows.length;
      var deletionInput = document.getElementById("deletionInput");
      var col = parseInt(deletionInput.value);
      console.log(col);
      if (isNaN(col)){
        window.alert("Bitte gib eine Nummer größer als 0 und kleiner gleich " + (tableData[0].length-1) );
        return;
      } else if (!tableData[0]){
        window.alert("Da ist gar keine Tabelle. Du hast wohl die ganze Tabelle gelöscht du Schlingel. Lade einfach die Seite neu.");
        return;
      } else if (col < 0 || col > tableData[0].length-1){
        window.alert("Bitte gib eine Nummer größer als 0 und kleiner gleich " + (tableData[0].length-1) );
        return;
      }
      
      for (var i = 0; i < rowCount; i++) {
        tableData[i].splice(col, 1);
        table.rows[i].deleteCell(col);
      }
      if (tableData[0].length == 0){
        tableData.splice(0, tableData.length);
      }
    }

    function addRow() {
      var table = document.getElementById("myTable");
      var columns = tableData[0].length;
      var rowData = [];
      var row = document.createElement("tr");
      for (var j = 0; j < columns; j++) {
        var cell = document.createElement("td");
        cell.setAttribute("contenteditable", "true");
        cell.setAttribute("class", "editable-cell");
        cell.addEventListener("input", updateCell);
        rowData.push("");
        row.appendChild(cell);
      }
      table.appendChild(row);
      tableData.push(rowData);
    }

    function addColumn() {
      var table = document.getElementById("myTable");
      var rows = table.rows.length;
      var columns = tableData[0].length;
      rowData = [];

      // Create table header
      var th = document.createElement("th");
      var input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("class", "header-input");
      input.setAttribute("placeholder", "New Column");
      th.appendChild(input);

      tableData[0].push("");
      table.rows[0].appendChild(th);
      
      // Create Editable cells in columns
      for (var i = 1; i < rows; i++) {
        var row = table.rows[i];

        var cell = document.createElement("td");
        cell.setAttribute("contenteditable", "true");
        cell.setAttribute("class", "editable-cell");
        cell.addEventListener("input", updateCell);

        tableData[i].push("");
        row.appendChild(cell);
      }

    }

    function displayData() {
      console.log("Tabellen Daten: ------------------------------------------------------------");
      for (i = 0; i < tableData.length; i++){
        for (j = 0; j < tableData[i].length; j++){
          console.log(tableData[i][j]);
        }
      }
      console.log(tableData);
      
    }

    function workinProgress() {
      const popup = document.getElementById("popupWorkInProgress");
      popup.style.visibility = 'visible';
      setTimeout(hide, 2000, popup);
    }

    function hide(popup){
      popup.style.visibility = 'hidden';
    }

    function readTable(){
      var table = document.getElementById("myTable");
      for (var i=0; i<table.length; i++){
        var rowData = []
        for (var j=0; j<table.rows[i].length; j++){
          rowData.push(table.rows[j].cell[j]);
        }
        tableData.push(rowData)
      }
      displayData();

      //see line 56
      var table = document.getElementById("myTable");
      var rowData = tableData[row];
      var cells = table.rows[row + 1].cells;
      for (var i = 0; i < rowData.length; i++) {
        var value = cells[i].textContent.trim();
        rowData[i] = value;
      }
    }

    function createPremadeTable(){
      var table = document.getElementById("myTable");
      var leitfragen = ["Was sollen die Schüler*innen wissen/können?", 
      "Was gibt es darüber hinaus inhaltlich noch zu wissen? (Inhalte, die S*S jetzt (noch) nicht brauchen)", 
      "Warum ist es wichtig, dass Schüler*innen genau das lernen?", 
      "Welche Vorgaben werden im Rahmenlehrplan/ Schulinternen Curriculum gemacht?", 
      "Welches Vorwissen besitzen die Schüler*innen zu diesem Thema?", 
      "Welche (Fehl-) Vorstellungen gibt es zu dieser Idee?", 
      "Welche Schwierigkeiten oder Einschränkungen im Zusammenhang mit der Vermittlung der Idee können auftreten?", 
      "Durch welche Faktoren (z.B. Klassenklima, Lernumgebung, etc.) kann die Vermittlung des Inhalts noch beeinflusst werden? (positiv und negativ)", 
      "Wie soll der Inhalt vermittelt werden? (z.B. Methoden, Vorgehen, Sozialformen, Experimente, Lernumgebung, etc.)", 
      "Warum soll der Inhalt auf diese Weise vermittelt werden?", 
      "Wie kann überprüft werden, was die Schüler*innen verstanden haben und wo es noch Verständnisschwierigkeiten gibt? (inkl. Bandbreite an möglichen Antworten)"];
      
      var columns = 3;

      // Clear existing table
      while (table.firstChild) {
        table.removeChild(table.firstChild);
      }

      // Create table header
      var rowData = [];
      var headerRow = document.createElement("tr");
      var th = document.createElement("th");
      th.textContent = "Leitfragen ↴ | Big Ideas → ";
      rowData.push(th.textContent);
      headerRow.appendChild(th);
      for (var i = 1; i < columns; i++) {
        var th = document.createElement("th");
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("class", "header-input");
        input.setAttribute("placeholder", "Big Idea " + i);
        th.appendChild(input);
        headerRow.appendChild(th);
        rowData.push("");
      }
      table.appendChild(headerRow);
      tableData.push(rowData)

      // Create table rows
      for (var i = 0; i < leitfragen.length; i++) {
        var rowData = [];
        var row = document.createElement("tr");
        var cell = document.createElement("td");
          cell.textContent = leitfragen[i];
          rowData.push(cell.textContent);
          row.appendChild(cell);
        for (var j = 1; j < columns; j++) {
          var cell = document.createElement("td");
            cell.setAttribute("contenteditable", "true");
            cell.setAttribute("class", "editable-cell");
            cell.addEventListener("input", updateCell);
          rowData.push("");
          row.appendChild(cell);
        }
        table.appendChild(row);
        tableData.push(rowData);
      }

    }