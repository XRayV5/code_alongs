require 'pry'

class Scrabble
  attr_accessor :score
  def initialize(word)
    @score = calScrab(word)
  end

  def self.calScrab(str)
    scr = 0;
    probe1 = str.scan(/[AEIOULNRST]/i)#23458 10
    probe2 = str.scan(/[DG]/i)
    probe3 = str.scan(/[BCMP]/i)
    probe4 = str.scan(/[FHVWY]/i)
    probe5 = str.scan(/[K]/i)
    probe6 = str.scan(/[JX]/i)
    probe7 = str.scan(/[QZ]/i)
    if !probe1.empty?
      scr += probe1.length
    end
    if !probe2.empty?
      scr += probe2.length*2
    end
    if !probe3.empty?
      scr += probe3.length*3
    end
    if !probe4.empty?
      scr += probe4.length*4
    end
    if !probe5.empty?
      scr += probe5.length*5
    end
    if !probe6.empty?
      scr += probe6.length*8
    end
    if !probe7.empty?
      scr += probe7.length*10
    end
    scr
  end

end

binding.pry
