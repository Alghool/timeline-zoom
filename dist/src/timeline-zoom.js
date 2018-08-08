

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
        // node.parent.active1(node, width);
    }

    function zoomOUT(node){
        node.element.attr('data-role', ' ');
        node.element.find('span').text(node.displayValue);
        node.parent.children.forEach(function(sibling, index){
            if(sibling.order == parseInt(node.order - 1))
                sibling.collapseIn(canterPosition);
        });
        var length = (node.level == 1)? (node.parent.children.length -1) : (node.parent.children.length );
        var space = parseInt(width / length);
        node.parent.activeIn(space);
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
        node.active(width, space);
    });

    console.log(rootNode);
};

$.fn.timeline.defaults =
{
    nodes:[
        {
            value:"1950",
            nodes:[
                {
                    value:"1950",
                    nodes:[
                        {
                            value:"1950-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1950-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1950-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1950-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1950-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1950-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1950-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1950-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1950-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1950-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1950-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1950-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1951",
                    nodes:[
                        {
                            value:"1951-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1951-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1951-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1951-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1951-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1951-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1951-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1951-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1951-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1951-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1951-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1951-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1952",
                    nodes:[
                        {
                            value:"1952-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1952-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1952-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1952-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1952-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1952-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1952-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1952-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1952-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1952-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1952-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1952-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1953",
                    nodes:[
                        {
                            value:"1953-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1953-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1953-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1953-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1953-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1953-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1953-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1953-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1953-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1953-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1953-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1953-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1954",
                    nodes:[
                        {
                            value:"1954-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1954-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1954-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1954-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1954-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1954-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1954-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1954-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1954-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1954-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1954-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1954-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1955",
                    nodes:[
                        {
                            value:"1955-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1955-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1955-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1955-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1955-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1955-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1955-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1955-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1955-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1955-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1955-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1955-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1956",
                    nodes:[
                        {
                            value:"1956-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1956-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1956-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1956-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1956-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1956-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1956-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1956-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1956-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1956-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1956-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1956-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1957",
                    nodes:[
                        {
                            value:"1957-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1957-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1957-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1957-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1957-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1957-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1957-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1957-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1957-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1957-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1957-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1957-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1958",
                    nodes:[
                        {
                            value:"1958-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1958-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1958-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1958-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1958-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1958-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1958-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1958-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1958-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1958-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1958-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1958-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1959",
                    nodes:[
                        {
                            value:"1959-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1959-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1959-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1959-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1959-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1959-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1959-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1959-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1959-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1959-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1959-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1959-12-31",
                            displayValue: '12'
                        }
                    ]
                }
            ]
        },
        {
            value:"1960",
            nodes:[
                {
                    value:"1960",
                    nodes:[
                        {
                            value:"1960-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1960-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1960-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1960-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1960-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1960-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1960-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1960-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1960-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1960-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1960-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1960-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1961",
                    nodes:[
                        {
                            value:"1961-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1961-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1961-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1961-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1961-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1961-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1961-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1961-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1961-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1961-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1961-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1961-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1962",
                    nodes:[
                        {
                            value:"1962-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1962-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1962-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1962-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1962-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1962-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1962-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1962-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1962-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1962-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1962-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1962-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1963",
                    nodes:[
                        {
                            value:"1963-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1963-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1963-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1963-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1963-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1963-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1963-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1963-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1963-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1963-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1963-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1963-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1964",
                    nodes:[
                        {
                            value:"1964-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1964-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1964-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1964-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1964-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1964-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1964-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1964-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1964-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1964-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1964-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1964-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1965",
                    nodes:[
                        {
                            value:"1965-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1965-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1965-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1965-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1965-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1965-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1965-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1965-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1965-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1965-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1965-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1965-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1966",
                    nodes:[
                        {
                            value:"1966-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1966-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1966-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1966-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1966-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1966-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1966-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1966-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1966-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1966-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1966-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1966-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1967",
                    nodes:[
                        {
                            value:"1967-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1967-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1967-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1967-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1967-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1967-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1967-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1967-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1967-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1967-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1967-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1967-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1968",
                    nodes:[
                        {
                            value:"1968-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1968-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1968-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1968-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1968-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1968-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1968-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1968-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1968-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1968-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1968-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1968-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1969",
                    nodes:[
                        {
                            value:"1969-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1969-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1969-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1969-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1969-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1969-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1969-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1969-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1969-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1969-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1969-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1969-12-31",
                            displayValue: '12'
                        }
                    ]
                },
            ]
        },
        {
            value:"1970",
            nodes:[
                {
                    value:"1970",
                    nodes:[
                        {
                            value:"1970-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1970-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1970-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1970-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1970-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1970-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1970-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1970-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1970-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1970-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1970-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1970-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1971",
                    nodes:[
                        {
                            value:"1971-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1971-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1971-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1971-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1971-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1971-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1971-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1971-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1971-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1971-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1971-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1971-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1972",
                    nodes:[
                        {
                            value:"1972-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1972-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1972-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1972-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1972-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1972-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1972-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1972-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1972-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1972-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1972-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1972-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1973",
                    nodes:[
                        {
                            value:"1973-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1973-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1973-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1973-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1973-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1973-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1973-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1973-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1973-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1973-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1973-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1973-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1974",
                    nodes:[
                        {
                            value:"1974-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1974-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1974-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1974-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1974-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1974-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1974-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1974-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1974-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1974-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1974-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1974-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1975",
                    nodes:[
                        {
                            value:"1975-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1975-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1975-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1975-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1975-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1975-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1975-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1975-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1975-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1975-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1975-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1975-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1976",
                    nodes:[
                        {
                            value:"1976-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1976-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1976-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1976-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1976-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1976-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1976-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1976-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1976-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1976-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1976-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1976-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1977",
                    nodes:[
                        {
                            value:"1977-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1977-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1977-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1977-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1977-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1977-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1977-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1977-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1977-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1977-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1977-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1977-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1978",
                    nodes:[
                        {
                            value:"1978-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1978-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1978-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1978-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1978-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1978-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1978-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1978-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1978-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1978-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1978-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1978-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1979",
                    nodes:[
                        {
                            value:"1979-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1979-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1979-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1979-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1979-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1979-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1979-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1979-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1979-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1979-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1979-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1979-12-31",
                            displayValue: '12'
                        }
                    ]
                }
            ]
        },
        {
            value:"1980",
            nodes:[
                {
                    value:"1980",
                    nodes:[
                        {
                            value:"1980-1-31",
                            displayValue: '1'
                        },
                        {
                            value:"1980-2-28",
                            displayValue: '2'
                        },
                        {
                            value:"1980-3-31",
                            displayValue: '3'
                        },
                        {
                            value:"1980-4-30",
                            displayValue: '4'
                        },
                        {
                            value:"1980-5-31",
                            displayValue: '5'
                        },
                        {
                            value:"1980-6-30",
                            displayValue: '6'
                        },
                        {
                            value:"1980-7-31",
                            displayValue: '7'
                        },
                        {
                            value:"1980-8-31",
                            displayValue: '8'
                        },
                        {
                            value:"1980-9-30",
                            displayValue: '9'
                        },
                        {
                            value:"1980-10-31",
                            displayValue: '10'
                        },
                        {
                            value:"1980-11-30",
                            displayValue: '11'
                        },
                        {
                            value:"1980-12-31",
                            displayValue: '12'
                        }
                    ]
                },
                {
                    value:"1981",
                    nodes:[
                        {value:"1981-1-31"},
                        {value:"1981-2-28"},
                        {value:"1981-3-31"},
                        {value:"1981-4-30"},
                        {value:"1981-5-31"},
                        {value:"1981-6-30"},
                        {value:"1981-7-31"},
                        {value:"1981-8-31"},
                        {value:"1981-9-30"},
                        {value:"1981-10-31"},
                        {value:"1981-11-30"},
                        {value:"1981-12-31"}
                    ]
                },
                {
                    value:"1982",
                    nodes:[
                        {value:"1982-1-31"},
                        {value:"1982-2-28"},
                        {value:"1982-3-31"},
                        {value:"1982-4-30"},
                        {value:"1982-5-31"},
                        {value:"1982-6-30"},
                        {value:"1982-7-31"},
                        {value:"1982-8-31"},
                        {value:"1982-9-30"},
                        {value:"1982-10-31"},
                        {value:"1982-11-30"},
                        {value:"1982-12-31"}
                    ]
                },
                {
                    value:"1983",
                    nodes:[
                        {value:"1983-1-31"},
                        {value:"1983-2-28"},
                        {value:"1983-3-31"},
                        {value:"1983-4-30"},
                        {value:"1983-5-31"},
                        {value:"1983-6-30"},
                        {value:"1983-7-31"},
                        {value:"1983-8-31"},
                        {value:"1983-9-30"},
                        {value:"1983-10-31"},
                        {value:"1983-11-30"},
                        {value:"1983-12-31"}
                    ]
                },
                {
                    value:"1984",
                    nodes:[
                        {value:"1984-1-31"},
                        {value:"1984-2-28"},
                        {value:"1984-3-31"},
                        {value:"1984-4-30"},
                        {value:"1984-5-31"},
                        {value:"1984-6-30"},
                        {value:"1984-7-31"},
                        {value:"1984-8-31"},
                        {value:"1984-9-30"},
                        {value:"1984-10-31"},
                        {value:"1984-11-30"},
                        {value:"1984-12-31"}
                    ]
                },
                {
                    value:"1985",
                    nodes:[
                        {value:"1985-1-31"},
                        {value:"1985-2-28"},
                        {value:"1985-3-31"},
                        {value:"1985-4-30"},
                        {value:"1985-5-31"},
                        {value:"1985-6-30"},
                        {value:"1985-7-31"},
                        {value:"1985-8-31"},
                        {value:"1985-9-30"},
                        {value:"1985-10-31"},
                        {value:"1985-11-30"},
                        {value:"1985-12-31"}
                    ]
                },
                {
                    value:"1986",
                    nodes:[
                        {value:"1986-1-31"},
                        {value:"1986-2-28"},
                        {value:"1986-3-31"},
                        {value:"1986-4-30"},
                        {value:"1986-5-31"},
                        {value:"1986-6-30"},
                        {value:"1986-7-31"},
                        {value:"1986-8-31"},
                        {value:"1986-9-30"},
                        {value:"1986-10-31"},
                        {value:"1986-11-30"},
                        {value:"1986-12-31"}
                    ]
                },
                {
                    value:"1987",
                    nodes:[
                        {value:"1987-1-31"},
                        {value:"1987-2-28"},
                        {value:"1987-3-31"},
                        {value:"1987-4-30"},
                        {value:"1987-5-31"},
                        {value:"1987-6-30"},
                        {value:"1987-7-31"},
                        {value:"1987-8-31"},
                        {value:"1987-9-30"},
                        {value:"1987-10-31"},
                        {value:"1987-11-30"},
                        {value:"1987-12-31"}
                    ]
                },
                {
                    value:"1988",
                    nodes:[
                        {value:"1988-1-31"},
                        {value:"1988-2-28"},
                        {value:"1988-3-31"},
                        {value:"1988-4-30"},
                        {value:"1988-5-31"},
                        {value:"1988-6-30"},
                        {value:"1988-7-31"},
                        {value:"1988-8-31"},
                        {value:"1988-9-30"},
                        {value:"1988-10-31"},
                        {value:"1988-11-30"},
                        {value:"1988-12-31"}
                    ]
                },
                {
                    value:"1989",
                    nodes:[
                        {value:"1989-1-31"},
                        {value:"1989-2-28"},
                        {value:"1989-3-31"},
                        {value:"1989-4-30"},
                        {value:"1989-5-31"},
                        {value:"1989-6-30"},
                        {value:"1989-7-31"},
                        {value:"1989-8-31"},
                        {value:"1989-9-30"},
                        {value:"1989-10-31"},
                        {value:"1989-11-30"},
                        {value:"1989-12-31"}
                    ]
                }
            ]
        },
        {
            value:"1990",
            nodes:[
                {
                    value:"1990",
                    nodes:[
                        {value:"1950-1-31"},
                        {value:"1950-2-28"},
                        {value:"1950-3-31"},
                        {value:"1950-4-30"},
                        {value:"1950-5-31"},
                        {value:"1950-6-30"},
                        {value:"1950-7-31"},
                        {value:"1950-8-31"},
                        {value:"1950-9-30"},
                        {value:"1950-10-31"},
                        {value:"1950-11-30"},
                        {value:"1950-12-31"}
                    ]
                },
                {
                    value:"1991",
                    nodes:[
                        {value:"1991-1-31"},
                        {value:"1991-2-28"},
                        {value:"1991-3-31"},
                        {value:"1991-4-30"},
                        {value:"1991-5-31"},
                        {value:"1991-6-30"},
                        {value:"1991-7-31"},
                        {value:"1991-8-31"},
                        {value:"1991-9-30"},
                        {value:"1991-10-31"},
                        {value:"1991-11-30"},
                        {value:"1991-12-31"}
                    ]
                },
                {
                    value:"1992",
                    nodes:[
                        {value:"1992-1-31"},
                        {value:"1992-2-28"},
                        {value:"1992-3-31"},
                        {value:"1992-4-30"},
                        {value:"1992-5-31"},
                        {value:"1992-6-30"},
                        {value:"1992-7-31"},
                        {value:"1992-8-31"},
                        {value:"1992-9-30"},
                        {value:"1992-10-31"},
                        {value:"1992-11-30"},
                        {value:"1992-12-31"}
                    ]
                },
                {
                    value:"1993",
                    nodes:[
                        {value:"1993-1-31"},
                        {value:"1993-2-28"},
                        {value:"1993-3-31"},
                        {value:"1993-4-30"},
                        {value:"1993-5-31"},
                        {value:"1993-6-30"},
                        {value:"1993-7-31"},
                        {value:"1993-8-31"},
                        {value:"1993-9-30"},
                        {value:"1993-10-31"},
                        {value:"1993-11-30"},
                        {value:"1993-12-31"}
                    ]
                },
                {
                    value:"1994",
                    nodes:[
                        {value:"1994-1-31"},
                        {value:"1994-2-28"},
                        {value:"1994-3-31"},
                        {value:"1994-4-30"},
                        {value:"1994-5-31"},
                        {value:"1994-6-30"},
                        {value:"1994-7-31"},
                        {value:"1994-8-31"},
                        {value:"1994-9-30"},
                        {value:"1994-10-31"},
                        {value:"1994-11-30"},
                        {value:"1994-12-31"}
                    ]
                },
                {
                    value:"1995",
                    nodes:[
                        {value:"1995-1-31"},
                        {value:"1995-2-28"},
                        {value:"1995-3-31"},
                        {value:"1995-4-30"},
                        {value:"1995-5-31"},
                        {value:"1995-6-30"},
                        {value:"1995-7-31"},
                        {value:"1995-8-31"},
                        {value:"1995-9-30"},
                        {value:"1995-10-31"},
                        {value:"1995-11-30"},
                        {value:"1995-12-31"}
                    ]
                },
                {
                    value:"1996",
                    nodes:[
                        {value:"1996-1-31"},
                        {value:"1996-2-28"},
                        {value:"1996-3-31"},
                        {value:"1996-4-30"},
                        {value:"1996-5-31"},
                        {value:"1996-6-30"},
                        {value:"1996-7-31"},
                        {value:"1996-8-31"},
                        {value:"1996-9-30"},
                        {value:"1996-10-31"},
                        {value:"1996-11-30"},
                        {value:"1996-12-31"}
                    ]
                },
                {
                    value:"1997",
                    nodes:[
                        {value:"1997-1-31"},
                        {value:"1997-2-28"},
                        {value:"1997-3-31"},
                        {value:"1997-4-30"},
                        {value:"1997-5-31"},
                        {value:"1997-6-30"},
                        {value:"1997-7-31"},
                        {value:"1997-8-31"},
                        {value:"1997-9-30"},
                        {value:"1997-10-31"},
                        {value:"1997-11-30"},
                        {value:"1997-12-31"}
                    ]
                },
                {
                    value:"1998",
                    nodes:[
                        {value:"1998-1-31"},
                        {value:"1998-2-28"},
                        {value:"1998-3-31"},
                        {value:"1998-4-30"},
                        {value:"1998-5-31"},
                        {value:"1998-6-30"},
                        {value:"1998-7-31"},
                        {value:"1998-8-31"},
                        {value:"1998-9-30"},
                        {value:"1998-10-31"},
                        {value:"1998-11-30"},
                        {value:"1998-12-31"}
                    ]
                },
                {
                    value:"1999",
                    nodes:[
                        {value:"1999-1-31"},
                        {value:"1999-2-28"},
                        {value:"1999-3-31"},
                        {value:"1999-4-30"},
                        {value:"1999-5-31"},
                        {value:"1999-6-30"},
                        {value:"1999-7-31"},
                        {value:"1999-8-31"},
                        {value:"1999-9-30"},
                        {value:"1999-10-31"},
                        {value:"1999-11-30"},
                        {value:"1999-12-31"}
                    ]
                }
            ]
        },
        {
            value:"2000",
            nodes:[
                {
                    value:"2000",
                    nodes:[
                        {value:"2000-1-31"},
                        {value:"2000-2-28"},
                        {value:"2000-3-31"},
                        {value:"2000-4-30"},
                        {value:"2000-5-31"},
                        {value:"2000-6-30"},
                        {value:"2000-7-31"},
                        {value:"2000-8-31"},
                        {value:"2000-9-30"},
                        {value:"2000-10-31"},
                        {value:"2000-11-30"},
                        {value:"2000-12-31"}
                    ]
                },
                {
                    value:"2001",
                    nodes:[
                        {value:"2001-1-31"},
                        {value:"2001-2-28"},
                        {value:"2001-3-31"},
                        {value:"2001-4-30"},
                        {value:"2001-5-31"},
                        {value:"2001-6-30"},
                        {value:"2001-7-31"},
                        {value:"2001-8-31"},
                        {value:"2001-9-30"},
                        {value:"2001-10-31"},
                        {value:"2001-11-30"},
                        {value:"2001-12-31"}
                    ]
                },
                {
                    value:"2002",
                    nodes:[
                        {value:"2002-1-31"},
                        {value:"2002-2-28"},
                        {value:"2002-3-31"},
                        {value:"2002-4-30"},
                        {value:"2002-5-31"},
                        {value:"2002-6-30"},
                        {value:"2002-7-31"},
                        {value:"2002-8-31"},
                        {value:"2002-9-30"},
                        {value:"2002-10-31"},
                        {value:"2002-11-30"},
                        {value:"2002-12-31"}
                    ]
                },
                {
                    value:"2003",
                    nodes:[
                        {value:"2003-1-31"},
                        {value:"2003-2-28"},
                        {value:"2003-3-31"},
                        {value:"2003-4-30"},
                        {value:"2003-5-31"},
                        {value:"2003-6-30"},
                        {value:"2003-7-31"},
                        {value:"2003-8-31"},
                        {value:"2003-9-30"},
                        {value:"2003-10-31"},
                        {value:"2003-11-30"},
                        {value:"2003-12-31"}
                    ]
                },
                {
                    value:"2004",
                    nodes:[
                        {value:"2004-1-31"},
                        {value:"2004-2-28"},
                        {value:"2004-3-31"},
                        {value:"2004-4-30"},
                        {value:"2004-5-31"},
                        {value:"2004-6-30"},
                        {value:"2004-7-31"},
                        {value:"2004-8-31"},
                        {value:"2004-9-30"},
                        {value:"2004-10-31"},
                        {value:"2004-11-30"},
                        {value:"2004-12-31"}
                    ]
                },
                {
                    value:"2005",
                    nodes:[
                        {value:"2005-1-31"},
                        {value:"2005-2-28"},
                        {value:"2005-3-31"},
                        {value:"2005-4-30"},
                        {value:"2005-5-31"},
                        {value:"2005-6-30"},
                        {value:"2005-7-31"},
                        {value:"2005-8-31"},
                        {value:"2005-9-30"},
                        {value:"2005-10-31"},
                        {value:"2005-11-30"},
                        {value:"2005-12-31"}
                    ]
                },
                {
                    value:"2006",
                    nodes:[
                        {value:"2006-1-31"},
                        {value:"2006-2-28"},
                        {value:"2006-3-31"},
                        {value:"2006-4-30"},
                        {value:"2006-5-31"},
                        {value:"2006-6-30"},
                        {value:"2006-7-31"},
                        {value:"2006-8-31"},
                        {value:"2006-9-30"},
                        {value:"2006-10-31"},
                        {value:"2006-11-30"},
                        {value:"2006-12-31"}
                    ]
                },
                {
                    value:"2007",
                    nodes:[
                        {value:"2007-1-31"},
                        {value:"2007-2-28"},
                        {value:"2007-3-31"},
                        {value:"2007-4-30"},
                        {value:"2007-5-31"},
                        {value:"2007-6-30"},
                        {value:"2007-7-31"},
                        {value:"2007-8-31"},
                        {value:"2007-9-30"},
                        {value:"2007-10-31"},
                        {value:"2007-11-30"},
                        {value:"2007-12-31"}
                    ]
                },
                {
                    value:"2008",
                    nodes:[
                        {value:"2008-1-31"},
                        {value:"2008-2-28"},
                        {value:"2008-3-31"},
                        {value:"2008-4-30"},
                        {value:"2008-5-31"},
                        {value:"2008-6-30"},
                        {value:"2008-7-31"},
                        {value:"2008-8-31"},
                        {value:"2008-9-30"},
                        {value:"2008-10-31"},
                        {value:"2008-11-30"},
                        {value:"2008-12-31"}
                    ]
                },
                {
                    value:"2009",
                    nodes:[
                        {value:"2009-1-31"},
                        {value:"2009-2-28"},
                        {value:"2009-3-31"},
                        {value:"2009-4-30"},
                        {value:"2009-5-31"},
                        {value:"2009-6-30"},
                        {value:"2009-7-31"},
                        {value:"2009-8-31"},
                        {value:"2009-9-30"},
                        {value:"2009-10-31"},
                        {value:"2009-11-30"},
                        {value:"2009-12-31"}
                    ]
                }
            ]
        },
        {
            value:"2010",
            nodes:[
                {
                    value:"2010",
                    nodes:[
                        {value:"2010-1-31"},
                        {value:"2010-2-28"},
                        {value:"2010-3-31"},
                        {value:"2010-4-30"},
                        {value:"2010-5-31"},
                        {value:"2010-6-30"},
                        {value:"2010-7-31"},
                        {value:"2010-8-31"},
                        {value:"2010-9-30"},
                        {value:"2010-10-31"},
                        {value:"2010-11-30"},
                        {value:"2010-12-31"}
                    ]
                },
                {
                    value:"2011",
                    nodes:[
                        {value:"2011-1-31"},
                        {value:"2011-2-28"},
                        {value:"2011-3-31"},
                        {value:"2011-4-30"},
                        {value:"2011-5-31"},
                        {value:"2011-6-30"},
                        {value:"2011-7-31"},
                        {value:"2011-8-31"},
                        {value:"2011-9-30"},
                        {value:"2011-10-31"},
                        {value:"2011-11-30"},
                        {value:"2011-12-31"}
                    ]
                },
                {
                    value:"2012",
                    nodes:[
                        {value:"2012-1-31"},
                        {value:"2012-2-28"},
                        {value:"2012-3-31"},
                        {value:"2012-4-30"},
                        {value:"2012-5-31"},
                        {value:"2012-6-30"},
                        {value:"2012-7-31"},
                        {value:"2012-8-31"},
                        {value:"2012-9-30"},
                        {value:"2012-10-31"},
                        {value:"2012-11-30"},
                        {value:"2012-12-31"}
                    ]
                },
                {
                    value:"2013",
                    nodes:[
                        {value:"2013-1-31"},
                        {value:"2013-2-28"},
                        {value:"2013-3-31"},
                        {value:"2013-4-30"},
                        {value:"2013-5-31"},
                        {value:"2013-6-30"},
                        {value:"2013-7-31"},
                        {value:"2013-8-31"},
                        {value:"2013-9-30"},
                        {value:"2013-10-31"},
                        {value:"2013-11-30"},
                        {value:"2013-12-31"}
                    ]
                },
                {
                    value:"2014",
                    nodes:[
                        {value:"2014-1-31"},
                        {value:"2014-2-28"},
                        {value:"2014-3-31"},
                        {value:"2014-4-30"},
                        {value:"2014-5-31"},
                        {value:"2014-6-30"},
                        {value:"2014-7-31"},
                        {value:"2014-8-31"},
                        {value:"2014-9-30"},
                        {value:"2014-10-31"},
                        {value:"2014-11-30"},
                        {value:"2014-12-31"}
                    ]
                },
                {
                    value:"2015",
                    nodes:[
                        {value:"2015-1-31"},
                        {value:"2015-2-28"},
                        {value:"2015-3-31"},
                        {value:"2015-4-30"},
                        {value:"2015-5-31"},
                        {value:"2015-6-30"},
                        {value:"2015-7-31"},
                        {value:"2015-8-31"},
                        {value:"2015-9-30"},
                        {value:"2015-10-31"},
                        {value:"2015-11-30"},
                        {value:"2015-12-31"}
                    ]
                },
                {
                    value:"2016",
                    nodes:[
                        {value:"2016-1-31"},
                        {value:"2016-2-28"},
                        {value:"2016-3-31"},
                        {value:"2016-4-30"},
                        {value:"2016-5-31"},
                        {value:"2016-6-30"},
                        {value:"2016-7-31"},
                        {value:"2016-8-31"},
                        {value:"2016-9-30"},
                        {value:"2016-10-31"},
                        {value:"2016-11-30"},
                        {value:"2016-12-31"}
                    ]
                },
                {
                    value:"2017",
                    nodes:[
                        {value:"2017-1-31"},
                        {value:"2017-2-28"},
                        {value:"2017-3-31"},
                        {value:"2017-4-30"},
                        {value:"2017-5-31"},
                        {value:"2017-6-30"},
                        {value:"2017-7-31"},
                        {value:"2017-8-31"},
                        {value:"2017-9-30"},
                        {value:"2017-10-31"},
                        {value:"2017-11-30"},
                        {value:"2017-12-31"}
                    ]
                },
                {
                    value:"2018",
                    nodes:[
                        {value:"2018-1-31"},
                        {value:"2018-2-28"},
                        {value:"2018-3-31"},
                        {value:"2018-4-30"},
                        {value:"2018-5-31"},
                        {value:"2018-6-30"},
                        {value:"2018-7-31"},
                        {value:"2018-8-31"},
                        {value:"2018-9-30"},
                        {value:"2018-10-31"},
                        {value:"2018-11-30"},
                        {value:"2018-12-31"}
                    ]
                },
                {
                    value:"2019",
                    nodes:[
                        {value:"2019-1-31"},
                        {value:"2019-2-28"},
                        {value:"2019-3-31"},
                        {value:"2019-4-30"},
                        {value:"2019-5-31"},
                        {value:"2019-6-30"},
                        {value:"2019-7-31"},
                        {value:"2019-8-31"},
                        {value:"2019-9-30"},
                        {value:"2019-10-31"},
                        {value:"2019-11-30"},
                        {value:"2019-12-31"}
                    ]
                }
            ]
        },
        {
            value: "2020"
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
        this.element.on('click',function(asd){

            return thisNode.event(thisNode)
        })
    }


    this.setPosition = function (position) {
        this.element.css('left', position + 'px');
    };

    this.active = function(width, space){
        this.element.addClass('active');
        var position = parseInt(space * this.order);
        this.element.animate({left: position + 'px'});
    };

    this.collapseOut = function(activeNode, width){
        var right = 1;
        this.children.forEach(function (child, index) {
            if(right == 1){
                if(child == activeNode){
                    right = 0;
                }
                child.element.animate({left: '0px'},function(){
                    child.element.removeClass('active');
                })
            }else if(right == 0){
                child.element.animate({left: width +'px'},function(){
                    child.element.find('span').text('back');
                    child.element.attr('data-role','back');
                })
                right = -1;
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

    this.activeIn = function(space){

        this.children.forEach(function (child, index) {
            child.element.addClass('active');
            var position = parseInt(space * child.order);
            child.element.animate({left: position + 'px'});
        })
    }

}