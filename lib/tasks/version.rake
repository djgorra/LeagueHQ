namespace :version do
  desc "Checks what version of League of Legends LeagueHQ is currently using"
  task check: :environment do
    puts Version.first.num
  end

  desc "Updates to most recent version"
  task update: :environment do
    url = "https://global.api.riotgames.com/api/lol/static-data/NA/v1.2/versions?api_key=#{ENV["api-key"]}"
    response = HTTParty.get(url)
    Version.delete_all
    Version.create(num:response[0])
  end

end
