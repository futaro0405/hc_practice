require_relative 'juice'
require_relative 'suica'

class Machine
  def initialize(suica)
    @suica = suica
    @sales = 0
    @pepsi   = Juice.new("pepsi", 150)
    @monster = Juice.new("monster", 230)
    @ilohas  = Juice.new("ilohas", 120)
    @juices = {
      pepsi:   [@pepsi, 5],
      monster: [@monster, 5],
      ilohas:  [@ilohas, 5],
    }
  end

  def stock(name)
    @juices[name.to_sym][1]
  end

  def list
    list = []
    @juices.each_value do |juice|
      list.push(juice[0].name) if juice[1].positive? && @suica.deposit >= juice[0].money
    end

    return 'なし' if list.empty?

    list
  end

  def buy(name)
    return "Insufficient charge balance or out of stock" if @juices[name.to_sym][1] < 1 || @suica.deposit < @juices[name.to_sym][0].money

    @juices[name.to_sym][1] -= 1
    add_sales(@juices[name.to_sym][0].money)
  end

  def add_sales(sales)
    @sales += sales
    @suica.subtract(sales)
  end

  def sales
    @sales
  end
end