class Juice

  def initialize(name, money, stock)
    @name = name
    @money = money
    @stock = stock
  end

  def name
    @name
  end

  def money
    @money
  end

  def stock
    @stock
  end

  def sells
    @stock -= 1
  end
end
