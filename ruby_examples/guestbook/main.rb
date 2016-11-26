require 'sinatra'
require 'sinatra/reloader'
require "pry"
require 'pg'
require_relative 'db_config'
require_relative 'models/guest'


get '/' do
  # db = PG.connect(dbname: 'guestbook')
  # @guests = db.exec('select * from guests;')
  # db.close
  @guests = Guest.all
  erb :index
  #db.close
end

get '/new' do
  # db = PG.connect(dbname: 'guestbook')
  # @guests = db.exec('select * from guests;')
  # db.close
  erb :addGuest
  #db.close
end



delete '/:id' do
  # db = PG.connect(dbname: 'guestbook')
  # @guests = db.exec('select * from guests;')
  # db.close
  #gst = Guest.new()
  gst = Guest.find(params[:id])
  gst.destroy
  redirect to '/'
  #db.close
end



post '/addnew' do
  # db = PG.connect(dbname: 'guestbook')
  # @guests = db.exec('select * from guests;')
  # db.close
  gst = Guest.new()
  gst.name = params[:name]
  gst.save
  redirect to '/'
  #db.close
end

get '/show' do
  gst = Guest.new()
  gst.name = params[:name]
  gst.save
  #binding pry
  @guests = Guest.all
  erb :show
end
