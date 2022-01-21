// ----------------------------------------------------- Скрипт канваса со знаками  ---------------------------------------------------------------
 function signs()
{
 var canvas = document.getElementById('signs'); // получаем объект канваса
 var ctx = canvas.getContext('2d');             // у него есть свойство - контекст рисования
 var width=canvas.width,height=canvas.height;   //Размеры "холста" это нужно, чтобы круги выстраивались
// ---  установим стили рисунка -----------------------------------------------------------------------
 ctx.shadowColor = "Coral"; // Цвет тени
 ctx.shadowOffsetX = 5;
 ctx.shadowOffsetY = 5;
 ctx.shadowBlur = 5;
 ctx.strokeStyle = 'DarkCyan'; // Цвет линии
 ctx.fillStyle = "Teal";       // Цвет заполненной плоскости
// Удачный вариант круга по центру 198
const X = canvas.width / 2;
const Y = canvas.height / 2;
//const radius = 198;
ctx.lineWidth = 1;           // установим толщину линии:
// --- Круг 198 --------------------------
ctx.beginPath();
ctx.arc(X, Y, 198, 0, 2 * Math.PI, false);
ctx.stroke();
// --- Круг 208 --------------------------
ctx.beginPath();
ctx.arc(X, Y, 208, 0, 2 * Math.PI, false);
ctx.stroke();
//---- Круг 233 --------------------------
ctx.beginPath();
ctx.arc(X, Y, 233, 0, 2 * Math.PI, false);
ctx.stroke();
//---- Круг 303 --------------------------
ctx.beginPath();
ctx.arc(X, Y, 303, 0, 2 * Math.PI, false);
ctx.stroke();
//Рисует 12 кружков, соответствующих часам
for(var i=0;i<=Math.PI*2;i+=Math.PI*2/12) //Math.PI*2 - полный круг часов,Math.PI*2/12 - это 1/12 полного круга часов
{
ctx.beginPath();
ctx.arc(width/2+220*Math.cos(i),          // 2 center полного круга кружков,220 shirina полного круга кружков
height/2+220*Math.sin(i),                 // 2 center полного круга кружков,220  visota полного круга кружков
13,0,2*Math.PI);                          //13 radius кружков,0 uglovoe sehenie кружков,2 vopros
ctx.fill();
ctx.closePath();
}
//Рисует 30 кружков, соответствующих часам
for(var i=0;i<=Math.PI*2;i+=Math.PI*2/60) //Math.PI*2 - полный круг часов,Math.PI*2/12 - это 1/12 полного круга часов
{
ctx.beginPath();
ctx.arc(width/2+203*Math.cos(i),          //2 center полного круга кружков,220 shirina полного круга кружков
height/2+203*Math.sin(i),                 //2 center полного круга кружков,220  visota полного круга кружков
5,0,2*Math.PI);                           //13 radius кружков,0 uglovoe sehenie кружков,2 vopros
ctx.fill();
ctx.closePath();
}
// --- Рисует 12 кругов для символов ---
for(var i=0;i<=Math.PI*2;i+=Math.PI*2/12) //Math.PI*2 - полный круг часов,Math.PI*2/12 - это 1/12 полного круга часов
{
ctx.beginPath();
ctx.arc(width/2+268*Math.cos(i),          // 2 center полного круга кружков,220 shirina полного круга кружков
height/2+268*Math.sin(i),                 // 2 center полного круга кружков,220  visota полного круга кружков
34,0,2*Math.PI);                          //13 radius кружков,0 uglovoe sehenie кружков,2 vopros
ctx.stroke();
ctx.closePath();
}
// --- 1 --- Вертикальная линия единица ---------------------------------------------------------------------------------------------------------
ctx.beginPath();ctx.moveTo(705,50);ctx.lineTo(705,85);ctx.closePath();ctx.stroke();
// --- 2 --- Вертикальная линия двойка ----------------------------------------------------------------------------------------------------------
ctx.beginPath();ctx.moveTo(802,149);ctx.lineTo(802,217);ctx.closePath();ctx.stroke();
// --- 3 --- Треугольник ------------------------------------------------------------------------------------------------------------------------
ctx.beginPath();ctx.moveTo(839,283);ctx.lineTo(867,334);ctx.lineTo(810,334);ctx.closePath();ctx.stroke();
// --- 4 --- Kвадрат ----------------------------------------------------------------------------------------------------------------------------
ctx.beginPath();ctx.moveTo(827,428);ctx.lineTo(827,475);ctx.lineTo(779,475);ctx.lineTo(779,428);ctx.closePath();ctx.stroke();
// --- 5 --- Пятиконечная звезда ----------------------------------------------------------------------------------------------------------------
ctx.beginPath();ctx.moveTo(704,515);ctx.lineTo(724,577);ctx.lineTo(673,539);ctx.lineTo(737,539);ctx.lineTo(684,577);ctx.closePath();ctx.stroke();
// --- 6 --- Шестиконечная звезда и мозаика -----------------------------------------------------------------------------------------------------
ctx.beginPath();ctx.moveTo(571,552);ctx.lineTo(600,603);ctx.lineTo(542,603);ctx.closePath();ctx.stroke();
ctx.beginPath();ctx.moveTo(571,620);ctx.lineTo(600,568);ctx.lineTo(542,568);ctx.closePath();ctx.stroke();
ctx.beginPath();ctx.moveTo(562,568);ctx.lineTo(580,603);ctx.closePath();ctx.stroke();
ctx.beginPath();ctx.moveTo(580,568);ctx.lineTo(562,603);ctx.closePath();ctx.stroke();
ctx.beginPath();ctx.moveTo(552,586);ctx.lineTo(592,586);ctx.closePath();ctx.stroke();
// --- 7 --- Семиконечная звезда ----------------------------------------------------------------------------------------------------------------
ctx.beginPath();
ctx.moveTo(437,516);ctx.lineTo(452,581);ctx.lineTo(410,528);ctx.lineTo(471,558);ctx.lineTo(404,558);ctx.lineTo(465,528);ctx.lineTo(421,581);
ctx.closePath();
ctx.stroke();
// --- 8 --- Восьмиконечная звезда --------------------------------------------------------------------------------------------------------------
ctx.beginPath();ctx.moveTo(363,426);ctx.lineTo(363,474);ctx.lineTo(314,474);ctx.lineTo(314,426);ctx.closePath();ctx.stroke();
ctx.beginPath();ctx.moveTo(338,417);ctx.lineTo(373,450);ctx.lineTo(338,485);ctx.lineTo(305,450);ctx.closePath();ctx.stroke();
// ---  9 --- Девятиконечная звезда -------------------------------------------------------------------------------------------------------------
ctx.beginPath();
ctx.moveTo(303,282);
ctx.lineTo(332,332);
ctx.lineTo(272,332);
ctx.closePath();
ctx.stroke();
//
ctx.beginPath();
ctx.moveTo(324,291);
ctx.lineTo(315,348);
ctx.lineTo(270,310);
ctx.closePath();
ctx.stroke();
//
ctx.beginPath();
ctx.moveTo(335,309);
ctx.lineTo(291,348);
ctx.lineTo(280,291);
ctx.closePath();
ctx.stroke();
// --- 10 --- Деcятиконечная звезда -----
ctx.beginPath();
ctx.moveTo(339,148);
ctx.lineTo(370,172);
ctx.lineTo(358,210);
ctx.lineTo(319,210);
ctx.lineTo(306,172);
ctx.closePath();
ctx.stroke();
//
ctx.beginPath();
ctx.moveTo(339,217);
ctx.lineTo(370,194);
ctx.lineTo(358,155);
ctx.lineTo(320,155);
ctx.lineTo(306,194);
ctx.closePath();
ctx.stroke();
// --- 11 --- Одинадцатиконечная звезда ---
ctx.beginPath();
ctx.moveTo(437,50);
ctx.lineTo(447,118);
ctx.lineTo(420,55);
ctx.lineTo(462,107);
ctx.lineTo(408,70);
ctx.lineTo(470,90);
ctx.lineTo(404,90);
ctx.lineTo(467,70);
ctx.lineTo(412,107);
ctx.lineTo(454,56);
ctx.lineTo(427,118);
ctx.closePath();
ctx.stroke();
// Уголки квадрато-треугольников
//--- 1 ---------------
ctx.beginPath();
ctx.moveTo(579,16);
ctx.lineTo(579,35);
ctx.lineTo(595,26);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(594,25);
ctx.lineTo(603,40);
ctx.closePath();
ctx.stroke();
//--- 2 ---------------
ctx.beginPath();
ctx.moveTo(604,40);
ctx.lineTo(604,58);
ctx.lineTo(588,49);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(604,58);
ctx.lineTo(595,74);
ctx.closePath();
ctx.stroke();
//--- 3 ---------------
ctx.beginPath();
ctx.moveTo(579,63);
ctx.lineTo(579,82);
ctx.lineTo(596,73);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(579,82);
ctx.lineTo(563,82);
ctx.closePath();
ctx.stroke();
//--- 4 ---------------
ctx.beginPath();
ctx.moveTo(563,63);
ctx.lineTo(547,73);
ctx.lineTo(563,82);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(548,74);
ctx.lineTo(539,58);
ctx.closePath();
ctx.stroke();
//--- 5 ---------------
ctx.beginPath();
ctx.moveTo(539,40);
ctx.lineTo(539,58);
ctx.lineTo(554,49);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(539,40);
ctx.lineTo(548,25);
ctx.closePath();
ctx.stroke();
//--- 6 ---------------
ctx.beginPath();
ctx.moveTo(563,16);
ctx.lineTo(563,35);
ctx.lineTo(547,26);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(563,16);
ctx.lineTo(579,16);
ctx.closePath();
ctx.stroke();
//--- Малые рёбра -----
ctx.beginPath();
ctx.moveTo(563,34);
ctx.lineTo(579,34);
ctx.lineTo(588,49);
ctx.lineTo(579,64);
ctx.lineTo(562,64);
ctx.lineTo(553,49);
ctx.closePath();
ctx.stroke();
//--- Большие рёбра ---
ctx.beginPath();
ctx.moveTo(553,49);
ctx.lineTo(590,49);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.lineTo(562,34);
ctx.lineTo(579,63);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.lineTo(579,35);
ctx.lineTo(563,63);
ctx.closePath();
ctx.stroke();
// --------------------
}
signs();

