var lang = "1"
function embed() {
  var h1 = document.getElementById("h1").innerHTML
  var h2 = document.getElementById("h2").innerHTML
  var p = document.getElementById("p").innerHTML
  if(lang == "1") {
  prompt("Copy this text to your website", "<div class='area'><header id='h1'>" + h1 + "</header><h2 id='h2'>" + h2 + "</h2><p id='p'>" + p + "</p></div><style>header { font-size: 35px; text-align: center; font-family: calibri; background: black; color: white;} h2 { text-align: center; font-family: calibri;} p {font-family: calibri; text-align: center;} .area { border: 3px solid black;} button { background: black; color: white; border: 3px solid black; font-size: 20px; padding: 5px 10px;}</style >")
  }
  if(lang == "2") {
  prompt("Copie este texto a su sitio web", "<div class='area'><header id='h1'>" + h1 + "</header><h2 id='h2'>" + h2 + "</h2><p id='p'>" + p + "</p></div><style>header { font-size: 35px; text-align: center; font-family: calibri; background: black; color: white;} h2 { text-align: center; font-family: calibri;} p {font-family: calibri; text-align: center;} .area { border: 3px solid black;} button { background: black; color: white; border: 3px solid black; font-size: 20px; padding: 5px 10px;}</style >")
  }
}
function print1() {
  var h1 = document.getElementById('h1').innerHTML
  var h2 = document.getElementById('h2').innerHTML
  var p = document.getElementById('p').innerHTML
  document.getElementById("h").innerHTML = ""
   document.getElementById("langArea").innerHTML = ""
  print()
  var wind = 'index.html'
  if(lang == "1") {
  document.getElementById("h").innerHTML = "<header id='hh'>Article Writer 3.0</header><p>Since you just printed, fullscreen mode WILL NOT WORK. To use fullscreen mode, save the project, refresh the page, and load the project.</p><div class='area'><button onclick='embed()' id='em'>Embed</button><button id='pr' onclick='print1()'>Print</button><button onclick='tbg()' id='tb'>Title BG</button><button onclick='ttc()' id='tc'>Title text color</button><button onclick='abg()' id='ab'>Article BG</button><button onclick='spc()' id='sp'>Subtitle and paragraph color</button><button onclick='help()' id='he'>Update notes</button><button onclick='html()' id='ht'>Insert HTML</button><button onclick='save()' id='sa'>Save</button><button onclick='load()' id='lo'>Load</button><button onclick='marg()' id='ma'>Margin size</button></div><p></p>"
   document.getElementById("langArea").innerHTML = "<p style='text-align: left'>Set language</p><select id='lang'><option value='1'>English</option><option value='2'>Espa�ol (BETA)</option></select><button class='small' onclick='lan()'>Set</button>"
  }
   if(lang == "2") {
  document.getElementById("h").innerHTML = "<header id='hh'>Article Writer 3.0</header><p>Ya que acaba de imprimir, el modo de pantalla completa NO TRABAJAR�. Para utilizar el modo de pantalla completa, guarde el proyecto, actualice la p�gina y cargue el proyecto.</p><div class='area'><button onclick='embed()' id='em'>Embed</button><button id='pr' onclick='print1()'>Print</button><button onclick='tbg()' id='tb'>Title BG</button><button onclick='ttc()' id='tc'>Title text color</button><button onclick='abg()' id='ab'>Article BG</button><button onclick='spc()' id='sp'>Subtitle and paragraph color</button><button onclick='help()' id='he'>Update notes</button><button onclick='html()' id='ht'>Insert HTML</button><button onclick='save()' id='sa'>Save</button><button onclick='load()' id='lo'>Load</button><button onclick='marg()' id='ma'>Margin size</button></div><p></p>"
   document.getElementById("langArea").innerHTML = "<p style='text-align: left'>Set language</p><select id='lang'><option value='2'>Espa�ol (BETA)</option><option value='1'>English</option></select><button class='small' onclick='lan()'>Set</button>"
   lan()
  }
   document.getElementById('h1').innerHTML = h1
   document.getElementById('h2').innerHTML = h2
   document.getElementById('p').innerHTML = p
}
function tbg() {
  if(lang == "1") {
  var bg = prompt("Enter BG color, hexidecimal, or link in the form of: url('url goes here')")
  }
  if(lang == "2") {
  var bg = prompt("Introduzca el color de fondo, hexadecimal o enlace en la forma de: url('La URL va aqu�') (Escriba el nombre del color en ingl�s)")
  }
  document.getElementById("h1").style.background = bg
}
function ttc() {
   if(lang == "1") {
  var bg = prompt("Enter BG color, hexidecimal, or link in the form of: url('url goes here')")
  }
  if(lang == "2") {
  var bg = prompt("Introduzca el color de fondo, hexadecimal o enlace en la forma de: url('La URL va aqu�') (Escriba el nombre del color en ingl�s)")
  }
  document.getElementById("h1").style.color = bg
}
function abg() {
 if(lang == "1") {
  var bg = prompt("Enter BG color, hexidecimal, or link in the form of: url('url goes here')")
  }
  if(lang == "2") {
  var bg = prompt("Introduzca el color de fondo, hexadecimal o enlace en la forma de: url('La URL va aqu�') (Escriba el nombre del color en ingl�s)")
  }
  document.getElementById("mainarea").style.background = bg;
}
function spc() {
  if(lang == "1") {
  var bg = prompt("Enter BG color, or hexidecimal")
  }
  if(lang == "2") {
  var bg = prompt("Introduzca el color de fondo o hexadecimal (escriba el nombre del color en ingl�s)")
  }
  document.getElementById("mainarea").style.color = bg;
}
function help() {
  if(lang == "1") {
  alert("Once again, Article Writer has been recreated, and is now better than ever! \n\nNEW FEATURES IN 3.0\n*Recreated from scratch (again)\n*Edit text directly\n*PRINTING!\n*New article layout!\n*If you don't like it in the current window, click on the title for the full experience!\n*SAVING/LOADING!\n*More to come soon!\n\nOTHER UPDATES:\n\n*June 17th, 2017\nNow you can save more that just one article at a time, with unlimited save slots!\n\n*June 19th, 2017\nAdded margin size adjustment, and article colors (and margins) will now save!\n\n*June 26th, 2017\nIn progress of making a Spanish version of this. You can select Spanish from the language menu.");
  }
   if(lang == "2") {
  alert("Una vez m�s, el escritor del art�culo ha sido recreado, y ahora est� mejor que nunca! \n*NUEVAS CARACTER�STICAS EN 3.0 \n*Reconstruido desde cero (de nuevo)\n*Editar texto directamente\n*IMPRESI�N!\n*�Nuevo dise�o de art�culos!\n * Si no le gusta en la ventana actual, En el t�tulo de la experiencia completa!\n*�AHORRANDO/CARGANDO!\n*�M�s pronto!\n\nMAS ACTUALIZACIONES:\n\n*17 de junio 2017\nAhora, puede guardar m�s de un art�culo en un\n\n*19 de junio de 2017\n El ajuste de tama�o de margen agregado y los colores (y m�rgenes) del art�culo se guardar�n ahora!\n\n* 26 de junio de 2017\n En curso de hacer una versi�n en espa�ol de esta. Puede seleccionar espa�ol en el men� de idioma.");
  }
}
function html() {
  if(lang == "1") {
  var html = prompt("Enter HTML To be inserted. Press Cancel for help.");
  }
  if(lang == "2") {
  var html = prompt("Introduzca HTML Para insertar. Presione Cancel para obtener ayuda.");
  }
  if(html === null) {
    alert("Here is a simple HTML doc:\n\n<u>text</u>: Underlines the text inside of the tags.\n<i>text</i>: Makes the text italic.\n<button>text</button>: makes a button with the text inside of the tag.\n<a href='link'>text</a>: Creates a link (specified by href) that is displayed as the text inside the tags.\n<b>text</b>: makes the text inside the tags bold.\n\n, Visit www.w3schools.com to learn more about HTML.");
  }
  else {
    var spot = prompt("specify where to add the HTML. (h1 for the title, h2 for the subtitle, and p for the paragraph)");
   if(spot == "h1", "h2", "p") {
    document.getElementById(spot).innerHTML += html;
   }
   else {
     alert("Please select a specified option.")
   }
  }
}
function save() {
  var name = prompt("Enter a name for your document that you will remember")
  localStorage.setItem(name, document.getElementById("h1").innerHTML + "?�?��8���?�" + document.getElementById("h2").innerHTML + "?�?��8���?�" + document.getElementById("p").innerHTML + "?�?��8���?�" + document.getElementById("mainarea").style.background + "?�?��8���?�" + document.getElementById("h1").style.background + "?�?��8���?�" + document.getElementById("h1").style.color + "?�?��8���?�" + document.getElementById("mainarea").style.color + "?�?��8���?�" + document.getElementById("p").style.margin)
  alert("Saved succesfully.")
}
function load() {
  var name = prompt("Enter the name of the file")
  var it = localStorage.getItem(name)
  var item = it.split("?�?��8���?�")
  document.getElementById("h1").innerHTML = item[0]
  document.getElementById("h2").innerHTML = item[1]
  document.getElementById("p").innerHTML = item[2]
  document.getElementById("mainarea").style.background = item[3]
  document.getElementById("h1").style.background = item[4]
  document.getElementById("h1").style.color = item[5]
  document.getElementById("mainarea").style.color = item[6]
  document.getElementById("p").style.margin = item[7]
 alert("Loaded successfully.")
}
function marg() {
  var size = prompt("Enter size")
  document.getElementById("p").style.margin = size
}

