Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "champions#index"
  resources :champions , only: [:show] do
    resources :topics 
  end
  resources :users, only: [:show]
end
