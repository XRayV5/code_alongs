    #species, nickname, and level as available fields. Pick suitable data types for these.
    #eg: Pikachu, Frank, 32 For a level 32 Pikachu nicknamed Frank.
require 'sinatra'
require 'pry'
require 'pg'
require 'sinatra/reloader'

def run_sql q_str
  db = PG.connect(dbname:'pokemons')
  db_pool = db.exec(q_str)
  db.close
  db_pool
end


get '/' do
  sql = "select * from pokemoncollection;"
  @pokes = run_sql sql
  erb :index
end


get '/new' do
  'future new pokemons'
    erb :newpoke
end

post '/newpokes' do
  run_sql("insert into pokemoncollection(nickname, species, type, levels) values ('#{params[:name]}', '#{params[:species]}','#{params[:type]}', '#{params[:lv]}');")
  #@dishes = db.exec('select * from dishes;')
  redirect to '/'
end
