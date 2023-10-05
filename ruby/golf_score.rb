class Golf
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

    if judge.negative?
      if judge.abs == 1
        "ボギー"
      else
        "#{judge.abs}ボギー"
      end
    elsif judge == 4 && par == 5
      "コンドル"
    elsif score == 1
      "ホールインワン"
    elsif judge == 3
      "アルバトロス"
    elsif judge == 2
      "イーグル"
    elsif judge == 1
      "バーディ"
    elsif judge.zero?
      "パー"
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
