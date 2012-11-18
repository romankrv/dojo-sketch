// TODO DESCRIBE ABOUT THIS FILE AND DESCRIBE ABOUT FUNCTIONS


function setTextNode(obj) {
    node = obj.node || "";
    text = obj.text || "";
    dojo.byId(node).innerHTML = text;
}


function slideTo(obj) {
    node = obj.node || "";
    coord = obj.coord || [0,0];
    dojo.fx.slideTo({
        node: dojo.byId(node),
        left: coord[0],
        top: coord[1]
    }).play();
}


function destroyNode(node) {
    dojo.destroy(dojo.byId(node));
}


function emptyNode(node) {
    dojo.empty(dojo.byId(node));
}


function createNode(setup) {
    node = setup.node || "";
    className = setup.className || "";
    innerHTML = setup.innerHTML || "";
    style = setup.style || {};
    attachNode = setup.attachNode || "";
    dojo.create(node, {
        innerHTML: innerHTML,
        className: className,
        style: style
    }, dojo.byId(attachNode));
}

