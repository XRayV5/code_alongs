class Dish < ApplicationRecord
  # validates :name, uniqueness: true

  # dependent: :destroy - equvalent to "on delete cascade" in SQL
  has_many :likes, dependent: :destroy #JSON fashion; use hash rocket: 'dependent <= :destroy'
  has_many :comments
end
