
#Framework
require 'sinatra'
require 'sinatra/reloader'

#database configuration
require 'pg'
require_relative 'db_config'

#model classes
require_relative 'models/dish'
require_relative 'models/user'
require_relative 'models/comment'

#test console
require 'pry'

#activate session control
enable :sessions

#methods inside 'helpers' are global
helpers do
#Session check
  def logged_in?
    if User.find_by(id: session[:user_id]) == nil
      return false
    else
      return true
    end
  end
#user profile accessor
  def current_user
    User.find(session[:user_id])
  end
end

#mainpage display all dishes
get '/' do
  @dishes = Dish.all
  erb :index
end

#direction route to add dish form
get '/dishes/new' do
  if !logged_in?
    redirect to "/session/new"
  else
    erb :new
  end
end

#action route: add the new dish via post method
post '/dishes' do

  if !logged_in?
    redirect to "/session/new"
  else
    dish_new = Dish.new()
    dish_new.name = params[:name]
    dish_new.img_url = params[:img_url]
    dish_new.user_id = current_user.id
    #if use plain SQL query:
    #run_sql("insert into dishes(name, img_url) values ('#{params[:name]}', '#{params[:img_url]}');")
    #@dishes = db.exec('select * from dishes;')
    dish_new.save
    redirect to '/'
  end
end

#Show detailed dish info (get)
get '/dishes/:id' do
  @dish = Dish.find(params[:id])
  @comments = Comment.where(dish_id: params[:id])
  #@dish = run_sql("select * from dishes where id = '#{params[:id]}';")
  erb :dish
end

#direction route: get the selected dish, and direct to the edit form page
get '/dishes/:id/edit' do
  @dish = Dish.find(params[:id])
  #@dish = run_sql("select * from dishes where id = '#{params[:id]}';")
  erb :edit
end

#action route: find the dish and update
put '/dishes/:id' do
  if !logged_in?
    redirect to "/session/new"
  else
    dish = Dish.find(params[:id])
    dish.name = params[:name]
    dish.img_url = params[:img_url]
    dish.save
    redirect to '/'
  end
end

#deletion using delete method
delete '/dishes/:id' do
  if !logged_in?
    redirect to "/session/new"
  else
    dish = Dish.find(params[:id])
    dish.destroy
  # sql = "delete from dishes where id = '#{params[:id]}';"
  # run_sql(sql)
    redirect to '/'
  end
end

#direction route: get the dishes of the current user and direction to myDish.erb
get '/show_my_dish' do
  @my_dishes = current_user.dishes
  erb :myDish
end

#receive the dish_id param passed by hidden field
post '/comment' do
  cmt = Comment.new
  cmt.user_id = current_user.id
  cmt.dish_id = params[:dish_id]
  cmt.comment = params[:comment]
  cmt.save
  @dish = Dish.find(cmt.dish_id)
  @comments = Comment.where(dish_id: params[:dish_id])
  erb :dish
end

# direction to the login form page
get '/session/new' do
  # login form
  erb :login
end

#action route: validate the user
post '/session' do
  # logging in..
  user  = User.find_by(email: params[:email])
  if user && user.authenticate(params[:pw])
    session[:user_id] = user.id
    redirect to '/'
  else
    erb :login
  end
end

#log off
delete '/session' do
  session.delete(:user_id)
  erb :login
end
#direction route to the signup page
get '/signup' do
  erb :signup
end

#action route: add the new user
post '/signup/post' do
  new_user = User.new()
  new_user.email = params[:uname]
  new_user.password = params[:pw]
  new_user.save
  @user = User.find_by(email: params[:uname])
  session[:user_id] = @user.id
  erb :congras_new
end
