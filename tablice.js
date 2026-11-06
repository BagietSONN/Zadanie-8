//Zadanie 1
//podpunkt 1
var tab1 = [7, 3, 1, 6, 9, 5, 4, 10, 2, 2];


document.write(tab1[4] + "<br>");


tab1[6] = 12;

//podpunkt 2
var tab2 = []


for (var i = 0; i < tab1.length; i++) {
    tab2[i] = tab1[i];
}

//podpunkt 3 
var tab3 = [];

for (var i = 0; i < tab1.length; i++) {
    tab3[i] = tab1[i] + tab2[i];
}

//podpunkt 4
for (var i = 0; i < tab1.length; i++) {
    tab2[i] = tab1[tab1.length - 1 - i];
}


document.write("tab1: " + tab1 + "<br>");
document.write("tab2: " + tab2 + "<br>");
document.write("tab3: " + tab3 + "<br>");



//Zadanie 2
//podpunkt 1
var tablica = [];
var n = Number(prompt("Podaj ilość elementów tablicy:"));

for (var i = 0; i < n; i++) {
    tablica[i] = Number(prompt("Podaj liczbę:"));
}

//podpunkt 2
var min = Math.min(...tablica);
var max = Math.max(...tablica);

//podpunkt 3 
var suma = 0;

for (var i = 0; i < n; i++) {
    suma += tablica[i];
}

var srednia = suma / n;

//podpunkt 4
var ile3 = 0;

for (var i = 0; i < n; i++) {
    ile3 += String(Math.abs(tablica[i])).split("3").length - 1;
}

//podpunkt 5
tablica.sort((a, b) => a - b);

//podpunkt 6 
var mediana;

if (n % 2 == 0) {
    mediana = (tablica[n / 2 - 1] + tablica[n / 2]) / 2;
} else {
    mediana = tablica[Math.floor(n / 2)];
}

//podpunkt 7
var najmniejsze = tablica.slice(0, 3);
var najwieksze = tablica.slice(-3);

//podpunkt 8
var kwadraty = tablica.map(x => x * x);

//podpunkt 9 
var parzyste = tablica.filter(x => x % 2 == 0).length;
var nieparzyste = tablica.filter(x => x % 2 != 0).length;

//podpunkt 10
var podzielne3 = tablica.filter(x => x % 3 == 0).length;

document.write("Minimum: " + min + "<br>");
document.write("Maksimum: " + max + "<br>");
document.write("Średnia: " + srednia + "<br>");
document.write("Ilość cyfr 3: " + ile3 + "<br>");
document.write("Mediana: " + mediana + "<br>");
document.write("3 najmniejsze: " + najmniejsze + "<br>");
document.write("3 największe: " + najwieksze + "<br>");
document.write("Kwadraty: " + kwadraty + "<br>");
document.write("Parzyste: " + parzyste + "<br>");
document.write("Nieparzyste: " + nieparzyste + "<br>");
document.write("Podzielne przez 3: " + podzielne3 + "<br>");


//Zadanie 3
//podpunkt 1
var litery = [];

var wyraz = prompt("Podaj wyraz składający się z 10 liter:");

//podpunkt 2
while (wyraz.length != 10) {
    wyraz = prompt("Wyraz musi mieć dokładnie 10 liter. Podaj ponownie:");
}

for (var i = 0; i < 10; i++) {
    litery[i] = wyraz[i];
}

//podpunkt 3 
for (var i = 0; i < 10; i++) {
    if (litery[i] == litery[i].toUpperCase()) {
        litery[i] = litery[i].toLowerCase();
    } else {
        litery[i] = litery[i].toUpperCase();
    }
}

//podpunkt 4
litery.sort(() => Math.random() - 0.5);

document.write("Litery: " + litery.join(", "));


//Zadanie 4

var tab = [];

for (var i = 0; i < 100; i++) {
    tab[i] = Math.floor(Math.random() * 100) + 1;
}

//podpunkt 1
var max = Math.max(...tab);

var ile = tab.filter(x => x == max).length;

document.write("Największa liczba: " + max + "<br>");
document.write("Występuje razy: " + ile + "<br>");

//podpunkt 2
document.write("Nieparzyste: " +
    tab.filter(x => x % 2 != 0).join(", ") + "<br>");

//podpunkt 3
var indeksy = [];

for (var i = 1; i < tab.length; i += 2) {
    indeksy.push(tab[i]);
}

document.write("Nieparzyste indeksy: " + indeksy.join(", ") + "<br>");

//podpunkt 4
var przedzial = tab.filter(x => x >= 5 && x < 15);

document.write("Ilość w przedziale: " + przedzial.length + "<br>");
document.write("Liczby: " + przedzial.join(", ") + "<br>");

//podpunkt 5
var a = Number(prompt("Podaj liczbę a:"));

var najblizszy = tab[0];

for (var i = 1; i < tab.length; i++) {
    if (Math.abs(tab[i] - a) < Math.abs(najblizszy - a)) {
        najblizszy = tab[i];
    }
}

document.write("Najbliższa liczba: " + najblizszy + "<br>");

//podpunkt 6
var min = Math.min(...tab);
var indeksMin = tab.indexOf(min);

document.write("Minimum: " + min + "<br>");

if (indeksMin > 0 && indeksMin < tab.length - 1) {
    document.write("Poprzednik: " + tab[indeksMin - 1] + "<br>");
    document.write("Następnik: " + tab[indeksMin + 1] + "<br>");
} else {
    document.write("Minimum znajduje się na brzegu tablicy.<br>");
}

//podpunkt 7 
var wieksze10 = tab.filter(x => x > 10);

document.write("Większe od 10: " + wieksze10.join(", ") + "<br>");

//podpunkt 8
var B = [];
var suma = 0;

for (var i = 0; i < tab.length; i++) {
    suma += tab[i];
    B[i] = suma;
}

//podpunkt 9
var malejaco = [...tab].sort((a, b) => b - a);

//podpunkt 10
var powtarzajace = [...new Set(tab)].filter(
    x => tab.filter(y => y == x).length >= 3
);

document.write("Sumy częściowe: " + B.join(", ") + "<br>");
document.write("Malejąco: " + malejaco.join(", ") + "<br>");
document.write("Powtarzające się 3 razy: " +
    powtarzajace.join(", ") + "<br>");


//Zadanie 5
//podpunkt 1
var fib = [0, 1];

for (var i = 2; i < 100; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}

document.write(fib.join(", "));

//podpunkt 2 
var potegi = [];

for (var i = 0; i < 100; i++) {
    potegi[i] = 2 ** i;
}

document.write(potegi.join(", "));

//podpunkt 3
var tab = [];

for (var i = 0; i < 100; i++) {
    tab[i] = 3 * (i + 1);
}

document.write(tab.join(", "));

//podpunkt 4
var tab = [];

for (var i = 0; i < 100; i++) {
    tab[i] = 2 ** (i + 1);
}

document.write(tab.join(", "));



