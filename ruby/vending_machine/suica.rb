class Suica
  INIT_DEPOST = 500

  def initialize
    @deposit = INIT_DEPOST
  end

  def charge(money)
    if money < 100
      raise "money:#{money} The amount is less than 100"
    end

    add(money)
  end

  def deposit
    @deposit
  end

  def subtract(money)
    @deposit -= money
  end

  private
  def add(money)
    @deposit += money
  end
end
