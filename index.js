let nome ="Arautos";
let xp = 10000;

switch (true) {

  case (xp === 1000):

    console.log("O herói de nome " + nome + " está no nivel ferro");
    break;

  case (xp >= 1001 && xp <= 2000):
    console.log("O herói de nome " + nome + " está no nivel bronze");
    break;
   
case (xp >= 2001 && xp <= 5000):

console.log("O herói de nome " + nome + " está no nivel prata");
         break;

case (xp >= 5001 && xp <= 7000):

 console.log("O herói de nome " + nome + " está no nivel Ouro");
 break; 

 case (xp >= 7001 && xp <= 8000):

            console.log("O herói de nome " + nome + " está no nivel Platina");
            break;
case (xp >= 8001 && xp <= 9000):

console.log("O herói de nome " + nome + " está no nivel Ascendente");

 break;
    
 case (xp >= 9001 && xp <= 10000):
        console.log("O herói de nome " + nome + " está no nivel Imortal");
                 
        break; 
                     case (xp >= 10001):
                   
                     console.log("O herói de nome " + nome + " está no nivel Radiante");
                  
                     break;
}
