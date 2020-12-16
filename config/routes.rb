Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create] do
      resources :tickets, only: [:index]
    end
    resources :events, only: [:create, :update, :index, :show, :destroy]
    resources :tickets, only: [:create, :destroy]
    
    resource :session, only: [:create, :destroy, :show]

  end

  root "static_pages#root"
end
