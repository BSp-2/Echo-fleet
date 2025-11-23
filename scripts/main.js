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
  softsandb
  quicksand
  crudeoil
  sdwater
  dwater
  ddwater
  smoothatlassium
  smoothatlassiumw
  smoothatlassiumv
  smoothatlassiumb
  sadwater
  adwater
  dadwater
  atlassium
  atlassiumw
  atlassiumv
  atlassiumb
  atlassiumpatterns
  atlassiumpatternsw
  atlassiumpatternsv
  atlassiumpatternsb
  orescrap
  orecopper
  oreeuropium
  oreechoshard
)
