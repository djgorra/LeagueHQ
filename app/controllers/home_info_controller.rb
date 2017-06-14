class HomeInfoController < ApplicationController
  def index
    @champions = Champion.all
    user_signed_in? ? (@user = current_user.riot_username) : (@user = nil)
    render :json => {:version => Version.first.num,
      :username => @user,
      :champions => @champions.as_json(only: [:id, :name, :img, :key, :riot_id])}
  end
end
