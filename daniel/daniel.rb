 word = gets.chomp

# if word.include? '?'
# 	puts "Daniel: Sure."
# elsif word.empty?
# 	puts "Daniel: Fine. Be that way!"
# elsif word == word.upcase
# 	puts "Woah, Chill out!, homie~"
# else 
# 	puts "Daniel: Whatever.." 
# end


def silly90s(word)
	vowels4 = ["o","i","猛","e","a"]
  	word90 = ""
  	word = word.chars
  	cnt = 0;
	word.each_with_index do |char, idx|
	    if char.scan(/[aeio]/).count==1
		    vowels4.each do |vowel|
		      if char == vowel
		          char = vowels4.index(vowel)
		          word90 = word90 + char.to_s
		      end
		    end
		elsif idx == 0
			word90 += char.to_s.downcase
		else 
			if cnt%2 == 0
				word90 += char.to_s.upcase
				cnt+=1
			elsif char.scan(/[0-9]/).count>=1
				cnt = 0
			elsif char.to_s == " "
				word90 += char.to_s
			else 
				word90 += char.to_s.downcase				
				cnt+=1
			end
			
		end
	end
	return word90
 end

puts silly90s(word)
