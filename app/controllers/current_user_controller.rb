class CurrentUserController < ApplicationController
  def index
    if user_signed_in?
      render json: {id: current_user.id, riot_id: current_user.riot_id}
    else
      render json: {id: nil, riot_id: nil}
    end
  end
end
