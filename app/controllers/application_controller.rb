class ApplicationController < ActionController::Base
  before_filter :set_constants
  before_filter :configure_permitted_parameters, if: :devise_controller?
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:riot_username, :email, :password])
    devise_parameter_sanitizer.permit(:account_update, keys: [:riot_username, :email, :password])
  end
  protect_from_forgery with: :exception
  def set_constants
    @champions = Champion.all
  end

end
