

def can_make_word word
    blocks = [['B','O'],
    ['X','K'],
    ['D','Q'],
    ['C','P'],
    ['N','A'],
    ['G','T'],
    ['R','E'],
    ['T','G'],
    ['Q','D'],
    ['F','S'],
    ['J','W'],
    ['H','U'],
    ['V','I'],
    ['A','N'],
    ['E','R'],
    ['F','S'],
    ['L','Y'],
    ['P','C'],
    ['Z','M']]
    puts word
    word.each_char{ |chr|
      if !testLetter chr, blocks
        return false
      end
    }
    return true
end


def testLetter letter, blocks
  result = []
  blocks.each{ |block|
    if block.include? letter.upcase
      idx = blocks.index(block)
      result << blocks.delete_at(idx)
      break
    end
  }
  if result == []
    return false
  else
    p result
    return true
  end
end



p can_make_word("A")
# => true
p can_make_word("BARK")
# => true
p can_make_word("BOOK")
# => false
p can_make_word("TREAT")
# => true
p can_make_word("COMMON")
# => false
p can_make_word("SQUAD")
# => true
p can_make_word("CONFUSE")
# => true
p can_make_word("BOUGHT")
# => false
p can_make_word("TEE")
# => true
