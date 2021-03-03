



window.onload = function () {
    var Personnes = [];
    class personne {
        constructor(n, m, a) {
            this.avatar = a;
            this.name = n;
            this.mail = m;
        }

        aff() {
            console.log("Nom : " + this.name + " Mail : " + this.mail);
        }

    }

    document.getElementById("btn_js").onclick = function () // Interception du click sur le bouton
    {

    get_users(1);

    };

    get_users = page => {

        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://reqres.in/api/users?page=" + page, true);
        xhr.onload = function () {
            var html = "";
            if (xhr.status == 200) {

                var rep = this.response;
                var data = rep.data;

                console.log(rep);

                var Personnes = [];
                var PageActuelle = rep.page;
                var PageTotal = rep.total_pages;


                for (var i = 0; i < data.length; i++) {
                    console.log(data[i].id);
                    Personnes.push(new personne(data[i].last_name, data[i].email, data[i].avatar));
                    html += "<div><p>" + Personnes[i].name + "</p><p><a href=mailto:" + Personnes[i].mail + ">" + Personnes[i].mail + "</a></p><img src=" + Personnes[i].avatar + "></div>";
                }

                if (page % 2 == 1) {
                    html += "<a href='#' onclick='get_users(2);'>Page Suivante</a>";
                }
                else {
                    html += "<a href='#' onclick='get_users(1);'>Page Précédente</a>";
                }
                document.getElementById("js_result").innerHTML = html;
            }
            else { }
        };
        xhr.responseType = "json";
        xhr.send(); //Envoi de la requête au serveur (asynchrone par défaut)
    }






    $("#btn_jquery").click(function () {
        $.ajax({
            url: "https://reqres.in/api/users/", type: "POST",
            data: { name: "your_name", job: "what_you_want", place: "where_you_want" },dataType:"json", success: function (response, textStatus, xhr) {
                var html = '';
                if (xhr.status == 201) {

                    html += JSON.stringify(response) +"</br>";
                    
                    $.each(response, function(index, el) {

                        html+="<p>element at " + index + ": " + el + "</p>";
                    });
                    
                }
                else {
                }
                $('#jquery_result').html(html);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $('#jquery_result').html('Error: ' + xhr.status); console.log(thrownError);
            }
        });
    });
    
    

    $('#ville').on('input',function () {
        if($('#ville').val().length > 4) {
        $( "#ville_result" ).html("");



        fetch("https://apicarto.ign.fr/api/codes-postaux/communes/"+$('#ville').val(), {
            method: 'GET',
            headers: {
                "Content-Type": "text/plain;charset=UTF-8" //pour un corps de type chaine
              }


        })
        .then(response => response.json())
        .then(data => {
            var availableTags = [];
            for( var i = 0; i < data.length; i++ ) {
                //$( "#ville_result" ).append( "Name : " + data[i].nomCommune +"</br>");
                availableTags.push(data[i].nomCommune);
            }
            $( "#ville_nom" ).autocomplete({source: availableTags});
        })
        .catch(error => alert("Erreur : " + error));

        /*$.get("https://apicarto.ign.fr/api/codes-postaux/communes/"+$('#ville').val(), function( data ) {
            
            var availableTags = [];
            
            for( var i = 0; i < data.length; i++ ) {
                //$( "#ville_result" ).append( "Name : " + data[i].nomCommune +"</br>");
                availableTags.push(data[i].nomCommune);
            }
            $( "#ville_nom" ).autocomplete({source: availableTags});
          }, "json" )
          .fail(function() {
            $( "#ville_result" ).html("Erreur, mauvais code postal");
          })*/
        
        }
    })
    

};