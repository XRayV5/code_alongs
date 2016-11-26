# What is 5 plus 13?

def calRegex str
  nums = str.scan(/-*\d+/)
  nums.inject(0){|sum,x| sum + x.to_i }
end


p calRegex ('What is 5 plus 13 plus -15?')
