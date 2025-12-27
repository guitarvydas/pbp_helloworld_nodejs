function hello_handler (eh,msg) {
    send (eh, "", "Hello", msg);
}

function hello_instantiator (reg,owner,name,template_data) {
    let name_with_id = gensymbol ("Hello");
    return make_leaf (name_with_id, owner, null, "", hello_handler);
}

function hello_install (reg) {
    register_component (reg,mkTemplate ( "Hello", null, hello_instantiator));
}

