url = "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=all&api_key=RGAPI-170add2c-df6d-4bb7-975c-5b970695a787"
response = HTTParty.get(url)
response["data"].each do |champ|
  Champion.create!(name: champ[1]["name"], key: champ[1]["key"], riot_id: champ[1]["id"], title: champ[1]["title"], lore: champ[1]["lore"], img: champ[1]["image"]["full"])
end

#fix pls
