# Javascript - Grisspelet   

Syftet med denna uppgift är att fördjupa sin kunskaper i Javascript genom att göra ett interaktiv spel. Du får färdig HTML och CSS och skriver endast Javascript i app.js. Du använder dig av DOM för att interagera med HTML/CSS. För att reagera på en händelse (ex musklick) så att olika funktioner triggas använder du dig av metoden addEventListener().


## Spelregler:

* Spelet har två deltagare där varje spelar var sin omgång
* För varje omgång "kastar" den ena spelaren tärning genom att klicka "Slå kast". Man får kasta tärning så många gånger man vill. Varje kast adderas till ROUND poäng  
* MEN, om spelare slår en 1 går alla päng i ROUND förlorade. Efter det är det nästa spelares tur.
* En spelare kan välja att stanna och välja "Hold". Då adderas poängen i ROUND till GLOBALA poängen. Efter det är det nästa spelares tur.
* Den spelare som når först 100 poäng på GLOBAL vinner spelet



## Dina tre utmaningar (extra)
Ändra spelets regler genom att lägga till de här förutsättningarna.

1. En spelare förlorar HELA sin poängsumma om två 6:or slås direkt efter varandra. Efter det är det den andra spelarens tur. (Tips: Spara alltid föregående tärningskast i en separat variabel)
2. Lägg till ett inputfält i HTML där man kan ändra antal poäng för att vinna spelet.
3. Lägg till en till tärning till spelet så att du har två tärningar. En spelare förlorar poängen i omgången om en av tärningarna är en 1:a. (Tips: Här får du ändra lite i CSS för att placera två tärningarn istället för en).


## Bra att veta


