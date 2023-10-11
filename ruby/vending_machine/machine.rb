require_relative './juice'
require_relative './suica'

class Machine
  @@juice = [
    ["pepsi", 150, 5, 0],
    ["monster", 230, 5, 0],
    ["irohasu", 120, 5, 0]
  ]

  def initialize(suica)
    @suica = suica
  end

  def earnings(juice)
    @@goods[juice][1]
  end

  def list
    @@goods.map do |goods|
      puts goods
    end
  end



  def purchase(juice)
    if @@goods[juice][0].number < 1 || @suica.deposit < @@goods[juice][0].money
      return "Insufficient charge balance or out of stock"
    end

    @@goods[juice][0].number -= 1
    @@goods[juice][1] += @@goods[juice][0].money
    @suica.subtract(@@goods[juice][0].money)
  end
end
