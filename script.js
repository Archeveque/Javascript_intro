function sayHello() {
    user_name = prompt('Tape ton nom ou conséquences :');
    if (user_name) {
        console.log(`Bonjour ${user_name} !`);
        document.write(`Bonjour ${user_name} !`);
    } else {
        console.log(`Ton nom est vachement null !`);
        document.write(`Ton nom est vachement null !`);
    }
}
function factorialize(num) {
    // If the number is less than 0, reject it.
    if (num < 0) 
          return -1;
      
    // If the number is 0, its factorial is 1.
    else if (num == 0) 
        return 1;
      
    // Otherwise, call the recursive procedure again
      else {
          return (num * factorialize(num - 1));
      }
    }
function calculs() {
    user_number = prompt("De quel nombre veux-tu calculer la factorielle ?");
    // Un prompt s'affiche avec la question suivante
    // Utilisateur rentre un nombre (par ex 4)
    // Dans la console le résultat suivant est affiché
    if (user_number) {
        user_number = factorialize(user_number) 
        console.log(`le resultat est ${user_number} !`);
        document.write(`le resultat est ${user_number} !`);
    } else {
        console.log(`c'est vide...`);
        document.write(`c'est vide!`);
}
}
function pyramid(){
    user_number = prompt("Combien d'étage tu veux ?");
    if (user_number) {
        for(let nb_row = 0; nb_row<=(user_number-1); nb_row++){
            let line = "";
            let line_html = "";
            for(let nb_space = 0; nb_space<=((user_number-1)-nb_row); nb_space++){
                line =(line + " ");
                line_html =(line_html + "&nbsp"+"&nbsp"+"&nbsp");
            }
            let bloc = ""
            for(let nb_bloc = 0; nb_bloc<=nb_row; nb_bloc++){
                bloc = (bloc + "#");
            }
                console.log(line + bloc);
                document.write(line_html + bloc + "<br>");
          }
        bloc_number = user_number
        console.log(`${user_number} lignes!`);
        document.write(`${user_number} lignes !`);
    } else {
        console.log(`c'est vide...`);
        document.write(`c'est vide!`);
}
}
function startup(){
    const entrepreneurs = [
        { first: 'Steve', last: 'Jobs', year: 1955 },
        { first: 'Oprah', last: 'Winfrey', year: 1954 },
        { first: 'Bill', last: 'Gates', year: 1955 },
        { first: 'Sheryl', last: 'Sandberg', year: 1969 },
        { first: 'Mark', last: 'Zuckerberg', year: 1984 },
        { first: 'Beyonce', last: 'Knowles', year: 1981 },
        { first: 'Jeff', last: 'Bezos', year: 1964 },
        { first: 'Diane', last: 'Hendricks', year: 1947 },
        { first: 'Elon', last: 'Musk', year: 1971 },
        { first: 'Marissa', last: 'Mayer', year: 1975 },
        { first: 'Walt', last: 'Disney', year: 1901 },
        { first: 'Larry', last: 'Page', year: 1973 },
        { first: 'Jack', last: 'Dorsey', year: 1976 },
        { first: 'Evan', last: 'Spiegel', year: 1990 },
        { first: 'Brian', last: 'Chesky', year: 1981 },
        { first: 'Travis', last: 'Kalanick', year: 1976 },
        { first: 'Marc', last: 'Andreessen', year: 1971 },
        { first: 'Peter', last: 'Thiel', year: 1967 }
      ];
        console.log(" Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70") ;
        document.write("<h3>Liste des entrepreneurs qui sont nés dans les années 70 :</h3>") ;
        entrepreneurs.forEach(index => {
            if (index.year <= 1979 && index.year >= 1970){
                console.log(index.first + " " + index.last+ "("+index.year+")");
                document.write(index.first + " " + index.last+ "("+index.year+")"+" age: "+(2023-index.year)+" ans"+"<br>");
                }
        });
        console.log(" Sors une array qui contient le prénom et le nom des entrepreneurs") ;
        document.write("<h3>Array qui contient le prénom et le nom des entrepreneurs:</h3>") ;
        let namearray=[]
        entrepreneurs.forEach(index => {
            namearray.push(index.first + " " + index.last);
        });
        namearray.forEach(index => {
            document.write(index + "<br>");
        });
        console.log(namearray)
        document.write("<h3> Par ordre alphabétique du nom de famille:</h3>") ;
        console.log(" Trie les entrepreneurs par ordre alphabétique du nom de famille.");
        entrepreneurs.sort(function (a, b) {
            if (a.last < b.last) {
              return -1;
            }
            if (a.last > b.last) {
              return 1;
            }
            return 0;
          });
          console.log(entrepreneurs)
          entrepreneurs.forEach(index => {
                document.write(index.first + " " + index.last+" age: "+(2023-index.year)+" ans"+"<br>");
        });

}
function book(){
    const books = [
        { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
        { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
        { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
        { title: 'Les frères Karamazov', id: 450911, rented: 55 },
        { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
        { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
        { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
        { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
        { title: 'La disparition', id: 364445, rented: 33 },
        { title: 'La lune seule le sait', id: 63541, rented: 43 },
        { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
        { title: 'Guerre et Paix', id: 748147, rented: 19 }
      ];
      console.log(books);
      console.log(Math.max(books.rented));
      
}
