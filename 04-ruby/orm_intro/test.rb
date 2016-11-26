require 'active_record'
require 'pry'

options = {
  adapter: 'postgresql',
  database: 'guestbook',
  username: 'adminone'
}

#DB connections
ActiveRecord::Base.establish_connection(options)

require_relative 'guest.rb'

binding.pry
