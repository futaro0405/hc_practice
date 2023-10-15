class Juice
  def initialize(name, money)
    @name = name
    @money = money
  end

  attr_reader :name, :money

  def sells
    @stock -= 1
  end
end
