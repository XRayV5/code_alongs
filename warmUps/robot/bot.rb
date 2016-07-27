require 'pry'

class Robot

  attr_accessor :name

  def initialize
    @instr_cnt = 0
    @name = genName()
    @mac_name = genMacName()
    @instr_cnt = 0
  end

  def genName
    @instr_cnt +=1
    name =(0...3).map { ('A'..'Z').to_a[rand(26)] }.join + (0...3).map { rand(0..9) }.join
  end

  def genMacName()
    @instr_cnt +=1
    mac_name = 'MAC'+ (0...3).map { rand(0..9) }.join
  end

  def reset()
    @instr_cnt +=1
    puts "Resetting to factory settings."
    new_name = genName()
    while @name == new_name do
      puts "Oops!"
      new_name = genName()
    end
    @name = new_name
  end

  def getMacName
    @instr_cnt +=1
    "#{@mac_name}"
  end
end
