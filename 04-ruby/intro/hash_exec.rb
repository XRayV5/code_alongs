#Array and Hash access

#A
a = ["Anil", "Erik", "Jonathan"]

puts a[1]

a.unshift("Ray");

puts a
#B

h = {0 => "Zero", 
	1 => "One", 
	:two => "Two", 
	"two" => 2}
puts h[1]

puts h[:two]

puts h["two"]

h[3] = "Three"

h[:four] = 4

puts "3 and 4 is added to the hash #{h}"

#C

is = {true => "It's true!", false => "It's false"}

puts is[2 + 2 ==4]
puts is[0]
puts is["Erik"]


#D
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# puts users["Jonathan"][:twitter]

# puts users["Jonathan"][:favorite_numbers].push(7)

# users["Ray"] = {}

# puts users
# puts users["Erik"][:favorite_numbers]
# puts users["Erik"][:favorite_numbers].min()



even_nums = []
users["Anil"][:favorite_numbers].each do |i|
	if i%2==0 #i.even?
		even_nums.push(i)
	end
end
puts "Even numbers are #{even_nums}"

users["Anil"][:favorite_numbers].map {|n| n % 2 == 0}.compact
users["Anil"][:favorite_numbers].select {|n| n.even?}



common_nums = users["Anil"][:favorite_numbers]&users["Erik"][:favorite_numbers]&users["Jonathan"][:favorite_numbers]
puts "Common numbers are #{common_nums}"#users["Anil"][:favorite_numbers]&users["Erik"][:favorite_numbers]&users["Jonathan"][:favorite_numbers]


new_arr =  users["Erik"][:favorite_numbers] + users["Anil"][:favorite_numbers] + users["Jonathan"][:favorite_numbers]

sorted = new_arr.uniq.sort

puts "sorted unique numbers #{sorted}"

