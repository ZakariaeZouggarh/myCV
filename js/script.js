window.onload = () => {

  document.getElementById("job_desc1").style.display = "none";
  document.getElementById("job_desc2").style.display = "none";
  document.getElementById("job_desc3").style.display = "none";

  const targetDiv1 = document.getElementById("job_desc1");
  const btn1 = document.getElementById("btn1");
  btn1.onclick = function () {
    if (targetDiv1.style.display !== "none") {
        window.setTimeout(function(){
            targetDiv1.style.display = 'none';
          },700);
          setInterval(fade, 1000);
      
    } else {
      targetDiv1.style.display = "block";
      targetDiv2.style.display = "none";
      targetDiv3.style.display = "none";
    }
  };

  const targetDiv2 = document.getElementById("job_desc2");
  const btn2 = document.getElementById("btn2");
  btn2.onclick = function () {
    if (targetDiv2.style.display !== "none") {
      window.setTimeout(function(){
        targetDiv2.style.display = 'none';
      },700);
      
    } else {
      targetDiv2.style.display = "block";
      targetDiv1.style.display = "none";
      targetDiv3.style.display = "none";
      
    }
  };

  const targetDiv3 = document.getElementById("job_desc3");
  const btn3 = document.getElementById("btn3");
  btn3.onclick = function () {
    if (targetDiv3.style.display !== "none") {
        window.setTimeout(function(){
            targetDiv3.style.display = 'none';
          },700);
      
    } else {
      targetDiv3.style.display = "block";
      targetDiv2.style.display = "none";
      targetDiv1.style.display = "none";
    }
  };
  
    let tooltipElements = document.querySelectorAll("[data-tooltip-text]");
    tooltipElements.forEach((tooltipElement) => {
        tooltipElement.addEventListener("mouseout", (e) => {
            removeAllTooltips();

        });
        tooltipElement.addEventListener("mouseover", (e) => {
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



  


  
  
      
  

  

};