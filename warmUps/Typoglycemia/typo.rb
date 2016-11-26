require 'pry'
def typo str
  arr_str = str.split(" ");
  sentence = []
  arr_str.each do |word|
    puncs = word.scan(/[[:punct:]]+/)

    pure_arr = word.split(/[[:punct:]]+/)
    # p pure_arr
    pure = word.gsub(/[[:punct:]]+/, "")

    st = pure[0]

    if pure.length == 1
      ed = ""
    else
      ed = pure[pure.length-1]
    end

    new_str = st + pure[1..pure.length-2].split("").shuffle.join + ed
    # p new_str
    sentence << new_str
  end
  sentence.join(" ")
end

p typo "Accord'ing to, and research team at Cambridge University"

# /[:punct:]/


# --------Andrew's solution--------


class Typoglycemia
  def initialize()
    @str = ""
  end

  def jumble (str)
    result = []
    result = str.split
    result.each do |str|
      if str.length >= 4 && str[-1] != "." && str[-1] != ","
        letters = str.split("")[1..-2].shuffle.join
        letters = str[0] + letters + str[-1] + " "
        print letters
      elsif
        str.length >= 4 && str[-1] == "." || str[-1] == ","
        letters = str.split("")[1..-3].shuffle.join
        letters = str[0] + letters + str[-2] + str[-1] + " "
        print letters
      else
        print str + " "
      end
  end

  end
end

str = "According to a research team at Cambridge University, it doesn't matter in what order the letters in a word are, the only important thing is that the first and last letter be in the right place. The rest can be a total mess and you can still read it without a problem. This is because the human mind does not read every letter by itself, but the word as a whole. Such a condition is appropriately called Typoglycemia."

t = Typoglycemia.new
t.jumble(str)
