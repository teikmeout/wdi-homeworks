Rails.application.routes.draw do
  #had to create routes by hand
  #dont know how to preselect method
  get 'entries', to: 'entries#index'
  get 'entries/:id', to: 'entries#index'
  post 'entries', to: 'entries#create'
  put 'entries/:id', to: 'entries#update'
  delete 'entries/:id', to: 'entries#destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
