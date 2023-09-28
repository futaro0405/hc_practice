require 'date'
require 'optparse'

class Calendar
  DEFAULT_DATE = Date.today

  attr_reader :target_date

  def initialize(target_date = DEFAULT_DATE)
    @target_date = target_date
  end

  year = @target_date.year
  month = @target_date.month
  head = @target_date.strftime("%M月 %Y")
  week_display = %w(日 月 火 水 木 金 土)
  first_day = Date.new(year, month, 1)
  last_day = Date.new(year, month, -1)
  first_wday = first_day.wday

  puts head.center(20)
  puts week_display.join(" ")
  print "   " * first_wday
  (1..last_day).each do |day|
    print day.to_s.rjust(2)
    if (first_wday + day)%7 == 0
      puts "\n"
    else
      print " "
    end
  end
end

calendar = Calendar.new()
