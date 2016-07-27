
require 'sinatra'
require 'sinatra/reloader'
require 'pg'

def run_sql(sql_str)
  db = PG.connect(dbname: 'goodfoodhunting')
  db_pool = db.exec(sql_str)
  db.close
  db_pool
end



get '/' do
  sql = 'select * from dishes;'
  @dishes = run_sql(sql)
  erb :index
end

get '/dishes/new' do
  'future new dish food'
    erb :new
end

post '/dishes' do
  run_sql("insert into dishes(name, img_url) values ('#{params[:name]}', '#{params[:img_url]}');")
  #@dishes = db.exec('select * from dishes;')
  redirect to '/'
end

get '/dishes/:id' do
  @dish = run_sql("select * from dishes where id = '#{params[:id]}';")
  erb :dish
end

get '/dishes/:id/edit' do
  @dish = run_sql("select * from dishes where id = '#{params[:id]}';")
  erb :edit
end

put '/dishes/:id' do
  sql = "update dishes set name = '#{params[:name]}', img_url = '#{params[:img_url]}' where id = '#{params[:id]}';"
  run_sql(sql)
  redirect to '/'
end

delete '/dishes/:id' do
  sql = "delete from dishes where id = '#{params[:id]}';"
  run_sql(sql)
  redirect to '/'
end
