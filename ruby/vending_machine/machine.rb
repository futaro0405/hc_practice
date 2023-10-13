require_relative './juice'
require_relative './suica'

class Machine
  @@pepsi   = Juice.new("pepsi", 150, 5)
  @@monster = Juice.new("monster", 230, 5)
  @@ilohas  = Juice.new("ilohas", 120, 5)
  @@juices = {
    pepsi: @@pepsi,
    monster: @@monster,
    ilohas: @@ilohas
  }
  @@sales = 0

  def initialize(suica)
    @suica = suica
  end

  def stock(name)
    @@juices[name.to_sym].stock
  end

  def list
    list = []
    @@juices.values.each do |juice|
      if juice.stock > 0
        list << juice.name
      end
    end

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

suica = Suica.new()
puts "現在の残高：#{suica.deposit}"
puts "SUICAに100円チャージ"
suica.charge(100)
puts "現在の残高：#{suica.deposit}"

puts "===================="
machine = Machine.new(suica)
puts "pepsiの在庫：#{machine.stock("pepsi")}"
puts "pepsiを購入する"
machine.buy("pepsi")
puts "pepsiの在庫：#{machine.stock("pepsi")}"
puts "売上金額：#{machine.sales} チャージ残高：#{suica.deposit}"
puts "商品のリスト："
machine.list