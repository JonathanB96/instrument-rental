Rails.application.routes.draw do
  
  resources :families
  resources :rentals
  resources :users
  resources :instruments
  post '/api/payment', to: 'payments#create'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
