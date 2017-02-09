url = "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=all&api_key=RGAPI-170add2c-df6d-4bb7-975c-5b970695a787"
response = HTTParty.get(url)
response["data"].each do |champ|
  Champion.create!(name: champ[1]["name"],
   key: champ[1]["key"],
   riot_id: champ[1]["id"],
   title: champ[1]["title"],
   lore: champ[1]["lore"],
   img: champ[1]["image"]["full"],
   attack: champ[1]["info"]["attack"],
   defense: champ[1]["info"]["defense"],
   magic: champ[1]["info"]["magic"],
   difficulty: champ[1]["info"]["difficulty"])

   champ[1]["spells"].each do |spell|
     Ability.create(name: spell["name"],
     description: spell["sanitizedDescription"],
     image: spell["image"]["full"],
     champion_id: Champion.find_by(riot_id: champ[1]["id"]).id)
   end

   champ[1]["skins"].each do |skin|
     Skin.create(name: skin["name"],
     num: skin["num"],
     champion_id: Champion.find_by(riot_id: champ[1]["id"]).id)
   end

end

#help me im drowning in json
