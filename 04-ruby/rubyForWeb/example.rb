require 'sinatra'
require 'sinatra/reloader'
require 'pry'



get '/' do
    # file = IO.read('index.html')
    # return file

    erb(:index)
end


get '/donate' do
  @money_in_bank = 5

  erb(:donate)
  #erb(:donate, locals: {money_in_bank: money_in_bank})
end


# requrest
get '/cookies' do
  # response

  "You get cookies! !!!!!!!!!!!!!!!"
end


get '/cheeseburger' do
  #params.inspect
  if params[:name]=='DT'
    "The price for cheeseburger is $500."
  else
    "The price for cheeseburger is $50."
  end
end

get '/hello' do
#binding pry
  params.inspect
  "Hellow there #{params[:color]}"
end


get '/calc' do
  result = params[:num1].to_f + params[:num2].to_f
  "The sum is #{result}"
end
