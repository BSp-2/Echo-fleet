const echo-fleet = Vars.mods.locateMod("echo-fleet").meta;

echo-fleet.displayName = Core.bundle.get("mod.echo-fleet.name");
echo-fleet.author = Core.bundle.get("mod.echo-fleet.author");
echo-fleet.description = Core.bundle.get("mod.echo-fleet.description");
echo-fleet.subtitle = Core.bundle.get("mod.echo-fleet.subtitle"); 

SaveFileReader.fallback.putAll(
  //basalt
  "03c-03-tile-basalt-plates", "basalt",
  "03c-03-tile-basalt", "basaltplates",
  "03c-03-u-tile-basalt-wave", "basaltextrusions",
  "03c-03-wall-basalt", "basaltw", 
  "03c-03-vent-basalt", "basaltv", 
  "03c-03-boulder-basalt", "basaltb", 
  "03c-04-tile-magmatic-basalt", "magmaticbasalt", 
  //magmaticbasaltplates
  "03c-04-wall-magmatic-basalt", "magmaticbasaltw", 
  "03c-01-liquid-slag", "lslag", 
  "03c-01-tile-bauxitic", "bauxite", 
  "03c-01-wall-bauxitic", "bauxitew", 
  "03c-01-vent-bauxitic", "bauxitev", 
  "03c-01-d-boulder-bauxitic", "bauxiteb", 
  "03c-01-d-boulder-bauxite-large", "bauxitecluster", 
  "03c-02-tile-aged-bauxitic", "agedbauxite", 
  "03c-02-wall-aged-bauxitic", "agedbauxitew", 
  "03c-02-vent-aged-bauxitic", "agedbauxitev", 
  "03c-02-boulder-aged-bauxitic", "agedbauxiteb", 
  "03c-02-boulder-aged-bauxitic-large", "agedbauxitecluster", 
  "03c-05-tile-sandstone", "sandstone", 
  "03c-05-tile-soft-sand", "softsand", 
  "03c-05-wall-sandstone", "softsandw", 
  "03c-05-vent-sandstone", "softsandv", 
  "03c-05-boulder-sandstone", "softsandb", 
  "03c-06-liquid-quicksand", "quicksand", 
  "03c-02-liquid-crude-oil", "crudeoil", 
  "03c-05-liquid-shallow-dirty-water", "sdwater", 
  "03c-04-liquid-dirty-water", "dwater", 
  "03c-03-liquid-deep-dirty-water", "ddwater", 
  "03c-07-tile-atlassic-sand", "smoothatlassium", 
  "03c-07-wall-atlassic-sand", "smoothatlassiumw", 
  "03c-07-vent-atlassic-sand", "smoothatlassiumv", 
  "03c-07-boulder-atlassic-sand", "smoothatlassiumb", 
  //sadwater
  "03c-07-liquid-dirty-atlassic-water", "adwater", 
  "03c-07-liquid-deep-dirty-atlassic-water", "dadwater", 
  "03c-07-tile-soft-atlassium", "atlassium", 
  "03c-07-wall-soft-atlassium", "atlassiumw", 
  "03c-07-vent-soft-atlassium", "atlassiumv", 
  "03c-07-boulder-soft-atlassium", "atlassiumb", 
  "03c-08-tile-atlassium", "atlassiumpatterns", 
  "03c-08-wall-atlassium", "atlassiumpatternsw", 
  "03c-08-vent-atlassium", "atlassiumpatternsv", 
  "03c-08-boulder-atlassium", "atlassiumpatternsb", 
  "03c-01-ore-scrap", "orescrap", 
  "03c-02-ore-copper", "orecopper", 
  "03c-03-ore-europium", "oreeuropium", 
  "03c-04-wall-ore-echo-shard", "oreechoshard" 
)
