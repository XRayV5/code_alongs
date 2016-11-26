
require 'pry'


# figures = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
# heads = ['Diamonds', 'Hearts', 'Clubs', 'Spades']

#
# "Your hand: 7 of hearts, 3 of Diamonds"
# "Raybot1hand: 2 of Diamonds, 3 of hearts"
# "Raybot2hand: Jack of Clubs, 7 of Spades"


print "Enter the number of players (1-8)"
playerQty = gets.chomp

def display_card(players)
  figures = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
  heads = ['Diamonds', 'hearts', 'Clubs', 'Spades']
  counter = 0;
  cards_dealt = [];
  while(counter < players)
    card1 = figures[rand(0...13)] + " of " + heads[rand(0...4)]
    card2 = figures[rand(0...13)] + " of " + heads[rand(0...4)]

    while(!validCard?(card1, cards_dealt))
      card1 = figures[rand(0...13)] + " of " + heads[rand(0...4)]
    end

    cards_dealt << card1

    while(!validCard?(card2, cards_dealt))
      card2 = figures[rand(0...13)] + " of " + heads[rand(0...4)]
    end

    cards_dealt << card2

    if(counter == 0)
      showhand = "Your hand: " + card1 + ", " +card2
    else
      showhand = "Raybot" + counter.to_s + " hand: " + card1 + ", " +card2
    end

    p showhand
    counter += 1
  end

end

def validCard? card, dealt
  if dealt != []
    dealt.each do |cd|
      if(cd == card)
        return false
      end
    end

    # counter = 0
    # dealt.each do |cd|
    # # p cd.split(" ")[3]
    # # p card.split(" ")[3]
    #   if cd.split(" ")[3] == card.split(" ")[3]
    #       counter += 1
    #   end
    # end
    # return false if counter > 13
  end
  return true
end

# c_d = ["7 of Diamonds", "7 of Spades", "7 of Hearts", "7 of Clubs"]
# c = "7 of hearts"

# p validCard?(c, c_d)
display_card(playerQty.to_i)
# binding.pry
