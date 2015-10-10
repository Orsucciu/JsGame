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
        speed:Unit.getSpeedMatrixBy(12),
        HP: 100,
        damage: 50,
        armor:50,
        sight:245,
        meleeAttack: true,
        attackInterval: 2200,
        portraitOffset: {x:0,y:0},
        dieEffect:Burst.DroneDeath,
        isFlying:false,
        attackLimit:"ground",
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

Orc.TrollAxethrower=AttackableUnit.extends({
    constructorPlus:function(props){
    },
    prototypePlus: {
        //Add basic unit info
        name: "TrollAxethrower",
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
                left: [8, 80, 160, 225, 300, 300, 300, 400],
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
        portraitOffset: {x:0,y:0},
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

Orc.Dragon=AttackableUnit.extends({
    constructorPlus:function(props){
        //this.direction=3;  //define whre is the unit looking when created. remove line to make it random
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
        portraitOffset: {x:0,y:0},
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
                    [10, 10, 10, 10],
                    [80, 80, 80],
                    [160, 160, 160],
                    [225, 225, 225],
                    [300, 300, 300],
                    [300, 300, 300],
                    [300, 300, 300],
                    [300, 300, 300]
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
                    [300, 300, 300, 300],
                    [300, 300, 300, 300],
                    [300, 300, 300, 300]
                ],
                top: [
                    [275, 300, 300, 300],
                    [275, 300, 300, 300],
                    [275, 300, 300, 300],
                    [275, 300, 300, 300],
                    [275, 300, 300, 300],
                    [275, 300, 300, 300],
                    [275, 300, 300, 300],
                    [275, 300, 300, 300]
                ]
            },
            dock: {
                left: [4, 68, 135, 205, 280, 355, 423, 495],
                top: [2, 2, 2, 2, 2, 2, 2, 2]
            },
        },
        width: 49,
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
        meleeAttack: true,
        attackInterval: 2200,
        portraitOffset: {x:0,y:0},
        dieEffect:Burst.DroneDeath,
        isFlying:false,
        attackLimit:"ground",
        unitType:Unit.SMALL,
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
