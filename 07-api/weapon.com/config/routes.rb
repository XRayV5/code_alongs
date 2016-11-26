Rails.application.routes.draw do
  resources :weapons

  # namespace :api do
  #     resources :weapons
  # end

  get '/', to: 'pages#index'
  get '/weapons', to: 'weapons#index'
  get 'api/weapons', to: 'api/weapons#list_all'
  get 'api/weapons_count', to: 'api/weapons#countAll'
  delete 'api/weapons', to: 'api/weapons#delete_weapon'
  post 'api/weapons', to: 'api/weapons#create'
  put 'api/weapons', to: 'api/weapons#update'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


end
