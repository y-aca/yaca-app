<template>
  <div>
    Activité physique level : <input type="text" id="physical_activity_id" value="0" onChange="setPhysicalActivity()"></input>
  </div>
<template>


<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">
 google.charts.load('current', {packages: ['corechart']});
 google.charts.setOnLoadCallback(drawChart);
 var physical_activity_level = 2;
 var food_level = 4;
 var stress_level = 7;
 var addiction_level = 6;
 var sleep_level = 5;
 function setPhysicalActivity() {
   physical_activity_level = parseInt(document.getElementById("physical_activity_id").value, 10);
 }
 function setColor(level) {
   if (level <= 4) {
     return "color : #00ff99";
   } else if  ((4 < level) && (level <= 6)) {
     return "color : #ffcc66";
   } else {
     return "red";
   }
 }
 function drawChart() {
   var data = google.visualization.arrayToDataTable([
     ["Catégorie", "Score obtenu", { role: "style" } ],
     ["Activité physique", physical_activity_level, setColor(physical_activity_level)],
     ["Alimentation", food_level, setColor(food_level)],
     ["Stress", stress_level, setColor(stress_level)],
     ["Addiction", addiction_level, setColor(addiction_level)],
     ["Sommeil", sleep_level, setColor(sleep_level)],
 ]);

 var view = new google.visualization.DataView(data);
 view.setColumns([0, 1,
         { calc: "stringify",
             sourceColumn: 1,
                       type: "string",
                       role: "annotation" },
                     2]);

 var options = {
   title: "Score obtenu pour les différentes catégories évaluées",
   width: 600,
   height: 400,
   bar: {groupWidth: "95%"},
   legend: { position: "none" },
 };
 var chart = new google.visualization.BarChart(document.getElementById("app"));
 chart.draw(view, options);
}
</script>
