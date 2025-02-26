ServerEvents.recipes(event => {
    event.shaped('cisco_mod:radiant_sunshard', [
        'AAA',
        'CBC',
        'AAA'
    ], {
        A: 'cisco_mod:demonium_ingot',  // Demonium Ingot nas 3 primeiras posições
        B: 'cisco_mod:radiant_ruby',   // Radiant Ruby no centro
        C: 'voidscape:ichor'           // Ichor nas laterais da segunda fileira
    });
});