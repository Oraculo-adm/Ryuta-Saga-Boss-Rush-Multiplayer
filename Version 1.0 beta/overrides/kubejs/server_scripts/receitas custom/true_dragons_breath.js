ServerEvents.recipes(event => {
    event.shaped('cisco_mod:true_dragons_breath', [
        'AB ',
        'CD '
    ], {
        A: 'minecraft:dragon_breath',
        B: 'irons_spellbooks:dragonskin',
		C: 'enigmaticlegacy:evil_ingot',
        D: 'dragonitegear:dragonite_infused_ingot',
    });
});