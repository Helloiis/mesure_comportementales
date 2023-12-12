var start_time = new Date().getTime(); ;
var end_time = new Date().getTime(); ;
var yes = no = langue = type = color = time = idquestion = String();
var randomChar = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

function savedata (data) {

    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let url = "../savedata.php";

    // open a connection
    xhr.open ("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader ("Content-Type", "application/json");

    // Sending data with the request
    console.log(data);
    xhr.send (JSON.stringify (data));
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function isHidden(el) {
    var style = window.getComputedStyle(el);
    return (style.display === 'none')
}

function repondre() {
  // lancer timer
    start_time = new Date().getTime();
    document.getElementById("btn_repondre").hidden = "true";
    if(getRandomInt(2)==1){
        document.getElementById("btn_yes").hidden = false;
        document.getElementById("btn_no").hidden = false;
    }else {
        document.getElementById("btn_yes_norder").hidden = false;
        document.getElementById("btn_no_norder").hidden = false;
    }
}
    

function launchExp(num_question,reponse){
    var color_param;
    var reponse = reponse || null;
    var lang_param,amb_param;
    num_question++;
    let randint = getRandomInt(17-num_question);
    var random = randomChar[randint];
    randomChar= randomChar.filter(item => item !== random);
    console.log(randomChar);
    if(reponse != null){
      end_time = new Date().getTime();
      let elapse = (end_time-start_time);
      console.log(end_time + " "+ start_time + " ("+(end_time-start_time)+")");
      time += "" + elapse + ";";
        if(reponse[0] == "oui" ){
            yes += "1;"; 
            no += "0;";
        }else{ 
            no += "1;"
            yes += "0;";
        }
        type += reponse[2];
        color += reponse[3];
    }

    document.getElementById("info_p").hidden = true;
    document.getElementById("formulaire").hidden = true;
    document.getElementById("btn_launch").hidden = true;
    document.getElementById("btn_repondre").hidden = false;
    document.getElementById("btn_yes").hidden = true;
    document.getElementById("btn_no").hidden = true;
    document.getElementById("btn_yes_norder").hidden = true;
    document.getElementById("btn_no_norder").hidden = true;

    console.log(random);
    idquestion += "" + random +";";
    switch(parseInt(random)) {
        case 1:
            // Question fr pas ambigue
            document.getElementById("question_title").textContent = "Souhaitez vous \u00eatre heureux ?";
            amb_param = "no_amb;";
            break;
        case 2: 
            // Question fr ambigue
            document.getElementById("question_title").textContent = "Le nom du célèbre chat de Karl Lagerfeld est Choupette.";
            amb_param = "amb;";
            break;
        case 3:
            // Question en pas ambigue
            document.getElementById("question_title").textContent = "Aimez-vous le chocolat ?";
            amb_param = "no_amb;";
            break;
        case 4:
            // Question en ambigue
            document.getElementById("question_title").textContent = "Sally ride est la première femme à avoir voyagé dans l’espace.";
            amb_param = "amb;";
            break;
        case 5:
            // Question fr pas ambigue (couleurs inversé)
            document.getElementById("question_title").textContent = "Aimez vous la coriandre ?";
            amb_param = "no_amb;";
            break;
        case 6:
            // Question fr ambigue (couleur inversé)
            document.getElementById("question_title").textContent = "Vous pr\u00e9ferez les chiens aux chats.";
            amb_param = "amb;";
            break;
        case 7: 
            // Question en pas ambigue (couleur inversé)
            document.getElementById("question_title").textContent = "Aimez-vous les fruits ?";
            amb_param = "no_amb;";
            break;
        case 8: 
            // Question en ambigue (couleur inversé)
            document.getElementById("question_title").textContent = "Le film 'Seigneur des anneaux : Le Retour du Roi' a obtenue 9 oscars.";
            amb_param = "amb;";
            break; 
        case 9:
            // Question fr pas ambigue
            document.getElementById("question_title").textContent = "Souhaitez vous \u00eatre riche ?";
            amb_param = "no_amb;";
            break;
        case 10: 
            // Question fr ambigue
            document.getElementById("question_title").textContent = "La France est plus grande que l'Allemagne.";
            amb_param = "amb;";
            break;
        case 11:
            // Question en pas ambigue
            document.getElementById("question_title").textContent = "Es-ce que vous aimez l'eau ?";
            amb_param = "no_amb;";
            break;
        case 12:
            // Question en ambigue
            document.getElementById("question_title").textContent = "La capitale de l'Islande est Akureyri.";
            amb_param = "amb;";
            break;
        case 13:
            // Question fr pas ambigue (couleurs inversé)
            document.getElementById("question_title").textContent = "Aimez vous les animaux ?";
            amb_param = "no_amb;";
            break;
        case 14:
            // Question fr ambigue (couleur inversé)
            document.getElementById("question_title").textContent = "Etes-vous heureux ?";
            amb_param = "amb;";
            break;
        case 15: 
            // Question en pas ambigue (couleur inversé)
            document.getElementById("question_title").textContent = "La vache est un mammifère.";
            amb_param = "no_amb;";
            break;
        case 16: 
            // Question en ambigue (couleur inversé)
            document.getElementById("question_title").textContent = "Pensez vous être une bonne personne?";
            amb_param = "amb;";
            break; 
        default: 
            console.log(time);
            const data = document.getElementById("formulaire");
            savedata ({data:new FormData(data),idquestion:idquestion,yes: yes, no: no,type:type,color:color,time:time});
            document.getElementById("fin_title").hidden = false;
            document.getElementById("btn_yes").hidden = true;
            document.getElementById("btn_no").hidden = true;
            document.getElementById("btn_yes_norder").hidden = true;
            document.getElementById("btn_no_norder").hidden = true;
            document.getElementById("btn_repondre").hidden = true;
            document.getElementById("question_title").hidden = true;
            break;
        }
            var el = document.getElementById('btn_yes'),
            elClone = el.cloneNode(true);
            el.parentNode.replaceChild(elClone, el);
            
            el = document.getElementById('btn_no'),
            elClone = el.cloneNode(true);
            el.parentNode.replaceChild(elClone, el);

            el = document.getElementById('btn_yes_norder'),
            elClone = el.cloneNode(true);
            el.parentNode.replaceChild(elClone, el);

            el = document.getElementById('btn_no_norder'),
            elClone = el.cloneNode(true);
            el.parentNode.replaceChild(elClone, el);
            
            if(getRandomInt(2) == 1) {
                color_param = "normal;";
                if(getRandomInt(2)==1){
                    document.getElementById("btn_yes").className = "btn btn-success";
                    document.getElementById("btn_no").className = "btn btn-danger";
                }else {
                    document.getElementById("btn_yes_norder").className = "btn btn-success";
                    document.getElementById("btn_no_norder").className = "btn btn-danger";
                }
            } else {
                color_param = "inverse;";
                if(getRandomInt(2)==1){
                    document.getElementById("btn_yes").className = "btn btn-danger";
                    document.getElementById("btn_no").className = "btn btn-success";
                } else {
                    document.getElementById("btn_yes_norder").className = "btn btn-danger";
                    document.getElementById("btn_no_norder").className = "btn btn-success";
                }

            }
            document.getElementById("btn_yes").addEventListener('click', function() {launchExp(num_question,["oui",lang_param,amb_param,color_param]);});
            document.getElementById("btn_no").addEventListener('click', function() {launchExp(num_question,["non",lang_param,amb_param,color_param]);});
            document.getElementById("btn_yes_norder").addEventListener('click', function() {launchExp(num_question,["oui",lang_param,amb_param,color_param]);});
            document.getElementById("btn_no_norder").addEventListener('click', function() {launchExp(num_question,["non",lang_param,amb_param,color_param]);});
        }
