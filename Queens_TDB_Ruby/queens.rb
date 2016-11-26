require 'pry'

class Queens

  attr_accessor :black, :white

  def initialize(wb = {white: [0, 3], black: [7, 3]})
    @black = wb[:black]
    @white = wb[:white]

    if @black == @white
      raise ArgumentError
    end

  end

  def to_s
    arrX = []
    for i in (0...8)
      arrY = []
      for j in (0...8)
        arrY << "O"
      end
      arrX << arrY
    end
    arrX[@black[0]][@black[1]] = "B"
    arrX[@white[0]][@white[1]] = "W"
    strX = ""
    arrX.each do |y|
      # strX = strX + " "
      y.each_with_index do |cell, i|
        if(i != 7)
          strX = "#{strX}#{cell} "
        else
          strX = "#{strX}#{cell}"
        end
      end
      strX = strX + "\n"
    end
    strX = strX[0...strX.length-1]
  end

  def attack?
    x_b = @black[0]
    y_b = @black[1]
    x_w = @white[0]
    y_w = @white[1]

    # test y
    if (x_b == x_w)
      while y_b < 8
        if x_b == x_w && y_b == y_w
          return true
        end
        y_b +=1
      end

      while y_b >= 0
        if x_b == x_w && y_b == y_w
          return true
        end
        y_b -=1
      end

    # test x
    elsif(y_w == y_b)
      while x_b < 8
        if x_b == x_w && y_b == y_w
          return true
        end
        x_b +=1
      end

      while x_b >= 0
        if x_b == x_w && y_b == y_w
          return true
        end
        x_b -=1
      end

    elsif(x_b == y_b && x_w == y_w)
      # test diag
      while x_b < 8 && y_b < 8
        if x_b == x_w && y_b == y_w
          return true
        end
        x_b +=1
        y_b +=1
      end

      while x_b >= 0 && y_b >= 0
        if x_b == x_w && y_b == y_w
          return true
        end
        x_b -=1
        y_b -=1
      end
    elsif (x_b - y_b).abs == (x_w - y_w).abs
      while x_b < 8 && y_b < 8
        if x_b == x_w && y_b == y_w
          return true
        end
        x_b +=1
        y_b +=1
      end

      while x_b >= 0 && y_b >= 0
        if x_b == x_w && y_b == y_w
          return true
        end
        x_b -=1
        y_b -=1
      end

      x_b = @black[0]
      y_b = @black[1]
      x_w = @white[0]
      y_w = @white[1]
    #test reverse diag
      while x_b < 8 && y_b >= 0
        if x_b == x_w && y_b == y_w
          return true
        end
        x_b +=1
        y_b -=1
      end

      while x_b >= 0 && y_b < 8
        if x_b == x_w && y_b == y_w
          return true
        end
        x_b -=1
        y_b +=1
      end
    end

    return false
  end

end
