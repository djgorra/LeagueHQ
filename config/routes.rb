Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: "registrations" }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "homes#index"
  resources :homes, only: [:index]
  resources :home_info, only: [:index]
  resources :champions, only: [:show, :info] do
    resources :topics do
      resources :replies, except: [:show, :index]
    end
    resources :info, only: [:index]
  end
  resources :users, only: [:show]
  resources :matches, only: [:show]
  resources :match_list, only: [:show]
end