function lan() {
  if(document.getElementById("lang").value == "2") {
  lang = "2"
  document.getElementById("hh").innerHTML = "Escritor del art�culo 3.0"
  document.getElementById("em").innerHTML = "Empotrar"
  document.getElementById("pr").innerHTML = "Impresi�n"
  document.getElementById("tb").innerHTML = "T�tulo de fondo"
  document.getElementById("tc").innerHTML = "Color del texto del t�tulo"
  document.getElementById("ab").innerHTML = "Antecedentes del art�culo"
  document.getElementById("sp").innerHTML = "Color de subt�tulos y p�rrafos"
  document.getElementById("he").innerHTML = "Actualizar notas"
  document.getElementById("ht").innerHTML = "Insertar HTML"
  document.getElementById("sa").innerHTML = "Salvar"
  document.getElementById("lo").innerHTML = "Carga"
  document.getElementById("ma").innerHTML = "Tama�o del margen"
  if(document.getElementById("h1").innerHTML == "Title") {
  document.getElementById("h1").innerHTML = "T�tulo"
  }
  if(document.getElementById("h2").innerHTML == "Subtitle") {
  document.getElementById("h2").innerHTML = "Subtitular"
  }
   if(document.getElementById("p").innerHTML == "Paragraph") {
  document.getElementById("p").innerHTML = "P�rrafo"
  }
  }
  if(document.getElementById("lang").value == "1") {
  lang = "1"
  document.getElementById("hh").innerHTML = "Article Writer 3.0"
  document.getElementById("em").innerHTML = "Embed"
  document.getElementById("pr").innerHTML = "Print"
  document.getElementById("tb").innerHTML = "Title BG"
  document.getElementById("tc").innerHTML = "Title text color"
  document.getElementById("ab").innerHTML = "Article BG"
  document.getElementById("sp").innerHTML = "Subtitle and paragraph color"
  document.getElementById("he").innerHTML = "Update notes"
  document.getElementById("ht").innerHTML = "Insert HTML"
  document.getElementById("sa").innerHTML = "Save"
  document.getElementById("lo").innerHTML = "Load"
  document.getElementById("ma").innerHTML = "Margin size"
  if(document.getElementById("h1").innerHTML == "T�tulo") {
  document.getElementById("h1").innerHTML = "Title"
  }
  if(document.getElementById("h2").innerHTML == "Subtitular") {
  document.getElementById("h2").innerHTML = "Subtitle"
  }
  if(document.getElementById("p").innerHTML == "P�rrafo") {
  document.getElementById("p").innerHTML = "Paragraph"
  }
  }
}
