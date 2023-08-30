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
      var rowIndex = event.target.parentNode.rowIndex - 1;
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
      table.deleteRow(row);
      tableData.splice(row, 1);
    }

    function deleteColumn() {
      var deletionInput = document.getElementById("deletionInput");
      var col = parseInt(deletionInput.value);
      var table = document.getElementById("myTable");
      var rowCount = table.childElementCount;
      
      for (var i = 0; i < rowCount; i++) {
        tableData.splice(col-1, 1);
      }
      for (var i = 0; i < rowCount; i++) {
        table.rows[i].deleteCell(col-1);
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
      var rows = tableData.length;
      var columns = tableData[0].length;

      // Create table header
      var th = document.createElement("th");
      var input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("class", "header-input");
      input.setAttribute("placeholder", "New Column");
      th.appendChild(input);

      table.rows[0].appendChild(th);
      
      for (var i = 0; i < rows; i++) {
        var row = table.rows[i+1];

        var cell = document.createElement("td");
        cell.setAttribute("contenteditable", "true");
        cell.setAttribute("class", "editable-cell");
        cell.addEventListener("input", updateCell);

        tableData[i].push("");
        row.appendChild(cell);
      }

    }

    function displayData() {
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