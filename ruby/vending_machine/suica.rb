class Suica
  INIT_DEPOST = 500

  def initialize
    @deposit = INIT_DEPOST
  end

  attr_reader :deposit

  def charge(money)
    raise "money:#{money} The amount is less than 100" if money < 100

    add(money)
  end

  def subtract(money)
    @deposit -= money
  end

  private

  def add(money)
    @deposit += money
  end
end
