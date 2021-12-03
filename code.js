var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d0960e7d-51a4-42ac-8e26-6fae5931360b","dda9550c-508d-4960-aef3-a71138cbd2df","1845e8fc-8047-4a5a-9c8c-f1cdab339e53","e03b1b38-ad85-4ada-a62a-7047a4b269d9","fcc1855d-999b-4bc7-9f88-e1e1497bec05"],"propsByKey":{"d0960e7d-51a4-42ac-8e26-6fae5931360b":{"name":"playerShip3_green_1","sourceUrl":"assets/api/v1/animation-library/gamelab/LSAxFAITzH2xiX41pmUjjKZ0mjsPflUA/category_vehicles/playerShip3_green.png","frameSize":{"x":98,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"LSAxFAITzH2xiX41pmUjjKZ0mjsPflUA","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":75},"rootRelativePath":"assets/api/v1/animation-library/gamelab/LSAxFAITzH2xiX41pmUjjKZ0mjsPflUA/category_vehicles/playerShip3_green.png"},"dda9550c-508d-4960-aef3-a71138cbd2df":{"name":"playerShip3_orange_1","sourceUrl":"assets/api/v1/animation-library/gamelab/QQ81xaZAFg5Ra7DNEjKi8PVChWFhczPw/category_vehicles/playerShip3_orange.png","frameSize":{"x":98,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"QQ81xaZAFg5Ra7DNEjKi8PVChWFhczPw","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":75},"rootRelativePath":"assets/api/v1/animation-library/gamelab/QQ81xaZAFg5Ra7DNEjKi8PVChWFhczPw/category_vehicles/playerShip3_orange.png"},"1845e8fc-8047-4a5a-9c8c-f1cdab339e53":{"name":"playerShip3_blue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/REocRDL0flVPaD_F1.YiisqhjAxIxLR7/category_vehicles/playerShip3_blue.png","frameSize":{"x":98,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"REocRDL0flVPaD_F1.YiisqhjAxIxLR7","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":75},"rootRelativePath":"assets/api/v1/animation-library/gamelab/REocRDL0flVPaD_F1.YiisqhjAxIxLR7/category_vehicles/playerShip3_blue.png"},"e03b1b38-ad85-4ada-a62a-7047a4b269d9":{"name":"playerShip2_red_1","sourceUrl":"assets/api/v1/animation-library/gamelab/zFVGNRWF8rd6TAAffIX0n_fD.xUmD7Wp/category_vehicles/playerShip2_red.png","frameSize":{"x":112,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"zFVGNRWF8rd6TAAffIX0n_fD.xUmD7Wp","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":75},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zFVGNRWF8rd6TAAffIX0n_fD.xUmD7Wp/category_vehicles/playerShip2_red.png"},"fcc1855d-999b-4bc7-9f88-e1e1497bec05":{"name":"yellow_shirt_cast_1","sourceUrl":"assets/api/v1/animation-library/gamelab/j4dIZ4NbbPf0tn0WcdEPq70sAkFNMI_T/category_people/yellow_shirt_cast.png","frameSize":{"x":177,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"j4dIZ4NbbPf0tn0WcdEPq70sAkFNMI_T","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":177,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/j4dIZ4NbbPf0tn0WcdEPq70sAkFNMI_T/category_people/yellow_shirt_cast.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";


sam.setAnimation("yellow_shirt_cast_1");
sam.scale = .1;
car1.setAnimation("playerShip2_red_1");
car1.scale = .2;
car2.setAnimation("playerShip3_green_1");
car2.scale = .2;
car3.setAnimation("playerShip3_orange_1");
car3.scale = .2;
car4.setAnimation("playerShip3_blue_1");
car4.scale = .2;
 
//add the velocity to make the car move.
car1.velocityY=8;
car3.velocityY=-8;
car2.velocityY=8;
car4.velocityY=-8;
function draw() {
  background("white");
   textSize(18);
   stroke("blue");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries
 car1.bounceOff(boundary1);
 car1.bounceOff(boundary2);
 car3.bounceOff(boundary1);
 car3.bounceOff(boundary2);
  car2.bounceOff(boundary1);
 car2.bounceOff(boundary2);
  car4.bounceOff(boundary1);
 car4.bounceOff(boundary2);


//Add the condition to make the sam move left and right
if(keyDown("RIGHT"))
{
  sam.x=sam.x+4;
  
}
if(keyDown("LEFT"))
{
  sam.x=sam.x-4;
}
//Add the condition to reduce the life of sam if it touches the car.
 if(sam.isTouching(car1)||sam.isTouching(car2)
 ||sam.isTouching(car3)||sam.isTouching(car4))
 {
  playSound("assets/category_female_voiceover/mission_failed_female.mp3", false);
sam.x=20
sam.y=190;
life=life+1      
 }
 if(life==5)
 {
  text("GAMEOVER",200,300)
 }
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
