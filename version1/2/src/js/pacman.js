funcsPac.pacman ||
function () {                                                                                                           //at fist,this is map region.-------------------start---------------------------------------

  var a = true,
    e = false, mainFunction = {},
    i = [1, 4, 2, 8],    l = {
      0: {XY: 0,riseUp: 0},                                                            //movement amount at once for guys
      1: {XY: 0,riseUp: -1},      2: {XY: 0,riseUp: +1},
      4: {XY: 1,riseUp: -1},      8: {XY: 1,riseUp: +1}},
    m = [0, 7, 17, 32],                                                                                                 //guyGhost going out home time 0-red guyGhost,7-blue guyGhost,17-blue guyGhost,32-yellow guyGhost
      LeftOutRightIn = [{x: 2, y: 8}, {x: 63, y: 8}],                                                                   //though the right tunnel to left tunel,position
    r = {1: [{x: 39.5, y: 15, arrow: 4},{x: 39.5, y: 4, arrow: 4, xPath: 57, yPath: -4},
      {x: 39.5, y: 7, arrow: 2, xPath: 0, yPath: -4},      {x: 37.625, y: 7, arrow: 1, xPath: 57, yPath: 20},
      {x: 41.375, y: 7, arrow: 1, xPath: 0, yPath: 20}],      2: [{x: 40.25, y: 15, arrow: 8},
      {x: 38.75, y: 15, arrow: 4},      {x: 39.5, y: 4, arrow: 4, xPath: 57, yPath: -4},
      {x: 39.5, y: 7, arrow: 2, xPath: 0, yPath: -4},      {x: 37.625, y: 7, arrow: 1, xPath: 57, yPath: 20},
      {x: 41.375, y: 7, arrow: 1, xPath: 0, yPath: 20}]},    s = [32, 312],
    v = [80, 312],    w = {0: 0.16, 1: 0.23, 2: 1, 3: 1, 4: 2.23, 5: 0.3, 6: 1.9, 7: 2.23, 8: 1.9, 9: 5, 10: 1.9, 11: 1.18, 12: 0.3, 13: 0.5, 14: 1.9, 15: 9, 16: 10, 17: 0.26},
    y = 0.8 * 0.4;

    array = [{},
        {
            Ghost_V: 0.75,                                                                                             //guyGhost ghost moving rate at level 1
            Home_V: 0.7,                                                                                         //guyGhost ghost moving through middle guyGhosthouse at level 1
            pacmaneV: 0.75,                                                                                             //pacman rate at level 1
            Eatfood_V: 0.7,                                                                                        //pacman rate eating pellet at level 1
            ghostWeak_V: 0.5,                                                                                   //when larger pellet time,guyGhost rate at level 1
            ghostWeak_Time: 0.9,                                                                             //pacman eating larger pellet when pellet time at level 1
            pacFood_V: 0.79,                                                                                    //pacman rate eating pellet at level 1
            pacFoodEat_T: 15,                                                                                 //when larger pellet time at level 1
            ghostNum: 5,                                                                                          //pellet time at level 1
            ghostStop: 1,                                                                                         //when ghost have died,game stop time at level 1
            ghostCheck_Time: [17, 120, 17, 120, 15, 120, 15, 11],                                                     //intial time guyGhost place at level 1
            ForceTime: 1,                                                                                            //after dead and alive guyGhost stop time at level 1
            LimitsTime: [0, 0, 30, 60]                                                                            //guyGhost going out home time at first moment at level 1
        }, {
            Ghost_V: 0.95,                                                                                             //guyGhost ghost moving rate at level 2
            Home_V: 0.7,                                                                                         //guyGhost ghost moving through middle guyGhosthouse at level 2
            pacmaneV: 0.9,                                                                                              //pacman rate  at level 2
            Eatfood_V: 0.8,                                                                                        //pacman rate eating pellet at level 2
            ghostWeak_V: 0.5,                                                                                   //when larger pellet time,guyGhost rate at level 2
            ghostWeak_Time: 0.9,                                                                             //pacman eating larger pellet when pellet time at level 2
            pacFood_V: 0.79,                                                                                    //pacman rate eating pellet at level 2
            pacFoodEat_T: 15,                                                                                //when larger pellet time at level 2
            ghostNum: 5,                                                                                          //pellet time at level 2
            ghostStop: 1,                                                                                         //when ghost have died,game stop time at level 2
            ghostCheck_Time: [7, 20, 7, 20, 5, 20, 5, 1],                                                             //when larger pellet time guyGhost at level 2
            ForceTime: 4,                                                                                            //after dead and alive guyGhost stop time at level 2
            LimitsTime: [0, 0, 20, 50]                                                                            //guyGhost going out home time at first moment at level 2
        }],
        A = {                                                                                                           //pacman and ghost video-icon moving in pacman.png--------------------------start
            1: [{x: 37.6, y: 7, arrow: 1, pole: 6.375, rate: 0.48},                                                      //movement area before start-game
                {x: 37.6, y: 6.375, arrow: 2, pole: 7.625, rate: 0.48},                                                  //12 positions on map area
                {x: 37.6, y: 7.625, arrow: 1, pole: 7, rate: 0.48}],
            2: [{x: 39.5, y: 7, arrow: 2, pole: 7.625, rate: 0.48},
                {x: 39.5, y: 7.625, arrow: 1, pole: 6.375, rate: 0.48},
                {x: 39.5, y: 6.375, arrow: 2, pole: 7, rate: 0.48}],
            3: [{x: 41.4, y: 7, arrow: 1, pole: 6.375, rate: 0.48},
                {x: 41.4, y: 6.375, arrow: 2, pole: 7.625, rate: 0.48},
                {x: 41.4, y: 7.625, arrow: 1, pole: 7, rate: 0.48}],
            4: [{x: 37.6, y: 7, arrow: 8, pole: 39.5, rate: y},                                                          //12 positions on map area
                {x: 39.5, y: 7, arrow: 1, pole: 4, rate: y}],
            5: [{x: 39.5, y: 7, arrow: 1, pole: 4, rate: y}],
            6: [{x: 41.4, y: 7, arrow: 4, pole: 39.5, rate: y},
                {x: 39.5, y: 7, arrow: 1, pole: 4, rate: y}],
            7: [{x: 39.5, y: 4, arrow: 2, pole: 7, rate: 1.6},
                {x: 39.5, y: 7, arrow: 4, pole: 37.625, rate: 1.6}],
            8: [{x: 39.5, y: 4, arrow: 2, pole: 7, rate: 1.6}],
            9: [{x: 39.5, y: 4, arrow: 2, pole: 7, rate: 1.6},
                {x: 39.5, y: 7, arrow: 8, pole: 41.375, rate: 1.6}],
            10: [{x: 37.6, y: 7, arrow: 8, pole: 39.5, rate: y},
                {x: 39.5, y: 7, arrow: 1, pole: 4, rate: y}],
            11: [{x: 39.5, y: 7, arrow: 1, pole: 4, rate: y}],
            12: [{x: 41.4, y: 7, arrow: 4, pole: 39.5, rate: y},
                {x: 39.5, y: 7, arrow: 1, pole: 4, rate: y}]},                                                           ////pacman and ghost video-icon moving in pacman.png--------------------------end
        B = {                                                                                                             //according to each round,each ghost moving rate and movement method----------------start
            1: {guys: [{
                        ghost: e, x: 64, y: 9, id: 0},
                       {ghost: a, x: 68.2, y: 9, id: 1}],
                        sequence: [{time: 5.5, moves: [{arrow: 4, rate: 0.75 * 0.8 * 2},
                        {arrow: 4, rate: 0.78 * 0.8 * 2}]}, {time: 0.1, moves: [{arrow: 4, rate: 32},
                        {arrow: 4, rate: 0}]}, {time: 9, moves: [{arrow: 8,rate: 0.75 * 0.8 * 2, elId: "pcm-bpcm"},
                        {arrow: 8, rate: 0.8, mode: 4}]}]},
            2: {guys: [{ghost: e, x: 64, y: 9, id: 0},                                                               //   according to each round,each ghost moving rate and movement method
                         {ghost: a, x: 70.2, y: 9, id: 1},
                         {ghost: a, x: 32, y: 9.5, id: 2}],
                         sequence: [{time: 2.7, moves: [{arrow: 4, rate: 0.75 * 0.8 * 2},
                         {arrow: 4, rate: 0.78 * 0.8 * 2},
                         {arrow: 0, rate: 0, elId: "pcm-stck"}]},
                         {time: 1, moves: [{arrow: 4,rate: 0.75 * 0.8 * 2},
                            {arrow: 4, rate: 0.1 * 0.8},
                            {arrow: 0, rate: 0, elId: "pcm-stck"}]},
                            {time: 1.3, moves: [{arrow: 4, rate: 0.75 * 0.8 * 2},
                            {arrow: 4, rate: 0},
                            {arrow: 0, rate: 0, elId: "pcm-stck"}]},
                            {time: 1, moves: [{arrow: 4, rate: 0.75 * 0.8 * 2},
                            {arrow: 4, rate: 0, elId: "pcm-ghfa"},
                            {arrow: 0, rate: 0, elId: "pcm-stck"}]},
                            {time: 2.5, moves: [{arrow: 4, rate: 0.75 * 0.8 * 2},
                            {arrow: 4, rate: 0, elId: "pcm-ghfa"},
                            {arrow: 0, rate: 0, elId: "pcm-stck"}]}]},
            3: {                                                                                                        //according to each round,each ghost moving rate and movement method
                guys: [{ghost: e, x: 64, y: 9, id: 0},
                         {ghost: a, x: 70.2, y: 9, id: 2}],
                         sequence: [{time: 5.3, moves: [{arrow: 4, rate: 0.75 * 0.8 * 2},
                         {arrow: 4, rate: 0.78 * 0.8 * 2, elId: "pcm-ghin"}]},
                         {time: 5.3, moves: [{arrow: 4, rate: 0},
                            {arrow: 8, rate: 0.78 * 0.8 * 2, elId: "pcm-gbug"}]}]}},                                         //according to each round,each ghost moving rate----------------end
                         C = [90, 45, 30],
                         D = C[0];

//map end

                                                                                                 //format condition

  //----------------------------------------------------------------artificial intelligence movement ---------------------------------end----------------------------------------
  mainFunction.rand = function () {
    var b = 4294967296,
      c = 134775813;
    c = c * mainFunction.randtree + 1;
    return (mainFunction.randtree = c % b) / b
  };

  mainFunction.tree = function (b) {
    mainFunction.randtree = b
  };

  mainFunction.getDistance = function (b, c) {                                                                        //calculate the distance between 2 guys
    return Math.sqrt((c[1] - b[1]) * (c[1] - b[1]) + (c[0] - b[0]) * (c[0] - b[0]))
  };
  mainFunction.getgroundX = function (b) {                                                                      //row arrowection distance
    return b + -32
  };
  mainFunction.getgroundY = function (b) {                                                                      //column arrowection distance
    return b + 0
  };
  mainFunction.getCorrectedSpritePos = function (b) {                                                                 //row arrowection distance
    return b / 8 * 10 + 2
  };
  mainFunction.getDotElementId = function (b, c) {                                                                    //column arrowection distance
    return "pcm-d" + b + "-" + c
  };

  mainFunction.showElementById = function (b, c) {
    var d = document.getElementById(b);
    if (d) d.style.visibility = c ? "visible" : "hidden"
  };

  mainFunction.getAbsoluteElPos = function (b) {                                                                      //Get absolute position on map
    var c = [0, 0];
    do {
      c[0] += b.offsetTop;
      c[1] += b.offsetLeft
    } while (b = b.offsetParent);
    return c
  };

  mainFunction.changeElementBkPos = function (b, c, d, f) {
    if (f) {
      c = mainFunction.getCorrectedSpritePos(c);
      d = mainFunction.getCorrectedSpritePos(d)
    }
    if (mainFunction.useCss) b.style.backgroundPosition = -c + "px " + -d + "px";
    else if (b.childNodes[0]) {
      b.childNodes[0].style.left = -c + "px";
      b.childNodes[0].style.top = -d + "px"
    }
  };

  mainFunction.determinegroundDimensions = function () {                                                        //according to each other pellets location, remove pellet
    mainFunction.groundWidth = 0;
    mainFunction.groundHeight = 0;
    for (var b in front) {
      var c = front[b];
      if (c.w) {
        c = c.x + c.w - 1;
        if (c > mainFunction.groundWidth) mainFunction.groundWidth = c
      } else {
        c = c.y + c.h - 1;
        if (c > mainFunction.groundHeight) mainFunction.groundHeight = c
      }
    }
  };

  mainFunction.prepareground = function () {
    mainFunction.ground = [];
    for (var b = 0; b <= mainFunction.groundHeight + 1; b++) {
      mainFunction.ground[b * 8] = [];
      for (var c = -2; c <= mainFunction.groundWidth + 1; c++) mainFunction.ground[b * 8][c * 8] = {
        path: 0,
        dot: 0,
        intersection: 0
      }
    }
  };

  mainFunction.preparePaths = function () {                                                                           //path extract
    for (var b in front) {
      var c = front[b],
        d = c.type;
      if (c.w) {
        for (var f = c.y * 8, h = c.x * 8; h <= (c.x + c.w - 1) * 8; h += 8) {
          mainFunction.ground[f][h].path = a;
          if (mainFunction.ground[f][h].dot == 0) {
            mainFunction.ground[f][h].dot = 1;
            mainFunction.restfood++
          }
          mainFunction.ground[f][h].type = !d || h != c.x * 8 && h != (c.x + c.w - 1) * 8 ? d : 0
        }
        mainFunction.ground[f][c.x * 8].intersection = a;
        mainFunction.ground[f][(c.x + c.w - 1) * 8].intersection = a
      } else {
        h = c.x * 8;
        for (f = c.y * 8; f <= (c.y + c.h - 1) * 8; f += 8) {
          if (mainFunction.ground[f][h].path) mainFunction.ground[f][h].intersection = a;
          mainFunction.ground[f][h].path = a;
          if (mainFunction.ground[f][h].dot == 0) {
            mainFunction.ground[f][h].dot = 1;
            mainFunction.restfood++
          }
          mainFunction.ground[f][h].type = !d || f != c.y * 8 && f != (c.y + c.h - 1) * 8 ? d : 0
        }
        mainFunction.ground[c.y * 8][h].intersection = a;
        mainFunction.ground[(c.y + c.h - 1) * 8][h].intersection = a
      }
    }
    for (b in way) if (way[b].w) for (h = way[b].x * 8; h <= (way[b].x + way[b].w - 1) * 8; h += 8) {
      mainFunction.ground[way[b].y * 8][h].dot = 0;
      mainFunction.restfood--
    } else for (f = way[b].y * 8; f <= (way[b].y + way[b].h - 1) * 8; f += 8) {
      mainFunction.ground[f][way[b].x * 8].dot = 0;
      mainFunction.restfood--
    }
  };

  mainFunction.prepareAllowedarrowections = function () {                                                               //when pressed keyboard,arrowection and distance
    for (var b = 8; b <= mainFunction.groundHeight * 8; b += 8) for (var c = 8; c <= mainFunction.groundWidth * 8; c += 8) {
      mainFunction.ground[b][c].allowedarrow = 0;
      if (mainFunction.ground[b - 8][c].path) mainFunction.ground[b][c].allowedarrow += 1;
      if (mainFunction.ground[b + 8][c].path) mainFunction.ground[b][c].allowedarrow += 2;
      if (mainFunction.ground[b][c - 8].path) mainFunction.ground[b][c].allowedarrow += 4;
      if (mainFunction.ground[b][c + 8].path) mainFunction.ground[b][c].allowedarrow += 8
    }
  };

  mainFunction.createDotElements = function () {
    for (var b = 8; b <= mainFunction.groundHeight * 8; b += 8) for (var c = 8; c <= mainFunction.groundWidth * 8; c += 8) if (mainFunction.ground[b][c].dot) {
      var d = document.createElement("div");
      d.className = "pcm-d";
      d.id = mainFunction.getDotElementId(b, c);
      d.style.left = c + -32 + "px";
      d.style.top = b + 0 + "px";
      mainFunction.groundEl.appendChild(d)
    }
  };

  mainFunction.createEnergizerElements = function () {                                                                //associated with each larger pellet,extract
    for (var b in food) {
      var c = food[b],
        d = mainFunction.getDotElementId(c.y * 8, c.x * 8);
      document.getElementById(d).className = "pcm-e";
      mainFunction.prepareElement(document.getElementById(d), 0, 144);
      mainFunction.ground[c.y * 8][c.x * 8].dot = 2
    }
  };

  mainFunction.createghostStopElement = function () {                                                           // create guys appeared
    mainFunction.ghostStopEl = document.createElement("div");
    mainFunction.ghostStopEl.id = "pcm-f";
    mainFunction.ghostStopEl.style.left = mainFunction.getgroundX(v[1]) + "px";
    mainFunction.ghostStopEl.style.top = mainFunction.getgroundY(v[0]) + "px";
    mainFunction.prepareElement(mainFunction.ghostStopEl, -32, -16);
    mainFunction.groundEl.appendChild(mainFunction.ghostStopEl)
  };

  mainFunction.creategroundElements = function () {                                                             //create pellet and guys
    mainFunction.doorEl = document.createElement("div");
    mainFunction.doorEl.id = "pcm-do";
    mainFunction.doorEl.style.display = "none";
    mainFunction.groundEl.appendChild(mainFunction.doorEl);
    mainFunction.createDotElements();
    mainFunction.createEnergizerElements();
    mainFunction.createghostStopElement()
  };

  mainFunction.createguys = function () {                                                                          //pacman lives increase on map at first
    mainFunction.guys = [];
    for (var b = 0; b < mainFunction.pacmanNum + 4; b++) {
      mainFunction.guys[b] = new E(b);
      if (b < mainFunction.pacmanNum) {
        mainFunction.guys[b].ghost = e;
        mainFunction.guys[b].mode = 1
      } else mainFunction.guys[b].ghost = a
    }
  };

  mainFunction.guyGhostreply = function () {                                                                           //guyGhost state go back to initial state
    for (var b in mainFunction.guys) mainFunction.guys[b].A()                                                 //every guyGhosts go back
  };

  mainFunction.createActorElements = function () {
    for (var b in mainFunction.guys) mainFunction.guys[b].createElement()
  };

  mainFunction.createground = function () {                                                                     // map image upload from png-file
    mainFunction.groundEl = document.createElement("div");
    mainFunction.groundEl.id = "pcm-p";
    mainFunction.imagG.appendChild(mainFunction.groundEl)
  };

  mainFunction.resetground = function () {                                                                      //game screend map upload from png-file
    mainFunction.restfood = 0;
    mainFunction.foodsEaten = 0;
    mainFunction.groundEl.innerHTML = "";
    mainFunction.prepareElement(mainFunction.groundEl, 256, 0);                                               //position
    mainFunction.determinegroundDimensions();
    mainFunction.prepareground();
    mainFunction.preparePaths();
    mainFunction.prepareAllowedarrowections();
    mainFunction.creategroundElements();
    mainFunction.createActorElements()
  };

    mainFunction.keyPressed = function (b) {                                                                          //ketboard event
        var c = e;
        switch (b) {                                                                                                    //pacman
            case 37:mainFunction.guys[0].keyarrowection = 4; c = a;  break;                                          //  arrowecion keyboard right
            case 38:mainFunction.guys[0].keyarrowection = 1;c = a;break;                                             //  arrowecion keyboard up
            case 39:mainFunction.guys[0].keyarrowection = 8;c = a;break;                                             //  arrowecion keyboard left
            case 40:mainFunction.guys[0].keyarrowection = 2;c = a;break;                                             //  arrowecion keyboard down
            case 65:if (mainFunction.pacmanNum == 2) {mainFunction.guys[1].keyarrowection = 4;c = a}break;         //  arrowecion keyboard right(pac woman)
            case 83:if (mainFunction.pacmanNum == 2) {mainFunction.guys[1].keyarrowection = 2;c = a}break;         //  arrowecion keyboard down
            case 68:if (mainFunction.pacmanNum == 2) {mainFunction.guys[1].keyarrowection = 8;c = a}break;         //  arrowecion keyboard left
            case 87:if (mainFunction.pacmanNum == 2) {mainFunction.guys[1].keyarrowection = 1;c = a}break          //  arrowecion keyboard up
        }
        return c
  };

  mainFunction.pacmanKeypress = function (b) {                                                                        //pacman keyboard event allow or unallow event
    if (!b) b = window.event;
    if (mainFunction.keyPressed(b.keyCode)) if (b.preventDefault) b.preventDefault();
    else b.returnValue = e
  };

  mainFunction.registerlocation = function () {                                                                       //location movement event
    document.body.addEventListener("locationstart", mainFunction.handlelocationStart, a);
    mainFunction.imagG.addEventListener("locationstart", mainFunction.handlelocationStart, a);
    document.f && document.f.LeftOutRightIn && document.f.LeftOutRightIn.addEventListener("locationstart", mainFunction.handlelocationStart, a)
  };

  mainFunction.addEventListeners = function () {                                                                      //keyboard "w","a","s","d" control
    if (window.addEventListener) {
      window.addEventListener("keydown", mainFunction.pacmanKeypress, e);
      mainFunction.imagG.addEventListener("click", mainFunction.handleClick, e);
      mainFunction.registerlocation()
    } else {
      document.body.attachEvent("onkeydown", mainFunction.pacmanKeypress);
      mainFunction.imagG.attachEvent("onclick", mainFunction.handleClick)
    }
  };
  mainFunction.startGameplay = function () {                                                                          //new round
    mainFunction.goal = [0, 0];                                                                                       //pacman and pac woman initial scores{1Up- 0,2Up- 0}
    mainFunction.pacmanhearts = 3;                                                                                    //start pacman lives
    mainFunction.round = 0;                                                                                           //initial level
    mainFunction.stopGame = e;
    mainFunction.wholeTime = 0;                                                                                       //going game whole time,start time is zero
    mainFunction.nextlevel(a)                                                                                         //next level
  };

  mainFunction.gameReply = function (b) {                                                                             //when restart level and next level
    mainFunction.tree(0);
    mainFunction.fright = 0;                                                                                  //record format
    mainFunction.breakTime = 0;                                                                                       //record format
    mainFunction.timeing = 0;                                                                                 //record format
    mainFunction.ghostStopTime = 0;                                                                             //record format
    mainFunction.posing = 0;                                                                            //record format
    mainFunction.times = mainFunction.rounds.ghostCheck_Time[0] * D;                                    //intial time guyGhost place
    mainFunction.guyGhostExitingPenNow = e;
    mainFunction.ghosteye = 0;                                                                                //record format
    mainFunction.tilesChanged = e;
    mainFunction.updating();
    mainFunction.hidebonus();
    mainFunction.LeaveTime();
    mainFunction.guyGhostreply();                                                                                      //guyGhost state go back to initial state
    mainFunction.updateActorPositions();
    mainFunction.switchghosting(2, a);
    for (var c = mainFunction.pacmanNum + 1; c < mainFunction.pacmanNum + 4; c++) mainFunction.guys[c].a(16);  //record pacman score
    mainFunction.dotEatingChannel = [0, 0];
    mainFunction.clearFoodNow();                                                                                      //dot remove
    b ? mainFunction.guyflow(4) : mainFunction.guyflow(6)
  };



    mainFunction.prepareElement = function (b, c, d) {                                                                //according to each round, difference for map and guyGhosts
        c = mainFunction.getCorrectedSpritePos(parseInt(c, 10));
        d = mainFunction.getCorrectedSpritePos(parseInt(d, 10));
        if (mainFunction.useCss) {
            switch (mainFunction.round){
                case 1:
                    b.style.backgroundImage = "url(src/level1.png)";
                        way = [{x: 1, y: 8, w: 8},
                            {x: 57, y: 8, w: 9},
                            {x: 36, y: 4, w: 8},
                            {x: 36, y: 10, w: 8},
                            {x: 39, y: 15, w: 2}],    // When the level starts,the place without pellet at level 1
                        food = [{x: 5, y: 1},
                            {x: 15, y: 8},
                            {x: 60, y: 4},
                            {x: 60, y: 15}],
                            // the larger pellets which when collected change the colour of the guyGhosts at level 1
                        front = [{x: 5, y: 1, w: 56},
                            {x: 5, y: 4, w: 5},
                            {x: 5, y: 1, h: 4},
                            {x: 9, y: 1, h: 12},
                            {x: 5, y: 12, h: 4},
                            {x: 10, y: 12, h: 4},
                            {x: 5, y: 15, w: 16},
                            {x: 5, y: 12, w: 31},
                            {x: 60, y: 1, h: 4},
                            {x: 19, y: 1, h: 12},
                            {x: 19, y: 4, w: 26},
                            {x: 9, y: 8, w: 7},
                            {x: 15, y: 1, h: 8},
                            {x: 56, y: 4, h: 9},
                            {x: 48, y: 4, w: 13},
                            {x: 48, y: 1, h: 4},
                            {x: 60, y: 12, h: 4},
                            {x: 44, y: 15, w: 17},
                            {x: 44, y: 12, w: 17},
                            {x: 44, y: 1, h: 15},
                            {x: 41, y: 13, w: 4},
                            {x: 41, y: 13, h: 3},
                            {x: 38, y: 13, h: 3},
                            {x: 38, y: 15, w: 4},
                            {x: 35, y: 10, w: 10},
                            {x: 35, y: 1, h: 15},
                            {x: 35, y: 13, w: 4},
                            {x: 21, y: 12, h: 4},
                            {x: 24, y: 12, h: 4},
                            {x: 24, y: 15, w: 12},
                            {x: 44, y: 9, w: 13},
                            {x: 56, y: 8, w: 10,
                                type: 1}, {x: 1, y: 8, w: 9, type: 1}]                // the place of pellet on map at level 1
                    break;
                case  2:
                    b.style.backgroundImage = "url(src/level2.png)";
                        way = [{x: 1, y: 8, w: 8},
                            {x: 57, y: 8, w: 9},
                            {x: 36, y: 4, w: 8}, {x: 36, y: 10, w: 8}, {x: 39, y: 15, w: 2}],    // When the level starts,the place without pellet at level 2
                        food = [{x: 5, y: 3},
                            {x: 54, y: 15},
                            {x: 35, y: 4}],                                                                     // the larger pellets which when collected change the colour of the guyGhosts at level 2
                        front = [{x: 5, y: 1,
                            w: 56}, {x: 5, y: 4, w: 5},
                            {x: 5, y: 1, h: 4},
                            {x: 9, y: 1, h: 12},
                            {x: 5, y: 12, h: 4},
                            {x: 17, y: 12, h: 4},
                            {x: 5, y: 15, w: 12},
                            {x: 5, y: 12, w: 15},
                            {x: 60, y: 1,h: 4},
                            {x: 19, y: 1, h: 15},
                            {x: 19, y: 4, w: 26},
                            {x: 9, y: 8, w: 7},
                            {x: 15, y: 4, h: 5},
                            {x: 9, y: 4, w: 7},
                            {x: 19, y: 10, w: 17},
                            {x: 15, y: 6, w: 5},
                            {x: 56, y: 4, h: 9},
                            {x: 48, y: 4, w: 13},
                            {x: 44, y: 9, w: 13},
                            {x: 48, y: 1, h: 4},
                            {x: 60, y: 12, h: 4},
                            {x: 44, y: 15, w: 17},
                            {x: 44, y: 12, w: 17},
                            {x: 44, y: 1, h: 15},
                            {x: 41, y: 13, w: 4},
                            {x: 41, y: 13, h: 3},
                            {x: 38, y: 13, h: 3},
                            {x: 38, y: 15, w: 4},
                            {x: 35, y: 10, w: 10},
                            {x: 35, y: 1, h: 15},
                            {x: 35, y: 13, w: 4},
                            {x: 19, y: 15, w: 8},
                            {x: 19, y: 12, w: 5},
                            {x: 23, y: 10, h: 3},
                            {x: 32, y: 10, h: 3},
                            {x: 32, y: 12, w: 4},
                            {x: 26, y: 12, w: 4},
                            {x: 26, y: 12, h: 4},
                            {x: 29, y: 15, w: 7},
                            {x: 29, y: 12, h: 4},
                            {x: 19, y: 10, w: 12},
                            {x: 56, y: 8, w: 10, type: 1},
                            {x: 1, y: 8, w: 9, type: 1}]
                    break;                                                                                                                          // the place of pellet on map at level 2

            }
            b.style.backgroundPosition = -c + "px " + -d + "px";
            b.style.backgroundRepeat = "no-repeat"
        } else {
            b.style.overflow = "hidden";
            c = "display: block; position: relative; left: " + -c + "px; top: " + -d + "px";                                                        //round px
            switch (mainFunction.round){
                case 1:b.innerHTML = '<img style="' + c + '" src="src/level1.png">';break;                                                          //level 1 map
                default:b.innerHTML = '<img style="' + c + '" src="src/level2.png">';break;                                                         //level 2 map
            }
        }
    };

    mainFunction.initiateDoubleMode = function () {
        if (mainFunction.pacmanNum != 2) {
            mainFunction.stopAllothers();
            mainFunction.guyflow(12)
        }
    };
    mainFunction.startPlay = function () {                                                                              //play button "Single Player"
        mainFunction.pacmanNum = 1;
        mainFunction.insert();
        mainFunction.createground();
        mainFunction.createguys();                                                                                 //pacman lives increase on map at first
        mainFunction.startGameplay()
    };
    mainFunction.switchToDoubleMode = function () {                                                                   //play button "Multi player"
        mainFunction.pacmanNum = 2;
        mainFunction.insert();
        mainFunction.createground();
        mainFunction.createguys();                                                                                 //pacman lives increase on map at first
        mainFunction.startGameplay()
    };
    mainFunction.selectmember = function () {                                                                         //insert 1 player "Single player"
        if(mainFunction.playing == 8 || mainFunction.playing == 14){
            mainFunction.startPlay()
        }else {
            mainFunction.initiateDoubleMode()
        }
    };
    mainFunction.selectmember2 = function () {                                                                        //insert 2 players
        mainFunction.playing == 8 || mainFunction.playing == 14 ? mainFunction.switchToDoubleMode() : mainFunction.initiateDoubleMode()
    };
    mainFunction.createEndGameElement = function (b, c, d, f, h) {
        var j = document.createElement("div");
        j.style.left = b + "px";
        j.style.top = c + "px";
        j.style.width = d + "px";
        j.style.height = f + "px";
        j.style.zIndex = 119;
        if (h) {
            switch (mainFunction.round){
                case 1:j.style.background = "url(src/level1.png) -" + mainFunction.EndGameTileX + "px -" + mainFunction.EndGameTileY + "px no-repeat";break;  //level 1 upload image
                default:j.style.background = "url(src/level2.png) -" + mainFunction.EndGameTileX + "px -" + mainFunction.EndGameTileY + "px no-repeat";break; //level 2 upload image
            }
            mainFunction.EndGameTileY += 8
        } else j.style.background = "black";
        mainFunction.groundEl.appendChild(j)
    };

    mainFunction.EndGame = function () {                                                                         //when the game is over,
        mainFunction.tree(0);
        mainFunction.imagG.style.visibility = "";                                                            //change the screen or black background
        mainFunction.createEndGameElement(272, 0, 200, 80, e);
        mainFunction.createEndGameElement(280, 80, 192, 56, e);
        mainFunction.EndGameTileX = 80;
        mainFunction.EndGameTileY = 0;
        for (var b = 280; b <= 472; b += 8) for (var c = 0; c <= 136; c += 8) {
            if (mainFunction.rand() < 0.03) {
                mainFunction.EndGameTileX = Math.floor(mainFunction.rand() * 25) * 10;                         //when the game is over, the picture "game over" in the middle of screen
                mainFunction.EndGameTileY = Math.floor(mainFunction.rand() * 2) * 10                           //EndGameTileX,EndGameTileY-position
            }
            mainFunction.createEndGameElement(b, c, 8, 8, a)
        }
        mainFunction.guyflow(14)
    };

    mainFunction.nextlevel = function (b) {                                                                           //when the next round

        mainFunction.round++;                                                                                         //increse round number
        mainFunction.rounds = mainFunction.round >= array.length ? array[array.length - 1] : array[mainFunction.round];
        if ((mainFunction.rounds.pacFoodEat_T > 0) && (mainFunction.rounds.pacFoodEat_T <= 6))//when larger pellet time
            mainFunction.rounds.pacFoodEat_T = Math.round(mainFunction.rounds.pacFoodEat_T * D);
        mainFunction.rounds.guyGhostAllowedDeadTotalTime = mainFunction.rounds.pacFoodEat_T + mainFunction.timing[1] * (mainFunction.rounds.ghostNum * 2 - 1); //when the pellet time decrease acoording to fly time

        for (var c in mainFunction.guys) mainFunction.guys[c].dotCount = 0;                                   //pellet numbers format
        mainFunction.alternatePenLeavingScheme = e;
        mainFunction.lostheart = e;
        mainFunction.updateChrome();
        mainFunction.resetground();
        mainFunction.gameReply(b);                                                                                    //game record format

        if(mainFunction.round == 3){                                                                                  //if round is over 4 , result show and over message!
            var wins = mainFunction.goal.toString().split(",");                                                       //mainFunction.goal = e.x-120,1120 ,so wins[0]-integer 120,wins[1]-integer 1120
            if(parseInt(wins[0])>= parseInt(wins[1])){
                alert("Game Over 1Up wins")
                window.location.assign("index.html")
            }else{
                alert("Game Over 2Up wins")
                window.location.assign("index.html")
            }
        }
    };

    mainFunction.newMode = function () {                                                                              // if pacmans die, release 1 heart.
        mainFunction.alternatePenLeavingScheme = a;
        mainFunction.foodNowCount = 0;                                                                                //eaten pellet format
        mainFunction.pacmanhearts--;
        mainFunction.newLife();

        var vic;
        var win = mainFunction.goal.toString().split(",");                                                            //mainFunction.scroe is e.x. 170,3920
        if(parseInt(win[0]) >= parseInt(win[1])){                                                                       // estimate 1up and 2up
            vic = "1 UP"                                                                                                //win[1]-170,win[2]-3920
        }else{
            vic = "2 UP"
        }
        mainFunction.pacmanhearts == -1 ? mainFunction.guyflow(8) : mainFunction.gameReply(e)        // if pacman really die without 0 heart,game is over and result show
        if(mainFunction.pacmanhearts == -1) {

            if(!parseInt(win[1]) == 0) {                                                                                //if 2 players mode, estimate between 2 players.
                alert("Game is over.  " + vic.toString() + "  wins")                                                    //Go back to first screen
                window.location.assign("index.html")
            }else{                                                                                                      // if 1 player mode,notify 'Game Over'
                alert("Game is over.")
                window.location.assign("index.html")
            }
            mainFunction.poleroy()                                                                                    //Game format
        }
    };

    mainFunction.switchghosting = function (b, c) {                                                            //according to each different situation, pacman rate control ,and arrowection
        if (b == 4 && mainFunction.rounds.pacFoodEat_T == 0) for (var d in mainFunction.guys) {       //arrowection
            var f = mainFunction.guys[d];
            if (f.ghost) f.reversearrowectionsNext = a
        } else {
            f = mainFunction.ghosting;
            if (b == 4 && mainFunction.ghosting != 4) mainFunction.lastghosting = mainFunction.ghosting;
            mainFunction.ghosting = b;
            switch (b) {
                case 1:case 2:
                mainFunction.pacV = mainFunction.rounds.pacmaneV * 0.8;                              //pacman current rate change
                mainFunction.pacFoodV = mainFunction.rounds.Eatfood_V * 0.8;                  //pacman current rate change in condition to eat pellet
                break;
                case 4:
                    mainFunction.pacV = mainFunction.rounds.ghostWeak_Time * 0.8;             //pacman current rate change in condition when guyGhost weak
                    mainFunction.pacFoodV = mainFunction.rounds.pacFood_V * 0.8;               //pacman current eat rate change in condition when guyGhost weak
                    mainFunction.fright = mainFunction.rounds.guyGhostAllowedDeadTotalTime;                  //pacman current time change in condition when guyGhost weak
                    mainFunction.modeScoreMultiplier = 1;
                    break
            }

            for (d in mainFunction.guys) {                                                                         //according to each level,guyGhosts rate control
                f = mainFunction.guys[d];
                if (f.ghost) {
                    if (b != 64 && !c) f.modeChangedWhileInPen = a;
                    if (b == 4) f.eatenInThisFrightMode = e;
                    if (f.mode != 8 && f.mode != 16 && f.mode != 32 && f.mode != 128 && f.mode != 64 || c) {
                        if (!c && f.mode != 4 && f.mode != b) f.reversearrowectionsNext = a;
                        f.a(b)
                    }
                } else {
                    f.fullrate = mainFunction.pacV;
                    f.Eatfood_V = mainFunction.pacFoodV;
                    f.guyHomeV = mainFunction.pacV;
                    f.d()
                }
            }
        }
    };
    mainFunction.figureOutPenLeaving = function () {
        if (mainFunction.alternatePenLeavingScheme) {                                                                 //guyGhost going out home time at first moment
            mainFunction.foodNowCount++;
            switch (mainFunction.foodNowCount) {
                case m[1]:mainFunction.guys[mainFunction.pacmanNum + 1].free = a;break;                //red guyGhost guyGhost going out home time at first moment
                case m[2]:mainFunction.guys[mainFunction.pacmanNum + 2].free = a;break;                //pink guyGhost guyGhost going out home time at first moment
                case m[3]:if (mainFunction.guys[mainFunction.pacmanNum + 3].mode == 16) mainFunction.alternatePenLeavingScheme = e;break//blue guyGhost guyGhost going out home time at first moment
            }                                                                                                                                       //yellow guyGhost guyGhost going out home time at first moment
        } else if (mainFunction.guys[mainFunction.pacmanNum + 1].mode == 16 || mainFunction.guys[mainFunction.pacmanNum + 1].mode == 8) {
            mainFunction.guys[mainFunction.pacmanNum + 1].dotCount++;
            if (mainFunction.guys[mainFunction.pacmanNum + 1].dotCount >= mainFunction.rounds.LimitsTime[1]) mainFunction.guys[mainFunction.pacmanNum + 1].free = a
        } else if (mainFunction.guys[mainFunction.pacmanNum + 2].mode == 16 || mainFunction.guys[mainFunction.pacmanNum + 2].mode == 8) {
            mainFunction.guys[mainFunction.pacmanNum + 2].dotCount++;
            if (mainFunction.guys[mainFunction.pacmanNum + 2].dotCount >= mainFunction.rounds.LimitsTime[2]) mainFunction.guys[mainFunction.pacmanNum + 2].free = a
        } else if (mainFunction.guys[mainFunction.pacmanNum + 3].mode == 16 || mainFunction.guys[mainFunction.pacmanNum + 3].mode == 8) {
            mainFunction.guys[mainFunction.pacmanNum + 3].dotCount++;
            if (mainFunction.guys[mainFunction.pacmanNum + 3].dotCount >= mainFunction.rounds.LimitsTime[3]) mainFunction.guys[mainFunction.pacmanNum + 3].free = a
        }
    };
    mainFunction.LeaveTime = function () {
        mainFunction.forceTime = mainFunction.rounds.ForceTime * D                                       //after dead and alive guyGhost ,stop time flies
    };

    mainFunction.foodEaten = function (b, c) {                                                                        //when the pacman eat pellet,
        mainFunction.restfood--;                                                                                 //decrease pellet numbers
        mainFunction.foodsEaten++;                                                                                    //increase pellet eaten
        mainFunction.guys[b].c(1);
        if (mainFunction.ground[c[0]][c[1]].dot == 2) {                                                         //add total score
            mainFunction.switchghosting(4, e);
            mainFunction.scoreFinal(50, b)
        } else mainFunction.scoreFinal(10, b);
        var d = document.getElementById(mainFunction.getDotElementId(c[0], c[1]));                                    //remove pellet on map
        d.style.display = "none";
        mainFunction.ground[c[0]][c[1]].dot = 0;
        mainFunction.updating();
        mainFunction.LeaveTime();
        mainFunction.figureOutPenLeaving();
        if (mainFunction.foodsEaten == 70 || mainFunction.foodsEaten == 170) mainFunction.showghostStop();  //when time is 70 and 170, appear bonus in the middle of map
        mainFunction.restfood == 0 && mainFunction.finishround();
    };

    mainFunction.getghostStopSprite = function (b) {                                                            //the time when the guyGhost allowed to eaten for pacman
        var c = b <= 4 ? 128 : 160;
        b = 128 + 16 * ((b - 1) % 4);
        return [c, b]
    };
    mainFunction.getghostStopScoreSprite = function (b) {                                                       //score when time when the guyGhost allowed to eaten for pacman
        var c = 128;
        b = 16 * (b - 1);
        return [c, b]
    };
    mainFunction.hidebonus = function () {                                                                            //When the time flies,appear bonus in the middle of map
        mainFunction.ghostStopShown = e;
        mainFunction.changeElementBkPos(mainFunction.ghostStopEl, 32, 16, a)
    };

    mainFunction.moveguys = function () {                                                                          //each guyGhosts and pacmans move event
        for (var b in mainFunction.guys) mainFunction.guys[b].move()
    };

    mainFunction.guyGhostDead = function (b, c) {                                                                      //when guyGhost dead,
        mainFunction.scoreFinal(200 * mainFunction.modeScoreMultiplier, c);                                           //increse total score +200
        mainFunction.modeScoreMultiplier *= 2;                                                                        //increse +400,+800,+1600
        mainFunction.guyID = b;                                                                         //guyGhost id eaten from pacmans
        mainFunction.playerEatingguyGhostId = c;
        mainFunction.guyflow(1)
    };

    mainFunction.playerDies = function (b) {                                                                          //pacman id eaten from guyGhost
        mainFunction.playerDyingId = b;
        mainFunction.guyflow(2)                                                                          //next mode
    };

    mainFunction.estimateThings = function () {
        mainFunction.tilesChanged = e;
        for (var b = mainFunction.pacmanNum; b < mainFunction.pacmanNum + 4; b++) for (var c = 0; c < mainFunction.pacmanNum; c++) if (mainFunction.guys[b].tilePos[0] == mainFunction.guys[c].tilePos[0] && mainFunction.guys[b].tilePos[1] == mainFunction.guys[c].tilePos[1]) if (mainFunction.guys[b].mode == 4) {
            mainFunction.guyGhostDead(b, c);
            return
        } else mainFunction.guys[b].mode != 8 && mainFunction.guys[b].mode != 16 && mainFunction.guys[b].mode != 32 && mainFunction.guys[b].mode != 128 && mainFunction.guys[b].mode != 64 && mainFunction.playerDies(c)
    };

    mainFunction.updating = function () {                                                               //guyGhost rate decrease
        var b = mainFunction.rounds.Ghost_V * 0.8;                                                                   //guyGhost rate decrease * 0.8
        if (!mainFunction.lostheart || mainFunction.guys[mainFunction.pacmanNum + 3].mode != 16) {
            var c = mainFunction.rounds;                                                                              //
            if (mainFunction.restfood < c.girlpacFoodLeftPart2) b = c.girlPacratePart2 * 0.8;
            else if (mainFunction.restfood < c.FoodLeftPart1) b = c.ratePart1 * 0.8
        }
        if (b != mainFunction.cruiseElroyrate) {
            mainFunction.cruiseElroyrate = b;
            mainFunction.guys[mainFunction.pacmanNum].d()
        }
    };
    mainFunction.getrate = function (b) {
        if (!mainFunction.rate[b]) {
            var c = 0,
                d = 0;
            mainFunction.rate[b] = [];
            for (var f = 0; f < D; f++) {
                c += b;
                if (Math.floor(c) > d) {
                    mainFunction.rate[b].push(a);
                    d = Math.floor(c)
                } else mainFunction.rate[b].push(e)
            }
        }
        return mainFunction.rate[b]
    };

    mainFunction.finishround = function () {                                                                          //finish level
        mainFunction.guyflow(9)
    };
////when the pacman dead, change the game report and image iconstart---------------------------
    mainFunction.guyflow = function (b) {                                                                //when the pacman dead, change the game report and image icon
        mainFunction.playing = b;
        if (b != 13) for (var c = 0; c < mainFunction.pacmanNum + 4; c++) mainFunction.guys[c].b();
        switch (b) {
            case 0:break;
            case 2:mainFunction.stopAllothers();mainFunction.timeing = mainFunction.timing[3];break;
            case 3:mainFunction.timeing = mainFunction.timing[4];break;
            case 6:mainFunction.imagG.style.visibility = "hidden";mainFunction.timeing = mainFunction.timing[5];break;
            case 7:
                mainFunction.stopAllothers();
                mainFunction.imagG.style.visibility = "";
                mainFunction.doorEl.style.display = "block";
                b = document.createElement("div");
                b.id = "pcm-re";
                mainFunction.prepareElement(b, 160, 0);
                mainFunction.groundEl.appendChild(b);
                mainFunction.timeing = mainFunction.timing[6];
                break;
            case 4:
                mainFunction.doorEl.style.display = "block";
                b = document.createElement("div");
                b.id = "pcm-re";
                mainFunction.prepareElement(b, 160, 0);
                mainFunction.groundEl.appendChild(b);
                mainFunction.timeing = mainFunction.timing[7];
                mainFunction.stopAllothers();
                break;
            case 5:
                mainFunction.pacmanhearts--;
                mainFunction.newLife();
                mainFunction.timeing = mainFunction.timing[8];
                break;
            case 8:case 14:
            b = document.getElementById("pcm-re");
            funcsPac.dom.remove(b);
            mainFunction.stopAllothers();
            b = document.createElement("div");
            b.id = "pcm-go";
            mainFunction.prepareElement(b, 8, 152);
            mainFunction.groundEl.appendChild(b);
            mainFunction.timeing = mainFunction.timing[9];
            break;
            case 9:mainFunction.stopAllothers();mainFunction.timeing = mainFunction.timing[10];break;
            case 10:mainFunction.doorEl.style.display = "none";mainFunction.timeing = mainFunction.timing[11];break;
            case 11:mainFunction.imagG.style.visibility = "hidden";mainFunction.timeing = mainFunction.timing[12];break;
            case 12:mainFunction.groundEl.style.visibility = "hidden";mainFunction.timeing = mainFunction.timing[13];break;
            case 1:mainFunction.timeing = mainFunction.timing[2];break;
            case 13:mainFunction.startCutscene();break
        }
    };
////when the pacman dead, change the game report and image icon

    mainFunction.showChrome = function (b) {                                                                          //show different method
        mainFunction.showElementById("pcm-sc-1-l", b);
        mainFunction.showElementById("pcm-sc-2-l", b);
        mainFunction.showElementById("pcm-sc-1", b);
        mainFunction.showElementById("pcm-sc-2", b);
        mainFunction.showElementById("pcm-li", b);
        mainFunction.showElementById("pcm-so", b)
    };

    mainFunction.stopCutscene = function () {
        mainFunction.groundEl.style.visibility = "";
        funcsPac.dom.remove(mainFunction.cutsceneimagG);
        mainFunction.showChrome(a);
        mainFunction.nextlevel(e)
    };

    mainFunction.Next = function () {
        mainFunction.cutsceneSequenceId++;
        if (mainFunction.cutscene.sequence.length == mainFunction.cutsceneSequenceId) mainFunction.stopCutscene();
        else {
            var b = mainFunction.cutscene.sequence[mainFunction.cutsceneSequenceId];
            mainFunction.cutsceneTime = b.time * D;
            for (var c in mainFunction.cutsceneguys) {
                var d = mainFunction.cutsceneguys[c];
                d.arrow = b.moves[c].arrow;
                d.rate = b.moves[c].rate;
                if (b.moves[c].elId) d.el.id = b.moves[c].elId;
                if (b.moves[c].mode) d.mode = b.moves[c].mode;
                d.b()
            }
        }
    };

    mainFunction.checking = function () {                                                                        //check event scence
        mainFunction.cutsceneTime <= 0 && mainFunction.Next()
    };

    mainFunction.advanceCutscene = function () {
        for (var b in mainFunction.cutsceneguys) {
            var c = mainFunction.cutsceneguys[b],
                d = l[c.arrow];
            c.pos[d.XY] += d.riseUp * c.rate;
            c.b()
        }
        mainFunction.cutsceneTime--
    };

    mainFunction.updateActorPositions = function () {                                                                 //guys position change
        for (var b in mainFunction.guys) mainFunction.guys[b].k()
    };

    mainFunction.generat = function () {
        switch (mainFunction.playing) {
            case 4:case 5:case 6:case 7:case 9:case 10:case 11:case 12:mainFunction.groundEl.className = "";break;
            case 8:case 14:mainFunction.groundEl.className = "blk";break;
            default:
                if (mainFunction.wholeTime % (mainFunction.timing[0] * 2) == 0) mainFunction.groundEl.className = "";
                else if (mainFunction.wholeTime % (mainFunction.timing[0] * 2) == mainFunction.timing[0]) mainFunction.groundEl.className = "blk";
                break
        }
    };
    mainFunction.Mark = function () {                                                                //calculate total score
        if (mainFunction.playing != 13) {
            var b = "";
            if (mainFunction.wholeTime % (mainFunction.timing[17] * 2) == 0) b = "visible";
            else if (mainFunction.wholeTime % (mainFunction.timing[17] * 2) == mainFunction.timing[17]) b = "hidden";
            if (b) for (var c = 0; c < mainFunction.pacmanNum; c++) mainFunction.goalLabelEl[c].style.visibility = b
        }
    };

    mainFunction.endgame = function () {                                                                     // the pacaman allowed to eat guyGhost
        mainFunction.switchghosting(mainFunction.lastghosting, e)
    };

    //each other timer event----------------------start
    mainFunction.gameTimer = function () {
        if (mainFunction.timeing) {
            mainFunction.timeing--;
            switch (mainFunction.playing) {
                case 2:
                case 3:
                    for (var b = 0; b < mainFunction.pacmanNum + 4; b++) mainFunction.guys[b].b();
                    break;
                case 10:
                    Math.floor(mainFunction.timeing / (mainFunction.timing[11] / 8)) % 2 == 0 ? mainFunction.changeElementBkPos(mainFunction.groundEl, 322, 2, e) : mainFunction.changeElementBkPos(mainFunction.groundEl, 322, 138, e)
            }
            if (mainFunction.timeing <= 0) {
                mainFunction.timeing = 0;
                switch (mainFunction.playing) {
                    case 1:
                        mainFunction.guyflow(0);
                        mainFunction.ghosteye++;
                        mainFunction.guys[mainFunction.guyID].el.className = "pcm-ac";
                        mainFunction.guys[mainFunction.guyID].a(8);
                        var c = e;
                        for (b = mainFunction.pacmanNum; b < mainFunction.pacmanNum + 4; b++) if (mainFunction.guys[b].mode == 4 || (mainFunction.guys[b].mode == 16 || mainFunction.guys[b].mode == 128) && !mainFunction.guys[b].eatenInThisFrightMode) {
                            c = a;
                            break
                        }
                        c || mainFunction.endgame();
                        break;
                    case 2:mainFunction.guyflow(3);break;
                    case 3:mainFunction.newMode();break;
                    case 4:mainFunction.guyflow(5);break;
                    case 6:mainFunction.guyflow(7);break;
                    case 7:case 5:
                    b = document.getElementById("pcm-re");
                    funcsPac.dom.remove(b);
                    mainFunction.guyflow(0);
                    break;
                    case 8:
                        b = document.getElementById("pcm-go");
                        funcsPac.dom.remove(b);
                        funcsPac.pacManQuery && funcsPac.pacManQuery();
                        break;
                    case 9:mainFunction.guyflow(10);break;
                    case 10:mainFunction.guyflow(11);break;
                    case 11:
                        if (mainFunction.rounds.cutsceneId) {
                            mainFunction.cutsceneId = mainFunction.rounds.cutsceneId;
                            mainFunction.guyflow(13)
                        } else {
                            mainFunction.imagG.style.visibility = "";
                            mainFunction.nextlevel(e)
                        }
                        break;
                    case 12:
                        mainFunction.groundEl.style.visibility = "";
                        mainFunction.imagG.style.visibility = "";
                        mainFunction.switchToDoubleMode();
                        break
                }
            }
        }
    };
    //each other timer event

    mainFunction.stopTimer = function () {                                                           //if pacman eats big dot,have a event.(ghostStop time)
        if (mainFunction.ghostStopTime) {
            mainFunction.ghostStopTime--;
            mainFunction.ghostStopTime <= 0 && mainFunction.hidebonus()
        }
    };


    mainFunction.modeTimer = function () {                                                               //if pacman eats big dot,have a event.(ghostStop-ghost time)
        if (mainFunction.fright) {
            mainFunction.fright--;
            if (mainFunction.fright <= 0) {
                mainFunction.fright = 0;
                mainFunction.endgame()
            }
        } else if (mainFunction.times > 0) {
            mainFunction.times--;
            if (mainFunction.times <= 0) {
                mainFunction.times = 0;
                mainFunction.posing++;
                if (mainFunction.rounds.ghostCheck_Time[mainFunction.posing]) {                     //  intial time guyGhost place
                    mainFunction.times = mainFunction.rounds.ghostCheck_Time[mainFunction.posing] * D;
                    switch (mainFunction.ghosting) {
                        case 2:
                            mainFunction.switchghosting(1, e);
                            break;
                        case 1:
                            mainFunction.switchghosting(2, e);
                            break
                    }
                }
            }
        }
    };
    mainFunction.leaveTimer = function () {                                                             //when the pacman eats larger pellet,change the guyGhost color
        if (mainFunction.forceTime) {
            mainFunction.forceTime--;
            if (mainFunction.forceTime <= 0) {
                for (var b = 1; b <= 3; b++) if (mainFunction.guys[mainFunction.pacmanNum + b].mode == 16) {
                    mainFunction.guys[mainFunction.pacmanNum + b].free = a;
                    break
                }
                mainFunction.LeaveTime()
            }
        }
    };

    mainFunction.timerEvent = function () {                                                                           //increase time event
        if (mainFunction.playing == 0) {
            mainFunction.leaveTimer();
            mainFunction.stopTimer();
            mainFunction.modeTimer()
        }
        mainFunction.gameTimer()
    };

    mainFunction.tick = function () {                                                                                 //increase time event
        var b = (new Date).getTime();
        mainFunction.lastTimeDelta += b - mainFunction.lastTime - mainFunction.tickInterval;
        if (mainFunction.lastTimeDelta > 100) mainFunction.lastTimeDelta = 100;
        if (mainFunction.Fps && mainFunction.lastTimeDelta > 50) {
            mainFunction.lastTimeSlownessCount++;
            mainFunction.lastTimeSlownessCount == 20 && mainFunction.decreaseFps()
        }
        var c = 0;
        if (mainFunction.lastTimeDelta > mainFunction.tickInterval) {
            c = Math.floor(mainFunction.lastTimeDelta / mainFunction.tickInterval);
            mainFunction.lastTimeDelta -= mainFunction.tickInterval * c
        }
        mainFunction.lastTime = b;
        if (mainFunction.playing == 13) {                                                                        //if correct mode
            for (b = 0; b < mainFunction.tickMultiplier + c; b++) {                                                   //according to time,guyGhost rate
                mainFunction.advanceCutscene();
                mainFunction.breakTime = (mainFunction.breakTime + 1) % D;
                mainFunction.wholeTime++
            }
            mainFunction.checking();
            mainFunction.Mark()
        } else for (b = 0; b < mainFunction.tickMultiplier + c; b++) {
            mainFunction.moveguys();
            if (mainFunction.playing == 0) if (mainFunction.tilesChanged) {
                mainFunction.estimateThings();
                mainFunction.updateActorTargetPositions()
            }
            mainFunction.wholeTime++;                                                                                 //increase whole game time
            mainFunction.breakTime = (mainFunction.breakTime + 1) % D;
            mainFunction.generat();
            mainFunction.Mark();
            mainFunction.timerEvent()
        }
    };

    mainFunction.scoreFinal = function (b, c) {                                                                         // add total score according to increase round
        mainFunction.goal[c] += b;
        mainFunction.scoreUpdate(c)
    };

    mainFunction.updateChrome = function () {
        mainFunction.updatelevel();
        mainFunction.newLife();
        for (var b = 0; b < mainFunction.pacmanNum; b++) mainFunction.scoreUpdate(b)
    };

    mainFunction.scoreUpdate = function (b) {                                                                         //uodate total score for pacmans
        var c = mainFunction.goal[b].toString();
        if (c.length > mainFunction.goalDigits) c = c.substr(c.length - mainFunction.goalDigits, mainFunction.goalDigits);//if the score digit is over 9,then the next digit is selected
        for (var d = 0; d < mainFunction.goalDigits; d++) {                                                           //because of the score should be displayed thruogh 4 digits pan.
            var f = document.getElementById("pcm-sc-" + (b + 1) + "-" + d),
                h = c.substr(d, 1);                                                                                     //capture 1 digit from whole present socre
            h ? mainFunction.changeElementBkPos(f, 8 + 8 * parseInt(h, 10), 144, a) : mainFunction.changeElementBkPos(f, 48, 0, a)// mathematical socroe sum
        }
    };

    mainFunction.newLife = function () {                                                                         //update pacman lives
        mainFunction.pacmanheartsEl.innerHTML = "";
        for (var b = 0; b < mainFunction.pacmanhearts; b++) {                                                         //if the pacman dead,delete the pacman icon placed on top-right display
            var c = document.createElement("div");
            c.className = "pcm-lif";
            mainFunction.prepareElement(c, 64, 129);                                                                  //position
            mainFunction.pacmanheartsEl.appendChild(c)
        }
    };

    mainFunction.updatelevel = function () {                                                                          //update new level
        mainFunction.roundEl.innerHTML = "";
        for (var b = mainFunction.round; b >= Math.max(mainFunction.round - 4 + 1, 1); b--) {                       //if the pacman goes into new round,insert level icon placed on bottom-right display
            var c = b >= array.length ? array[array.length - 1].ghostStop : array[b].ghostStop,
                d = document.createElement("div");
            c = mainFunction.getghostStopSprite(c);
            mainFunction.prepareElement(d, c[0], c[1]);
            mainFunction.roundEl.appendChild(d)
        }
        mainFunction.roundEl.style.marginTop = (4 - Math.min(mainFunction.round, 4)) * 16 + "px"                    //extract position
    };

    mainFunction.insert = function () {
        mainFunction.imagG.innerHTML = "";
        mainFunction.goalDigits = mainFunction.pacmanNum == 1 ? 10 : 5;
        mainFunction.goalLabelEl = [];
        mainFunction.goalLabelEl[0] = document.createElement("div");
        mainFunction.goalLabelEl[0].id = "pcm-sc-1-l";
        mainFunction.prepareElement(mainFunction.goalLabelEl[0], 160, 56);
        mainFunction.imagG.appendChild(mainFunction.goalLabelEl[0]);
        mainFunction.goalEl = [];
        mainFunction.goalEl[0] = document.createElement("div");                                                       //In 1.png file,extract whole icons
        mainFunction.goalEl[0].id = "pcm-sc-1";
        for (var b = 0; b < mainFunction.goalDigits; b++) {                                                           //extract every icon from png-file
            var c = document.createElement("div");
            c.id = "pcm-sc-1-" + b;
            c.style.top = b * 8 + "px";
            c.style.left = 0;
            c.style.position = "absolute";
            c.style.width = "8px";
            c.style.height = "8px";
            mainFunction.prepareElement(c, 48, 0);
            mainFunction.goalEl[0].appendChild(c)
        }
        mainFunction.imagG.appendChild(mainFunction.goalEl[0]);                                            //screenshoot icon from img
        mainFunction.pacmanheartsEl = document.createElement("div");
        mainFunction.pacmanheartsEl.id = "pcm-li";
        mainFunction.imagG.appendChild(mainFunction.pacmanheartsEl);
        mainFunction.roundEl = document.createElement("div");
        mainFunction.roundEl.id = "pcm-le";
        mainFunction.imagG.appendChild(mainFunction.roundEl);

        if (mainFunction.pacmanNum == 2) {                                                                            //extract pac woman in png-file
            mainFunction.goalLabelEl[1] = document.createElement("div");
            mainFunction.goalLabelEl[1].id = "pcm-sc-2-l";
            mainFunction.prepareElement(mainFunction.goalLabelEl[1], 160, 64);                                      //position
            mainFunction.imagG.appendChild(mainFunction.goalLabelEl[1]);
            mainFunction.goalEl[1] = document.createElement("div");
            mainFunction.goalEl[1].id = "pcm-sc-2";
            for (b = 0; b < mainFunction.goalDigits; b++) {
                c = document.createElement("div");
                c.id = "pcm-sc-2-" + b;
                c.style.top = b * 8 + "px";
                c.style.left = 0;
                c.style.position = "absolute";
                c.style.width = "8px";
                c.style.height = "8px";
                mainFunction.prepareElement(c, 48, 0);                                                                //position
                mainFunction.goalEl[1].appendChild(c)
            }
            mainFunction.imagG.appendChild(mainFunction.goalEl[1])
        }

    };

    mainFunction.clearFoodNow = function () {                                                                         // place initilize
        mainFunction.fodNum = [e, e];
        mainFunction.foodH = [e, e]
    };
    mainFunction.stopAllothers = function () {};
    mainFunction.initializeTickTimer = function () {
        window.clearInterval(mainFunction.tickTimer);
        mainFunction.fps = C[mainFunction.fpsChoice];
        mainFunction.tickInterval = 1E3 / mainFunction.fps;
        mainFunction.tickMultiplier = D / mainFunction.fps;
        mainFunction.timing = {};
        for (var b in w) {
            var c = !(b == 7 || b == 8) ? 1 : w[b];
            mainFunction.timing[b] = Math.round(c * D)
        }
        mainFunction.lastTime = (new Date).getTime();
        mainFunction.lastTimeDelta = 0;
        mainFunction.lastTimeSlownessCount = 0;
        mainFunction.tickTimer = window.setInterval(mainFunction.tick, mainFunction.tickInterval)
    };
    mainFunction.decreaseFps = function () {
        if (mainFunction.fpsChoice < C.length - 1) {
            mainFunction.fpsChoice++;
            mainFunction.initializeTickTimer();
            if (mainFunction.fpsChoice == C.length - 1) mainFunction.Fps = e
        }
    };

    mainFunction.addCss = function () {                                                                               //html add css
        var b = "#pcm-c {  width: 554px;  border-top: 25px solid black;  padding-bottom: 25px;  height: 136px;  position: relative;  background: black;  outline: 0;  overflow: hidden;  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);}#pcm-c * {  position: absolute;  overflow: hidden;}#pcm-p,#pcm-cc {  left: 45px;  width: 464px;  height: 136px;  z-index: 99;  overflow: hidden;}#pcm-p .pcm-d {  width: 2px;  height: 2px;  margin-left: 3px;  margin-top: 3px;  background: #f8b090;  z-index: 100;}#pcm-p .pcm-e {  width: 8px;  height: 8px;  z-index: 101;}#pcm-sc-1 {  left: 18px;  top: 16px;  width: 8px;  height: 56px;  position: absolute;  overflow: hidden;}#pcm-sc-2 {  left: 18px;  top: 80px;  width: 8px;  height: 56px;  position: absolute;  overflow: hidden;}#pcm-le {  position: absolute;  left: 515px;  top: 74px;  height: 64px;  width: 32px;} #pcm-le div {  position: relative;}#pcm-sc-1-l {    left: -2px;  top: 0;  width: 48px;  height: 8px;}#pcm-sc-2-l {    left: -2px;  top: 64px;  width: 48px;  height: 8px;}#pcm-so {  left: 7px;  top: 116px;  width: 12px;  height: 12px;  border: 8px solid black;  cursor: pointer;}#pcm-li {  position: absolute;  left: 523px;  top: 0;  height: 80px;  width: 16px;}#pcm-li .pcm-lif {  position: relative;  width: 16px;  height: 12px;  margin-bottom: 3px;}#pcm-p.blk .pcm-e {  visibility: hidden;}#pcm-c .pcm-ac {  width: 16px;  height: 16px;  margin-left: -4px;  margin-top: -4px;  z-index: 110;}#pcm-c .pcm-n {  z-index: 111;}#pcm-c #pcm-stck {  z-index: 109;}#pcm-c #pcm-gbug {  width: 32px;}#pcm-c #pcm-bpcm {  width: 32px;  height: 32px;  margin-left: -20px;  margin-top: -20px;}#pcm-f,#pcm-le div {  width: 32px;  height: 16px;  z-index: 105;}#pcm-f {  margin-left: -8px;  margin-top: -4px;}#pcm-do {  width: 19px;  height: 2px;  left: 279px;  top: 46px;  overflow: hidden;  position: absolute;  background: #ffaaa5;}#pcm-re {  width: 48px;  height: 8px;  z-index: 120;  left: 264px;  top: 80px;}#pcm-go {  width: 80px;  height: 8px;  z-index: 120;  left: 248px;  top: 80px;}";
        mainFunction.styleElement =
            document.createElement("style");
        mainFunction.styleElement.type = "text/css";
        if (mainFunction.styleElement.styleSheet) mainFunction.styleElement.styleSheet.cssText = b;
        else mainFunction.styleElement.appendChild(document.createTextNode(b));
        document.getElementsByTagName("head")[0].appendChild(mainFunction.styleElement)
    };

    mainFunction.createimagGement = function () {
        mainFunction.imagG = document.createElement("div");                                                  //start game mode
        mainFunction.imagG.id = "pcm-c";
        mainFunction.imagG.hideFocus = a;                                                                    //focus on image
        document.getElementById("location").appendChild(mainFunction.imagG);
        mainFunction.imagG.tabIndex = 0;
        mainFunction.imagG.focus()
    };

    mainFunction.everythingIsReady = function () {                                                                    //check ready all?
        if (!mainFunction.ready) {
            mainFunction.ready = a;
            var b = document.getElementById("location-l");
            funcsPac.dom.remove(b);
            document.getElementById("location").style.background = "black";
            mainFunction.addCss();
            mainFunction.createimagGement();
            mainFunction.rate = [];
            mainFunction.pic = [];
            mainFunction.pic[1] = 2;
            mainFunction.pic[2] = 1;
            mainFunction.pic[4] = 8;
            mainFunction.pic[8] = 4;
            mainFunction.addEventListeners();
            mainFunction.fpsChoice = 0;
            mainFunction.Fps = a;
            mainFunction.initializeTickTimer();
            mainFunction.startPlay()
        }
    };
    mainFunction.Good = function () {                                                                             //pre-check image

        if (mainFunction.graphicsReady) {
            mainFunction.recycle(1);
            mainFunction.everythingIsReady()
        }
    };
    mainFunction.loading = function (b) {                                                                        // when the image preload, insert new image round, load image.
        var c = new Image,
            d = funcsPac.browser.engine.IE;
        if (!d) c.onload = mainFunction.imageLoaded;
        c.src = b;
        d && mainFunction.imageLoaded()
    };
    mainFunction.imageLoaded = function () {                                                                          //when the image upload, check game start mode.
        mainFunction.graphicsReady = a;
        mainFunction.Good()                                                                                       //check reday?
    };

    mainFunction.prepareGraphics = function () {
        mainFunction.graphicsReady = e;
        if(mainFunction.round == 1){
            mainFunction.loading("src/level1.png")    }    else{                                                 // initial image-first round 1
            mainFunction.loading("src/level2.png")
        }
    };

    mainFunction.trimString = function (b) {
        return b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };

    mainFunction.g = function (b, c) {
        if (b < c) return -1;
        else if (b > c) return 1;
        return 0
    };

    mainFunction.Calls = function () {                                                                  //responsive function for click of index
        funcsPac.pacman = {};
        funcsPac.pacman.selectmember = mainFunction.selectmember;                                                    //select 1 player
        funcsPac.pacman.poleroy = mainFunction.poleroy                                                               //game format
    };

    mainFunction.recycle = function (b) {                                                                     //change the first display image.
        b = Math.round(b * 200);                                                                                        //nearest integer function
        document.getElementById("location-b").style.width = b + "px"                                                    // upload map
    };

    mainFunction.init = function () {                                                                                  //intialize
        mainFunction.ready = e;
        document.getElementById("location").title = "";
        mainFunction.recycle(0.33);                                                                           // update loading process time only 0.33 second
        mainFunction.Calls();
        mainFunction.useCss = navigator.userAgent.indexOf("MSIE 5.") != -1 || navigator.userAgent.indexOf("MSIE 6.") != -1 || navigator.userAgent.indexOf("MSIE 7.") != -1 ? e : a;// true of false associated with gameMode reply
        mainFunction.prepareGraphics();                                                                               //image upload "1.png"
    };

    mainFunction.init();

    function E(b) {
        this.id = b
    }
    E.prototype.A = function () {
        var b = r[mainFunction.pacmanNum][this.id];
        this.pos = [b.y * 8, b.x * 8];                                                                                      //initial place of whole guys
        this.posDelta = [0, 0];                                                                                             //initial place of whole guys
        this.tilePos = [b.y * 8, b.x * 8];                                                                                  //initial place of whole guys
        this.targetPos = [b.yPath * 8, b.xPath * 8];                                                                        //initial place of whole guys
        this.scatterPos = [b.yPath * 8, b.xPath * 8];                                                                       //initial place of whole guys
        this.lastActivearrow = this.arrow = b.arrow;
        this.physicalrate = this.keyarrowection = this.nextarrow = 0;
        this.c(0);
        this.reversearrowectionsNext = this.free = this.modeChangedWhileInPen = this.eatenInThisFrightMode = e;
        this.l()
    };
    //artificial intelligence event
    E.prototype.createElement = function () {
        this.el = document.createElement("div");
        this.el.className = "pcm-ac";
        this.el.id = "actor" + this.id;
        mainFunction.prepareElement(this.el, 0, 0);
        mainFunction.groundEl.appendChild(this.el);
        this.elPos = [0, 0];
        this.elBackgroundPos = [0, 0]
    };

    E.prototype.a = function (b) {
        var c = this.mode;
        this.mode = b;
        if (this.id == mainFunction.pacmanNum + 3 && (b == 16 || c == 16)) mainFunction.updating();
        switch (c) {
            case 32:mainFunction.guyGhostExitingPenNow = e;
                break;//green guyGhost go out guyGhost home time
            case 8:
                mainFunction.ghosteye > 0 && mainFunction.ghosteye--;
                mainFunction.ghosteye == 0;
                break//yellow guyGhost go out guyGhost home time
        }
        switch (b) {
            case 4:this.fullrate = mainFunction.rounds.ghostWeak_V * 0.8;this.guyHomeV = mainFunction.rounds.Home_V * 0.8;this.followingRoutine = e;break;
            case 1:this.fullrate = mainFunction.rounds.Ghost_V * 0.8;this.guyHomeV = mainFunction.rounds.Home_V * 0.8;this.followingRoutine = e;break;
            case 2:this.targetPos = this.scatterPos;this.fullrate = mainFunction.rounds.Ghost_V * 0.8;this.guyHomeV = mainFunction.rounds.Home_V * 0.8;this.followingRoutine = e;break; //guyGhosts moving
            case 8:this.guyHomeV = this.fullrate = 1.6;this.targetPos = [s[0], s[1]];this.free = this.followingRoutine = e;break;
            case 16:                    //guyGhosts moving
                this.l();
                this.followingRoutine = a;
                this.routineMoveId = -1;
                switch (this.id) {
                    case mainFunction.pacmanNum + 1:this.routineToFollow = 2;break;
                    case mainFunction.pacmanNum + 2:this.routineToFollow = 1;break;
                    case mainFunction.pacmanNum + 3:this.routineToFollow = 3;break
                }break;
            case 32:                        //guyGhosts moving
                this.followingRoutine = a;
                this.routineMoveId = -1;
                switch (this.id) {
                    case mainFunction.pacmanNum + 1:this.routineToFollow = 5;break;
                    case mainFunction.pacmanNum + 2:this.routineToFollow = 4;break;
                    case mainFunction.pacmanNum + 3:this.routineToFollow = 6;break
                }
                mainFunction.guyGhostExitingPenNow = a;break;
            case 64:                      // //if pacman eats guyGhost,and guyGhost go guyGhost-house
                this.followingRoutine = a;
                this.routineMoveId = -1;
                switch (this.id) {
                    case mainFunction.pacmanNum:
                    case mainFunction.pacmanNum + 1:this.routineToFollow = 8;break;
                    case mainFunction.pacmanNum + 2:this.routineToFollow = 7;break;
                    case mainFunction.pacmanNum + 3:this.routineToFollow = 9;break
                }
                break;
            case 128:                            //if pacman eats guyGhost,and guyGhost move behaivor
                this.followingRoutine = a;
                this.routineMoveId = -1;
                switch (this.id) {
                    case mainFunction.pacmanNum:
                    case mainFunction.pacmanNum + 1:this.routineToFollow = 11;break;
                    case mainFunction.pacmanNum + 2:this.routineToFollow = 10;break;
                    case mainFunction.pacmanNum + 3:this.routineToFollow = 12;break
                }break
        }
        this.d()
    };

    E.prototype.l = function () {
        if (this.id >= mainFunction.pacmanNum) this.targetPlayerId = Math.floor(mainFunction.rand() * mainFunction.pacmanNum)
    };
    //----------------------------------------------------------------artificial intelligence located the pellet -------------------------------------------------------------------------
    E.prototype.array = function (b) {
        if (this.arrow == mainFunction.pic[b]) {
            this.arrow = b;
            this.posDelta = [0, 0];
            this.currentrate != 2 && this.c(0);
            if (this.arrow != 0) this.lastActivearrow = this.arrow;this.nextarrow = 0
        } else if (this.arrow != b) if (this.arrow == 0) {
            if (mainFunction.ground[this.pos[0]][this.pos[1]].allowedarrow & b) this.arrow = b
        } else {
            var c = mainFunction.ground[this.tilePos[0]][this.tilePos[1]];
            if (c && c.allowedarrow & b) {
                c = l[this.arrow];
                var d = [this.pos[0], this.pos[1]];
                d[c.XY] -= c.riseUp;
                var f = 0;
                if (d[0] == this.tilePos[0] && d[1] == this.tilePos[1]) f = 1;
                else {d[c.XY] -= c.riseUp;
                    if (d[0] == this.tilePos[0] && d[1] == this.tilePos[1]) f = 2
                }
                if (f) {
                    this.arrow = b;
                    this.pos[0] = this.tilePos[0];
                    this.pos[1] = this.tilePos[1];
                    c = l[this.arrow];
                    this.pos[c.XY] += c.riseUp * f;
                    return
                }
            }
            this.nextarrow = b;
            this.posDelta = [0, 0]
        }
    };

    E.prototype.i = function (b) {
        var c = this.tilePos,
            d = l[this.arrow],
            f = [c[0], c[1]];
        f[d.XY] += d.riseUp * 8;
        var h = mainFunction.ground[f[0]][f[1]];
        if (b && !h.intersection) h = mainFunction.ground[c[0]][c[1]];
        if (h.intersection) switch (this.mode) {
            case 2:
            case 1:
            case 8:
                if ((this.arrow & h.allowedarrow) == 0 && h.allowedarrow == mainFunction.pic[this.arrow]) this.nextarrow = mainFunction.pic[this.arrow];
                else {
                    b = 99999999999;
                    c = 0;
                    for (var j in i) {
                        var k = i[j];
                        if (h.allowedarrow & k && this.arrow != mainFunction.pic[k]) {
                            d = l[k];
                            var x = [f[0], f[1]];
                            x[d.XY] += d.riseUp;
                            d = mainFunction.getDistance(x, [this.targetPos[0], this.targetPos[1]]);
                            if (d < b) {
                                b = d;
                                c = k
                            }
                        }
                    }
                    if (c) this.nextarrow = c
                }
                break;
            case 4:
                if ((this.arrow & h.allowedarrow) == 0 && h.allowedarrow == mainFunction.pic[this.arrow]) this.nextarrow = mainFunction.pic[this.arrow];
                else {
                    do f = i[Math.floor(mainFunction.rand() * 4)];
                    while ((f & h.allowedarrow) == 0 || f == mainFunction.pic[this.arrow]);
                    this.nextarrow = f
                }
                break
        }
    };

    E.prototype.p = function (b) {
        mainFunction.tilesChanged = a;
        if (this.reversearrowectionsNext) {
            this.arrow = mainFunction.pic[this.arrow];
            this.nextarrow = 0;
            this.reversearrowectionsNext = e;
            this.i(a)
        }
        if (!this.ghost && !mainFunction.ground[b[0]][b[1]].path) {
            this.pos[0] = this.lastGoodTilePos[0];
            this.pos[1] = this.lastGoodTilePos[1];
            b[0] = this.lastGoodTilePos[0];
            b[1] = this.lastGoodTilePos[1];
            this.arrow = 0
        } else this.lastGoodTilePos = [b[0], b[1]];
        mainFunction.ground[b[0]][b[1]].type == 1 && this.mode != 8 ? this.c(2) : this.c(0);
        !this.ghost && mainFunction.ground[b[0]][b[1]].dot && mainFunction.foodEaten(this.id, b);
        this.tilePos[0] = b[0];
        this.tilePos[1] = b[1]
    };

    E.prototype.t = function () {
        var b = this.tilePos;
        switch (this.arrow) {
            case 1:var c = [b[0], b[1]], d = [b[0] + 3.6, b[1]];break;
            case 2:c = [b[0] - 4, b[1]];d = [b[0], b[1]];break;
            case 4:c = [b[0], b[1]];d = [b[0], b[1] + 3.6];break;
            case 8:c = [b[0], b[1] - 4];d = [b[0], b[1]];break
        }
        if (this.pos[0] >= c[0] && this.pos[0] <= d[0] && this.pos[1] >= c[1] && this.pos[1] <= d[1]) {
            b = l[this.nextarrow];
            this.posDelta[b.XY] += b.riseUp
        }
    };
//----------------------------------------------------------------artificial intelligence dot event -------------------------------------------------------------------------

    E.prototype.front = function () {
        if (this.pos[0] == LeftOutRightIn[0].y * 8 && this.pos[1] == LeftOutRightIn[0].x * 8) {
            this.pos[0] = LeftOutRightIn[1].y * 8;
            this.pos[1] = (LeftOutRightIn[1].x - 1) * 8
        } else if (this.pos[0] == LeftOutRightIn[1].y * 8 && this.pos[1] == LeftOutRightIn[1].x * 8) {
            this.pos[0] = LeftOutRightIn[0].y * 8;
            this.pos[1] = (LeftOutRightIn[0].x + 1) * 8
        }
        this.mode == 8 && this.pos[0] == s[0] && this.pos[1] == s[1] && this.a(64);
        if (!this.ghost && this.pos[0] == v[0] && (this.pos[1] == v[1] || this.pos[1] == v[1] + 8)) mainFunction.eatghostStop(this.id)
    };

    E.prototype.u = function () {
        this.front();
        this.ghost && this.i(e);
        var b = mainFunction.ground[this.pos[0]][this.pos[1]];
        if (b.intersection) if (this.nextarrow && this.nextarrow & b.allowedarrow) {
            if (this.arrow != 0) this.lastActivearrow = this.arrow;
            this.arrow = this.nextarrow;
            this.nextarrow = 0;
            if (!this.ghost) {
                this.pos[0] += this.posDelta[0];
                this.pos[1] += this.posDelta[1];
                this.posDelta = [0, 0]
            }
        } else if ((this.arrow & b.allowedarrow) == 0) {
            if (this.arrow != 0) this.lastActivearrow = this.arrow;
            this.nextarrow = this.arrow = 0;
            this.c(0)
        }
    };
//----------------------------------------------------------------artificial intelligence disappear pellet -------------------------------------------------------------------------
    E.prototype.way = function () {
        var b = this.pos[0] / 8,
            c = this.pos[1] / 8,
            d = [Math.round(b) * 8, Math.round(c) * 8];
        if (d[0] != this.tilePos[0] || d[1] != this.tilePos[1]) this.p(d);
        else {
            b = [Math.floor(b) * 8, Math.floor(c) * 8];
            this.pos[1] == b[1] && this.pos[0] == b[0] && this.u()
        }!this.ghost && this.nextarrow && mainFunction.ground[d[0]][d[1]].intersection && this.nextarrow & mainFunction.ground[d[0]][d[1]].allowedarrow && this.t()
    };

    E.prototype.B = function () {
        if (this.id == mainFunction.pacmanNum && mainFunction.restfood < mainFunction.rounds.FoodLeftPart1 && this.mode == 2 && (!mainFunction.lostheart || mainFunction.guys[mainFunction.pacmanNum + 3].mode != 16)) {
            var b = mainFunction.guys[this.targetPlayerId];
            this.targetPos = [b.tilePos[0], b.tilePos[1]]
        } else if (this.ghost && this.mode == 1) {
            b = mainFunction.guys[this.targetPlayerId];
            switch (this.id) {
                case mainFunction.pacmanNum:
                    this.targetPos = [b.tilePos[0], b.tilePos[1]];
                    break;
                case mainFunction.pacmanNum + 1:
                    this.targetPos = [b.tilePos[0], b.tilePos[1]];
                    var c = l[b.arrow];
                    this.targetPos[c.XY] += 32 * c.riseUp;
                    if (b.arrow == 1) this.targetPos[1] -= 32;
                    break;
                case mainFunction.pacmanNum + 2:
                    var d = mainFunction.guys[mainFunction.pacmanNum],
                        f = [b.tilePos[0], b.tilePos[1]];
                    c = l[b.arrow];
                    f[c.XY] += 16 * c.riseUp;
                    if (b.arrow == 1) f[1] -= 16;
                    this.targetPos[0] = f[0] * 2 - d.tilePos[0];
                    this.targetPos[1] = f[1] * 2 - d.tilePos[1];
                    break;
                case mainFunction.pacmanNum + 3:
                    c = mainFunction.getDistance(b.tilePos, this.tilePos);
                    this.targetPos = c > 64 ? [b.tilePos[0], b.tilePos[1]] : this.scatterPos;
                    break
            }
        }
    };

    E.prototype.v = function () {
        this.routineMoveId++;
        if (this.routineMoveId == A[this.routineToFollow].length) if (this.mode == 16 && this.free && !mainFunction.guyGhostExitingPenNow) {
            this.eatenInThisFrightMode ? this.a(128) : this.a(32);
            return
        } else if (this.mode == 32 || this.mode == 128) {
            this.pos = [s[0], s[1] + 4];
            this.arrow = this.modeChangedWhileInPen ? 8 : 4;
            var b = mainFunction.ghosting;
            if (this.mode == 128 && b == 4) b = mainFunction.lastghosting;
            this.a(b);
            return
        } else if (this.mode == 64) {
            if (this.id == mainFunction.pacmanNum || this.free) this.a(128);
            else {
                this.eatenInThisFrightMode = a;
                this.a(16)
            }
            return
        } else this.routineMoveId = 0;
        b = A[this.routineToFollow][this.routineMoveId];
        this.pos[0] = b.y * 8;
        this.pos[1] = b.x * 8;
        this.arrow = b.arrow;
        this.physicalrate = 0;
        this.rate = mainFunction.getrate(b.rate);
        this.proceedToNextRoutineMove = e;
        this.b()
    };

    E.prototype.m = function () {
        var b = A[this.routineToFollow][this.routineMoveId];
        if (b) if (this.rate[mainFunction.breakTime]) {
            var c = l[this.arrow];
            this.pos[c.XY] += c.riseUp;
            switch (this.arrow) {
                case 1:case 4:
                if (this.pos[c.XY] < b.pole * 8) {
                    this.pos[c.XY] = b.pole * 8;
                    this.proceedToNextRoutineMove = a
                }
                break;
                case 2:case 8:
                if (this.pos[c.XY] > b.pole * 8) {
                    this.pos[c.XY] = b.pole * 8;
                    this.proceedToNextRoutineMove = a
                }
                break
            }
            this.b()
        }
    };

    E.prototype.j = function () {
        if (this.routineMoveId == -1 || this.proceedToNextRoutineMove) this.v();
        this.m()
    };

    E.prototype.d = function () {
        switch (this.currentrate) {
            case 0:var b = this.id == mainFunction.pacmanNum && (this.mode == 2 || this.mode == 1) ? mainFunction.cruiseElroyrate : this.fullrate;break;
            case 1:b = this.Eatfood_V;break;
            case 2:b = this.guyHomeV;break
        }
        if (this.physicalrate != b) {
            this.physicalrate = b;
            this.rate = mainFunction.getrate(this.physicalrate)
        }
    };

    E.prototype.c = function (b) {
        this.currentrate = b;
        this.d()
    };

    E.prototype.e = function () {
        if (this.arrow) if (this.rate[mainFunction.breakTime]) {
            var b = l[this.arrow];
            this.pos[b.XY] += b.riseUp;
            this.way();
            this.b()
        }
    };
    //----------------------------------------------------------------artificial intelligence movement -----------------------------start--------------------------------------------
    E.prototype.move = function () {
        if (mainFunction.playing == 0 || this.ghost && mainFunction.playing == 1 && (this.mode == 8 || this.mode == 64)) {
            if (this.keyarrowection != 0) {
                this.array(this.keyarrowection);
                this.keyarrowection = 0
            }
            if (this.followingRoutine) {
                this.j();
                this.mode == 64 && this.j()
            } else {
                this.e();
                this.mode == 8 && this.e()
            }
        }
    };

    E.prototype.k = function () {
        var b = mainFunction.getgroundX(this.pos[1] + this.posDelta[1]),
            c = mainFunction.getgroundY(this.pos[0] + this.posDelta[0]);
        if (this.elPos[0] != c || this.elPos[1] != b) {
            this.elPos[0] = c;
            this.elPos[1] = b;
            this.el.style.left = b + "px";
            this.el.style.top = c + "px"
        }
    };

    E.prototype.s = function () {
        var b = 0,
            c = 0,
            d = this.arrow;
        if (d == 0) d = this.lastActivearrow;
        if (mainFunction.playing == 1 && this.id == mainFunction.playerEatingguyGhostId) {
            b = 3;
            c = 0
        } else if ((mainFunction.playing == 9 || mainFunction.playing == 10) && this.id == 0) {
            b = 2;
            c = 0
        } else if (mainFunction.playing == 4 || mainFunction.playing == 5 || mainFunction.playing == 7) {
            b = this.id == 0 ? 2 : 4;
            c = 0
        } else if (mainFunction.playing == 3) if (this.id == mainFunction.playerDyingId) {
            d = 20 - Math.floor(mainFunction.timeing / mainFunction.timing[4] * 21);
            if (this.id == 0) {
                b = d - 1;
                switch (b) {
                    case -1:b = 0;break;
                    case 11:b = 10;break;
                    case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:b = 11;break}
                c = 12
            } else switch (d) {
                case 0:case 1:case 2:case 6:case 10:b = 4;c = 3;break;
                case 3:case 7:case 11:b = 4;c = 0;break;
                case 4:case 8:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:b = 4;c = 2;break;
                case 5:case 9:b = 4;c = 1;break
            }
        } else {
            b = 3;
            c = 0
        } else if (this.el.id == "pcm-bpcm") {
            b = 14;
            c = 0;
            d = Math.floor(mainFunction.wholeTime * 0.2) % 4;
            if (d == 3) d = 1;
            c += 2 * d
        } else {
            switch (d) {
                case 4:c = 0;break;
                case 8:c = 1;break;
                case 1:c = 2;break;
                case 2:c = 3;break
            }
            if (mainFunction.playing != 2) b = Math.floor(mainFunction.wholeTime * 0.3) % 4;
            if (b == 3 && this.arrow == 0) b = 0;
            if (b == 2 && this.id == 0) b = 0;
            if (b == 3) {
                b = 2;
                if (this.id == 0) c = 0
            }
            if (this.id == 1) b += 4
        }
        return [c, b]
    };

    E.prototype.r = function () {
        var b = 0,
            c = 0;
        if (mainFunction.playing == 10 || mainFunction.playing == 4 || mainFunction.playing == 3) {
            b = 3;
            c = 0
        } else if (mainFunction.playing == 1 && this.id == mainFunction.guyID) {
            switch (mainFunction.modeScoreMultiplier) {
                case 2:b = 0;break;
                case 4:b = 1;break;
                case 8:b = 2;break;
                case 16:b = 3;break
            }
            c = 11;
            this.el.className = "pcm-ac pcm-n"
        } else if (this.mode == 4 || (this.mode == 16 || this.mode == 32) && mainFunction.ghosting == 4 && !this.eatenInThisFrightMode) {
            b = 0;
            c = 8;
            if (mainFunction.fright < mainFunction.rounds.guyGhostAllowedDeadTotalTime - mainFunction.rounds.pacFoodEat_T && Math.floor(mainFunction.fright / mainFunction.timing[1]) % 2 == 0) b += 2;
            b += Math.floor(mainFunction.wholeTime / 16) % 2
        } else if (this.mode == 8 || this.mode == 64) {
            c = this.nextarrow;
            if (!c) c = this.arrow;
            switch (c) {
                case 4:b = 2;break;
                case 8:b = 3;break;
                case 1:b = 0;break;
                case 2:b = 1;break
            }
            c = 10
        } else if (this.el.id == "pcm-ghin") {
            b = 6;
            c = 8;
            b += Math.floor(mainFunction.wholeTime / 16) % 2
        } else if (this.el.id == "pcm-gbug") {
            b = 6;
            c = 9;
            c += Math.floor(mainFunction.wholeTime / 16) % 2
        } else if (this.el.id == "pcm-ghfa") {
            b = mainFunction.cutsceneSequenceId == 3 ? 6 : 7;
            c = 11
        } else if (this.el.id == "pcm-stck") {
            b = mainFunction.cutsceneSequenceId == 1 ? mainFunction.cutsceneTime > 60 ? 1 : mainFunction.cutsceneTime > 45 ? 2 : 3 : mainFunction.cutsceneSequenceId == 2 ? 3 : mainFunction.cutsceneSequenceId == 3 || mainFunction.cutsceneSequenceId == 4 ? 4 : 0;
            c = 13
        } else {
            c = this.nextarrow;
            if (!c || mainFunction.ground[this.tilePos[0]][this.tilePos[1]].type == 1) c = this.arrow;
            switch (c) {
                case 4:b = 4;break;
                case 8:b = 6;break;
                case 1:b = 0;break;
                case 2:b = 2;break
            }
            c = 4 + this.id - mainFunction.pacmanNum;
            if (this.rate > 0 || mainFunction.playing != 13) b += Math.floor(mainFunction.wholeTime / 16) % 2
        }
        return [c, b]
    };

    E.prototype.b = function () {
        this.k();
        var b = [0, 0];
        b = mainFunction.playing == 8 || mainFunction.playing == 14 ? [0, 3] : this.ghost ? this.r() : this.s();
        if (this.elBackgroundPos[0] != b[0] || this.elBackgroundPos[1] != b[1]) {
            this.elBackgroundPos[0] = b[0];
            this.elBackgroundPos[1] = b[1];
            b[0] *= 16;
            b[1] *= 16;
            mainFunction.changeElementBkPos(this.el, b[1], b[0], a)
        }
    };
}();