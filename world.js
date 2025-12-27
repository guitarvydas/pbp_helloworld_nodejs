function world_handler (eh,msg) {
    send (eh, "", "World", msg);
}

function world_instantiator (reg,owner,name,template_data) {
    let name_with_id = gensymbol ("World");
    return make_leaf (name_with_id, owner, null, "", world_handler);
}

function world_install (reg) {
    register_component (reg, mkTemplate ( "World", null, world_instantiator));
}


