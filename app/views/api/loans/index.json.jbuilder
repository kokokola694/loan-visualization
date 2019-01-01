
@counts.each do |year_month, count|
  json.counts do
    json.set! year_month, count
  end
end
@averages.each do |year_month, average|
  json.averages do
    json.set! year_month, average
  end
end
