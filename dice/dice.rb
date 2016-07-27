require 'pry'


class Dice

  def initialize
  end

  def roll(times = 1)
    rolls = []
    ct = 0
    while rolls.uniq.length < times #ct < times do
      rolls << rand(1..6)
      ct+=1
    end
    return rolls.uniq
  end

  def diceFace(dice)

      dice[0].each do |roll|
      # |* *|
      # |* *|
        ct = 0
        print "|"
        while ct < 4 && ct < roll
          print "*"
          ct += 1
        end
        print "|"

        if ct > 3
          puts "|"
          while ct > 3 && ct < 6 && ct < roll
            print "*"
            ct += 1
          end
          print "|"
          puts ""
        end
      end
  end
end

class Array

  def sum
    sumo = []
    sumo << self
    combo = 0
    self.each do |itm|
      combo += itm
    end
    sumo << combo
  end


end
#Dice.roll(5).sum
# => [[6,6,5,5], 22]
