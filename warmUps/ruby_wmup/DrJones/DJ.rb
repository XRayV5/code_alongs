require 'pry'

def treasureFinder(field,bao)
	spots = []
	field.each_with_index do |section, i|

		section.each_with_index do |grid, j|
			if grid == bao
				spots << [i, j]
			end
		end
	end
	if spots.length > 1
		puts "This is a piece of garbage for Dr. Jones & Ray!"
	else	
		puts "The treasure is at gird #{spots[0][0]}, #{spots[0][1]}"
	end
end


map2 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","X","A","A","A"]
];

holyGrailMap = [
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","G","v","S","S"],
["v","v","H","v","S","S"],
["v","v","V","v","S","S"],
["A","V","A","A","A","S"]
];

treasureFinder(holyGrailMap, 'S')

treasureFinder(map2, 'X')