require 'pry'
require  './barister'

ray = Barister.new('Expresso', 'no sugar', 'strong', 'Doris')
ray = Barister.new('latte', '1 sugar', 'strong', 'Tom')
ray = Barister.new('Long Black', '1 sugar', 'strong', 'Com')
#puts ray.to_s

cafe = Barister.toServe
puts cafe
binding pry
