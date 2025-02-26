ServerEvents.recipes(event => {
    event.shaped('cisco_mod:tabletof_ascension', [
        'CAC',
        'ABA',
        'CAC'
    ], {
        A: 'cisco_mod:arcane_brightsteel_block',  // 
        B: 'cisco_mod:radiant_sunshard',   // 
        C: 'cisco_mod:light_core'          // 
    });
});