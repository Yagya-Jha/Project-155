AFRAME.registerComponent("game-play",{
    schema: {elementId: {type:"string", default: "#coin1"}},
    init(){},
    update(){
        this.isCollided(this.data.elementId);
    },

    isCollided: function(elementId){
        const element = document.querySelector(elementId);
        const player = document.querySelector("#player_char")
        element.addEventListener("collide", (e)=>{
            if(elementId.includes("#coin")){
                console.log("Collision with "+elementId);
            }else if(elementId.includes("#fish")){
                console.log("Collision with "+elementId);
                player.setAttribute("dynamic-body", {mass: 1});
            }
        });
    }
});