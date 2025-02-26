ServerEvents.recipes(event => {
    event.shaped('cisco_mod:frigidiumingot', [
        'AB',
        'CD'
    ], {
        A: 'minecraft:netherite_ingot',
        B: 'enlightened_end:adamantite_ingot',
        C: 'dragonitegear:dragonite_ingot',
        D: 'minecraft:lapis_lazuli'
    });
});