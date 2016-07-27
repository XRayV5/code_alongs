require 'pry'
require './person'

File.open('people.csv','a+') do |file|

  print "input person and save file (y/n)"
  response = gets.chomp.downcase

  while response == 'y'
      print "Enter name, age, gender"
      file.puts gets.chomp
      print "Input person and save to file (y/n)"
      response = gets.chomp.downcase
  end


end

peopleArr = []

File.open('people.csv', 'r') do |file|
  file.each do |line|
    data = line.chomp.split(',')
    person = Person.new(data[0],data[1],data[2])
    peopleArr << person
  end
end

binding.pry
