require_relative './juice'
require_relative './suica'

class Machine
  @@sales = 0
  @@juices = {
    pepsi:   @@pepsi   = Juice.new("pepsi", 150, 5),
    monster: @@monster = Juice.new("monster", 230, 5),
    ilohas:  @@ilohas  = Juice.new("ilohas", 120, 5)
  }

  def initialize(suica)
    @suica = suica
  end

  def stock(name)
    @@juices[name.to_sym].stock
  end

  def list
    list = []
    @@juices.values.each do |juice|
      if juice.stock > 0 && @suica.deposit >= juice.money
        list.push(juice.name)
      end
    end

    return 'なし' if list.size < 1
    list
  end

  def buy(name)
    if @@juices[name.to_sym].stock < 1 || @suica.deposit < @@juices[name.to_sym].money
      return "Insufficient charge balance or out of stock"
    end

    @@juices[name.to_sym].sells
    add_sales(@@juices[name.to_sym].money)
  end

  def add_sales(sales)
    @@sales += sales
    @suica.subtract(sales)
  end

  def sales
    @@sales
  end
end