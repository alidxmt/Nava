//functions

function pr(a,b) {console.log(a,b)}; 

//constant variables i
const MAIN_DIV = d3.select('#main-div');
const MAIN_SVG = MAIN_DIV.append('svg')
                            .attr('id','main-svg');
                   
const NAVABOARD_BASE = MAIN_SVG.append('g')
                                    .attr('id','navaboard-base-g');
const NAVABOARD_SURFACE = MAIN_SVG.append('g')
                                    .attr('id','navaboard-surface-g');



const NAVABOARD = NAVABOARD_SURFACE.append('rect')
                            .attr('id','navaboard-rect')
                            .attr('opacity',.2)
                            .on("mousedown", function() {
                                Start_Nava = true;
                                let CoordClick = d3.mouse(this);
                                pr(CoordClick);
                                // play(CoordClick[0],(0.01*(parseInt(CoordClick[1]/100))))

                            })
                            .on("mouseup", function() {
                                Start_Nava = false;
                                play(440,0);
                            })
                            .on("mousemove", function() {
                                if (Start_Nava==true) {
                                    Coord = d3.mouse(this);
                                    play(Coord[0],(0.0001*(parseInt(Coord[1]))))

                                    // play(440,(parseInt(10*Math.random())/100));
                                    let circle_ID_toremove = 'circle-path--'+Coord[0]+'-'+Coord[1];   
                                    NAVABOARD_BASE.append('circle')
                                                        .attr('id',circle_ID_toremove)
                                                        .attr('cx',Coord[0])
                                                        .attr('cy',Coord[1])
                                                        .attr('fill','rgb('+73+','+80+','+100+')')
                                                        .attr('r',0)
                                                        .transition()
                                                        .attr('fill','rgb('+173+','+180+','+200+')')
                                                        .attr('r',10)
                                                        .duration(400)
                                                        .attr('opacity',1)
                                                        .transition()
                                                        .attr('fill','rgb('+73+','+80+','+100+')')
                                                        .attr('r',0)
                                                        .attr('opacity',.04)
                                                        .duration(3000)
                                    NAVABOARD_BASE.select("#"+circle_ID_toremove).transition().delay(4000).remove();                                    
                                Nava_Note.push(Coord);
                                }
                            });
var EWord = [];
var ECode = 0;
var DefineState = {'task':'','value':''};

//global variables

function NavaBoardDo(LocalDefineState) {
    if (LocalDefineState.task=='c') {
        d3.select('#navaboard-rect').style('fill',LocalDefineState.value)        
    }
    if (LocalDefineState.task=='nava') {
        play(400,0.1);
        //DefineState = {'task':'','value':''};
    }
}
document.body.onkeydown = function(e){
    pr("_______e",e);
    ECode=e.keyCode;
    if (!(ECode==13)&!(ECode==32)) {
        EWord.push(e.key);
    }
    else {
            let InteredTaskOrValue = 'task';
            if (ECode==13) {InteredTaskOrValue='value'};
            DefineState[InteredTaskOrValue]='';
            for (let index = 0; index < EWord.length; index++) {
                DefineState[InteredTaskOrValue] = DefineState[InteredTaskOrValue]+EWord[index];            
            }
            EWord = [];
            if (ECode==13) {NavaBoardDo(DefineState);pr('IAmGoingToDo:',DefineState)};
        }
    
};

Start_Nava = false;
Coord =[];
Nava_Note = [];




//things to do

