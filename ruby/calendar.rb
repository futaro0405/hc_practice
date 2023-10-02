require 'date'
require 'optparse'

class SetParams
  def initialize
    @options = {}
    OptionParser.new do |opt|
      opt.on('-y', '--year VAL', 'description:specify the display year') { |val| @options[:year] = val}
      opt.on('-m', '--month VAL', 'description:specify the display month') { |val| @options[:month] = val}
      opt.parse!(ARGV)
    end
  end

  # オプションが指定されたか判定する
  def has?(option)
    @options.include(option)
  end

  # オプションのパラメータを取得
  def get(option)
    @options[option]
  end
end


option = SetParams.new
set_year = (option.get(:year) || Date.today.year).to_i
set_month = (option.get(:month) || Date.today.month).to_i

target_date = Date.new(set_year, set_month, 1)
year = target_date.year
month = target_date.month
head = target_date.strftime("%m月 %Y")
week_display = %w(日 月 火 水 木 金 土)

first_day = Date.new(year, month, 1)
last_day = Date.new(year, month, -1)
first_wday = first_day.wday

puts head.center(20)
puts week_display.join(" ")
print "   " * first_wday
(1..last_day.day).each do |day|
  print day.to_s.rjust(2)
  if (first_wday + day)%7 == 0
    puts "\n"
  else
    print " "
  end
end
