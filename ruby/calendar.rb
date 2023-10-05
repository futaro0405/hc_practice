require 'date'
require 'optparse'

class SetParams
  def initialize
    @options = {}
    OptionParser.new do |opt|
      opt.on('-y', '--year VAL', 'description:specify the display year') { |val| @options[:year] = val }
      opt.on('-m', '--month VAL', 'description:specify the display month') { |val| @options[:month] = val }
      opt.parse!(ARGV)
    end
  end

  # オプションが指定されたか
  def has?(option)
    @options.include(option)
  end

  # オプションのパラメータを取得
  def get(option)
    @options[option]
  end
end

class Calendar
  attr_reader :target_year, :target_month

  def initialize(target_year, target_month)
    @target_year = target_year
    @target_month = target_month
  end

  def judge(year, month)
    if year.negative? || year > 9999
      raise "#{year} is an invalid number (0..9999)"
    elsif month <= 0 || month > 12
      raise "#{month} is neither a month number (1..12) nor a name"
    end
  end

  def output
    judge(@target_year, @target_month)

    head = "#{@target_month}月 #{@target_year}"
    week_display = %w[月 火 水 木 金 土 日]
    first_day = Date.new(@target_year, @target_month, 1)
    last_day = Date.new(@target_year, @target_month, -1)
    first_wday = if first_day.sunday?
                   6
                 else
                   first_day.wday - 1
                 end

    puts head.center(20)
    puts week_display.join(' ')
    print '   ' * first_wday
    (1..last_day.day).each do |day|
      print day.to_s.rjust(2)
      if ((first_wday + day) % 7).zero?
        puts "\n"
      else
        print ' '
      end
    end
  end
end

option = SetParams.new
calendar = Calendar.new(
  (option.get(:year) || Date.today.year).to_i,
  (option.get(:month) || Date.today.month).to_i
)

calendar.output
