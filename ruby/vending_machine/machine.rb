require_relative 'juice'
require_relative 'suica'

class Machine
  def initialize(suica)
    @suica = suica
    @sales = 0
    @juices = {
      pepsi: @pepsi = Juice.new("pepsi", 150, 5),
      monster: @monster = Juice.new("monster", 230, 5),
      ilohas: @ilohas = Juice.new("ilohas", 120, 5)
    }
  end

  def stock(name)
    @juices[name.to_sym].stock
  end

  def list
    list = []
    @juices.each_value do |juice|
      list.push(juice.name) if juice.stock.positive? && @suica.deposit >= juice.money
    end

    return 'なし' if list.empty?

    list
  end

  def buy(name)
    return "Insufficient charge balance or out of stock" if @juices[name.to_sym].stock < 1 || @suica.deposit < @juices[name.to_sym].money

    @juices[name.to_sym].sells
    add_sales(@juices[name.to_sym].money)
  end

  def add_sales(sales)
    @sales += sales
    @suica.subtract(sales)
  end

  def sales
    @@sales
  end
