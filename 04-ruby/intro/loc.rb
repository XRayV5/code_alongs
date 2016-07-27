# $ ruby loc.rb hello_ruby.rb
#!/usr/bin/env ruby -wK

# file_path = ARGV[0] 

# file = File.open(file_path, "r")
# cnt=0

# file.each_line do |line|
# 	puts line
# 	cnt += 1
# end

# puts "#{cnt} lines of code."




# f_path = ARGV[0]

# fil = IO.readlines(f_path)

# puts fil.length


read_lath = ARGV[0]

puts IO.read(read_lath).split("\n").length


