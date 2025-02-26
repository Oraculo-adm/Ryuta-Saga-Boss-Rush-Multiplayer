ServerEvents.recipes(event => {
  event.remove({ output: "celestisynth:celestial_netherite_ingot" })
  event.custom({
    "type": "dragonitegear:dragonite_forging",
    "ingredients": [
      {
        "item": "celestisynth:supernal_netherite_ingot"
      },
      {
        "item": "cisco_mod:true_dragons_breath"
      }
    ],
    "output": {
      "count": 1,
      "item": "celestisynth:celestial_netherite_ingot"
    }
  });
})