/******* Define Orcs Units (maybe)*******/
var Orc={};
Orc.Grunt=AttackableUnit.extends({
    constructorPlus:function(props){
    },
    prototypePlus: {
        //Add basic unit info
        name: "Grunt",
        imgPos: {
            moving: {
                left: [
                    [10, 10, 10, 10],
                    [80, 80, 80],
                    [160, 160, 160],
                    [225, 225, 225],
                    [300, 300, 300],
                    [370, 370, 370],
                    [440, 440, 440],
                    [515, 515, 515]
                ],
                top: [
                    [55, 108, 165, 220],
                    [55, 108, 165,220],
                    [55, 108, 165,220],
                    [55, 108, 165,220],
                    [55, 108, 165,220],
                    [55, 108, 165,220],
                    [55, 108, 165,220],
                    [55, 108, 165,220]
                ]
            },
            attack: {
                left: [
                    [1, 1, 1, 1],
                    [80, 80, 80, 80],
                    [145, 145, 145, 145],
                    [225, 225, 225, 225],
                    [300, 300, 300, 300],
                    [375, 375, 375, 375],
                    [435, 435, 435, 435],
                    [515, 515, 515, 515]
                ],
                top: [
                    [275, 330, 385, 440],
                    [275, 330, 385, 440],
                    [275, 330, 385, 440],
                    [275, 330, 385, 440],
                    [275, 330, 385, 440],
                    [275, 330, 385, 440],
                    [275, 330, 385, 440],
                    [275, 330, 385, 440]
                ]
            },
            dock: {
                left: [8, 80, 160, 225, 300, 375, 435, 510],
                top: [3, 3, 3, 3, 3, 3, 3, 3]
            },
        },
        width: 54,
        height: 59,//128N-92
        frame: {
            moving: 3,
            dock: 1,
            attack:7
        },
        //Only for moving status, override
        speed:Unit.getSpeedMatrixBy(10),
        HP: 60,
        damage: 9,
        armor:2,
        sight:245,
        meleeAttack: true,
        attackInterval: 2200,
        portraitOffset: {x:152,y:4},
        dieEffect:Burst.DroneDeath,
        isFlying:false,
        attackLimit:"ground",
        unitType:Unit.SMALL,  //no idea what it does
        attackType:AttackableUnit.NORMAL_ATTACK,
        recover:Building.ZergBuilding.prototype.recover,
        cost:{
            mine:50,
            man:1,
            time:200
        }
    }
});

Orc.TrollAxethrower=AttackableUnit.extends({
    constructorPlus:function(props){
    },
    prototypePlus: {
        //Add basic unit info
        name: "TrollAxethrower",
        imgPos: {
            moving: {
                left: [
					[48, 48, 48, 48],
					[107, 107, 107, 107],
                    [170, 170, 170, 170],
                    [230, 230, 230, 230],
                    [285, 285, 285, 285],
                    [340, 340, 340, 340],
                    [400, 400, 400, 400],
                    [463, 463, 463, 463]
                ],
                top: [
					[93, 168, 258, 356],
                    [95, 169, 259, 350],
					[93, 168, 258, 356],
                    [95, 169, 259, 350],
					[93, 168, 258, 356],
                    [95, 169, 259, 350],
					[93, 168, 258, 356],
                    [95, 169, 259, 350]
                ]
            },
            attack: {
                left: [
					[48, 48, 48, 48],
					[107, 107, 107, 107],
                    [170, 170, 170, 170],
                    [230, 230, 230, 230],
                    [285, 285, 285, 285],
                    [340, 340, 340, 340],
                    [400, 400, 400, 400],
                    [463, 463, 463, 463]
                ],
                top: [
                    [440, 525, 625, 710],
					[440, 525, 625, 710],
                    [440, 525, 625, 710],
                    [440, 525, 625, 710],
                    [440, 525, 625, 710],
                    [440, 525, 625, 710],
                    [440, 525, 625, 710],
                    [440, 525, 625, 710]
                ]
            },
            dock: {
                left: [49, 108, 173, 230, 287, 345, 400, 465],
                top: [172, 172, 172, 172, 172, 172, 172, 172]
            },
        },
        width: 65,
        height: 62,//128N-92
        frame: {
            moving: 4,
            dock: 1,
            attack:4
        },
        //Only for moving status, override
        speed:Unit.getSpeedMatrixBy(10),
        HP: 40,
        damage: 9,
        armor: 0,
        sight: 245,
        attackInterval: 2200,
        portraitOffset: {x:309,y:5},  //location of the unit's portrait
        dieEffect:Burst.TrollAxethrowerDeath,
        isFlying:false,
        unitType:Unit.SMALL,
        attackType:AttackableUnit.NORMAL_ATTACK,
        recover:Building.ZergBuilding.prototype.recover,
        cost:{
            mine:50,
            man:1,
            time:200
        }
    }
});

