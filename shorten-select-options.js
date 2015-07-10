//Shorten
$(document).ready(function() {
   $("*").each(function () { 
       if ($(this).children().length == 0) { 
          $(this).text($(this).text().replace("Beschaffung und Logistik Kommunikation Kundenservice Operativer Betrieb Projekt management Qualitätssicherung Forschung & Entwicklung Ingenieurswesen Professional Services","Beschaffung und Logistik Kommunikation Kundenservice..."));
          $(this).text($(this).text().replace("Außendienst Produktmanagement Projekt management Forschung & Entwicklung Ingenieurswesen Vertrieb Professional Services Applications\\Sales Specialist","Außendienst Produktmanagement Projekt management Forschung & Entwicklung Ingenieurswesen...")); 
          $(this).text($(this).text().replace("Beschaffung und Logistik Kommunikation Kundenservice Operativer Betrieb Projekt management Qualitätssicherung Forschung & Entwicklung Ingenieurswesen Professional Services","Beschaffung und Logistik Kommunikation Kundenservice...")); 
          $(this).text($(this).text().replace("Business Management Customer Service Field Services Operations Product Management Project Management Sales Professional Services","Business Management Customer Service Field Services Operations Product Management...")); 
          $(this).text($(this).text().replace("Kommunikation Kundenservice Außendienst Operativer Betrieb Produktmanagement Projekt management Vertrieb Professional Services","Kommunikation Kundenservice Außendienst Operativer Betrieb Produktmanagement...")); 
          $(this).text($(this).text().replace("Kundenservice Außendienst Operativer Betrieb Produktmanagement Projekt management Forschung & Entwicklung Ingenieurswesen Vertrieb Professional Services Applications\\Sales Specialist","Kundenservice Außendienst Operativer Betrieb Produktmanagement Projekt management...")); 
          $(this).text($(this).text().replace("Kundenservice Außendienst Operativer Betrieb Produktmanagement Projekt management Qualitätssicherung Forschung & Entwicklung Ingenieurswesen Vertrieb Professional Services Applications\\Sales Specialist","Kundenservice Außendienst Operativer Betrieb Produktmanagement Projekt management...")); 
       }       
   });
});