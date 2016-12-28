class Tenant
  def initialize f_name, l_name, gender, born_on
    @f_name = f_name
    @l_name = l_name
    @born_on = born_on
    @gender = gender
    @nickname = ''
    @occupation = ''
  end

  # getter methods
  def nickname
    @nickname
  end

  def occupation
    @occupation
  end

  # set methods
  def occupation= occ
    @occupation = occ
  end

  def nickname= nick
    @nickname = nick
  end

  #external methods
  def full_name
    puts "#{@f_name} '#{@nickname != "" ? @nickname : ''}' #{@l_name}"
  end

end
