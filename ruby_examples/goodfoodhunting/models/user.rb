class User < ActiveRecord::Base
	has_secure_password
	has_many :dishes
	has_many :dishes, through: :comments
	# has_many :comments
end
