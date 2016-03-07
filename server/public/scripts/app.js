$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        theBorgCollective(data);
        spock();
        $('.captainKirk').on('click', beamMeDownScotty);
        $('.captainJaneway').on('click', phasersSetToStun);
        $('.gulDukat').on('click', gulDukat);
        $('.captainSisco').on('click', captainSisco);
        $('.odo').on('click', odo);
        $('.quark').on('click', quark);
        $('.kiraNerys').on('click', kiraNerys);
        $('.jadziaDax').on('click', jadziaDax);
        $('.drBashir').on('click', drBashir);
        $('.ezriDax').on('click', ezriDax);
        $('.milesOBrien').on('click', milesOBrien);
        $('.jakeSisko').on('click', jakeSisko);
        $('.rom').on('click', rom);
        $('.theDominion').on('click', theDominion);
        $('.cardassiaPrime').on('click', cardassiaPrime);
        $('.elimGarak').on('click', elimGarak);
        $('.weyoun').on('click', weyoun);
        $('.jemHadar').on('click', jemHadar);
        $('.kudakEtan').on('click', kudakEtan);
        $('.keevan').on('click', keevan);
        $('.theFounders').on('click', theFounders);
        $('.pahWraiths').on('click', pahWraiths);
        $('.prophets').on('click', prophets);
        $('.leeta').on('click', leeta);
        $('.gowron').on('click', gowron);
      }
    });
});

var i = 0;

function theBorgCollective(data){
  $(".captainPicard").append("<div class = 'commanderRiker'></div>");

  var ltCmdrData = $(".captainPicard").children().last();
  ltCmdrData.append("<p class = geordiLaForge>" + data.kappa[i].name + "</h1>");
  ltCmdrData.append("<p class = ltCmdrWorf>" + data.kappa[i].location + "</h2>");
  ltCmdrData.append("<p class = drCrusher>" + data.kappa[i].spirit_animal + "</h2>");
  ltCmdrData.append("<p class = deannaTroi>" + data.kappa[i].shoutout + "</h2>");
}

function beamMeDownScotty() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      i--;
      if (i < 0){
        i = 22;
      }
      species8472(data);
      spock();
      return i;
    }
  });
}

function phasersSetToStun() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      i++;
      if (i > 22) {
        i = 0;
      }
      species8472(data);
      spock();
      return i;
    }
  });
}

function species8472(data) {
  $('.geordiLaForge').text(data.kappa[i].name);
  $('.ltCmdrWorf').text(data.kappa[i].location);
  $('.drCrusher').text(data.kappa[i].spirit_animal);
  $('.deannaTroi').text(data.kappa[i].shoutout);
}




//number bar functions
function gulDukat() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      i = 0;
      species8472(data);
      spock();
    }
  });
}

function captainSisco() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      i = 1;
      species8472(data);
      spock();
    }
  });
}

function odo() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      i = 2;
      species8472(data);
      spock();
    }
  });
}

function quark() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      i = 3;
      species8472(data);
      spock();
    }
  });
}

function kiraNerys() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      i = 4;
      species8472(data);
      spock();
    }
  });
}

function jadziaDax() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      i = 5;
      species8472(data);
      spock();
    }
  });
}

function drBashir() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      i = 6;
      species8472(data);
      spock();
    }
  });
}

function ezriDax() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      i = 7;
      species8472(data);
      spock();
    }
  });
}

function milesOBrien() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      i = 8;
      species8472(data);
      spock();
    }
  });
}

function jakeSisko() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      i = 9;
      species8472(data);
      spock();
    }
  });
}

function rom() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      i = 10;
      species8472(data);
      spock();
    }
  });
}

function theDominion() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      i = 11;
      species8472(data);
      spock();
    }
  });
}

function cardassiaPrime() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      i = 12;
      species8472(data);
      spock();
    }
  });
}

function elimGarak() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      i = 13;
      species8472(data);
      spock();
    }
  });
}

function weyoun() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      i = 14;
      species8472(data);
      spock();
    }
  });
}

function jemHadar() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      i = 15;
      species8472(data);
      spock();
    }
  });
}

function kudakEtan() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      i = 16;
      species8472(data);
      spock();
    }
  });
}

function keevan() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      i = 17;
      species8472(data);
      spock();
    }
  });
}

function theFounders() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      i = 18;
      species8472(data);
      spock();
    }
  });
}

function pahWraiths() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      i = 19;
      species8472(data);
      spock();
    }
  });
}

function prophets() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      i = 20;
      species8472(data);
      spock();
    }
  });
}

function leeta() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      i = 21;
      species8472(data);
      spock();
    }
  });
}

function gowron() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      i = 22;
      species8472(data);
      spock();
    }
  });
}

function spock(){
  $('.worfSonOfMogh').children().removeClass('deepSpace9');
  if(i===0){
    $('.gulDukat').toggleClass('deepSpace9');
  } else if(i===1){
    $('.captainSisco').toggleClass('deepSpace9');
  } else if(i===2){
    $('.odo').toggleClass('deepSpace9');
  } else if(i===3){
    $('.quark').toggleClass('deepSpace9');
  } else if(i===4){
    $('.kiraNerys').toggleClass('deepSpace9');
  } else if(i===5){
    $('.jadziaDax').toggleClass('deepSpace9');
  } else if(i===6){
    $('.drBashir').toggleClass('deepSpace9');
  } else if(i===7){
    $('.ezriDax').toggleClass('deepSpace9');
  } else if(i===8){
    $('.milesOBrien').toggleClass('deepSpace9');
  } else if(i===9){
    $('.jakeSisko').toggleClass('deepSpace9');
  } else if(i===10){
    $('.rom').toggleClass('deepSpace9');
  } else if(i===11){
    $('.theDominion').toggleClass('deepSpace9');
  } else if(i===12){
    $('.cardassiaPrime').toggleClass('deepSpace9');
  } else if(i===13){
    $('.elimGarak').toggleClass('deepSpace9');
  } else if(i===14){
    $('.weyoun').toggleClass('deepSpace9');
  } else if(i===15){
    $('.jemHadar').toggleClass('deepSpace9');
  } else if(i===16){
    $('.kudakEtan').toggleClass('deepSpace9');
  } else if(i===17){
    $('.keevan').toggleClass('deepSpace9');
  } else if(i===18){
    $('.theFounders').toggleClass('deepSpace9');
  } else if(i===19){
    $('.pahWraiths').toggleClass('deepSpace9');
  } else if(i===20){
    $('.prophets').toggleClass('deepSpace9');
  } else if(i===21){
    $('.leeta').toggleClass('deepSpace9');
  } else{
    $('.gowron').toggleClass('deepSpace9');
  }
}
