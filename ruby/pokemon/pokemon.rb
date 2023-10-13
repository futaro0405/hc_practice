class Pokemon
  attr_accessor :type1, :type2, :heart
  attr_reader :name

  def initialize(name, type1, type2, heart)
    @name = name
    @type1 = type1
    @type2 = type2
    @heart = heart
  end

  def change_name(new_name)
    return puts '不適切な名前です' if new_name == 'うんこ'

    @name = new_name
  end

  def attack
    print "#{@name}のこうげき"
  end
end

class Pikachu < Pokemon
  def attack
    print "#{@name}の10万ボルト"
  end
end
