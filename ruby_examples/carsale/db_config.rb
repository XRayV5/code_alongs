require 'active_record'
options = {
  adapter: 'postgresql',
  database: 'carsale'
}
ActiveRecord::Base.establish_connection( ENV['DATABASE_URL'] || options)
