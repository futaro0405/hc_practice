class Golf
  SCORE_LIST = {
    -1=> 'ボギー',
    0 => "パー",
    1 => "バーディー",
    2 => "イーグル",
    3 => "アルバトロス",
    4 => "コンドル"
  }

  def availability?(par, score)
    if par < 3 || par > 5
      raise "#{par} is an invalid value (3..5)"
    elsif score.negative?
      raise "#{score} is an invalid value (integer)"
    end
  end

  def check(par, score)
    availability?(par, score)
    judge = (par - score)

    if par != 5 && score == 1
      "ホールインワン"
    elsif judge <= -2
      "#{-1*judge}ボギー"
    else
      SCORE_LIST[judge]
    end
  end
end

number = []
ARGF.each do |line|
  number << line.chomp.split(",")
end

line1 = number[0]
line2 = number[1]
result = []

golf = Golf.new
i = 0
line1.each do
  result << golf.check(line1[i].to_i, line2[i].to_i)
  i += 1
end

p result.join(",")
