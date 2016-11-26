require 'json'


class School
  attr_reader :name

  def initialize(sch_name)
     @name = sch_name
     @struct = {}
     file_name = "DB/" + sch_name + ".db"
     puts file_name
     File.open(file_name, 'a+') do |file|
       baseHash = {
         'school name' => sch_name,
         'structure' => {}
       }
       file.write(baseHash.to_json)
     end
  end

  #Create .db
  # def addSchool(sch_name)
  #
  # end

  def addStudent(stu_name, grd)
    file_name = "DB/" + @name + ".db"
    to_edit = File.read(file_name)
    File.open(file_name, 'w+') do |file|
      school = JSON.parse(to_edit)
      #students = []
      # #students << stu_name
      # if school['structure'][grd] != nil   #school['structure'][grd] || = []
      #     school['structure'][grd] << stu_name
      #     #puts "??????"
      # else
      #   students = []
      #   students << stu_name
      #   school['structure'][grd] = students
      # end
      school['structure'][grd.to_s] ||= []
      school['structure'][grd.to_s] << stu_name

      file.write(school.to_json)
    end
  end


  def grade grd
    file_name = "DB/" + @name + ".db"
    to_read = File.read(file_name)
    school = JSON.parse(to_read)
    school['structure'][grd]
  end

  def sort
    file_name = "DB/" + @name + ".db"
    to_read = File.read(file_name)
    school = JSON.parse(to_read)
    school['structure'] = school['structure'].sort.to_h
    puts school['structure']
  end
end
