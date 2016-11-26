class Dish < ActiveRecord::Base
  belongs_to :user
  has_many :users, through: :comments
end
