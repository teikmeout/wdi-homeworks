class Apartment
  def initialize unit, num_beds, num_baths
    @unit = unit
    @num_beds = num_beds
    @num_baths = num_baths
    @tenants = []
    @price = num_beds * 1000 + num_baths * 500
  end

  #get methods
  def unit
    @unit
  end

  def num_beds
    @num_beds
  end

  def num_baths
    @num_baths
  end

  def price
    #1000 per beds
    #500 bathroom
    @price
  end

  #set methods
  def tenants= ten
    @tenants.push(ten)
  end

  # external methods
  def studio?
    if @num_beds < 2
      puts true
    else puts false
    end
  end

end # end of Apartment class
