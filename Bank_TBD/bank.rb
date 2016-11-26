require 'pry'
module Bank
  class Account
    attr_accessor :account, :balance, :name
    def initialize acc={balance: 0, name: '1'}

      @balance = acc[:balance].to_i
      @name = acc[:name]


    end

    def deposit amount
      @balance += amount
    end
    def withdraw amount
      @balance -= amount
      if @balance < 0
        @balance += amount
        return false
      else
        return @balance
      end
    end
  end
end
