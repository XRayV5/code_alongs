require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :index
end

get '/donate' do
  erb :donate
end

get '/thank' do
  "#{params[:amount]}  #{params[:email]} Piss off now."

end
