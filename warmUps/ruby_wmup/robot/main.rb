require 'pry'
require './bot'


new_bot = Robot.new()

puts new_bot.name
puts new_bot.getMacName
puts new_bot.instr_cnt

new_bot.reset
puts new_bot.name
puts new_bot.getMacName
puts new_bot.instr_cnt
