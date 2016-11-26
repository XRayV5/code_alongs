Rails.application.routes.draw do
  resources :users
  resources :comments
  resources :likes
  resources :dishes

  # login routing
  get '/session/new', to: 'session#new'

  post '/session/new', to: 'session#create'

  delete '/session', to: 'session#destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post 'api/likes', to: 'api/likes#create'

  get 'api/dishes', to: 'api/dishes#get'
end
