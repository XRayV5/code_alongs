def get_squares arr
  p_square = []
  arr.each do |num|
    p_square << num if Math.sqrt(num) == Math.sqrt(num).floor
  end
  p_square.uniq.sort
end

puts get_squares([4, 1, 16, 1, 10, 35, 22, 25])
