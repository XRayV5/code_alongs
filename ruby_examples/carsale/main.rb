
require 'sinatra'
#require 'sinatra/reloader'
require 'pg'
require 'pry'

require_relative 'db_config'
require_relative 'models/car'
require_relative 'models/user'

enable :sessions

helpers do
  def loggedIn?
    if User.find_by(id: session[:user_id]) != nil
      return true;
    else
      return false;
    end
  end

  def current_user
    User.find(session[:user_id])
  end

end


get '/' do
  @allCars = Car.all
  erb :index
end

get '/addnew' do
    erb :listNew
end

post '/insertnew' do
  if loggedIn?
    newCar = Car.new
    newCar.reg = params['reg']
    newCar.car_type = params['type']
    newCar.manufacturer = params['manuf']
    newCar.model = params['model']
    newCar.make = params['make']
    newCar.price = params['price']
    newCar.img_url = params['img']
    newCar.user_id = 2
    newCar.save
    redirect to '/'
  else
    redirect to '/'
  end

end

get '/car_detail/:id' do
    @theCar = Car.find(params['id'])
    @theUser = User.find(@theCar.user_id)
    erb :car_detail
end

post '/login' do
  user = User.find_by(email: params['username'])
  if user&&user.authenticate(params[:pw])
    session[:user_id] = user.id
    redirect to '/'
  else
      redirect to '/'
  end
end

delete '/logoff' do
  session.delete(:user_id)
  redirect to '/'
end

get '/signup' do
  erb :signup
end

post '/session/signup' do
  new_user = User.new
  new_user.email = params['new_username']
  new_user.password = params['new_password']
  new_user.save
  new_session = User.find_by(email: params['new_username'])
  session[:user_id] = new_session.id
  redirect to '/'
end
