class iframeDiplay {
	constructor(){
    let nIntervId = undefined

    function frame(){
      const _list = document.querySelectorAll(".main-display")
  
      console.log(_list)
      let list = []
      _list.forEach((e) => {
          list.push(e)
      })
      let count = 0
      list = list.map((e) => {
        try{
          let a=e.contentDocument || e.contentWindow.document
          a = a.querySelector("[model-load]")
          a = a.components["model-load"]
          a = a.timeLise_push()
          return a
        }catch(error){
          console.log(error)
          return undefined
        }
      })
      console.log(list)
      console.log(`check ${list.every((e) => e != undefined)}`)
  
      if(list.length > 0 && list.every((e) => e != undefined)){
        console.log("読み込み完了")
        alert("iframeDiplay\n 読み込み完了")
        clearInterval(nIntervId)
      }
    }

    setTimeout((e)=>{
      nIntervId = setInterval(frame(), 2000)
    },5000)
		
	}
	
}


const display = new iframeDiplay()