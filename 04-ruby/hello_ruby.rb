puts("Hello")

3.times do 
	puts 'beetlejuice'
end


# loop


number = 0

while number < 5 
	puts number.to_s
	number += 1
end


require 'pry'

puts "Enter an integer between 1-10."
input = gets.chomp
#theNumber = 9
theNumber = Random.rand(1..10);
#puts theNumber.to_s
while theNumber != input.to_i
	puts "Again!"
	input = gets.chomp
end
puts "Well done! #{theNumber}!"	