# local require for tenant
require_relative 'tenant'
require_relative 'apartment'

# trying out the tenant file
# p1 = Tenant.new("Calvin", "Clifford", "male", "December 21st, 1929")
# p1.nickname = "Bud"
# p1.full_name

#trying out the apartment file
# a1 = Apartment.new("B", 2, 1)
# a2 = Apartment.new("A", 2, 1)
# puts a2.price #=> "$2500"

# unit, num_beds, num_baths
a1 = Apartment.new("B", 2, 1)
a2 = Apartment.new("A", 1, 1)
a1.studio? #=> false
a2.studio? #=> true
