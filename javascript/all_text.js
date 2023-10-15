// for translation purposes to have an overview over all texts that have to be translated all texts should be stored in a dictionary and be given out with the respected langauge keyword
// either all texts should be stored in a single dict or each text gets its own dict. Dont know what is better yet.



var allText = {
    navigation: {
        en: ["Start", "Single", "Multi", "Table" ],
        de: ["Start", "Einzel", "Mehrzahl", "Tabelle" ]
      },

    header: {
      en: ["Content Representation"],
      de: ["Darstellung der Inhalte"]
    },
    
    description: {
        en: [ "Edit the Content Representation by...",
        "... identifying the Big Ideas of a topic based on your subject knowledge and writing them down as keywords in the first line and",
        "... discuss the Big Ideas against the background of your pedagogical and didactical knowledge along the guiding questions column by column.",
        "(It is recommended to record thoughts in detailed bullet points or complete sentences)." ],

        de: ["Bearbeiten Sie die Content Representation indem Sie...",
        "... auf Grundlage Ihres fachlichen Wissens die Big Ideas einer Thematik identifizieren und als Keywords in der ersten Zeile festhalten und",
        "... die Big Ideas vor dem Hintergrund Ihres pädagogischen und fachdidaktischen Wissens entlang der Leitfragen spaltenweise diskutieren.",
        "(Es empfiehlt sich Gedanken in ausführlichen Stichpunkten oder vollständigen Sätzen festzuhalten.)" ]
    },

    leitfragen: {
        en: ["What do you want pupils to know/be able to do?", 
        "What else is there to know about the content? (Content that S*S does not (yet) need)", 
        "Why is it important for students to learn just that?", 
        "What specifications are made in the framework curriculum/internal school curriculum?", 
        "What prior knowledge do the students have on this topic?", 
        "What are the (mis)conceptions of this idea?", 
        "What difficulties or limitations related to communicating the idea may arise?", 
        "What other factors (e.g., classroom climate, learning environment, etc.) can influence the teaching of the content? (positive and negative)", 
        "How should the content be taught? (e.g. methods, procedure, social forms, experiments, learning environment, etc.)", 
        "Warum soll der Inhalt auf diese Weise vermittelt werden?", 
        "How to check what the students have understood and where there are still difficulties in understanding? (incl. range of possible answers)"],

        de: ["Was sollen die Schüler*innen wissen/können?", 
        "Was gibt es darüber hinaus inhaltlich noch zu wissen? (Inhalte, die S*S jetzt (noch) nicht brauchen)", 
        "Warum ist es wichtig, dass Schüler*innen genau das lernen?", 
        "Welche Vorgaben werden im Rahmenlehrplan/ Schulinternen Curriculum gemacht?", 
        "Welches Vorwissen besitzen die Schüler*innen zu diesem Thema?", 
        "Welche (Fehl-) Vorstellungen gibt es zu dieser Idee?", 
        "Welche Schwierigkeiten oder Einschränkungen im Zusammenhang mit der Vermittlung der Idee können auftreten?", 
        "Durch welche Faktoren (z.B. Klassenklima, Lernumgebung, etc.) kann die Vermittlung des Inhalts noch beeinflusst werden? (positiv und negativ)", 
        "Wie soll der Inhalt vermittelt werden? (z.B. Methoden, Vorgehen, Sozialformen, Experimente, Lernumgebung, etc.)", 
        "Warum soll der Inhalt auf diese Weise vermittelt werden?", 
        "Wie kann überprüft werden, was die Schüler*innen verstanden haben und wo es noch Verständnisschwierigkeiten gibt? (inkl. Bandbreite an möglichen Antworten)"]
    }

    
};


var language = document.documentElement.lang;

console.log(document.documentElement.lang);
function setLanguage() {
    var languageSetting = document.getElementById("language");
    var language = languageSetting.value;
    console.log(language);
}



function get_text(keyword, write__html = true, contentIndex = 0){
    if (write__html){
        document.write(allText[keyword][language][contentIndex]);
    }
    else {
        return allText[keyword][language];
    }
}



/*
// this should somehow trigger the get_text funtion again but with the same parameters
function translate_text(event) {
    event.target.innerHTML = get_text(keyword, write__html = true, contentIndex = 0)
}
// need to Add an event listener to every translatable textfield
// Create the event
var event = new CustomEvent("translation", { translate_text });
  
// Dispatch/Trigger/Fire the event at the language HTML element with  "onchange = dispatchEvent('translation');"

*/
