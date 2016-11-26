def sum35(nb)
  listNum = []
      sum = 0;
  for i in 1...nb

    if i%3 == 0
      sum += i
      listNum << i
    elsif i%5 == 0
      sum += i
      listNum << i
    end
  end
  p listNum.to_s + " the sum is " + sum.to_s
  sum
end

sum35(18)
