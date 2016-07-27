
require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require_relative 'db_config'
require_relative 'models/dish'

get '/' do
  @dishes = Dish.all
  erb :index
end

get '/dishes/new' do
  'future new dish food'
    erb :new
end

post '/dishes' do
  dish_new = Dish.new()
  dish_new.name = params[:name]
  dish_new.img_url = params[:img_url]
  #run_sql("insert into dishes(name, img_url) values ('#{params[:name]}', '#{params[:img_url]}');")
  #@dishes = db.exec('select * from dishes;')
  dish_new.save
  redirect to '/'
end

get '/dishes/:id' do
  @dish = Dish.find(params[:id])
  #@dish = run_sql("select * from dishes where id = '#{params[:id]}';")
  erb :dish
end

get '/dishes/:id/edit' do
  @dish = Dish.find(params[:id])
  #@dish = run_sql("select * from dishes where id = '#{params[:id]}';")
  erb :edit
end

put '/dishes/:id' do
  dish = Dish.find(params[:id])
  dish.name = params[:name]
  dish.img_url = params[:img_url]
  dish.save
  redirect to '/'
end

delete '/dishes/:id' do
  dish = Dish.find(params[:id])
  dish.destroy
  # sql = "delete from dishes where id = '#{params[:id]}';"
  # run_sql(sql)
  redirect to '/'
end
