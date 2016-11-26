
require './dice'

roll_it = Dice.new()

result = []

p roll_it.roll(1).sum
p roll_it.roll(3).sum
result = roll_it.roll(6).sum
p result
roll_it.diceFace(result)
