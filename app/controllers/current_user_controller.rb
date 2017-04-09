class CurrentUserController < ApplicationController
  def index
    if user_signed_in?
      render json: {id: current_user.id, username: current_user.riot_username}
    else
      render json: {id: nil, riot_id: nil}
    end
  end
end