Orc.Dragon=AttackableUnit.extends({
    constructorPlus:function(props){
        //this.direction=3;  //define where is the unit looking when created. remove line to make it random
    },
    prototypePlus: {
        //Add basic unit info
        name: "Dragon",
        imgPos: {
            moving: {
                left: [
                    [10, 10, 10, 10],
                    [80, 80, 80],
                    [160, 160, 160],
                    [225, 225, 225],
                    [300, 300, 300],
                    [370, 370, 370],
                    [440, 440, 440],
                    [515, 515, 515]
                ],
                top: [
                    [55, 108, 165, 220],
                    [55, 108, 165,220],
                    [55, 108, 165,220],
                    [55, 108, 165,220],
                    [55, 108, 165,220],
                    [55, 108, 165,220],
                    [55, 108, 165,220],
                    [55, 108, 165,220]
                ]
            },
            attack: {
                left: [
                    [1, 1, 1, 1],
                    [80, 80, 80, 80],
                    [145, 145, 145, 145],
                    [225, 225, 225, 225],
                    [300, 300, 300, 300],
                    [375, 375, 375, 375],
                    [435, 435, 435, 435],
                    [515, 515, 515, 515]
                ],
                top: [
                    [275, 330, 385, 440],
                    [275, 330, 385, 440],
                    [275, 330, 385, 440],
                    [275, 330, 385, 440],
                    [275, 330, 385, 440],
                    [275, 330, 385, 440],
                    [275, 330, 385, 440],
                    [275, 330, 385, 440]
                ]
            },
            dock: {
                left: [8, 80, 160, 225, 300, 375, 435, 510],
                top: [3, 3, 3, 3, 3, 3, 3, 3]
            },
        },
        width: 54,
        height: 59,//128N-92
        frame: {
            moving: 3,
            dock: 1,
            attack:7
        },
        //Only for moving status, override
        speed:Unit.getSpeedMatrixBy(12),
        HP: 100,
        damage: 50,
        armor:50,
        sight:245,
        attackInterval: 2200,
        portraitOffset: {x:54,y:128},
        dieEffect:Burst.DroneDeath,
        isFlying:false,
        unitType:Unit.SMALL,
        attackType:AttackableUnit.NORMAL_ATTACK,
        recover:Building.ZergBuilding.prototype.recover,
        cost:{
            mine:50,
            man:1,
            time:200
        }
    }
});


Orc.Catapult=AttackableUnit.extends({
    constructorPlus:function(props){
    },
    prototypePlus: {
        //Add basic unit info
        name: "Catapult",
        imgPos: {
            moving: {
                left: [
                    [0, 0],
                    [60, 60],
                    [135, 135],
                    [205, 205],
                    [280, 280],
                    [342, 342],
                    [423, 423],
                    [495, 495]
                ],
                top: [
                    [0, 70],
                    [0, 70],
                    [0, 70],
                    [0, 70],
                    [0, 70],
                    [0, 70],
                    [0, 70],
                    [0, 70]
                ]
            },
            attack: {
                left: [
                    [0, 0],
                    [60, 60],
                    [135, 135],
                    [205, 205],
                    [280, 280],
                    [342, 342],
                    [423, 423],
                    [495, 495]
                ],
                top: [
                    [137, 208],
                    [137, 208],
                    [137, 208],
                    [137, 208],
                    [137, 208],
                    [137, 208],
                    [137, 208],
                    [137, 208]
                ]
            },
            dock: {
                left: [0, 60, 135, 205, 280, 342, 423, 495],
                top: [0, 2, 2, 2, 2, 2, 2, 2]
            },
        },
        width: 73,
        height: 65,//128N-92
        frame: {
            moving: 3,
            dock: 1,
            attack:7
        },
        //Only for moving status, override
        speed:Unit.getSpeedMatrixBy(5),
        HP: 100,
        damage: 50,
        armor:50,
        sight:245,
        attackInterval: 5000,
        portraitOffset: {x:349,y:46},
        dieEffect:Burst.Catapult,
        isFlying:false,
        attackLimit:"ground",
        unitType:Unit.BIG,
        attackType:AttackableUnit.NORMAL_ATTACK,
        recover:Building.ZergBuilding.prototype.recover,
        cost:{
            mine:50,
            man:1,
            time:200
        },
        upgrade:['EvolveCarapace'],
        items:{'4':undefined,
            '5':{name:'gather'},
            '7':{name:'BasicMutation'},
            '8':{name:'AdvancedMutation'},
            '9':{name:'Burrow',condition:function(){
                return Magic.Burrow.enabled
            }}
        }
    }
});

Orc.TrollDestroyer=AttackableUnit.extends({
    constructorPlus:function(props){
    },
    prototypePlus: {
        //Add basic unit info
        name: "TrollDestroyer",
        imgPos: {
            moving: {
                left: [
                    [7],
					[85],
					[178],
					[275],
					[360],
					[440],
					[534],
					[630]
                ],
                top: [
                    [8],
					[8],
					[8],
					[8],
					[8],
					[8],
					[8],
					[12]
                ]
            },
            attack: {
                left: [
                    [300, 300, 300, 300]
                ],
                top: [
                    [275, 300, 300, 300]
                ]
            },
            dock: {
                left: [7, 85, 178, 275, 360, 440, 534, 630],
                top: [8, 8, 8, 8, 5, 8, 8, 12]
            },
        },
        width: 93,
        height: 82,//128N-92
        frame: {
            moving: 1,
            dock: 1,
            attack:1
        },
        //Only for moving status, override
        speed:Unit.getSpeedMatrixBy(12),
        HP: 100,
        damage: 50,
        armor:50,
        sight:245,
        meleeAttack: true,
        attackInterval: 2200,
        portraitOffset: {x:154,y:86},
        dieEffect:Burst.TrollDestroyerDeath,
        isFlying:false,
        //attackLimit:"ground",  //comment for air + ground
        unitType:Unit.SMALL,
        attackType:AttackableUnit.NORMAL_ATTACK,
        recover:Building.ZergBuilding.prototype.recover,
        cost:{
            mine:50,
            man:1,
            time:200
        }
    }
});
