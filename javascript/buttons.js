//Die folgenden Funktionen sind für die Buttons und download

function segmentCSV(){
    let text = document.getElementById("textfield").value;
    let file = new File([text],"segmentiert");
    download("csv",file);
}

function segmentTXT(){
    let text = document.getElementById("textfield").value;
    let file = new File([text],"segmentiert");
    download("txt",file);
}

function countCSV(){
    let result = counting();
    let anzahl = result[0];
    let liste = result[1];

    let text = "Gesamt;"+anzahl;

    for(el of liste){
        text = text+"\n"+el.join(';')
    }
    let file = new File([text],"count")
    download("csv",file)
}

function download(type, file){
    let a = document.createElement("a");
    a.href = window.URL.createObjectURL(file);
    a.download = `${file.name}.${type}`;
    a.click();
    window.URL.revokeObjectURL(a.href);
    a.remove();
}


async function segmentAll(){
    /*with Promise.allSettled we resolve all promises in the array
    as
    - {status:"fulfilled", value:result} for successful responses,
    - {status:"rejected", reason:error} for errors.
    */
    let results = await Promise.allSettled(userFiles.map(file =>reader(file)));

    //now for every result
    results.forEach((result,num) =>{
        if(result.status ==  "fulfilled"){
            
            //TODO : File erstellen, das in die export liste packen, dafür die addVisuell und delete umschreiben, damit das für beide Listen klappt


            result.value.result



        }
        if(result.status == "rejected"){
            //if it does not work we get an alert
            alert(`${userFiles[num].name} hat nicht geklappt aufgrund ${result.reason}`);
        }
    })
}


function fragebogenZuTXT(){
    let table = document.getElementById("myTable");
    let tableString = "";
    for (let i = 0, row; row = table.rows[i]; i++){
        for (let j = 0, col; col = row.cells[j]; j++){
            tableString += col.textContent + '; ';
        }
        tableString += "\n";
      }
    let file = new File([tableString],"fragebogentabelle")
    download("txt",file)
  }
  
  function fragebogenZuCSV(){
    let rowStrings = [];
    for (let i = 0, row; row = tableData[i]; i++){
        rowStrings.push( row.join(";") );
    }
    let tableString = rowStrings.join("\n")

    let file = new File([tableString],"fragebogentabelle")
    download("csv",file)
  }


  function submit(){
    let text;

    //creating pseudonym for saving submitted data
    let ableToExit = false;
    while (!ableToExit){
        let pseudonym = prompt("Bitte geben Sie hier Ihr Pseudonym ein. Das Pseudonym ergibt sich wie folgt:\n" +
                        "1. Verwenden Sie die ersten beiden Buchstaben des Vornamens Ihrer Mutter,\n" +
                        "2. die ersten beiden Buchstaben des Vornamens Ihres Vaters,\n" +
                        "3. die ersten beiden Buchstaben Ihres Geburtsortes, sowie\n" +
                        "4. die ersten beiden Ziffern Ihres Geburtsdatums.",
                         "Alice, Bob, Potsdam, 01.02.2000 --> ALBOPO01");
        // strip spaces from pseudonym
        // check for general correctness of pseudonym

        if (pseudonym == null || pseudonym == "") 
        {
            text = "User cancelled the prompt.";
            ableToExit = true;
        } else if (pseudonym.length != 8)
        {
            alert("Die Länge des Pseodonms stimmt nicht. Bitte achten Sie auch darauf, dass keine Leerzeichen dazwischen sind.");
        } else {
            text = "Das Pseudonym lautet wie folgt: " + pseudonym;
            ableToExit = true;
        }
    }
    
    document.getElementById("demo").innerHTML = text;

  }