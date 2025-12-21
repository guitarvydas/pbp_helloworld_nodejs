function main () {
    let palette =  null;
    let env =  null;
    [palette, env] = initialize_from_files (process.argv[2], process.argv.slice (5));
    hello_install (palette);
    world_install (palette);
    start (process.argv[3], process.argv[4], palette, env);
}

main ();
