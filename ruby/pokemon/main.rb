require_relative 'pokemon'

pikachu = Pikachu.new('ピカチュウ', "でんき", "", 100)
puts pikachu.attack
pikachu.change_name("あああ")
pikachu.change_name("テキセツ")
puts pikachu.get_name
