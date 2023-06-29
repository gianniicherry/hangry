Rails.application.routes.draw do
  resources :users, only:[:show,:create]
  resources :reviews, only:[:index,:show,:create,:update,:destroy]
  resources :recipes, only:[:index,:show,:destroy,:update,:create] do 
    resources :reviews, only:[:create,:index]
  end
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/auth", to: "users#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
