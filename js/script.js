window.onload = () => {
    
  var btn0 = document.getElementById("btn0");
  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  var btn3 = document.getElementById("btn3");
  var btn4 = document.getElementById("btn4");
  var btn5 = document.getElementById("btn5");

  var hint0 = document.getElementById('job_desc0');
  var hint1 = document.getElementById('job_desc1');
  var hint2 = document.getElementById('job_desc2');
  var hint3 = document.getElementById('job_desc3');
  var hint4 = document.getElementById('job_desc4');
  var hint5 = document.getElementById('job_desc5');
  
  btn0.addEventListener('click', function() {
    if (hint0.classList.contains('h-hide')) {
      hint0.classList.remove('h-hide');
      hint5.classList.add('h-hide');
      hint1.classList.add('h-hide');
      hint2.classList.add('h-hide');
      hint3.classList.add('h-hide');
      hint4.classList.add('h-hide');
    } else {
      hint0.classList.add('h-hide');
    }
  });

  btn1.addEventListener('click', function() {
    if (hint1.classList.contains('h-hide')) {
      hint1.classList.remove('h-hide');
      hint0.classList.add('h-hide');
      hint5.classList.add('h-hide');
      hint2.classList.add('h-hide');
      hint3.classList.add('h-hide');
      hint4.classList.add('h-hide');
    } else {
      hint1.classList.add('h-hide');
    }
  });

  btn2.addEventListener('click', function() {
    if (hint2.classList.contains('h-hide')) {
      hint2.classList.remove('h-hide');
      hint0.classList.add('h-hide');
      hint1.classList.add('h-hide');
      hint5.classList.add('h-hide');
      hint3.classList.add('h-hide');
      hint4.classList.add('h-hide');
    } else {
      hint2.classList.add('h-hide');
    }
  });

  btn3.addEventListener('click', function() {
    if (hint3.classList.contains('h-hide')) {
      hint3.classList.remove('h-hide');
      hint0.classList.add('h-hide');
      hint1.classList.add('h-hide');
      hint2.classList.add('h-hide');
      hint4.classList.add('h-hide');
      hint5.classList.add('h-hide');
    } else {
      hint3.classList.add('h-hide');
    }
  });

  btn4.addEventListener('click', function() {

    if (hint4.classList.contains('h-hide')) {
      hint4.classList.remove('h-hide');
      hint0.classList.add('h-hide');
      hint1.classList.add('h-hide');
      hint2.classList.add('h-hide');
      hint3.classList.add('h-hide');
      hint5.classList.add('h-hide');
    } else {
      hint4.classList.add('h-hide');
    }
  });
  
  btn5.addEventListener('click', function() {

    if (hint5.classList.contains('h-hide')) {
      hint5.classList.remove('h-hide');
      hint0.classList.add('h-hide');
      hint1.classList.add('h-hide');
      hint2.classList.add('h-hide');
      hint3.classList.add('h-hide');
      hint4.classList.add('h-hide');
    } else {
      hint5.classList.add('h-hide');
    }
  });




  

  /*const targetDiv0 = document.getElementById("job_desc0");
  const btn0 = document.getElementById("btn0");
  btn0.onclick = function () {
    if (targetDiv0.style.display !== "none") {
            targetDiv0.style.display = 'none';
            window.setTimeout(function(){
              targetDiv0.style.opacity = 1;
              targetDiv0.style.transform = 'scale(1)';
            },0);

            
      
    } else {
      targetDiv0.style.display = "block";
      window.setTimeout(function(){
        targetDiv0.style.opacity = 1;
        targetDiv0.style.transform = 'scale(1)';
      },0);
      targetDiv1.style.display = "none";
      targetDiv2.style.display = "none";
      targetDiv3.style.display = "none";
      targetDiv4.style.display = "none";
      targetDiv5.style.display = "none";
    }
  };*/

  /*const targetDiv1 = document.getElementById("job_desc1");
  const btn1 = document.getElementById("btn1");
  btn1.onclick = function () {
    if (targetDiv1.style.display !== "none") {
            targetDiv1.style.display = 'none';
            fadeIn(targetDiv1, 3000);
      
    } else {
      targetDiv1.style.display = "block";
      targetDiv2.style.display = "none";
      targetDiv3.style.display = "none";
      targetDiv4.style.display = "none";
      targetDiv5.style.display = "none";
    }
  };

  const targetDiv2 = document.getElementById("job_desc2");
  const btn2 = document.getElementById("btn2");
  btn2.onclick = function () {
    if (targetDiv2.style.display !== "none") {
        targetDiv2.style.display = 'none';
      
    } else {
      targetDiv2.style.display = "block";
      targetDiv1.style.display = "none";
      targetDiv3.style.display = "none";
      targetDiv4.style.display = "none";
      targetDiv5.style.display = "none";
      
    }
  };

  const targetDiv3 = document.getElementById("job_desc3");
  const btn3 = document.getElementById("btn3");
  btn3.onclick = function () {
    if (targetDiv3.style.display !== "none") {
            targetDiv3.style.display = 'none';
      
    } else {
      targetDiv3.style.display = "block";
      targetDiv2.style.display = "none";
      targetDiv1.style.display = "none";
      targetDiv4.style.display = "none";
      targetDiv5.style.display = "none";
    }
  };

  const targetDiv4 = document.getElementById("job_desc4");
  const btn4 = document.getElementById("btn4");
  btn4.onclick = function () {
    if (targetDiv4.style.display !== "none") {
            targetDiv4.style.display = 'none';
      
    } else {
      targetDiv4.style.display = "block";
      targetDiv2.style.display = "none";
      targetDiv1.style.display = "none";
      targetDiv3.style.display = "none";
      targetDiv5.style.display = "none";
    }
  };

  const targetDiv5 = document.getElementById("job_desc5");
  const btn5 = document.getElementById("btn5");
  btn5.onclick = function () {
    if (targetDiv5.style.display !== "none") {
            targetDiv5.style.display = 'none';
      
    } else {
      targetDiv5.style.display = "block";
      targetDiv2.style.display = "none";
      targetDiv1.style.display = "none";
      targetDiv4.style.display = "none";
      targetDiv3.style.display = "none";
    }
  };*/
  
    let tooltipElements = document.querySelectorAll("[data-tooltip-text]");
    tooltipElements.forEach((tooltipElement) => {
        tooltipElement.addEventListener("mouseout", (e) => {
            removeAllTooltips();

        });
        tooltipElement.addEventListener("mousemove", (e) => {
            let elment = document.createElement("div");
            elment.classList.add("tooltip");

            let tooltipContent = e.currentTarget.getAttribute("data-tooltip-text");
            elment.innerHTML = tooltipContent;
            
            removeAllTooltips();

            let coords = e.currentTarget.getBoundingClientRect();
            elment.style.left = coords.left + e.currentTarget.clientWidth + 0 + "px";
            elment.style.top = coords.top + e.currentTarget.clientWidth + 25 +"px";
            document.body.appendChild(elment);
        });
    });

    function removeAllTooltips(){
        document.querySelectorAll(".tooltip").forEach((tooltip) => {
            tooltip.remove();
        });
    }

    function fadeIn(el, time) {
        el.style.opacity = 0;
      
        var last = +new Date();
        var tick = function () {
          el.style.opacity = +el.style.opacity + (new Date() - last) / time;
          last = +new Date();
      
          if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
              setTimeout(tick, 16);
          }
        };
      
        tick();
      }


      function PrintStars() {

        var _count = document.getElementById("etext").value;
        var count = parseInt(_count);
        document.getElementById("TableArea").innerHTML = "<br>" + count;
        var star = '';
        for (var i = 0; i < count; i++) {
            star += '*';
        }
        document.getElementById("spandisplay").innerHTML = star;

    }

    const skillevaluation = {

      ML: 5,
      DL: 4,
      BI: 4,
      DW: 4,
      JAVA: 4, 
      Python: 3,
      C: 5,
      "C++": 3,
      HTML: 5,
      CSS: 5,
      PHP: 5,
      JS: 5,
      J2EE: 5,
      Symfony :1,
      SB : 4,
      MySQL: 5,
      PLSQL: 5,
      Oracle: 4,
      PSQL: 3,
      Access : 4,
      Merise: 4,
      UML: 3,
      SCRUM:  4,
      DevOps: 3,
      DP: 5,
      ODOO : 5,
      REST : 4,
      SOAP : 4,
      " ": 0

    };
    
    function addEvaluation(skillevaluation) {
      //star
      const star = document.createElement("span");
      star.innerHTML = "<span class='fa fa-star'></span>";
    
      //span for all stars
      for (var key in skillevaluation) {
        var stars_span = document.createElement("span");
        const span = document.createElement("span");
        for (var i = 0; i < skillevaluation[key]; i++) {
          stars_span.innerHTML += star.innerHTML;
        }
        span.appendChild(stars_span);
        document.getElementById(key).appendChild(span);
      }
    }
    addEvaluation(skillevaluation);
      
    var ctx = document.getElementById("myChart").getContext("2d");
  
    
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: Object.keys(skillevaluation),
        datasets: [{
          data: Object.values(skillevaluation),
          fill: false,
          backgroundColor: "#b54c35 ",
          borderColor: "#b54c35",
          borderCapStyle: 'butt'
        }]
        
      },
      options: {
        legend: {display: false},
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 5
          }
      }
        
    }
 
    });


    var tooltip2 = document.querySelectorAll(".coupontooltip");
    document.addEventListener("mousemove", fn, false);
    function fn(e) {
      for (var i = tooltip2.length; i--; ) {
        tooltip2[i].style.left = e.pageX + "px";
        tooltip2[i].style.top = e.pageY + "px";
      }
    }
    


  


  
  
      
  

  

};