=begin
Lunch Orders

It's approaching lunch hour… let's collect orders. Create a new file called lunch_orders.rb to complete this exercise.

Create a program that collects lunch orders. Prompt:
Name for order: (enter name)
{name} wants to order: (enter item)

Store the name/order data.
When storing data, do it in such a way that additional order items may be added for the person's name.

Example: Greg can order a Burger, and then add Fries to his order later.
After storing data, prompt the user with:
Add another item to the order? (y/n)
Repeat steps 1 & 2 if the answer is "y"
After the user completes adding orders, print out:
"All orders: {order data}"
Keep going...

Rather than printing out a blob of raw lunch order data, print each name's orders on a separate line, formatted as one of the following:

"Greg ordered a sandwich"
"Peter ordered a burger & fries"
"Travis ordered a salad, apple & water"
You may have to do some hunting in Ruby docs!
=end

require 'pry'

@order_list = {}
#@items = []


def ordering
  puts "Please enter your name:"
  name  = gets.chomp
  if name != 'break'
    puts "Name for order: #{name}"
    puts "Please order by entering the item name:"
    order  = gets.chomp
    processOrder(name,order)
    ordering()
  end
  puts "Session Terminated.."
end



def processOrder(name,order)
  #orderList = order_list
  items = []
  cnt = 0
  more = 'y'
  if cnt == 0
    @order_list[name] = items.push(order)
    cnt+=1
  end
    # if more == 'y

  while more != 'n'&&cnt!=0
    puts "Name for order: #{name}"
    if more != 'y'
      puts "Item not added. Pleae enter y/n only"
    end
    puts "Add another item to the order? (y/n)"
    more = gets.chomp
    if more == 'y'
      puts "Please order by entering the item name:"
      order  = gets.chomp
      @order_list[name].push(order)
      cnt+=1

      puts "#{name} ordered #{@order_list[name].join(', ')}"
      puts "total items on order: #{cnt}"
    end
  end
  printList(@order_list)
end

def printList(order_list)

  puts "All orders:"
  order_list.each do |name, items|
    itms = ""
    items.each do |itm|
      itms+=itm+" "
    end
    puts "#{name}:#{itms}"
  end
  puts "Keep going..."
end



ordering()
