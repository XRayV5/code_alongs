
class Guest < ActiveRecord::Base
  validates :name, presence: true
end
