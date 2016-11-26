def calWeight arr, rev
  w_arr = [*('a'..'z')]
  alpha = Hash[w_arr.collect { |item| [item.upcase, w_arr.index(item)+1] } ]
  weight = 0
  if !rev
    arr.each_with_index  do |letter, index|
      weight = weight + alpha[letter.upcase] * (index+1)
    end
  else
    arr.reverse.each_with_index  do |letter, index|
      weight = weight + alpha[letter.upcase] * (index+1)
    end
  end
  weight
end


def balance word, center
  w_arr = word.split('')

  p lft_arm = w_arr[0..center-1]
  p rht_arm = w_arr[center+1,w_arr.length-1]

  p lft_weight = calWeight(lft_arm, true)
  p rht_weight = calWeight(rht_arm, false)

  if lft_weight == rht_weight
    puts "Balanced!"
    puts "#{lft_arm} #{w_arr[center-1]} #{rht_arm} - #{rht_weight}"
  elsif lft_weight != rht_weight
    puts "Can not be balanced!"
  end

end

balance 'wow', 1
# STEAD
balance 'STEAD', 1

balance 'CONSUBSTANTIATION', 8

balance 'WRONGHEADED', 3

# calWeight ['w','o']
