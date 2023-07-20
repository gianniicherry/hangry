Rails.application.routes.draw do
  resources :users, only:[:show,:create] do
     resources :recipes, only:[:index]
  end
  resources :reviews, only:[:index,:show,:create,:update,:destroy]
  resources :recipes, only:[:index,:show,:destroy,:update,:create] do 
    resources :reviews, only:[:create,:index]
  end
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/auth", to: "users#show"
  get "/lessmore/:l/:n", to: "reviews#lessmore"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
