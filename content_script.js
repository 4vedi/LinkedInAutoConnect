 async function sendConnectionRequests() {
    const DELAY = 500;
    var connects = 0;
    var fails = 0;

    function selectConnectButtons() {
    return [...document.querySelectorAll("button span")].filter(a => a.textContent.includes("Connect"));
  }

    async function click(e) {
      return new Promise(resolve => {
        setTimeout(() => {
          e.click();
          resolve();
        }, DELAY);
      });
    }
  
    async function clickAll() {
      let connectButtons = selectConnectButtons();
      console.log(connectButtons.length)
      for (button of connectButtons) {
        try {
          await click(button);
          (document.getElementsByClassName('ml1')[0]).click();
          console.log("click!");
          connects++;
        } catch (err) {
          fails++;
        }
      }
    
    }
  
  
    do{
        await clickAll();
    }while(connects<11);

  }



sendConnectionRequests();
 

// document.getElementById('mybtn').addEventListener("click", sendConnectionRequests);