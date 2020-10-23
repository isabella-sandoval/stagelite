@genres.each do |genre| 

  json.set! genre.id do
    json.id genre.id
    json.title genre.title
  end
  
end