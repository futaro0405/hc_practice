class Pokemon
  attr_accessor :type1, :type2, :hp

  def initialize(name, type1, type2, hp)
    @name = name
    @type1 = type1
    @type2 = type2
    @hp = hp
  end

  def change_name(new_name)
    if new_name == 'あああ'
      return puts '不適切な名前です'
    end

    @name = new_name
  end

  def get_name
    @name
  end

  def attack
    print "#{@name}のこうげき"
  end
end


class Pikachu < Pokemon
  alias :super_get_name :get_name

  def attack
    print "#{super_get_name}の10万ボルト"
  end
end
