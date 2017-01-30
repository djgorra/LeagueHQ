class ChampionsController < ApplicationController

  def index
    @champions = Champion.order("name").all
  end

end
