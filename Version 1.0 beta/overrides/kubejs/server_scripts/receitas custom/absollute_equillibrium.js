ServerEvents.recipes(event => {
    // Remover a receita original do item
    event.remove({output: 'cisco_mod:absolute_equillibrium'});

    // Adicionar a nova receita personalizada
    event.shaped('cisco_mod:absolute_equillibrium', [
        'EBE',
        'ACA',
        'EDE'
    ], {
        A: 'enigmaticaddons:etherium_core',
        B: 'cisco_mod:nightfall',
        C: 'alexscaves:immortal_embryo',
        D: 'cisco_mod:equillibrium',
        E: 'irons_spellbooks:energized_core'
    });
});
