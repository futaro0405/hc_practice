class Juice
  def initialize(name, money, stock)
    @name = name
    @money = money
    @stock = stock
  end

  attr_reader :name, :money, :stock

  def sells
    @stock -= 1
  end
end
