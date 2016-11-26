Rails.application.routes.draw do
  resources :talks

  get "/api/talks", to: "api/talks#list_all"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
