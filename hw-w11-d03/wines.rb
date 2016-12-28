wine_cellar = [
  { :label => "Rutherford Hill", :type => "Chardonnay", :color => "red" },
  { :label => "Nina Veneto", :type => "Pinot Grigio", :color => "white" },
  { :label => "Wairau River", :type => "Sauvignon Blanc", :color => "white" },
  { :label => "Tangley Oaks", :type => "Merlot", :color => "red" },
  { :label => "Chimney Rock", :type => "cabernet Sauvignon", :color => "red" },
  { :label => "Sanford", :type => "Pinot Noir", :color => "red" },
  { :label => "Alderbrook", :type => "Pinot Noir", :color => "red" },
  { :label => "Colavita", :type => "Pinot Noir", :color => "red" },
  { :label => "Markham", :type => "Chardonnay", :color => "white" },
  { :label => "Angeline", :type => "Pinot Noir", :color => "red" }
]


saved_for_special_ocasion = wine_cellar[2]

swill = wine_cellar[3]

wine_cellar[0][:color] = "white"

wine_cellar.push({ :label => "takalaka", :type => "OG kush", :color => "very green"})
# this is a different way to write a HASH but with key:value pair notation like JS
wine_cellar.push({ label: "khalifa kush", type: "indica", color: "purple"})

def retrieves_random_wine_for_party(arrr)
  arrr.pop(rand(arrr.length))
  end

