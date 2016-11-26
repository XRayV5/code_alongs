Rails.application.routes.draw do

  resources :users
  get '/users', to: 'users#index'
  get '/users/new', to: 'users#new'


  resources :leads
  get '/leads', to: 'leads#index'



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    # controller name# method name
    # controller name# action
  post '/new_lead', to: 'pages#new_lead'
  get '/thanks', to: 'pages#thanks'
  get '/', to: 'pages#home'
  get '/about', to: 'pages#about'
  get '/donate', to: 'pages#donate'

end
