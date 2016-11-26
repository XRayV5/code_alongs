# Ermahgerd girl is ALWAYS very excited so everything needs to be in UPPERCASE!
# Each vowel should be replaced with: 'ER'
# Double "ER"s --->'ERER' and the letters 'ERH' should be replaced with just 'ER'
# The letters 'MY' (as a word or part of a word) should be replaced with: 'MAH'
# And to help with readability:
#
# Duplicate 'RR's should become a single 'R'
# After these steps are complete words longer than 4 letters that end in "ER" should have the "ER" trimmed off (the tricky bit is to make sure it can handle commas or spaces)



def toErmahgerd str
  str = str.upcase.gsub(/[AEIOU]/, 'ER').gsub(/ER/, 'ERER').gsub(/ERH/, 'ER').gsub(/MY/, 'MAH')
  # p str
  # str = str.gsub(/ER/, 'ERER')
end

p toErmahgerd "Duplicate 'RR's should become a single 'R'"
p toErmahgerd "Duplicate eh my"
