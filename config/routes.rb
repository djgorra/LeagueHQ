Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "homes#index"
  resources :homes, only: [:index]
  resources :champions , only: [:show, :index, :info] do
    resources :topics do
      resources :replies
    end
    resources :info, only: [:index]
  end
  resources :users, only: [:show] do
    resources :matches
  end
end
