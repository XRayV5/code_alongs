


def romToArab num

  romanNums =  {
    'I' => 1,
    'V' => 5,
    'X' => 10,
    'L' => 50,
    'C' => 100,
    'D' => 500,
    'M' => 1000
  }

  arab = 0
  num.split('').each_with_index{
    |digit, index|

    if index+1 == num.length
      if romanNums[digit] > romanNums[num[index-1]]
        arab -= romanNums[digit]
      else
        arab += romanNums[digit]
      end
    elsif romanNums[digit] >= romanNums[num[index+1]]
      arab += romanNums[digit]
    else
      arab -= romanNums[digit]
    end

  }
  # p arab
  arab

end


#XXXIII 33
p romToArab 'XXXIII'
# XCVIII
p romToArab 'XCVIII'
# LXVIII
p romToArab 'LXVIII'
# LXXIV
p romToArab 'LXXIV'
