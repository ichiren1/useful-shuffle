Rails.application.routes.draw do
  post 'ichiren/shuffle', to: 'ichiren#shuffle'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
