class Phone

  attr_accessor :number, :area_code

  def initialize(tel_entry)
    @number = clean(tel_entry)
    @area_code = getAreaCode(tel_entry)
  end

  def clean(tel)
    cleaned = tel.gsub!(/([() -.])/,'')
    if(cleaned == nil)
      cleaned = tel
    end
    cleaned = cleaned.to_s
    puts cleaned.length
    if cleaned[0] == '1' && cleaned.length == 11
       tail = cleaned.length
       cleaned = cleaned[1..tail]
    elsif cleaned.length >= 11||cleaned.length <= 9
       cleaned = "0000000000"
    end
    cleaned
  end

  def getAreaCode(tel)
    cleaned = clean(tel)
    area_code = cleaned[0..2]
  end

  def to_s
    nth = @number.length
    "(#{@number[0..2]}) #{@number[3..5]}-#{@number[6..nth]}"
  end
end

number = Phone.new("123456789").number
p number

number = Phone.new("1234567890").to_s
p number
