
# c1 = Coffee.new('latte','2 sugars','medium','Darryl')

#Write the .to_s method for this class so when you puts c1 you will have "Darryl's latte, medium, 2 sugars."


# Starbucks always gets names wrong, however. Make the name a bad misspelling of the actual name when you create the order.
# puts c1
# # => "Barrel's latte, medium, 2 sugars."
# When you make a new order, you have to wait for coffee. When you create the new order, there should be a waiting time of anywhere between 2-5 minutes. You should be able to check if it's ready by calling c1.ready? and have the program yell out the order and the misspelled name.
#
# You should be able to mark the coffee as collected with c1.collected = true.
#
# List all of the coffees not collected.
#
# Add options to the coffee order, eg shot of hazelnut, whipped cream, chocolate syrup.

# ObjectSpace.each_object(Project).count
# For completeness, here's how you would use that in your class (hat tip to sawa)
#
# class Project
#   # ...
#
#   def self.all
#     ObjectSpace.each_object(self).to_a
#   end
#
#   def self.count
#     all.count
#   end
# end



require 'pry'

class Barister
  attr_reader :collected
  def initialize(coffee, sugars, level, customer)
    @coffee = coffee
    @sugars = sugars
    @level = level
    @customer = mispell(customer)
    @timer = Time.now;
    @time_to_wait = rand(1..5);
    @collected = false;
    #@t = Time.new(0)
  end

  def mispell(customer)
    customer.gsub(/[aeiou]/,'x')
  end

  def ready
    t_Now = Time.now
    t_Now = t_Now - @timer
    if(t_Now >= @time_to_wait)
      return @collected = true
    else
      puts "Ready in #{(@time_to_wait - t_Now).ceil.to_s} seconds."
      return @collected
    end
  end

  def self.toServe
       ObjectSpace.each_object(self).select{|order| order.collected == false}
  end


  def to_s
    "#{@customer}'s #{@coffee}, #{@level}, #{@sugars}"
  end
end




# js solution
#
# function Coffee(type, sugars, size, name) {
#   this.type = type;
#   this.sugars = sugars;
#   this.size = size;
#   this.name = name;
#   this.ready = false;
#   this.startMakingMyCoffee();
# }
#
# Coffee.prototype.printOrder = function() {
#   console.log(this.name + '\'s ' + this.type + ', ' + this.size + ', ' + this.sugars + ' sugars.');
# };
#
# Coffee.prototype.startMakingMyCoffee = function() {
#   that = this;
#   setTimeout(function() {
#     console.log(that.name + '\'s coffee is ready!');
#     that.ready = true;
#   }, 10000);
# };
#
# //testing it
# // h = new Coffee('latte', '2', 'medium', 'Harry');
#
# // h.printOrder();



# require 'pry'
#
# class Coffee
#   # Class method to keep track of all coffees
#   @@all_coffees = []
#   # Cheater way to collect coffee
#   attr_accessor :collected
#
#   # Sets up the new coffee with arguments passed in
#   def initialize(coffee, sugars, size, name)
#     # Sets the new object's name to the misspelled version
#     @name = misspell(name)
#     @coffee = coffee
#     # Makes sure the sugar number is an integer
#     @sugars = sugars.to_i
#     @size = size
#     # Sets the order time to the creation date
#     @ordered_at = Time.now
#     # Sets the wait time to a random time between 2 and 5 mins in seconds
#     @wait_time = (160..300).to_a.sample
#     # Initializes the object as not collected
#     @collected = false
#     # Puts this coffee inside the class variable.
#     # self here refers to the new object.
#     @@all_coffees << self
#   end
#
#   # Method to check if coffee is ready
#   def ready?
#     # Checks if the time that ready? is called is passed the order time + wait time
#     if Time.now > @ordered_at + @wait_time
#       # Yells the order to collect
#       puts "#{@coffee} for #{@name}???".upcase
#       # Still returns true
#       true
#     else
#       # Else returns false
#       false
#     end
#   end
#
#   # Class method to be able to call Coffee.collected_list
#   # This makes more sense to call it on the class rather than the single coffee object
#   # self here refers to the class, not the object
#   def self.collected_list
#     @@all_coffees.select {|coffee| coffee.collected == true}
#   end
#
#   def self.not_collected_list
#     @@all_coffees.select {|coffee| coffee.collected == false}
#   end
#
#   # to_s method for human readble output to puts the object later
#   def to_s
#     "#{@name}'s #{@coffee}, #{@size}, #{@sugars} sugars."
#   end
#
#   # private means these methods will only be able to be used inside
#   private
#   def misspell(name)
#     name.gsub(/[aeiouy]/, %w(a e i o u y).sample)
#     # name.gsub(/^[aeiouy]/, %w(b c d f g h j k l m n p q r s t v w x y z).sample)
#   end
#
# end
#
# c1 = Coffee.new('latte','2 sugars','medium','Darryl')
# c2 = Coffee.new('flat white', 'no sugar', 'large', 'Mary-Louise')
# c3 = Coffee.new('short black', 'no sugar', 'short', 'Matt')
#
#
# # p c1
# puts c1
# puts c2
# puts c3
#
#
# binding.pry
