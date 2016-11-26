require 'pry'

# def accum str
#   tmp = str.split("")
#   result = [];
#   tmp.each_with_index do |v, i|
#     str_tmp = v
#     j = 0
#     while j <= i
#       if j > 0
#         str_tmp += v.downcase
#         p str_tmp
#       else
#         str_tmp = str_tmp.upcase
#       end
#       j += 1
#     end
#     result << str_tmp
#   end
#   str = result.join("-")
# end

def accum str
  tmp = str.split("")
  result = [];
  binding.pry

  for i in 0...str.length
    str_tmp = str[i]
    j = 0

    if i == 0
      str_tmp = str_tmp.upcase
    else
      while j <= i
        if j > 0
          str_tmp += str[i].downcase
          p str_tmp
        else
          str_tmp = str_tmp.upcase
        end
        j += 1
      end
    end
    result << str_tmp
  end
  str = result.join("-")
end








p accum("abcde")
# p accumEx("abcde")
# --> "A-Bb-Ccc-Dddd"
