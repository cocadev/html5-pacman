education.pacman ||
function () {                                                         //at fist,this is map region.-------------------start---------------------------------------

  var a = true,
    e = false,
      pacmanGameMode = {},
    i = [1, 4, 2, 8],
    l = {
      0: {
        axis: 0,
        increment: 0
      },
      1: {
        axis: 0,
        increment: -1
      },
      2: {
        axis: 0,
        increment: +1
      },
      4: {
        axis: 1,
        increment: -1
      },
      8: {
        axis: 1,
        increment: +1
      }
    },
    m = [0, 7, 17, 32],
    q = [{
      x: 2,
      y: 8
    },
    {
      x: 63,
      y: 8
    }],
    r = {
      1: [{
        x: 39.5,
        y: 15,
        dir: 4
      },
      {
        x: 39.5,
        y: 4,
        dir: 4,
        scatterX: 57,
        scatterY: -4
      },
      {
        x: 39.5,
        y: 7,
        dir: 2,
        scatterX: 0,
        scatterY: -4
      },
      {
        x: 37.625,
        y: 7,
        dir: 1,
        scatterX: 57,
        scatterY: 20
      },
      {
        x: 41.375,
        y: 7,
        dir: 1,
        scatterX: 0,
        scatterY: 20
      }],
      2: [{
        x: 40.25,
        y: 15,
        dir: 8
      },
      {
        x: 38.75,
        y: 15,
        dir: 4
      },
      {
        x: 39.5,
        y: 4,
        dir: 4,
        scatterX: 57,
        scatterY: -4
      },
      {
        x: 39.5,
        y: 7,
        dir: 2,
        scatterX: 0,
        scatterY: -4
      },
      {
        x: 37.625,
        y: 7,
        dir: 1,
        scatterX: 57,
        scatterY: 20
      },
      {
        x: 41.375,
        y: 7,
        dir: 1,
        scatterX: 0,
        scatterY: 20
      }]
    },
    s = [32, 312],
    v = [80, 312],
    w = {
      0: 0.16,
      1: 0.23,
      2: 1,
      3: 1,
      4: 2.23,
      5: 0.3,
      6: 1.9,
      7: 2.23,
      8: 1.9,
      9: 5,
      10: 1.9,
      11: 1.18,
      12: 0.3,
      13: 0.5,
      14: 1.9,
      15: 9,
      16: 10,
      17: 0.26
    },
    y = 0.8 * 0.4,
    z = [{},
    {
      ghostSpeed: 0.75,                                     //monster ghost moving speed
      ghostTunnelSpeed: 0.7,                                  //monster ghost moving through middle tunnel
      playerSpeed: 0.75,                                             //pacman speed
      dotEatingSpeed: 0.7,                                       //pacman speed eating dot
      ghostFrightSpeed: 0.5,
      playerFrightSpeed: 0.9,
      dotEatingFrightSpeed: 0.79,
      elroyDotsLeftPart1: 20,
      elroySpeedPart1: 0.8,
      elroyDotsLeftPart2: 10,
      elroySpeedPart2: 0.85,
      frightTime: 10,
      frightBlinkCount: 5,
      fruit: 1,
      fruitScore: 1000,
      ghostModeSwitchTimes: [7, 20, 7, 20, 5, 20, 5, 1],
      penForceTime: 4,
      penLeavingLimits: [0, 0, 30, 60]
    },{
            ghostSpeed: 0.95,                                     //monster ghost moving speed
            ghostTunnelSpeed: 0.7,                                  //monster ghost moving through middle tunnel
            playerSpeed: 0.9,                                             //pacman speed
            dotEatingSpeed: 0.8,                                       //pacman speed eating dot
            ghostFrightSpeed: 0.5,
            playerFrightSpeed: 0.9,
            dotEatingFrightSpeed: 0.79,
            elroyDotsLeftPart1: 20,
            elroySpeedPart1: 0.8,
            elroyDotsLeftPart2: 10,
            elroySpeedPart2: 0.85,
            frightTime: 15,
            frightBlinkCount: 5,
            fruit: 1,
            fruitScore: 1000,
            ghostModeSwitchTimes: [7, 20, 7, 20, 5, 20, 5, 1],
            penForceTime: 4,
            penLeavingLimits: [0, 0, 30, 60]
        },{
            ghostSpeed: 1.15,                                     //monster ghost moving speed
            ghostTunnelSpeed: 0.7,                                  //monster ghost moving through middle tunnel
            playerSpeed: 1.1,                                             //pacman speed
            dotEatingSpeed: 0.9,                                       //pacman speed eating dot
            ghostFrightSpeed: 0.5,
            playerFrightSpeed: 0.9,
            dotEatingFrightSpeed: 0.79,
            elroyDotsLeftPart1: 20,
            elroySpeedPart1: 0.8,
            elroyDotsLeftPart2: 10,
            elroySpeedPart2: 0.85,
            frightTime: 20,
            frightBlinkCount: 5,
            fruit: 1,
            fruitScore: 1000,
            ghostModeSwitchTimes: [7, 20, 7, 20, 5, 20, 5, 1],
            penForceTime: 4,
            penLeavingLimits: [0, 0, 30, 60]
        },{
          ghostSpeed: 1.35,                                     //monster ghost moving speed
          ghostTunnelSpeed: 0.7,                                  //monster ghost moving through middle tunnel
          playerSpeed: 1.3,                                             //pacman speed
          dotEatingSpeed: 1.2,                                       //pacman speed eating dot
          ghostFrightSpeed: 0.5,
          playerFrightSpeed: 0.9,
          dotEatingFrightSpeed: 0.79,
          elroyDotsLeftPart1: 20,
          elroySpeedPart1: 0.8,
          elroyDotsLeftPart2: 10,
          elroySpeedPart2: 0.85,
          frightTime: 25,
          frightBlinkCount: 5,
          fruit: 1,
          fruitScore: 1000,
          ghostModeSwitchTimes: [7, 20, 7, 20, 5, 20, 5, 1],
          penForceTime: 4,
          penLeavingLimits: [0, 0, 30, 60]
      }],
    A = {                                       //pacman and ghost video-icon moving in pacman.png--------------------------start
      1: [{
        x: 37.6,
        y: 7,
        dir: 1,
        dest: 6.375,
        speed: 0.48
      },
      {
        x: 37.6,
        y: 6.375,
        dir: 2,
        dest: 7.625,
        speed: 0.48
      },
      {
        x: 37.6,
        y: 7.625,
        dir: 1,
        dest: 7,
        speed: 0.48
      }],
      2: [{
        x: 39.5,
        y: 7,
        dir: 2,
        dest: 7.625,
        speed: 0.48
      },
      {
        x: 39.5,
        y: 7.625,
        dir: 1,
        dest: 6.375,
        speed: 0.48
      },
      {
        x: 39.5,
        y: 6.375,
        dir: 2,
        dest: 7,
        speed: 0.48
      }],
      3: [{
        x: 41.4,
        y: 7,
        dir: 1,
        dest: 6.375,
        speed: 0.48
      },
      {
        x: 41.4,
        y: 6.375,
        dir: 2,
        dest: 7.625,
        speed: 0.48
      },
      {
        x: 41.4,
        y: 7.625,
        dir: 1,
        dest: 7,
        speed: 0.48
      }],
      4: [{
        x: 37.6,
        y: 7,
        dir: 8,
        dest: 39.5,
        speed: y
      },
      {
        x: 39.5,
        y: 7,
        dir: 1,
        dest: 4,
        speed: y
      }],
      5: [{
        x: 39.5,
        y: 7,
        dir: 1,
        dest: 4,
        speed: y
      }],
      6: [{
        x: 41.4,
        y: 7,
        dir: 4,
        dest: 39.5,
        speed: y
      },
      {
        x: 39.5,
        y: 7,
        dir: 1,
        dest: 4,
        speed: y
      }],
      7: [{
        x: 39.5,
        y: 4,
        dir: 2,
        dest: 7,
        speed: 1.6
      },
      {
        x: 39.5,
        y: 7,
        dir: 4,
        dest: 37.625,
        speed: 1.6
      }],
      8: [{
        x: 39.5,
        y: 4,
        dir: 2,
        dest: 7,
        speed: 1.6
      }],
      9: [{
        x: 39.5,
        y: 4,
        dir: 2,
        dest: 7,
        speed: 1.6
      },
      {
        x: 39.5,
        y: 7,
        dir: 8,
        dest: 41.375,
        speed: 1.6
      }],
      10: [{
        x: 37.6,
        y: 7,
        dir: 8,
        dest: 39.5,
        speed: y
      },
      {
        x: 39.5,
        y: 7,
        dir: 1,
        dest: 4,
        speed: y
      }],
      11: [{
        x: 39.5,
        y: 7,
        dir: 1,
        dest: 4,
        speed: y
      }],
      12: [{
        x: 41.4,
        y: 7,
        dir: 4,
        dest: 39.5,
        speed: y
      },
      {
        x: 39.5,
        y: 7,
        dir: 1,
        dest: 4,
        speed: y
      }]
    },                                         ////pacman and ghost video-icon moving in pacman.png--------------------------end
    B = {                              //according to each level,each ghost moving speed----------------start
      1: {
        actors: [{
          ghost: e,
          x: 64,
          y: 9,
          id: 0
        },
        {
          ghost: a,
          x: 68.2,
          y: 9,
          id: 1
        }],
        sequence: [{
          time: 5.5,
          moves: [{
            dir: 4,
            speed: 0.75 * 0.8 * 2
          },
          {
            dir: 4,
            speed: 0.78 * 0.8 * 2
          }]
        },
        {
          time: 0.1,
          moves: [{
            dir: 4,
            speed: 32
          },
          {
            dir: 4,
            speed: 0
          }]
        },
        {
          time: 9,
          moves: [{
            dir: 8,
            speed: 0.75 * 0.8 * 2,
            elId: "pcm-bpcm"
          },
          {
            dir: 8,
            speed: 0.8,
            mode: 4
          }]
        }]
      },
      2: {
        actors: [{
          ghost: e,
          x: 64,
          y: 9,
          id: 0
        },
        {
          ghost: a,
          x: 70.2,
          y: 9,
          id: 1
        },
        {
          ghost: a,
          x: 32,
          y: 9.5,
          id: 2
        }],
        sequence: [{
          time: 2.7,
          moves: [{
            dir: 4,
            speed: 0.75 * 0.8 * 2
          },
          {
            dir: 4,
            speed: 0.78 * 0.8 * 2
          },
          {
            dir: 0,
            speed: 0,
            elId: "pcm-stck"
          }]
        },
        {
          time: 1,
          moves: [{
            dir: 4,
            speed: 0.75 * 0.8 * 2
          },
          {
            dir: 4,
            speed: 0.1 * 0.8
          },
          {
            dir: 0,
            speed: 0,
            elId: "pcm-stck"
          }]
        },
        {
          time: 1.3,
          moves: [{
            dir: 4,
            speed: 0.75 * 0.8 * 2
          },
          {
            dir: 4,
            speed: 0
          },
          {
            dir: 0,
            speed: 0,
            elId: "pcm-stck"
          }]
        },
        {
          time: 1,
          moves: [{
            dir: 4,
            speed: 0.75 * 0.8 * 2
          },
          {
            dir: 4,
            speed: 0,
            elId: "pcm-ghfa"
          },
          {
            dir: 0,
            speed: 0,
            elId: "pcm-stck"
          }]
        },
        {
          time: 2.5,
          moves: [{
            dir: 4,
            speed: 0.75 * 0.8 * 2
          },
          {
            dir: 4,
            speed: 0,
            elId: "pcm-ghfa"
          },
          {
            dir: 0,
            speed: 0,
            elId: "pcm-stck"
          }]
        }]
      },
      3: {
        actors: [{
          ghost: e,
          x: 64,
          y: 9,
          id: 0
        },
        {
          ghost: a,
          x: 70.2,
          y: 9,
          id: 2
        }],
        sequence: [{
          time: 5.3,
          moves: [{
            dir: 4,
            speed: 0.75 * 0.8 * 2
          },
          {
            dir: 4,
            speed: 0.78 * 0.8 * 2,
            elId: "pcm-ghin"
          }]
        },
        {
          time: 5.3,
          moves: [{
            dir: 4,
            speed: 0
          },
          {
            dir: 8,
            speed: 0.78 * 0.8 * 2,
            elId: "pcm-gbug"
          }]
        }]
      }
    },//according to each level,each ghost moving speed----------------end
    C = [90, 45, 30],
    D = C[0];
//------------------------------------------------------------------------map end-----------------------------------------------------------------
  function E(b) {
    this.id = b
  }
  E.prototype.A = function () {
    var b = r[pacmanGameMode.pacmanNum][this.id];
    this.pos = [b.y * 8, b.x * 8];//initial place of whole actors
    this.posDelta = [0, 0];//initial place of whole actors
    this.tilePos = [b.y * 8, b.x * 8];//initial place of whole actors
    this.targetPos = [b.scatterY * 8, b.scatterX * 8];//initial place of whole actors
    this.scatterPos = [b.scatterY * 8, b.scatterX * 8];//initial place of whole actors
    this.lastActiveDir = this.dir = b.dir;
    this.physicalSpeed = this.keyDirection = this.nextDir = 0;
    this.c(0);
    this.reverseDirectionsNext = this.freeToLeavePen = this.modeChangedWhileInPen = this.eatenInThisFrightMode = e;
    this.l()
  };
  E.prototype.createElement = function () {
    this.el = document.createElement("div");
    this.el.className = "pcm-ac";
    this.el.id = "actor" + this.id;
    pacmanGameMode.prepareElement(this.el, 0, 0);
    pacmanGameMode.playfieldEl.appendChild(this.el);
    this.elPos = [0, 0];
    this.elBackgroundPos = [0, 0]
  };
  E.prototype.a = function (b) {
    var c = this.mode;
    this.mode = b;
    if (this.id == pacmanGameMode.pacmanNum + 3 && (b == 16 || c == 16)) pacmanGameMode.updateCruiseElroySpeed();
    switch (c) {
    case 32:
      pacmanGameMode.ghostExitingPenNow = e;                                               //green monster go out monster home time
      break;
    case 8:
      pacmanGameMode.ghostEyesCount > 0 && pacmanGameMode.ghostEyesCount--;               //yellow monster go out monster home time
      pacmanGameMode.ghostEyesCount == 0;
      break
    }
    switch (b) {
    case 4:
      this.fullSpeed = pacmanGameMode.levels.ghostFrightSpeed * 0.8;
      this.tunnelSpeed = pacmanGameMode.levels.ghostTunnelSpeed * 0.8;
      this.followingRoutine = e;
      break;
    case 1:
      this.fullSpeed = pacmanGameMode.levels.ghostSpeed * 0.8;
      this.tunnelSpeed = pacmanGameMode.levels.ghostTunnelSpeed * 0.8;
      this.followingRoutine =
      e;
      break;
    case 2:                                                   //monsters moving
      this.targetPos = this.scatterPos;
      this.fullSpeed = pacmanGameMode.levels.ghostSpeed * 0.8;
      this.tunnelSpeed = pacmanGameMode.levels.ghostTunnelSpeed * 0.8;
      this.followingRoutine = e;
      break;
    case 8:
      this.tunnelSpeed = this.fullSpeed = 1.6;
      this.targetPos = [s[0], s[1]];
      this.freeToLeavePen = this.followingRoutine = e;
      break;
    case 16:                    //monsters moving
      this.l();
      this.followingRoutine = a;
      this.routineMoveId = -1;
      switch (this.id) {
      case pacmanGameMode.pacmanNum + 1:
        this.routineToFollow = 2;
        break;
      case pacmanGameMode.pacmanNum + 2:
        this.routineToFollow = 1;
        break;
      case pacmanGameMode.pacmanNum + 3:
        this.routineToFollow =
        3;
        break
      }
      break;
    case 32:                        //monsters moving
      this.followingRoutine = a;
      this.routineMoveId = -1;
      switch (this.id) {
      case pacmanGameMode.pacmanNum + 1:
        this.routineToFollow = 5;
        break;
      case pacmanGameMode.pacmanNum + 2:
        this.routineToFollow = 4;
        break;
      case pacmanGameMode.pacmanNum + 3:
        this.routineToFollow = 6;
        break
      }
      pacmanGameMode.ghostExitingPenNow = a;
      break;
    case 64:                      // //if pacman eats monster,and monster go monster-house
      this.followingRoutine = a;
      this.routineMoveId = -1;
      switch (this.id) {
      case pacmanGameMode.pacmanNum:
      case pacmanGameMode.pacmanNum + 1:
        this.routineToFollow = 8;
        break;
      case pacmanGameMode.pacmanNum + 2:
        this.routineToFollow = 7;
        break;
      case pacmanGameMode.pacmanNum + 3:
        this.routineToFollow = 9;
        break
      }
      break;
    case 128:                            //if pacman eats monster,and monster move behaivor
      this.followingRoutine = a;
      this.routineMoveId = -1;
      switch (this.id) {
      case pacmanGameMode.pacmanNum:
      case pacmanGameMode.pacmanNum + 1:
        this.routineToFollow = 11;
        break;
      case pacmanGameMode.pacmanNum + 2:
        this.routineToFollow = 10;
        break;
      case pacmanGameMode.pacmanNum + 3:
        this.routineToFollow = 12;
        break
      }
      break
    }
    this.d()
  };
  E.prototype.l = function () {
    if (this.id >= pacmanGameMode.pacmanNum) this.targetPlayerId = Math.floor(pacmanGameMode.rand() * pacmanGameMode.pacmanNum)
  };
  E.prototype.z = function (b) {

    if (this.dir == pacmanGameMode.oppositeDirections[b]) {
      this.dir = b;
      this.posDelta = [0, 0];
      this.currentSpeed != 2 && this.c(0);
      if (this.dir != 0) this.lastActiveDir = this.dir;
      this.nextDir = 0
    } else if (this.dir != b) if (this.dir == 0) {
      if (pacmanGameMode.playfield[this.pos[0]][this.pos[1]].allowedDir & b) this.dir = b
    } else {
      var c = pacmanGameMode.playfield[this.tilePos[0]][this.tilePos[1]];
      if (c && c.allowedDir & b) {
        c = l[this.dir];
        var d = [this.pos[0], this.pos[1]];
        d[c.axis] -= c.increment;
        var f = 0;
        if (d[0] == this.tilePos[0] && d[1] == this.tilePos[1]) f = 1;
        else {
          d[c.axis] -= c.increment;
          if (d[0] == this.tilePos[0] && d[1] == this.tilePos[1]) f = 2
        }
        if (f) {
          this.dir = b;
          this.pos[0] = this.tilePos[0];
          this.pos[1] = this.tilePos[1];
          c = l[this.dir];
          this.pos[c.axis] += c.increment * f;
          return
        }
      }
      this.nextDir = b;
      this.posDelta = [0, 0]
    }
  };
  E.prototype.i = function (b) {
    var c = this.tilePos,
      d = l[this.dir],
      f = [c[0], c[1]];
    f[d.axis] += d.increment * 8;
    var h = pacmanGameMode.playfield[f[0]][f[1]];
    if (b && !h.intersection) h = pacmanGameMode.playfield[c[0]][c[1]];
    if (h.intersection) switch (this.mode) {
    case 2:
    case 1:
    case 8:
      if ((this.dir & h.allowedDir) == 0 && h.allowedDir == pacmanGameMode.oppositeDirections[this.dir]) this.nextDir = pacmanGameMode.oppositeDirections[this.dir];
      else {
        b = 99999999999;
        c = 0;
        for (var j in i) {
          var k = i[j];
          if (h.allowedDir & k && this.dir != pacmanGameMode.oppositeDirections[k]) {
            d = l[k];
            var x = [f[0], f[1]];
            x[d.axis] += d.increment;
            d = pacmanGameMode.getDistance(x, [this.targetPos[0], this.targetPos[1]]);
            if (d < b) {
              b = d;
              c = k
            }
          }
        }
        if (c) this.nextDir = c
      }
      break;
    case 4:
      if ((this.dir & h.allowedDir) == 0 && h.allowedDir == pacmanGameMode.oppositeDirections[this.dir]) this.nextDir = pacmanGameMode.oppositeDirections[this.dir];
      else {
        do f = i[Math.floor(pacmanGameMode.rand() * 4)];
        while ((f & h.allowedDir) == 0 || f == pacmanGameMode.oppositeDirections[this.dir]);
        this.nextDir = f
      }
      break
    }
  };
  E.prototype.p = function (b) {
    pacmanGameMode.tilesChanged = a;
    if (this.reverseDirectionsNext) {
      this.dir = pacmanGameMode.oppositeDirections[this.dir];
      this.nextDir = 0;
      this.reverseDirectionsNext = e;
      this.i(a)
    }
    if (!this.ghost && !pacmanGameMode.playfield[b[0]][b[1]].path) {
      this.pos[0] = this.lastGoodTilePos[0];
      this.pos[1] = this.lastGoodTilePos[1];
      b[0] = this.lastGoodTilePos[0];
      b[1] = this.lastGoodTilePos[1];
      this.dir = 0
    } else this.lastGoodTilePos = [b[0], b[1]];
    pacmanGameMode.playfield[b[0]][b[1]].type == 1 && this.mode != 8 ? this.c(2) : this.c(0);
    !this.ghost && pacmanGameMode.playfield[b[0]][b[1]].dot && pacmanGameMode.dotEaten(this.id, b);
    this.tilePos[0] = b[0];
    this.tilePos[1] = b[1]
  };
  E.prototype.t = function () {
    var b = this.tilePos;
    switch (this.dir) {
    case 1:
      var c = [b[0], b[1]],
        d = [b[0] + 3.6, b[1]];
      break;
    case 2:
      c = [b[0] - 4, b[1]];
      d = [b[0], b[1]];
      break;
    case 4:
      c = [b[0], b[1]];
      d = [b[0], b[1] + 3.6];
      break;
    case 8:
      c = [b[0], b[1] - 4];
      d = [b[0], b[1]];
      break
    }
    if (this.pos[0] >= c[0] && this.pos[0] <= d[0] && this.pos[1] >= c[1] && this.pos[1] <= d[1]) {
      b = l[this.nextDir];
      this.posDelta[b.axis] += b.increment
    }
  };
  E.prototype.n = function () {
    if (this.pos[0] == q[0].y * 8 && this.pos[1] == q[0].x * 8) {
      this.pos[0] = q[1].y * 8;
      this.pos[1] = (q[1].x - 1) * 8
    } else if (this.pos[0] == q[1].y * 8 && this.pos[1] == q[1].x * 8) {
      this.pos[0] = q[0].y * 8;
      this.pos[1] = (q[0].x + 1) * 8
    }
    this.mode == 8 && this.pos[0] == s[0] && this.pos[1] == s[1] && this.a(64);
    if (!this.ghost && this.pos[0] == v[0] && (this.pos[1] == v[1] || this.pos[1] == v[1] + 8)) pacmanGameMode.eatFruit(this.id)
  };
  E.prototype.u = function () {
    this.n();
    this.ghost && this.i(e);
    var b = pacmanGameMode.playfield[this.pos[0]][this.pos[1]];
    if (b.intersection) if (this.nextDir && this.nextDir & b.allowedDir) {
      if (this.dir != 0) this.lastActiveDir = this.dir;
      this.dir = this.nextDir;
      this.nextDir = 0;
      if (!this.ghost) {
        this.pos[0] += this.posDelta[0];
        this.pos[1] += this.posDelta[1];
        this.posDelta = [0, 0]
      }
    } else if ((this.dir & b.allowedDir) == 0) {
      if (this.dir != 0) this.lastActiveDir = this.dir;
      this.nextDir = this.dir = 0;
      this.c(0)
    }
  };
  E.prototype.o = function () {
    var b = this.pos[0] / 8,
      c = this.pos[1] / 8,
      d = [Math.round(b) * 8, Math.round(c) * 8];
    if (d[0] != this.tilePos[0] || d[1] != this.tilePos[1]) this.p(d);
    else {
      b = [Math.floor(b) * 8, Math.floor(c) * 8];
      this.pos[1] == b[1] && this.pos[0] == b[0] && this.u()
    }!this.ghost && this.nextDir && pacmanGameMode.playfield[d[0]][d[1]].intersection && this.nextDir & pacmanGameMode.playfield[d[0]][d[1]].allowedDir && this.t()
  };
  E.prototype.B = function () {
    if (this.id == pacmanGameMode.pacmanNum && pacmanGameMode.dotsRemaining < pacmanGameMode.levels.elroyDotsLeftPart1 && this.mode == 2 && (!pacmanGameMode.lostLifeOnThisLevel || pacmanGameMode.actors[pacmanGameMode.pacmanNum + 3].mode != 16)) {
      var b = pacmanGameMode.actors[this.targetPlayerId];
      this.targetPos = [b.tilePos[0], b.tilePos[1]]
    } else if (this.ghost && this.mode == 1) {
      b = pacmanGameMode.actors[this.targetPlayerId];
      switch (this.id) {
      case pacmanGameMode.pacmanNum:
        this.targetPos = [b.tilePos[0], b.tilePos[1]];
        break;
      case pacmanGameMode.pacmanNum + 1:
        this.targetPos = [b.tilePos[0], b.tilePos[1]];
        var c = l[b.dir];
        this.targetPos[c.axis] += 32 * c.increment;
        if (b.dir == 1) this.targetPos[1] -= 32;
        break;
      case pacmanGameMode.pacmanNum + 2:
        var d = pacmanGameMode.actors[pacmanGameMode.pacmanNum],
          f = [b.tilePos[0], b.tilePos[1]];
        c = l[b.dir];
        f[c.axis] += 16 * c.increment;
        if (b.dir == 1) f[1] -= 16;
        this.targetPos[0] = f[0] * 2 - d.tilePos[0];
        this.targetPos[1] = f[1] * 2 - d.tilePos[1];
        break;
      case pacmanGameMode.pacmanNum + 3:
        c = pacmanGameMode.getDistance(b.tilePos, this.tilePos);
        this.targetPos = c > 64 ? [b.tilePos[0], b.tilePos[1]] : this.scatterPos;
        break
      }
    }
  };
  E.prototype.v = function () {
    this.routineMoveId++;
    if (this.routineMoveId == A[this.routineToFollow].length) if (this.mode == 16 && this.freeToLeavePen && !pacmanGameMode.ghostExitingPenNow) {
      this.eatenInThisFrightMode ? this.a(128) : this.a(32);
      return
    } else if (this.mode == 32 || this.mode == 128) {
      this.pos = [s[0], s[1] + 4];
      this.dir = this.modeChangedWhileInPen ? 8 : 4;
      var b = pacmanGameMode.mainGhostMode;
      if (this.mode == 128 && b == 4) b = pacmanGameMode.lastMainGhostMode;
      this.a(b);
      return
    } else if (this.mode == 64) {
      if (this.id == pacmanGameMode.pacmanNum || this.freeToLeavePen) this.a(128);
      else {
        this.eatenInThisFrightMode =
        a;
        this.a(16)
      }
      return
    } else this.routineMoveId = 0;
    b = A[this.routineToFollow][this.routineMoveId];
    this.pos[0] = b.y * 8;
    this.pos[1] = b.x * 8;
    this.dir = b.dir;
    this.physicalSpeed = 0;
    this.speedIntervals = pacmanGameMode.getSpeedIntervals(b.speed);
    this.proceedToNextRoutineMove = e;
    this.b()
  };
  E.prototype.m = function () {
    var b = A[this.routineToFollow][this.routineMoveId];
    if (b) if (this.speedIntervals[pacmanGameMode.intervalTime]) {
      var c = l[this.dir];
      this.pos[c.axis] += c.increment;
      switch (this.dir) {
      case 1:
      case 4:
        if (this.pos[c.axis] < b.dest * 8) {
          this.pos[c.axis] = b.dest * 8;
          this.proceedToNextRoutineMove = a
        }
        break;
      case 2:
      case 8:
        if (this.pos[c.axis] > b.dest * 8) {
          this.pos[c.axis] = b.dest * 8;
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
    switch (this.currentSpeed) {
    case 0:
      var b = this.id == pacmanGameMode.pacmanNum && (this.mode == 2 || this.mode == 1) ? pacmanGameMode.cruiseElroySpeed : this.fullSpeed;
      break;
    case 1:
      b = this.dotEatingSpeed;
      break;
    case 2:
      b = this.tunnelSpeed;
      break
    }
    if (this.physicalSpeed != b) {
      this.physicalSpeed = b;
      this.speedIntervals = pacmanGameMode.getSpeedIntervals(this.physicalSpeed)
    }
  };
  E.prototype.c = function (b) {
    this.currentSpeed = b;
    this.d()
  };
  E.prototype.e = function () {
    if (this.dir) if (this.speedIntervals[pacmanGameMode.intervalTime]) {
      var b = l[this.dir];
      this.pos[b.axis] += b.increment;
      this.o();
      this.b()
    }
  };
  E.prototype.move = function () {
    if (pacmanGameMode.gameplayMode == 0 || this.ghost && pacmanGameMode.gameplayMode == 1 && (this.mode == 8 || this.mode == 64)) {
      if (this.keyDirection != 0) {
        this.z(this.keyDirection);
        this.keyDirection = 0
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
    var b = pacmanGameMode.getPlayfieldX(this.pos[1] + this.posDelta[1]),
      c = pacmanGameMode.getPlayfieldY(this.pos[0] + this.posDelta[0]);
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
      d = this.dir;
    if (d == 0) d = this.lastActiveDir;
    if (pacmanGameMode.gameplayMode == 1 && this.id == pacmanGameMode.playerEatingGhostId) {
      b = 3;
      c = 0
    } else if ((pacmanGameMode.gameplayMode == 9 || pacmanGameMode.gameplayMode == 10) && this.id == 0) {
      b = 2;
      c = 0
    } else if (pacmanGameMode.gameplayMode == 4 || pacmanGameMode.gameplayMode == 5 || pacmanGameMode.gameplayMode == 7) {
      b = this.id == 0 ? 2 : 4;
      c = 0
    } else if (pacmanGameMode.gameplayMode == 3) if (this.id == pacmanGameMode.playerDyingId) {
      d = 20 - Math.floor(pacmanGameMode.gameplayModeTime / pacmanGameMode.timing[4] * 21);
      if (this.id == 0) {
        b = d - 1;
        switch (b) {
        case -1:
          b = 0;
          break;
        case 11:
          b = 10;
          break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
          b =
          11;
          break
        }
        c = 12
      } else switch (d) {
      case 0:
      case 1:
      case 2:
      case 6:
      case 10:
        b = 4;
        c = 3;
        break;
      case 3:
      case 7:
      case 11:
        b = 4;
        c = 0;
        break;
      case 4:
      case 8:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
        b = 4;
        c = 2;
        break;
      case 5:
      case 9:
        b = 4;
        c = 1;
        break
      }
    } else {
      b = 3;
      c = 0
    } else if (this.el.id == "pcm-bpcm") {
      b = 14;
      c = 0;
      d = Math.floor(pacmanGameMode.globalTime * 0.2) % 4;
      if (d == 3) d = 1;
      c += 2 * d
    } else {
      switch (d) {
      case 4:
        c = 0;
        break;
      case 8:
        c = 1;
        break;
      case 1:
        c = 2;
        break;
      case 2:
        c = 3;
        break
      }
      if (pacmanGameMode.gameplayMode != 2) b = Math.floor(pacmanGameMode.globalTime * 0.3) % 4;
      if (b == 3 && this.dir == 0) b = 0;
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
    if (pacmanGameMode.gameplayMode == 10 || pacmanGameMode.gameplayMode == 4 || pacmanGameMode.gameplayMode == 3) {
      b = 3;
      c = 0
    } else if (pacmanGameMode.gameplayMode == 1 && this.id == pacmanGameMode.ghostBeingEatenId) {
      switch (pacmanGameMode.modeScoreMultiplier) {
      case 2:
        b = 0;
        break;
      case 4:
        b = 1;
        break;
      case 8:
        b = 2;
        break;
      case 16:
        b = 3;
        break
      }
      c = 11;
      this.el.className = "pcm-ac pcm-n"
    } else if (this.mode == 4 || (this.mode == 16 || this.mode == 32) && pacmanGameMode.mainGhostMode == 4 && !this.eatenInThisFrightMode) {
      b = 0;
      c = 8;
      if (pacmanGameMode.frightModeTime < pacmanGameMode.levels.frightTotalTime - pacmanGameMode.levels.frightTime && Math.floor(pacmanGameMode.frightModeTime / pacmanGameMode.timing[1]) % 2 == 0) b += 2;
      b += Math.floor(pacmanGameMode.globalTime / 16) % 2
    } else if (this.mode == 8 || this.mode == 64) {
      c = this.nextDir;
      if (!c) c = this.dir;
      switch (c) {
      case 4:
        b = 2;
        break;
      case 8:
        b = 3;
        break;
      case 1:
        b = 0;
        break;
      case 2:
        b = 1;
        break
      }
      c = 10
    } else if (this.el.id == "pcm-ghin") {
      b = 6;
      c = 8;
      b += Math.floor(pacmanGameMode.globalTime / 16) % 2
    } else if (this.el.id == "pcm-gbug") {
      b = 6;
      c = 9;
      c += Math.floor(pacmanGameMode.globalTime / 16) % 2
    } else if (this.el.id == "pcm-ghfa") {
      b = pacmanGameMode.cutsceneSequenceId == 3 ? 6 : 7;
      c = 11
    } else if (this.el.id == "pcm-stck") {
      b = pacmanGameMode.cutsceneSequenceId == 1 ? pacmanGameMode.cutsceneTime > 60 ? 1 : pacmanGameMode.cutsceneTime > 45 ? 2 : 3 : pacmanGameMode.cutsceneSequenceId == 2 ? 3 : pacmanGameMode.cutsceneSequenceId == 3 || pacmanGameMode.cutsceneSequenceId == 4 ? 4 : 0;
      c = 13
    } else {
      c = this.nextDir;
      if (!c || pacmanGameMode.playfield[this.tilePos[0]][this.tilePos[1]].type == 1) c = this.dir;
      switch (c) {
      case 4:
        b = 4;
        break;
      case 8:
        b = 6;
        break;
      case 1:
        b = 0;
        break;
      case 2:
        b = 2;
        break
      }
      c = 4 + this.id - pacmanGameMode.pacmanNum;
      if (this.speed > 0 || pacmanGameMode.gameplayMode != 13) b += Math.floor(pacmanGameMode.globalTime / 16) % 2
    }
    return [c, b]
  };
  E.prototype.b = function () {
    this.k();
    var b = [0, 0];
    b = pacmanGameMode.gameplayMode == 8 || pacmanGameMode.gameplayMode == 14 ? [0, 3] : this.ghost ? this.r() : this.s();
    if (this.elBackgroundPos[0] != b[0] || this.elBackgroundPos[1] != b[1]) {
      this.elBackgroundPos[0] = b[0];
      this.elBackgroundPos[1] = b[1];
      b[0] *= 16;
      b[1] *= 16;
      pacmanGameMode.changeElementBkPos(this.el, b[1], b[0], a)
    }
  };
  pacmanGameMode.rand = function () {
    var b = 4294967296,
      c = 134775813;
    c = c * pacmanGameMode.randSeed + 1;
    return (pacmanGameMode.randSeed = c % b) / b
  };
  pacmanGameMode.seed = function (b) {
    pacmanGameMode.randSeed = b
  };
  pacmanGameMode.getDistance = function (b, c) {
    return Math.sqrt((c[1] - b[1]) * (c[1] - b[1]) + (c[0] - b[0]) * (c[0] - b[0]))
  };
  pacmanGameMode.getPlayfieldX = function (b) {
    return b + -32
  };
  pacmanGameMode.getPlayfieldY = function (b) {
    return b + 0
  };
  pacmanGameMode.getCorrectedSpritePos = function (b) {
    return b / 8 * 10 + 2
  };
  pacmanGameMode.getDotElementId = function (b, c) {
    return "pcm-d" + b + "-" + c
  };
  pacmanGameMode.showElementById = function (b, c) {
    var d = document.getElementById(b);
    if (d) d.style.visibility = c ? "visible" : "hidden"
  };
  pacmanGameMode.getAbsoluteElPos = function (b) {
    var c = [0, 0];
    do {
      c[0] += b.offsetTop;
      c[1] += b.offsetLeft
    } while (b = b.offsetParent);
    return c
  };
  pacmanGameMode.prepareElement = function (b, c, d) {
    c = pacmanGameMode.getCorrectedSpritePos(parseInt(c, 10));
    d = pacmanGameMode.getCorrectedSpritePos(parseInt(d, 10));
    if (pacmanGameMode.useCss) {
      switch (pacmanGameMode.level){
          case 1:
          b.style.backgroundImage = "url(src/round1.png)";
              o = [{
                  x: 1,
                  y: 8,
                  w: 8
                  },
                  {
                      x: 57,
                      y: 8,
                      w: 9
                  },
                  {
                      x: 36,
                      y: 4,
                      w: 8
                  },
                  {
                      x: 36,
                      y: 10,
                      w: 8
                  },
                  {
                      x: 39,
                      y: 15,
                      w: 2
                  }],
              p = [{
                  x: 5,
                  y: 1
              },
                  {
                      x: 15,
                      y: 8
                  },
                  {
                      x: 60,
                      y: 4
                  },
                  {
                      x: 60,
                      y: 15
                  }]

              n = [{
                  x: 5,
                  y: 1,
                  w: 56
                  },
                  {
                      x: 5,
                      y: 4,
                      w: 5
                  },
                  {
                      x: 5,
                      y: 1,
                      h: 4
                  },
                  {
                      x: 9,
                      y: 1,
                      h: 12
                  },
                  {
                      x: 5,
                      y: 12,
                      h: 4
                  },
                  {
                      x: 10,
                      y: 12,
                      h: 4
                  },
                  {
                      x: 5,
                      y: 15,
                      w: 16
                  },
                  {
                      x: 5,
                      y: 12,
                      w: 31
                  },
                  {
                      x: 60,
                      y: 1,
                      h: 4
                  },
                  {
                      x: 19,
                      y: 1,
                      h: 12
                  },
                  {
                      x: 19,
                      y: 4,
                      w: 26
                  },
                  {
                      x: 9,
                      y: 8,
                      w: 7
                  },
                  {
                      x: 15,
                      y: 1,
                      h: 8
                  },
                  {
                      x: 56,
                      y: 4,
                      h: 9
                  },
                  {
                      x: 48,
                      y: 4,
                      w: 13
                  },
                  {
                      x: 48,
                      y: 1,
                      h: 4
                  },
                  {
                      x: 60,
                      y: 12,
                      h: 4
                  },
                  {
                      x: 44,
                      y: 15,
                      w: 17
                  },
                  {
                      x: 44,
                      y: 12,
                      w: 17
                  },
                  {
                      x: 44,
                      y: 1,
                      h: 15
                  },
                  {
                      x: 41,
                      y: 13,
                      w: 4
                  },
                  {
                      x: 41,
                      y: 13,
                      h: 3
                  },
                  {
                      x: 38,
                      y: 13,
                      h: 3
                  },
                  {
                      x: 38,
                      y: 15,
                      w: 4
                  },
                  {
                      x: 35,
                      y: 10,
                      w: 10
                  },
                  {
                      x: 35,
                      y: 1,
                      h: 15
                  },
                  {
                      x: 35,
                      y: 13,
                      w: 4
                  },
                  {
                      x: 21,
                      y: 12,
                      h: 4
                  },
                  {
                      x: 24,
                      y: 12,
                      h: 4
                  },
                  {
                      x: 24,
                      y: 15,
                      w: 12
                  },
                  {
                      x: 44,
                      y: 9,
                      w: 13
                  },
                  {
                      x: 56,
                      y: 8,
                      w: 10,
                      type: 1
                  },
                  {
                      x: 1,
                      y: 8,
                      w: 9,
                      type: 1
                  }]
              break;
          case  2:
              b.style.backgroundImage = "url(src/round2.png)";
              o = [{
                  x: 1,
                  y: 8,
                  w: 8
                  },
                  {
                      x: 57,
                      y: 8,
                      w: 9
                  },
                  {
                      x: 36,
                      y: 4,
                      w: 8
                  },
                  {
                      x: 36,
                      y: 10,
                      w: 8
                  },
                  {
                      x: 39,
                      y: 15,
                      w: 2
                  }],
              p = [{                          // Big dot which pacman are allowed to eat ghosts.x and y is location in graphic map
                  x: 5,
                  y: 3
                  },
                  {
                      x: 54,
                      y: 15
                  },
                  {
                      x: 35,
                      y: 4,
                  }]
              n = [{                                // n is area which pacman and ghost are allowed to move
                  x: 5,
                  y: 1,                // x and y - row ,column
                  w: 56
              },
                  {
                      x: 5,
                      y: 4,
                      w: 5                // w is west direction
                  },
                  {
                      x: 5,
                      y: 1,
                      h: 4                    // h is down direction
                  },
                  {
                      x: 9,
                      y: 1,
                      h: 12
                  },
                  {
                      x: 5,
                      y: 12,
                      h: 4
                  },
                  {
                      x: 17,
                      y: 12,
                      h: 4
                  },
                  {
                      x: 5,
                      y: 15,
                      w: 12
                  },
                  {
                      x: 5,
                      y: 12,
                      w: 15
                  },
                  {
                      x: 60,
                      y: 1,
                      h: 4
                  },
                  {
                      x: 19,
                      y: 1,
                      h: 15
                  },
                  {
                      x: 19,
                      y: 4,
                      w: 26
                  },
                  {
                      x: 9,
                      y: 8,
                      w: 7
                  },
                  {
                      x: 15,
                      y: 4,
                      h: 5
                  },
                  {
                      x: 9,
                      y: 4,
                      w: 7
                  },
                  {
                      x: 19,
                      y: 10,
                      w: 17
                  },
                  {
                      x: 15,
                      y: 6,
                      w: 5
                  },
                  {
                      x: 56,
                      y: 4,
                      h: 9
                  },
                  {
                      x: 48,
                      y: 4,
                      w: 13
                  },
                  {
                      x: 44,
                      y: 9,
                      w: 13
                  },
                  {
                      x: 48,
                      y: 1,
                      h: 4
                  },
                  {
                      x: 60,
                      y: 12,
                      h: 4
                  },
                  {
                      x: 44,
                      y: 15,
                      w: 17
                  },
                  {
                      x: 44,
                      y: 12,
                      w: 17
                  },
                  {
                      x: 44,
                      y: 1,
                      h: 15
                  },
                  {
                      x: 41,
                      y: 13,
                      w: 4
                  },
                  {
                      x: 41,
                      y: 13,
                      h: 3
                  },
                  {
                      x: 38,
                      y: 13,
                      h: 3
                  },
                  {
                      x: 38,
                      y: 15,
                      w: 4
                  },
                  {
                      x: 35,
                      y: 10,
                      w: 10
                  },
                  {
                      x: 35,
                      y: 1,
                      h: 15
                  },
                  {
                      x: 35,
                      y: 13,
                      w: 4
                  },
                  {
                      x: 19,
                      y: 15,
                      w: 8
                  },
                  {
                      x: 19,
                      y: 12,
                      w: 5
                  },
                  {
                      x: 23,
                      y: 10,
                      h: 3
                  },
                  {
                      x: 32,
                      y: 10,
                      h: 3
                  },
                  {
                      x: 32,
                      y: 12,
                      w: 4
                  },
                  {
                      x: 26,
                      y: 12,
                      w: 4
                  },
                  {
                      x: 26,
                      y: 12,
                      h: 4
                  },
                  {
                      x: 29,
                      y: 15,
                      w: 7
                  },
                  {
                      x: 29,
                      y: 12,
                      h: 4
                  },
                  {
                      x: 19,
                      y: 10,
                      w: 12
                  },
                  {
                      x: 56,
                      y: 8,
                      w: 10,
                      type: 1
                  },
                  {
                      x: 1,
                      y: 8,
                      w: 9,
                      type: 1
                  }]
              break
          case 3:
              b.style.backgroundImage = "url(src/round3.png)";
              o = [{
                  x: 1,
                  y: 8,
                  w: 8
                  },
                  {
                      x: 57,
                      y: 8,
                      w: 9
                  },
                  {
                      x: 36,
                      y: 4,
                      w: 8
                  },
                  {
                      x: 36,
                      y: 10,
                      w: 8
                  },
                  {
                      x: 39,
                      y: 15,
                      w: 2
                  }],
              p = [{
                  x: 11,
                  y: 15
                  },
                  {
                      x: 54,
                      y: 4
                  },
                  {
                      x: 32,
                      y: 11
                  }]
              n = [{
                  x: 5,
                  y: 1,
                  w: 56
                  },
                  {
                      x: 5,
                      y: 4,
                      w: 5
                  },
                  {
                      x: 5,
                      y: 1,
                      h: 4
                  },
                  {
                      x: 9,
                      y: 1,
                      h: 8
                  },
                  {
                      x: 24,
                      y: 4,
                      h: 4
                  },
                  {
                      x: 24,
                      y: 7,
                      w: 5
                  },
                  {
                      x: 28,
                      y: 7,
                      h: 4
                  },
                  {
                      x: 5,
                      y: 12,
                      h: 4
                  },
                  {
                      x: 17,
                      y: 12,
                      h: 4
                  },
                  {
                      x: 5,
                      y: 15,
                      w: 12
                  },
                  {
                      x: 5,
                      y: 12,
                      w: 15
                  },
                  {
                      x: 60,
                      y: 1,
                      h: 4
                  },
                  {
                      x: 19,
                      y: 1,
                      h: 15
                  },
                  {
                      x: 19,
                      y: 4,
                      w: 26
                  },
                  {
                      x: 9,
                      y: 8,
                      w: 7
                  },
                  {
                      x: 15,
                      y: 4,
                      h: 5
                  },
                  {
                      x: 9,
                      y: 4,
                      w: 7
                  },
                  {
                      x: 19,
                      y: 10,
                      w: 17
                  },
                  {
                      x: 56,
                      y: 4,
                      h: 9
                  },
                  {
                      x: 48,
                      y: 4,
                      w: 13
                  },
                  {
                      x: 44,
                      y: 9,
                      w: 13
                  },
                  {
                      x: 48,
                      y: 1,
                      h: 4
                  },
                  {
                      x: 60,
                      y: 12,
                      h: 4
                  },
                  {
                      x: 44,
                      y: 15,
                      w: 17
                  },
                  {
                      x: 44,
                      y: 12,
                      w: 17
                  },
                  {
                      x: 44,
                      y: 1,
                      h: 15
                  },
                  {
                      x: 41,
                      y: 13,
                      w: 4
                  },
                  {
                      x: 41,
                      y: 13,
                      h: 3
                  },
                  {
                      x: 38,
                      y: 13,
                      h: 3
                  },
                  {
                      x: 38,
                      y: 15,
                      w: 4
                  },
                  {
                      x: 35,
                      y: 10,
                      w: 10
                  },
                  {
                      x: 35,
                      y: 1,
                      h: 15
                  },
                  {
                      x: 35,
                      y: 13,
                      w: 4
                  },
                  {
                      x: 19,
                      y: 15,
                      w: 8
                  },
                  {
                      x: 19,
                      y: 12,
                      w: 5
                  },
                  {
                      x: 23,
                      y: 10,
                      h: 3
                  },
                  {
                      x: 32,
                      y: 10,
                      h: 3
                  },
                  {
                      x: 32,
                      y: 12,
                      w: 4
                  },
                  {
                      x: 26,
                      y: 12,
                      w: 4
                  },
                  {
                      x: 26,
                      y: 12,
                      h: 4
                  },
                  {
                      x: 15,
                      y: 8,
                      h: 5
                  },
                  {
                      x: 29,
                      y: 15,
                      w: 7
                  },
                  {
                      x: 29,
                      y: 12,
                      h: 4
                  },
                  {
                      x: 19,
                      y: 10,
                      w: 12
                  },
                  {
                      x: 56,
                      y: 8,
                      w: 10,
                      type: 1
                  },
                  {
                      x: 1,
                      y: 8,
                      w: 9,
                      type: 1
                  }]
            break;
          case 4:
              b.style.backgroundImage = "url(src/round4.png)";
              o = [{
                  x: 1,
                  y: 8,
                  w: 8
              },
                  {
                      x: 57,
                      y: 8,
                      w: 9
                  },
                  {
                      x: 36,
                      y: 4,
                      w: 8
                  },
                  {
                      x: 36,
                      y: 10,
                      w: 8
                  },
                  {
                      x: 39,
                      y: 15,
                      w: 2
                  }],
                  p = [{
                      x: 11,
                      y: 15
                  },
                      {
                          x: 54,
                          y: 4
                      },
                      {
                          x: 32,
                          y: 11
                      }]
              n = [{
                  x: 5,
                  y: 1,
                  w: 56
              },
                  {
                      x: 5,
                      y: 4,
                      w: 5
                  },
                  {
                      x: 5,
                      y: 1,
                      h: 4
                  },
                  {
                      x: 9,
                      y: 1,
                      h: 8
                  },
                  {
                      x: 24,
                      y: 4,
                      h: 4
                  },
                  {
                      x: 15,
                      y: 8,
                      h: 5
                  },
                  {
                      x: 24,
                      y: 7,
                      w: 5
                  },
                  {
                      x: 28,
                      y: 7,
                      h: 4
                  },
                  {
                      x: 5,
                      y: 12,
                      h: 4
                  },
                  {
                      x: 17,
                      y: 12,
                      h: 4
                  },
                  {
                      x: 5,
                      y: 15,
                      w: 12
                  },
                  {
                      x: 5,
                      y: 12,
                      w: 15
                  },
                  {
                      x: 60,
                      y: 1,
                      h: 4
                  },
                  {
                      x: 19,
                      y: 1,
                      h: 15
                  },
                  {
                      x: 19,
                      y: 4,
                      w: 26
                  },
                  {
                      x: 9,
                      y: 8,
                      w: 7
                  },
                  {
                      x: 15,
                      y: 4,
                      h: 5
                  },
                  {
                      x: 9,
                      y: 4,
                      w: 7
                  },
                  {
                      x: 19,
                      y: 10,
                      w: 17
                  },
                  {
                      x: 56,
                      y: 4,
                      h: 12
                  },
                  {
                      x: 48,
                      y: 4,
                      h: 6
                  },
                  {
                      x: 52,
                      y: 4,
                      h: 6
                  },
                  {
                      x: 44,
                      y: 4,
                      w: 17
                  },
                  {
                      x: 44,
                      y: 9,
                      w: 13
                  },

                  {
                      x: 60,
                      y: 12,
                      h: 4
                  },
                  {
                      x: 44,
                      y: 15,
                      w: 17
                  },
                  {
                      x: 44,
                      y: 12,
                      w: 6
                  },
                  {
                      x: 52,
                      y: 12,
                      w: 5
                  },
                  {
                      x: 56,
                      y: 12,
                      w: 5
                  },
                  {
                      x: 44,
                      y: 4,
                      h: 12
                  },
                  {
                      x: 41,
                      y: 13,
                      w: 4
                  },
                  {
                      x: 41,
                      y: 13,
                      h: 3
                  },
                  {
                      x: 38,
                      y: 13,
                      h: 3
                  },
                  {
                      x: 38,
                      y: 15,
                      w: 4
                  },
                  {
                      x: 35,
                      y: 10,
                      w: 10
                  },
                  {
                      x: 35,
                      y: 1,
                      h: 15
                  },
                  {
                      x: 35,
                      y: 13,
                      w: 4
                  },
                  {
                      x: 19,
                      y: 15,
                      w: 8
                  },
                  {
                      x: 19,
                      y: 12,
                      w: 5
                  },
                  {
                      x: 23,
                      y: 10,
                      h: 3
                  },
                  {
                      x: 32,
                      y: 10,
                      h: 3
                  },
                  {
                      x: 32,
                      y: 12,
                      w: 4
                  },
                  {
                      x: 26,
                      y: 12,
                      w: 4
                  },
                  {
                      x: 26,
                      y: 12,
                      h: 4
                  },
                  {
                      x: 29,
                      y: 15,
                      w: 7
                  },
                  {
                      x: 29,
                      y: 12,
                      h: 4
                  },
                  {
                      x: 19,
                      y: 10,
                      w: 12
                  },
                  {
                      x: 56,
                      y: 8,
                      w: 10,
                      type: 1
                  },
                  {
                      x: 1,
                      y: 8,
                      w: 9,
                      type: 1
                  }]
            break;
      }

      b.style.backgroundPosition = -c + "px " + -d + "px";
      b.style.backgroundRepeat = "no-repeat"
    } else {
      b.style.overflow = "hidden";

      c = "display: block; position: relative; left: " + -c + "px; top: " + -d + "px";
        switch (pacmanGameMode.level){
            case 1:
      b.innerHTML = '<img style="' + c + '" src="src/round1.png">'

        break;
            case 2:
                b.innerHTML = '<img style="' + c + '" src="src/round2.png">'

                break;
            case 3:
                b.innerHTML = '<img style="' + c + '" src="src/round3.png">'

              break;
            default:
                b.innerHTML = '<img style="' + c + '" src="src/round4.png">'

              break;
        }
    }
  };
  pacmanGameMode.changeElementBkPos = function (b, c, d, f) {
    if (f) {
      c = pacmanGameMode.getCorrectedSpritePos(c);
      d = pacmanGameMode.getCorrectedSpritePos(d)
    }
    if (pacmanGameMode.useCss) b.style.backgroundPosition = -c + "px " + -d + "px";
    else if (b.childNodes[0]) {
      b.childNodes[0].style.left = -c + "px";
      b.childNodes[0].style.top = -d + "px"
    }
  };
  pacmanGameMode.determinePlayfieldDimensions = function () {
    pacmanGameMode.playfieldWidth = 0;
    pacmanGameMode.playfieldHeight = 0;
    for (var b in n) {
      var c = n[b];
      if (c.w) {
        c = c.x + c.w - 1;
        if (c > pacmanGameMode.playfieldWidth) pacmanGameMode.playfieldWidth = c
      } else {
        c = c.y + c.h - 1;
        if (c > pacmanGameMode.playfieldHeight) pacmanGameMode.playfieldHeight = c
      }
    }
  };
  pacmanGameMode.preparePlayfield = function () {
    pacmanGameMode.playfield = [];
    for (var b = 0; b <= pacmanGameMode.playfieldHeight + 1; b++) {
      pacmanGameMode.playfield[b * 8] = [];
      for (var c = -2; c <= pacmanGameMode.playfieldWidth + 1; c++) pacmanGameMode.playfield[b * 8][c * 8] = {
        path: 0,
        dot: 0,
        intersection: 0
      }
    }
  };
  pacmanGameMode.preparePaths = function () {
    for (var b in n) {
      var c = n[b],
        d = c.type;
      if (c.w) {
        for (var f = c.y * 8, h = c.x * 8; h <= (c.x + c.w - 1) * 8; h += 8) {
          pacmanGameMode.playfield[f][h].path = a;
          if (pacmanGameMode.playfield[f][h].dot == 0) {
            pacmanGameMode.playfield[f][h].dot = 1;
            pacmanGameMode.dotsRemaining++
          }
          pacmanGameMode.playfield[f][h].type = !d || h != c.x * 8 && h != (c.x + c.w - 1) * 8 ? d : 0
        }
        pacmanGameMode.playfield[f][c.x * 8].intersection = a;
        pacmanGameMode.playfield[f][(c.x + c.w - 1) * 8].intersection = a
      } else {
        h = c.x * 8;
        for (f = c.y * 8; f <= (c.y + c.h - 1) * 8; f += 8) {
          if (pacmanGameMode.playfield[f][h].path) pacmanGameMode.playfield[f][h].intersection = a;
          pacmanGameMode.playfield[f][h].path = a;
          if (pacmanGameMode.playfield[f][h].dot == 0) {
            pacmanGameMode.playfield[f][h].dot = 1;
            pacmanGameMode.dotsRemaining++
          }
          pacmanGameMode.playfield[f][h].type = !d || f != c.y * 8 && f != (c.y + c.h - 1) * 8 ? d : 0
        }
        pacmanGameMode.playfield[c.y * 8][h].intersection = a;
        pacmanGameMode.playfield[(c.y + c.h - 1) * 8][h].intersection = a
      }
    }
    for (b in o) if (o[b].w) for (h = o[b].x * 8; h <= (o[b].x + o[b].w - 1) * 8; h += 8) {
      pacmanGameMode.playfield[o[b].y * 8][h].dot = 0;
      pacmanGameMode.dotsRemaining--
    } else for (f = o[b].y * 8; f <= (o[b].y + o[b].h - 1) * 8; f += 8) {
      pacmanGameMode.playfield[f][o[b].x * 8].dot = 0;
      pacmanGameMode.dotsRemaining--
    }
  };
  pacmanGameMode.prepareAllowedDirections = function () {
    for (var b = 8; b <= pacmanGameMode.playfieldHeight * 8; b += 8) for (var c = 8; c <= pacmanGameMode.playfieldWidth * 8; c += 8) {
      pacmanGameMode.playfield[b][c].allowedDir = 0;
      if (pacmanGameMode.playfield[b - 8][c].path) pacmanGameMode.playfield[b][c].allowedDir += 1;
      if (pacmanGameMode.playfield[b + 8][c].path) pacmanGameMode.playfield[b][c].allowedDir += 2;
      if (pacmanGameMode.playfield[b][c - 8].path) pacmanGameMode.playfield[b][c].allowedDir += 4;
      if (pacmanGameMode.playfield[b][c + 8].path) pacmanGameMode.playfield[b][c].allowedDir += 8
    }
  };
  pacmanGameMode.createDotElements = function () {
    for (var b = 8; b <= pacmanGameMode.playfieldHeight * 8; b += 8) for (var c = 8; c <= pacmanGameMode.playfieldWidth * 8; c += 8) if (pacmanGameMode.playfield[b][c].dot) {
      var d = document.createElement("div");
      d.className = "pcm-d";
      d.id = pacmanGameMode.getDotElementId(b, c);
      d.style.left = c + -32 + "px";
      d.style.top = b + 0 + "px";
      pacmanGameMode.playfieldEl.appendChild(d)
    }
  };
  pacmanGameMode.createEnergizerElements = function () {
    for (var b in p) {
      var c = p[b],
        d = pacmanGameMode.getDotElementId(c.y * 8, c.x * 8);
      document.getElementById(d).className = "pcm-e";
      pacmanGameMode.prepareElement(document.getElementById(d), 0, 144);
      pacmanGameMode.playfield[c.y * 8][c.x * 8].dot = 2
    }
  };
  pacmanGameMode.createFruitElement = function () {
    pacmanGameMode.fruitEl = document.createElement("div");
    pacmanGameMode.fruitEl.id = "pcm-f";
    pacmanGameMode.fruitEl.style.left = pacmanGameMode.getPlayfieldX(v[1]) + "px";
    pacmanGameMode.fruitEl.style.top = pacmanGameMode.getPlayfieldY(v[0]) + "px";
    pacmanGameMode.prepareElement(pacmanGameMode.fruitEl, -32, -16);
    pacmanGameMode.playfieldEl.appendChild(pacmanGameMode.fruitEl)
  };
  pacmanGameMode.createPlayfieldElements = function () {
    pacmanGameMode.doorEl = document.createElement("div");
    pacmanGameMode.doorEl.id = "pcm-do";
    pacmanGameMode.doorEl.style.display = "none";
    pacmanGameMode.playfieldEl.appendChild(pacmanGameMode.doorEl);
    pacmanGameMode.createDotElements();
    pacmanGameMode.createEnergizerElements();
    pacmanGameMode.createFruitElement()
  };
  pacmanGameMode.createActors = function () {
    pacmanGameMode.actors = [];
    for (var b = 0; b < pacmanGameMode.pacmanNum + 4; b++) {
      pacmanGameMode.actors[b] = new E(b);
      if (b < pacmanGameMode.pacmanNum) {
        pacmanGameMode.actors[b].ghost = e;
        pacmanGameMode.actors[b].mode = 1
      } else pacmanGameMode.actors[b].ghost = a
    }
  };
  pacmanGameMode.ghostreply = function () {
    for (var b in pacmanGameMode.actors) pacmanGameMode.actors[b].A()

  };
  pacmanGameMode.createActorElements = function () {
    for (var b in pacmanGameMode.actors) pacmanGameMode.actors[b].createElement()
  };
  pacmanGameMode.createPlayfield = function () {
    pacmanGameMode.playfieldEl = document.createElement("div");
    pacmanGameMode.playfieldEl.id = "pcm-p";
    pacmanGameMode.canvasEl.appendChild(pacmanGameMode.playfieldEl)
  };
  pacmanGameMode.resetPlayfield = function () {
    pacmanGameMode.dotsRemaining = 0;
    pacmanGameMode.dotsEaten = 0;
    pacmanGameMode.playfieldEl.innerHTML = "";
    pacmanGameMode.prepareElement(pacmanGameMode.playfieldEl, 256, 0);
    pacmanGameMode.determinePlayfieldDimensions();
    pacmanGameMode.preparePlayfield();
    pacmanGameMode.preparePaths();
    pacmanGameMode.prepareAllowedDirections();
    pacmanGameMode.createPlayfieldElements();
    pacmanGameMode.createActorElements()
  };
    pacmanGameMode.keyPressed = function (b) {                              //ketboard event
        var c = e;
        switch (b) {                                                          //pacman
            case 37:
                pacmanGameMode.actors[0].keyDirection = 4;                          //  direcion keyboard right
                c = a;
                break;
            case 38:
                pacmanGameMode.actors[0].keyDirection = 1;//  direcion keyboard up
                c = a;
                break;
            case 39:
                pacmanGameMode.actors[0].keyDirection = 8;//  direcion keyboard left
                c = a;
                break;
            case 40:
                pacmanGameMode.actors[0].keyDirection = 2;//  direcion keyboard down
                c = a;
                break;
            case 65:
                if (pacmanGameMode.pacmanNum == 2) {              //pac woman
                    pacmanGameMode.actors[1].keyDirection = 4;//  direcion keyboard right
                    c = a
                }
                break;
            case 83:
                if (pacmanGameMode.pacmanNum == 2) {
                    pacmanGameMode.actors[1].keyDirection = 2;//  direcion keyboard down
                    c = a
                }
                break;
            case 68:
                if (pacmanGameMode.pacmanNum == 2) {
                    pacmanGameMode.actors[1].keyDirection = 8;//  direcion keyboard left
                    c = a
                }
                break;
            case 87:
                if (pacmanGameMode.pacmanNum == 2) {
                    pacmanGameMode.actors[1].keyDirection = 1;//  direcion keyboard up
                    c = a
                }
                break
        }
        return c
  };
  pacmanGameMode.pacmanKeypress = function (b) {
    if (!b) b = window.event;
    if (pacmanGameMode.keyPressed(b.keyCode)) if (b.preventDefault) b.preventDefault();
    else b.returnValue = e
  };
  pacmanGameMode.canvasClicked = function (b, c) {
    var d = pacmanGameMode.getAbsoluteElPos(pacmanGameMode.canvasEl);
    b -= d[1] - -32;
    c -= d[0] - 0;
    d = pacmanGameMode.actors[0];
    var f = pacmanGameMode.getPlayfieldX(d.pos[1] + d.posDelta[1]) + 16,
      h = pacmanGameMode.getPlayfieldY(d.pos[0] + d.posDelta[0]) + 32,
      j = Math.abs(b - f),
      k = Math.abs(c - h);
    if (j > 8 && k < j) d.keyDirection = b > f ? 8 : 4;
    else if (k > 8 && j < k) d.keyDirection = c > h ? 2 : 1
  };
  pacmanGameMode.handleClick = function (b) {
    if (!b) b = window.event;
    pacmanGameMode.canvasClicked(b.clientX, b.clientY)
  };
  pacmanGameMode.registerTouch = function () {
    document.body.addEventListener("touchstart", pacmanGameMode.handleTouchStart, a);
    pacmanGameMode.canvasEl.addEventListener("touchstart", pacmanGameMode.handleTouchStart, a);
    document.f && document.f.q && document.f.q.addEventListener("touchstart", pacmanGameMode.handleTouchStart, a)
  };
  pacmanGameMode.handleTouchStart = function (b) {
    pacmanGameMode.touchDX = 0;
    pacmanGameMode.touchDY = 0;
    if (b.touches.length == 1) {
      pacmanGameMode.touchStartX = b.touches[0].pageX;
      pacmanGameMode.touchStartY = b.touches[0].pageY;
      document.body.addEventListener("touchmove", pacmanGameMode.handleTouchMove, a);
      document.body.addEventListener("touchend", pacmanGameMode.handleTouchEnd, a)
    }
    b.preventDefault();
    b.stopPropagation()
  };
  pacmanGameMode.handleTouchMove = function (b) {
    if (b.touches.length > 1) pacmanGameMode.cancelTouch();
    else {
      pacmanGameMode.touchDX = b.touches[0].pageX - pacmanGameMode.touchStartX;
      pacmanGameMode.touchDY = b.touches[0].pageY - pacmanGameMode.touchStartY
    }
    b.preventDefault();
    b.stopPropagation()
  };
  pacmanGameMode.handleTouchEnd = function (b) {
    if (pacmanGameMode.touchDX == 0 && pacmanGameMode.touchDY == 0) pacmanGameMode.canvasClicked(pacmanGameMode.touchStartX, pacmanGameMode.touchStartY);
    else {
      var c = Math.abs(pacmanGameMode.touchDX),
        d = Math.abs(pacmanGameMode.touchDY);
      if (c < 8 && d < 8) pacmanGameMode.canvasClicked(pacmanGameMode.touchStartX, pacmanGameMode.touchStartY);
      else if (c > 15 && d < c * 2 / 3) pacmanGameMode.actors[0].keyDirection = pacmanGameMode.touchDX > 0 ? 8 : 4;
      else if (d > 15 && c < d * 2 / 3) pacmanGameMode.actors[0].keyDirection = pacmanGameMode.touchDY > 0 ? 2 : 1
    }
    b.preventDefault();
    b.stopPropagation();
    pacmanGameMode.cancelTouch()
  };
  pacmanGameMode.cancelTouch = function () {
    document.body.removeEventListener("touchmove", pacmanGameMode.handleTouchMove, a);
    document.body.removeEventListener("touchend", pacmanGameMode.handleTouchEnd, a);
    pacmanGameMode.touchStartX = null;
    pacmanGameMode.touchStartY = null
  };
  pacmanGameMode.addEventListeners = function () {                                               //keyboard "w","a","s","d" control
    if (window.addEventListener) {
      window.addEventListener("keydown", pacmanGameMode.pacmanKeypress, e);
      pacmanGameMode.canvasEl.addEventListener("click", pacmanGameMode.handleClick, e);
      pacmanGameMode.registerTouch()
    } else {
      document.body.attachEvent("onkeydown", pacmanGameMode.pacmanKeypress);
      pacmanGameMode.canvasEl.attachEvent("onclick", pacmanGameMode.handleClick)
    }
  };
  pacmanGameMode.startGameplay = function () {                                                   // new level

    pacmanGameMode.goal = [0, 0];
    pacmanGameMode.extraLifeAwarded = [e, e];
    pacmanGameMode.pacmanhearts = 3;                                                                   // start heart number
    pacmanGameMode.level = 0;
    pacmanGameMode.stopGame = e;
    pacmanGameMode.globalTime = 0;
    pacmanGameMode.nextround(a)

  };
  pacmanGameMode.gameReply = function (b) {                               //restart level

    pacmanGameMode.seed(0);
    pacmanGameMode.frightModeTime = 0;
    pacmanGameMode.intervalTime = 0;
    pacmanGameMode.gameplayModeTime = 0;
    pacmanGameMode.fruitTime = 0;
    pacmanGameMode.ghostModeSwitchPos = 0;
    pacmanGameMode.ghostModeTime = pacmanGameMode.levels.ghostModeSwitchTimes[0] * D;
    pacmanGameMode.ghostExitingPenNow = e;
    pacmanGameMode.ghostEyesCount = 0;
    pacmanGameMode.tilesChanged = e;
    pacmanGameMode.updateCruiseElroySpeed();
    pacmanGameMode.hidebonus();
    pacmanGameMode.resetForcePenLeaveTime();
    pacmanGameMode.ghostreply();
    pacmanGameMode.updateActorPositions();
    pacmanGameMode.switchMainGhostMode(2, a);
    for (var c = pacmanGameMode.pacmanNum + 1; c < pacmanGameMode.pacmanNum + 4; c++) pacmanGameMode.actors[c].a(16);
    pacmanGameMode.dotEatingChannel = [0, 0];

    pacmanGameMode.clearDotEatingNow();                                                       //dot remove
    b ? pacmanGameMode.changeGameplayMode(4) : pacmanGameMode.changeGameplayMode(6)
  };
  pacmanGameMode.initiateDoubleMode = function () {
    if (pacmanGameMode.pacmanNum != 2) {
      pacmanGameMode.stopAllAudio();
      pacmanGameMode.changeGameplayMode(12)
    }
  };
  pacmanGameMode.newGame = function () {                                          //play button "Single Player"
    pacmanGameMode.pacmanNum = 1;
    pacmanGameMode.createChrome();
    pacmanGameMode.createPlayfield();
    pacmanGameMode.createActors();
    pacmanGameMode.startGameplay()
  };
  pacmanGameMode.switchToDoubleMode = function () {                                 //play button "Multi player"
    pacmanGameMode.pacmanNum = 2;
    pacmanGameMode.createChrome();
    pacmanGameMode.createPlayfield();
    pacmanGameMode.createActors();
    pacmanGameMode.startGameplay()
  };
  pacmanGameMode.insertCoin = function () {                                 //insert 1 player "Single player"

    if(pacmanGameMode.gameplayMode == 8 || pacmanGameMode.gameplayMode == 14){
        pacmanGameMode.newGame()
    }else {
        pacmanGameMode.initiateDoubleMode()
    }

  };
    pacmanGameMode.insertCoin2 = function () {                            //insert 2 players


        pacmanGameMode.gameplayMode == 8 || pacmanGameMode.gameplayMode == 14 ? pacmanGameMode.switchToDoubleMode() : pacmanGameMode.initiateDoubleMode()
    };
  pacmanGameMode.createKillScreenElement = function (b, c, d, f, h) {
    var j = document.createElement("div");
    j.style.left = b + "px";
    j.style.top = c + "px";
    j.style.width = d + "px";
    j.style.height = f + "px";
    j.style.zIndex = 119;
    if (h) {

      switch (pacmanGameMode.level){
          case 1:
              j.style.background = "url(src/round1.png) -" + pacmanGameMode.killScreenTileX + "px -" + pacmanGameMode.killScreenTileY + "px no-repeat";
            break;
          case 2:
              j.style.background = "url(src/round2.png) -" + pacmanGameMode.killScreenTileX + "px -" + pacmanGameMode.killScreenTileY + "px no-repeat";
            break;
          case 3:
              j.style.background = "url(src/round3.png) -" + pacmanGameMode.killScreenTileX + "px -" + pacmanGameMode.killScreenTileY + "px no-repeat";
            break;
          default:
              j.style.background = "url(src/round4.png) -" + pacmanGameMode.killScreenTileX + "px -" + pacmanGameMode.killScreenTileY + "px no-repeat";

            break;
      }

      pacmanGameMode.killScreenTileY += 8
    } else j.style.background = "black";
    pacmanGameMode.playfieldEl.appendChild(j)
  };
  pacmanGameMode.killScreen = function () {
    pacmanGameMode.seed(0);
    pacmanGameMode.canvasEl.style.visibility = "";
    pacmanGameMode.createKillScreenElement(272, 0, 200, 80, e);
    pacmanGameMode.createKillScreenElement(280, 80, 192, 56, e);
    pacmanGameMode.killScreenTileX = 80;
    pacmanGameMode.killScreenTileY = 0;
    for (var b = 280; b <= 472; b += 8) for (var c = 0; c <= 136; c += 8) {
      if (pacmanGameMode.rand() < 0.03) {
        pacmanGameMode.killScreenTileX = Math.floor(pacmanGameMode.rand() * 25) * 10;
        pacmanGameMode.killScreenTileY = Math.floor(pacmanGameMode.rand() * 2) * 10
      }
      pacmanGameMode.createKillScreenElement(b, c, 8, 8, a)
    }
    pacmanGameMode.changeGameplayMode(14)
  };
  pacmanGameMode.nextround = function (b) {

    pacmanGameMode.level++;

    pacmanGameMode.levels = pacmanGameMode.level >= z.length ? z[z.length - 1] : z[pacmanGameMode.level];
    // start issue 14: Ghosts stay blue permanently on restart
    if ((pacmanGameMode.levels.frightTime > 0) && (pacmanGameMode.levels.frightTime <= 6))
      pacmanGameMode.levels.frightTime = Math.round(pacmanGameMode.levels.frightTime * D);
    // end issue 14
    pacmanGameMode.levels.frightTotalTime = pacmanGameMode.levels.frightTime + pacmanGameMode.timing[1] * (pacmanGameMode.levels.frightBlinkCount * 2 - 1);
    for (var c in pacmanGameMode.actors) pacmanGameMode.actors[c].dotCount = 0;
    pacmanGameMode.alternatePenLeavingScheme = e;
    pacmanGameMode.lostLifeOnThisLevel = e;
    pacmanGameMode.updateChrome();
    pacmanGameMode.resetPlayfield();
    pacmanGameMode.gameReply(b);


      if(pacmanGameMode.level == 5){                                                   //if level is over 4 , result show and over message!
          var wins = pacmanGameMode.goal.toString().split(",");                       //pacmanGameMode.goal = e.x-120,1120 ,so wins[0]-integer 120,wins[1]-integer 1120
          pacmanGameMode.destroy()                                                       // game destroy
          if(parseInt(wins[0])>= parseInt(wins[1])){
            alert("Game Over 1Up wins")
              window.location.assign("index.html")
          }else{
              alert("Game Over 2Up wins")
              window.location.assign("index.html")

          }

      }
  };

    pacmanGameMode.newLife = function () {                                                   // if pacmans die, release 1 heart.

        pacmanGameMode.lostLifeOnThisLevel = a;
        pacmanGameMode.alternatePenLeavingScheme = a;
        pacmanGameMode.alternateDotCount = 0;
        pacmanGameMode.pacmanhearts--;
        pacmanGameMode.updateChromeLives();
        var vic;
        var win = pacmanGameMode.goal.toString().split(",");                       //pacmanGameMode.scroe is e.x. 170,3920
        if(parseInt(win[0]) >= parseInt(win[1])){ // estimate 1up and 2up                 win[1]-170,win[2]-3920
            vic = "1 UP"
        }else{
            vic = "2 UP"
        }

        pacmanGameMode.pacmanhearts == -1 ? pacmanGameMode.changeGameplayMode(8) : pacmanGameMode.gameReply(e)            // if pacman really die without 0 heart,game is over and result show
        if(pacmanGameMode.pacmanhearts == -1) {

            if(!parseInt(win[1]) == 0) {                                                //if 2 players mode, estimate between 2 players.
                alert("Game is over.  " + vic.toString() + "  wins")                    //Go back to first screen
                window.location.assign("index.html")

            }else{                                                                      // if 1 player mode,notify 'Game Over'
                alert("Game is over.")
                window.location.assign("index.html")
            }
            pacmanGameMode.destroy()                                              //Game exit
        }
    };
  pacmanGameMode.switchMainGhostMode = function (b, c) {
    if (b == 4 && pacmanGameMode.levels.frightTime == 0) for (var d in pacmanGameMode.actors) {
      var f = pacmanGameMode.actors[d];
      if (f.ghost) f.reverseDirectionsNext = a
    } else {
      f = pacmanGameMode.mainGhostMode;
      if (b == 4 && pacmanGameMode.mainGhostMode != 4) pacmanGameMode.lastMainGhostMode = pacmanGameMode.mainGhostMode;
      pacmanGameMode.mainGhostMode = b;
      switch (b) {
      case 1:
      case 2:
        pacmanGameMode.currentPlayerSpeed = pacmanGameMode.levels.playerSpeed * 0.8;
        pacmanGameMode.currentDotEatingSpeed = pacmanGameMode.levels.dotEatingSpeed * 0.8;
        break;
      case 4:
        pacmanGameMode.currentPlayerSpeed = pacmanGameMode.levels.playerFrightSpeed * 0.8;
        pacmanGameMode.currentDotEatingSpeed = pacmanGameMode.levels.dotEatingFrightSpeed * 0.8;
        pacmanGameMode.frightModeTime = pacmanGameMode.levels.frightTotalTime;
        pacmanGameMode.modeScoreMultiplier = 1;
        break
      }
      for (d in pacmanGameMode.actors) {
        f = pacmanGameMode.actors[d];
        if (f.ghost) {
          if (b != 64 && !c) f.modeChangedWhileInPen = a;
          if (b == 4) f.eatenInThisFrightMode = e;
          if (f.mode != 8 && f.mode != 16 && f.mode != 32 && f.mode != 128 && f.mode != 64 || c) {
            if (!c && f.mode != 4 && f.mode != b) f.reverseDirectionsNext = a;
            f.a(b)
          }
        } else {
          f.fullSpeed = pacmanGameMode.currentPlayerSpeed;
          f.dotEatingSpeed = pacmanGameMode.currentDotEatingSpeed;
          f.tunnelSpeed = pacmanGameMode.currentPlayerSpeed;
          f.d()
        }
      }
    }
  };
  pacmanGameMode.figureOutPenLeaving = function () {
    if (pacmanGameMode.alternatePenLeavingScheme) {
      pacmanGameMode.alternateDotCount++;
      switch (pacmanGameMode.alternateDotCount) {
      case m[1]:
        pacmanGameMode.actors[pacmanGameMode.pacmanNum + 1].freeToLeavePen = a;
        break;
      case m[2]:
        pacmanGameMode.actors[pacmanGameMode.pacmanNum + 2].freeToLeavePen = a;
        break;
      case m[3]:
        if (pacmanGameMode.actors[pacmanGameMode.pacmanNum + 3].mode == 16) pacmanGameMode.alternatePenLeavingScheme = e;
        break
      }
    } else if (pacmanGameMode.actors[pacmanGameMode.pacmanNum + 1].mode == 16 || pacmanGameMode.actors[pacmanGameMode.pacmanNum + 1].mode == 8) {
      pacmanGameMode.actors[pacmanGameMode.pacmanNum + 1].dotCount++;
      if (pacmanGameMode.actors[pacmanGameMode.pacmanNum + 1].dotCount >= pacmanGameMode.levels.penLeavingLimits[1]) pacmanGameMode.actors[pacmanGameMode.pacmanNum + 1].freeToLeavePen = a
    } else if (pacmanGameMode.actors[pacmanGameMode.pacmanNum + 2].mode == 16 || pacmanGameMode.actors[pacmanGameMode.pacmanNum + 2].mode == 8) {
      pacmanGameMode.actors[pacmanGameMode.pacmanNum + 2].dotCount++;
      if (pacmanGameMode.actors[pacmanGameMode.pacmanNum + 2].dotCount >= pacmanGameMode.levels.penLeavingLimits[2]) pacmanGameMode.actors[pacmanGameMode.pacmanNum + 2].freeToLeavePen = a
    } else if (pacmanGameMode.actors[pacmanGameMode.pacmanNum + 3].mode == 16 || pacmanGameMode.actors[pacmanGameMode.pacmanNum + 3].mode == 8) {
      pacmanGameMode.actors[pacmanGameMode.pacmanNum + 3].dotCount++;
      if (pacmanGameMode.actors[pacmanGameMode.pacmanNum + 3].dotCount >= pacmanGameMode.levels.penLeavingLimits[3]) pacmanGameMode.actors[pacmanGameMode.pacmanNum + 3].freeToLeavePen = a
    }
  };
  pacmanGameMode.resetForcePenLeaveTime = function () {
    pacmanGameMode.forcePenLeaveTime = pacmanGameMode.levels.penForceTime * D
  };
  pacmanGameMode.dotEaten = function (b, c) {
    pacmanGameMode.dotsRemaining--;
    pacmanGameMode.dotsEaten++;
    pacmanGameMode.actors[b].c(1);
    if (pacmanGameMode.playfield[c[0]][c[1]].dot == 2) {
      pacmanGameMode.switchMainGhostMode(4, e);
      pacmanGameMode.addToScore(50, b)
    } else pacmanGameMode.addToScore(10, b);
    var d = document.getElementById(pacmanGameMode.getDotElementId(c[0], c[1]));
    d.style.display = "none";
    pacmanGameMode.playfield[c[0]][c[1]].dot = 0;
    pacmanGameMode.updateCruiseElroySpeed();
    pacmanGameMode.resetForcePenLeaveTime();
    pacmanGameMode.figureOutPenLeaving();
    if (pacmanGameMode.dotsEaten == 70 || pacmanGameMode.dotsEaten == 170) pacmanGameMode.showFruit();
    pacmanGameMode.dotsRemaining == 0 && pacmanGameMode.finishLevel();
  };
  pacmanGameMode.getFruitSprite = function (b) {
    var c = b <= 4 ? 128 : 160;
    b = 128 + 16 * ((b - 1) % 4);
    return [c, b]
  };
  pacmanGameMode.getFruitScoreSprite = function (b) {
    var c = 128;
    b = 16 * (b - 1);
    return [c, b]
  };
  pacmanGameMode.hidebonus = function () {
    pacmanGameMode.fruitShown = e;
    pacmanGameMode.changeElementBkPos(pacmanGameMode.fruitEl, 32, 16, a)
  };
  pacmanGameMode.showFruit = function () {
    pacmanGameMode.fruitShown = a;
    var b = pacmanGameMode.getFruitSprite(pacmanGameMode.levels.fruit);
    pacmanGameMode.changeElementBkPos(pacmanGameMode.fruitEl, b[0], b[1], a);
    pacmanGameMode.fruitTime = pacmanGameMode.timing[15] + (pacmanGameMode.timing[16] - pacmanGameMode.timing[15]) * pacmanGameMode.rand()
  };
  pacmanGameMode.eatFruit = function (b) {
    if (pacmanGameMode.fruitShown) {
      pacmanGameMode.fruitShown = e;
      var c = pacmanGameMode.getFruitScoreSprite(pacmanGameMode.levels.fruit);
      pacmanGameMode.changeElementBkPos(pacmanGameMode.fruitEl, c[0], c[1], a);
      pacmanGameMode.fruitTime = pacmanGameMode.timing[14];
      pacmanGameMode.addToScore(pacmanGameMode.levels.fruitScore, b)
    }
  };
  pacmanGameMode.updateActorTargetPositions = function () {
    for (var b = pacmanGameMode.pacmanNum; b < pacmanGameMode.pacmanNum + 4; b++) pacmanGameMode.actors[b].B()
  };
  pacmanGameMode.moveActors = function () {
    for (var b in pacmanGameMode.actors) pacmanGameMode.actors[b].move()
  };
  pacmanGameMode.ghostDies = function (b, c) {
    pacmanGameMode.addToScore(200 * pacmanGameMode.modeScoreMultiplier, c);
    pacmanGameMode.modeScoreMultiplier *= 2;
    pacmanGameMode.ghostBeingEatenId = b;
    pacmanGameMode.playerEatingGhostId = c;
    pacmanGameMode.changeGameplayMode(1)
  };
  pacmanGameMode.playerDies = function (b) {
    pacmanGameMode.playerDyingId = b;
    pacmanGameMode.changeGameplayMode(2)
  };
  pacmanGameMode.detectCollisions = function () {
    pacmanGameMode.tilesChanged = e;
    for (var b = pacmanGameMode.pacmanNum; b < pacmanGameMode.pacmanNum + 4; b++) for (var c = 0; c < pacmanGameMode.pacmanNum; c++) if (pacmanGameMode.actors[b].tilePos[0] == pacmanGameMode.actors[c].tilePos[0] && pacmanGameMode.actors[b].tilePos[1] == pacmanGameMode.actors[c].tilePos[1]) if (pacmanGameMode.actors[b].mode == 4) {
      pacmanGameMode.ghostDies(b, c);
      return
    } else pacmanGameMode.actors[b].mode != 8 && pacmanGameMode.actors[b].mode != 16 && pacmanGameMode.actors[b].mode != 32 && pacmanGameMode.actors[b].mode != 128 && pacmanGameMode.actors[b].mode != 64 && pacmanGameMode.playerDies(c)
  };
  pacmanGameMode.updateCruiseElroySpeed = function () {
    var b = pacmanGameMode.levels.ghostSpeed * 0.8;
    if (!pacmanGameMode.lostLifeOnThisLevel || pacmanGameMode.actors[pacmanGameMode.pacmanNum + 3].mode != 16) {
      var c = pacmanGameMode.levels;
      if (pacmanGameMode.dotsRemaining < c.elroyDotsLeftPart2) b = c.elroySpeedPart2 * 0.8;
      else if (pacmanGameMode.dotsRemaining < c.elroyDotsLeftPart1) b = c.elroySpeedPart1 * 0.8
    }
    if (b != pacmanGameMode.cruiseElroySpeed) {
      pacmanGameMode.cruiseElroySpeed = b;
      pacmanGameMode.actors[pacmanGameMode.pacmanNum].d()
    }
  };
  pacmanGameMode.getSpeedIntervals = function (b) {
    if (!pacmanGameMode.speedIntervals[b]) {
      var c = 0,
        d = 0;
      pacmanGameMode.speedIntervals[b] = [];
      for (var f = 0; f < D; f++) {
        c += b;
        if (Math.floor(c) > d) {
          pacmanGameMode.speedIntervals[b].push(a);
          d = Math.floor(c)
        } else pacmanGameMode.speedIntervals[b].push(e)
      }
    }
    return pacmanGameMode.speedIntervals[b]
  };
  pacmanGameMode.finishLevel = function () {
    pacmanGameMode.changeGameplayMode(9)
  };
  pacmanGameMode.changeGameplayMode = function (b) {
    pacmanGameMode.gameplayMode = b;
    if (b != 13) for (var c = 0; c < pacmanGameMode.pacmanNum + 4; c++) pacmanGameMode.actors[c].b();
    switch (b) {
    case 0:
      break;
    case 2:
      pacmanGameMode.stopAllAudio();
      pacmanGameMode.gameplayModeTime = pacmanGameMode.timing[3];
      break;
    case 3:
      pacmanGameMode.gameplayModeTime = pacmanGameMode.timing[4];
      break;
    case 6:
      pacmanGameMode.canvasEl.style.visibility = "hidden";
      pacmanGameMode.gameplayModeTime = pacmanGameMode.timing[5];
      break;
    case 7:
      pacmanGameMode.stopAllAudio();
      pacmanGameMode.canvasEl.style.visibility = "";
      pacmanGameMode.doorEl.style.display = "block";
      b = document.createElement("div");
      b.id = "pcm-re";
      pacmanGameMode.prepareElement(b, 160, 0);
      pacmanGameMode.playfieldEl.appendChild(b);
      pacmanGameMode.gameplayModeTime = pacmanGameMode.timing[6];
      break;
    case 4:
      pacmanGameMode.doorEl.style.display = "block";
      b = document.createElement("div");
      b.id = "pcm-re";
      pacmanGameMode.prepareElement(b, 160, 0);
      pacmanGameMode.playfieldEl.appendChild(b);
      pacmanGameMode.gameplayModeTime = pacmanGameMode.timing[7];
      pacmanGameMode.stopAllAudio();
      break;
    case 5:
      pacmanGameMode.pacmanhearts--;
      pacmanGameMode.updateChromeLives();
      pacmanGameMode.gameplayModeTime = pacmanGameMode.timing[8];
      break;
    case 8:
    case 14:
      b = document.getElementById("pcm-re");
      education.dom.remove(b);
      pacmanGameMode.stopAllAudio();
      b = document.createElement("div");
      b.id = "pcm-go";
      pacmanGameMode.prepareElement(b, 8, 152);
      pacmanGameMode.playfieldEl.appendChild(b);
      pacmanGameMode.gameplayModeTime = pacmanGameMode.timing[9];
      break;
    case 9:
      pacmanGameMode.stopAllAudio();
      pacmanGameMode.gameplayModeTime = pacmanGameMode.timing[10];
      break;
    case 10:
      pacmanGameMode.doorEl.style.display = "none";
      pacmanGameMode.gameplayModeTime = pacmanGameMode.timing[11];
      break;
    case 11:
      pacmanGameMode.canvasEl.style.visibility = "hidden";
      pacmanGameMode.gameplayModeTime = pacmanGameMode.timing[12];
      break;
    case 12:
      pacmanGameMode.playfieldEl.style.visibility = "hidden";
      pacmanGameMode.gameplayModeTime = pacmanGameMode.timing[13];
      break;
    case 1:
      pacmanGameMode.gameplayModeTime =
      pacmanGameMode.timing[2];
      break;
    case 13:
      pacmanGameMode.startCutscene();
      break
    }
  };
  pacmanGameMode.showChrome = function (b) {
    pacmanGameMode.showElementById("pcm-sc-1-l", b);
    pacmanGameMode.showElementById("pcm-sc-2-l", b);
    pacmanGameMode.showElementById("pcm-sc-1", b);
    pacmanGameMode.showElementById("pcm-sc-2", b);
    pacmanGameMode.showElementById("pcm-li", b);
    pacmanGameMode.showElementById("pcm-so", b)
  };


  pacmanGameMode.startCutscene = function () {
    pacmanGameMode.playfieldEl.style.visibility = "hidden";
    pacmanGameMode.canvasEl.style.visibility = "";
    pacmanGameMode.showChrome(e);
    pacmanGameMode.cutsceneCanvasEl = document.createElement("div");
    pacmanGameMode.cutsceneCanvasEl.id = "pcm-cc";
    pacmanGameMode.canvasEl.appendChild(pacmanGameMode.cutsceneCanvasEl);
    pacmanGameMode.cutscene = B[pacmanGameMode.cutsceneId];
    pacmanGameMode.cutsceneSequenceId = -1;
    pacmanGameMode.frightModeTime = pacmanGameMode.levels.frightTotalTime;
    pacmanGameMode.cutsceneActors = [];
    for (var b in pacmanGameMode.cutscene.actors) {
      var c = pacmanGameMode.cutscene.actors[b].id;
      if (c > 0) c += pacmanGameMode.pacmanNum - 1;
      var d = document.createElement("div");
      d.className = "pcm-ac";
      d.id = "actor" + c;
      pacmanGameMode.prepareElement(d, 0, 0);
      c = new E(c);
      c.el = d;
      c.elBackgroundPos = [0, 0];
      c.elPos = [0, 0];
      c.pos = [pacmanGameMode.cutscene.actors[b].y * 8, pacmanGameMode.cutscene.actors[b].x * 8];
      c.posDelta = [0, 0];
      c.ghost = pacmanGameMode.cutscene.actors[b].ghost;
      pacmanGameMode.cutsceneCanvasEl.appendChild(d);
      pacmanGameMode.cutsceneActors.push(c)
    }
    pacmanGameMode.cutsceneNextSequence();
    pacmanGameMode.stopAllAudio();
  };
  pacmanGameMode.stopCutscene = function () {
    pacmanGameMode.playfieldEl.style.visibility = "";
    education.dom.remove(pacmanGameMode.cutsceneCanvasEl);
    pacmanGameMode.showChrome(a);
    pacmanGameMode.nextround(e)

  };
  pacmanGameMode.cutsceneNextSequence = function () {
    pacmanGameMode.cutsceneSequenceId++;
    if (pacmanGameMode.cutscene.sequence.length == pacmanGameMode.cutsceneSequenceId) pacmanGameMode.stopCutscene();
    else {
      var b = pacmanGameMode.cutscene.sequence[pacmanGameMode.cutsceneSequenceId];
      pacmanGameMode.cutsceneTime = b.time * D;
      for (var c in pacmanGameMode.cutsceneActors) {
        var d = pacmanGameMode.cutsceneActors[c];
        d.dir = b.moves[c].dir;
        d.speed = b.moves[c].speed;
        if (b.moves[c].elId) d.el.id = b.moves[c].elId;
        if (b.moves[c].mode) d.mode = b.moves[c].mode;
        d.b()
      }
    }
  };
  pacmanGameMode.checkCutscene = function () {
    pacmanGameMode.cutsceneTime <= 0 && pacmanGameMode.cutsceneNextSequence()
  };
  pacmanGameMode.advanceCutscene = function () {
    for (var b in pacmanGameMode.cutsceneActors) {
      var c = pacmanGameMode.cutsceneActors[b],
        d = l[c.dir];
      c.pos[d.axis] += d.increment * c.speed;
      c.b()
    }
    pacmanGameMode.cutsceneTime--
  };
  pacmanGameMode.updateActorPositions = function () {
    for (var b in pacmanGameMode.actors) pacmanGameMode.actors[b].k()
  };
  pacmanGameMode.blinkEnergizers = function () {
    switch (pacmanGameMode.gameplayMode) {
    case 4:
    case 5:
    case 6:
    case 7:
    case 9:
    case 10:
    case 11:
    case 12:
      pacmanGameMode.playfieldEl.className = "";
      break;
    case 8:
    case 14:
      pacmanGameMode.playfieldEl.className = "blk";
      break;
    default:
      if (pacmanGameMode.globalTime % (pacmanGameMode.timing[0] * 2) == 0) pacmanGameMode.playfieldEl.className = "";
      else if (pacmanGameMode.globalTime % (pacmanGameMode.timing[0] * 2) == pacmanGameMode.timing[0]) pacmanGameMode.playfieldEl.className = "blk";
      break
    }
  };
  pacmanGameMode.blinkScoreLabels = function () {
    if (pacmanGameMode.gameplayMode != 13) {
      var b = "";
      if (pacmanGameMode.globalTime % (pacmanGameMode.timing[17] * 2) == 0) b = "visible";
      else if (pacmanGameMode.globalTime % (pacmanGameMode.timing[17] * 2) == pacmanGameMode.timing[17]) b = "hidden";
      if (b) for (var c = 0; c < pacmanGameMode.pacmanNum; c++) pacmanGameMode.goalLabelEl[c].style.visibility = b
    }
  };
  pacmanGameMode.finishFrightMode = function () {
    pacmanGameMode.switchMainGhostMode(pacmanGameMode.lastMainGhostMode, e)
  };
  pacmanGameMode.handleGameplayModeTimer = function () {
    if (pacmanGameMode.gameplayModeTime) {
      pacmanGameMode.gameplayModeTime--;
      switch (pacmanGameMode.gameplayMode) {
      case 2:
      case 3:
        for (var b = 0; b < pacmanGameMode.pacmanNum + 4; b++) pacmanGameMode.actors[b].b();
        break;
      case 10:
        Math.floor(pacmanGameMode.gameplayModeTime / (pacmanGameMode.timing[11] / 8)) % 2 == 0 ? pacmanGameMode.changeElementBkPos(pacmanGameMode.playfieldEl, 322, 2, e) : pacmanGameMode.changeElementBkPos(pacmanGameMode.playfieldEl, 322, 138, e)
      }
      if (pacmanGameMode.gameplayModeTime <= 0) {
        pacmanGameMode.gameplayModeTime = 0;
        switch (pacmanGameMode.gameplayMode) {
        case 1:
          pacmanGameMode.changeGameplayMode(0);
          pacmanGameMode.ghostEyesCount++;

          pacmanGameMode.actors[pacmanGameMode.ghostBeingEatenId].el.className = "pcm-ac";
          pacmanGameMode.actors[pacmanGameMode.ghostBeingEatenId].a(8);
          var c = e;
          for (b = pacmanGameMode.pacmanNum; b < pacmanGameMode.pacmanNum + 4; b++) if (pacmanGameMode.actors[b].mode == 4 || (pacmanGameMode.actors[b].mode == 16 || pacmanGameMode.actors[b].mode == 128) && !pacmanGameMode.actors[b].eatenInThisFrightMode) {
            c = a;
            break
          }
          c || pacmanGameMode.finishFrightMode();
          break;
        case 2:
          pacmanGameMode.changeGameplayMode(3);
          break;
        case 3:
          pacmanGameMode.newLife();
          break;
        case 4:
          pacmanGameMode.changeGameplayMode(5);
          break;
        case 6:
          pacmanGameMode.changeGameplayMode(7);
          break;
        case 7:
        case 5:
          b = document.getElementById("pcm-re");
          education.dom.remove(b);
          pacmanGameMode.changeGameplayMode(0);
          break;
        case 8:
          b = document.getElementById("pcm-go");
          education.dom.remove(b);
          education.pacManQuery && education.pacManQuery();
          break;
        case 9:
          pacmanGameMode.changeGameplayMode(10);
          break;
        case 10:
          pacmanGameMode.changeGameplayMode(11);
          break;
        case 11:
          if (pacmanGameMode.levels.cutsceneId) {
            pacmanGameMode.cutsceneId = pacmanGameMode.levels.cutsceneId;
            pacmanGameMode.changeGameplayMode(13)
          } else {
            pacmanGameMode.canvasEl.style.visibility = "";
            pacmanGameMode.nextround(e)
          }
          break;
        case 12:
          pacmanGameMode.playfieldEl.style.visibility = "";
          pacmanGameMode.canvasEl.style.visibility = "";
          pacmanGameMode.switchToDoubleMode();
          break
        }
      }
    }
  };
  pacmanGameMode.handleFruitTimer = function () {                                                                                   //if pacman eats big dot,have a event.(fruit time)
    if (pacmanGameMode.fruitTime) {
      pacmanGameMode.fruitTime--;
      pacmanGameMode.fruitTime <= 0 && pacmanGameMode.hidebonus()
    }
  };
  pacmanGameMode.handleGhostModeTimer = function () {                                                                                 //if pacman eats big dot,have a event.(fruit-ghost time)
    if (pacmanGameMode.frightModeTime) {
      pacmanGameMode.frightModeTime--;
      if (pacmanGameMode.frightModeTime <= 0) {
        pacmanGameMode.frightModeTime = 0;
        pacmanGameMode.finishFrightMode()
      }
    } else if (pacmanGameMode.ghostModeTime > 0) {
      pacmanGameMode.ghostModeTime--;
      if (pacmanGameMode.ghostModeTime <= 0) {
        pacmanGameMode.ghostModeTime = 0;
        pacmanGameMode.ghostModeSwitchPos++;
        if (pacmanGameMode.levels.ghostModeSwitchTimes[pacmanGameMode.ghostModeSwitchPos]) {
          pacmanGameMode.ghostModeTime = pacmanGameMode.levels.ghostModeSwitchTimes[pacmanGameMode.ghostModeSwitchPos] * D;
          switch (pacmanGameMode.mainGhostMode) {
          case 2:
            pacmanGameMode.switchMainGhostMode(1, e);
            break;
          case 1:
            pacmanGameMode.switchMainGhostMode(2, e);
            break
          }
        }
      }
    }
  };
  pacmanGameMode.handleForcePenLeaveTimer = function () {
    if (pacmanGameMode.forcePenLeaveTime) {
      pacmanGameMode.forcePenLeaveTime--;
      if (pacmanGameMode.forcePenLeaveTime <= 0) {
        for (var b = 1; b <= 3; b++) if (pacmanGameMode.actors[pacmanGameMode.pacmanNum + b].mode == 16) {
          pacmanGameMode.actors[pacmanGameMode.pacmanNum + b].freeToLeavePen = a;
          break
        }
        pacmanGameMode.resetForcePenLeaveTime()
      }
    }
  };
  pacmanGameMode.handleTimers = function () {
    if (pacmanGameMode.gameplayMode == 0) {
      pacmanGameMode.handleForcePenLeaveTimer();
      pacmanGameMode.handleFruitTimer();
      pacmanGameMode.handleGhostModeTimer()
    }
    pacmanGameMode.handleGameplayModeTimer()
  };
  pacmanGameMode.tick = function () {
    var b = (new Date).getTime();
    pacmanGameMode.lastTimeDelta += b - pacmanGameMode.lastTime - pacmanGameMode.tickInterval;
    if (pacmanGameMode.lastTimeDelta > 100) pacmanGameMode.lastTimeDelta = 100;
    if (pacmanGameMode.canDecreaseFps && pacmanGameMode.lastTimeDelta > 50) {
      pacmanGameMode.lastTimeSlownessCount++;
      pacmanGameMode.lastTimeSlownessCount == 20 && pacmanGameMode.decreaseFps()
    }
    var c = 0;
    if (pacmanGameMode.lastTimeDelta > pacmanGameMode.tickInterval) {
      c = Math.floor(pacmanGameMode.lastTimeDelta / pacmanGameMode.tickInterval);
      pacmanGameMode.lastTimeDelta -= pacmanGameMode.tickInterval * c
    }
    pacmanGameMode.lastTime = b;
    if (pacmanGameMode.gameplayMode == 13) {
      for (b = 0; b < pacmanGameMode.tickMultiplier + c; b++) {
        pacmanGameMode.advanceCutscene();
        pacmanGameMode.intervalTime = (pacmanGameMode.intervalTime + 1) % D;
        pacmanGameMode.globalTime++
      }
      pacmanGameMode.checkCutscene();
      pacmanGameMode.blinkScoreLabels()
    } else for (b = 0; b < pacmanGameMode.tickMultiplier + c; b++) {
      pacmanGameMode.moveActors();
      if (pacmanGameMode.gameplayMode == 0) if (pacmanGameMode.tilesChanged) {
        pacmanGameMode.detectCollisions();
        pacmanGameMode.updateActorTargetPositions()
      }
      pacmanGameMode.globalTime++;
      pacmanGameMode.intervalTime = (pacmanGameMode.intervalTime + 1) % D;
      pacmanGameMode.blinkEnergizers();
      pacmanGameMode.blinkScoreLabels();
      pacmanGameMode.handleTimers()
    }
  };
  pacmanGameMode.extraLife = function (b) {

    pacmanGameMode.extraLifeAwarded[b] = a;
    pacmanGameMode.pacmanhearts++;
    if (pacmanGameMode.pacmanhearts > 5) pacmanGameMode.pacmanhearts = 5;
    pacmanGameMode.updateChromeLives()
  };
  pacmanGameMode.addToScore = function (b, c) {// add total score
    pacmanGameMode.goal[c] += b;
    !pacmanGameMode.extraLifeAwarded[c] && pacmanGameMode.goal[c] > 1E4 && pacmanGameMode.extraLife(c);
    pacmanGameMode.updateChromeScore(c)
  };
  pacmanGameMode.updateChrome = function () {
    pacmanGameMode.updateChromeLevel();
    pacmanGameMode.updateChromeLives();
    for (var b = 0; b < pacmanGameMode.pacmanNum; b++) pacmanGameMode.updateChromeScore(b)
  };
  pacmanGameMode.updateChromeScore = function (b) {
    var c = pacmanGameMode.goal[b].toString();
    if (c.length > pacmanGameMode.goalDigits) c = c.substr(c.length - pacmanGameMode.goalDigits, pacmanGameMode.goalDigits);
    for (var d = 0; d < pacmanGameMode.goalDigits; d++) {
      var f = document.getElementById("pcm-sc-" + (b + 1) + "-" + d),
        h = c.substr(d, 1);
      h ? pacmanGameMode.changeElementBkPos(f, 8 + 8 * parseInt(h, 10), 144, a) : pacmanGameMode.changeElementBkPos(f, 48, 0, a)
    }
  };
  pacmanGameMode.updateChromeLives = function () {
    pacmanGameMode.pacmanheartsEl.innerHTML = "";
    for (var b = 0; b < pacmanGameMode.pacmanhearts; b++) {
      var c = document.createElement("div");
      c.className = "pcm-lif";
      pacmanGameMode.prepareElement(c, 64, 129);
      pacmanGameMode.pacmanheartsEl.appendChild(c)
    }
  };
  pacmanGameMode.updateChromeLevel = function () {
    pacmanGameMode.levelEl.innerHTML = "";
    for (var b = pacmanGameMode.level; b >= Math.max(pacmanGameMode.level - 4 + 1, 1); b--) {
      var c = b >= z.length ? z[z.length - 1].fruit : z[b].fruit,
        d = document.createElement("div");
      c = pacmanGameMode.getFruitSprite(c);
      pacmanGameMode.prepareElement(d, c[0], c[1]);
      pacmanGameMode.levelEl.appendChild(d)
    }
    pacmanGameMode.levelEl.style.marginTop = (4 - Math.min(pacmanGameMode.level, 4)) * 16 + "px"
  };
  pacmanGameMode.createChrome = function () {
    pacmanGameMode.canvasEl.innerHTML = "";
    pacmanGameMode.goalDigits = pacmanGameMode.pacmanNum == 1 ? 10 : 5;
    pacmanGameMode.goalLabelEl = [];
    pacmanGameMode.goalLabelEl[0] = document.createElement("div");
    pacmanGameMode.goalLabelEl[0].id = "pcm-sc-1-l";
    pacmanGameMode.prepareElement(pacmanGameMode.goalLabelEl[0], 160, 56);
    pacmanGameMode.canvasEl.appendChild(pacmanGameMode.goalLabelEl[0]);
    pacmanGameMode.goalEl = [];
    pacmanGameMode.goalEl[0] = document.createElement("div");
    pacmanGameMode.goalEl[0].id = "pcm-sc-1";
    for (var b = 0; b < pacmanGameMode.goalDigits; b++) {
      var c = document.createElement("div");
      c.id = "pcm-sc-1-" + b;
      c.style.top = b * 8 + "px";
      c.style.left = 0;
      c.style.position = "absolute";
      c.style.width = "8px";
      c.style.height = "8px";
      pacmanGameMode.prepareElement(c, 48, 0);
      pacmanGameMode.goalEl[0].appendChild(c)
    }
    pacmanGameMode.canvasEl.appendChild(pacmanGameMode.goalEl[0]);
    pacmanGameMode.pacmanheartsEl = document.createElement("div");
    pacmanGameMode.pacmanheartsEl.id = "pcm-li";
    pacmanGameMode.canvasEl.appendChild(pacmanGameMode.pacmanheartsEl);
    pacmanGameMode.levelEl = document.createElement("div");
    pacmanGameMode.levelEl.id = "pcm-le";
    pacmanGameMode.canvasEl.appendChild(pacmanGameMode.levelEl);
    if (pacmanGameMode.pacmanNum == 2) {
      pacmanGameMode.goalLabelEl[1] = document.createElement("div");
      pacmanGameMode.goalLabelEl[1].id = "pcm-sc-2-l";
      pacmanGameMode.prepareElement(pacmanGameMode.goalLabelEl[1], 160, 64);
      pacmanGameMode.canvasEl.appendChild(pacmanGameMode.goalLabelEl[1]);
      pacmanGameMode.goalEl[1] = document.createElement("div");
      pacmanGameMode.goalEl[1].id = "pcm-sc-2";
      for (b = 0; b < pacmanGameMode.goalDigits; b++) {
        c = document.createElement("div");
        c.id = "pcm-sc-2-" + b;
        c.style.top = b * 8 + "px";
        c.style.left = 0;
        c.style.position = "absolute";
        c.style.width = "8px";
        c.style.height = "8px";
        pacmanGameMode.prepareElement(c, 48, 0);
        pacmanGameMode.goalEl[1].appendChild(c)
      }
      pacmanGameMode.canvasEl.appendChild(pacmanGameMode.goalEl[1])
    }

  };
  pacmanGameMode.clearDotEatingNow = function () { // place initilize
    pacmanGameMode.dotEatingNow = [e, e];
    pacmanGameMode.dotEatingNext = [e, e]
  };

  pacmanGameMode.stopAllAudio = function () {

  };



  pacmanGameMode.initializeTickTimer = function () {
    window.clearInterval(pacmanGameMode.tickTimer);
    pacmanGameMode.fps = C[pacmanGameMode.fpsChoice];
    pacmanGameMode.tickInterval = 1E3 / pacmanGameMode.fps;
    pacmanGameMode.tickMultiplier = D / pacmanGameMode.fps;
    pacmanGameMode.timing = {};
    for (var b in w) {
      var c = !(b == 7 || b == 8) ? 1 : w[b];
      pacmanGameMode.timing[b] = Math.round(c * D)
    }
    pacmanGameMode.lastTime = (new Date).getTime();
    pacmanGameMode.lastTimeDelta = 0;
    pacmanGameMode.lastTimeSlownessCount = 0;
    pacmanGameMode.tickTimer = window.setInterval(pacmanGameMode.tick, pacmanGameMode.tickInterval)
  };
  pacmanGameMode.decreaseFps = function () {
    if (pacmanGameMode.fpsChoice < C.length - 1) {
      pacmanGameMode.fpsChoice++;
      pacmanGameMode.initializeTickTimer();
      if (pacmanGameMode.fpsChoice == C.length - 1) pacmanGameMode.canDecreaseFps = e
    }
  };
  pacmanGameMode.addCss = function () { //html add css
    var b = "#pcm-c {  width: 554px;  border-top: 25px solid black;  padding-bottom: 25px;  height: 136px;  position: relative;  background: black;  outline: 0;  overflow: hidden;  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);}#pcm-c * {  position: absolute;  overflow: hidden;}#pcm-p,#pcm-cc {  left: 45px;  width: 464px;  height: 136px;  z-index: 99;  overflow: hidden;}#pcm-p .pcm-d {  width: 2px;  height: 2px;  margin-left: 3px;  margin-top: 3px;  background: #f8b090;  z-index: 100;}#pcm-p .pcm-e {  width: 8px;  height: 8px;  z-index: 101;}#pcm-sc-1 {  left: 18px;  top: 16px;  width: 8px;  height: 56px;  position: absolute;  overflow: hidden;}#pcm-sc-2 {  left: 18px;  top: 80px;  width: 8px;  height: 56px;  position: absolute;  overflow: hidden;}#pcm-le {  position: absolute;  left: 515px;  top: 74px;  height: 64px;  width: 32px;} #pcm-le div {  position: relative;}#pcm-sc-1-l {    left: -2px;  top: 0;  width: 48px;  height: 8px;}#pcm-sc-2-l {    left: -2px;  top: 64px;  width: 48px;  height: 8px;}#pcm-so {  left: 7px;  top: 116px;  width: 12px;  height: 12px;  border: 8px solid black;  cursor: pointer;}#pcm-li {  position: absolute;  left: 523px;  top: 0;  height: 80px;  width: 16px;}#pcm-li .pcm-lif {  position: relative;  width: 16px;  height: 12px;  margin-bottom: 3px;}#pcm-p.blk .pcm-e {  visibility: hidden;}#pcm-c .pcm-ac {  width: 16px;  height: 16px;  margin-left: -4px;  margin-top: -4px;  z-index: 110;}#pcm-c .pcm-n {  z-index: 111;}#pcm-c #pcm-stck {  z-index: 109;}#pcm-c #pcm-gbug {  width: 32px;}#pcm-c #pcm-bpcm {  width: 32px;  height: 32px;  margin-left: -20px;  margin-top: -20px;}#pcm-f,#pcm-le div {  width: 32px;  height: 16px;  z-index: 105;}#pcm-f {  margin-left: -8px;  margin-top: -4px;}#pcm-do {  width: 19px;  height: 2px;  left: 279px;  top: 46px;  overflow: hidden;  position: absolute;  background: #ffaaa5;}#pcm-re {  width: 48px;  height: 8px;  z-index: 120;  left: 264px;  top: 80px;}#pcm-go {  width: 80px;  height: 8px;  z-index: 120;  left: 248px;  top: 80px;}";
    pacmanGameMode.styleElement =
    document.createElement("style");
    pacmanGameMode.styleElement.type = "text/css";
    if (pacmanGameMode.styleElement.styleSheet) pacmanGameMode.styleElement.styleSheet.cssText = b;
    else pacmanGameMode.styleElement.appendChild(document.createTextNode(b));
    document.getElementsByTagName("head")[0].appendChild(pacmanGameMode.styleElement)
  };
  pacmanGameMode.createCanvasElement = function () {
    pacmanGameMode.canvasEl = document.createElement("div"); //start game mode
    pacmanGameMode.canvasEl.id = "pcm-c";
    pacmanGameMode.canvasEl.hideFocus = a; //focus on image
    document.getElementById("location").appendChild(pacmanGameMode.canvasEl);
    pacmanGameMode.canvasEl.tabIndex = 0;
    pacmanGameMode.canvasEl.focus()
  };
  pacmanGameMode.everythingIsReady = function () {////check ready all?
    if (!pacmanGameMode.ready) {
      pacmanGameMode.ready = a;
      var b = document.getElementById("location-l");
      education.dom.remove(b);
      document.getElementById("location").style.background = "black";
      pacmanGameMode.addCss();
      pacmanGameMode.createCanvasElement();
      pacmanGameMode.speedIntervals = [];
      pacmanGameMode.oppositeDirections = [];
      pacmanGameMode.oppositeDirections[1] = 2;
      pacmanGameMode.oppositeDirections[2] = 1;
      pacmanGameMode.oppositeDirections[4] = 8;
      pacmanGameMode.oppositeDirections[8] = 4;
      pacmanGameMode.addEventListeners();
      pacmanGameMode.fpsChoice = 0;
      pacmanGameMode.canDecreaseFps = a;
      pacmanGameMode.initializeTickTimer();
      pacmanGameMode.newGame()
    }
  };
  pacmanGameMode.checkIfEverythingIsReady = function () {//pre-check image

    if (pacmanGameMode.graphicsReady) {
      pacmanGameMode.updateLoadingProgress(1);
      pacmanGameMode.everythingIsReady()
    }
  };
  pacmanGameMode.preloadImage = function (b) { // when the image preload, insert new image round, load image.
    var c = new Image,
      d = education.browser.engine.IE;
    if (!d) c.onload = pacmanGameMode.imageLoaded;
    c.src = b;
    d && pacmanGameMode.imageLoaded()
  };
  pacmanGameMode.imageLoaded = function () {//when the image upload, check game start mode.
    pacmanGameMode.graphicsReady = a;
    pacmanGameMode.checkIfEverythingIsReady() //check reday?
  };
  pacmanGameMode.prepareGraphics = function () {
    pacmanGameMode.graphicsReady = e;
    if(pacmanGameMode.level == 1){
    pacmanGameMode.preloadImage("src/round1.png")    }    else{// initial image-first round 1
      pacmanGameMode.preloadImage("src/round2.png")
      }

  };
  pacmanGameMode.trimString = function (b) {
    return b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
  };
  pacmanGameMode.g = function (b, c) {
    if (b < c) return -1;
    else if (b > c) return 1;
    return 0
  };
  pacmanGameMode.compareVersions = function (b, c) {
    for (var d = 0, f = pacmanGameMode.trimString(String(b)).split("."), h = pacmanGameMode.trimString(String(c)).split("."), j = Math.max(f.length, h.length), k = 0; d == 0 && k < j; k++) {
      var x = f[k] || "",
        F = h[k] || "",
        G = new RegExp("(\\d*)(\\D*)", "g"),
        H = new RegExp("(\\d*)(\\D*)", "g");
      do {
        var t = pacmanGameMode.exec(x) || ["", "", ""],
          u = H.exec(F) || ["", "", ""];
        if (t[0].length == 0 && u[0].length == 0) break;
        d = t[1].length == 0 ? 0 : parseInt(t[1], 10);
        var I = u[1].length == 0 ? 0 : parseInt(u[1], 10);
        d = pacmanGameMode.g(d, I) || pacmanGameMode.g(t[2].length == 0, u[2].length == 0) || pacmanGameMode.g(t[2], u[2])
      } while (d == 0)
    }
    return d
  };

  pacmanGameMode.exportFunctionCalls = function () {
    education.pacman = {};
    education.pacman.insertCoin = pacmanGameMode.insertCoin;             //insert player
      education.pacman.flashLoaded = pacmanGameMode.flashLoaded;
    education.pacman.destroy = pacmanGameMode.destroy
  };
  pacmanGameMode.updateLoadingProgress = function (b) {                     //change the first display image.
    b = Math.round(b * 200);
    document.getElementById("location-b").style.width = b + "px"
  };
  pacmanGameMode.init = function () {                                //intialize
    pacmanGameMode.ready = e;
    document.getElementById("location").title = "";
    pacmanGameMode.updateLoadingProgress(0.33);
    pacmanGameMode.exportFunctionCalls();
    pacmanGameMode.useCss = navigator.userAgent.indexOf("MSIE 5.") != -1 || navigator.userAgent.indexOf("MSIE 6.") != -1 || navigator.userAgent.indexOf("MSIE 7.") != -1 ? e : a;
    pacmanGameMode.prepareGraphics();
  };
  pacmanGameMode.init();
}();