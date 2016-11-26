require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'guestbook',
  username: 'adminone'
}
ActiveRecord::Base.establish_connection(options)