// ----------------------------------------------------------------------- Скрипт канваса с часами ---------------------------------------------------------------
function load()
{
var canvas=document.getElementById("alarm"); // Получаем DOM-объект нашего "холста"
var ctx=canvas.getContext("2d");             //Берём его контекст (с его помощью и будем рисовать)
var width=canvas.width,height=canvas.height; //Размеры "холста"

 ctx.shadowColor = "Coral";
 ctx.shadowOffsetX = 5;
 ctx.shadowOffsetY = 5;
 ctx.shadowBlur = 5;
 ctx.fillStyle = "Teal";
 ctx.strokeStyle = "DarkCyan";

var position_s=0,position_m=0,position_h=0;  //Получаем значения в радианах, соответствующие градусам,
 //на которые повернётся соответствующая стрелка часов за секунду
var sec=6*Math.PI/180,
min =1/ 10*Math.PI/180,
hour=1/120*Math.PI/180;
//И текущее положение стрелок на часах
//С переводом из секунд в соответствующие единицы времени
position_s=new Date().getSeconds()*sec;
position_m=new Date().getMinutes()*60*min;
position_h=new Date().getHours()*3600*hour+new Date().getMinutes()*60*hour;
function alarm()//функция перерисовки Canvas'а вызывается каждую секунду
{
function line(pos,r,w)
{ //функция рисования линии
ctx.lineWidth=w||1; //первый аргумент - градус поворота стрелки
ctx.beginPath();
ctx.moveTo(width/2,height/2); //center conusa
ctx.lineTo(width/2+r*Math.cos(pos-Math.PI/2), //2 ploscost conusa,
height/2+r*Math.sin(pos-Math.PI/2));//2 ploscost conusa,
ctx.stroke();
ctx.closePath();
}
position_s+=sec;
position_m+=min;
position_h+=hour;
ctx.clearRect (0, 0, width, height); //Функция очистки Canvas
line(position_h,233,8);//Рисование стрелок часов
line(position_m,208,3);//Рисование стрелок часов
line(position_s,208,1);//Рисование стрелок часов
}
setInterval(alarm,1000); //Создание таймера, вызывающего всю перерисовку
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------
function ilaVr(){document.getElementById('ila').style.opacity="0.5";}
function ilaUt(){document.getElementById('ila').style.opacity="0.2";}

function ilbVr(){document.getElementById('ilb').style.opacity="0.5";}
function ilbUt(){document.getElementById('ilb').style.opacity="0.2";}

function ilcVr(){document.getElementById('ilc').style.opacity="0.5";}
function ilcUt(){document.getElementById('ilc').style.opacity="0.2";}

function ildVr(){document.getElementById('ild').style.opacity="0.5";}
function ildUt(){document.getElementById('ild').style.opacity="0.2";}

function ileVr(){document.getElementById('ile').style.opacity="0.5";}
function ileUt(){document.getElementById('ile').style.opacity="0.2";}

function ilfVr(){document.getElementById('ilf').style.opacity="0.5";}
function ilfUt(){document.getElementById('ilf').style.opacity="0.2";}

function ilgVr(){document.getElementById('ilg').style.opacity="0.5";}
function ilgUt(){document.getElementById('ilg').style.opacity="0.2";}

function ilhVr(){document.getElementById('ilh').style.opacity="0.5";}
function ilhUt(){document.getElementById('ilh').style.opacity="0.2";}

function iliVr(){document.getElementById('ili').style.opacity="0.5";}
function iliUt(){document.getElementById('ili').style.opacity="0.2";}

function iljVr(){document.getElementById('ilj').style.opacity="0.5";}
function iljUt(){document.getElementById('ilj').style.opacity="0.2";}

function ilkVr(){document.getElementById('ilk').style.opacity="0.5";}
function ilkUt(){document.getElementById('ilk').style.opacity="0.2";}

function illVr(){document.getElementById('ill').style.opacity="0.5";}
function illUt(){document.getElementById('ill').style.opacity="0.2";}
//
function ialVr(){document.getElementById('ial').style.opacity="0.5";}
function ialUt(){document.getElementById('ial').style.opacity="0.2";}

function iblVr(){document.getElementById('ibl').style.opacity="0.5";}
function iblUt(){document.getElementById('ibl').style.opacity="0.2";}

function iclVr(){document.getElementById('icl').style.opacity="0.5";}
function iclUt(){document.getElementById('icl').style.opacity="0.2";}

function idlVr(){document.getElementById('idl').style.opacity="0.5";}
function idlUt(){document.getElementById('idl').style.opacity="0.2";}

function ielVr(){document.getElementById('iel').style.opacity="0.5";}
function ielUt(){document.getElementById('iel').style.opacity="0.2";}

function iflVr(){document.getElementById('ifl').style.opacity="0.5";}
function iflUt(){document.getElementById('ifl').style.opacity="0.2";}

function iglVr(){document.getElementById('igl').style.opacity="0.5";}
function iglUt(){document.getElementById('igl').style.opacity="0.2";}

function ihlVr(){document.getElementById('ihl').style.opacity="0.5";}
function ihlUt(){document.getElementById('ihl').style.opacity="0.2";}

function iilVr(){document.getElementById('iil').style.opacity="0.5";}
function iilUt(){document.getElementById('iil').style.opacity="0.2";}

function ijlVr(){document.getElementById('ijl').style.opacity="0.5";}
function ijlUt(){document.getElementById('ijl').style.opacity="0.2";}

function iklVr(){document.getElementById('ikl').style.opacity="0.5";}
function iklUt(){document.getElementById('ikl').style.opacity="0.2";}

function imlVr(){document.getElementById('iml').style.opacity="0.5";}
function imlUt(){document.getElementById('iml').style.opacity="0.2";}
//
function iraVr(){document.getElementById('ira').style.opacity="0.5";}
function iraUt(){document.getElementById('ira').style.opacity="0.2";}

function irbVr(){document.getElementById('irb').style.opacity="0.5";}
function irbUt(){document.getElementById('irb').style.opacity="0.2";}

function ircVr(){document.getElementById('irc').style.opacity="0.5";}
function ircUt(){document.getElementById('irc').style.opacity="0.2";}

function irdVr(){document.getElementById('ird').style.opacity="0.5";}
function irdUt(){document.getElementById('ird').style.opacity="0.2";}

function ireVr(){document.getElementById('ire').style.opacity="0.5";}
function ireUt(){document.getElementById('ire').style.opacity="0.2";}

function irfVr(){document.getElementById('irf').style.opacity="0.5";}
function irfUt(){document.getElementById('irf').style.opacity="0.2";}

function irgVr(){document.getElementById('irg').style.opacity="0.5";}
function irgUt(){document.getElementById('irg').style.opacity="0.2";}

function irhVr(){document.getElementById('irh').style.opacity="0.5";}
function irhUt(){document.getElementById('irh').style.opacity="0.2";}

function iriVr(){document.getElementById('iri').style.opacity="0.5";}
function iriUt(){document.getElementById('iri').style.opacity="0.2";}

function irjVr(){document.getElementById('irj').style.opacity="0.5";}
function irjUt(){document.getElementById('irj').style.opacity="0.2";}

function irkVr(){document.getElementById('irk').style.opacity="0.5";}
function irkUt(){document.getElementById('irk').style.opacity="0.2";}

function irlVr(){document.getElementById('irl').style.opacity="0.5";}
function irlUt(){document.getElementById('irl').style.opacity="0.2";}
//
function iarVr(){document.getElementById('iar').style.opacity="0.5";}
function iarUt(){document.getElementById('iar').style.opacity="0.2";}

function ibrVr(){document.getElementById('ibr').style.opacity="0.5";}
function ibrUt(){document.getElementById('ibr').style.opacity="0.2";}

function icrVr(){document.getElementById('icr').style.opacity="0.5";}
function icrUt(){document.getElementById('icr').style.opacity="0.2";}

function idrVr(){document.getElementById('idr').style.opacity="0.5";}
function idrUt(){document.getElementById('idr').style.opacity="0.2";}

function ierVr(){document.getElementById('ier').style.opacity="0.5";}
function ierUt(){document.getElementById('ier').style.opacity="0.2";}

function ifrVr(){document.getElementById('ifr').style.opacity="0.5";}
function ifrUt(){document.getElementById('ifr').style.opacity="0.2";}

function igrVr(){document.getElementById('igr').style.opacity="0.5";}
function igrUt(){document.getElementById('igr').style.opacity="0.2";}

function ihrVr(){document.getElementById('ihr').style.opacity="0.5";}
function ihrUt(){document.getElementById('ihr').style.opacity="0.2";}

function iirVr(){document.getElementById('iir').style.opacity="0.5";}
function iirUt(){document.getElementById('iir').style.opacity="0.2";}

function ijrVr(){document.getElementById('ijr').style.opacity="0.5";}
function ijrUt(){document.getElementById('ijr').style.opacity="0.2";}

function ikrVr(){document.getElementById('ikr').style.opacity="0.5";}
function ikrUt(){document.getElementById('ikr').style.opacity="0.2";}

function ilrVr(){document.getElementById('ilr').style.opacity="0.5";}
function ilrUt(){document.getElementById('ilr').style.opacity="0.2";}
//
