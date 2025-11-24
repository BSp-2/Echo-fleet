const echo-fleet = Vars.mods.locateMod("echo-fleet").meta;

echo-fleet.displayName = Core.bundle.get("mod.echo-fleet.name");
echo-fleet.author = Core.bundle.get("mod.echo-fleet.author");
echo-fleet.description = Core.bundle.get("mod.echo-fleet.description");
echo-fleet.subtitle = Core.bundle.get("mod.echo-fleet.subtitle"); 

SaveFileReader.fallback.putAll(
  //basalt
  "echo-fleet-03c-03-tile-basalt-plates", "echo-fleet-basalt",
  "echo-fleet-03c-03-tile-basalt", "echo-fleet-basaltplates",
  "echo-fleet-03c-03-u-tile-basalt-wave", "echo-fleet-basaltextrusions",
  "echo-fleet-03c-03-wall-basalt", "echo-fleet-basaltw", 
  "echo-fleet-03c-03-vent-basalt", "echo-fleet-basaltv", 
  "echo-fleet-03c-03-boulder-basalt", "echo-fleet-basaltb", 
  "echo-fleet-03c-04-tile-magmatic-basalt", "echo-fleet-magmaticbasalt", 
  //magmaticbasaltplates
  "echo-fleet-03c-04-wall-magmatic-basalt", "echo-fleet-magmaticbasaltw", 
  "echo-fleet-03c-01-liquid-slag", "echo-fleet-lslag", 
  "echo-fleet-03c-01-tile-bauxitic", "echo-fleet-bauxite", 
  "echo-fleet-03c-01-wall-bauxitic", "echo-fleet-bauxitew", 
  "echo-fleet-03c-01-vent-bauxitic", "echo-fleet-bauxitev", 
  "echo-fleet-03c-01-d-boulder-bauxitic", "echo-fleet-bauxiteb", 
  "echo-fleet-03c-01-d-boulder-bauxite-large", "echo-fleet-bauxitecluster", 
  "echo-fleet-03c-02-tile-aged-bauxitic", "echo-fleet-agedbauxite", 
  "echo-fleet-03c-02-wall-aged-bauxitic", "echo-fleet-agedbauxitew", 
  "echo-fleet-03c-02-vent-aged-bauxitic", "echo-fleet-agedbauxitev", 
  "echo-fleet-03c-02-boulder-aged-bauxitic", "echo-fleet-agedbauxiteb", 
  "echo-fleet-03c-02-boulder-aged-bauxitic-large", "echo-fleet-agedbauxitecluster", 
  "echo-fleet-03c-05-tile-sandstone", "echo-fleet-sandstone", 
  "echo-fleet-03c-05-tile-soft-sand", "echo-fleet-softsand", 
  "echo-fleet-03c-05-wall-sandstone", "echo-fleet-softsandw", 
  "echo-fleet-03c-05-vent-sandstone", "echo-fleet-softsandv", 
  "echo-fleet-03c-05-boulder-sandstone", "echo-fleet-softsandb", 
  "echo-fleet-03c-06-liquid-quicksand", "echo-fleet-quicksand", 
  "echo-fleet-03c-02-liquid-crude-oil", "echo-fleet-crudeoil", 
  "echo-fleet-03c-05-liquid-shallow-dirty-water", "echo-fleet-sdwater", 
  "echo-fleet-03c-04-liquid-dirty-water", "echo-fleet-dwater", 
  "echo-fleet-echo-fleet-03c-03-liquid-deep-dirty-water", "echo-fleet-ddwater", 
  "echo-fleet-03c-07-tile-atlassic-sand", "echo-fleet-smoothatlassium", 
  "echo-fleet-03c-07-wall-atlassic-sand", "echo-fleet-smoothatlassiumw", 
  "echo-fleet-03c-07-vent-atlassic-sand", "echo-fleet-smoothatlassiumv", 
  "echo-fleet-03c-07-boulder-atlassic-sand", "echo-fleet-smoothatlassiumb", 
  //sadwater
  "echo-fleet-03c-07-liquid-dirty-atlassic-water", "echo-fleet-adwater", 
  "echo-fleet-03c-07-liquid-deep-dirty-atlassic-water", "echo-fleet-dadwater", 
  "echo-fleet-03c-07-tile-soft-atlassium", "echo-fleet-atlassium", 
  "echo-fleet-03c-07-wall-soft-atlassium", "echo-fleet-atlassiumw", 
  "echo-fleet-03c-07-vent-soft-atlassium", "echo-fleet-atlassiumv", 
  "echo-fleet-03c-07-boulder-soft-atlassium", "echo-fleet-atlassiumb", 
  "echo-fleet-03c-08-tile-atlassium", "echo-fleet-atlassiumpatterns", 
  "echo-fleet-03c-08-wall-atlassium", "echo-fleet-atlassiumpatternsw", 
  "echo-fleet-03c-08-vent-atlassium", "echo-fleet-atlassiumpatternsv", 
  "echo-fleet-03c-08-boulder-atlassium", "echo-fleet-atlassiumpatternsb", 
  "echo-fleet-03c-01-ore-scrap", "echo-fleet-orescrap", 
  "echo-fleet-03c-02-ore-copper", "echo-fleet-orecopper", 
  "echo-fleet-03c-03-ore-europium", "echo-fleet-oreeuropium", 
  "echo-fleet-03c-04-wall-ore-echo-shard", "echo-fleet-oreechoshard" 
)
