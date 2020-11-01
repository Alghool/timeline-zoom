

$.fn.timeline = function(options){
    options = $.extend({}, $.fn.timeline.defaults, options);
    timeline = $(this);
    timeline.addClass('zoom-timeline');
    var width = timeline.width();
    var canterPosition = parseInt(timeline.width()/2);

    function zoomIN(node){
        var startPosition = node.element.position().left;


        node.children.forEach(function(child, index){
            child.setPosition(startPosition);
            timeline.append(child.element);
            var space = parseInt(width / (node.children.length));
            child.active(width, space);
        });
        node.parent.collapseOut(node, width);
    }

    function zoomOUT(node){
        node.element.attr('data-role', ' ');
        node.element.find('span').text(node.displayValue);

        node.collapseIn(canterPosition);

        if(node.level == 1){
            var length = parseInt(node.parent.children.length -1);
            var interval = 0;
        }else{
            var length = node.parent.children.length;
            var interval = 1;
        }
        var space = parseInt(width / length);
        node.parent.activeIn(space, interval);
    }

    function clickAction(node){
        if(typeof options.clickEvent !== 'undefined')
            options.clickEvent(node.element);

        //do not open last node
        if (node.element.attr('data-role') == 'back'){
            zoomOUT(node);
        } else {
            if(node.children.length > 0)
                zoomIN(node);
        }

    };





    window.rootNode = new TimeNode(0,0,null);

    //html work
    buildNodeStructure(options.nodes, 1, rootNode, clickAction);
    rootNode.children.forEach(function(node, index){
        node.setPosition(canterPosition);
        timeline.append(node.element);
        var space = parseInt(width / (node.parent.children.length-1));

        node.element.addClass('active');
        var position = parseInt(space * node.order);
        node.element.animate({left: position + 'px'});
    });

};

$.fn.timeline.defaults =
{
   nodes:[
        {
            value:"first",
            displayValue: "القيمة الاساسية",
            nodes: [
                {
                    value:"ff",
                    displayValue: "القيمة الداخلية1",
                    nodes:[
                        {
                            value:"fff",
                            displayValue: "fff",
                            nodes:[
                                {
                                    value:"ffff",
                                    displayValue: "ffff",
                                },
                                {
                                    value:"fffs",
                                    displayValue: "fffs",
                                },   
                            ]
                        },
                        {
                            value:"ffs",
                            displayValue: "ffs",
                            nodes:[
                                {
                                    value:"ffsf",
                                    displayValue: "ffsf",
                                },
                                {
                                    value:"ffss",
                                    displayValue: "ffss",
                                },   
                            ]
                        },   
                    ]
                },
                {
                    value:"fs",
                    displayValue: "القيمة الداخلية1",
                    nodes:[
                        {
                            value:"fsf",
                            displayValue: "fsf",
                            nodes:[
                                {
                                    value:"fsff",
                                    displayValue: "fsff",
                                },
                                {
                                    value:"fsfs",
                                    displayValue: "fsfs",
                                },   
                            ]
                        },
                        {
                            value:"fss",
                            displayValue: "fss",
                            nodes:[
                                {
                                    value:"fssf",
                                    displayValue: "fssf",
                                },
                                {
                                    value:"fsss",
                                    displayValue: "fsss",
                                },   
                            ]
                        },   
                    ]
                }
            ]
        },
        {
            value:"second",
            displayValue: "القيمة الثانية",
            nodes: [
                {
                    value:"sf",
                    displayValue: "القيمة الداخلية1",
                    nodes:[
                        {
                            value:"sff",
                            displayValue: "sff",
                            nodes:[
                                {
                                    value:"sfff",
                                    displayValue: "sfff",
                                },
                                {
                                    value:"sffs",
                                    displayValue: "sffs",
                                },   
                            ]
                        },
                        {
                            value:"sfs",
                            displayValue: "sfs",
                            nodes:[
                                {
                                    value:"sfsf",
                                    displayValue: "sfsf",
                                },
                                {
                                    value:"sfss",
                                    displayValue: "sfss",
                                },   
                            ]
                        },   
                    ]
                },
                {
                    value:"ss",
                    displayValue: "القيمة الداخلية1",
                    nodes:[
                        {
                            value:"ssf",
                            displayValue: "ssf",
                            nodes:[
                                {
                                    value:"ssff",
                                    displayValue: "ssff",
                                },
                                {
                                    value:"ssfs",
                                    displayValue: "ssfs",
                                },   
                            ]
                        },
                        {
                            value:"sss",
                            displayValue: "sss",
                            nodes:[
                                {
                                    value:"sssf",
                                    displayValue: "sssf",
                                },
                                {
                                    value:"ssss",
                                    displayValue: "ssss",
                                },   
                            ]
                        },   
                    ]
                }
            ]
        }
   ],
    clickEvent: function(elem){}
};

function buildNodeStructure(nodes, level, parent, event){
    level = (typeof level !== 'undefined') ?  level : 0;
    parent = (typeof parent !== 'undefined') ?  parent : null;
    event = (typeof event !== 'undefined') ?  event : null;

    nodes.forEach(function( node, index){
        thisNode = new TimeNode(level, node.value, parent,index, event, node.displayValue);
        parent.children.push(thisNode);
        if(typeof node.nodes !== 'undefined'){
            buildNodeStructure(node.nodes, parseInt(level +1), thisNode, event);
        }

    });

}


function TimeNode(level, value, parent,myOrder, event, displayValue){
    this.level = level;
    this.value = (value)? value: displayValue;
    this.parent = parent;
    this.order = myOrder;
    this.event = event;
    this.displayValue = (typeof displayValue !== 'undefined')? displayValue: value;
    this.children = [];
    if(typeof TimeNode.count === 'undefined'){
        TimeNode.count = 1;
    }
    else{
        TimeNode.count ++;
    }
    this.id = TimeNode.count;

    this.element =  $('<div ' +
                    ' class="node"' +
                    ' data-id="' + this.id + '"' +
                    ' data-level= "' + this.level + '"' +
                    ' data-value="' + this.value + '">' +
                    '<span>' + this.displayValue + '</span>' +
                    '</div>');

    if(typeof this.event !== 'undefined'){
        var thisNode = this;
        this.element.on('click',function(){
            return thisNode.event(thisNode)
        })
    }


    this.setPosition = function (position) {
        this.element.css('left', position + 'px');
    };

    this.active = function(width, space){
        this.element.addClass('active');
        var position = parseInt(space * parseInt( this.order + 1));
        this.element.animate({left: position + 'px'});

    };

    this.collapseOut = function(activeNode, width){
        this.children.forEach(function (child, index) {
            if(child.order == activeNode.order) {
                child.element.animate({left: '0px'},function(){
                        child.element.find('span').text('back');
                        child.element.attr('data-role','back');
                })
            }
            else if(child.order < activeNode.order){
                child.element.animate({left: '0px'},function(){
                        child.element.removeClass('active');
                })
            }else{
                child.element.animate({left: width +'px'},function(){
                    child.element.removeClass('active');
                });
            }
        })
    }

    this.collapseIn = function(center){
        this.children.forEach(function(child, index){
            child.element.animate({left: center +'px'},function(){
                child.element.removeClass('active');
            })
        })
    }

    this.activeIn = function(space, interval){

        this.children.forEach(function (child, index) {
            child.element.addClass('active');
            var position = parseInt(space * parseInt(child.order + interval));
            child.element.animate({left: position + 'px'});
        })
    }

}