class Suica

  def initialize
    @deposit = 500
  end

  def charge(money)
    if money < 100
      raise "money:#{money} The amount is less than 100"
    end

    @deposit += money
  end

  def get
    @deposit
  end
end

class Juice
  def initialize(name, money, number)
    @name = name
    @money = money
    @number = number
  end

  def get_name
    @name
  end

  def get_money
    @money
  end

  def get_number
    @number
  end
end

class Machine
  
end

suica = Suica.news
pepsi = Juice.new("pepsi", 150, 5)
