require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'goodfoodhunting',
  username: 'adminone'
}
ActiveRecord::Base.establish_connection(options)
