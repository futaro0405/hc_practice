require_relative 'machine.rb'

suica = Suica.new()
puts "現在の残高：#{suica.deposit}"
puts "SUICAにチャージ"
suica.charge(100)
puts "現在の残高：#{suica.deposit}"

puts "===================="
machine = Machine.new(suica)
puts "pepsiを購入する"
machine.buy("pepsi")
puts "pepsiの在庫：#{machine.stock("pepsi")}"
puts "===================="
puts "monsterを購入する"
machine.buy("monster")
puts "monsterの在庫：#{machine.stock("monster")}"
puts "===================="
puts "ilohasを購入する"
machine.buy("ilohas")
puts "ilohasの在庫：#{machine.stock("ilohas")}"
puts "===================="
puts "売上金額：#{machine.sales} チャージ残高：#{suica.deposit}"
puts "購入可能な商品のリスト："
puts machine.list
puts "購入できないためエラー：#{machine.buy("pepsi")}"