arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n"]


# sub_arr = arr.each_slice(4).to_a

# puts "#{sub_arr}"

# odd = sub_arr.pop()

# odd.each_with_index do |i, idx|
#   sub_arr[idx].push(i)
# end

# puts "#{sub_arr}"



def regroup (grpOf, arr)

	sub_arr = arr.each_slice(grpOf).to_a

	puts "#{sub_arr}"

	if arr.length % grpOf != 0
		odd = sub_arr.pop()

		if sub_arr.length > odd.length

			odd.each_with_index do |i, idx|
				sub_arr[idx].push(i)
			end
		else
			ct = 0
			while odd.length != 0 do
				sub_arr[ct].push(odd.pop)
				ct += 1
				if ct == sub_arr.length
					ct = 0
				end

			end
		end
	end
	return sub_arr
end

grp4 = regroup(4, arr)
puts "#{grp4}"
grp5 = regroup(5, arr)
puts "#{grp5}"
grp6 = regroup(6, arr)
puts "#{grp6}"
grp7 = regroup(7, arr)
puts "#{grp7}"
grp8 = regroup(8, arr)
puts "#{grp8}"