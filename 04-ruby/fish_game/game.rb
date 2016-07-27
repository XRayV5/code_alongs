require 'pry'

fish = {
  name: 'fishy fish',
  health: '50',
  speed: 5,
}

fish2 = {
  name: 'fishy fish',
  health: 40,
  speed: 5
}

def create_fish(health, name = 'new fish')
  puts 'creating fish'
  new_fish = {
    name: name,
    health: health,
    speed: 5
  }

  return new_fish
end

def create_fish_improved(options)




  #puts options[:name]
  return {
    name: options[:name],
    health: options[:health],
    speed: 5
  }
end

class Fish

  #shortcut for writting getters and setters
  attr_accessor :name, :health

  def initialize(name = 'new fish')
    @name = name
    @health = 50
  end

  def sleep
    puts "Zzzzzz.."
    @health = @health + 5
  end

  def name #getter method
    return @name
  end

  def name=(new_name) # setter method
    @name = new_name
  end

end



#create_fish_improved({name: 'fish'})

binding pry
