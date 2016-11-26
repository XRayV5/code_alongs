require 'pry'
require './school'

school = School.new('St.Harry')
#file = File.read('DB/St.TD.db')
#data_hash = JSON.parse(file)

school.addStudent('Sam',3)
school.addStudent('Ray',1)
school.addStudent('Dean',2)

school.addStudent('Anth',3)

school.grade(2)
school.grade(3)
school.sort
#binding pry
