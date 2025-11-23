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
  bauxitev
  bauxiteb
  bauxitecluster
  agedbauxite
  agedbauxitew
  agedbauxitev
  agedbauxiteb
  agedbauxitecluster
  sandstone
  softsand
  softsandw
  softsandv
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
